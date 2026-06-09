import React from 'react'
import { strings } from '../../data/strings'
import { SpeedIcon, MobileIcon, FreeIcon } from '../Icons'

const s = strings.en

const icons = [SpeedIcon, MobileIcon, FreeIcon]

export default function WhyStrikingly() {
  return (
    <section style={{ paddingBlock: '40px' }}>
      <div className="section-container">
        <h2 style={{ fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(22px, 3vw, 28px)', color: '#4B5056', textAlign: 'center', marginBottom: 30 }}>
          {s.whyHeading}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 30 }}>
          {s.whyCards.map((card, i) => {
            const Icon = icons[i]
            return (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 12 }}>
                <Icon />
                <div style={{ fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, fontSize: 16, textTransform: 'uppercase', color: '#2E2E2F' }}>
                  {card.title}
                </div>
                <p style={{ fontSize: 14, color: '#636972', lineHeight: 1.6, maxWidth: 320 }}>
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
