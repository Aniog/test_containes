import React from 'react';

const footerCols = [
  {
    heading: 'Product',
    links: [
      { label: 'Templates', href: '/templates' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'AI Builder', href: '/s/ai_site_builder' },
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

const FooterLogo = () => (
  <svg
    width="120"
    height="24"
    viewBox="0 0 120 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M8 1L3 11h5l-2 12 10-14H11l3-8H8z" fill="url(#footer-logo-grad)" />
    <defs>
      <linearGradient id="footer-logo-grad" x1="3" y1="1" x2="13" y2="23" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7671FF" />
        <stop offset="1" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>
    <text
      x="18"
      y="17"
      fontFamily="'Josefin Sans', Poppins, sans-serif"
      fontWeight="700"
      fontSize="13"
      fill="#ffffff"
      letterSpacing="0.3"
    >
      strikingly
    </text>
  </svg>
);

const Footer = () => (
  <footer
    style={{
      background: '#2E2E2F',
      color: '#ffffff',
      padding: '50px 20px 30px',
      borderTop: '1px solid rgba(255,255,255,0.08)',
    }}
  >
    <div style={{ maxWidth: '1200px', marginInline: 'auto' }}>
      {/* Top row: logo + columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '200px repeat(4, 1fr)',
          gap: '40px',
          marginBottom: '40px',
        }}
        className="footer-grid"
      >
        {/* Logo column */}
        <div>
          <a href="/" aria-label="Strikingly home">
            <FooterLogo />
          </a>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.55)',
              marginTop: '14px',
              lineHeight: 1.6,
            }}
          >
            AI-powered website builder for everyone.
          </p>
        </div>

        {/* Link columns */}
        {footerCols.map((col) => (
          <div key={col.heading}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'rgba(255,255,255,0.45)',
                margin: '0 0 14px',
              }}
            >
              {col.heading}
            </h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.7)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom: copyright */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '20px',
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.4)',
        }}
      >
        © {new Date().getFullYear()} Strikingly. All rights reserved.
      </div>
    </div>

    <style>{`
      @media (max-width: 900px) {
        .footer-grid {
          grid-template-columns: 1fr 1fr !important;
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

export default Footer;
