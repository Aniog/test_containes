import React from 'react'
import strings from '@/strings/en'

const { whyStrikingly } = strings.en

const icons = {
  zap: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M18 4L8 18h6l-2 10 10-14h-6l2-10z" stroke="#8159BB" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  smartphone: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="8" y="4" width="16" height="24" rx="3" stroke="#8159BB" strokeWidth="1.8" />
      <path d="M14 24h4" stroke="#8159BB" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 8h8" stroke="#8159BB" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="11" y="10" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="1" opacity="0.5" />
    </svg>
  ),
  'credit-card': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="7" width="24" height="18" rx="3" stroke="#8159BB" strokeWidth="1.8" />
      <path d="M4 13h24" stroke="#8159BB" strokeWidth="1.8" />
      <path d="M8 19h6" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="18" y="18" width="6" height="3" rx="1" stroke="#8159BB" strokeWidth="1" />
    </svg>
  ),
}

export default function WhyStrikingly() {
  return (
    <section className="section-spacing" style={{ background: 'var(--color-light-bg)' }}>
      <div className="container">
        <h2
          style={{
            fontSize: 'clamp(22px, 3vw, 28px)',
            color: 'var(--color-heading)',
            textAlign: 'center',
            marginBottom: 30,
          }}
        >
          {whyStrikingly.heading}
        </h2>

        <div
          className="why-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: 24,
          }}
        >
          <style>{`
            @media (min-width: 768px) {
              .why-grid {
                grid-template-columns: repeat(3, 1fr) !important;
              }
            }
          `}</style>
          {whyStrikingly.items.map((item) => (
            <div
              key={item.title}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 12,
                padding: '24px 16px',
                background: '#FFFFFF',
                borderRadius: 3,
                border: '1px solid var(--color-card-border)',
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 8,
                  background: 'var(--color-light-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {icons[item.icon]}
              </div>
              <h3
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: 'var(--color-heading)',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.5px',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--color-body-text)',
                  lineHeight: 1.6,
                  maxWidth: 300,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
