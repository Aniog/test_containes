import React from 'react';

const categoryIcons = {
  websites: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
      <line x1="4" y1="14" x2="36" y2="14" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="1.5" fill="#8159BB" />
      <circle cx="15" cy="10" r="1.5" fill="#7671FF" />
      <circle cx="20" cy="10" r="1.5" fill="#CB0C9F" />
      <rect x="8" y="18" width="12" height="2" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="8" y="23" width="20" height="2" rx="1" fill="#8159BB" opacity="0.2" />
      <line x1="14" y1="34" x2="26" y2="34" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  'landing-pages': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="28" height="32" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
      <rect x="10" y="8" width="20" height="8" rx="2" stroke="#7671FF" strokeWidth="1.5" fill="none" />
      <rect x="10" y="20" width="20" height="2" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="10" y="25" width="14" height="2" rx="1" fill="#8159BB" opacity="0.2" />
      <rect x="14" y="30" width="12" height="4" rx="2" stroke="#CB0C9F" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  portfolios: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
      <circle cx="20" cy="18" r="5" stroke="#7671FF" strokeWidth="1.5" fill="none" />
      <path d="M8 28 L14 22 L18 26 L24 20 L32 28" stroke="#CB0C9F" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  blogs: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
      <rect x="12" y="8" width="16" height="3" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="12" y="14" width="16" height="2" rx="1" fill="#8159BB" opacity="0.2" />
      <rect x="12" y="19" width="16" height="2" rx="1" fill="#8159BB" opacity="0.2" />
      <rect x="12" y="24" width="12" height="2" rx="1" fill="#8159BB" opacity="0.15" />
      <rect x="12" y="29" width="8" height="2" rx="1" fill="#7671FF" opacity="0.2" />
    </svg>
  ),
  stores: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M8 16 L6 8 H34 L32 16" stroke="#8159BB" strokeWidth="2" fill="none" />
      <rect x="6" y="16" width="28" height="18" rx="2" stroke="#8159BB" strokeWidth="2" fill="none" />
      <circle cx="16" cy="25" r="3" stroke="#7671FF" strokeWidth="1.5" fill="none" />
      <circle cx="26" cy="25" r="3" stroke="#CB0C9F" strokeWidth="1.5" fill="none" />
      <line x1="19" y1="25" x2="23" y2="25" stroke="#8159BB" strokeWidth="1" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="14" r="6" stroke="#8159BB" strokeWidth="2" fill="none" />
      <rect x="12" y="24" width="16" height="2" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="14" y="29" width="12" height="2" rx="1" fill="#8159BB" opacity="0.2" />
      <circle cx="14" cy="34" r="1.5" fill="#7671FF" opacity="0.4" />
      <circle cx="20" cy="34" r="1.5" fill="#CB0C9F" opacity="0.4" />
      <circle cx="26" cy="34" r="1.5" fill="#8159BB" opacity="0.4" />
    </svg>
  ),
};

const BrowseByCategory = ({ heading, categories }) => (
  <section className="w-full bg-[#F4F6F8] py-10 md:py-[40px]">
    <div className="max-w-[1200px] mx-auto px-5">
      <h2 className="text-[26px] md:text-[32px] font-bold text-center mb-8 text-[#4B5056] uppercase">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`/generators#${cat.id}`}
            className="flex items-start gap-4 bg-white border border-[#C6C9CD] rounded-[3px] p-5 card-hover no-underline group"
          >
            <div className="flex-shrink-0 mt-1">
              {categoryIcons[cat.id]}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-heading font-bold text-[15px] text-[#4B5056] uppercase mb-1">{cat.name}</h3>
              <p className="text-[13px] text-[#636972]">{cat.description}</p>
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="flex-shrink-0 mt-2 text-[#8159BB] group-hover:translate-x-1 transition-transform">
              <path d="M7 4 L13 10 L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default BrowseByCategory;
