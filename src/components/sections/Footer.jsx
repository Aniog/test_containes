import strings from '@/data/strings';
const s = strings.en;

const footerColumns = [
  {
    title: s.footerProduct,
    links: [
      { label: s.footerFeatures, href: '/about' },
      { label: s.footerTemplates, href: '/templates' },
      { label: s.footerPricing, href: '/pricing' },
    ],
  },
  {
    title: s.footerAbout,
    links: [
      { label: s.footerCompany, href: '/about' },
      { label: s.footerBlog, href: '/blog' },
      { label: s.footerSupport, href: '/support' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help Center', href: '/support' },
      { label: 'Templates', href: '/templates' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: s.footerLegal,
    links: [
      { label: s.footerTerms, href: '/terms' },
      { label: s.footerPrivacy, href: '/privacy' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#F4F6F8',
        borderTop: '1px solid #E2E4E7',
        padding: '40px 20px 20px',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: 30 }}>
          <a
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              textDecoration: 'none',
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect width="28" height="28" rx="6" fill="#8159BB" />
              <path
                d="M8 14L12 9L16 14L20 9"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: '#2E2E2F',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              strikingly AI
            </span>
          </a>
        </div>

        {/* Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))',
            gap: 24,
            marginBottom: 30,
          }}
          className="footer-grid"
        >
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  color: '#4B5056',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  margin: '0 0 12px',
                }}
              >
                {col.title}
              </h4>
              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        color: '#636972',
                        fontSize: 13,
                        textDecoration: 'none',
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
              color: '#636972',
              fontSize: 12,
              margin: 0,
            }}
          >
            {s.footerCopyright}
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </footer>
  );
}
