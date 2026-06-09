import React from 'react'
import { strings } from '../../data/strings'
import { categories } from '../../data/generators'
import { WebsiteIcon, LandingPageIcon, PortfolioIcon, BlogIcon, StoreIcon, LinkInBioIcon, ArrowRightIcon } from '../Icons'

const s = strings.en

const iconMap = {
  websites: WebsiteIcon,
  'landing-pages': LandingPageIcon,
  portfolios: PortfolioIcon,
  blogs: BlogIcon,
  stores: StoreIcon,
  'link-in-bio': LinkInBioIcon,
}

export default function BrowseByCategory() {
  return (
    <section style={{ paddingBlock: '40px', background: '#F4F6F8' }}>
      <div className="section-container">
        <h2 style={{ fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(22px, 3vw, 28px)', color: '#4B5056', textAlign: 'center', marginBottom: 30 }}>
          {s.categoryHeading}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {categories.map((cat) => {
            const Icon = iconMap[cat.id]
            return (
              <a key={cat.id} href={`#${cat.id}`} className="card" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 24 }}>
                <div style={{ flexShrink: 0 }}>
                  <Icon />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, fontSize: 14, textTransform: 'uppercase', color: '#2E2E2F', marginBottom: 4 }}>
                    {cat.name}
                  </div>
                  <p style={{ fontSize: 13, color: '#636972', margin: 0, lineHeight: 1.5 }}>
                    {cat.description}
                  </p>
                </div>
                <div style={{ flexShrink: 0, color: '#8159BB' }}>
                  <ArrowRightIcon />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
