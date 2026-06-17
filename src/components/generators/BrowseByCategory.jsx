import React from 'react';
import { strings } from '../../strings';
import { categories } from '../../data';

const s = strings.en.browseByCategory;

const CategoryIcon = ({ id }) => {
  const icons = {
    websites: (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="6" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="2" fill="none"/>
        <line x1="4" y1="12" x2="36" y2="12" stroke="#8159BB" strokeWidth="1.5" opacity="0.4"/>
        <circle cx="8" cy="9" r="1.5" fill="#8159BB" opacity="0.5"/>
        <circle cx="12" cy="9" r="1.5" fill="#8159BB" opacity="0.4"/>
        <circle cx="16" cy="9" r="1.5" fill="#8159BB" opacity="0.3"/>
        <rect x="8" y="16" width="12" height="10" rx="1" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.3"/>
        <rect x="24" y="16" width="8" height="4" rx="1" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.3"/>
        <rect x="24" y="22" width="8" height="4" rx="1" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.3"/>
        <line x1="14" y1="34" x2="26" y2="34" stroke="#8159BB" strokeWidth="1.5" opacity="0.3"/>
      </svg>
    ),
    'landing-pages': (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="4" width="28" height="32" rx="3" stroke="#8159BB" strokeWidth="2" fill="none"/>
        <rect x="12" y="10" width="16" height="3" rx="1" fill="#8159BB" opacity="0.3"/>
        <rect x="12" y="16" width="12" height="2" rx="0.5" fill="#8159BB" opacity="0.2"/>
        <rect x="12" y="21" width="14" height="2" rx="0.5" fill="#8159BB" opacity="0.2"/>
        <rect x="14" y="27" width="12" height="5" rx="2" fill="url(#lp-grad)" opacity="0.25"/>
        <defs>
          <linearGradient id="lp-grad" x1="14" y1="27" x2="26" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7671FF"/><stop offset="1" stopColor="#CB0C9F"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    portfolios: (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="2" fill="none"/>
        <rect x="8" y="12" width="10" height="8" rx="1" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.3"/>
        <circle cx="28" cy="16" r="4" stroke="#8159BB" strokeWidth="1" fill="none" opacity="0.3"/>
        <rect x="8" y="24" width="24" height="2" rx="0.5" fill="#8159BB" opacity="0.2"/>
        <rect x="8" y="28" width="16" height="2" rx="0.5" fill="#8159BB" opacity="0.15"/>
      </svg>
    ),
    blogs: (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="2" fill="none"/>
        <line x1="14" y1="12" x2="26" y2="12" stroke="#8159BB" strokeWidth="1.5" opacity="0.3"/>
        <line x1="14" y1="17" x2="24" y2="17" stroke="#8159BB" strokeWidth="1" opacity="0.2"/>
        <line x1="14" y1="21" x2="25" y2="21" stroke="#8159BB" strokeWidth="1" opacity="0.2"/>
        <line x1="14" y1="25" x2="22" y2="25" stroke="#8159BB" strokeWidth="1" opacity="0.2"/>
        <line x1="14" y1="29" x2="20" y2="29" stroke="#8159BB" strokeWidth="1" opacity="0.15"/>
      </svg>
    ),
    stores: (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M8 16L6 8H34L32 16" stroke="#8159BB" strokeWidth="2" fill="none"/>
        <rect x="8" y="16" width="24" height="18" rx="2" stroke="#8159BB" strokeWidth="2" fill="none"/>
        <circle cx="16" cy="26" r="2" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.4"/>
        <circle cx="24" cy="26" r="2" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.4"/>
        <line x1="14" y1="22" x2="26" y2="22" stroke="#8159BB" strokeWidth="1" opacity="0.2"/>
      </svg>
    ),
    'link-in-bio': (
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="14" r="6" stroke="#8159BB" strokeWidth="2" fill="none"/>
        <line x1="12" y1="24" x2="28" y2="24" stroke="#8159BB" strokeWidth="1.5" opacity="0.3"/>
        <line x1="14" y1="28" x2="26" y2="28" stroke="#8159BB" strokeWidth="1.5" opacity="0.3"/>
        <line x1="16" y1="32" x2="24" y2="32" stroke="#8159BB" strokeWidth="1.5" opacity="0.3"/>
      </svg>
    ),
  };
  return icons[id] || icons.websites;
};

const ArrowRight = () => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function BrowseByCategory() {
  return (
    <section className="py-10 md:py-16 bg-light-bg">
      <div className="max-w-content mx-auto px-5">
        <h2 className="section-heading text-2xl md:text-3xl mb-8">{s.heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              className="card flex flex-col no-underline text-body-text hover:text-body-text group"
            >
              <div className="mb-4">
                <CategoryIcon id={cat.id} />
              </div>
              <div className="flex-1 min-w-0">
                <strong className="font-heading font-bold text-heading text-sm mb-1 block" style={{ textTransform: 'uppercase' }}>
                  {cat.name}
                </strong>
                <p className="text-body-text text-sm leading-relaxed">{cat.description}</p>
              </div>
              <div className="mt-3">
                <ArrowRight />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
