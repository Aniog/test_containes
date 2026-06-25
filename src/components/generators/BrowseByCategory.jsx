import { ArrowRight } from 'lucide-react';
import { strings, categories } from '@/data/strings';

const t = strings.en.browseByCategory;

const categoryIcons = {
  websites: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <line x1="4" y1="16" x2="36" y2="16" stroke="#8159BB" strokeWidth="1.5"/>
      <circle cx="8" cy="12" r="1.5" fill="#8159BB"/>
      <circle cx="13" cy="12" r="1.5" fill="#8159BB"/>
      <circle cx="18" cy="12" r="1.5" fill="#8159BB"/>
    </svg>
  ),
  'landing-pages': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <line x1="12" y1="12" x2="28" y2="12" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="18" x2="24" y2="18" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="14" y="24" width="12" height="5" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  portfolios: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="22" y="8" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="4" y="24" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="22" y="24" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  blogs: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="28" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <line x1="10" y1="14" x2="30" y2="14" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="10" y1="20" x2="26" y2="20" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="10" y1="26" x2="22" y2="26" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  stores: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="12" width="28" height="22" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <path d="M6 18 L20 6 L34 18" stroke="#8159BB" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="16" y="24" width="8" height="10" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  'link-in-bio': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="12" r="6" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="10" y="22" width="20" height="6" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="10" y="31" width="20" height="6" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
};

const BrowseByCategory = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-[26px] md:text-[30px] leading-[1.2] mb-8">{t.heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/generators#${cat.slug}`}
              className="flex items-start gap-4 bg-white border border-card-border rounded p-5 no-underline hover:shadow-md hover:border-brand-purple transition-all group"
            >
              <div className="shrink-0">{categoryIcons[cat.slug]}</div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold uppercase text-heading-section text-sm mb-1 leading-tight">{cat.name}</h3>
                <p className="text-body-text text-sm m-0">{cat.description}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-card-border group-hover:text-brand-purple transition-colors shrink-0 mt-1" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
