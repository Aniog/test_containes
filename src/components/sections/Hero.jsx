import React from 'react'
import { strings } from '../../data/strings'
import { HeroIllustration } from '../Icons'

const s = strings.en

export default function Hero() {
  return (
    <section style={{ background: 'linear-gradient(135deg, rgba(118,113,255,0.04) 0%, rgba(203,12,159,0.04) 100%)', paddingBlock: '60px 40px' }}>
      <div className="section-container" style={{ display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
        {/* Left column */}
        <div style={{ flex: '1 1 440px', minWidth: 280 }}>
          <h1 style={{ fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.15, margin: 0, marginBottom: 20 }}>
            <span style={{ display: 'block', fontSize: 'clamp(28px, 4vw, 44px)', color: '#2E2E2F', marginBottom: 4 }}>
              {s.heroH1Line1}
            </span>
            <span style={{ display: 'block', fontSize: 'clamp(28px, 4vw, 44px)' }} className="ai-gradient-text">
              {s.heroH1Line2}
            </span>
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: '#636972', marginBlock: 0, marginBottom: 30, maxWidth: 480 }}>
            {s.heroSubheadline}
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="/s/ai_site_builder" className="btn-primary" style={{ height: 44, fontSize: 14 }}>
              {s.heroCtaPrimary}
            </a>
            <a href="#all-generators" className="btn-ghost" style={{ height: 36 }}>
              {s.heroCtaSecondary}
            </a>
          </div>
        </div>
        {/* Right column */}
        <div style={{ flex: '1 1 380px', display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: 280 }}>
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}
