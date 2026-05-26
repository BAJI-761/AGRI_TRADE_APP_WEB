/**
 * AGRI_TRADE_WEB — INTERACTIVE MOBILE EMULATOR CONTROLLER
 * 
 * Manages the high-fidelity smartphone device simulator navigation,
 * drives the auto-play slideshow walkthrough, synchronizes live telemetry metrics,
 * typewrites console terminal logs, and executes the generative background canvas.
 */

// ── 1. Comprehensive Screenshot User Journey Database ──
const EMULATOR_SCREENS = [
  {
    index: 0,
    key: "screen_01.jpg",
    title: "Splash App Entry",
    db: "LOCAL_CACHE",
    process: "MOBILE_BOOT",
    cpu: 18,
    mem: "28.5 MB",
    ping: "0ms (LOCAL)",
    security: "SECURE_LOCAL_BOOT",
    desc: "AgriTrade mobile app boot sequences. Loads local offline configurations, checks localized SQLite database buffers, and establishes the responsive user interface wrapper.",
    log: `agritrade-client$ flutter run --target=lib/main.dart
[INFO] Booting Flutter Native Engine...
[INFO] SQLite cache system checked: 0 buffered operations found.
[DATABASE] Local offline SQLite storage is completely empty and operational.
[SECURITY] SHA-256 binary validation matches playstore releases.
[SUCCESS] AgriTrade Splash Screen rendered at fluid 60fps.`
  },
  {
    index: 1,
    key: "screen_03.jpg",
    title: "Regional Language Toggle",
    db: "LOCAL_CACHE",
    process: "UI_L10N",
    cpu: 8,
    mem: "29.2 MB",
    ping: "0ms (LOCAL)",
    security: "LOCAL_L10N_LOCK",
    desc: "Localization and regional settings toggle. Farmers select their local tongue (Telugu, English) which instantly updates the entire typography, audio prompt parameters, and menu screens without reboots.",
    log: `agritrade-client$ localizer.sh --set-lang=te_IN
[INFO] Localizing application assets...
[L10N] Translation mappings parsed successfully from local dictionary assets.
[INFO] Set primary voice query target accents to Telugu Regional (Rural Telugu).
[SUCCESS] Application language updated to: తెలుగు (Telugu) successfully.`
  },
  {
    index: 2,
    key: "screen_07.jpg",
    title: "Twilio Phone OTP Entry",
    db: "TWILIO_API",
    process: "GATE_CHALLENGE",
    cpu: 24,
    mem: "31.8 MB",
    ping: "112ms",
    security: "OTP_SMS_REQUESTED",
    desc: "Primary digital identity enrollment page. Farmers enter their active mobile numbers to request cryptographically secure SMS OTP challenge codes at system margins.",
    log: `agritrade-client$ twilio_gateway.sh --request-otp --phone=+91-XXXXXX4102
[INFO] Requesting secure session validation OTP challenge signature...
[SMS] API Call: curl -X POST https://api.twilio.com/2010-04-01/Accounts/...
[INFO] Dispatching encrypted challenge signature to target SIM block.
[SUCCESS] OTP SMS issued successfully to cellular node [+91-XXXXXX4102].`
  },
  {
    index: 3,
    key: "screen_06.jpg",
    title: "OTP Verification Gate",
    db: "FIREBASE_AUTH",
    process: "GATE_VERIFY",
    cpu: 29,
    mem: "32.6 MB",
    ping: "148ms",
    security: "JWT_SECURE_TOKEN",
    desc: "Security gateway validation interface. Compares client OTP input against active Firebase temporary authentication tokens. Yields custom claims for authorization levels.",
    log: `agritrade-client$ firebase_auth.sh --verify-otp --code=883012
[INFO] Transmitting temporary JWT session token challenge verification...
[DATABASE] Auth Gateway: Cryptographically checking verification code [883012]
[INFO] Token verification: Firebase Auth status 200 (Success)
[SUCCESS] User authenticated. Custom Claims injected: { role: 'farmer', verified: true }`
  },
  {
    index: 4,
    key: "screen_05.jpg",
    title: "User Profile Configuration",
    db: "FIRESTORE_WRITE",
    process: "USER_SIGNUP",
    cpu: 34,
    mem: "34.1 MB",
    ping: "56ms",
    security: "USER_METADATA_LOCKED",
    desc: "Account role and profile setup page. Farmers enter localized registration fields, select active cooperative blocks, and register as a Farmer or Wholesaler.",
    log: `agritrade-client$ db_write.sh --collection=/users --payload='{"name":"Baji","role":"farmer"}'
[INFO] Committing structural user data packet to Firestore database margins...
[DATABASE] Firestore transaction active. Write queued successfully.
[DATABASE] Document created at: /users/usr_baji3_992/
[SUCCESS] Account metadata bound. Role registered: Farmer.`
  },
  {
    index: 5,
    key: "screen_08.jpg",
    title: "Farmer Dashboard Home",
    db: "FIRESTORE_REALTIME",
    process: "STREAM_SYNC",
    cpu: 42,
    mem: "41.5 MB",
    ping: "42ms",
    security: "TLS_1.3_ENCRYPTED",
    desc: "Farmer dashboard workspace console. Fetches live regional mandi price listings, predicted weather indices, active crop uploads, and buyer bid requests in under 80ms.",
    log: `agritrade-client$ sync_stream.sh --listen=/mandi_prices --listen=/bids
[INFO] Establishing reactive Firestore sync websocket stream...
[DATABASE] Stream activated. High-speed composite indices sync completed.
[STREAM] Ingested 14 regional prices. Nearest Mandi: Guntur (Paddy ₹24.50/kg)
[SUCCESS] UI synchronized dynamically. System status: STABLE. Ping: 42ms.`
  },
  {
    index: 6,
    key: "screen_12.jpg",
    title: "Soil Diagnostics Panel",
    db: "LOCAL_CACHE",
    process: "SOIL_VECTORS",
    cpu: 16,
    mem: "42.8 MB",
    ping: "0ms (LOCAL)",
    security: "LOCAL_INPUT_LOCK",
    desc: "Chemical and tactile parameters panel for soil suitability testing. Users input soil texture types (Black Clay, Red Loamy, Sandy) and select local seasonal data parameters.",
    log: `agritrade-client$ input_validator.sh --type=soil_diagnostic
[INFO] Ingesting diagnostic parameter vectors...
[VECTORS] Soil Texture: Black Clay | Season: Rabi | Irrigation: Standard
[INFO] Running local client sanitization on parameter array bounds.
[SUCCESS] Vector checks complete. Input arrays validated as cryptographically clean.`
  },
  {
    index: 7,
    key: "screen_13.jpg",
    title: "AI Crop Recommendations",
    db: "FIRESTORE_QUERY",
    process: "SMART_MATCHING",
    cpu: 38,
    mem: "44.2 MB",
    ping: "48ms",
    security: "AI_SUITABILITY_CALC",
    desc: "AI-driven crop suitability recommendations list. Sorts regional crop choices by precision suitability percentages, weighing soil parameters and market rates.",
    log: `agritrade-client$ query_suitability.sh --soil=black_clay --season=rabi
[INFO] Querying crop databases with diagnostic vector parameters...
[AI] Running matching matrix computation: weighting texture, water, climate variables
[DATABASE] Firestore composite query fetched in 48ms. Matches found: 5
[SUCCESS] Output ranked list: 1. Rice Paddy (94%), 2. Cotton (82%), 3. Maize (74%)`
  },
  {
    index: 8,
    key: "screen_15.jpg",
    title: "Diagnostics Detail & Yields",
    db: "LOCAL_CACHE",
    process: "ANALYTICS_YIELDS",
    cpu: 22,
    mem: "45.0 MB",
    ping: "0ms (LOCAL)",
    security: "LOCAL_ANALYTICS_LOCK",
    desc: "Diagnostics dashboard details. Outlines maturity timetables, anticipated yield volumes per acre, water requirements, and live crop market indices for farmers.",
    log: `agritrade-client$ analytics_engine.sh --render-crop=rice_paddy
[INFO] Calculating crop maturity and anticipated harvest curves...
[ANALYTICS] Expected Yield: 2.4 Tons/Acre | Water Index: High | Rabi Maturity: 120 Days
[INFO] Extrapolating profit margins based on active Guntur Mandi wholesale price tracks.
[SUCCESS] Diagnostics details panel rendered successfully.`
  },
  {
    index: 9,
    key: "screen_10.jpg",
    title: "Upload Crop Listing",
    db: "FIRESTORE_WRITE",
    process: "LISTING_UPLOAD",
    cpu: 31,
    mem: "46.2 MB",
    ping: "58ms",
    security: "TRANSACTION_WRITE_LOCKED",
    desc: "Inventory listing submission form. Farmers post grain quantities, moisture percentages, target prices, and upload visual diagnostics to attract wholesale buyer bids.",
    log: `agritrade-client$ db_write.sh --collection=/listings --payload='{"qty":400,"price":24.5}'
[INFO] Queueing listing payload upload: Rice Paddy, 400kg, ₹24.50/kg
[DATABASE] Commit Transaction: Pushing listing data to Firestore /listings/tx_9921
[DATABASE] Listing live! Broadcast update sent to wholesaler websockets.
[SUCCESS] Listing verified on ledger database. Status: ACTIVE.`
  },
  {
    index: 10,
    key: "screen_18.jpg",
    title: "Mandi Bids Ledger",
    db: "FIRESTORE_REALTIME",
    process: "BIDDING_STREAM",
    cpu: 45,
    mem: "49.8 MB",
    ping: "38ms",
    security: "LIVE_LEDGER_SYNC",
    desc: "Real-time B2B mandi auction bids ledger. Shows all bulk buyer bids placed against the farmer's listing, displaying bidder ratings, and accepting contracts instantly.",
    log: `agritrade-client$ bids_ledger_sync.sh --listing=tx_9921
[INFO] Listening for real-time bid changes on database margins...
[STREAM] Incoming Bid from Wholesaler ID [wholesaler_guntur_8]: ₹24.20/kg
[STREAM] Incoming Bid from Wholesaler ID [wholesaler_vijayawada_3]: ₹24.50/kg (MATCHED!)
[SUCCESS] UI Bids ledger updated. Target bid accepted. Creating settlement escrow.`
  },
  {
    index: 11,
    key: "screen_11.jpg",
    title: "STT Voice Commands",
    db: "GEMINI_AI_API",
    process: "INTENT_EXTRACTION",
    cpu: 62,
    mem: "54.4 MB",
    ping: "260ms",
    security: "AI_DIALECT_PARSING",
    desc: "Multilingual hands-free voice operations sandbox. Records farmers' voice commands in local dialects, feeds the audio to Gemini AI models, and extracts structured NLU JSON arrays.",
    log: `agritrade-client$ gemini_voice_stt.sh --audio=/tmp/voice_capture_4102.wav
[INFO] Ingesting rural Telugu spoken command input stream...
[AI] Running Gemini-Flash zero-shot dialect parsing pipeline...
[AI] Model Response Code: 200 OK. Structuring intent payload...
[SUCCESS] Gemini Intent Captured: { intent: "SELL_CROP", qty: 400, crop: "Rice Paddy", soil: "Black Clay" }`
  },
  {
    index: 12,
    key: "screen_21.jpg",
    title: "Retailer B2B Dashboard",
    db: "FIRESTORE_QUERY",
    process: "BUYER_WORKSPACE",
    cpu: 41,
    mem: "50.1 MB",
    ping: "44ms",
    security: "TLS_1.3_ENCRYPTED",
    desc: "Wholesaler procurement center. Features a high-speed search scroller indexing crop types, packaging conditions, moisture contents, and nearest logistics locations.",
    log: `agritrade-client$ query_listings.sh --crop=rice_paddy --min-qty=100
[INFO] Processing search query for bulk wholesaler buyers...
[DATABASE] Composite query completed. Searched 45 active cooperative pools.
[STREAM] Loaded 12 active Paddy listings. Sorted by nearest geographic proximity.
[SUCCESS] Retailer search scroller catalog updated.`
  },
  {
    index: 13,
    key: "screen_23.jpg",
    title: "Wholesaler Orders Stream",
    db: "FIRESTORE_REALTIME",
    process: "ORDER_TRACKING",
    cpu: 33,
    mem: "51.3 MB",
    ping: "36ms",
    security: "MUTUAL_AUTH_TLS",
    desc: "Bulk buyer transaction manager. Allows wholesalers to track current bids placed, review order clearances, coordinate truck logistics details, and monitor ledger payouts.",
    log: `agritrade-client$ order_stream_sync.sh --role=buyer
[INFO] Connecting to Firestore order collections: /escrow_contracts/
[DATABASE] Synchronized order collection: 3 pending transit, 1 locked in escrow
[INFO] Listing status for ID tx_9921 updated to: LOCKED_IN_ESCROW
[SUCCESS] Order streams console updated successfully.`
  },
  {
    index: 14,
    key: "screen_30.jpg",
    title: "Route Dispatch Maps",
    db: "GOOGLE_MAPS_API",
    process: "FLEET_LOGISTICS",
    cpu: 58,
    mem: "62.5 MB",
    ping: "78ms",
    security: "DYNAMIC_GPS_TRACK",
    desc: "Live route dispatching and transport monitoring dashboard. Maps out dynamic optimal highway routing from rural farming centers directly to urban mandis.",
    log: `agritrade-client$ route_planner.sh --origin=farm_kurnool --destination=mandi_guntur
[INFO] Fetching Google Maps route matrices...
[LOGISTICS] Direct Route: NH-40 to Guntur Mandi | Distance: 280km | Transport: 6.5 Hours
[INFO] Ingesting dynamic transport coordinates from localized cellular dispatch nodes.
[SUCCESS] Route computed. Transport vehicle coordinates tracking live.`
  },
  {
    index: 15,
    key: "screen_25.jpg",
    title: "Escrow Vault Ledger",
    db: "RAZORPAY_API",
    process: "ESCROW_VAULT",
    cpu: 48,
    mem: "53.2 MB",
    ping: "96ms",
    security: "RAZORPAY_SSL_VAULT",
    desc: "Razorpay secure digital escrow payment ledger. Buyer's cash values are locked securely in platform vault ledgers, shielding farmers against payment defaults during transport.",
    log: `agritrade-client$ razorpay_escrow.sh --create-vault --listing=tx_9921
[INFO] Initializing secure peer-to-peer escrow ledger contract...
[PAYMENT] Creating payment challenge reference ID: razor_escrow_8820
[ESCROW] Value ₹9,800.00 successfully locked inside digital settlement margins.
[SUCCESS] Escrow created. Bank payout triggers automatically on delivery scan validation.`
  },
  {
    index: 16,
    key: "screen_28.jpg",
    title: "UPI Settlement Release",
    db: "UPI_SETTLEMENT",
    process: "PAYOUT_RELEASE",
    cpu: 52,
    mem: "55.8 MB",
    ping: "84ms",
    security: "MUTUAL_AES_GCM_256",
    desc: "Instant UPI settlement release page. When transport trucks arrive, wholesalers scan the QR code which immediately releases the locked escrow cash directly to the farmer's bank account.",
    log: `agritrade-client$ razorpay_escrow.sh --release-vault --escrow=razor_escrow_8820
[INFO] QR release token validated at mandi checkpoint terminal...
[ESCROW] Triggering settlement payout distribution: ₹9,800.00
[PAYMENT] Disbursing cash instantly via secure UPI protocol gateway.
[SUCCESS] UPI Payout release successful! Status: COMPT. Bank transaction complete.`
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".emulator-menu-item");
  const phoneScreenImage = document.getElementById("phone-screen-image");
  const simTransitionFlash = document.getElementById("sim-transition-flash");
  
  const terminalText = document.getElementById("emulator-terminal-text");
  const consoleTabName = document.getElementById("console-tab-name");
  
  const teleScreenKey = document.getElementById("tele-screen-key");
  const teleDbStatus = document.getElementById("tele-db-status");
  const teleProcess = document.getElementById("tele-process");
  const teleDescription = document.getElementById("tele-description");
  
  const gaugeCpu = document.getElementById("gauge-cpu");
  const gaugeCpuVal = document.getElementById("gauge-cpu-val");
  const gaugeMem = document.getElementById("gauge-mem");
  const gaugeMemVal = document.getElementById("gauge-mem-val");
  const gaugePing = document.getElementById("gauge-ping");
  const gaugePingVal = document.getElementById("gauge-ping-val");
  const gaugeSec = document.getElementById("gauge-sec");
  
  const btnToggleTour = document.getElementById("btn-toggle-tour");
  const tourTimerBox = document.getElementById("tour-timer-box");
  const tourTimerText = document.getElementById("tour-timer-text");
  const tourText = document.getElementById("tour-text");
  const tourIcon = document.getElementById("tour-icon");

  let activeIndex = 0;
  let tourInterval = null;
  let tourTimeRemaining = 3.0;
  let timerCountdownInterval = null;

  // ── 2. Typewriter Terminal Method ──
  function typewriteLogBlock(fullLogText, onComplete) {
    if (!terminalText) return;
    
    terminalText.innerHTML = "";
    const lines = fullLogText.split("\n");
    let currentLine = 0;
    
    function writeNextLine() {
      if (currentLine < lines.length) {
        let lineContent = lines[currentLine];
        
        // ANSI highlights translations
        lineContent = lineContent
          .replace(/(agritrade-client\$ [^\n]+)/g, '<span class="code-keyword">$1</span>')
          .replace(/(\[INFO\])/g, '<span class="code-type">$1</span>')
          .replace(/(\[SUCCESS\])/g, '<span class="code-string">$1</span>')
          .replace(/(\[WARNING\])/g, '<span class="code-keyword" style="color: #EF4444;">$1</span>')
          .replace(/(\[DATABASE\]|\[ESCROW\]|\[PAYMENT\]|\[SECURITY\]|\[SMS\])/g, '<span class="code-function">$1</span>')
          .replace(/(\[AI\]|\[VECTORS\]|\[L10N\]|\[ANALYTICS\]|\[LOGISTICS\])/g, '<span class="code-type" style="color: #60A5FA;">$1</span>')
          .replace(/(\/\/ [^\n]+)/g, '<span class="code-comment">$1</span>');
          
        terminalText.innerHTML += lineContent + "\n";
        
        // Auto-scroll terminal
        const termBody = terminalText.parentElement;
        termBody.scrollTop = termBody.scrollHeight;
        
        currentLine++;
        setTimeout(writeNextLine, 50); // Fast line printing (50ms)
      } else {
        if (onComplete) onComplete();
      }
    }
    
    writeNextLine();
  }

  // ── 3. Screen Activation Logic ──
  function activateScreen(index) {
    if (index < 0 || index >= EMULATOR_SCREENS.length) return;
    activeIndex = index;
    const screenData = EMULATOR_SCREENS[index];
    
    // 1. Highlight Menu Item
    menuItems.forEach(item => {
      if (parseInt(item.dataset.index) === index) {
        item.classList.add("active");
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        item.classList.remove("active");
      }
    });

    // 2. Perform smooth screen transition flashing
    if (simTransitionFlash && phoneScreenImage) {
      simTransitionFlash.classList.add("active");
      setTimeout(() => {
        phoneScreenImage.src = `./assets/screenshots/${screenData.key}`;
        simTransitionFlash.classList.remove("active");
      }, 250);
    }

    // 3. Update Diagnostics telemetry labels
    if (teleScreenKey) teleScreenKey.innerText = screenData.key;
    if (teleDbStatus) teleDbStatus.innerText = screenData.db;
    if (teleProcess) teleProcess.innerText = screenData.process;
    if (teleDescription) teleDescription.innerText = screenData.desc;
    if (consoleTabName) consoleTabName.innerText = `diagnostics_${screenData.key.replace(".jpg", ".log")}`;

    // 4. Update Gauges
    if (gaugeCpu && gaugeCpuVal) {
      gaugeCpu.style.width = `${screenData.cpu}%`;
      gaugeCpuVal.innerText = `${screenData.cpu}%`;
      if (screenData.cpu > 50) {
        gaugeCpu.className = "gauge-bar-fill gold";
      } else {
        gaugeCpu.className = "gauge-bar-fill emerald";
      }
    }
    if (gaugeMem && gaugeMemVal) {
      // Scale visual progress bar relative to maximum 100MB heap
      const percentage = Math.min((parseFloat(screenData.mem) / 100) * 100, 100);
      gaugeMem.style.width = `${percentage}%`;
      gaugeMemVal.innerText = screenData.mem;
    }
    if (gaugePing && gaugePingVal) {
      const pingValStr = screenData.ping;
      const isLocal = pingValStr.includes("LOCAL");
      const numericalPing = isLocal ? 0 : parseInt(pingValStr);
      // Map 0-300ms range onto 0-100% progress
      const pingPercent = Math.min((numericalPing / 300) * 100, 100);
      gaugePing.style.width = isLocal ? "0%" : `${pingPercent}%`;
      gaugePingVal.innerText = pingValStr;
    }
    if (gaugeSec) {
      gaugeSec.innerText = screenData.security;
      if (screenData.security.includes("LOCAL") || screenData.security.includes("L10N")) {
        gaugeSec.className = "security-status-text";
      } else {
        gaugeSec.className = "security-status-text secure";
      }
    }

    // 5. Typewrite console output logs
    typewriteLogBlock(screenData.log);
  }

  // Bind trigger callbacks
  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      // Manual selection halts automatic tour sweeps
      if (tourInterval) {
        stopTour();
      }
      const targetIndex = parseInt(item.dataset.index);
      activateScreen(targetIndex);
    });
  });

  // ── 4. Auto-Play Tour Walkthrough Controls ──
  function startTour() {
    tourText.innerText = "Halt Tour Auto-Play";
    tourIcon.innerText = "⏹";
    btnToggleTour.classList.add("active");
    tourTimerBox.style.display = "flex";
    
    tourTimeRemaining = 3.5;
    tourTimerText.innerText = `${tourTimeRemaining.toFixed(1)}s`;

    // Advance screen every 3.5 seconds
    tourInterval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex >= EMULATOR_SCREENS.length) {
        nextIndex = 0; // Wrap around to beginning
      }
      activateScreen(nextIndex);
      tourTimeRemaining = 3.5;
    }, 3500);

    // Dynamic timer clock ticks (100ms refresh)
    timerCountdownInterval = setInterval(() => {
      tourTimeRemaining -= 0.1;
      if (tourTimeRemaining < 0) tourTimeRemaining = 0;
      tourTimerText.innerText = `${tourTimeRemaining.toFixed(1)}s`;
    }, 100);
  }

  function stopTour() {
    clearInterval(tourInterval);
    clearInterval(timerCountdownInterval);
    tourInterval = null;
    timerCountdownInterval = null;
    
    tourText.innerText = "Auto-Play Tour Sequence";
    tourIcon.innerText = "▶";
    btnToggleTour.classList.remove("active");
    tourTimerBox.style.display = "none";
  }

  if (btnToggleTour) {
    btnToggleTour.addEventListener("click", () => {
      if (tourInterval) {
        stopTour();
      } else {
        startTour();
      }
    });
  }

  // ── 5. System Clock Simulator ──
  function updateSimClock() {
    const simClock = document.getElementById("sim-clock");
    if (!simClock) return;
    
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    simClock.innerText = `${hours}:${minutes} ${ampm}`;
  }
  
  updateSimClock();
  setInterval(updateSimClock, 30000); // Check clock every 30 seconds

  // Initialize display frame
  activateScreen(0);
});

// ── 6. Generative Background Liquid UI Metaball & Glass Orb Engine ──
class LiquidUIBackgroundCanvasEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    
    this.orbs = [];
    this.shapes = [];
    this.ripples = [];
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
    
    // Trigger concentric ripple on click
    window.addEventListener("mousedown", (e) => {
      if (this.width > 0 && e.clientX < this.width) {
        this.ripples.push({
          x: e.clientX,
          y: e.clientY + this.scrollY * 0.15,
          radius: 0,
          maxRadius: 80,
          opacity: 0.8,
          speed: 2.5
        });
      }
    });

    // Populate dynamic liquid orbs and UX outline shapes
    this.initLiquidOrbs();
    this.initUXShapes(22);

    // Begin render frame loop
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * window.devicePixelRatio;
    this.canvas.height = this.height * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    if (this.shapes.length > 0) {
      this.initUXShapes(22);
    }
  }

  initLiquidOrbs() {
    this.orbs = [
      {
        x: this.width * 0.25,
        y: this.height * 0.3,
        vx: 0.28,
        vy: 0.15,
        radius: 170,
        color: "rgba(16, 185, 129, 0.26)", // Emerald Glow
        phase: 0
      },
      {
        x: this.width * 0.75,
        y: this.height * 0.25,
        vx: -0.22,
        vy: 0.18,
        radius: 140,
        color: "rgba(245, 158, 11, 0.2)", // Gold Glow
        phase: Math.PI / 2
      },
      {
        x: this.width * 0.5,
        y: this.height * 0.65,
        vx: 0.18,
        vy: -0.22,
        radius: 160,
        color: "rgba(52, 211, 153, 0.24)", // Mint Glow
        phase: Math.PI
      },
      {
        x: this.width * 0.8,
        y: this.height * 0.75,
        vx: -0.15,
        vy: -0.12,
        radius: 130,
        color: "rgba(59, 130, 246, 0.16)", // Mobile Blue Glow
        phase: Math.PI * 1.5
      }
    ];
  }

  initUXShapes(count) {
    this.shapes = [];
    const types = ["screen", "cursor", "tap", "plus"];
    
    for (let i = 0; i < count; i++) {
      this.shapes.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height * 4.0,
        type: types[i % types.length],
        size: Math.random() * 25 + 15,
        speedY: -(Math.random() * 0.35 + 0.15),
        speedX: (Math.random() - 0.5) * 0.08,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015,
        opacity: Math.random() * 0.45 + 0.15,
        color: i % 2 === 0 ? "rgba(16, 185, 129, 0.4)" : "rgba(245, 158, 11, 0.3)"
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
    this.ctx.fillStyle = "#04080e";
    this.ctx.fillRect(0, 0, this.width, this.height);
    
    // Draw all layers sequentially
    this.drawPixelGrid();
    this.drawLiquidOrbs();
    this.drawUXShapes();
    this.drawRipples();

    requestAnimationFrame(() => this.animate());
  }

  drawPixelGrid() {
    this.ctx.lineWidth = 1;
    const dotSize = 2;
    const gap = 32;
    const scrollOffset = (this.scrollY * 0.25) % gap;
    
    // Pixel Mesh Grid: subtle dots that highlight under the cursor
    for (let x = gap / 2; x < this.width + gap; x += gap) {
      for (let y = -gap; y < this.height + gap; y += gap) {
        const finalY = y - scrollOffset;
        
        let dx = x - this.mouseX;
        let dy = finalY - this.mouseY;
        let dist = Math.sqrt(dx * dx + dy * dy);
        
        // Highlight pixels near cursor hotspot
        if (dist < 180) {
          const brightness = 1 - dist / 180;
          this.ctx.fillStyle = `rgba(16, 185, 129, ${0.04 + brightness * 0.18})`;
          this.ctx.beginPath();
          this.ctx.arc(x, finalY, dotSize + brightness * 1.5, 0, Math.PI * 2);
          this.ctx.fill();
        } else {
          this.ctx.fillStyle = "rgba(255, 255, 255, 0.015)";
          this.ctx.beginPath();
          this.ctx.arc(x, finalY, dotSize, 0, Math.PI * 2);
          this.ctx.fill();
        }
      }
    }
  }

  drawLiquidOrbs() {
    const scrollOffset = this.scrollY * 0.15;
    
    this.orbs.forEach(orb => {
      // 1. Idle lazy drift drift
      orb.x += orb.vx;
      orb.y += orb.vy;
      
      // Screen bounds reflection
      if (orb.x < -orb.radius || orb.x > this.width + orb.radius) orb.vx *= -1;
      if (orb.y < -orb.radius || orb.y > this.height * 2.0) orb.vy *= -1;
      
      let finalY = orb.y - scrollOffset;
      
      // 2. Mouse gravity: attract slightly to cursor coordinates
      let dx = this.mouseX - orb.x;
      let dy = this.mouseY - finalY;
      let dist = Math.sqrt(dx * dx + dy * dy);
      
      let ox = 0;
      let oy = 0;
      if (dist < 320 && this.mouseX !== -2000) {
        const gravity = (320 - dist) * 0.12;
        ox = (dx / dist) * gravity;
        oy = (dy / dist) * gravity;
      }
      
      const rx = orb.x + ox;
      const ry = finalY + oy;
      
      // 3. Render organic soft metaball gradients
      const scalePhase = Math.sin(this.pulseTime * 0.6 + orb.phase) * 15;
      const finalRadius = orb.radius + scalePhase;
      
      if (ry >= -finalRadius && ry <= this.height + finalRadius) {
        const grad = this.ctx.createRadialGradient(rx, ry, 0, rx, ry, finalRadius);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(0.5, orb.color.replace("0.2", "0.08").replace("0.1", "0.04"));
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        
        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.arc(rx, ry, finalRadius, 0, Math.PI * 2);
        this.ctx.fill();
      }
    });
  }

  drawUXShapes() {
    const scrollOffset = this.scrollY * 0.22;
    
    this.shapes.forEach(s => {
      s.y += s.speedY;
      s.x += s.speedX;
      s.rot += s.rotSpeed;
      
      const py = s.y - scrollOffset;
      
      // Wrap boundaries
      if (py < -50) {
        s.y = this.scrollY * 0.22 + this.height + 50 + Math.random() * 200;
        s.x = Math.random() * this.width;
      }
      if (s.x < -50 || s.x > this.width + 50) {
        s.x = Math.random() * this.width;
      }
      
      if (py >= -40 && py <= this.height + 40) {
        // Cursor repulsion
        let dx = s.x - this.mouseX;
        let dy = py - this.mouseY;
        let dist = Math.sqrt(dx * dx + dy * dy);
        
        let ox = 0;
        let oy = 0;
        if (dist < 140) {
          const repel = (140 - dist) * 0.22;
          ox = (dx / dist) * repel;
          oy = (dy / dist) * repel;
        }
        
        const rx = s.x + ox;
        const ry = py + oy;
        
        this.ctx.save();
        this.ctx.translate(rx, ry);
        this.ctx.rotate(s.rot);
        this.ctx.strokeStyle = s.color;
        this.ctx.lineWidth = 1.2;
        this.ctx.globalAlpha = s.opacity;
        
        if (s.type === "screen") {
          // Outline phone device
          this.ctx.beginPath();
          this.ctx.roundRect(-s.size / 2, -s.size, s.size, s.size * 1.8, 4);
          this.ctx.stroke();
          // Mini notch
          this.ctx.beginPath();
          this.ctx.moveTo(-s.size / 4, -s.size);
          this.ctx.lineTo(s.size / 4, -s.size);
          this.ctx.stroke();
        } else if (s.type === "cursor") {
          // Cursor arrow vector shape
          this.ctx.beginPath();
          this.ctx.moveTo(0, -s.size / 2);
          this.ctx.lineTo(s.size / 3, s.size / 3);
          this.ctx.lineTo(0, s.size / 5);
          this.ctx.lineTo(-s.size / 3, s.size / 3);
          this.ctx.closePath();
          this.ctx.stroke();
        } else if (s.type === "tap") {
          // Interactive target circle ring
          this.ctx.beginPath();
          this.ctx.arc(0, 0, s.size / 2, 0, Math.PI * 2);
          this.ctx.stroke();
          // Inner dot
          this.ctx.fillStyle = s.color;
          this.ctx.beginPath();
          this.ctx.arc(0, 0, 3, 0, Math.PI * 2);
          this.ctx.fill();
        } else if (s.type === "plus") {
          // Technical plus emblem
          this.ctx.beginPath();
          this.ctx.moveTo(-s.size / 2, 0);
          this.ctx.lineTo(s.size / 2, 0);
          this.ctx.moveTo(0, -s.size / 2);
          this.ctx.lineTo(0, s.size / 2);
          this.ctx.stroke();
        }
        
        this.ctx.restore();
      }
    });
    this.ctx.globalAlpha = 1.0;
  }

  drawRipples() {
    const scrollOffset = this.scrollY * 0.15;
    
    this.ripples.forEach((rip, idx) => {
      rip.radius += rip.speed;
      rip.opacity = 1 - (rip.radius / rip.maxRadius);
      
      const ry = rip.y - scrollOffset;
      
      if (rip.radius >= rip.maxRadius || ry < -50 || ry > this.height + 50) {
        this.ripples.splice(idx, 1);
        return;
      }
      
      this.ctx.strokeStyle = `rgba(16, 185, 129, ${rip.opacity * 0.8})`;
      this.ctx.lineWidth = 1.5;
      
      this.ctx.beginPath();
      this.ctx.arc(rip.x, ry, rip.radius, 0, Math.PI * 2);
      this.ctx.stroke();
      
      this.ctx.strokeStyle = `rgba(245, 158, 11, ${rip.opacity * 0.4})`;
      this.ctx.beginPath();
      this.ctx.arc(rip.x, ry, rip.radius * 0.6, 0, Math.PI * 2);
      this.ctx.stroke();
    });
  }
}

// Instantiate canvas background on load
const bgCanvas = document.getElementById("arch-scroll-canvas");
if (bgCanvas) {
  new LiquidUIBackgroundCanvasEngine(bgCanvas);
}
