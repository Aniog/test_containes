import strings from '@/data/strings.en';
import { categories } from '@/data/generators';

const categoryIcons = {
  websites: (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="6" width="32" height="28" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
      <rect x="4" y="6" width="32" height="8" rx="3" fill="#8159BB" fillOpacity="0.1" />
      <rect x="10" y="18" width="12" height="2" rx="1" fill="#8159BB" fillOpacity="0.4" />
      <rect x="10" y="22" width="20" height="2" rx="1" fill="#C6C9CD" />
      <rect x="10" y="26" width="16" height="2" rx="1" fill="#C6C9CD" />
    </svg>
  ),
  'landing-pages': (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="6" y="4" width="28" height="32" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
      <rect x="12" y="10" width="16" height="3" rx="1" fill="#8159BB" fillOpacity="0.3" />
      <rect x="12" y="16" width="16" height="2" rx="1" fill="#C6C9CD" />
      <rect x="14" y="22" width="12" height="6" rx="2" fill="url(#catLpGrad)" />
      <defs><linearGradient id="catLpGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#7671FF" /><stop offset="100%" stopColor="#CB0C9F" /></linearGradient></defs>
    </svg>
  ),
  portfolios: (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="8" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" fillOpacity="0.06" />
      <rect x="22" y="8" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" fillOpacity="0.06" />
      <rect x="4" y="24" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" fillOpacity="0.06" />
      <rect x="22" y="24" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" fillOpacity="0.06" />
    </svg>
  ),
  blogs: (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
      <rect x="12" y="10" width="16" height="2" rx="1" fill="#8159BB" fillOpacity="0.3" />
      <rect x="12" y="15" width="16" height="1.5" rx="0.75" fill="#C6C9CD" />
      <rect x="12" y="19" width="14" height="1.5" rx="0.75" fill="#C6C9CD" />
      <rect x="12" y="23" width="16" height="1.5" rx="0.75" fill="#C6C9CD" />
      <rect x="12" y="27" width="10" height="1.5" rx="0.75" fill="#C6C9CD" />
    </svg>
  ),
  stores: (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M8 16L12 8H28L32 16" stroke="#8159BB" strokeWidth="2" fill="#8159BB" fillOpacity="0.06" />
      <rect x="8" y="16" width="24" height="18" rx="2" stroke="#8159BB" strokeWidth="2" fill="none" />
      <circle cx="16" cy="26" r="2" fill="#8159BB" fillOpacity="0.3" />
      <circle cx="24" cy="26" r="2" fill="#8159BB" fillOpacity="0.3" />
    </svg>
  ),
  'link-in-bio': (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="12" r="5" stroke="#8159BB" strokeWidth="2" fill="#8159BB" fillOpacity="0.06" />
      <rect x="12" y="20" width="16" height="3" rx="1.5" fill="#8159BB" fillOpacity="0.2" />
      <rect x="14" y="26" width="12" height="3" rx="1.5" fill="#8159BB" fillOpacity="0.15" />
      <rect x="13" y="32" width="14" height="3" rx="1.5" fill="#8159BB" fillOpacity="0.1" />
    </svg>
  ),
};

export default function BrowseByCategory() {
  const s = strings.browseByCategory;
  return (
    <section className="w-full py-[40px]" style={{ background: '#F4F6F8' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <h2
          className="text-[26px] md:text-[32px] mb-[20px]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', color: '#4B5056' }}
        >
          {s.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/generators${cat.href}`}
              className="gen-card flex items-start gap-[15px] no-underline group"
            >
              <div className="flex-shrink-0 pt-[5px]">
                {categoryIcons[cat.id]}
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className="text-[14px] mb-[5px]"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', color: '#2E2E2F' }}
                >
                  {cat.name}
                </h3>
                <p className="text-[13px]" style={{ color: '#636972' }}>{cat.description}</p>
              </div>
              <svg aria-hidden="true" className="flex-shrink-0 mt-[5px] text-[#8159BB]" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
