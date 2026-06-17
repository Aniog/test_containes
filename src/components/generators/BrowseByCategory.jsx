import React from 'react';
import { strings } from '@/data/strings';
import { categoryOrder } from '@/data/generators';

const s = strings.en;

const categoryIcons = {
  websites: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
      <rect x="4" y="6" width="32" height="6" rx="3" fill="#8159BB" opacity="0.15" />
      <rect x="10" y="16" width="10" height="2" rx="1" fill="#8159BB" opacity="0.4" />
      <rect x="10" y="20" width="16" height="2" rx="1" fill="#C6C9CD" />
      <rect x="10" y="24" width="12" height="2" rx="1" fill="#C6C9CD" />
      <rect x="26" y="16" width="6" height="10" rx="1" fill="#8159BB" opacity="0.1" />
    </svg>
  ),
  'landing-pages': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
      <rect x="12" y="10" width="16" height="3" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="12" y="16" width="16" height="6" rx="1" fill="#8159BB" opacity="0.1" />
      <rect x="14" y="25" width="12" height="4" rx="2" fill="url(#lpGrad)" />
      <defs><linearGradient id="lpGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#7671FF" /><stop offset="100%" stopColor="#CB0C9F" /></linearGradient></defs>
    </svg>
  ),
  portfolios: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
      <rect x="8" y="12" width="10" height="8" rx="1" fill="#8159BB" opacity="0.15" />
      <rect x="22" y="12" width="10" height="3" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="22" y="18" width="10" height="2" rx="1" fill="#C6C9CD" />
      <rect x="8" y="24" width="24" height="2" rx="1" fill="#C6C9CD" />
    </svg>
  ),
  blogs: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="28" height="32" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
      <rect x="10" y="10" width="20" height="3" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="10" y="16" width="20" height="2" rx="1" fill="#C6C9CD" />
      <rect x="10" y="20" width="20" height="2" rx="1" fill="#C6C9CD" />
      <rect x="10" y="24" width="14" height="2" rx="1" fill="#C6C9CD" />
      <rect x="10" y="28" width="20" height="2" rx="1" fill="#C6C9CD" />
    </svg>
  ),
  stores: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M8 14h24v18a3 3 0 01-3 3H11a3 3 0 01-3-3V14z" stroke="#8159BB" strokeWidth="2" fill="none" />
      <path d="M6 10l4-6h20l4 6H6z" stroke="#8159BB" strokeWidth="2" fill="#8159BB" opacity="0.1" />
      <rect x="14" y="20" width="12" height="6" rx="1" fill="#8159BB" opacity="0.15" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="14" r="6" stroke="#8159BB" strokeWidth="2" fill="#8159BB" opacity="0.1" />
      <rect x="12" y="24" width="16" height="3" rx="1.5" fill="#8159BB" opacity="0.3" />
      <rect x="14" y="30" width="12" height="3" rx="1.5" fill="#C6C9CD" />
    </svg>
  ),
};

export default function BrowseByCategory() {
  return (
    <section className="py-[40px] bg-light-bg">
      <div className="section-wrapper">
        <h2 className="text-[26px] md:text-[32px] text-heading mb-[30px]">
          {s.browseByCategory.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {categoryOrder.map((slug) => {
            const cat = s.categories[slug];
            return (
              <a
                key={slug}
                href={`/generators#${slug}`}
                className="card-base flex items-start gap-[15px] no-underline group"
              >
                <div className="flex-shrink-0 pt-[2px]">
                  {categoryIcons[slug]}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-[14px] text-heading-dark m-0 mb-[5px] uppercase leading-[1.3]">
                    {cat.name}
                  </h3>
                  <p className="text-body-text text-[13px] m-0 leading-[1.5]">
                    {cat.description}
                  </p>
                </div>
                <svg
                  className="flex-shrink-0 mt-[4px] text-brand-purple"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
