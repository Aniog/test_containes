const categoryIcons = {
  websites: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5"/>
      <line x1="4" y1="16" x2="36" y2="16" stroke="#8159BB" strokeWidth="1.5"/>
      <circle cx="8" cy="12" r="1.5" fill="#8159BB"/>
      <circle cx="13" cy="12" r="1.5" fill="#8159BB"/>
    </svg>
  ),
  'landing-pages': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5"/>
      <rect x="12" y="10" width="16" height="4" rx="1" fill="#8159BB" opacity="0.3"/>
      <rect x="14" y="18" width="12" height="2" rx="1" fill="#8159BB" opacity="0.2"/>
      <rect x="14" y="24" width="12" height="6" rx="2" fill="#8159BB" opacity="0.4"/>
    </svg>
  ),
  portfolios: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="1.5"/>
      <rect x="22" y="4" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="1.5"/>
      <rect x="4" y="22" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="1.5"/>
      <rect x="22" y="22" width="14" height="14" rx="2" stroke="#8159BB" strokeWidth="1.5"/>
    </svg>
  ),
  blogs: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="28" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5"/>
      <line x1="12" y1="14" x2="28" y2="14" stroke="#8159BB" strokeWidth="1.5" opacity="0.5"/>
      <line x1="12" y1="20" x2="28" y2="20" stroke="#8159BB" strokeWidth="1.5" opacity="0.4"/>
      <line x1="12" y1="26" x2="22" y2="26" stroke="#8159BB" strokeWidth="1.5" opacity="0.3"/>
    </svg>
  ),
  stores: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M6 16l4-10h20l4 10" stroke="#8159BB" strokeWidth="1.5"/>
      <rect x="6" y="16" width="28" height="18" rx="2" stroke="#8159BB" strokeWidth="1.5"/>
      <rect x="16" y="24" width="8" height="10" rx="1" stroke="#8159BB" strokeWidth="1.5"/>
    </svg>
  ),
  'link-in-bio': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="12" r="6" stroke="#8159BB" strokeWidth="1.5"/>
      <rect x="10" y="22" width="20" height="5" rx="2.5" stroke="#8159BB" strokeWidth="1.5"/>
      <rect x="10" y="30" width="20" height="5" rx="2.5" stroke="#8159BB" strokeWidth="1.5"/>
    </svg>
  ),
};

export default function BrowseByCategory({ t, categories }) {
  return (
    <section className="py-[40px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[30px] text-heading-section text-center mb-8">{t.heading}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/generators#${cat.id}`}
              className="group flex items-start gap-4 bg-white border border-card-border rounded-[3px] p-5 transition-shadow hover:shadow-md hover:border-brand-purple focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
            >
              <div className="shrink-0">{categoryIcons[cat.id]}</div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold text-[14px] text-heading-section uppercase mb-1">
                  {cat.name}
                </h3>
                <p className="text-body-text text-[13px]">{cat.desc}</p>
              </div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-1 text-brand-purple opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
