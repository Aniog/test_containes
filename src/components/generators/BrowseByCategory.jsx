import React from 'react';
import { strings } from '@/data/strings';
import { categories } from '@/data/generators';

const t = strings.en;

const categoryIcons = {
  websites: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="4" y1="14" x2="36" y2="14" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="8" cy="11" r="1.5" fill="#8159BB" />
      <circle cx="12" cy="11" r="1.5" fill="#8159BB" />
      <circle cx="16" cy="11" r="1.5" fill="#8159BB" />
    </svg>
  ),
  'landing-pages': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="12" y="10" width="16" height="4" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="12" y="18" width="16" height="2" rx="1" fill="#8159BB" opacity="0.2" />
      <rect x="12" y="22" width="12" height="2" rx="1" fill="#8159BB" opacity="0.2" />
      <rect x="14" y="28" width="12" height="4" rx="2" fill="#8159BB" opacity="0.4" />
    </svg>
  ),
  portfolios: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="14" height="10" rx="2" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="22" y="8" width="14" height="10" rx="2" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="4" y="22" width="14" height="10" rx="2" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="22" y="22" width="14" height="10" rx="2" stroke="#8159BB" strokeWidth="1.5" />
    </svg>
  ),
  blogs: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="28" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="10" y1="14" x2="30" y2="14" stroke="#8159BB" strokeWidth="1.5" opacity="0.4" />
      <line x1="10" y1="19" x2="26" y2="19" stroke="#8159BB" strokeWidth="1.5" opacity="0.3" />
      <line x1="10" y1="24" x2="28" y2="24" stroke="#8159BB" strokeWidth="1.5" opacity="0.3" />
      <line x1="10" y1="29" x2="20" y2="29" stroke="#8159BB" strokeWidth="1.5" opacity="0.2" />
    </svg>
  ),
  stores: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M8 16 L8 34 L32 34 L32 16" stroke="#8159BB" strokeWidth="1.5" />
      <path d="M4 16 L8 6 L32 6 L36 16 Z" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="16" y="24" width="8" height="10" rx="1" stroke="#8159BB" strokeWidth="1.5" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="12" r="6" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="10" y="22" width="20" height="4" rx="2" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="10" y="28" width="20" height="4" rx="2" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="10" y="34" width="20" height="4" rx="2" stroke="#8159BB" strokeWidth="1.5" />
    </svg>
  ),
};

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="text-brand-purple">
    <path d="M7 4 L13 10 L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BrowseByCategory = () => (
  <section className="py-10 bg-bg-light">
    <div className="max-w-[1200px] mx-auto px-5">
      <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-3xl leading-tight mb-8">
        {t.browseByCategory.heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`/generators#${cat.id}`}
            className="flex items-start gap-4 bg-white border border-card-border rounded p-5 transition-shadow transition-colors hover:shadow-md hover:border-brand-purple group"
          >
            <div className="flex-shrink-0">
              {categoryIcons[cat.id]}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-heading font-bold uppercase text-heading-section text-sm mb-1 group-hover:text-brand-purple transition-colors">
                {cat.name}
              </h3>
              <p className="text-body-text text-sm leading-normal">
                {cat.description}
              </p>
            </div>
            <div className="flex-shrink-0 self-center">
              <ArrowIcon />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default BrowseByCategory;
