/**
 * AGRI_TRADE_WEB — PREMIUM SCROLL SEQUENCE ENGINE
 * 
 * Manages the high-performance background canvas on the landing page.
 * Scrubs through pre-rendered image frames on scroll.
 */

class ScrollCanvasEngine {
  constructor(canvasId, containerId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.container = document.getElementById(containerId);
    
    // Config
    this.totalFrames = 300; // Expected frames if available
    this.framePathPattern = './assets/frames/ezgif-frame-';
    this.imagesLoaded = false;
    this.images = [];
    this.currentFrameIndex = 0;
    
    // Initialization
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });

    // Load frames immediately without fallback checking
    this.loadFrames();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * window.devicePixelRatio;
    this.canvas.height = this.height * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  handleScroll() {
    if (this.imagesLoaded) {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = window.scrollY / (maxScroll || 1);
      // Limit sequence scrubbing to the hero and impact sections
      const heroHeight = window.innerHeight * 1.5;
      const activeScrollFraction = Math.min(window.scrollY / heroHeight, 1);
      
      const frameIndex = Math.min(
        this.totalFrames - 1,
        Math.floor(activeScrollFraction * this.totalFrames)
      );
      
      this.renderFrame(frameIndex);
    }
  }

  loadFrames() {
    console.log("AgriTrade Scroll Sequence: Loading frames...");
    let loadedCount = 0;
    let failedCount = 0;
    
    for (let i = 1; i <= this.totalFrames; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, '0');
      img.src = `${this.framePathPattern}${paddedIndex}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        // If we loaded at least 20 frames, we can start considering imagesLoaded = true so the user can scrub what's already there
        if (loadedCount >= 20 && !this.imagesLoaded) {
          this.imagesLoaded = true;
          this.renderFrame(0);
        }
        
        if (loadedCount + failedCount === this.totalFrames) {
          console.log(`AgriTrade Scroll Sequence: Loaded ${loadedCount}/${this.totalFrames} frames successfully.`);
          this.imagesLoaded = true;
        }
      };
      
      img.onerror = () => {
        failedCount++;
        // Gracefully allow failures
        if (loadedCount + failedCount === this.totalFrames) {
          console.log(`AgriTrade Scroll Sequence: Loading completed with errors. Loaded: ${loadedCount}, Failed: ${failedCount}`);
          this.imagesLoaded = true;
        }
      };
      
      this.images.push(img);
    }
  }

  renderFrame(index) {
    if (!this.images[index] || !this.images[index].complete) return;
    this.ctx.clearRect(0, 0, this.width, this.height);
    
    // Draw centered aspect-ratio cover image
    const img = this.images[index];
    const imgRatio = img.width / img.height;
    const canvasRatio = this.width / this.height;
    
    let drawWidth, drawHeight, drawX, drawY;
    if (imgRatio > canvasRatio) {
      drawHeight = this.height;
      drawWidth = this.height * imgRatio;
      drawX = (this.width - drawWidth) / 2;
      drawY = 0;
    } else {
      drawWidth = this.width;
      drawHeight = this.width / imgRatio;
      drawX = 0;
      drawY = (this.height - drawHeight) / 2;
    }
    
    this.ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    this.currentFrameIndex = index;
  }
}
