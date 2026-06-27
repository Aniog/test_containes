import React from 'react'
import strings from '@/strings/en'

const { footer } = strings.en

export default function Footer() {
  const year = new Date().getFullYear()
  const copyright = footer.copyright.replace('{year}', year)

  return (
    <footer
      style={{
        background: 'var(--color-light-bg)',
        borderTop: '1px solid var(--color-divider)',
        paddingBlock: '40px 20px',
      }}
    >
      <div className="container">
        {/* Logo + tagline */}
        <div style={{ marginBottom: 30 }}>
          <a
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 10,
            }}
          >
            <StrikinglyLogo />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 16,
                textTransform: 'uppercase',
                color: 'var(--color-heading-dark)',
                letterSpacing: '0.5px',
              }}
            >
              Strikingly
            </span>
          </a>
          <p style={{ fontSize: 13, color: 'var(--color-body-text)', maxWidth: 260 }}>
            {footer.tagline || 'The website builder that gets you online in minutes.'}
          </p>
        </div>

        {/* Link columns */}
        <div
          className="footer-columns"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 30,
            marginBottom: 30,
          }}
        >
          <style>{`
            @media (min-width: 640px) {
              .footer-columns {
                grid-template-columns: repeat(4, 1fr) !important;
              }
            }
          `}</style>
          {footer.columns.map((column) => (
            <div key={column.title}>
              <h4
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-heading)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: 12,
                }}
              >
                {column.title}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      style={{
                        fontSize: 13,
                        color: 'var(--color-body-text)',
                        transition: 'color 0.2s',
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

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: 'var(--color-divider)',
            marginBottom: 16,
          }}
        />

        {/* Copyright */}
        <p
          style={{
            fontSize: 12,
            color: 'var(--color-body-text)',
            textAlign: 'center',
          }}
        >
          {copyright}
        </p>
      </div>
    </footer>
  )
}

function StrikinglyLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="28" height="28" rx="6" fill="url(#footer-logo-grad)" />
      <path
        d="M8 10h12M8 14h8M8 18h10"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="footer-logo-grad"
          x1="0"
          y1="0"
          x2="28"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  )
}
