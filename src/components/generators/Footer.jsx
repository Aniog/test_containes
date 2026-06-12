import { strings } from '../../data/generatorsData.js';
import { LogoIcon } from './Icons.jsx';

const s = strings.en.footer;

export default function Footer() {
  return (
    <footer
      style={{
        background: '#2E2E2F',
        padding: '50px 20px 30px',
        borderTop: '1px solid #E2E4E7',
      }}
    >
      <div style={{ maxWidth: 1200, marginInline: 'auto' }}>
        {/* Top row: logo + columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '200px repeat(4, 1fr)',
            gap: 40,
            marginBottom: 40,
          }}
          className="footer-grid"
        >
          {/* Logo column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                textDecoration: 'none',
              }}
              aria-label="Strikingly home"
            >
              <LogoIcon />
              <span
                style={{
                  fontFamily: '"Josefin Sans", Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: 14,
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Strikingly
              </span>
            </a>
            <p
              style={{
                margin: 0,
                fontFamily: '"Open Sans", sans-serif',
                fontSize: 12,
                color: '#9ca3af',
                lineHeight: 1.6,
              }}
            >
              AI-powered website builder for everyone.
            </p>
          </div>

          {/* Link columns */}
          {s.columns.map((col) => (
            <div key={col.heading} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <strong
                style={{
                  fontFamily: '"Josefin Sans", Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: 11,
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {col.heading}
              </strong>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 13,
                        color: '#9ca3af',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af'; }}
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
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: '"Open Sans", sans-serif',
              fontSize: 12,
              color: '#6b7280',
              textAlign: 'center',
            }}
          >
            {s.copyright}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
