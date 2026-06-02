import React from 'react';
import { strings } from '@/data/generators';

const s = strings.en;

export default function Footer() {
  return (
    <footer
      style={{
        background: '#F4F6F8',
        borderTop: '1px solid #E2E4E7',
        padding: '40px 0 24px',
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            marginBottom: '32px',
          }}
        >
          {/* Logo */}
          <div style={{ flex: '1 1 200px' }}>
            <a
              href="/"
              style={{
                fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: '18px',
                color: '#2E2E2F',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
            >
              strikingly
            </a>
          </div>
          {/* Link columns */}
          {s.footer.columns.map((col, idx) => (
            <div key={idx} style={{ flex: '1 1 160px' }}>
              <h4
                style={{
                  fontSize: '13px',
                  color: '#2E2E2F',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                  fontWeight: 700,
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
                  gap: '8px',
                }}
              >
                {col.links.map((link, lidx) => (
                  <li key={lidx}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: '14px',
                        color: '#636972',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.textDecoration = 'underline')
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.textDecoration = 'none')
                      }
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
            borderTop: '1px solid #E2E4E7',
            paddingTop: '16px',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '13px', color: '#636972' }}>
            &copy; {new Date().getFullYear()} {s.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
