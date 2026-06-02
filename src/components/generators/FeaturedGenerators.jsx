import React from 'react';
import { strings, featuredGenerators } from '@/data/generators';

const s = strings.en;

export default function FeaturedGenerators() {
  return (
    <section style={{ padding: '40px 0' }}>
      <div className="section-container">
        <h2
          style={{
            fontSize: 'clamp(22px, 3vw, 32px)',
            marginBottom: '8px',
            textAlign: 'center',
          }}
        >
          {s.featured.heading}
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: '#636972',
            textAlign: 'center',
            marginBottom: '32px',
          }}
        >
          {s.featured.subheading}
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="card"
              style={{
                display: 'block',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <h3
                style={{
                  fontSize: '16px',
                  marginBottom: '6px',
                  color: '#2E2E2F',
                  textTransform: 'none',
                  fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                  fontWeight: 700,
                }}
              >
                {gen.name}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#636972',
                  marginBottom: '12px',
                  lineHeight: 1.5,
                }}
              >
                {gen.description}
              </p>
              <span className="tag">{gen.category}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
