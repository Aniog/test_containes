import { HeroIllustration } from './Icons.jsx';
import { strings } from '../../data/generatorsData.js';

const s = strings.en.hero;

const btnBase = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 44,
  padding: '0 24px',
  borderRadius: 4,
  fontFamily: '"Josefin Sans", Poppins, sans-serif',
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  cursor: 'pointer',
  border: 'none',
  whiteSpace: 'nowrap',
};

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        background: 'radial-gradient(ellipse at 70% 50%, rgba(118,113,255,0.07) 0%, rgba(203,12,159,0.05) 60%, transparent 100%), #ffffff',
        padding: '70px 20px',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          marginInline: 'auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <h1
            style={{
              margin: 0,
              fontFamily: '"Josefin Sans", Poppins, sans-serif',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '0.04em',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(28px, 4vw, 46px)',
                color: '#2E2E2F',
                textTransform: 'uppercase',
              }}
            >
              {s.h1Line1}
            </span>
            <span
              className="ai-gradient-text"
              style={{
                display: 'block',
                fontSize: 'clamp(28px, 4vw, 46px)',
                textTransform: 'uppercase',
              }}
            >
              {s.h1Line2}
            </span>
          </h1>

          <p
            style={{
              margin: 0,
              fontFamily: '"Open Sans", sans-serif',
              fontSize: 15,
              color: '#636972',
              lineHeight: 1.6,
              maxWidth: 480,
            }}
          >
            {s.subheadline}
          </p>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a
              href="/s/ai_site_builder"
              className="ai-gradient-bg"
              style={{
                ...btnBase,
                color: '#ffffff',
              }}
            >
              {s.ctaPrimary}
            </a>
            <a
              href="#all-generators"
              style={{
                ...btnBase,
                background: 'transparent',
                border: '1px solid #8159BB',
                color: '#8159BB',
              }}
            >
              {s.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Right column — illustration */}
        <div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          className="hero-illustration"
        >
          <HeroIllustration />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-illustration {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
