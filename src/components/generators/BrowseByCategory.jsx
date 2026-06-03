



import React from 'react';
import strings from '@/data/strings.en.js';

const CategoryIcon = ({ slug }) => {
  const icons = {
    websites: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="32" height="28" rx="4" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="4" y="6" width="32" height="8" rx="4" fill="#F4F6F8" />
        <circle cx="12" cy="14" r="2" fill="#8159BB" opacity="0.5" />
        <circle cx="20" cy="14" r="2" fill="#8159BB" opacity="0.3" />
        <circle cx="28" cy="14" r="2" fill="#8159BB" opacity="0.2" />
      </svg>
    ),
    'landing-pages': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="28" height="32" rx="4" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="12" y="12" width="16" height="6" rx="2" fill="#F4F6F8" />
        <rect x="12" y="22" width="16" height="3" rx="1.5" fill="#E2E4E7" />
        <rect x="12" y="28" width="10" height="3" rx="1.5" fill="#E2E4E7" />
      </svg>
    ),
    portfolios: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="14" height="12" rx="3" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="22" y="8" width="14" height="12" rx="3" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="4" y="24" width="14" height="12" rx="3" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="22" y="24" width="14" height="12" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
    blogs: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="28" height="32" rx="4" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="12" y="10" width="16" height="3" rx="1.5" fill="#E2E4E7" />
        <rect x="12" y="16" width="16" height="3" rx="1.5" fill="#E2E4E7" />
        <rect x="12" y="22" width="12" height="3" rx="1.5" fill="#E2E4E7" />
        <rect x="12" y="28" width="8" height="3" rx="1.5" fill="#E2E4E7" />
      </svg>
    ),
    stores: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="8" y="14" width="24" height="20" rx="4" stroke="#8159BB" strokeWidth="1.5" />
        <path d="M8 18h24" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="16" y="22" width="8" height="8" rx="2" fill="#F4F6F8" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="14" r="8" stroke="#8159BB" strokeWidth="1.5" />
        <path d="M14 28l3-6h6l3 6" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="10" r="2" fill="#8159BB" opacity="0.3" />
      </svg>
    ),
  };
  return icons[slug] || icons.websites;
};

const BrowseByCategory = () => {
  return (
    <section className="section browse-category">
      <div className="section-container">
        <h2 className="section-heading">{strings.browseHeading}</h2>
        <div className="browse-grid">
          {strings.categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/generators#${cat.slug}`}
              className="card browse-card"
            >
              <div className="browse-card-icon" aria-hidden="true">
                <CategoryIcon slug={cat.slug} />
              </div>
              <div className="browse-card-content">
                <h3 className="browse-card-name">{cat.name}</h3>
                <p className="browse-card-desc">{cat.description}</p>
              </div>
              <svg
                className="browse-card-arrow"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 5l5 5-5 5"
                  stroke="#8159BB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;



