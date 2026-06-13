import strings from '@/data/strings';
const s = strings.en;

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background wash */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 70% 40%, rgba(118,113,255,0.04) 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, rgba(203,12,159,0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '60px 20px 80px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 60,
          }}
          className="hero-flex"
        >
          {/* Left column */}
          <div style={{ flex: '1 1 55%', minWidth: 0 }}>
            <h1 className="heading-font" style={{ margin: '0 0 16px' }}>
              <span
                style={{
                  display: 'block',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  color: '#2E2E2F',
                  letterSpacing: '0.02em',
                }}
              >
                {s.heroLine1}
              </span>
              <span
                className="ai-gradient-text"
                style={{
                  display: 'block',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  letterSpacing: '0.02em',
                }}
              >
                {s.heroLine2}
              </span>
            </h1>
            <p
              style={{
                color: '#636972',
                fontSize: 14,
                lineHeight: 1.6,
                margin: '0 0 28px',
                maxWidth: 460,
              }}
            >
              {s.heroSubheadline}
            </p>
            <div
              style={{
                display: 'flex',
                gap: 10,
                flexWrap: 'wrap',
              }}
            >
              <a
                href="/s/ai_site_builder"
                className="heading-font ai-gradient-bg"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 44,
                  padding: '0 24px',
                  borderRadius: 4,
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: 14,
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                }}
              >
                {s.primaryCta}
              </a>
              <a
                href="#all-generators"
                className="heading-font ghost-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 44,
                  padding: '0 24px',
                  borderRadius: 4,
                  textDecoration: 'none',
                  fontSize: 14,
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                }}
              >
                {s.secondaryCta}
              </a>
            </div>
          </div>

          {/* Right column - SVG illustration */}
          <div
            style={{
              flex: '0 0 auto',
              width: 'min(360px, 40%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="hero-illustration-wrap"
          >
            <svg
              width="360"
              height="260"
              viewBox="0 0 360 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              style={{ maxWidth: '100%', height: 'auto' }}
            >
              {/* Background glow */}
              <ellipse
                cx="180"
                cy="130"
                rx="160"
                ry="110"
                fill="url(#glow)"
                opacity="0.3"
              />
              {/* Browser window frame */}
              <rect
                x="60"
                y="40"
                width="240"
                height="180"
                rx="12"
                stroke="#C5B3E0"
                strokeWidth="1.5"
                fill="none"
              />
              {/* Browser top bar */}
              <line
                x1="60"
                y1="70"
                x2="300"
                y2="70"
                stroke="#C5B3E0"
                strokeWidth="1"
              />
              {/* Dots */}
              <circle cx="78" cy="55" r="4" fill="#D4C5EB" />
              <circle cx="94" cy="55" r="4" fill="#D4C5EB" />
              <circle cx="110" cy="55" r="4" fill="#D4C5EB" />
              {/* Header block */}
              <rect
                x="85"
                y="90"
                width="190"
                height="14"
                rx="3"
                fill="url(#grad1)"
                opacity="0.25"
              />
              {/* Content lines */}
              <rect
                x="85"
                y="118"
                width="120"
                height="6"
                rx="3"
                fill="#D4C5EB"
              />
              <rect
                x="85"
                y="132"
                width="160"
                height="6"
                rx="3"
                fill="#D4C5EB"
              />
              <rect
                x="85"
                y="146"
                width="100"
                height="6"
                rx="3"
                fill="#D4C5EB"
              />
              {/* Image placeholders */}
              <rect
                x="85"
                y="164"
                width="52"
                height="38"
                rx="4"
                fill="#E8DFF5"
                stroke="#C5B3E0"
                strokeWidth="1"
              />
              <rect
                x="148"
                y="164"
                width="52"
                height="38"
                rx="4"
                fill="#E8DFF5"
                stroke="#C5B3E0"
                strokeWidth="1"
              />
              <rect
                x="211"
                y="164"
                width="52"
                height="38"
                rx="4"
                fill="#E8DFF5"
                stroke="#C5B3E0"
                strokeWidth="1"
              />
              {/* Decorative line art */}
              <path
                d="M30 130 C 30 90, 50 60, 80 55"
                stroke="#C5B3E0"
                strokeWidth="1"
                fill="none"
                opacity="0.5"
              />
              <path
                d="M330 130 C 330 90, 310 60, 280 55"
                stroke="#C5B3E0"
                strokeWidth="1"
                fill="none"
                opacity="0.5"
              />
              {/* Sparkle */}
              <path
                d="M40 170 L43 178 L35 175 L43 175 L35 178 Z"
                fill="#A58FD8"
                opacity="0.6"
              />
              <path
                d="M320 90 L323 98 L315 95 L323 95 L315 98 Z"
                fill="#A58FD8"
                opacity="0.6"
              />
              <defs>
                <linearGradient id="grad1" x1="85" y1="90" x2="275" y2="104">
                  <stop stopColor="#7671FF" />
                  <stop offset="1" stopColor="#CB0C9F" />
                </linearGradient>
                <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
                  <stop stopColor="#7671FF" />
                  <stop offset="1" stopColor="#CB0C9F" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-flex {
            flex-direction: column !important;
            gap: 30px !important;
          }
          .hero-illustration-wrap {
            width: 100% !important;
            max-width: 280px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
