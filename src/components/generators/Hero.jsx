import { strings, BUILDER_URL } from "../../data/generatorsData.js";

const s = strings.en;

// Inline SVG illustration — website mockup line art
const HeroIllustration = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="480"
    height="340"
    viewBox="0 0 480 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ maxWidth: "100%", height: "auto" }}
  >
    {/* Browser chrome */}
    <rect x="20" y="20" width="440" height="300" rx="10" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1.5" />
    {/* Title bar */}
    <rect x="20" y="20" width="440" height="36" rx="10" fill="#E2E4E7" />
    <rect x="20" y="44" width="440" height="12" fill="#E2E4E7" />
    {/* Traffic lights */}
    <circle cx="44" cy="38" r="5" fill="#CB0C9F" opacity="0.5" />
    <circle cx="60" cy="38" r="5" fill="#7671FF" opacity="0.5" />
    <circle cx="76" cy="38" r="5" fill="#8159BB" opacity="0.4" />
    {/* URL bar */}
    <rect x="100" y="30" width="260" height="16" rx="8" fill="#ffffff" stroke="#C6C9CD" strokeWidth="1" />
    <text x="116" y="42" fontFamily="monospace" fontSize="9" fill="#8159BB">strikingly.com/my-site</text>
    {/* Hero section mockup */}
    <rect x="36" y="72" width="408" height="80" rx="4" fill="url(#hero-grad-ill)" opacity="0.15" />
    <rect x="80" y="88" width="160" height="10" rx="3" fill="#7671FF" opacity="0.4" />
    <rect x="80" y="104" width="120" height="8" rx="3" fill="#CB0C9F" opacity="0.3" />
    <rect x="80" y="118" width="80" height="20" rx="4" fill="url(#btn-grad-ill)" />
    {/* Content blocks */}
    <rect x="36" y="168" width="124" height="80" rx="4" fill="#E2E4E7" />
    <rect x="36" y="254" width="124" height="8" rx="3" fill="#C6C9CD" />
    <rect x="36" y="266" width="90" height="6" rx="3" fill="#C6C9CD" />
    <rect x="172" y="168" width="124" height="80" rx="4" fill="#E2E4E7" />
    <rect x="172" y="254" width="124" height="8" rx="3" fill="#C6C9CD" />
    <rect x="172" y="266" width="90" height="6" rx="3" fill="#C6C9CD" />
    <rect x="308" y="168" width="136" height="80" rx="4" fill="#E2E4E7" />
    <rect x="308" y="254" width="136" height="8" rx="3" fill="#C6C9CD" />
    <rect x="308" y="266" width="100" height="6" rx="3" fill="#C6C9CD" />
    {/* Sparkle accents */}
    <circle cx="420" cy="80" r="3" fill="#7671FF" opacity="0.6" />
    <circle cx="430" cy="68" r="2" fill="#CB0C9F" opacity="0.5" />
    <circle cx="408" cy="65" r="1.5" fill="#8159BB" opacity="0.5" />
    <defs>
      <linearGradient id="hero-grad-ill" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7671FF" />
        <stop offset="100%" stopColor="#CB0C9F" />
      </linearGradient>
      <linearGradient id="btn-grad-ill" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7671FF" />
        <stop offset="100%" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Hero() {
  return (
    <section
      className="hero-wash"
      style={{ paddingBlock: "70px 60px" }}
      aria-labelledby="hero-h1"
    >
      <div className="content-wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left column */}
          <div>
            <h1
              id="hero-h1"
              className="font-heading"
              style={{
                margin: "0 0 20px",
                fontSize: "clamp(28px, 4vw, 46px)",
                lineHeight: 1.15,
              }}
            >
              <span style={{ color: "#2E2E2F", display: "block" }}>
                {s.heroH1Line1}
              </span>
              <span className="ai-gradient-text" style={{ display: "block" }}>
                {s.heroH1Line2}
              </span>
            </h1>
            <p
              style={{
                color: "#636972",
                fontSize: "16px",
                lineHeight: 1.6,
                margin: "0 0 30px",
                maxWidth: "480px",
              }}
            >
              {s.heroSubheadline}
            </p>
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <a
                href={BUILDER_URL}
                className="ai-gradient-btn font-heading"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: "44px",
                  padding: "0 20px",
                  borderRadius: "4px",
                  fontSize: "13px",
                  letterSpacing: "0.5px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {s.heroCTAPrimary}
              </a>
              <a
                href="#all-generators"
                className="ghost-btn font-heading"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: "44px",
                  padding: "0 20px",
                  borderRadius: "4px",
                  fontSize: "13px",
                  letterSpacing: "0.5px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {s.heroCTASecondary}
              </a>
            </div>
          </div>

          {/* Right column — illustration */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HeroIllustration />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-grid > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
