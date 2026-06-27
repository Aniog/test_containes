import React from 'react';
import strings from '@/data/strings.en.js';
import { categories } from '@/data/generators.js';

const CategoryIcons = {
  globe: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="16" stroke="#8159BB" strokeWidth="1.5" />
      <ellipse cx="20" cy="20" rx="8" ry="16" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="4" y1="20" x2="36" y2="20" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="20" y1="4" x2="20" y2="12" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="20" y1="28" x2="20" y2="36" stroke="#8159BB" strokeWidth="1.5" />
    </svg>
  ),
  target: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="16" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="10" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="4" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="1.5" fill="#8159BB" />
    </svg>
  ),
  briefcase: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="14" width="28" height="20" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <path d="M14 14V10a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="6" y1="24" x2="34" y2="24" stroke="#8159BB" strokeWidth="1.5" />
    </svg>
  ),
  edit: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="24" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="14" y1="16" x2="26" y2="16" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="14" y1="21" x2="26" y2="21" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="14" y1="26" x2="22" y2="26" stroke="#8159BB" strokeWidth="1.5" />
    </svg>
  ),
  'shopping-cart': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="14" cy="32" r="2" fill="#8159BB" />
      <circle cx="28" cy="32" r="2" fill="#8159BB" />
      <path d="M4 8h5l3 16h16l4-12H12" stroke="#8159BB" strokeWidth="1.5" />
    </svg>
  ),
  link: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M18 22a4 4 0 0 0 5.657 0l4.95-4.95a4 4 0 0 0-5.657-5.657" stroke="#8159BB" strokeWidth="1.5" />
      <path d="M22 18a4 4 0 0 0-5.657 0l-4.95 4.95a4 4 0 1 0 5.657 5.657" stroke="#8159BB" strokeWidth="1.5" />
    </svg>
  ),
};

export default function BrowseByCategory() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{strings.browseHeading}</h2>
        <p className="section-subtitle">{strings.browseSubheading}</p>
        <div className="grid-3">
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/generators#${cat.slug}`}
              className="card-link"
            >
              <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ flexShrink: 0 }}>
                  {CategoryIcons[cat.icon] || CategoryIcons.globe}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontSize: '14px', marginBlockEnd: '4px', color: 'var(--color-hero-dark)' }}>
                    {cat.name}
                  </h3>
                  <p style={{ color: 'var(--color-body)', fontSize: '13px', margin: 0 }}>
                    {cat.description}
                  </p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  style={{ flexShrink: 0, color: 'var(--color-brand-purple)' }}
                >
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}