import { strings } from '@/data/strings'
import { categories } from '@/data/generators'

const t = strings.en.browseCategory

const categoryIcons = {
  websites: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="8" width="28" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <line x1="6" y1="15" x2="34" y2="15" stroke="#8159BB" strokeWidth="1.2" opacity="0.5"/>
      <rect x="10" y="19" width="10" height="3" rx="1" fill="#8159BB" opacity="0.4"/>
      <rect x="10" y="25" width="14" height="2" rx="1" fill="#C6C9CD"/>
    </svg>
  ),
  'landing-pages': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="10" y="6" width="20" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="14" y="12" width="12" height="4" rx="1" fill="#7671FF" opacity="0.4"/>
      <rect x="14" y="20" width="12" height="2" rx="1" fill="#C6C9CD"/>
      <rect x="16" y="26" width="8" height="4" rx="2" stroke="#CB0C9F" strokeWidth="1.2" fill="none"/>
    </svg>
  ),
  portfolios: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="10" width="12" height="10" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="22" y="10" width="12" height="10" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="6" y="24" width="12" height="10" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="22" y="24" width="12" height="10" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
    </svg>
  ),
  blogs: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="24" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="12" y="13" width="16" height="2" rx="1" fill="#8159BB" opacity="0.5"/>
      <rect x="12" y="18" width="12" height="2" rx="1" fill="#C6C9CD"/>
      <rect x="12" y="23" width="14" height="2" rx="1" fill="#C6C9CD"/>
      <rect x="12" y="28" width="10" height="2" rx="1" fill="#C6C9CD"/>
    </svg>
  ),
  stores: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M8 16L12 8H28L32 16" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="8" y="16" width="24" height="16" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="16" y="24" width="8" height="8" rx="1" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
    </svg>
  ),
  'link-in-bio': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="12" r="5" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="12" y="20" width="16" height="4" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="12" y="27" width="16" height="4" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="12" y="34" width="16" height="4" rx="2" stroke="#CB0C9F" strokeWidth="1.2" fill="none" opacity="0.5"/>
    </svg>
  ),
}

const BrowseByCategory = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading text-heading-section text-2xl md:text-3xl text-center mb-8">
          {t.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/generators#${cat.id}`}
              className="flex items-start gap-4 bg-white border border-card-border rounded p-5 card-hover group"
            >
              <div className="shrink-0">{categoryIcons[cat.id]}</div>
              <div className="flex-1 min-w-0">
                <span className="font-heading text-heading-dark text-sm block mb-1">
                  {cat.name}
                </span>
                <span className="text-body-text text-sm block">
                  {cat.description}
                </span>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="shrink-0 mt-1 text-brand-purple opacity-60 group-hover:opacity-100 transition-opacity"
              >
                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrowseByCategory
