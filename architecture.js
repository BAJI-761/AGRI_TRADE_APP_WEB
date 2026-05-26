/**
 * AGRI_TRADE_WEB — TECHNICAL ARCHITECTURE INTERACTIVE SIMULATOR
 * 
 * Manages the Interactive Core System Diagram switcher and drives 
 * the Live B2B Transaction Flow Tracer diagnostic sandbox.
 */

// ── 1. Interactive Core System Diagram Data ──
const MODULE_DATA = {
  client: {
    num: "MODULE 01",
    title: "Flutter Client Application",
    tree: `lib/
├── screens/
│   ├── farmer/
│   │   ├── crop_upload.dart
│   │   └── soil_diagnostics.dart
│   └── retailer/
│       ├── bids_ledger.dart
│       └── orders_dashboard.dart
├── services/
│   ├── voice_service.dart
│   └── offline_service.dart
└── main.dart`,
    apis: [
      "<code>SmartCropEngine.predict()</code>: Client-side diagnostic logic weighing soil vectors (Black, Clay, Red) and water levels to calculate exact crop suitability matrices.",
      "<code>SQLiteOfflineQueue.push()</code>: Buffers crop upload operations and local B2B transaction records into localized database buffers during active connectivity dropouts."
    ],
    benefit: "<strong>Layer Benefit:</strong> Zero lag caching and localized processing allows farmers to operate securely inside deep rural terrain where mobile networks are unstable."
  },
  gateway: {
    num: "MODULE 02",
    title: "Twilio & Firebase Auth Secure Gateway",
    tree: `functions/
├── node_modules/
├── index.js          # Cloud Functions entry
├── package.json
└── security_rules/
    └── firestore.rules`,
    apis: [
      "<code>Twilio.sendOTP()</code>: Issues localized SMS authentication tokens to farmers requesting direct digital identity bindings.",
      "<code>AuthGateway.verifyClaims()</code>: Cryptographically checks Firebase identity tokens and custom claim hashes at system entry points."
    ],
    benefit: "<strong>Layer Benefit:</strong> Bulletproof role-based separation at database margins blocks illegal write exploits and prevents unauthorized wholesaler operations."
  },
  ai: {
    num: "MODULE 03",
    title: "Gemini Generative AI Intelligence Hub",
    tree: `ai_pipeline/
├── models/
│   └── prompt_templates.json
├── test/
│   └── audio_fixtures/
├── parser.py         # Gemini Flash engine
└── requirements.txt`,
    apis: [
      "<code>GeminiModel.generateContent()</code>: Integrates unstructured acoustics and rural dialects with focused JSON schema instruction prompts.",
      "<code>IntentExtractor.parse()</code>: Splits parsed texts into structured B2B commands like <code>SELL_CROP</code>, crop parameters, weights, and expectations."
    ],
    benefit: "<strong>Layer Benefit:</strong> Hands-free conversational operating boundaries lower technical adoption barriers for 100M+ vernacular-only village operators."
  },
  database: {
    num: "MODULE 04",
    title: "Decentralized Database Sync Container",
    tree: `firestore/
├── collections/
│   ├── users/
│   ├── mandi_listings/
│   └── escrow_contracts/
└── indexes.json      # Single & composite index mappings`,
    apis: [
      "<code>FirestoreSyncPipe.commit()</code>: Automatically ingests buffered offline queue operations as soon as localized network connections recover.",
      "<code>CompositeQuery.fetch()</code>: Supports high-performance bid scrollers and active auction updates with multi-parameter filtering."
    ],
    benefit: "<strong>Layer Benefit:</strong> Real-time reactive data pipelines reflect bid updates, order acceptances, and ledger balances across client nodes in under 80ms."
  },
  escrow: {
    num: "MODULE 05",
    title: "Razorpay Direct B2B Escrow Ledger",
    tree: `settlements/
├── contracts/
│   └── P2PEscrowLedger.js
├── webhooks/
│   └── payment_handler.js
└── razorpay_config.json`,
    apis: [
      "<code>RazorpayEscrow.lockFunds()</code>: Securely secures buyer bidding payments inside localized platform escrow accounts.",
      "<code>DirectUPISettlement.release()</code>: Triggers direct bank-to-bank UPI transfers immediately after delivery scanning validation."
    ],
    benefit: "<strong>Layer Benefit:</strong> Holds wholesalers accountable, protects farmers from defaults, and creates trust during long-distance crop transport flows."
  }
};

// ── 2. Live B2B Transaction Flow Tracer Diagnostics Logger Logs ──
const FLOW_STEPS_LOGS = [
  {
    step: 1,
    sync: "LOCAL // CAPTURING",
    cache: "1 BUFFER QUEUED",
    ping: "0ms (LOCAL)",
    status: "STAGE 01 // VERB RECORD",
    log: `agritrade-console$ recorder_init.sh --device=mic_01 --rate=16000
[INFO] Recording voice capture stream...
[INFO] Capturing regional Telugu village accent...
>> Farmer Speech Input: "రబీ సీజన్‌లో నల్లరేగడి నేలలో ఏ పంట వేయాలి? 400 కేజీల వరి లోడ్ అప్‌లోడ్ చెయ్."
[SUCCESS] Voice snippet written locally to /tmp/mic_capture_4102.wav (3.2 seconds)`
  },
  {
    step: 2,
    sync: "VERIFYING // EN ROUTE",
    cache: "1 BUFFER QUEUED",
    ping: "45ms (TWILIO)",
    status: "STAGE 02 // SECURE GATE",
    log: `agritrade-console$ twilio_sms_verify.sh --phone=+919442104102
[INFO] Requesting secure transaction validation OTP signature...
[SMS] OTP Challenge Code issued to device index [+91-XXXXXX4102]
[INFO] Verifying response token [883012] against Firestore rules
[SUCCESS] Session verified. Firebase Token Signature matches cryptographically.`
  },
  {
    step: 3,
    sync: "PROCESSING // AI HUB",
    cache: "1 BUFFER QUEUED",
    ping: "240ms (GEMINI-FLASH)",
    status: "STAGE 03 // GEMINI NLU",
    log: `agritrade-console$ python gemini_parser.py --audio=/tmp/mic_capture_4102.wav
[INFO] Dispatching payload to Gemini NLU Core pipeline...
[AI] Running zero-shot NLU dialect parsing...
[AI] Gemini Response Code: 200 OK
[JSON] Result payload extracted:
{
  "intent": "SELL_CROP_AND_DIAGNOSTICS",
  "parameters": {
    "soil_type": "Black Clay",
    "season": "Rabi",
    "crop_type": "Rice Paddy",
    "quantity_kg": 400,
    "target_rate_per_kg": 24.50
  }
}`
  },
  {
    step: 4,
    sync: "OFFLINE // STACK SAVED",
    cache: "1 BUFFER QUEUED",
    ping: "0ms (OFFLINE)",
    status: "STAGE 04 // SQLITE SAVE",
    log: `agritrade-console$ dart offline_queue.dart --sync=check
[WARNING] Mobile Carrier Signal Strength < 10% (OFFLINE)
[INFO] Local SQLite Caching Engine activated...
[SQL] INSERT INTO offline_queue (id, path, payload) VALUES (
  "tx_9921",
  "/mandi_listings",
  "{\\"cropType\\":\\"Rice Paddy\\",\\"qty\\":400,\\"rate\\":24.50}"
);
[SUCCESS] Saved 1 transaction buffer. Network status: OFFLINE. Ping: 0ms.`
  },
  {
    step: 5,
    sync: "ONLINE // SYNC FLUSH",
    cache: "0 QUEUED",
    ping: "38ms (FIRESTORE)",
    status: "STAGE 05 // CLOUD SYNC",
    log: `agritrade-console$ dart offline_queue.dart --sync=flush
[INFO] Mobile Carrier Restored. Network status: ONLINE. Ping: 38ms.
[INFO] Committing 1 buffered SQLite transaction to Firestore...
[DATABASE] Firestore write committed successfully inside transaction pool.
[DATABASE] Updated collection: /mandi_listings/tx_9921/
[SUCCESS] SQLite Cache flushed. Buffer queue: 0.`
  },
  {
    step: 6,
    sync: "ONLINE // SETTLED",
    cache: "0 QUEUED",
    ping: "65ms (RAZORPAY)",
    status: "STAGE 06 // ESCROW LOCKED",
    log: `agritrade-console$ node settlements/P2PEscrowLedger.js --listing=tx_9921
[INFO] Wholesaler accepted bid of ₹9,800. Locking funds...
[PAYMENT] Creating secure Razorpay Escrow contract ID: razor_escrow_8820
[ESCROW] Value: ₹9,800 locked inside peer-to-peer ledger.
[INFO] QR Dispatch Scan verified on transport release.
[SETTLEMENT] Disbursing ₹9,800 to farmer account directly via UPI Settlement.
[SUCCESS] Transaction settlement fully complete. Pipeline trace ended.`
  }
];

document.addEventListener("DOMContentLoaded", () => {
  
  // ── 3. Interactive Blueprint Modules grid Switcher ──
  const blueprintCards = document.querySelectorAll(".blueprint-card");
  const detModuleNum = document.getElementById("det-module-num");
  const detModuleTitle = document.getElementById("det-module-title");
  const detModuleTree = document.getElementById("det-module-tree");
  const detModuleApis = document.getElementById("det-module-apis");
  const detModuleBenefit = document.getElementById("det-module-benefit");

  function activateBlueprintModule(card) {
    if (!card) return;
    
    // Remove active styling from all triggers
    blueprintCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    
    // Swapping database parameters
    const key = card.dataset.module;
    const data = MODULE_DATA[key];
    
    if (data) {
      detModuleNum.innerText = data.num;
      detModuleTitle.innerText = data.title;
      detModuleTree.innerText = data.tree;
      
      // Populate APIs list
      detModuleApis.innerHTML = data.apis.map(api => `<li>${api}</li>`).join("");
      detModuleBenefit.innerHTML = data.benefit;
    }
  }

  blueprintCards.forEach(card => {
    card.addEventListener("click", () => activateBlueprintModule(card));
    card.addEventListener("mouseenter", () => activateBlueprintModule(card));
    
    // Mouse coordinated spotlights follow glow effect
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });

  // ── 4. Soundwave Visualizer Canvas Drawer ──
  const soundwaveCanvas = document.getElementById("canvas-soundwave");
  let soundwaveCtx = null;
  let soundwaveAnimFrame = null;
  let waveTime = 0;

  if (soundwaveCanvas) {
    soundwaveCtx = soundwaveCanvas.getContext("2d");
  }

  function startSoundwaveAnimation() {
    if (!soundwaveCtx) return;
    
    function draw() {
      soundwaveCtx.clearRect(0, 0, soundwaveCanvas.width, soundwaveCanvas.height);
      waveTime += 0.08;
      
      // Draw three overlapping waves
      drawWave(soundwaveCtx, soundwaveCanvas.width, soundwaveCanvas.height, 4, "#10B981", 0.75, 2.5);  // Primary emerald
      drawWave(soundwaveCtx, soundwaveCanvas.width, soundwaveCanvas.height, 2, "#F59E0B", 0.45, 1.8);  // Accent gold
      drawWave(soundwaveCtx, soundwaveCanvas.width, soundwaveCanvas.height, 6, "#34D399", 0.5, 3.2);   // Primary light emerald
      
      soundwaveAnimFrame = requestAnimationFrame(draw);
    }
    
    draw();
  }

  function drawWave(ctx, w, h, amplitude, color, opacity, speedFactor) {
    ctx.strokeStyle = color;
    ctx.globalAlpha = opacity;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    
    const midY = h / 2;
    ctx.moveTo(0, midY);
    
    for (let x = 0; x < w; x++) {
      // Calculate a beautiful mathematical voice envelope
      const envelope = Math.sin((x / w) * Math.PI); // Pinches waves at endpoints
      const y = midY + Math.sin(x * 0.04 - waveTime * speedFactor) * amplitude * 12 * envelope;
      ctx.lineTo(x, y);
    }
    
    ctx.stroke();
    ctx.globalAlpha = 1.0;
  }

  function stopSoundwaveAnimation() {
    if (soundwaveAnimFrame) {
      cancelAnimationFrame(soundwaveAnimFrame);
      soundwaveAnimFrame = null;
    }
  }

  // ── 5. Transaction Flow Simulation Engine & Log Typewriter ──
  const btnTriggerFlow = document.getElementById("btn-trigger-flow");
  const tracerStatus = document.getElementById("tracer-status");
  const terminalText = document.getElementById("flow-terminal-text");
  
  const termSync = document.getElementById("term-sync");
  const termCache = document.getElementById("term-cache");
  const termPing = document.getElementById("term-ping");
  
  const timelineSteps = document.querySelectorAll(".tracer-timeline-step");
  const visualScreens = document.querySelectorAll(".visualizer-screen");
  const escrowLock = document.getElementById("escrow-lock-anim");

  let activePipelineInterval = null;
  let pipelineStepIndex = 0;

  function typewriteLogBlock(fullLogText, onComplete) {
    if (!terminalText) return;
    
    terminalText.innerHTML = "";
    const lines = fullLogText.split("\n");
    let currentLine = 0;
    
    function writeNextLine() {
      if (currentLine < lines.length) {
        let lineContent = lines[currentLine];
        
        // Dynamic ANSI-style markup translations for elite formatting
        lineContent = lineContent
          .replace(/(agritrade-console\$ [^\n]+)/g, '<span class="code-keyword">$1</span>')
          .replace(/(\[INFO\])/g, '<span class="code-type">$1</span>')
          .replace(/(\[SUCCESS\])/g, '<span class="code-string">$1</span>')
          .replace(/(\[WARNING\])/g, '<span class="code-keyword" style="color: #EF4444;">$1</span>')
          .replace(/(\[DATABASE\]|\[ESCROW\]|\[PAYMENT\]|\[SETTLEMENT\]|\[SMS\])/g, '<span class="code-function">$1</span>')
          .replace(/(\[AI\]|\[SQL\])/g, '<span class="code-type" style="color: #60A5FA;">$1</span>')
          .replace(/(\/\/ [^\n]+)/g, '<span class="code-comment">$1</span>');
          
        terminalText.innerHTML += lineContent + "\n";
        
        // Auto-scroll terminal
        const termBody = terminalText.parentElement.parentElement;
        termBody.scrollTop = termBody.scrollHeight;
        
        currentLine++;
        setTimeout(writeNextLine, 60); // 60ms delay per line
      } else {
        if (onComplete) onComplete();
      }
    }
    
    writeNextLine();
  }

  function advancePipelineStep() {
    if (pipelineStepIndex >= FLOW_STEPS_LOGS.length) {
      // Completed full simulation
      clearInterval(activePipelineInterval);
      activePipelineInterval = null;
      
      tracerStatus.innerText = "COMPLETED";
      tracerStatus.className = "tracer-status-badge";
      btnTriggerFlow.disabled = false;
      
      // Stop animation
      stopSoundwaveAnimation();
      return;
    }
    
    const stage = FLOW_STEPS_LOGS[pipelineStepIndex];
    
    // 1. Highlight Timeline
    timelineSteps.forEach(step => {
      if (parseInt(step.dataset.step) === stage.step) {
        step.classList.add("active");
        step.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        step.classList.remove("active");
      }
    });
    
    // 2. Swapping Visual screens
    visualScreens.forEach(screen => screen.classList.remove("active"));
    stopSoundwaveAnimation();
    
    if (stage.step === 1) {
      document.getElementById("viz-speech").classList.add("active");
      startSoundwaveAnimation();
    } else if (stage.step === 2) {
      document.getElementById("viz-auth").classList.add("active");
    } else if (stage.step === 3) {
      document.getElementById("viz-ai").classList.add("active");
    } else if (stage.step === 4) {
      document.getElementById("viz-cache").classList.add("active");
      const badge = document.getElementById("viz-conn-badge");
      if (badge) {
        badge.innerText = "PING: 0ms (OFFLINE)";
        badge.className = "connection-status-badge offline";
      }
    } else if (stage.step === 5) {
      document.getElementById("viz-cloud").classList.add("active");
    } else if (stage.step === 6) {
      document.getElementById("viz-escrow").classList.add("active");
      if (escrowLock) {
        escrowLock.innerText = "🔒";
        escrowLock.className = "viz-lock-icon locked";
        setTimeout(() => {
          escrowLock.innerText = "🔓";
          escrowLock.className = "viz-lock-icon";
        }, 1800); // Snap open lock after 1.8 seconds
      }
    }
    
    // 3. Update Telemetry metrics
    if (termSync) {
      termSync.innerText = stage.sync;
      if (stage.step === 6) termSync.className = "tele-val text-green";
      else if (stage.step === 4) termSync.className = "tele-val text-gold";
      else termSync.className = "tele-val";
    }
    if (termCache) termCache.innerText = stage.cache;
    if (termPing) termPing.innerText = stage.ping;
    
    // 4. Update Status Badge text
    tracerStatus.innerText = stage.status;
    
    // 5. Typewrite console outputs
    typewriteLogBlock(stage.log);
    
    pipelineStepIndex++;
  }

  if (btnTriggerFlow) {
    btnTriggerFlow.addEventListener("click", () => {
      // Prevent double trigger conflicts
      btnTriggerFlow.disabled = true;
      tracerStatus.innerText = "DIAGNOSTIC RUNNING";
      tracerStatus.className = "tracer-status-badge active";
      
      // Reset index counters
      pipelineStepIndex = 0;
      
      // Run first step instantly
      advancePipelineStep();
      
      // Advance step every 3.8 seconds to allow full log typing readouts
      activePipelineInterval = setInterval(advancePipelineStep, 3800);
    });
  }

  // Bind mouse spotlights details for timeline items
  timelineSteps.forEach(step => {
    // Add manual trigger on click
    step.addEventListener("click", () => {
      if (activePipelineInterval) {
        // Halt automatic flow tracer when manually selecting step
        clearInterval(activePipelineInterval);
        activePipelineInterval = null;
        btnTriggerFlow.disabled = false;
        tracerStatus.innerText = "MANUAL ACTIVE";
        tracerStatus.className = "tracer-status-badge";
      }
      
      const stepVal = parseInt(step.dataset.step) - 1;
      pipelineStepIndex = stepVal;
      advancePipelineStep();
      
      // Avoid looping
      if (activePipelineInterval) {
        clearInterval(activePipelineInterval);
        activePipelineInterval = null;
      }
      tracerStatus.innerText = "STEP 0" + (stepVal + 1) + " ACTIVE";
    });
  });

  // Initialize background canvas
  const bgCanvas = document.getElementById("arch-scroll-canvas");
  if (bgCanvas) {
    window.blueprintBG = new BlueprintBackgroundCanvasEngine(bgCanvas);
  }
});

class BlueprintBackgroundCanvasEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    
    this.particles = [];
    this.conduits = [];
    this.hubs = [];
    this.routes = [];
    this.pulseTime = 0;
    this.scrollY = 0;
    this.targetScrollY = 0;
    
    // Mouse tracking with soft interpolations
    this.mouseX = -2000;
    this.mouseY = -2000;
    this.targetMouseX = -2000;
    this.targetMouseY = -2000;
    
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener("resize", () => this.resize());
    window.addEventListener("scroll", () => {
      this.targetScrollY = window.scrollY;
    }, { passive: true });

    window.addEventListener("mousemove", (e) => {
      this.targetMouseX = e.clientX;
      this.targetMouseY = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
      this.targetMouseX = -2000;
      this.targetMouseY = -2000;
    });

    // Populate blueprint network conduits, interactive waves, organic contours, and digital dust
    this.initNetworkTopology();
    this.initTradeHubs();
    this.initBinaryDrift(Math.floor(window.innerWidth / 7)); // Rich particle density

    // Begin render frame loop
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * window.devicePixelRatio;
    this.canvas.height = this.height * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    if (this.particles.length > 0) {
      this.initBinaryDrift(Math.floor(this.width / 7));
    }
  }

  initNetworkTopology() {
    this.conduits = [];
    const numConduits = 20;
    
    // Create random intersecting horizontal and vertical coordinate lines
    for (let i = 0; i < numConduits; i++) {
      const isVertical = Math.random() > 0.5;
      if (isVertical) {
        this.conduits.push({
          x: this.width * (0.05 + (i / numConduits) * 0.9),
          startY: -200,
          endY: this.height * 4.0,
          isVertical: true,
          pulseProgress: Math.random(),
          pulseSpeed: 0.004 + Math.random() * 0.005,
          color: Math.random() > 0.4 ? "rgba(16, 185, 129, 0.22)" : "rgba(245, 158, 11, 0.16)"
        });
      } else {
        this.conduits.push({
          y: this.height * (0.15 + Math.random() * 3.5),
          startX: -200,
          endX: this.width + 200,
          isVertical: false,
          pulseProgress: Math.random(),
          pulseSpeed: 0.003 + Math.random() * 0.006,
          color: Math.random() > 0.4 ? "rgba(16, 185, 129, 0.22)" : "rgba(245, 158, 11, 0.16)"
        });
      }
    }
  }

  initTradeHubs() {
    this.hubs = [
      { x: 0.12, y: 0.38, label: "MOBILE CLIENT HUB", size: 7 },
      { x: 0.32, y: 0.22, label: "SECURE OTP AUTH GATE", size: 7 },
      { x: 0.50, y: 0.45, label: "GEMINI COGNITIVE NLU", size: 10 },
      { x: 0.68, y: 0.28, label: "FIRESTORE CLOUD MATRIX", size: 8 },
      { x: 0.88, y: 0.40, label: "RAZORPAY PEER LEDGER", size: 9 }
    ];
    
    this.routes = [
      { start: 0, end: 1, color: "rgba(16, 185, 129, 0.55)", progress: 0.1, speed: 0.005 },
      { start: 1, end: 2, color: "rgba(245, 158, 11, 0.45)", progress: 0.45, speed: 0.006 },
      { start: 2, end: 3, color: "rgba(16, 185, 129, 0.55)", progress: 0.8, speed: 0.004 },
      { start: 3, end: 4, color: "rgba(245, 158, 11, 0.45)", progress: 0.3, speed: 0.007 }
    ];
  }

  initBinaryDrift(count) {
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height * 4.0,
        val: Math.random() > 0.65 ? (Math.random() > 0.5 ? "1" : "0") : (Math.random() > 0.5 ? "•" : "+"),
        size: Math.random() * 12 + 8,
        speedY: -(Math.random() * 0.55 + 0.25),
        speedX: (Math.random() - 0.5) * 0.18,
        opacity: Math.random() * 0.55 + 0.25,
        driftPhase: Math.random() * Math.PI * 2,
        colorType: Math.random() > 0.4 ? "emerald" : "gold"
      });
    }
  }

  animate() {
    this.pulseTime += 0.015;
    
    // Smooth interpolations
    this.scrollY += (this.targetScrollY - this.scrollY) * 0.08;
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.1;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.1;

    this.ctx.clearRect(0, 0, this.width, this.height);
    
    // Deep dark console background fill
    this.ctx.fillStyle = "#060B13";
    this.ctx.fillRect(0, 0, this.width, this.height);
    
    // Draw all layers sequentially
    this.drawGrid();
    this.drawConduits();
    this.drawTradeNetwork();
    this.drawParticles();
    this.drawSpotlightHUD();

    requestAnimationFrame(() => this.animate());
  }

  drawGrid() {
    this.ctx.lineWidth = 1;
    const gridSize = 64;
    const scrollOffset = (this.scrollY * 0.35) % gridSize;
    
    // Interactive Grid Lensing: subtly bend grid intersections near the mouse
    for (let x = 0; x < this.width + gridSize; x += gridSize) {
      this.ctx.beginPath();
      for (let y = -gridSize; y < this.height + gridSize; y += 12) {
        const finalY = y - scrollOffset;
        
        let dx = x - this.mouseX;
        let dy = finalY - this.mouseY;
        let dist = Math.sqrt(dx * dx + dy * dy);
        
        let ox = 0;
        if (dist < 200) {
          const force = (200 - dist) * 0.15;
          ox = (dx / dist) * force; // Bend grid lines away from cursor
        }
        
        // Dynamic grid opacity
        this.ctx.strokeStyle = dist < 220 
          ? `rgba(16, 185, 129, ${0.07 + (1 - dist/220) * 0.25})` 
          : "rgba(255, 255, 255, 0.03)";
          
        if (y === -gridSize) {
          this.ctx.moveTo(x + ox, finalY);
        } else {
          this.ctx.lineTo(x + ox, finalY);
        }
      }
      this.ctx.stroke();
    }
    
    for (let y = -gridSize; y < this.height + gridSize; y += gridSize) {
      const finalY = y - scrollOffset;
      this.ctx.beginPath();
      for (let x = -gridSize; x < this.width + gridSize; x += 12) {
        let dx = x - this.mouseX;
        let dy = finalY - this.mouseY;
        let dist = Math.sqrt(dx * dx + dy * dy);
        
        let oy = 0;
        if (dist < 200) {
          const force = (200 - dist) * 0.15;
          oy = (dy / dist) * force; // Bend horizontal lines
        }
        
        this.ctx.strokeStyle = dist < 220 
          ? `rgba(16, 185, 129, ${0.07 + (1 - dist/220) * 0.25})` 
          : "rgba(255, 255, 255, 0.03)";
          
        if (x === -gridSize) {
          this.ctx.moveTo(x, finalY + oy);
        } else {
          this.ctx.lineTo(x, finalY + oy);
        }
      }
      this.ctx.stroke();
    }
  }

  drawConduits() {
    const scrollOffset = this.scrollY * 0.3;
    
    this.conduits.forEach(conduit => {
      this.ctx.strokeStyle = conduit.color;
      this.ctx.lineWidth = 1.5;
      
      if (conduit.isVertical) {
        const startY = conduit.startY - scrollOffset;
        const endY = conduit.endY - scrollOffset;
        
        if (startY > this.height || endY < 0) return;
        
        this.ctx.beginPath();
        this.ctx.moveTo(conduit.x, startY);
        this.ctx.lineTo(conduit.x, endY);
        this.ctx.stroke();
        
        // Laser signal pulse
        conduit.pulseProgress += conduit.pulseSpeed;
        if (conduit.pulseProgress > 1.2) {
          conduit.pulseProgress = -0.2;
          conduit.pulseSpeed = 0.004 + Math.random() * 0.005;
        }
        
        const pulseY = startY + (endY - startY) * Math.max(0, Math.min(1, conduit.pulseProgress));
        
        if (pulseY >= 0 && pulseY <= this.height) {
          const grad = this.ctx.createRadialGradient(conduit.x, pulseY, 0, conduit.x, pulseY, 10);
          grad.addColorStop(0, "rgba(255, 255, 255, 1)");
          grad.addColorStop(0.3, "rgba(16, 185, 129, 0.95)");
          grad.addColorStop(1, "rgba(0, 0, 0, 0)");
          
          this.ctx.fillStyle = grad;
          this.ctx.beginPath();
          this.ctx.arc(conduit.x, pulseY, 10, 0, Math.PI * 2);
          this.ctx.fill();
        }
      } else {
        const y = conduit.y - scrollOffset;
        
        if (y > this.height || y < 0) return;
        
        this.ctx.beginPath();
        this.ctx.moveTo(conduit.startX, y);
        this.ctx.lineTo(conduit.endX, y);
        this.ctx.stroke();
        
        // Laser signal pulse
        conduit.pulseProgress += conduit.pulseSpeed;
        if (conduit.pulseProgress > 1.2) {
          conduit.pulseProgress = -0.2;
          conduit.pulseSpeed = 0.003 + Math.random() * 0.006;
        }
        
        const pulseX = conduit.startX + (conduit.endX - conduit.startX) * Math.max(0, Math.min(1, conduit.pulseProgress));
        
        if (pulseX >= 0 && pulseX <= this.width) {
          const grad = this.ctx.createRadialGradient(pulseX, y, 0, pulseX, y, 10);
          grad.addColorStop(0, "rgba(255, 255, 255, 1)");
          grad.addColorStop(0.3, "rgba(245, 158, 11, 0.9)");
          grad.addColorStop(1, "rgba(0, 0, 0, 0)");
          
          this.ctx.fillStyle = grad;
          this.ctx.beginPath();
          this.ctx.arc(pulseX, y, 10, 0, Math.PI * 2);
          this.ctx.fill();
        }
      }
    });
  }

  drawTradeNetwork() {
    const scrollFade = 1 - Math.min(this.scrollY / (this.height * 2.0), 1);
    if (scrollFade <= 0) return;
    
    // Draw lines
    this.ctx.lineWidth = 1.5;
    this.routes.forEach(route => {
      const startNode = this.hubs[route.start];
      const endNode = this.hubs[route.end];
      
      const sx = startNode.x * this.width;
      const sy = startNode.y * this.height - this.scrollY * 0.18;
      const ex = endNode.x * this.width;
      const ey = endNode.y * this.height - this.scrollY * 0.18;
      
      if (sy < 0 || sy > this.height || ey < 0 || ey > this.height) return;
      
      this.ctx.strokeStyle = route.color;
      this.ctx.beginPath();
      this.ctx.moveTo(sx, sy);
      this.ctx.lineTo(ex, ey);
      this.ctx.stroke();
      
      // Update and draw glowing pulse
      route.progress += route.speed;
      if (route.progress > 1) {
        route.progress = 0;
      }
      
      const px = sx + (ex - sx) * route.progress;
      const py = sy + (ey - sy) * route.progress;
      
      const grad = this.ctx.createRadialGradient(px, py, 0, px, py, 9);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.3, route.color.includes("245") ? "rgba(245, 158, 11, 0.95)" : "rgba(16, 185, 129, 0.95)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      
      this.ctx.fillStyle = grad;
      this.ctx.beginPath();
      this.ctx.arc(px, py, 9, 0, Math.PI * 2);
      this.ctx.fill();
    });
    
    // Draw hub nodes
    this.hubs.forEach((hub, idx) => {
      const hx = hub.x * this.width;
      const hy = hub.y * this.height - this.scrollY * 0.18;
      
      if (hy < 0 || hy > this.height) return;
      
      const pulseSize = hub.size + Math.sin(this.pulseTime * 8 + idx) * 3;
      
      // Node pulse ring
      this.ctx.strokeStyle = hub.label.includes("GEMINI") ? "rgba(245, 158, 11, 0.35)" : "rgba(16, 185, 129, 0.4)";
      this.ctx.lineWidth = 1.2;
      this.ctx.beginPath();
      this.ctx.arc(hx, hy, pulseSize * 1.8, 0, Math.PI * 2);
      this.ctx.stroke();
      
      // Outer border solid
      this.ctx.strokeStyle = hub.label.includes("GEMINI") ? "rgba(245, 158, 11, 0.85)" : "rgba(16, 185, 129, 0.85)";
      this.ctx.beginPath();
      this.ctx.arc(hx, hy, hub.size + 2.5, 0, Math.PI * 2);
      this.ctx.stroke();
      
      // Center solid core
      this.ctx.fillStyle = "#ffffff";
      this.ctx.beginPath();
      this.ctx.arc(hx, hy, hub.size - 2.5, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Label text
      this.ctx.fillStyle = "rgba(240, 247, 242, 0.75)";
      this.ctx.font = "bold 9px 'JetBrains Mono', monospace";
      this.ctx.textAlign = "center";
      this.ctx.fillText(hub.label, hx, hy - hub.size - 9);
    });
  }

  drawParticles() {
    this.particles.forEach(p => {
      // Upward drift
      p.y += p.speedY;
      p.x += Math.sin(this.pulseTime * 0.8 + p.driftPhase) * 0.15;
      
      const scrollOffset = this.scrollY * 0.25;
      const py = p.y - scrollOffset;
      
      // Wrap around screen boundaries
      if (py < -30) {
        p.y = this.scrollY * 0.25 + this.height + 30 + Math.random() * 200;
        p.x = Math.random() * this.width;
      }
      
      if (py >= -20 && py <= this.height + 20 && p.x >= 0 && p.x <= this.width) {
        // Core interactive repulsion: Move away from mouse slightly
        let dx = p.x - this.mouseX;
        let dy = py - this.mouseY;
        let dist = Math.sqrt(dx * dx + dy * dy);
        
        let ox = 0;
        let oy = 0;
        
        if (dist < 160) {
          const force = (160 - dist) * 0.28;
          ox = (dx / dist) * force;
          oy = (dy / dist) * force;
        }

        // Draw character (0, 1, etc.) with custom opacity
        const glowOpacity = dist < 160 ? p.opacity * 1.5 : p.opacity;
        this.ctx.fillStyle = p.colorType === "emerald" 
          ? `rgba(16, 185, 129, ${glowOpacity})` 
          : `rgba(245, 158, 11, ${glowOpacity * 0.9})`;
          
        this.ctx.font = "600 " + p.size + "px 'JetBrains Mono', monospace";
        this.ctx.fillText(p.val, p.x + ox, py + oy);
      }
    });
  }

  drawSpotlightHUD() {
    if (this.mouseX === -2000 || this.mouseY === -2000) return;
    
    // Draw crosshair reticle
    this.ctx.strokeStyle = "rgba(16, 185, 129, 0.4)";
    this.ctx.lineWidth = 1;
    
    // Outer dashed circle rotating over time
    this.ctx.setLineDash([4, 6]);
    this.ctx.beginPath();
    this.ctx.arc(this.mouseX, this.mouseY, 45, this.pulseTime * 0.5, this.pulseTime * 0.5 + Math.PI * 2);
    this.ctx.stroke();
    
    // Inner solid ring
    this.ctx.setLineDash([]);
    this.ctx.strokeStyle = "rgba(245, 158, 11, 0.45)";
    this.ctx.beginPath();
    this.ctx.arc(this.mouseX, this.mouseY, 20, 0, Math.PI * 2);
    this.ctx.stroke();
    
    // Crosshair ticks
    this.ctx.strokeStyle = "rgba(16, 185, 129, 0.6)";
    this.ctx.beginPath();
    // vertical
    this.ctx.moveTo(this.mouseX, this.mouseY - 28);
    this.ctx.lineTo(this.mouseX, this.mouseY - 12);
    this.ctx.moveTo(this.mouseX, this.mouseY + 12);
    this.ctx.lineTo(this.mouseX, this.mouseY + 28);
    // horizontal
    this.ctx.moveTo(this.mouseX - 28, this.mouseY);
    this.ctx.lineTo(this.mouseX - 12, this.mouseY);
    this.ctx.moveTo(this.mouseX + 12, this.mouseY);
    this.ctx.lineTo(this.mouseX + 28, this.mouseY);
    this.ctx.stroke();
    
    // Draw coordinate label HUD next to cursor
    this.ctx.fillStyle = "rgba(240, 247, 242, 0.85)";
    this.ctx.font = "bold 9px 'JetBrains Mono', monospace";
    this.ctx.textAlign = "left";
    this.ctx.fillText(`SECURE NODE DETECTED`, this.mouseX + 55, this.mouseY - 18);
    
    this.ctx.fillStyle = "rgba(16, 185, 129, 0.85)";
    const xCoord = Math.round(this.mouseX);
    const yCoord = Math.round(this.mouseY + this.scrollY);
    this.ctx.fillText(`SYS_X: ${xCoord}px // SYS_Y: ${yCoord}px`, this.mouseX + 55, this.mouseY - 6);
    
    this.ctx.fillStyle = "rgba(245, 158, 11, 0.85)";
    this.ctx.fillText(`LATENCY: ${Math.round(24 + Math.sin(this.pulseTime * 2) * 5)}ms // STABLE`, this.mouseX + 55, this.mouseY + 6);
  }
}

