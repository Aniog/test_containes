import { strings } from '../../data/generators-data';

const s = strings.en;

// Soft purple line-art website mockup illustration
function HeroIllustration() {
  return (
    <svg
      width="480"
      height="360"
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      style={{ width: '100%', maxWidth: '480px', height: 'auto' }}
    >
      {/* Browser window */}
      <rect x="16" y="16" width="448" height="328" rx="10" fill="white" stroke="#C6C9CD" strokeWidth="1.5"/>
      {/* Top chrome */}
      <rect x="16" y="16" width="448" height="44" rx="10" fill="#F4F6F8"/>
      <rect x="16" y="48" width="448" height="12" fill="#F4F6F8"/>
      {/* Traffic lights */}
      <circle cx="42" cy="38" r="5" fill="#E2E4E7"/>
      <circle cx="58" cy="38" r="5" fill="#E2E4E7"/>
      <circle cx="74" cy="38" r="5" fill="#E2E4E7"/>
      {/* URL bar */}
      <rect x="100" y="28" width="280" height="20" rx="10" fill="white" stroke="#C6C9CD" strokeWidth="1"/>
      <circle cx="116" cy="38" r="4" fill="#C6C9CD"/>
      <rect x="126" y="35" width="120" height="6" rx="3" fill="#E2E4E7"/>
      {/* Hero band */}
      <rect x="36" y="76" width="408" height="90" rx="4" fill="#F4F6F8"/>
      {/* Gradient accent bar */}
      <rect x="36" y="76" width="408" height="4" rx="2">
        <defs>
          <linearGradient id="hg1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7671FF"/>
            <stop offset="100%" stopColor="#CB0C9F"/>
          </linearGradient>
        </defs>
      </rect>
      <rect x="36" y="76" width="408" height="4" rx="2" fill="url(#hg1)"/>
      {/* Headline lines */}
      <rect x="100" y="96" width="200" height="14" rx="3" fill="#8159BB" opacity="0.25"/>
      <rect x="120" y="116" width="160" height="10" rx="3" fill="#8159BB" opacity="0.15"/>
      {/* CTA button */}
      <rect x="148" y="136" width="120" height="20" rx="4" fill="url(#hg1)"/>
      <rect x="168" y="142" width="80" height="8" rx="2" fill="white" opacity="0.8"/>
      {/* Three content cards */}
      <rect x="36" y="182" width="124" height="100" rx="4" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1"/>
      <rect x="178" y="182" width="124" height="100" rx="4" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1"/>
      <rect x="320" y="182" width="124" height="100" rx="4" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1"/>
      {/* Card content lines */}
      <rect x="48" y="198" width="100" height="10" rx="2" fill="#C6C9CD"/>
      <rect x="48" y="214" width="80" height="7" rx="2" fill="#E2E4E7"/>
      <rect x="48" y="227" width="90" height="7" rx="2" fill="#E2E4E7"/>
      <rect x="48" y="240" width="70" height="7" rx="2" fill="#E2E4E7"/>
      <rect x="190" y="198" width="100" height="10" rx="2" fill="#C6C9CD"/>
      <rect x="190" y="214" width="80" height="7" rx="2" fill="#E2E4E7"/>
      <rect x="190" y="227" width="90" height="7" rx="2" fill="#E2E4E7"/>
      <rect x="190" y="240" width="70" height="7" rx="2" fill="#E2E4E7"/>
      <rect x="332" y="198" width="100" height="10" rx="2" fill="#C6C9CD"/>
      <rect x="332" y="214" width="80" height="7" rx="2" fill="#E2E4E7"/>
      <rect x="332" y="227" width="90" height="7" rx="2" fill="#E2E4E7"/>
      <rect x="332" y="240" width="70" height="7" rx="2" fill="#E2E4E7"/>
      {/* Footer strip */}
      <rect x="36" y="298" width="408" height="36" rx="4" fill="#F4F6F8"/>
      <rect x="52" y="312" width="60" height="8" rx="2" fill="#C6C9CD"/>
      <rect x="128" y="312" width="60" height="8" rx="2" fill="#C6C9CD"/>
      <rect x="204" y="312" width="60" height="8" rx="2" fill="#C6C9CD"/>
      {/* Sparkle accents */}
      <circle cx="440" cy="80" r="3" fill="#7671FF" opacity="0.4"/>
      <circle cx="452" cy="92" r="2" fill="#CB0C9F" opacity="0.3"/>
      <circle cx="430" cy="96" r="1.5" fill="#8159BB" opacity="0.5"/>
      <defs>
        <linearGradient id="hg1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7671FF"/>
          <stop offset="100%" stopColor="#CB0C9F"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="strk-hero">
      <div className="strk-container">
        <div className="strk-hero-grid">
          <div className="strk-hero-content">
            <h1>
              <span style={{ color: 'var(--clr-hero-h1)', display: 'block' }}>{s.heroH1Line1}</span>
              <span className="gradient-text" style={{ display: 'block' }}>{s.heroH1Line2}</span>
            </h1>
            <p className="strk-hero-sub">{s.heroSub}</p>
            <div className="strk-hero-ctas">
              <a
                href="/s/ai_site_builder"
                className="btn-gradient btn-gradient--lg"
              >
                {s.heroCTAPrimary}
              </a>
              <a
                href="#all-generators"
                className="btn-ghost btn-ghost--lg"
              >
                {s.heroCTASecondary}
              </a>
            </div>
          </div>
          <div className="strk-hero-illustration" aria-hidden="true">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
