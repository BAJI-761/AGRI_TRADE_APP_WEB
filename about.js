/**
 * AGRI_TRADE_WEB — CREATOR STUDIO & ROADMAP CONTROLLER
 * 
 * Drives the biometric team credentials scan console, manages the interactive
 * hackathon awards category sandbox, controls the color accent switcher,
 * renders the roadmap details drawers, and executes the background canvas.
 */

// ── 1. Biographical Database Details ──
const CREATOR_DATA = {
  name: "Baji",
  role: "Lead Architect & Full Stack Developer",
  verified: "usr_baji3_992 (ACTIVE SESSION)",
  stack: "Flutter / Dart / Firebase / Node.js / Google Cloud",
  contributions: "Core Mobile App Architecture, Secure Transaction Models, Gemini voice-intent decoders, UI/UX Design",
  bio: "Driven by structural quality, clean modular code design, and high-impact social software, Baji designed and developed the core Flutter app layers, offline SQLite diagnostic buffers, Firebase JWT auth scopes, and peer-to-peer digital Razorpay settlement logic.",
  logs: `architect-bios$ fetch_credential_claims.sh --user=usr_baji3_992
[INFO] Resolving developer validation registry maps...
[SECURITY] Biometric session handshakes active. Cryptographic signature matches.
[VERIFICATION] Public Key check: PGP verified [8F2B 9C12 D901 AA10]
[SUCCESS] Access authorized. Custom profile claims unlocked.
[BIO DATA] Loaded lead developer biography details:
--------------------------------------------------
* Fullstack mobile systems developer focusing on rural tech inclusion.
* Spearheaded structural clean modular designs inside local buffers.
* Engineered secure Razorpay digital escrow webhooks & UPI settling rails.
--------------------------------------------------
[SUCCESS] Console audit trace complete. Session status: SECURED.`
};

// New mapping for team members
const TEAM_DATA = {
  baji: {
    ...CREATOR_DATA,
    name: "SHAIK BAJI",
    role: "Lead Architect & Full Stack Developer",
    verified: "usr_baji3",
    logs: CREATOR_DATA.logs
  },
  vishnu: {
    name: "R. VISHNU VARDHAN",
    role: "Product Strategy & Operations",
    verified: "usr_vishnu",
    logs: `architect-bios$ fetch_credential_claims.sh --user=usr_vishnu
[INFO] Loading collaboration modules...
[SECURITY] Support assets integrity verified.
[VERIFICATION] Support documentation library loaded.
[SUCCESS] Collaborator credentials authenticated.
[DETAILS] Spearheaded product strategy, streamlined operations, and conducted comprehensive market analysis.
`
  },
  vamsi: {
    name: "V.MANOJ VAMSI KRISHNA",
    role: "Domain Expert & Market Research",
    verified: "usr_vamsi",
    logs: `architect-bios$ fetch_credential_claims.sh --user=usr_vamsi
[INFO] Initializing collaboration pipelines...
[SECURITY] Support signatures validated.
[VERIFICATION] Collaboration status: ACTIVE.
[SUCCESS] Collaborator authenticated.
[DETAILS] Provided critical agricultural domain expertise, market research, and user onboarding strategies.
`
  }
};

// ── 2. Hackathon Target Categories Sandbox Database ──
const HACKATHON_SANDBOX = {
  impact: {
    num: "SEGMENT 01",
    title: "Social Impact Target Sandbox",
    content: `
      <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: var(--space-md); align-items: center;">
        <div>
          <h4 class="text-green" style="margin-bottom: var(--space-xs);">Rural Voice Technology Inclusion</h4>
          <p class="text-secondary" style="font-size: var(--font-micro); line-height: 1.6; margin-bottom: 8px;">
            By developing a localized <strong>Telugu Speech-to-Text command parser</strong>, we completely bypassed typing requirements. Farmers in remote districts can upload grains and search mandi bid indicators using natural voice dialects.
          </p>
          <button class="btn-primary" id="btn-play-voice-sim" style="border: none; font-size: 12px; padding: 10px 18px;">
            <span>🔊 Click to Play Regional Audio Query</span>
          </button>
        </div>
        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: var(--space-sm); border-radius: var(--radius-md); text-align: center;">
          <div style="font-size: var(--font-micro); font-family: var(--font-mono); color: var(--primary-light); margin-bottom: 6px;">Intent Vector Match</div>
          <div style="background: #04080e; font-family: var(--font-mono); font-size: 11px; padding: 8px; border-radius: 4px; color: #10B981; text-align: left;" id="voice-sim-code">
            // Awaiting Voice Playback...
          </div>
        </div>
      </div>`
  },
  design: {
    num: "SEGMENT 02",
    title: "Design & UX Accent Switcher Sandbox",
    content: `
      <div style="text-align: center;">
        <h4 class="text-gold" style="margin-bottom: var(--space-xs);">Dynamic Glassmorphic Theme accents</h4>
        <p class="text-secondary" style="font-size: var(--font-micro); line-height: 1.6; max-width: 600px; margin: 0 auto 15px;">
          AgriTrade is built on a dark console system with glassmorphic cards and saturation filters. Select any accent color palette slider below to update the entire page's glowing variables in real-time!
        </p>
        <div style="display: flex; justify-content: center; gap: var(--space-md);">
          <button class="theme-accent-btn active" data-color="emerald" style="background: #10B981; border: 2px solid white; width: 42px; height: 42px; border-radius: 50%; cursor: pointer;" title="Emerald Theme"></button>
          <button class="theme-accent-btn" data-color="gold" style="background: #F59E0B; border: 2px solid transparent; width: 42px; height: 42px; border-radius: 50%; cursor: pointer;" title="Gold Theme"></button>
          <button class="theme-accent-btn" data-color="ruby" style="background: #EF4444; border: 2px solid transparent; width: 42px; height: 42px; border-radius: 50%; cursor: pointer;" title="Ruby Theme"></button>
        </div>
        <div style="font-size: 11px; font-family: var(--font-mono); color: var(--text-on-dark-muted); margin-top: 10px;" id="theme-accent-status">
          ACTIVE ACCENT SYSTEM: EMERALD (#10B981)
        </div>
      </div>`
  },
  tech: {
    num: "SEGMENT 03",
    title: "Technical Innovation Sandbox Console",
    content: `
      <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: var(--space-md); align-items: center;">
        <div>
          <h4 class="text-green" style="margin-bottom: var(--space-xs);">Live Serverless Socket Listener</h4>
          <p class="text-secondary" style="font-size: var(--font-micro); line-height: 1.6; margin-bottom: 8px;">
            Firestore composite synchronization listens to transaction arrays. Toggle this simulated socket feed to watch real-time B2B orders sync live.
          </p>
          <button class="btn-primary" id="btn-toggle-socket" style="border: none; font-size: 12px; padding: 10px 18px;">
            <span>🔌 Enable Firestore WebSocket Stream</span>
          </button>
        </div>
        <div class="tracer-right-pane" style="margin: 0; min-height: 140px;">
          <div class="tracer-terminal-header" style="padding: 4px 8px;">
            <div class="terminal-dots"><span class="terminal-dot red" style="width:6px;height:6px;"></span><span class="terminal-dot yellow" style="width:6px;height:6px;"></span><span class="terminal-dot green" style="width:6px;height:6px;"></span></div>
            <div class="terminal-tab" style="font-size:10px;">firestore_listener.db</div>
          </div>
          <div class="tracer-terminal-body" style="min-height: 100px; max-height: 100px; padding: 6px;">
            <pre id="socket-terminal-text" style="font-size: 10px; margin: 0; color: #9CA3AF;" class="terminal-code-block">// WebSocket Listener Idle. Ready to stream...</pre>
          </div>
        </div>
      </div>`
  }
};

// ── 3. Roadmap Milestone Blueprints Database ──
const ROADMAP_DATA = {
  1: {
    title: "PHASE 01: Precision ML Soil & Satellite Diagnostics",
    schema: `db/precision_agronomy/
├── collections/
│   ├── sentinel_sat_indices/
│   │   ├── document_id
│   │   │   ├── cooperative_coords: GeoPoint
│   │   │   ├── chemical_nitrogen_ppm: Double
│   │   │   └── vegetation_index_NDVI: Double
│   └── weather_matrices/
│       └── rabi_predictions/`,
    spec: "<strong>System specs:</strong> Hooks into Sentinel-2 Satellite APIs to extract NDVI (Normalized Difference Vegetation Index) values, matching localized soil chemicals directly into our crop suitability query vectors."
  },
  2: {
    title: "PHASE 02: Shared Cooperative Freight Transport Pools",
    schema: `db/fleet_logistics/
├── collections/
│   ├── shared_conduits/
│   │   ├── contract_id
│   │   │   ├── cargo_weight_sum_kg: Integer
│   │   │   ├── dispatch_truck_id: String
│   │   │   └── waypoint_routes: Array
│   └── vehicle_telemetry/`,
    spec: "<strong>System specs:</strong> Aggregates separate rural farmer listings bound to adjacent mandi routes, consolidating transport weights to dispatch single high-capacity freight trucks, cutting cargo travel costs by 50%."
  },
  3: {
    title: "PHASE 03: Rural Banking Micro-Credit Indices",
    schema: `db/credit_risk/
├── collections/
│   ├── reputation_profiles/
│   │   ├── usr_id
│   │   │   ├── score_index_grade: String [A+, A, B]
│   │   │   ├── total_escrow_settled: Double
│   │   │   └── default_ratio_percent: Double
│   └── low_interest_loans/`,
    spec: "<strong>System specs:</strong> Compiles Firestore escrow settlement records and bidder ratings to generate transparent credit indices, enabling cooperative banks to issue low-interest crop loans."
  }
};


document.addEventListener("DOMContentLoaded", () => {
  
  // ── 4. Soundwave Visualizer Canvas ──
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
      waveTime += 0.09;
      
      // Overlapping wave layers
      drawWave(soundwaveCtx, soundwaveCanvas.width, soundwaveCanvas.height, 3, "var(--primary-glow)", 0.8, 2.2);
      drawWave(soundwaveCtx, soundwaveCanvas.width, soundwaveCanvas.height, 1.5, "var(--accent-gold)", 0.5, 1.5);
      drawWave(soundwaveCtx, soundwaveCanvas.width, soundwaveCanvas.height, 5, "var(--primary-light)", 0.4, 2.8);
      
      soundwaveAnimFrame = requestAnimationFrame(draw);
    }
    
    draw();
  }

  function drawWave(ctx, w, h, amplitude, color, opacity, speedFactor) {
    ctx.strokeStyle = color;
    ctx.globalAlpha = opacity;
    ctx.lineWidth = 2.0;
    ctx.beginPath();
    
    const midY = h / 2;
    ctx.moveTo(0, midY);
    
    for (let x = 0; x < w; x++) {
      const envelope = Math.sin((x / w) * Math.PI); // Endpoints pinch
      const y = midY + Math.sin(x * 0.05 - waveTime * speedFactor) * amplitude * 8 * envelope;
      ctx.lineTo(x, y);
    }
    
    ctx.stroke();
    ctx.globalAlpha = 1.0;
  }

  startSoundwaveAnimation();

  // ── 5. Biometric Scan Console ──
  const btnTriggerScan = document.getElementById("btn-trigger-scan");
  const teamProfileBadge = document.getElementById("team-profile-badge");
  const badgeScanline = document.getElementById("badge-scanline");
  
  const aboutTerminalText = document.getElementById("about-terminal-text");
  const scanStatusBadge = document.getElementById("scan-status-badge");
  
  const teleContrib = document.getElementById("tele-contrib");
  const teleStack = document.getElementById("tele-stack");
  const teleStatus = document.getElementById("tele-status");
  const telemetryStrip = document.getElementById("telemetry-strip");

  function typewriteLogBlock(fullLogText, onComplete) {
    if (!aboutTerminalText) return;
    
    aboutTerminalText.innerHTML = "";
    const lines = fullLogText.split("\n");
    let currentLine = 0;
    
    function writeNextLine() {
      if (currentLine < lines.length) {
        let lineContent = lines[currentLine];
        
        lineContent = lineContent
          .replace(/(architect-bios\$ [^\n]+)/g, '<span class="code-keyword">$1</span>')
          .replace(/(\[INFO\])/g, '<span class="code-type">$1</span>')
          .replace(/(\[SUCCESS\])/g, '<span class="code-string">$1</span>')
          .replace(/(\[SECURITY\])/g, '<span class="code-keyword" style="color: #EF4444;">$1</span>')
          .replace(/(\[VERIFICATION\]|\[BIO DATA\])/g, '<span class="code-function">$1</span>')
          .replace(/(\/\/ [^\n]+)/g, '<span class="code-comment">$1</span>');
          
        aboutTerminalText.innerHTML += lineContent + "\n";
        
        // Auto scroll
        const termBody = aboutTerminalText.parentElement;
        termBody.scrollTop = termBody.scrollHeight;
        
        currentLine++;
        setTimeout(writeNextLine, 50);
      } else {
        if (onComplete) onComplete();
      }
    }
    
    writeNextLine();
  }

  // Track current active member
  let currentMember = null;
  let scanRunning = false;

  function executeBiometricScan(memberKey, autoScroll = false) {
    if (scanRunning) return;
    const member = TEAM_DATA[memberKey] || TEAM_DATA.baji;
    currentMember = memberKey;
    scanRunning = true;

    // Highlight active card, deactivate others
    document.querySelectorAll(".team-member-card").forEach(c => c.classList.remove("active"));
    const activeCard = document.querySelector(`.team-member-card[data-member="${memberKey}"]`);
    if (activeCard) activeCard.classList.add("active");

    // Activate scanline on active card
    document.querySelectorAll(".biometric-scanline").forEach(sl => sl.classList.remove("active"));
    const sl = document.getElementById(`${memberKey}-scanline`);
    if (sl) sl.classList.add("active");

    scanStatusBadge.innerText = "SCANNING…";
    scanStatusBadge.className = "terminal-badge warning";

    // Smooth scroll down to the log console
    if (autoScroll) {
      const consoleElement = document.getElementById("biometrics-log-console");
      if (consoleElement) {
        consoleElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    setTimeout(() => {
      if (sl) sl.classList.remove("active");
      scanStatusBadge.innerText = "AUTHENTICATED";
      scanStatusBadge.className = "terminal-badge success";

      // Update telemetry strip
      if (teleContrib) teleContrib.innerText = member.contributions || "—";
      if (teleStack)   teleStack.innerText   = member.stack       || "—";
      if (teleStatus)  teleStatus.innerText  = "SIGNATURE SECURED";
      if (telemetryStrip) telemetryStrip.style.opacity = "1.0";

      // Typewrite logs
      typewriteLogBlock(member.logs, () => { scanRunning = false; });
    }, 1800);
  }


  // Wire every "Scan Credentials" button
  document.querySelectorAll(".btn-scan-member").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      executeBiometricScan(btn.dataset.member, true);
    });
  });

  // Wire card click itself too
  document.querySelectorAll(".team-member-card").forEach(card => {
    card.addEventListener("click", () => {
      executeBiometricScan(card.dataset.member, true);
    });
  });

  // Auto-scan Baji on load
  setTimeout(() => executeBiometricScan("baji", false), 600);

  // ── 6. Hackathon Sandbox Categories ──
  const hackathonCards = document.querySelectorAll(".hackathon-category-card");
  const sandboxPanelNum = document.getElementById("sandbox-panel-num");
  const sandboxPanelTitle = document.getElementById("sandbox-panel-title");
  const sandboxPanelBody = document.getElementById("sandbox-panel-body");

  // Dynamic soundwave player for Social Impact Sandbox
  let sandboxVoiceInterval = null;
  let voicePlayState = false;

  function loadSandboxCategory(catKey) {
    const data = HACKATHON_SANDBOX[catKey];
    if (!data) return;

    // Reset voice player interval if running
    if (sandboxVoiceInterval) {
      clearInterval(sandboxVoiceInterval);
      sandboxVoiceInterval = null;
      voicePlayState = false;
    }

    // Dynamic color accent values trackers
    const activeColor = document.documentElement.style.getPropertyValue("--primary-glow") || "#10B981";

    sandboxPanelNum.innerText = data.num;
    sandboxPanelTitle.innerText = data.title;
    sandboxPanelBody.innerHTML = data.content;

    // Bind inner sandbox operations
    if (catKey === "impact") {
      const btnPlayVoiceSim = document.getElementById("btn-play-voice-sim");
      const voiceSimCode = document.getElementById("voice-sim-code");

      btnPlayVoiceSim.addEventListener("click", () => {
        if (voicePlayState) return;
        voicePlayState = true;
        btnPlayVoiceSim.disabled = true;
        btnPlayVoiceSim.innerHTML = "<span>🔊 Audio Playing (Regional Telugu)...</span>";
        
        let progressStep = 0;
        voiceSimCode.innerHTML = `[Acoustics] Capturing Telugu dialect...<br>&gt;&gt; Speech Input detected.`;
        
        sandboxVoiceInterval = setInterval(() => {
          progressStep++;
          if (progressStep === 1) {
            voiceSimCode.innerHTML += `<br>[AI] Model input waveform parsed into standard tokens.`;
          } else if (progressStep === 2) {
            voiceSimCode.innerHTML += `<br>[AI] Matching Gemini NLU Dialect matrices...`;
          } else if (progressStep === 3) {
            voiceSimCode.innerHTML += `<br>[SUCCESS] Parameter output generated:<br><span style="color:#F59E0B;">{ intent: "SELL", crop: "Paddy", qty: "400kg" }</span>`;
            btnPlayVoiceSim.innerHTML = "<span>🔊 Playback Complete</span>";
            btnPlayVoiceSim.disabled = false;
            voicePlayState = false;
            clearInterval(sandboxVoiceInterval);
          }
        }, 1200);
      });
    }

    else if (catKey === "design") {
      const accentButtons = document.querySelectorAll(".theme-accent-btn");
      const accentStatus = document.getElementById("theme-accent-status");

      accentButtons.forEach(btn => {
        // Sync active highlight status
        const btnColor = btn.dataset.color;
        const currentPrimary = document.documentElement.style.getPropertyValue("--primary-glow");
        
        if (
          (btnColor === "emerald" && (currentPrimary === "#10B981" || !currentPrimary)) ||
          (btnColor === "gold" && currentPrimary === "#F59E0B") ||
          (btnColor === "ruby" && currentPrimary === "#EF4444")
        ) {
          btn.style.borderColor = "white";
        } else {
          btn.style.borderColor = "transparent";
        }

        btn.addEventListener("click", () => {
          accentButtons.forEach(b => b.style.borderColor = "transparent");
          btn.style.borderColor = "white";
          
          let hex = "#10B981";
          let rgb = "16, 185, 129";
          let name = "EMERALD";
          
          if (btnColor === "gold") {
            hex = "#F59E0B";
            rgb = "245, 158, 11";
            name = "GOLD";
          } else if (btnColor === "ruby") {
            hex = "#EF4444";
            rgb = "239, 68, 68";
            name = "RUBY";
          }

          // Dynamically change global CSS Variables in DOM!
          document.documentElement.style.setProperty("--primary", hex);
          document.documentElement.style.setProperty("--primary-glow", hex);
          document.documentElement.style.setProperty("--primary-light", `rgba(${rgb}, 0.2)`);
          
          accentStatus.innerText = `ACTIVE ACCENT SYSTEM: ${name} (${hex})`;
          
          // Flash scan status highlights in dynamic console
          const activeBadge = document.querySelector(".hackathon-category-card.active .category-badge");
          if (activeBadge) activeBadge.style.background = hex;
        });
      });
    }

    else if (catKey === "tech") {
      const btnToggleSocket = document.getElementById("btn-toggle-socket");
      const socketTerminalText = document.getElementById("socket-terminal-text");
      let socketInterval = null;
      let socketState = false;

      btnToggleSocket.addEventListener("click", () => {
        if (socketState) {
          // Turn off
          clearInterval(socketInterval);
          socketInterval = null;
          socketState = false;
          btnToggleSocket.innerHTML = "<span>🔌 Enable Firestore WebSocket Stream</span>";
          socketTerminalText.innerHTML = "// WebSocket Listener Idle. Ready to stream...";
        } else {
          // Turn on
          socketState = true;
          btnToggleSocket.innerHTML = "<span>🔌 Disable WebSocket Stream</span>";
          socketTerminalText.innerHTML = "[WS] Establishing secure serverless pipeline...";
          
          let counter = 0;
          socketInterval = setInterval(() => {
            counter++;
            const pingRandom = Math.round(30 + Math.random() * 25);
            socketTerminalText.innerHTML += `<br>[SOCKET] Ingested order document usr_${counter} // latency: ${pingRandom}ms`;
            
            const lines = socketTerminalText.innerHTML.split("<br>");
            if (lines.length > 5) {
              lines.shift();
              socketTerminalText.innerHTML = lines.join("<br>");
            }
          }, 1500);
        }
      });
    }
  }

  // Bind hackathon card triggers
  hackathonCards.forEach(card => {
    card.addEventListener("click", () => {
      hackathonCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      loadSandboxCategory(card.dataset.cat);
    });
  });

  // Load standard sandbox panel
  loadSandboxCategory("impact");

  // ── 7. Interactive Roadmap Timeline ──
  const roadmapMilestones = document.querySelectorAll(".roadmap-milestone");
  const roadmapDrawer = document.getElementById("roadmap-drawer");
  const roadmapDrawerBody = document.getElementById("roadmap-drawer-body");

  function loadRoadmapPhase(phaseKey) {
    const data = ROADMAP_DATA[phaseKey];
    if (!data) return;

    roadmapDrawerBody.innerHTML = `
      <h4 class="text-gold" style="font-family: var(--font-mono); font-size: 15px; margin-bottom: var(--space-xs);">${data.title}</h4>
      <div class="details-body" style="padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); margin-top: var(--space-xs);">
        <div>
          <h5 style="color: var(--primary-glow); font-size: 13px; margin-bottom: 6px; font-family: var(--font-mono);">📁 Firestore Data Schema</h5>
          <pre style="background: #04080e; border: 1px solid rgba(255,255,255,0.05); font-family: var(--font-mono); font-size: 11px; padding: 12px; border-radius: var(--radius-md); overflow-x: auto; color: #10B981; max-height: 180px;">${data.schema}</pre>
        </div>
        <div style="display: flex; flex-direction: column; justify-content: center; gap: 8px;">
          <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: var(--space-sm); border-radius: var(--radius-md); font-size: var(--font-micro); line-height: 1.6; color: var(--text-on-dark-muted);">
            ${data.spec}
          </div>
          <div style="font-size: var(--font-micro); font-family: var(--font-mono); color: var(--accent-gold);">
            🚀 Target Milestone: Q3 2026 Verification Track
          </div>
        </div>
      </div>`;
  }

  // Bind roadmap click triggers
  roadmapMilestones.forEach(stone => {
    stone.addEventListener("click", () => {
      roadmapMilestones.forEach(s => s.classList.remove("active"));
      stone.classList.add("active");
      loadRoadmapPhase(stone.dataset.phase);
    });
  });

  // Load initial roadmap drawer details
  loadRoadmapPhase(1);

});

// ── 8. Generative Background Organic Constellation Seed Trade Network Engine ──
class OrganicConstellationCanvasEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    
    this.stars = [];
    this.packets = [];
    this.pulseTime = 0;
    this.scrollY = 0;
    this.targetScrollY = 0;
    
    // Mouse tracking with soft interpolations
    this.mouseX = -2000;
    this.mouseY = -2000;
    this.targetMouseX = -2000;
    this.targetMouseY = -2000;
    
    this.hubLabels = [
      "Guntur Hub", "Vijayawada Coop", "Kurnool Mandi", "Anantapur Farm", 
      "Nellore Union", "Chittoor Dairy", "Eluru Paddy", "Ongole Crops",
      "Vizag Port", "Kadapa Agri", "Tirupati Mandi", "Godavari Coop",
      "Tenali Fields", "Nandyal Seeds", "Adoni Cotton", "Proddatur Gold"
    ];
    
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

    // Populate organic constellation elements
    this.initSeeds();

    // Begin render frame loop
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * window.devicePixelRatio;
    this.canvas.height = this.height * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    this.initSeeds();
  }

  initSeeds() {
    this.stars = [];
    // Populate 45 nodes across the canvas height (expanded for scroll depth)
    const count = 45;
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height * 4.0,
        baseRadius: Math.random() * 2.0 + 1.5,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulsePhase: Math.random() * Math.PI * 2,
        label: this.hubLabels[i % this.hubLabels.length] + ` #AP-${100 + i}`,
        opacity: Math.random() * 0.45 + 0.3,
        color: Math.random() > 0.45 ? "emerald" : "gold",
        flowAngle: Math.random() * Math.PI * 2,
        flowSpeed: 0.06 + Math.random() * 0.08
      });
    }
    
    // Generate active packets drifting along filaments
    this.packets = [];
    for (let i = 0; i < 15; i++) {
      this.packets.push({
        startIndex: Math.floor(Math.random() * count),
        endIndex: -1, 
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.004,
        colorType: Math.random() > 0.5 ? "emerald" : "gold"
      });
    }
  }

  getActiveColor(type = "primary", opacity = 1.0) {
    const rootStyle = getComputedStyle(document.documentElement);
    let primaryGlow = rootStyle.getPropertyValue("--primary-glow").trim() || "#10B981";
    let accentGold = "#F59E0B"; // fallback gold
    
    let targetHex = primaryGlow;
    if (type === "gold" || type === "accent") {
      targetHex = accentGold;
    }
    
    if (targetHex.includes("#")) {
      const r = parseInt(targetHex.slice(1, 3), 16);
      const g = parseInt(targetHex.slice(3, 5), 16);
      const b = parseInt(targetHex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    return `rgba(16, 185, 129, ${opacity})`;
  }

  animate() {
    this.pulseTime += 0.012;
    
    // Smooth interpolations
    this.scrollY += (this.targetScrollY - this.scrollY) * 0.08;
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.1;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.1;

    this.ctx.clearRect(0, 0, this.width, this.height);
    
    // Deep dark organic midnight green console background fill
    this.ctx.fillStyle = "#030806";
    this.ctx.fillRect(0, 0, this.width, this.height);
    
    // Draw layers sequentially
    this.drawContours();
    this.drawConstellation();

    requestAnimationFrame(() => this.animate());
  }

  drawContours() {
    const numLines = 8;
    this.ctx.lineWidth = 1.8;
    
    const scrollFade = 1 - Math.min(this.scrollY / (this.height * 2.8), 1);
    if (scrollFade <= 0) return;
    
    for (let i = 0; i < numLines; i++) {
      const progress = i / numLines;
      const opacity = Math.sin(progress * Math.PI) * 0.22 * scrollFade;
      
      // Fetch dynamic theme color for green contour, fallback/fixed for gold
      const emeraldColor = this.getActiveColor("primary", opacity * 1.25);
      const goldColor = this.getActiveColor("gold", opacity * 0.95);
      
      this.ctx.strokeStyle = i % 2 === 0 ? emeraldColor : goldColor;
      this.ctx.beginPath();
      
      const baseY = this.height * 0.22 + (i * 85) - (this.scrollY * 0.24);
      
      for (let x = -50; x < this.width + 50; x += 18) {
        // Multi-frequency wave math representing flowing agricultural terraces
        const wave1 = Math.sin(x * 0.0022 + this.pulseTime * 0.45 + i * 1.5) * 55;
        const wave2 = Math.cos(x * 0.0042 - this.pulseTime * 0.3 + i * 2.5) * 22;
        const wave3 = Math.sin(x * 0.009 + this.pulseTime * 0.8 + i) * 8;
        
        let y = baseY + wave1 + wave2 + wave3;
        
        // Gentle interactive mouse lensing: depress fields near cursor
        let dx = x - this.mouseX;
        let dy = y - this.mouseY;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const pushForce = (180 - dist) * 0.16;
          y += pushForce;
        }
        
        if (x === -50) {
          this.ctx.moveTo(x, y);
        } else {
          this.ctx.lineTo(x, y);
        }
      }
      this.ctx.stroke();
    }
  }

  drawConstellation() {
    const scrollOffset = this.scrollY * 0.22;
    this.ctx.lineWidth = 0.8;
    
    // 1. Draw connections
    for (let i = 0; i < this.stars.length; i++) {
      const s1 = this.stars[i];
      const s1y = s1.y - scrollOffset;
      if (s1y < -50 || s1y > this.height + 50) continue;
      
      for (let j = i + 1; j < this.stars.length; j++) {
        const s2 = this.stars[j];
        const s2y = s2.y - scrollOffset;
        if (s2y < -50 || s2y > this.height + 50) continue;
        
        const dx = s1.x - s2.x;
        const dy = s1y - s2y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 130) {
          const alpha = (1 - dist / 130) * 0.18;
          let isGlow = false;
          let mDist1 = Math.sqrt((s1.x - this.mouseX) ** 2 + (s1y - this.mouseY) ** 2);
          let mDist2 = Math.sqrt((s2.x - this.mouseX) ** 2 + (s2y - this.mouseY) ** 2);
          if (mDist1 < 140 || mDist2 < 140) {
            isGlow = true;
          }
          
          const filamentColor = isGlow 
            ? this.getActiveColor("gold", alpha * 2.5) 
            : this.getActiveColor("primary", alpha);
            
          this.ctx.strokeStyle = filamentColor;
          this.ctx.beginPath();
          this.ctx.moveTo(s1.x, s1y);
          this.ctx.lineTo(s2.x, s2y);
          this.ctx.stroke();
        }
      }
    }
    
    // 2. Draw packets
    this.packets.forEach(p => {
      const start = this.stars[p.startIndex];
      if (!start) return;
      
      if (p.endIndex === -1 || p.endIndex === p.startIndex) {
        let neighbors = [];
        for (let idx = 0; idx < this.stars.length; idx++) {
          if (idx === p.startIndex) continue;
          const s2 = this.stars[idx];
          const dist = Math.sqrt((start.x - s2.x) ** 2 + (start.y - s2.y) ** 2);
          if (dist < 140) {
            neighbors.push(idx);
          }
        }
        if (neighbors.length > 0) {
          p.endIndex = neighbors[Math.floor(Math.random() * neighbors.length)];
        } else {
          p.endIndex = Math.floor(Math.random() * this.stars.length);
        }
      }
      
      const end = this.stars[p.endIndex];
      if (!end) return;
      
      p.progress += p.speed;
      if (p.progress > 1) {
        p.progress = 0;
        p.startIndex = p.endIndex;
        p.endIndex = -1;
      }
      
      const sx = start.x;
      const sy = start.y - scrollOffset;
      const ex = end.x;
      const ey = end.y - scrollOffset;
      
      if (sy > -20 && sy < this.height + 20 && ey > -20 && ey < this.height + 20) {
        const px = sx + (ex - sx) * p.progress;
        const py = sy + (ey - sy) * p.progress;
        
        const packetColor = this.getActiveColor(p.colorType, 0.9);
        this.ctx.fillStyle = packetColor;
        this.ctx.beginPath();
        this.ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.fillStyle = this.getActiveColor(p.colorType, 0.25);
        this.ctx.beginPath();
        this.ctx.arc(px, py, 6, 0, Math.PI * 2);
        this.ctx.fill();
      }
    });

    // 3. Draw star nodes
    this.stars.forEach((s, idx) => {
      s.x += Math.cos(s.flowAngle + this.pulseTime * 0.2) * s.flowSpeed;
      s.y += Math.sin(s.flowAngle + this.pulseTime * 0.2) * s.flowSpeed;
      
      // wrap
      if (s.x < -10) s.x = this.width + 10;
      if (s.x > this.width + 10) s.x = -10;
      if (s.y < -10) s.y = this.height * 4.0 + 10;
      if (s.y > this.height * 4.0 + 10) s.y = -10;
      
      const sy = s.y - scrollOffset;
      if (sy < -50 || sy > this.height + 50) return;
      
      let dx = s.x - this.mouseX;
      let dy = sy - this.mouseY;
      let mDist = Math.sqrt(dx * dx + dy * dy);
      
      let finalRadius = s.baseRadius + Math.sin(this.pulseTime * 4 + s.pulsePhase) * 0.8;
      let finalOpacity = s.opacity;
      let isHovered = false;
      
      if (mDist < 140) {
        isHovered = true;
        const ratio = 1 - mDist / 140;
        finalRadius += ratio * 6.5;
        finalOpacity = 0.95;
      }
      
      const nodeColorHex = s.color === "emerald" ? "primary" : "gold";
      
      if (isHovered) {
        const glowColor = this.getActiveColor("gold", 0.3);
        const grad = this.ctx.createRadialGradient(s.x, sy, 0, s.x, sy, finalRadius * 2.2);
        grad.addColorStop(0, glowColor);
        grad.addColorStop(0.5, this.getActiveColor("gold", 0.08));
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        
        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.arc(s.x, sy, finalRadius * 2.2, 0, Math.PI * 2);
        this.ctx.fill();
      }
      
      this.ctx.fillStyle = isHovered ? this.getActiveColor("gold", finalOpacity) : this.getActiveColor(nodeColorHex, finalOpacity);
      this.ctx.beginPath();
      this.ctx.arc(s.x, sy, finalRadius, 0, Math.PI * 2);
      this.ctx.fill();
      
      this.ctx.strokeStyle = isHovered 
        ? "rgba(255, 255, 255, 0.85)" 
        : this.getActiveColor(nodeColorHex, 0.35);
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.arc(s.x, sy, finalRadius * 1.8, 0, Math.PI * 2);
      this.ctx.stroke();
      
      if (isHovered && mDist < 120) {
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
        this.ctx.font = "bold 9px 'JetBrains Mono', monospace";
        this.ctx.textAlign = "left";
        this.ctx.fillText(s.label.toUpperCase(), s.x + finalRadius + 8, sy - 3);
        
        this.ctx.fillStyle = this.getActiveColor("primary", 0.9);
        this.ctx.font = "800 8px 'JetBrains Mono', monospace";
        const nodeX = Math.round(s.x);
        const nodeY = Math.round(s.y);
        this.ctx.fillText(`GEO: [${nodeX}, ${nodeY}] // B2B ACTIVE`, s.x + finalRadius + 8, sy + 7);
      }
    });
  }
}

// Instantiate canvas background on load
const bgCanvas = document.getElementById("arch-scroll-canvas");
if (bgCanvas) {
  new OrganicConstellationCanvasEngine(bgCanvas);
}
