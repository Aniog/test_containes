import { StrikinglyLogo } from './Illustrations'
import { t } from './strings'

const HEADING_FONT = "'Brandon Grotesque', 'Josefin Sans', Poppins, sans-serif"

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#F4F6F8',
        borderTop: '1px solid #E2E4E7',
        paddingTop: '40px',
        paddingBottom: '30px',
      }}
    >
      <div className="max-w-content mx-auto px-5">
        {/* Top row: logo + columns */}
        <div
          className="grid gap-8 mb-8"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          }}
        >
          {/* Logo column */}
          <div>
            <a
              href="/"
              className="flex items-center gap-2 no-underline mb-3"
              aria-label="Strikingly home"
              style={{ textDecoration: 'none' }}
            >
              <StrikinglyLogo />
              <span
                style={{
                  fontFamily: HEADING_FONT,
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#2E2E2F',
                }}
              >
                strikingly
              </span>
            </a>
            <p
              style={{
                color: '#636972',
                fontSize: '12px',
                lineHeight: 1.6,
                margin: 0,
                maxWidth: '160px',
              }}
            >
              AI-powered website builder for everyone.
            </p>
          </div>

          {/* Link columns */}
          {t.footerColumns.map((col) => (
            <div key={col.heading}>
              <p
                className="m-0 mb-3 uppercase"
                style={{
                  fontFamily: HEADING_FONT,
                  fontWeight: 700,
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  color: '#4B5056',
                }}
              >
                {col.heading}
              </p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        color: '#636972',
                        fontSize: '13px',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => (e.target.style.color = '#8159BB')}
                      onMouseLeave={(e) => (e.target.style.color = '#636972')}
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
            paddingTop: '20px',
            color: '#636972',
            fontSize: '12px',
          }}
        >
          {t.footerCopyright}
        </div>
      </div>
    </footer>
  )
}
