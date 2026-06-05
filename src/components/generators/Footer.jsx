import { strings } from '../../data/generatorsData';

const s = strings.en.footer;

const footerColumns = [
  {
    heading: 'Product',
    links: [
      { label: 'Templates', href: '/templates' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'AI Site Builder', href: '/s/ai_site_builder' },
      { label: 'Generators', href: '/generators' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Support', href: '/support' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
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

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#2E2E2F',
        paddingTop: 50,
        paddingBottom: 30,
        borderTop: '1px solid #E2E4E7',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200, padding: '0 20px' }}>
        {/* Top row: logo + columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '200px repeat(4, 1fr)',
            gap: 30,
            marginBottom: 40,
          }}
          className="footer-grid"
        >
          {/* Logo */}
          <div>
            <a href="/" aria-label="Strikingly home" className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="28" height="28" rx="6" fill="url(#footer-logo-grad)" />
                <path
                  d="M8 18l4-8 4 8M10.5 15h5"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7671FF" />
                    <stop offset="1" stopColor="#CB0C9F" />
                  </linearGradient>
                </defs>
              </svg>
              <span
                className="font-heading"
                style={{ fontSize: 16, color: '#fff', letterSpacing: '0.02em' }}
              >
                strikingly AI
              </span>
            </a>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p
                className="font-heading"
                style={{ fontSize: 12, color: '#fff', margin: 0, marginBottom: 14 }}
              >
                {col.heading}
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{ fontSize: 13, color: '#C6C9CD', textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.target.style.color = '#fff')}
                      onMouseLeave={(e) => (e.target.style.color = '#C6C9CD')}
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
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: 12, color: '#636972', margin: 0 }}>{s.copyright}</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
