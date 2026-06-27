import React from 'react'
import strings from '@/strings/en'

const { closingCta } = strings.en

export default function ClosingCTA() {
  return (
    <section className="section-spacing" style={{ background: '#FFFFFF' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2
          style={{
            fontSize: 'clamp(26px, 4vw, 36px)',
            color: 'var(--color-heading)',
            marginBottom: 14,
          }}
        >
          {closingCta.heading}
        </h2>
        <p
          style={{
            fontSize: 16,
            color: 'var(--color-body-text)',
            lineHeight: 1.6,
            marginBottom: 24,
            maxWidth: 460,
            marginInline: 'auto',
          }}
        >
          {closingCta.sub}
        </p>
        <a
          href={closingCta.buttonUrl}
          className="btn-ai-gradient"
          style={{ height: 44, fontSize: 14 }}
        >
          {closingCta.button}
        </a>
      </div>
    </section>
  )
}
