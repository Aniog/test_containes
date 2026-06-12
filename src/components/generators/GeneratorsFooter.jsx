import { Link } from 'react-router-dom';
import s from '../../data/strings.js';

const footerColumns = [
  {
    heading: 'Product',
    links: [
      { label: 'Templates', href: '/templates' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'AI Generators', href: '/generators' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Help Center', href: '/support' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
];

export default function GeneratorsFooter() {
  return (
    <footer
      style={{
        background: '#2E2E2F',
        color: '#C6C9CD',
        paddingTop: 50,
        paddingBottom: 30,
      }}
    >
      <div className="content-container">
        {/* Top row: logo + columns */}
        <div
          className="flex flex-col md:flex-row gap-10 md:gap-16 mb-10"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 40 }}
        >
          {/* Logo */}
          <div style={{ minWidth: 160 }}>
            <Link
              to="/"
              aria-label="Strikingly home"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="6" fill="url(#footerLogoGrad)" />
                <path d="M8 10h12M8 14h8M8 18h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#7671FF" />
                    <stop offset="100%" stopColor="#CB0C9F" />
                  </linearGradient>
                </defs>
              </svg>
              <span
                style={{
                  fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Strikingly
              </span>
            </Link>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: 13,
                color: '#636972',
                marginTop: 10,
                marginBottom: 0,
                lineHeight: 1.5,
              }}
            >
              Build any kind of site with AI, in an instant.
            </p>
          </div>

          {/* Link columns */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-8"
            style={{ flex: 1 }}
          >
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <div
                  style={{
                    fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#ffffff',
                    marginBottom: 12,
                  }}
                >
                  {col.heading}
                </div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: 13,
                          color: '#C6C9CD',
                          textDecoration: 'none',
                          transition: 'color 0.15s',
                        }}
                        onMouseEnter={(e) => { e.target.style.color = '#ffffff'; }}
                        onMouseLeave={(e) => { e.target.style.color = '#C6C9CD'; }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 12,
            color: '#636972',
            margin: 0,
            textAlign: 'center',
          }}
        >
          {s.footerCopyright}
        </p>
      </div>
    </footer>
  );
}
