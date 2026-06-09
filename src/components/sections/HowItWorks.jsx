import React from 'react'
import { strings } from '../../data/strings'

const s = strings.en

const stepIcons = [
  (
    <svg key="1" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="#8159BB" opacity="0.1" stroke="#8159BB" strokeWidth="1"/>
      <text x="24" y="29" textAnchor="middle" fill="#8159BB" fontFamily="Josefin Sans, sans-serif" fontWeight="700" fontSize="20">1</text>
    </svg>
  ),
  (
    <svg key="2" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="#8159BB" opacity="0.1" stroke="#8159BB" strokeWidth="1"/>
      <text x="24" y="29" textAnchor="middle" fill="#8159BB" fontFamily="Josefin Sans, sans-serif" fontWeight="700" fontSize="20">2</text>
    </svg>
  ),
  (
    <svg key="3" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="#8159BB" opacity="0.1" stroke="#8159BB" strokeWidth="1"/>
      <text x="24" y="29" textAnchor="middle" fill="#8159BB" fontFamily="Josefin Sans, sans-serif" fontWeight="700" fontSize="20">3</text>
    </svg>
  ),
]

export default function HowItWorks() {
  return (
    <section style={{ paddingBlock: '40px', background: '#F4F6F8' }}>
      <div className="section-container">
        <h2 style={{ fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(22px, 3vw, 28px)', color: '#4B5056', textAlign: 'center', marginBottom: 30 }}>
          {s.howItWorksHeading}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 30 }}>
          {s.howItWorksSteps.map((step, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 12 }}>
              {stepIcons[i]}
              <div style={{ fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, fontSize: 16, textTransform: 'uppercase', color: '#2E2E2F' }}>
                {step.title}
              </div>
              <p style={{ fontSize: 14, color: '#636972', lineHeight: 1.6, maxWidth: 300 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
