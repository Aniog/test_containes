import s from '../../data/strings.js';

const styles = {
  footer: {
    background: '#2E2E2F',
    padding: '50px 20px 30px',
    color: '#C6C9CD',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  top: {
    display: 'grid',
    gridTemplateColumns: '1.5fr repeat(4, 1fr)',
    gap: '40px',
    paddingBottom: '40px',
    borderBottom: '1px solid #4B5056',
    marginBottom: '24px',
  },
  logoArea: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  logoText: {
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    fontSize: '16px',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  tagline: {
    fontSize: '13px',
    color: '#C6C9CD',
    lineHeight: 1.5,
  },
  colHeading: {
    fontFamily: "'Josefin Sans', Poppins, sans-serif",
    fontWeight: 700,
    fontSize: '12px',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    marginBottom: '12px',
  },
  linkList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  link: {
    fontSize: '13px',
    color: '#C6C9CD',
    textDecoration: 'none',
  },
  copyright: {
    fontSize: '12px',
    color: '#636972',
    textAlign: 'center',
  },
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.top} className="footer-grid">
          <div style={styles.logoArea}>
            <a href="/" aria-label="Strikingly home" style={{ textDecoration: 'none' }}>
              <FooterLogo />
              <span style={styles.logoText}>{s.footer.logoText}</span>
            </a>
            <p style={styles.tagline}>
              Build any kind of site with AI, in an instant.
            </p>
          </div>
          {s.footer.columns.map((col) => (
            <div key={col.heading}>
              <p style={styles.colHeading}>{col.heading}</p>
              <ul style={styles.linkList}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={styles.link}
                      onMouseOver={(e) => (e.currentTarget.style.color = '#fff')}
                      onMouseOut={(e) => (e.currentTarget.style.color = '#C6C9CD')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p style={styles.copyright}>{s.footer.copyright}</p>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 30px !important;
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

function FooterLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: 'middle', marginInlineEnd: '8px' }}
    >
      <defs>
        <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
      <rect width="28" height="28" rx="6" fill="url(#footer-logo-grad)" />
      <path d="M8 10h12M8 14h8M8 18h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
