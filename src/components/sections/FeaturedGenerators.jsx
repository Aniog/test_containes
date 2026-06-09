import React from 'react'
import { strings } from '../../data/strings'
import { featuredGenerators } from '../../data/generators'

const s = strings.en

export default function FeaturedGenerators() {
  return (
    <section style={{ paddingBlock: '40px' }}>
      <div className="section-container">
        <h2 style={{ fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(22px, 3vw, 28px)', color: '#4B5056', textAlign: 'center', marginBottom: 8 }}>
          {s.featuredHeading}
        </h2>
        <p style={{ textAlign: 'center', color: '#636972', marginBottom: 30, fontSize: 14 }}>
          {s.featuredSubheading}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {featuredGenerators.map((gen) => (
            <a key={gen.slug} href={`/generators/${gen.slug}`} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h3 style={{ fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, fontSize: 16, textTransform: 'uppercase', color: '#2E2E2F', margin: 0 }}>
                {gen.name}
              </h3>
              <p style={{ fontSize: 14, color: '#636972', margin: 0, lineHeight: 1.5, flex: 1 }}>
                {gen.description}
              </p>
              <span className="category-tag" style={{ alignSelf: 'flex-start' }}>
                {gen.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
