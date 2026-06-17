import React from 'react';
import { strings } from '../data/strings';
import { categories } from '../data/generators';

const s = strings.en;

// Simple inline SVG icons for each category
const categoryIcons = {
  websites: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="24" height="18" rx="2" stroke="#8159BB" strokeWidth="2" />
      <line x1="4" y1="12" x2="28" y2="12" stroke="#8159BB" strokeWidth="2" />
      <line x1="12" y1="24" x2="20" y2="24" stroke="#8159BB" strokeWidth="2" />
      <line x1="16" y1="24" x2="16" y2="28" stroke="#8159BB" strokeWidth="2" />
    </svg>
  ),
  'landing-pages': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="20" height="24" rx="2" stroke="#8159BB" strokeWidth="2" />
      <line x1="10" y1="10" x2="22" y2="10" stroke="#8159BB" strokeWidth="2" />
      <line x1="10" y1="16" x2="18" y2="16" stroke="#8159BB" strokeWidth="2" />
      <rect x="10" y="20" width="12" height="4" rx="1" fill="#8159BB" opacity="0.3" />
    </svg>
  ),
  portfolios: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2" />
      <rect x="18" y="4" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2" />
      <rect x="4" y="18" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2" />
      <rect x="18" y="18" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2" />
    </svg>
  ),
  blogs: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="20" height="24" rx="2" stroke="#8159BB" strokeWidth="2" />
      <line x1="10" y1="10" x2="22" y2="10" stroke="#8159BB" strokeWidth="2" />
      <line x1="10" y1="14" x2="22" y2="14" stroke="#8159BB" strokeWidth="2" />
      <line x1="10" y1="18" x2="18" y2="18" stroke="#8159BB" strokeWidth="2" />
      <line x1="10" y1="22" x2="20" y2="22" stroke="#8159BB" strokeWidth="2" />
    </svg>
  ),
  stores: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6 10 L10 4 L22 4 L26 10" stroke="#8159BB" strokeWidth="2" />
      <rect x="4" y="10" width="24" height="16" rx="2" stroke="#8159BB" strokeWidth="2" />
      <line x1="4" y1="16" x2="28" y2="16" stroke="#8159BB" strokeWidth="2" />
      <circle cx="16" cy="21" r="2" fill="#8159BB" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="10" y="4" width="12" height="24" rx="3" stroke="#8159BB" strokeWidth="2" />
      <line x1="14" y1="10" x2="18" y2="10" stroke="#8159BB" strokeWidth="2" />
      <line x1="14" y1="14" x2="18" y2="14" stroke="#8159BB" strokeWidth="2" />
      <line x1="14" y1="18" x2="18" y2="18" stroke="#8159BB" strokeWidth="2" />
      <circle cx="16" cy="24" r="1.5" fill="#8159BB" />
    </svg>
  ),
};

export default function BrowseByCategory() {
  return (
    <section className="browse" aria-labelledby="browse-heading">
      <div className="container">
        <h2 id="browse-heading" className="section-heading">{s.browseHeading}</h2>
        <div className="browse-grid">
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="browse-card"
            >
              <div className="browse-card-icon">
                {categoryIcons[cat.slug]}
              </div>
              <h3 className="browse-card-name">{cat.name}</h3>
              <p className="browse-card-desc">{cat.description}</p>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="browse-card-arrow">
                <path d="M7 4 L13 10 L7 16" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
