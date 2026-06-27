import React from 'react';
import strings from '../strings';
import { categoryKeys } from '../data';

const catIcons = {
  websites: (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="3" y="6" width="34" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="3" y1="14" x2="37" y2="14" stroke="#8159BB" strokeWidth="1" />
      <circle cx="8" cy="10" r="1.5" fill="#8159BB" />
      <circle cx="12" cy="10" r="1.5" fill="#8159BB" />
      <circle cx="16" cy="10" r="1.5" fill="#8159BB" />
    </svg>
  ),
  'landing-pages': (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="6" y="4" width="28" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="10" y="10" width="20" height="10" rx="2" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="10" y="24" width="20" height="3" rx="1.5" fill="#E2E4E7" />
      <rect x="10" y="29" width="14" height="3" rx="1.5" fill="#E2E4E7" />
    </svg>
  ),
  portfolios: (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="8" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="22" y="8" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="4" y="24" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="22" y="24" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" />
    </svg>
  ),
  blogs: (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="5" y="4" width="30" height="32" rx="2" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="10" y1="12" x2="30" y2="12" stroke="#E2E4E7" strokeWidth="1.5" />
      <line x1="10" y1="17" x2="25" y2="17" stroke="#E2E4E7" strokeWidth="1.5" />
      <line x1="10" y1="22" x2="28" y2="22" stroke="#E2E4E7" strokeWidth="1.5" />
      <line x1="10" y1="27" x2="20" y2="27" stroke="#E2E4E7" strokeWidth="1.5" />
    </svg>
  ),
  stores: (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M5 10h30l-2 20H7L5 10z" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="14" cy="16" r="3" stroke="#8159BB" strokeWidth="1.5" />
      <path d="M22 20.5h8" stroke="#E2E4E7" strokeWidth="1.5" />
      <path d="M22 24.5h6" stroke="#E2E4E7" strokeWidth="1.5" />
    </svg>
  ),
  'link-in-bio': (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="13" r="4" stroke="#8159BB" strokeWidth="1.5" />
      <path d="M12 30c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="8" stroke="#E2E4E7" strokeWidth="1" strokeDasharray="3 2" />
    </svg>
  ),
};

export default function BrowseByCategory() {
  const t = strings.en;

  return (
    <section className="max-w-[1200px] mx-auto px-5 py-10">
      <h2 className="text-[26px] md:text-[32px] font-heading font-bold text-[#4B5056] mb-[30px]">
        {t.browseHeading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categoryKeys.map((catKey) => {
          const cat = t.categories[catKey];
          return (
            <a key={catKey} href={`/generators#${catKey}`} className="card flex items-center gap-4 group">
              <div className="flex-shrink-0">{catIcons[catKey]}</div>
              <div className="flex-1 min-w-0">
                <span className="font-heading font-bold text-[14px] text-[#2E2E2F] block mb-[2px]">
                  {cat.name}
                </span>
                <span className="text-[13px] text-[#636972] leading-[1.5]">
                  {cat.desc}
                </span>
              </div>
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="flex-shrink-0 text-[#C6C9CD] group-hover:text-brand-purple transition-colors"
              >
                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          );
        })}
      </div>
    </section>
  );
}
