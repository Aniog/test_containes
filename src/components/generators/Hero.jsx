import s from '../../data/strings.js';

const styles = {
  section: {
    background: '#fff',
    padding: '70px 20px',
    position: 'relative',
    overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute',
    inset: 0,
    background:
      'radial-gradient(ellipse 70% 60% at 80% 50%, rgba(129,89,187,0.07) 0%, rgba(203,12,159,0.04) 60%, transparent 100%)',
    pointerEvents: 'none',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  h1Line1: {
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    fontSize: 'clamp(28px, 4vw, 48px)',
    lineHeight: 1.15,
    color: '#2E2E2F',
    textTransform: 'uppercase',
    display: 'block',
  },
  h1Line2: {
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    fontSize: 'clamp(28px, 4vw, 48px)',
    lineHeight: 1.15,
    textTransform: 'uppercase',
    display: 'block',
    background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
  },
  subheadline: {
    fontSize: '16px',
    lineHeight: 1.6,
    color: '#636972',
    marginTop: '16px',
    maxWidth: '480px',
  },
  ctaRow: {
    display: 'flex',
    gap: '10px',
    marginTop: '30px',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '44px',
    padding: '0 24px',
    borderRadius: '4px',
    border: 'none',
    background: 'linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)',
    color: '#ffffff',
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    textDecoration: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  ghostBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '44px',
    padding: '0 24px',
    borderRadius: '4px',
    border: '1px solid #8159BB',
    background: 'transparent',
    color: '#8159BB',
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    textDecoration: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
};

export default function Hero() {
  return (
    <section style={styles.section}>
      <div style={styles.heroBg} aria-hidden="true" />
      <div style={styles.container} className="hero-grid">
        <div>
          <h1>
            <span style={styles.h1Line1}>{s.hero.h1Line1}</span>
            <span style={styles.h1Line2}>{s.hero.h1Line2}</span>
          </h1>
          <p style={styles.subheadline}>{s.hero.subheadline}</p>
          <div style={styles.ctaRow}>
            <a
              href="/s/ai_site_builder"
              style={styles.primaryBtn}
              onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {s.hero.primaryCta}
            </a>
            <a
              href="#all-generators"
              style={styles.ghostBtn}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#8159BB';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#8159BB';
              }}
            >
              {s.hero.secondaryCta}
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <HeroIllustration />
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-grid > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}

function HeroIllustration() {
  return (
    <svg
      width="480"
      height="360"
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      {/* Browser chrome */}
      <rect x="20" y="20" width="440" height="320" rx="12" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1.5" />
      {/* Browser top bar */}
      <rect x="20" y="20" width="440" height="40" rx="12" fill="#fff" stroke="#E2E4E7" strokeWidth="1.5" />
      <rect x="20" y="48" width="440" height="12" fill="#fff" />
      {/* Traffic lights */}
      <circle cx="48" cy="40" r="6" fill="#FF6B6B" />
      <circle cx="66" cy="40" r="6" fill="#FFD93D" />
      <circle cx="84" cy="40" r="6" fill="#6BCB77" />
      {/* URL bar */}
      <rect x="110" y="30" width="260" height="20" rx="4" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
      <text x="240" y="44" textAnchor="middle" fontSize="10" fill="#636972" fontFamily="'Open Sans', sans-serif">strikingly.com/my-site</text>
      {/* Hero block */}
      <rect x="40" y="80" width="400" height="100" rx="6" fill="#EDE8F7" />
      <rect x="60" y="100" width="200" height="14" rx="3" fill="#8159BB" opacity="0.5" />
      <rect x="60" y="122" width="160" height="10" rx="3" fill="#8159BB" opacity="0.3" />
      <rect x="60" y="140" width="100" height="28" rx="4">
        <animate attributeName="fill" values="#7671FF;#CB0C9F;#7671FF" dur="3s" repeatCount="indefinite" />
      </rect>
      {/* Content blocks */}
      <rect x="40" y="196" width="120" height="80" rx="6" fill="#fff" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="52" y="208" width="96" height="40" rx="3" fill="#F4F6F8" />
      <rect x="52" y="256" width="60" height="8" rx="2" fill="#C6C9CD" />
      <rect x="52" y="270" width="80" height="6" rx="2" fill="#E2E4E7" />
      <rect x="180" y="196" width="120" height="80" rx="6" fill="#fff" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="192" y="208" width="96" height="40" rx="3" fill="#F4F6F8" />
      <rect x="192" y="256" width="60" height="8" rx="2" fill="#C6C9CD" />
      <rect x="192" y="270" width="80" height="6" rx="2" fill="#E2E4E7" />
      <rect x="320" y="196" width="120" height="80" rx="6" fill="#fff" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="332" y="208" width="96" height="40" rx="3" fill="#F4F6F8" />
      <rect x="332" y="256" width="60" height="8" rx="2" fill="#C6C9CD" />
      <rect x="332" y="270" width="80" height="6" rx="2" fill="#E2E4E7" />
      {/* Footer bar */}
      <rect x="40" y="296" width="400" height="24" rx="4" fill="#F4F6F8" />
      <rect x="52" y="304" width="60" height="8" rx="2" fill="#C6C9CD" />
      <rect x="340" y="304" width="88" height="8" rx="2" fill="#E2E4E7" />
      {/* Sparkle accents */}
      <circle cx="420" cy="75" r="4" fill="#7671FF" opacity="0.6" />
      <circle cx="435" cy="88" r="2.5" fill="#CB0C9F" opacity="0.5" />
      <circle cx="408" cy="90" r="2" fill="#8159BB" opacity="0.4" />
    </svg>
  );
}
