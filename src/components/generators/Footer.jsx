// Footer — real Strikingly paths only, no href="#" placeholders
const footerColumns = [
  {
    heading: "Product",
    links: [
      { label: "Templates", href: "/templates" },
      { label: "Pricing", href: "/pricing" },
      { label: "AI Site Builder", href: "/s/ai_site_builder" },
      { label: "Generators", href: "/generators" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", href: "/support" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

const StrikinglyLogoSmall = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="120"
    height="24"
    viewBox="0 0 120 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 1L3 12h5l-2 11 10-14H11l3-8H8z" fill="url(#footer-grad)" />
    <text
      x="22"
      y="17"
      fontFamily="'Josefin Sans', 'Poppins', sans-serif"
      fontWeight="700"
      fontSize="13"
      fill="#4B5056"
      letterSpacing="0.4"
    >
      strikingly
    </text>
    <defs>
      <linearGradient id="footer-grad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7671FF" />
        <stop offset="100%" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#F4F6F8",
        borderTop: "1px solid #E2E4E7",
        paddingBlock: "50px 30px",
      }}
    >
      <div className="content-wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr repeat(4, 1fr)",
            gap: "30px",
            marginBottom: "40px",
          }}
          className="footer-grid"
        >
          {/* Logo column */}
          <div>
            <a href="/" aria-label="Strikingly home" style={{ display: "inline-block", marginBottom: "12px" }}>
              <StrikinglyLogoSmall />
            </a>
            <p style={{ color: "#636972", fontSize: "13px", lineHeight: 1.6, margin: 0, maxWidth: "200px" }}>
              AI-powered website builder. Build any kind of site in seconds.
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p
                className="font-heading"
                style={{
                  color: "#4B5056",
                  fontSize: "12px",
                  margin: "0 0 14px",
                }}
              >
                {col.heading.toUpperCase()}
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        color: "#636972",
                        fontSize: "13px",
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#8159BB")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#636972")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid #E2E4E7",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <p style={{ color: "#636972", fontSize: "12px", margin: 0 }}>
            &copy; {year} Strikingly, Inc. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="/terms" style={{ color: "#636972", fontSize: "12px", textDecoration: "none" }}>
              Terms
            </a>
            <a href="/privacy" style={{ color: "#636972", fontSize: "12px", textDecoration: "none" }}>
              Privacy
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
