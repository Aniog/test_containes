import { strings } from '../../data/generators';

const s = strings.en;

const footerColumns = [
  {
    heading: 'Product',
    links: [
      { label: 'Templates', href: '/templates' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'AI Site Builder', href: '/s/ai_site_builder' },
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

export default function Footer() {
  return (
    <footer
      style={{
        background: '#F4F6F8',
        borderTop: '1px solid #E2E4E7',
        marginTop: 0,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '40px 20px 20px',
        }}
      >
        {/* Logo row */}
        <div style={{ marginBottom: 30 }}>
          <a
            href="/"
            aria-label="Strikingly home"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 28 28"
              fill="none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="28" rx="6" fill="url(#footer-logo-grad)" />
              <path d="M16.5 4L9 15.5H14.5L11.5 24L20 12.5H14.5L16.5 4Z" fill="white" />
              <defs>
                <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7671FF" />
                  <stop offset="1" stopColor="#CB0C9F" />
                </linearGradient>
              </defs>
            </svg>
            <span
              className="font-heading"
              style={{ fontSize: 16, fontWeight: 700, color: '#2E2E2F' }}
            >
              strikingly AI
            </span>
          </a>
        </div>

        {/* Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '30px 20px',
            marginBottom: 30,
          }}
        >
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p
                className="font-heading"
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#4B5056',
                  marginBottom: 12,
                  marginTop: 0,
                  letterSpacing: '0.05em',
                }}
              >
                {col.heading}
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: 13,
                        color: '#636972',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-body)',
                      }}
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
            borderTop: '1px solid #E2E4E7',
            paddingTop: 16,
          }}
        >
          <p
            style={{
              fontSize: 12,
              color: '#636972',
              margin: 0,
              fontFamily: 'var(--font-body)',
            }}
          >
            {s.footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
