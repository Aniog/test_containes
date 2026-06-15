import { strings } from '../../data/generators';

const s = strings.en.footer;

export default function GeneratorsFooter() {
  return (
    <footer
      style={{
        background: 'var(--color-hero-heading)',
        color: '#ffffff',
        padding: '50px 0 30px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="content-container">
        <div className="footer-grid" style={{ marginBottom: 40 }}>
          {/* Brand column */}
          <div>
            <a
              href="/"
              aria-label="Strikingly home"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                textDecoration: 'none',
                marginBottom: 14,
              }}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden="true"
              >
                <rect width="28" height="28" rx="6" fill="url(#footer-logo-grad)" />
                <path d="M8 19.5L14 8.5L20 19.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.5 15.5H17.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7671FF" />
                    <stop offset="1" stopColor="#CB0C9F" />
                  </linearGradient>
                </defs>
              </svg>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 15,
                  textTransform: 'lowercase',
                  color: '#ffffff',
                  letterSpacing: '0.02em',
                }}
              >
                {s.logoText}
              </span>
            </a>
            <p
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.55)',
                margin: 0,
                lineHeight: 1.6,
                maxWidth: 220,
              }}
            >
              AI-powered website builder. Build any kind of site in seconds.
            </p>
          </div>

          {/* Link columns */}
          {s.columns.map((col) => (
            <div key={col.heading}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 11,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'rgba(255,255,255,0.45)',
                  marginBottom: 14,
                }}
              >
                {col.heading}
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: 13,
                        color: 'rgba(255,255,255,0.7)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: 20,
            fontSize: 12,
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          {s.copyright}
        </div>
      </div>
    </footer>
  );
}
