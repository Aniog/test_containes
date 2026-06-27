const categoryIcons = {
  websites: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="8" width="28" height="20" rx="3" stroke="#8159BB" strokeWidth="1.5"/>
      <line x1="6" y1="14" x2="34" y2="14" stroke="#8159BB" strokeWidth="1"/>
      <rect x="10" y="17" width="8" height="6" rx="1" stroke="#8159BB" strokeWidth="0.8" opacity="0.6"/>
      <line x1="14" y1="32" x2="26" y2="32" stroke="#8159BB" strokeWidth="1.5"/>
      <line x1="20" y1="28" x2="20" y2="32" stroke="#8159BB" strokeWidth="1.5"/>
    </svg>
  ),
  'landing-pages': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="10" y="5" width="20" height="30" rx="2" stroke="#8159BB" strokeWidth="1.5"/>
      <rect x="14" y="10" width="12" height="3" rx="1" fill="#8159BB" opacity="0.3"/>
      <rect x="14" y="16" width="12" height="2" rx="1" fill="#C6C9CD"/>
      <rect x="14" y="20" width="12" height="2" rx="1" fill="#C6C9CD"/>
      <rect x="16" y="26" width="8" height="4" rx="2" fill="#8159BB" opacity="0.5"/>
    </svg>
  ),
  portfolios: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="5" y="8" width="13" height="10" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
      <rect x="22" y="8" width="13" height="10" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
      <rect x="5" y="22" width="13" height="10" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
      <rect x="22" y="22" width="13" height="10" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
      <path d="M9 14 L12 11 L15 14" stroke="#8159BB" strokeWidth="0.8" opacity="0.6"/>
    </svg>
  ),
  blogs: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="8" y="6" width="24" height="28" rx="2" stroke="#8159BB" strokeWidth="1.5"/>
      <line x1="12" y1="12" x2="28" y2="12" stroke="#8159BB" strokeWidth="1" opacity="0.5"/>
      <line x1="12" y1="17" x2="28" y2="17" stroke="#C6C9CD" strokeWidth="1"/>
      <line x1="12" y1="21" x2="24" y2="21" stroke="#C6C9CD" strokeWidth="1"/>
      <line x1="12" y1="25" x2="26" y2="25" stroke="#C6C9CD" strokeWidth="1"/>
      <line x1="12" y1="29" x2="20" y2="29" stroke="#C6C9CD" strokeWidth="1"/>
    </svg>
  ),
  stores: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="8" y="14" width="24" height="20" rx="2" stroke="#8159BB" strokeWidth="1.5"/>
      <path d="M8 14 L12 6 L28 6 L32 14" stroke="#8159BB" strokeWidth="1.5"/>
      <line x1="20" y1="6" x2="20" y2="14" stroke="#8159BB" strokeWidth="1" opacity="0.4"/>
      <circle cx="20" cy="24" r="4" stroke="#8159BB" strokeWidth="1.2" opacity="0.6"/>
      <path d="M18 24 L20 26 L23 22" stroke="#8159BB" strokeWidth="1" opacity="0.6"/>
    </svg>
  ),
  'link-in-bio': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="12" r="5" stroke="#8159BB" strokeWidth="1.5"/>
      <rect x="12" y="20" width="16" height="4" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
      <rect x="12" y="26" width="16" height="4" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
      <rect x="12" y="32" width="16" height="4" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
    </svg>
  ),
}

export default function BrowseByCategory({ t, categories }) {
  return (
    <section className="py-[40px]">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        <h2 className="text-[26px] md:text-[30px] text-heading-section mb-[30px]">
          {t.browseByCategory.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.slug}`}
              className="flex items-start gap-[15px] bg-white border border-card-border rounded-[3px] p-[20px] card-hover-lift group"
            >
              <div className="shrink-0">
                {categoryIcons[cat.id]}
              </div>
              <div className="flex-1 min-w-0">
                <span className="block font-heading text-[14px] text-heading-dark mb-[5px]">
                  {cat.name}
                </span>
                <span className="block text-body-text text-[13px]">
                  {cat.desc}
                </span>
              </div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-[2px] text-card-border group-hover:text-brand-purple transition-colors" aria-hidden="true">
                <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
