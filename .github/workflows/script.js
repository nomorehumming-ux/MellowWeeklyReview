// nav
class TNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <div class="container nav-inner">
          <a href="#" class="nav-logo">
            <img src="images/mellow-logo.svg" class="nav-logo-icon" alt="Mellow" />
            <span class="font-bold text-md">Mellow</span>
          </a>
          <ul class="nav-links">
            <li><a href="#features" class="text-sm">Features</a></li>
            <li><a href="#how-it-works" class="text-sm">How it works</a></li>
            <li><a href="#reviews" class="text-sm">Reviews</a></li>
          </ul>
          <a href="#download" class="btn btn-primary">Download Free</a>
        </div>
      </nav>
    `;
  }
}
customElements.define("t-nav", TNav);

// hero
class THero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="hero">
        <div class="container hero-inner">
          <div>
            <div class="hero-badge text-xs font-medium">
              <span>✨</span> #1 Baby Sleep App — 2024
            </div>
            <h1 class="color-white">
              Sweet dreams start with <span class="color-accent">Mellow</span>
            </h1>
            <p class="text-md color-white mt-5" style="opacity: 0.75; max-width: 480px;">
              Track your baby's sleep, understand their patterns, and get expert-backed
              guidance — so the whole family can finally rest.
            </p>
            <div class="hero-cta">
              <a href="#download" class="btn btn-accent btn-lg">Get Started Free</a>
              <a href="#how-it-works" class="btn btn-ghost btn-lg">See how it works</a>
            </div>
            <div class="hero-stars">
              <span class="stars">★★★★★</span>
              <span class="text-sm">4.9 · 50,000+ parents</span>
            </div>
          </div>

          <div class="phone-wrap">
            <div class="phone-glow"></div>
            <div class="phone">
              <div class="phone-time">10:42 PM</div>
              <p class="phone-label">Baby is sleeping</p>
              <div class="sleep-bar-wrap">
                <div class="sleep-bar-label">
                  <span>Tonight's sleep</span>
                  <span>5h 12m</span>
                </div>
                <div class="sleep-bar"><div class="sleep-bar-fill"></div></div>
                <div class="sleep-stat">
                  72% <span style="font-size: var(--fs-sm); font-weight: var(--fw-regular); opacity: 0.6">quality</span>
                </div>
              </div>
              <div class="phone-cards">
                <div class="phone-card">
                  <span class="phone-card-icon">😴</span>
                  <div>
                    <div style="font-weight: var(--fw-medium);">Deep sleep phase</div>
                    <div style="opacity: 0.5; margin-top: 2px;">Started 22 min ago</div>
                  </div>
                </div>
                <div class="phone-card">
                  <span class="phone-card-icon">💡</span>
                  <div>
                    <div style="font-weight: var(--fw-medium);">Tip ready for you</div>
                    <div style="opacity: 0.5; margin-top: 2px;">Sleep regression · 4 months</div>
                  </div>
                </div>
                <div class="phone-card">
                  <span class="phone-card-icon">⏰</span>
                  <div>
                    <div style="font-weight: var(--fw-medium);">Next nap window</div>
                    <div style="opacity: 0.5; margin-top: 2px;">Tomorrow at 9:30 AM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define("t-hero", THero);

// logos
class TLogos extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="logos">
        <div class="container logos-inner">
          <span class="logo-item">As seen in</span>
          <span class="logo-item">Parents Magazine</span>
          <span class="logo-item">The Bump</span>
          <span class="logo-item">BabyCenter</span>
          <span class="logo-item">What to Expect</span>
          <span class="logo-item">Today Show</span>
        </div>
      </div>
    `;
  }
}
customElements.define("t-logos", TLogos);

// features
class TFeatures extends HTMLElement {
  connectedCallback() {
    const cards = [
      { title: "Smart Sleep Tracking",   body: "Log naps and nights in seconds. Mellow learns your baby's rhythms and spots patterns before you do." },
      { title: "Nap Window Alerts",      body: "Get a gentle heads-up before your baby gets overtired. Hit the sleep window every time — no more bedtime battles." },
      { title: "Expert Guidance",        body: "Age-appropriate tips and articles from pediatric sleep specialists, delivered when you need them most." },
      { title: "Environment Monitor",   body: "Track room temperature and noise. Mellow tells you if conditions could be affecting your baby's sleep quality." },
      { title: "Weekly Reports",         body: "Beautiful weekly summaries show total sleep, longest stretches, and how your baby is trending over time." },
      { title: "Family Sharing",  body: "Share access with co-parents, grandparents, or caregivers. Everyone stays in sync — no more double logging." },
    ];

    this.innerHTML = `
      <section id="features">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Features</span>
            <h2>Everything you need for healthy baby sleep</h2>
            <p>Mellow combines smart tracking with pediatric sleep science to give you real answers, not just raw data.</p>
          </div>
          <div class="features-grid">
            ${cards.map(c => `
              <div class="feature-card">
                
                <h3>${c.title}</h3>
                <p class="color-muted">${c.body}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define("t-features", TFeatures);

// steps
class TSteps extends HTMLElement {
  connectedCallback() {
    const steps = [
      { n: 1, title: "Create your baby's profile",  body: "Enter your baby's name, age, and any notes about their routine. Mellow tailors everything to their stage." },
      { n: 2, title: "Log sleep with one tap",      body: "Tap Start when they go down, tap Stop when they wake up. Mellow handles the rest automatically." },
      { n: 3, title: "Get insights & tips",         body: "After a few days, Mellow starts delivering personalized recommendations based on your baby's real data." },
    ];

    this.innerHTML = `
      <section id="how-it-works" class="steps">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">How it works</span>
            <h2>Up and running in under a minute</h2>
            <p>No wearables, no complicated setup. Just open the app and start logging.</p>
          </div>
          <div class="steps-grid">
            ${steps.map(s => `
              <div class="step">
                <div class="step-number">${s.n}</div>
                <h3>${s.title}</h3>
                <p class="color-muted">${s.body}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define("t-steps", TSteps);

// insight
class TInsight extends HTMLElement {
  connectedCallback() {
    const stats = [
      { number: "+2.4h", label: "more sleep per night on average" },
      { number: "87%",   label: "of parents see improvement in week 1" },
      { number: "50K+",  label: "families trust Mellow every night" },
      { number: "4.9★",  label: "average App Store rating" },
    ];

    this.innerHTML = `
      <section class="insight">
        <div class="container insight-inner">
          <div>
            <h2 class="color-white">The results speak for themselves</h2>
            <p class="color-white mt-5" style="opacity: 0.7; max-width: 420px;">
              Parents who use Mellow for 4 weeks report dramatically better sleep — for baby and themselves.
            </p>
            <a href="#download" class="btn btn-accent mt-6">Try Mellow Free</a>
          </div>
          <div class="insight-stats">
            ${stats.map(s => `
              <div class="stat-box">
                <div class="stat-number">${s.number}</div>
                <div class="stat-label">${s.label}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define("t-insight", TInsight);

// testimonials
class TTestimonials extends HTMLElement {
  connectedCallback() {
    const reviews = [
      { quote: "Within a week of using Mellow, I could actually predict when my daughter would be tired. The nap window alerts are a game changer.", name: "Sarah M.", detail: "Mom of Lily, 6 months" },
      { quote: "I was skeptical another app could help but I was wrong. The weekly reports made me feel like I finally understood what was happening.", name: "James K.", detail: "Dad of twins, 4 months" },
      { quote: "Our whole family uses it — grandma included. No more mixed messages about whether he napped. Honestly life-changing for us.", name: "Priya R.", detail: "Mom of Oliver, 9 months" },
    ];

    this.innerHTML = `
      <section id="reviews">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">Reviews</span>
            <h2>Parents love Mellow</h2>
            <p>Real stories from real families who finally figured out sleep.</p>
          </div>
          <div class="testimonials-grid">
            ${reviews.map(r => `
              <div class="testimonial-card">
                <div class="testimonial-stars">★★★★★</div>
                <blockquote>"${r.quote}"</blockquote>
                <div class="testimonial-author">
                  
                  <div>
                    <div class="font-medium">${r.name}</div>
                    <div class="text-xs color-muted">${r.detail}</div>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define("t-testimonials", TTestimonials);

// download
class TDownload extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="download" class="cta">
        <div class="container">
          <img src="images/mellow-logo.svg" style="width: 3rem; height: 3rem;" alt="Mellow" />
          <h2 class="color-white mt-4">Better nights start tonight</h2>
          <p class="text-md color-white mt-5" style="opacity: 0.7; max-width: 480px; margin-inline: auto;">
            Download Mellow free and join 50,000+ families who are finally getting the sleep they deserve.
          </p>
          <div class="app-badges">
            <a href="#" class="app-badge">
              <span class="app-badge-icon"></span>
              <div class="app-badge-text">
                <small>Download on the</small>
                <strong>App Store</strong>
              </div>
            </a>
            <a href="#" class="app-badge">
              <span class="app-badge-icon">▶</span>
              <div class="app-badge-text">
                <small>Get it on</small>
                <strong>Google Play</strong>
              </div>
            </a>
          </div>
          <p class="text-sm mt-5" style="color: rgba(255,255,255,0.4);">
            Free to download · No credit card required · Works on iOS & Android
          </p>
        </div>
      </section>
    `;
  }
}
customElements.define("t-download", TDownload);

// footer
class TFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container footer-inner">
          <div style="display: flex; align-items: center; gap: var(--space-2); color: rgba(255,255,255,0.9);">
            <img src="images/mellow-logo.svg" style="width: 1.25rem; height: 1.25rem;" alt="Mellow" />
            <span class="font-medium">Mellow</span>
            <span class="text-xs" style="color: rgba(255,255,255,0.3); margin-left: var(--space-3);">© 2024 Mellow Inc.</span>
          </div>
          <ul class="footer-nav">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </footer>
    `;
  }
}
customElements.define("t-footer", TFooter);
