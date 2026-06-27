import React from 'react'
import strings from '@/strings/en'

const { howItWorks } = strings.en

const icons = [
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 8h18" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 12h8M8 16h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 6h16M4 10h16M4 14h10M4 18h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
]

export default function HowItWorks() {
  return (
    <section className="section-spacing" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <h2
          style={{
            fontSize: 'clamp(22px, 3vw, 28px)',
            color: 'var(--color-heading)',
            textAlign: 'center',
            marginBottom: 30,
          }}
        >
          {howItWorks.heading}
        </h2>

        <div
          className="how-it-works-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: 30,
          }}
        >
          <style>{`
            @media (min-width: 768px) {
              .how-it-works-grid {
                grid-template-columns: repeat(3, 1fr) !important;
              }
            }
          `}</style>
          {howItWorks.steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 14,
              }}
            >
              {/* Numbered purple circle */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--color-ai-blue), var(--color-ai-pink))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 22,
                  flexShrink: 0,
                }}
              >
                {step.number}
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
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--color-body-text)',
                  lineHeight: 1.6,
                  maxWidth: 280,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
