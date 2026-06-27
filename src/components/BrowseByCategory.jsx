import { ChevronRight } from 'lucide-react';

const categoryIcons = {
  websites: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <line x1="4" y1="14" x2="36" y2="14" stroke="#8159BB" strokeWidth="1" opacity="0.5" />
      <rect x="8" y="18" width="10" height="6" rx="1" fill="#8159BB" opacity="0.2" />
      <rect x="22" y="18" width="10" height="2" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="22" y="22" width="8" height="2" rx="1" fill="#8159BB" opacity="0.15" />
    </svg>
  ),
  'landing-pages': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="12" y="10" width="16" height="4" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="12" y="18" width="16" height="2" rx="1" fill="#8159BB" opacity="0.15" />
      <rect x="14" y="28" width="12" height="4" rx="2" fill="#7671FF" opacity="0.4" />
    </svg>
  ),
  portfolios: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="14" height="10" rx="2" stroke="#8159BB" strokeWidth="1.2" />
      <rect x="22" y="8" width="14" height="10" rx="2" stroke="#8159BB" strokeWidth="1.2" />
      <rect x="4" y="22" width="14" height="10" rx="2" stroke="#8159BB" strokeWidth="1.2" />
      <rect x="22" y="22" width="14" height="10" rx="2" stroke="#8159BB" strokeWidth="1.2" />
    </svg>
  ),
  blogs: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="28" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="10" y="12" width="20" height="3" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="10" y="18" width="16" height="2" rx="1" fill="#8159BB" opacity="0.15" />
      <rect x="10" y="22" width="18" height="2" rx="1" fill="#8159BB" opacity="0.15" />
      <rect x="10" y="26" width="12" height="2" rx="1" fill="#8159BB" opacity="0.15" />
    </svg>
  ),
  stores: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M8 16 L8 34 L32 34 L32 16" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <path d="M4 16 L10 6 L30 6 L36 16 Z" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="16" y="24" width="8" height="10" rx="1" stroke="#8159BB" strokeWidth="1.2" fill="none" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="12" r="6" stroke="#8159BB" strokeWidth="1.5" />
      <rect x="10" y="22" width="20" height="4" rx="2" stroke="#8159BB" strokeWidth="1.2" />
      <rect x="10" y="28" width="20" height="4" rx="2" stroke="#8159BB" strokeWidth="1.2" />
      <rect x="10" y="34" width="20" height="4" rx="2" stroke="#8159BB" strokeWidth="1.2" />
    </svg>
  ),
};

const BrowseByCategory = ({ t, categories }) => {
  return (
    <section className="py-[40px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[30px] text-heading-section text-center mb-[30px]">
          {t.browseByCategory.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/generators#${cat.id}`}
              className="flex items-start gap-[15px] bg-white border border-card-border rounded-[3px] p-[20px] card-hover-shadow focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
            >
              <div className="shrink-0">
                {categoryIcons[cat.id]}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-[14px] text-heading-section uppercase mb-[5px]">
                  {cat.name}
                </h3>
                <p className="text-body-text text-[13px] leading-[1.4]">
                  {cat.description}
                </p>
              </div>
              <ChevronRight className="w-[18px] h-[18px] text-brand-purple shrink-0 mt-[2px]" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
