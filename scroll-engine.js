/**
 * AGRI_TRADE_WEB — PREMIUM SCROLL SEQUENCE & GENERATIVE CANVAS ENGINE
 * 
 * Manages the high-performance background canvas on the landing page.
 * Detects if pre-rendered image frames are available in assets/frames/
 * and scrubs through them on scroll. If frames are not present (default),
 * it seamlessly runs a stunning procedural generative agricultural fallback:
 * An organic, real-time morphing topographic contour field with flowing 
 * glowing trade routes and drifting particulate atmospheric effects.
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
    
    // Generative fallback variables
    this.particles = [];
    this.routes = [];
    this.time = 0;
    this.scrollY = 0;
    this.targetScrollY = 0;
    
    // Initialization
    this.init();
  }

  async init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });

    // Check if frames are available by attempting to load the first frame
    const framesAvailable = await this.checkFramesAvailability();
    
    if (framesAvailable) {
      this.loadFrames();
    } else {
      // Initialize procedural generative terrain
      this.initGenerativeTerrain();
      this.animateGenerativeTerrain();
    }
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * window.devicePixelRatio;
    this.canvas.height = this.height * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    // Re-initialize particles relative to screen size if in generative mode
    if (!this.imagesLoaded && this.particles.length > 0) {
      this.initParticles(Math.floor(this.width / 15));
    }
  }

  handleScroll() {
    this.targetScrollY = window.scrollY;
    
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

  async checkFramesAvailability() {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = `${this.framePathPattern}001.jpg`;
      // Timeout after 800ms
      setTimeout(() => resolve(false), 800);
    });
  }

  loadFrames() {
    console.log("AgriTrade Scroll Sequence: Pre-rendered frames detected. Initializing sequence...");
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

  /* ═══════════════════════════════════════════════════════════════════
     PROCEDURAL GENERATIVE TERRAIN FALLBACK
     ═══════════════════════════════════════════════════════════════════ */
  initGenerativeTerrain() {
    console.log("AgriTrade Canvas Engine: Activating procedural generative contours fallback.");
    
    // Generate atmospheric drifting micro-particles
    this.initParticles(Math.floor(this.width / 15));
    
    // Define interactive node junctions representing mandi trading hubs
    this.initTradeHubs();
  }

  initParticles(count) {
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: -Math.random() * 0.4 - 0.1, // Drifting upwards
        alpha: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.4 ? '#4ADE80' : '#D4A853' // Emerald or Gold
      });
    }
  }

  initTradeHubs() {
    this.hubs = [];
    const numHubs = 5;
    for (let i = 0; i < numHubs; i++) {
      this.hubs.push({
        x: this.width * (0.15 + i * 0.18 + Math.random() * 0.05),
        y: this.height * (0.3 + Math.sin(i) * 0.2 + Math.random() * 0.1),
        radius: Math.random() * 6 + 4,
        pulseSpeed: 0.02 + Math.random() * 0.015,
        pulsePhase: Math.random() * Math.PI * 2,
        name: ['Kurnool Hub', 'Anantapur Market', 'Guntur Mandi', 'Nandyal Center', 'Adoni Yard'][i]
      });
    }
    
    // Create trade routes connecting hubs in a beautiful web
    this.routes = [];
    for (let i = 0; i < this.hubs.length; i++) {
      for (let j = i + 1; j < this.hubs.length; j++) {
        // Only connect neighboring hubs to keep the visual clean
        if (j - i <= 2) {
          this.routes.push({
            start: this.hubs[i],
            end: this.hubs[j],
            progress: Math.random(),
            speed: 0.002 + Math.random() * 0.003,
            color: Math.random() > 0.5 ? 'rgba(74,222,128,0.25)' : 'rgba(212,168,83,0.2)'
          });
        }
      }
    }
  }

  animateGenerativeTerrain() {
    this.time += 0.002;
    // Smooth scroll interpolation
    this.scrollY += (this.targetScrollY - this.scrollY) * 0.1;
    
    this.ctx.clearRect(0, 0, this.width, this.height);
    
    // Background wash: Deep forest green to dark emerald transition
    this.ctx.fillStyle = '#051910'; // Rich agricultural midnight green
    this.ctx.fillRect(0, 0, this.width, this.height);
    
    // Draw subtle grid mesh
    this.drawGrid();

    // Draw the fluid organic topographic terraces (contour lines)
    this.drawContours();

    // Draw connected trade routes & glowing trade flow pulses
    this.drawTradeNetwork();

    // Draw atmospheric particulate drift
    this.drawParticles();

    requestAnimationFrame(() => this.animateGenerativeTerrain());
  }

  drawGrid() {
    this.ctx.strokeStyle = 'rgba(27, 94, 59, 0.08)';
    this.ctx.lineWidth = 1;
    const gridSize = 80;
    
    // Vertical lines
    for (let x = 0; x < this.width; x += gridSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.height);
      this.ctx.stroke();
    }
    
    // Horizontal lines with scroll-aware offset
    const offset = (this.scrollY * 0.2) % gridSize;
    for (let y = -gridSize; y < this.height + gridSize; y += gridSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y + offset);
      this.ctx.lineTo(this.width, y + offset);
      this.ctx.stroke();
    }
  }

  // Draw elegant agricultural contours (like field terraces or waves of wind on crops)
  drawContours() {
    const numLines = 8;
    this.ctx.lineWidth = 1.5;
    
    for (let i = 0; i < numLines; i++) {
      const progress = i / numLines;
      
      // Calculate opacity that peaks in the middle and fades at boundaries
      const opacity = Math.sin(progress * Math.PI) * 0.12 * (1 - Math.min(this.scrollY / (this.height * 1.5), 1));
      
      this.ctx.strokeStyle = i % 2 === 0 
        ? `rgba(74, 222, 128, ${opacity})`  // Glow Emerald
        : `rgba(212, 168, 83, ${opacity * 0.8})`; // Glow Gold
        
      this.ctx.beginPath();
      
      const baseY = this.height * 0.35 + (i * 45) - (this.scrollY * 0.4);
      
      for (let x = -50; x < this.width + 50; x += 10) {
        // Multi-frequency wave calculation simulating organic land elevations
        const noiseVal = Math.sin(x * 0.002 + this.time + i) * 30 + 
                         Math.cos(x * 0.005 - this.time * 0.5 + i * 2) * 15 +
                         Math.sin(x * 0.001 - this.scrollY * 0.0015) * 45;
                         
        const y = baseY + noiseVal;
        
        if (x === -50) {
          this.ctx.moveTo(x, y);
        } else {
          this.ctx.lineTo(x, y);
        }
      }
      this.ctx.stroke();
    }
  }

  drawTradeNetwork() {
    const scrollFade = 1 - Math.min(this.scrollY / (this.height), 1);
    if (scrollFade <= 0) return;
    
    // Draw connections
    this.ctx.lineWidth = 1;
    this.routes.forEach(route => {
      this.ctx.strokeStyle = route.color;
      this.ctx.beginPath();
      this.ctx.moveTo(route.start.x, route.start.y - this.scrollY * 0.25);
      this.ctx.lineTo(route.end.x, route.end.y - this.scrollY * 0.25);
      this.ctx.stroke();
      
      // Update & Draw flowing data/trade pulse particle along the line
      route.progress += route.speed;
      if (route.progress > 1) {
        route.progress = 0;
        route.speed = 0.002 + Math.random() * 0.003;
      }
      
      const px = route.start.x + (route.end.x - route.start.x) * route.progress;
      const py = (route.start.y + (route.end.y - route.start.y) * route.progress) - this.scrollY * 0.25;
      
      // Draw pulse glow
      const grad = this.ctx.createRadialGradient(px, py, 0, px, py, 6);
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      grad.addColorStop(0.3, route.color.replace('0.25', '0.8').replace('0.2', '0.8'));
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      this.ctx.fillStyle = grad;
      this.ctx.beginPath();
      this.ctx.arc(px, py, 6, 0, Math.PI * 2);
      this.ctx.fill();
    });

    // Draw hubs
    this.hubs.forEach(hub => {
      const pulseSize = hub.radius + Math.sin(this.time * 15 + hub.pulsePhase) * 3;
      const y = hub.y - this.scrollY * 0.25;
      
      // Hub pulse ring
      this.ctx.strokeStyle = `rgba(74, 222, 128, ${0.15 * scrollFade})`;
      this.ctx.beginPath();
      this.ctx.arc(hub.x, y, pulseSize * 1.8, 0, Math.PI * 2);
      this.ctx.stroke();
      
      // Core hub point
      this.ctx.fillStyle = `rgba(212, 168, 83, ${0.85 * scrollFade})`; // Gold cores
      this.ctx.beginPath();
      this.ctx.arc(hub.x, y, hub.radius, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Subtle label
      this.ctx.fillStyle = `rgba(240, 247, 242, ${0.4 * scrollFade})`;
      this.ctx.font = `600 10px 'JetBrains Mono', monospace`;
      this.ctx.textAlign = 'center';
      this.ctx.fillText(hub.name.toUpperCase(), hub.x, y - hub.radius - 8);
    });
  }

  drawParticles() {
    this.particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      
      // Reset if offscreen
      if (p.y < -10) {
        p.y = this.height + 10;
        p.x = Math.random() * this.width;
      }
      if (p.x < -10 || p.x > this.width + 10) {
        p.x = Math.random() * this.width;
      }
      
      const opacity = p.alpha * (1 - Math.min(this.scrollY / (this.height * 1.2), 1));
      
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = Math.max(0, opacity);
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y - this.scrollY * 0.1, p.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
    this.ctx.globalAlpha = 1.0; // Reset global alpha
  }
}
