import { strings } from '@/data/generators';

const s = strings.en.footer;

export default function GeneratorsFooter() {
  return (
    <footer
      style={{
        background: 'var(--hero-heading)',
        color: '#FFFFFF',
        padding: '50px 20px 30px',
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
          {/* Logo */}
          <div>
            <a href="/" style={{ textDecoration: 'none' }} aria-label="Strikingly home">
              <span
                style={{
                  fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: '#FFFFFF',
                  letterSpacing: '0.02em',
                  textTransform: 'none',
                }}
              >
                strikingly{' '}
                <span className="ai-gradient-text" style={{ fontFamily: 'inherit' }}>
                  AI
                </span>
              </span>
            </a>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 12, lineHeight: 1.6 }}>
              Build any kind of site with AI, in an instant.
            </p>
          </div>

          {/* Link columns */}
          {s.cols.map((col) => (
            <div key={col.heading}>
              <p
                className="font-heading"
                style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', margin: '0 0 14px', letterSpacing: '0.08em' }}
              >
                {col.heading}
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.12)', margin: '0 0 20px' }} />

        {/* Copyright */}
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0, textAlign: 'center' }}>
          {s.copyright}
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </footer>
  );
}
