import React from 'react'
import { strings } from '../../data/strings'

const s = strings.en

export default function ClosingCTA() {
  return (
    <section style={{ paddingBlock: '60px', background: '#FFFFFF' }}>
      <div className="section-container" style={{ textAlign: 'center' }}>
        <h2 style={{
          fontFamily: '"Josefin Sans", Poppins, sans-serif',
          fontWeight: 700,
          textTransform: 'uppercase',
          fontSize: 'clamp(22px, 3vw, 32px)',
          color: '#2E2E2F',
          marginBottom: 12,
        }}>
          {s.closingHeading}
        </h2>
        <p style={{
          fontSize: 16,
          color: '#636972',
          marginBottom: 30,
          maxWidth: 480,
          marginInline: 'auto',
          lineHeight: 1.6,
        }}>
          {s.closingSub}
        </p>
        <a href="/s/ai_site_builder" className="btn-primary" style={{ height: 44, fontSize: 15 }}>
          {s.closingCta}
        </a>
      </div>
    </section>
  )
}
