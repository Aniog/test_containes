import React from "react";
import { strings } from "../../data/strings";
import { categoryMeta } from "../../data/generators";

const categoryOrder = ["websites", "landingPages", "portfolios", "blogs", "stores", "linkInBio"];

function CategoryIcon({ categoryKey }) {
  const icons = {
    websites: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="24" height="20" rx="2" stroke="#8159BB" strokeWidth="2" />
        <line x1="4" y1="12" x2="28" y2="12" stroke="#8159BB" strokeWidth="2" />
        <circle cx="8" cy="9" r="1" fill="#8159BB" />
        <circle cx="12" cy="9" r="1" fill="#8159BB" />
        <circle cx="16" cy="9" r="1" fill="#8159BB" />
      </svg>
    ),
    landingPages: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="10" x2="22" y2="10" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="16" x2="22" y2="16" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="22" x2="18" y2="22" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    portfolios: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2" />
        <rect x="18" y="8" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2" />
        <rect x="4" y="22" width="10" height="6" rx="1" stroke="#8159BB" strokeWidth="2" />
        <rect x="18" y="22" width="10" height="6" rx="1" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    blogs: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="10" x2="22" y2="10" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="14" x2="22" y2="14" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="18" x2="18" y2="18" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    stores: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 10 L10 4 L22 4 L26 10" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
        <rect x="4" y="10" width="24" height="18" rx="2" stroke="#8159BB" strokeWidth="2" />
        <line x1="4" y1="16" x2="28" y2="16" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    linkInBio: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="8" y="4" width="16" height="24" rx="4" stroke="#8159BB" strokeWidth="2" />
        <line x1="12" y1="10" x2="20" y2="10" stroke="#8159BB" strokeWidth="2" />
        <line x1="12" y1="14" x2="20" y2="14" stroke="#8159BB" strokeWidth="2" />
        <line x1="12" y1="18" x2="20" y2="18" stroke="#8159BB" strokeWidth="2" />
        <line x1="12" y1="22" x2="20" y2="22" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
  };
  return icons[categoryKey] || null;
}

export default function BrowseByCategory() {
  const s = strings.en;
  return (
    <section className="browse" aria-labelledby="browse-heading">
      <div className="container">
        <h2 id="browse-heading" className="section-heading">{s.browseHeading}</h2>
        <div className="browse-grid">
          {categoryOrder.map((key) => {
            const cat = categoryMeta[key];
            return (
              <a
                key={key}
                href={`/generators#${cat.id}`}
                className="browse-card"
                aria-label={cat.name}
              >
                <CategoryIcon categoryKey={key} />
                <span className="browse-card-name">{cat.name}</span>
                <span className="browse-card-desc">{cat.description}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M7 4 L13 10 L7 16" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
