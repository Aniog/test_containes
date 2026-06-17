import React from 'react';
import strings from '@/data/strings.en';

const categoryIcons = {
  websites: (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="6" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
      <line x1="4" y1="14" x2="36" y2="14" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="1.5" fill="#8159BB" />
      <circle cx="15" cy="10" r="1.5" fill="#8159BB" />
      <rect x="8" y="18" width="12" height="8" rx="1" fill="#8159BB" opacity="0.15" />
      <rect x="22" y="18" width="10" height="3" rx="1" fill="#8159BB" opacity="0.15" />
      <rect x="22" y="23" width="10" height="3" rx="1" fill="#8159BB" opacity="0.15" />
      <line x1="14" y1="34" x2="26" y2="34" stroke="#8159BB" strokeWidth="2" />
      <line x1="20" y1="30" x2="20" y2="34" stroke="#8159BB" strokeWidth="2" />
    </svg>
  ),
  'landing-pages': (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="6" y="4" width="28" height="32" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
      <rect x="10" y="8" width="20" height="8" rx="2" fill="#8159BB" opacity="0.15" />
      <rect x="12" y="20" width="16" height="3" rx="1" fill="#8159BB" opacity="0.15" />
      <rect x="14" y="25" width="12" height="3" rx="1" fill="#8159BB" opacity="0.15" />
      <rect x="14" y="30" width="12" height="3" rx="1.5" fill="#8159BB" opacity="0.3" />
    </svg>
  ),
  portfolios: (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
      <circle cx="16" cy="18" r="4" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" opacity="0.1" />
      <path d="M4 28 L14 20 L22 26 L28 22 L36 28" stroke="#8159BB" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  blogs: (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
      <line x1="12" y1="12" x2="28" y2="12" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="12" y1="17" x2="28" y2="17" stroke="#8159BB" strokeWidth="1" opacity="0.4" />
      <line x1="12" y1="21" x2="24" y2="21" stroke="#8159BB" strokeWidth="1" opacity="0.4" />
      <line x1="12" y1="25" x2="26" y2="25" stroke="#8159BB" strokeWidth="1" opacity="0.4" />
      <line x1="12" y1="29" x2="20" y2="29" stroke="#8159BB" strokeWidth="1" opacity="0.4" />
      <rect x="12" y="6" width="8" height="3" rx="1" fill="#8159BB" opacity="0.3" />
    </svg>
  ),
  stores: (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M8 16 L6 32 H34 L32 16" stroke="#8159BB" strokeWidth="2" fill="none" />
      <path d="M8 16 L12 8 H28 L32 16" stroke="#8159BB" strokeWidth="2" fill="none" />
      <line x1="6" y1="16" x2="34" y2="16" stroke="#8159BB" strokeWidth="2" />
      <rect x="14" y="20" width="12" height="12" rx="1" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" opacity="0.1" />
      <circle cx="20" cy="26" r="2" fill="#8159BB" opacity="0.3" />
    </svg>
  ),
  'link-in-bio': (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="14" stroke="#8159BB" strokeWidth="2" fill="none" />
      <circle cx="20" cy="14" r="3" fill="#8159BB" opacity="0.3" />
      <line x1="14" y1="20" x2="26" y2="20" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="14" y1="24" x2="26" y2="24" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="14" y1="28" x2="22" y2="28" stroke="#8159BB" strokeWidth="1.5" />
    </svg>
  ),
};

export default function BrowseByCategory() {
  const s = strings.browseByCategory;
  return (
    <section className="w-full py-[40px]" style={{ backgroundColor: 'var(--light-bg)' }}>
      <div className="section-container">
        <h2 className="font-heading font-bold text-[26px] md:text-[32px] text-center mb-[30px]" style={{ color: 'var(--heading-text)' }}>
          {s.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {s.categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/generators#${cat.slug}`}
              className="card flex flex-col items-start gap-[10px] group"
            >
              <div className="mb-[5px]">
                {categoryIcons[cat.slug]}
              </div>
              <h3 className="font-heading font-bold text-[15px]" style={{ color: 'var(--heading-text)' }}>
                {cat.name}
              </h3>
              <p className="text-[13px] flex-1" style={{ color: 'var(--body-text)' }}>
                {cat.description}
              </p>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-[5px]" style={{ color: 'var(--brand-purple)' }}>
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
