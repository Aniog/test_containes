import strings from '../strings.en.js';
import { categories } from '../data.js';

const categoryIcons = {
  websites: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="6" fill="#F4F6F8" />
      <rect x="8" y="8" width="24" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="4" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="8" y1="20" x2="16" y2="20" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="24" y1="20" x2="32" y2="20" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="20" y1="8" x2="20" y2="16" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="20" y1="24" x2="20" y2="32" stroke="#8159BB" strokeWidth="1.5" />
    </svg>
  ),
  'landing-pages': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="6" fill="#F4F6F8" />
      <rect x="6" y="8" width="28" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="10" y="12" width="12" height="3" rx="1.5" fill="#8159BB" />
      <rect x="10" y="18" width="20" height="2" rx="1" fill="#E2E4E7" />
      <rect x="10" y="22" width="16" height="2" rx="1" fill="#E2E4E7" />
      <rect x="10" y="26" width="18" height="2" rx="1" fill="#E2E4E7" />
    </svg>
  ),
  portfolios: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="6" fill="#F4F6F8" />
      <rect x="6" y="7" width="28" height="26" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="10" y="11" width="11" height="11" rx="2" fill="#E2E4E7" />
      <rect x="23" y="11" width="7" height="7" rx="2" fill="#E2E4E7" />
      <rect x="23" y="20" width="7" height="9" rx="2" fill="#E2E4E7" />
      <rect x="10" y="24" width="11" height="5" rx="2" fill="#E2E4E7" />
    </svg>
  ),
  blogs: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="6" fill="#F4F6F8" />
      <rect x="8" y="6" width="24" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="12" y1="12" x2="28" y2="12" stroke="#E2E4E7" strokeWidth="1.5" />
      <line x1="12" y1="17" x2="24" y2="17" stroke="#E2E4E7" strokeWidth="1.5" />
      <line x1="12" y1="22" x2="26" y2="22" stroke="#E2E4E7" strokeWidth="1.5" />
      <rect x="12" y="26" width="16" height="4" rx="2" fill="#8159BB" opacity="0.3" />
    </svg>
  ),
  stores: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="6" fill="#F4F6F8" />
      <rect x="10" y="14" width="20" height="18" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="14" y="10" width="12" height="6" rx="2" stroke="#8159BB" strokeWidth="1.5" />
      <circle cx="20" cy="23" r="3" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="20" y1="26" x2="20" y2="28" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="20" y1="18" x2="20" y2="20" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="17" y1="23" x2="14" y2="23" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="23" y1="23" x2="26" y2="23" stroke="#8159BB" strokeWidth="1.5" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="6" fill="#F4F6F8" />
      <circle cx="14" cy="20" r="7" stroke="#8159BB" strokeWidth="1.5" />
      <path d="M19 15l8 0a2 2 0 012 2l0 6a2 2 0 01-2 2l-8 0" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19" y1="20" x2="21" y2="20" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export default function BrowseByCategory() {
  return (
    <section className="py-10 md:py-[40px] bg-light-bg">
      <div className="max-w-content mx-auto px-5">
        <h2 className="text-[26px] md:text-[30px] text-heading-gray m-0 mb-[20px]">
          {strings.categoryHeading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/generators#${cat.slug}`}
              className="card flex flex-col gap-[10px] no-underline text-inherit group"
            >
              <div className="flex justify-between items-start">
                {categoryIcons[cat.slug]}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="text-brand-purple opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-heading font-bold text-[16px] uppercase text-heading-dark">
                {cat.name}
              </span>
              <p className="text-[14px] text-body-gray m-0 leading-relaxed">
                {cat.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}