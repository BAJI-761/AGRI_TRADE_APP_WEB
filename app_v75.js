/**
 * AGRI_TRADE_WEB — INTERACTIVE APPLICATION LOGIC & CROP SIMULATOR
 * 
 * Ported Dart SmartCropEngine directly into client-side JS for the live simulator.
 * Coordinates all scroll-reveals, stats counting, marquee prices, sticky nav states,
 * and high-end screenshot lightbox overlay micro-interactions.
 */

// ── Smart Crop Recommendation Engine (Ported from Flutter Dart Code) ──
const CROP_DATABASE = [
  {
    name: "Rice (Paddy)",
    description: "Staple food crop requiring significant water.",
    advantages: ["High market demand", "Stable government procurement", "Suitable for clay soils"],
    careTips: ["Maintain standing water", "Monitor for stem borers", "Apply nitrogen fertilizer"],
    suitableSoils: ["Clay", "Silt", "Loamy"],
    suitableSeasons: ["Monsoon", "Kharif", "Summer"],
    waterRequirement: "High",
    suitableIrrigation: ["Canal", "Well", "Rain-fed"],
    minYield: 2.0,
    maxYield: 3.5,
    minPrice: 20000, // Per ton
    maxPrice: 25000,
    costOfCultivation: 25000, // Per acre
    durationMin: 120,
    durationMax: 150,
    riskProfile: "Low",
    isCommercial: true
  },
  {
    name: "Wheat",
    description: "Major cereal grain adapted to cooler climates.",
    advantages: ["Less water than rice", "Mechanized harvesting easy", "Nutritious grain"],
    careTips: ["Irrigate at crown root initiation", "Check for rust disease", "Weed control is crucial"],
    suitableSoils: ["Loamy", "Clay", "Silt"],
    suitableSeasons: ["Winter", "Rabi", "Spring"],
    waterRequirement: "Medium",
    suitableIrrigation: ["Canal", "Well", "Sprinkler"],
    minYield: 1.5,
    maxYield: 2.5,
    minPrice: 21000,
    maxPrice: 24000,
    costOfCultivation: 18000,
    durationMin: 110,
    durationMax: 140,
    riskProfile: "Low",
    isCommercial: true
  },
  {
    name: "Cotton",
    description: "Principal fiber crop, good for black soil.",
    advantages: ["High cash crop value", "Export demand", "Suitable for dry regions"],
    careTips: ["Monitor for bollworms", "Avoid waterlogging", "Timely picking"],
    suitableSoils: ["Black", "Loamy"],
    suitableSeasons: ["Kharif", "Monsoon"],
    waterRequirement: "Medium",
    suitableIrrigation: ["Drip", "Rain-fed", "Canal"],
    minYield: 0.8,
    maxYield: 1.5,
    minPrice: 50000,
    maxPrice: 70000,
    costOfCultivation: 22000,
    durationMin: 150,
    durationMax: 180,
    riskProfile: "Medium",
    isCommercial: true
  },
  {
    name: "Millets (Ragi/Bajra)",
    description: "Hardy cereals suitable for dry lands.",
    advantages: ["Drought tolerant", "Low input cost", "High nutritional value"],
    careTips: ["Requires less fertilizer", "Thinning of seedlings", "Bird protection"],
    suitableSoils: ["Red", "Sandy", "Loamy", "Silt"],
    suitableSeasons: ["Kharif", "Summer", "Monsoon"],
    waterRequirement: "Low",
    suitableIrrigation: ["Rain-fed", "Sprinkler"],
    minYield: 0.6,
    maxYield: 1.2,
    minPrice: 25000,
    maxPrice: 35000,
    costOfCultivation: 8000,
    durationMin: 90,
    durationMax: 110,
    riskProfile: "Low"
  },
  {
    name: "Sugarcane",
    description: "Long duration cash crop.",
    advantages: ["High biomass", "Used for sugar and ethanol", "Sturdy crop"],
    careTips: ["Needs regular irrigation", "Propping to prevent lodging", "Earthing up"],
    suitableSoils: ["Loamy", "Clay", "Black"],
    suitableSeasons: ["Spring", "Autumn", "Year-round"],
    waterRequirement: "High",
    suitableIrrigation: ["Canal", "Well", "Drip"],
    minYield: 30,
    maxYield: 50,
    minPrice: 3000,
    maxPrice: 4000,
    costOfCultivation: 40000,
    durationMin: 300,
    durationMax: 360,
    riskProfile: "Low",
    isCommercial: true
  },
  {
    name: "Tomato",
    description: "Short duration vegetable crop.",
    advantages: ["Short cycle", "High yield potential", "Everyday demand"],
    careTips: ["Staking required", "Pest control needed", "Frequent harvest"],
    suitableSoils: ["Red", "Loamy", "Black"],
    suitableSeasons: ["Winter", "Summer", "Spring"],
    waterRequirement: "Medium",
    suitableIrrigation: ["Drip", "Well"],
    minYield: 10,
    maxYield: 25,
    minPrice: 10000,
    maxPrice: 30000,
    costOfCultivation: 30000,
    durationMin: 90,
    durationMax: 120,
    riskProfile: "High",
    isIntensive: true
  },
  {
    name: "Groundnut",
    description: "Oilseed crop, fixes nitrogen.",
    advantages: ["Soil improvement", "Oil and fodder value", "Short duration"],
    careTips: ["Gypsum application", "Control tikka disease", "Loose soil for pegs"],
    suitableSoils: ["Sandy", "Red", "Loamy"],
    suitableSeasons: ["Kharif", "Summer"],
    waterRequirement: "Medium",
    suitableIrrigation: ["Sprinkler", "Rain-fed"],
    minYield: 0.8,
    maxYield: 1.5,
    minPrice: 45000,
    maxPrice: 60000,
    costOfCultivation: 15000,
    durationMin: 100,
    durationMax: 130,
    riskProfile: "Low"
  },
  {
    name: "Chilli",
    description: "High value spice crop.",
    advantages: ["Export potential", "Used fresh or dried", "High returns"],
    careTips: ["Nursery management", "Virus control", "Proper drying"],
    suitableSoils: ["Black", "Loamy", "Red"],
    suitableSeasons: ["Kharif", "Rabi"],
    waterRequirement: "Medium",
    suitableIrrigation: ["Drip", "Well"],
    minYield: 1.5,
    maxYield: 2.5,
    minPrice: 100000,
    maxPrice: 150000,
    costOfCultivation: 40000,
    durationMin: 150,
    durationMax: 180,
    riskProfile: "Medium",
    isIntensive: true
  },
  {
    name: "Maize (Corn)",
    description: "Versatile cereal and fodder crop.",
    advantages: ["Wide adaptability", "Industrial use", "Biomass for fodder"],
    careTips: ["Avoid water stagnation", "Control fall armyworm", "Split fertilizer application"],
    suitableSoils: ["Loamy", "Silt", "Red", "Black"],
    suitableSeasons: ["Kharif", "Rabi", "Spring"],
    waterRequirement: "Medium",
    suitableIrrigation: ["Rain-fed", "Sprinkler", "Canal"],
    minYield: 2.0,
    maxYield: 3.5,
    minPrice: 18000,
    maxPrice: 22000,
    costOfCultivation: 15000,
    durationMin: 90,
    durationMax: 110,
    riskProfile: "Low",
    isCommercial: true
  },
  {
    name: "Banana",
    description: "High energy fruit crop.",
    advantages: ["Year round income", "High biomass", "Intercropping possible"],
    careTips: ["Desucker removal", "Propping", "High nutrient needs"],
    suitableSoils: ["Loamy", "Clay", "Silt"],
    suitableSeasons: ["Year-round"],
    waterRequirement: "High",
    suitableIrrigation: ["Drip", "Canal"],
    minYield: 25,
    maxYield: 40,
    minPrice: 10000,
    maxPrice: 15000,
    costOfCultivation: 50000,
    durationMin: 300,
    durationMax: 360,
    riskProfile: "Medium",
    isIntensive: true
  }
];

function runSmartCropEngine(soilType, season, waterAvailability, irrigationType, totalLand, budgetRange) {
  let scoredCrops = [];
  const acres = parseFloat(totalLand) || 1;

  for (let crop of CROP_DATABASE) {
    let score = 0;
    let breakdown = {};

    // 1. Soil Match (+20 Exact, +10 Compatible)
    if (crop.suitableSoils.includes(soilType)) {
      score += 20;
      breakdown['Soil Match'] = 20;
    } else {
      if (soilType === 'Loamy' || crop.suitableSoils.includes('Loamy')) {
        score += 10;
        breakdown['Soil Compatible'] = 10;
      }
    }

    // 2. Season Match (+20)
    if (crop.suitableSeasons.includes(season) || crop.suitableSeasons.includes("Year-round")) {
      score += 20;
      breakdown['Season Match'] = 20;
    }

    // 3. Water Match (+20, -30 Severe Penalty)
    let isWaterSevereMismatch = false;
    if (crop.waterRequirement === waterAvailability) {
      score += 20;
      breakdown['Water Match'] = 20;
    } else if (crop.waterRequirement === 'Low' && waterAvailability !== 'Low') {
      score += 20;
      breakdown['Water Sufficient'] = 20;
    } else if (crop.waterRequirement === 'High' && waterAvailability === 'Low') {
      score -= 30;
      isWaterSevereMismatch = true;
      breakdown['Water Mismatch'] = -30;
    } else {
      score += 5;
      breakdown['Water Partial'] = 5;
    }

    // 4. Irrigation Match (+10)
    if (crop.suitableIrrigation.includes(irrigationType)) {
      score += 10;
      breakdown['Irrigation Match'] = 10;
    }

    // 5. Land Size Logic (+10 Bonus)
    if (acres > 5 && crop.isCommercial) {
      score += 10;
      breakdown['Large Land Bonus'] = 10;
    }
    if (acres < 2 && crop.isIntensive) {
      score += 10;
      breakdown['Small Land Bonus'] = 10;
    }

    scoredCrops.push({
      crop: crop,
      score: score,
      breakdown: breakdown,
      isWaterSevereMismatch: isWaterSevereMismatch
    });
  }

  // Sort by Score descending
  scoredCrops.sort((a, b) => b.score - a.score);

  // Take Top 3
  const topCrops = scoredCrops.slice(0, 3);

  // Convert to prediction outputs
  return topCrops.map(item => {
    const crop = item.crop;
    const score = item.score;
    
    // Financial calculations
    const avgYield = (crop.minYield + crop.maxYield) / 2;
    const avgPrice = (crop.minPrice + crop.maxPrice) / 2;
    const revenue = acres * avgYield * avgPrice;
    const cost = acres * crop.costOfCultivation;
    const profit = revenue - cost;

    // Estimate confidence
    let confidence = Math.min(95, Math.max(50, score + 10)) / 100;

    // Risk profiling
    let risk = crop.riskProfile;
    if (item.isWaterSevereMismatch) {
      risk = "High (Water Short)";
    } else if (!crop.suitableIrrigation.includes(irrigationType)) {
      risk = "Medium (Irrigation)";
    }

    return {
      name: crop.name,
      confidence: confidence,
      description: crop.description,
      yieldRange: `${crop.minYield}-${crop.maxYield} tons/acre`,
      profitRange: `₹${Math.round(profit * 0.9).toLocaleString('en-IN')} - ₹${Math.round(profit * 1.1).toLocaleString('en-IN')}`,
      riskLevel: risk,
      advantages: crop.advantages,
      careTips: crop.careTips
    };
  });
}

// ── Main Page Orchestration ──
document.addEventListener("DOMContentLoaded", () => {
  // Page Loader Fadeout
  const pageLoader = document.querySelector(".page-loader");
  if (pageLoader) {
    setTimeout(() => {
      pageLoader.classList.add("loaded");
    }, 600);
  }

  // 1. Navigation logic removed for simple static navigation

  // 2. Fresh Mobile Hamburger Menu Toggler
  const toggleBtn = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("nav-open");
      const spans = toggleBtn.querySelectorAll("span");
      if (navLinks.classList.contains("nav-open")) {
        // Morph hamburger bars to "X"
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
      } else {
        // Reset to original hamburger bars
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });

    // Close mobile menu if user clicks on a link
    navLinks.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("nav-open");
        const spans = toggleBtn.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      });
    });
  }

  // 3. Scroll Reveal Engine (Intersection Observer)
  const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        
        // Custom check for triggering numbers counters
        if (entry.target.classList.contains("impact-card")) {
          animateCounter(entry.target.querySelector(".impact-number"));
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 4. Easing Stats Counter
  function animateCounter(numElement) {
    if (!numElement || numElement.dataset.counted === "true") return;
    numElement.dataset.counted = "true";
    
    const targetString = numElement.dataset.target || numElement.innerText.trim();
    
    // Parse the number and suffixes (e.g., "92,000", "86%", "70%")
    const numericPart = parseFloat(targetString.replace(/[^\d.]/g, ''));
    const isPercent = targetString.includes('%');
    const isRupee = targetString.includes('₹');
    const suffix = targetString.replace(/[\d,₹%.\s]/g, ''); // Extract 'Cr' or letters
    
    let startTimestamp = null;
    const duration = 2000; // 2 seconds
    
    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Quartic out easing curve
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeProgress * numericPart);
      
      let formatted = currentValue;
      if (numericPart > 1000) {
        formatted = currentValue.toLocaleString('en-IN');
      }
      
      if (isRupee) formatted = '₹' + formatted;
      if (isPercent) formatted = formatted + '%';
      if (suffix) formatted = formatted + ' ' + suffix;
      
      numElement.innerText = formatted;
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }
    
    window.requestAnimationFrame(step);
  }

  // 5. Crop Prediction Simulator Handling
  const simForm = document.getElementById("simulator-form");
  const resultsContainer = document.getElementById("sim-results");
  const resultsCardsWrapper = document.getElementById("sim-cards-wrapper");
  
  // Connect Slider and its text value display
  const landSlider = document.getElementById("land-size");
  const landValueDisplay = document.getElementById("land-size-val");
  if (landSlider && landValueDisplay) {
    landSlider.addEventListener("input", (e) => {
      landValueDisplay.innerText = `${parseFloat(e.target.value).toFixed(1)} Acres`;
    });
  }

  if (simForm && resultsContainer && resultsCardsWrapper) {
    simForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Extract Form values
      const soilType = document.getElementById("soil-type").value;
      const season = document.getElementById("season").value;
      const water = document.getElementById("water-avail").value;
      const irrigation = document.getElementById("irrigation-type").value;
      const landSize = landSlider ? landSlider.value : 1;
      const budget = document.getElementById("budget-range") ? document.getElementById("budget-range").value : "Medium";
      
      // Run algorithm
      const predictions = runSmartCropEngine(soilType, season, water, irrigation, landSize, budget);
      
      // Render results smoothly
      resultsCardsWrapper.innerHTML = '';
      
      predictions.forEach((pred, index) => {
        const confidencePercentage = Math.round(pred.confidence * 100);
        // Calculate circle SVG offset based on percentage (circumference = 201)
        const offset = 201 - (201 * pred.confidence);
        
        const riskClass = pred.riskLevel.toLowerCase().includes('low') ? 'risk-low' : 
                          pred.riskLevel.toLowerCase().includes('high') ? 'risk-high' : 'risk-medium';
        
        const predCardHTML = `
          <div class="prediction-card" style="animation-delay: ${index * 150}ms">
            <div class="confidence-ring">
              <svg>
                <circle class="ring-bg" cx="36" cy="36" r="32"></circle>
                <circle class="ring-fill" cx="36" cy="36" r="32" style="stroke-dashoffset: ${offset}"></circle>
              </svg>
              <div class="ring-value">${confidencePercentage}%</div>
            </div>
            <div>
              <div class="pred-name">${pred.name}</div>
              <div class="pred-detail">${pred.description}</div>
              <div style="display: flex; gap: 12px; align-items: center; margin-top: 6px; flex-wrap: wrap;">
                <div class="pred-profit">Estimated Profit: ${pred.profitRange}</div>
                <div class="pred-risk ${riskClass}">${pred.riskLevel} Risk</div>
              </div>
              <div style="margin-top: 10px; font-size: 13px; color: var(--text-muted);">
                <strong>Yield:</strong> ${pred.yieldRange} &middot; 
                <strong>Care:</strong> ${pred.careTips.slice(0, 2).join(", ")}
              </div>
            </div>
          </div>
        `;
        resultsCardsWrapper.insertAdjacentHTML('beforeend', predCardHTML);
      });
      
      // Show results
      resultsContainer.classList.add("active");
      
      // Smooth scroll to results
      setTimeout(() => {
        resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    });
  }

  // 6. Interactive Lightbox for screenshots
  const galleryItems = document.querySelectorAll(".screenshot-item, .bento-screenshot");
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img src="" alt="Zoomed Screenshot">
  `;
  document.body.appendChild(lightbox);
  
  const lightboxImg = lightbox.querySelector("img");
  const lightboxClose = lightbox.querySelector(".lightbox-close");
  
  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      if (img) {
        lightboxImg.src = img.src;
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent scrolling when open
      }
    });
  });
  
  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }
  
  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      closeLightbox();
    }
  });
  
  lightboxClose.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });

  // 7. Live Market Price Navbar Scroller Data
  const marqueeTrack = document.querySelector(".marquee-track");
  if (marqueeTrack) {
    const prices = [
      { name: "Wheat (Grade A)", price: "₹24,500/T", change: "↑ 2.4%", up: true },
      { name: "Paddy (Rice)", price: "₹22,100/T", change: "↑ 1.8%", up: true },
      { name: "Cotton (Raw)", price: "₹67,000/T", change: "↓ 0.5%", up: false },
      { name: "Tomato (Desi)", price: "₹18,000/T", change: "↑ 9.2%", up: true },
      { name: "Maize (Feed)", price: "₹20,300/T", change: "↑ 0.3%", up: true },
      { name: "Groundnut (Pods)", price: "₹58,200/T", change: "↓ 1.2%", up: false },
      { name: "Millets (Ragi)", price: "₹31,000/T", change: "↑ 4.5%", up: true },
      { name: "Sugarcane", price: "₹3,400/T", change: "↑ 0.0%", up: true },
      { name: "Chilli (Guntur)", price: "₹1,25,000/T", change: "↑ 3.2%", up: true },
      { name: "Banana (Robust)", price: "₹12,400/T", change: "↓ 2.1%", up: false }
    ];

    // Populate navbar tickers and marquee strips
    function populateTickers() {
      // First populate top nav ticker if it exists

      // Populate full scrolling marquee
      const marqueeHTML = prices.map(p => `
        <div class="marquee-item">
          <div class="marquee-dot"></div>
          <strong>${p.name}:</strong> <span>${p.price}</span>
          <span style="color: ${p.up ? '#22C55E' : '#EF4444'}; font-weight: bold;">${p.change}</span>
        </div>
      `).join("");
      
      // Repeat twice for seamless loop scrolling
      marqueeTrack.innerHTML = marqueeHTML + marqueeHTML;
    }

    populateTickers();
    // Simulate real-time price fluctuations every 8 seconds
    setInterval(() => {
      prices.forEach(p => {
        const delta = (Math.random() - 0.48) * 1.5; // slight bias towards positive growth
        const currentPrice = parseInt(p.price.replace(/[^\d]/g, ''));
        const newPrice = Math.round(currentPrice * (1 + delta / 100));
        
        p.price = '₹' + newPrice.toLocaleString('en-IN') + (p.price.includes('/T') ? '/T' : '');
        p.change = (delta >= 0 ? '↑ ' : '↓ ') + Math.abs(delta).toFixed(1) + '%';
        p.up = delta >= 0;
      });
      populateTickers();
    }, 8000);
  }

  // ── 8. Farmer & Retailer Interactive Showcase Tab Switching Logic ──
  const farmerCards = document.querySelectorAll("#farmer-showcase-menu .showcase-card");
  const farmerScreenshots = document.querySelectorAll(".device-mockup-portrait .device-screenshot");
  
  function activateFarmerFeature(card) {
    if (!card) return;
    
    // Remove active class from all card triggers
    farmerCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    
    // Swap phone mockup screenshots with a smooth hardware transition
    const featureName = card.dataset.feature; // e.g. "farmer-diagnostics"
    farmerScreenshots.forEach(screen => {
      if (screen.id === `farmer-screenshot-${featureName.split("-")[1]}`) {
        screen.classList.add("active");
      } else {
        screen.classList.remove("active");
      }
    });
  }

  farmerCards.forEach(card => {
    // Switch active state on hover or click for zero delay adoption
    card.addEventListener("mouseenter", () => activateFarmerFeature(card));
    card.addEventListener("click", () => activateFarmerFeature(card));
  });

  // Retailer Showcase controls
  const retailerCards = document.querySelectorAll("#retailer-showcase-menu .showcase-card");
  const retailerScreenshots = document.querySelectorAll("#retailer-features .device-screenshot");

  function activateRetailerFeature(card) {
    if (!card) return;
    
    retailerCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    
    const featureName = card.dataset.feature; // e.g. "retailer-ledger"
    retailerScreenshots.forEach(screen => {
      if (screen.id === `retailer-screenshot-${featureName.split("-")[1]}`) {
        screen.classList.add("active");
      } else {
        screen.classList.remove("active");
      }
    });
  }

  retailerCards.forEach(card => {
    card.addEventListener("mouseenter", () => activateRetailerFeature(card));
    card.addEventListener("click", () => activateRetailerFeature(card));
  });

  // ── 9. Mouse spotlight coordinates tracking ──
  const allShowcaseCards = document.querySelectorAll(".showcase-card, .market-metric-card, .bento-card");
  allShowcaseCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });

  // ── 10. Sequential Timeline Step Observer Highlights ──
  const stepElements = document.querySelectorAll(".step");
  const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add active sequential highlight when scrolled in
        entry.target.classList.add("step-active");
      } else {
        // Remove only when scrolled completely above viewport
        const rect = entry.boundingClientRect;
        if (rect.top > window.innerHeight) {
          entry.target.classList.remove("step-active");
        }
      }
    });
  }, {
    threshold: 0.4, // trigger when 40% visible
    rootMargin: "0px 0px -10% 0px"
  });

  stepElements.forEach(step => stepObserver.observe(step));

  // ── 11. Unified Interactive Journey Console Swapper Logic ──
  const phaseTabs = document.querySelectorAll(".phase-tab");
  const stepsGroups = document.querySelectorAll(".journey-steps-group");
  const stepCards = document.querySelectorAll(".journey-step-card");
  const journeyScreenshots = document.querySelectorAll("#journey-emulator-screen .device-screenshot");

  // Tab switching (Phases)
  phaseTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Toggle active tab
      phaseTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Toggle active group of steps
      const activePhase = tab.dataset.phase;
      stepsGroups.forEach(group => {
        if (group.dataset.phaseGroup === activePhase) {
          group.classList.add("active");
          
          // Automatically trigger the first step of this new active phase
          const firstStep = group.querySelector(".journey-step-card");
          if (firstStep) {
            activateJourneyStep(firstStep);
          }
        } else {
          group.classList.remove("active");
        }
      });
    });
  });

  // Step switching inside phases
  function activateJourneyStep(card) {
    if (!card) return;

    // Toggle active card
    stepCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    // Cross-fade the corresponding screenshot inside the live emulator
    const screenshotName = card.dataset.screenshot;
    journeyScreenshots.forEach(screen => {
      if (screen.dataset.journeyScreen === screenshotName) {
        screen.classList.add("active");
      } else {
        screen.classList.remove("active");
      }
    });
  }

  stepCards.forEach(card => {
    // Switch on both hover or click for a zero-delay premium experience
    card.addEventListener("mouseenter", () => activateJourneyStep(card));
    card.addEventListener("click", () => activateJourneyStep(card));
  });

  // Spotlight follow coordination for journey cards
  stepCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });

  // ── 12. Interactive Tech Topology & Code Terminal Console Logic ──
  const topologyNodes = document.querySelectorAll(".topology-node");
  const terminalCode = document.getElementById("terminal-code");
  const terminalTitle = document.getElementById("terminal-pane-title");
  
  const teleSync = document.getElementById("tele-sync");
  const telePing = document.getElementById("tele-ping");
  const teleEncrypt = document.getElementById("tele-encrypt");

  const TECH_CODES = {
    client: {
      title: "offline_queue_sync.dart",
      sync: "ONLINE // CACHED",
      ping: "120ms (LOCAL)",
      encrypt: "AES-256-GCM / SQLITE-CIPHER",
      html: `<span class="code-keyword">class</span> <span class="code-type">OfflineQueue</span> {
  <span class="code-keyword">final</span> <span class="code-type">String</span> id;
  <span class="code-keyword">final</span> <span class="code-type">String</span> path;
  <span class="code-keyword">final</span> <span class="code-type">Map</span>&lt;<span class="code-type">String</span>, <span class="code-type">dynamic</span>&gt; data;
  <span class="code-keyword">final</span> <span class="code-type">int</span> timestamp;

  <span class="code-type">OfflineQueue</span>({
    <span class="code-keyword">required</span> <span class="code-keyword">this</span>.id, 
    <span class="code-keyword">required</span> <span class="code-keyword">this</span>.path, 
    <span class="code-keyword">required</span> <span class="code-keyword">this</span>.data, 
    <span class="code-keyword">required</span> <span class="code-keyword">this</span>.timestamp
  });

  <span class="code-comment">// Syncs locally queued NoSQL operations to Firestore</span>
  <span class="code-type">Future</span>&lt;<span class="code-type">void</span>&gt; <span class="code-function">processQueue</span>() <span class="code-keyword">async</span> {
    <span class="code-keyword">final</span> cache = <span class="code-keyword">await</span> database.<span class="code-function">getQueuedData</span>();
    <span class="code-keyword">for</span> (<span class="code-keyword">var</span> operation <span class="code-keyword">in</span> cache) {
      <span class="code-keyword">await</span> firestore.<span class="code-function">doc</span>(operation.path).<span class="code-function">set</span>(operation.data);
      <span class="code-keyword">await</span> database.<span class="code-function">deleteLocalRow</span>(operation.id);
    }
  }
}`
    },
    gateway: {
      title: "firestore.rules",
      sync: "SECURE // SYNCED",
      ping: "45ms (TWILIO API)",
      encrypt: "SSL-TLS // AUTH-TOKEN-HASH",
      html: `<span class="code-comment">// Firestore security rules validating Twilio OTP boundaries</span>
<span class="code-keyword">rules_version</span> = <span class="code-string">'2'</span>;
<span class="code-keyword">service</span> cloud.firestore {
  <span class="code-keyword">match</span> /databases/{database}/documents {
    
    <span class="code-comment">// Lock down user profile edits to authenticated phone numbers</span>
    <span class="code-keyword">match</span> /users/{phoneNumber} {
      <span class="code-keyword">allow read</span>: <span class="code-keyword">if</span> request.auth != <span class="code-keyword">null</span>;
      <span class="code-keyword">allow write</span>: <span class="code-keyword">if</span> request.auth != <span class="code-keyword">null</span> &amp;&amp; 
                   request.auth.token.phone_number == phoneNumber;
    }

    <span class="code-comment">// Secure B2B direct mandi crop payloads</span>
    <span class="code-keyword">match</span> /mandi_listings/{listingId} {
      <span class="code-keyword">allow read</span>: <span class="code-keyword">if</span> request.auth != <span class="code-keyword">null</span>;
      <span class="code-keyword">allow write</span>: <span class="code-keyword">if</span> request.auth != <span class="code-keyword">null</span> &amp;&amp; 
                   request.resource.data.farmerPhone == request.auth.token.phone_number;
    }
  }
}`
    },
    intelligence: {
      title: "gemini_voice_parser.py",
      sync: "ACTIVE // DUAL-MODE",
      ping: "240ms (GEMINI-FLASH)",
      encrypt: "HTTPS-REST // END-TO-END",
      html: `<span class="code-comment"># Gemini NLU Intent Parser prompt template pipeline</span>
<span class="code-keyword">def</span> <span class="code-function">parse_speech_intent</span>(audio_input):
    prompt = <span class="code-string">f"""
    Translate the raw acoustic audio string from the village B2B scroller 
    into a structured JSON payload: "{audio_input}".
    Expected Accent: regional Telugu / rural Indian English accent.

    Strict Output Schema:
    {{
      "intent": "SELL_CROP" | "PREDICT_SUITABILITY" | "SEARCH_BUYERS",
      "crop_type": string | null,
      "payload_quantity_kg": number | null,
      "target_rate_per_kg": number | null
    }}
    """</span>
    
    response = gemini.<span class="code-function">generate_content</span>(prompt, response_mime_type=<span class="code-string">"application/json"</span>)
    <span class="code-keyword">return</span> response.text`
    },
    storage: {
      title: "firestore_collections.json",
      sync: "REALTIME // ACTIVE",
      ping: "65ms (CLOUD FIRESTORE)",
      encrypt: "REST-ENCRYPTION-AT-REST // SHA-256",
      html: `<span class="code-comment">// Firestore collections schemas and metadata index maps</span>
{
  <span class="code-keyword">"collections"</span>: {
    <span class="code-keyword">"users"</span>: {
      <span class="code-keyword">"name"</span>: <span class="code-string">"String"</span>,
      <span class="code-keyword">"userType"</span>: <span class="code-string">"FARMER | RETAILER"</span>,
      <span class="code-keyword">"address"</span>: <span class="code-string">"String"</span>
    },
    <span class="code-keyword">"mandi_listings"</span>: {
      <span class="code-keyword">"farmerPhone"</span>: <span class="code-string">"String"</span>,
      <span class="code-keyword">"cropType"</span>: <span class="code-string">"String"</span>,
      <span class="code-keyword">"quantityKg"</span>: <span class="code-string">"Number"</span>,
      <span class="code-keyword">"status"</span>: <span class="code-string">"ACTIVE | PENDING_ESCROW | COMPLETED"</span>
    },
    <span class="code-keyword">"escrow_contracts"</span>: {
      <span class="code-keyword">"contractId"</span>: <span class="code-string">"String"</span>,
      <span class="code-keyword">"transactionValue"</span>: <span class="code-string">"Number"</span>,
      <span class="code-keyword">"released"</span>: <span class="code-string">"Boolean (QR release validated)"</span>
    }
  }
}`
    }
  };

  function activateTechNode(node) {
    if (!node) return;
    
    // Toggle active state
    topologyNodes.forEach(n => n.classList.remove("active"));
    node.classList.add("active");
    
    // Swap code and telemetry with typewriter/fade transition
    const techKey = node.dataset.tech;
    const data = TECH_CODES[techKey];
    
    if (data && terminalCode) {
      terminalTitle.innerText = data.title;
      
      // Animate transition using simple opacity fade
      terminalCode.style.opacity = "0";
      terminalCode.style.transform = "translateY(5px)";
      
      setTimeout(() => {
        terminalCode.innerHTML = data.html;
        terminalCode.style.opacity = "1";
        terminalCode.style.transform = "translateY(0)";
        
        // Update telemetry values
        if (teleSync) teleSync.innerText = data.sync;
        if (telePing) telePing.innerText = data.ping;
        if (teleEncrypt) teleEncrypt.innerText = data.encrypt;
      }, 150);
    }
  }

  // Bind mouse spotlights and triggers
  topologyNodes.forEach(node => {
    node.addEventListener("mouseenter", () => activateTechNode(node));
    node.addEventListener("click", () => activateTechNode(node));
    
    node.addEventListener("mousemove", (e) => {
      const rect = node.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      node.style.setProperty("--mouse-x", `${x}px`);
      node.style.setProperty("--mouse-y", `${y}px`);
    });
  });

  // Initial load
  if (topologyNodes.length > 0) {
    activateTechNode(topologyNodes[0]);
  }
});
