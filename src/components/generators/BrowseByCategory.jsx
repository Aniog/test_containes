import React from 'react';
import strings from '@/data/strings.en.js';

function CategoryIcon({ catKey }) {
  const icons = {
    websites: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="8" fill="#F4F0FC" />
        <rect x="8" y="10" width="24" height="20" rx="3" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="8" y="10" width="24" height="5" rx="3" fill="#8159BB" opacity="0.15" />
        <circle cx="13" cy="12.5" r="1.5" fill="#8159BB" />
        <circle cx="17" cy="12.5" r="1.5" fill="#8159BB" />
        <circle cx="21" cy="12.5" r="1.5" fill="#8159BB" />
      </svg>
    ),
    'landing-pages': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="8" fill="#F4F0FC" />
        <rect x="8" y="8" width="24" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="8" y1="16" x2="32" y2="16" stroke="#8159BB" strokeWidth="1.5" opacity="0.4" />
        <rect x="12" y="20" width="6" height="3" rx="1" fill="#8159BB" opacity="0.25" />
        <rect x="22" y="26" width="6" height="3" rx="1" fill="#8159BB" opacity="0.2" />
      </svg>
    ),
    portfolios: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="8" fill="#F4F0FC" />
        <rect x="7" y="9" width="26" height="22" rx="3" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="10" y="12" width="9" height="9" rx="2" fill="#8159BB" opacity="0.2" />
        <rect x="21" y="12" width="9" height="9" rx="2" fill="#8159BB" opacity="0.12" />
        <rect x="10" y="23" width="9" height="5" rx="2" fill="#8159BB" opacity="0.12" />
        <rect x="21" y="23" width="9" height="5" rx="2" fill="#8159BB" opacity="0.2" />
      </svg>
    ),
    blogs: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="8" fill="#F4F0FC" />
        <rect x="10" y="8" width="20" height="24" rx="2" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="14" y1="14" x2="26" y2="14" stroke="#8159BB" strokeWidth="1.5" opacity="0.4" />
        <line x1="14" y1="18" x2="24" y2="18" stroke="#8159BB" strokeWidth="1.5" opacity="0.3" />
        <line x1="14" y1="22" x2="26" y2="22" stroke="#8159BB" strokeWidth="1.5" opacity="0.25" />
        <line x1="14" y1="26" x2="20" y2="26" stroke="#8159BB" strokeWidth="1.5" opacity="0.2" />
      </svg>
    ),
    stores: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="8" fill="#F4F0FC" />
        <rect x="8" y="14" width="24" height="18" rx="2" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="14" y="10" width="12" height="6" rx="2" fill="#8159BB" opacity="0.18" />
        <line x1="17" y1="24" x2="23" y2="24" stroke="#8159BB" strokeWidth="1.5" opacity="0.35" />
        <circle cx="24" cy="29" r="2" fill="#8159BB" opacity="0.2" />
        <circle cx="16" cy="29" r="2" fill="#8159BB" opacity="0.15" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect width="40" height="40" rx="8" fill="#F4F0FC" />
        <path d="M13 20C13 16.134 16.134 13 20 13C23.866 13 27 16.134 27 20C27 23.866 23.866 27 20 27" stroke="#8159BB" strokeWidth="1.5" />
        <path d="M27 20C27 23.866 23.866 27 20 27" stroke="#8159BB" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="20" cy="27" r="2.5" fill="#8159BB" opacity="0.3" />
        <circle cx="23" cy="18" r="1.5" fill="#8159BB" opacity="0.25" />
      </svg>
    ),
  };
  return icons[catKey] || icons.websites;
}

export default function BrowseByCategory() {
  const categories = Object.entries(strings.categories);

  return (
    <section className="py-[40px]" style={{ background: '#F4F6F8' }}>
      <div className="max-content section-padding">
        <h2 className="text-[26px] md:text-[32px] text-heading-gray m-0 mb-[30px]">
          {strings.browseHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {categories.map(([key, cat]) => (
            <a
              key={key}
              href={`/generators${cat.hash}`}
              className="card no-underline flex items-center gap-[15px] focus-ring"
            >
              <div className="shrink-0">
                <CategoryIcon catKey={key} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold text-[14px] uppercase text-heading-gray m-0 mb-[4px] leading-[1.2]">
                  {cat.name}
                </h3>
                <p className="text-[13px] text-body-gray m-0 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
                style={{ color: '#C6C9CD' }}
              >
                <path d="M6 4L10 8L6 12" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}