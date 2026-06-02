import React from 'react';
import { strings } from '@/data/generators';
import { ArrowRight } from 'lucide-react';

const s = strings.en;

function CategoryIcon({ name }) {
  const icons = {
    'Websites': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="32" height="28" rx="3" stroke="#8159BB" strokeWidth="2" />
        <line x1="4" y1="14" x2="36" y2="14" stroke="#8159BB" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="1.5" fill="#8159BB" />
        <circle cx="15" cy="10" r="1.5" fill="#8159BB" />
        <circle cx="20" cy="10" r="1.5" fill="#8159BB" />
      </svg>
    ),
    'Landing Pages': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="28" height="32" rx="3" stroke="#8159BB" strokeWidth="2" />
        <rect x="10" y="10" width="20" height="8" rx="2" fill="#8159BB" opacity="0.2" />
        <rect x="10" y="22" width="12" height="4" rx="1" fill="#C6C9CD" />
        <rect x="10" y="28" width="8" height="4" rx="1" fill="#C6C9CD" />
      </svg>
    ),
    'Portfolios': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="22" y="6" width="12" height="8" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="22" y="18" width="12" height="16" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="6" y="24" width="14" height="10" rx="2" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    'Blogs': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="2" />
        <line x1="14" y1="12" x2="26" y2="12" stroke="#8159BB" strokeWidth="2" />
        <line x1="14" y1="18" x2="26" y2="18" stroke="#C6C9CD" strokeWidth="1.5" />
        <line x1="14" y1="24" x2="22" y2="24" stroke="#C6C9CD" strokeWidth="1.5" />
      </svg>
    ),
    'Online Stores': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M8 12h24l-2 16H10L8 12z" stroke="#8159BB" strokeWidth="2" />
        <path d="M14 12V8a6 6 0 0112 0v4" stroke="#8159BB" strokeWidth="2" />
        <circle cx="16" cy="28" r="2" fill="#8159BB" />
        <circle cx="24" cy="28" r="2" fill="#8159BB" />
      </svg>
    ),
    'Link-in-Bio': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="12" r="6" stroke="#8159BB" strokeWidth="2" />
        <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#8159BB" strokeWidth="2" />
        <line x1="20" y1="18" x2="20" y2="22" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
  };
  return icons[name] || null;
}

export default function BrowseByCategory() {
  return (
    <section style={{ padding: '40px 0', background: '#F4F6F8' }}>
      <div className="section-container">
        <h2
          style={{
            fontSize: 'clamp(22px, 3vw, 32px)',
            marginBottom: '32px',
            textAlign: 'center',
          }}
        >
          {s.browseByCategory.heading}
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {s.browseByCategory.categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/generators#${cat.slug}`}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textDecoration: 'none',
                color: 'inherit',
                gap: '12px',
              }}
            >
              <CategoryIcon name={cat.name} />
              <h3
                style={{
                  fontSize: '16px',
                  color: '#2E2E2F',
                  textTransform: 'uppercase',
                  fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                  fontWeight: 700,
                }}
              >
                {cat.name}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#636972',
                  lineHeight: 1.5,
                  flex: 1,
                }}
              >
                {cat.description}
              </p>
              <ArrowRight size={20} color="#8159BB" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
