import React from 'react'
import { featuredGenerators, categories } from '@/strings/generators'

// Singular display names for category tags in mixed grids
const categoryLabels = {
  'websites': 'Website',
  'landing-pages': 'Landing Page',
  'portfolios': 'Portfolio',
  'blogs': 'Blog',
  'stores': 'Store',
  'link-in-bio': 'Link-in-Bio',
}

export default function FeaturedGenerators() {
  return (
    <section style={{ paddingBlock: '40px', background: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <h2
            style={{
              fontSize: 'clamp(22px, 3vw, 28px)',
              color: 'var(--color-heading)',
              marginBottom: 10,
            }}
          >
            FEATURED GENERATORS
          </h2>
          <p style={{ color: 'var(--color-body-text)', fontSize: 15 }}>
            A few common starting points.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: 20,
          }}
          className="featured-grid"
        >
          <style>{`
            @media (min-width: 640px) {
              .featured-grid {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
            @media (min-width: 1024px) {
              .featured-grid {
                grid-template-columns: repeat(3, 1fr) !important;
              }
            }
          `}</style>
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="card"
              aria-label={gen.name}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                <CategoryThumbnail category={gen.category} />
                <span className="tag">
                  {categoryLabels[gen.category] || gen.category}
                </span>
              </div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: 'var(--color-heading-dark)',
                  marginBottom: 6,
                  fontFamily: 'var(--font-heading)',
                  textTransform: 'none',
                  lineHeight: 1.3,
                }}
              >
                {gen.name}
              </h3>
              <p style={{ fontSize: 13, color: 'var(--color-body-text)', lineHeight: 1.5 }}>
                {gen.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryThumbnail({ category }) {
  const colors = {
    websites: { bg: '#EDE9FE', icon: '#8159BB' },
    'landing-pages': { bg: '#E0E7FF', icon: '#7671FF' },
    portfolios: { bg: '#FCE7F3', icon: '#CB0C9F' },
    blogs: { bg: '#D1FAE5', icon: '#059669' },
    stores: { bg: '#FEF3C7', icon: '#D97706' },
    'link-in-bio': { bg: '#DBEAFE', icon: '#2563EB' },
  }
  const c = colors[category] || colors.websites

  return (
    <div
      aria-hidden="true"
      style={{
        width: 40,
        height: 40,
        borderRadius: 6,
        background: c.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="2" stroke={c.icon} strokeWidth="1.5" fill="none" />
        <path d="M2 6h16" stroke={c.icon} strokeWidth="1.5" />
        <circle cx="5" cy="4" r="0.8" fill={c.icon} />
        <circle cx="7.5" cy="4" r="0.8" fill={c.icon} />
      </svg>
    </div>
  )
}
