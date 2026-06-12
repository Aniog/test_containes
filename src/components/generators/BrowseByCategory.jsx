import { strings } from '../../data/strings'
import { categories } from '../../data/generators'

const t = strings.en.browseCategory

function CategoryIcon({ id }) {
  const icons = {
    websites: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5"/>
        <line x1="4" y1="14" x2="36" y2="14" stroke="#8159BB" strokeWidth="1.2"/>
        <rect x="8" y="18" width="10" height="6" rx="1" stroke="#8159BB" strokeWidth="1"/>
        <rect x="22" y="18" width="10" height="2" rx="1" fill="#8159BB" opacity="0.3"/>
        <rect x="22" y="22" width="8" height="2" rx="1" fill="#8159BB" opacity="0.2"/>
      </svg>
    ),
    'landing-pages': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="12" y="10" width="16" height="4" rx="1" fill="#8159BB" opacity="0.2"/>
        <rect x="14" y="18" width="12" height="3" rx="1.5" stroke="#8159BB" strokeWidth="1.2"/>
        <rect x="12" y="26" width="16" height="2" rx="1" fill="#8159BB" opacity="0.15"/>
        <rect x="14" y="30" width="12" height="2" rx="1" fill="#8159BB" opacity="0.1"/>
      </svg>
    ),
    portfolios: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="14" height="11" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
        <rect x="22" y="8" width="14" height="11" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
        <rect x="4" y="23" width="14" height="11" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
        <rect x="22" y="23" width="14" height="11" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
        <path d="M8 15 l3-3 l2 2 l4-4 l3 5" stroke="#8159BB" strokeWidth="0.8" fill="none"/>
      </svg>
    ),
    blogs: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="28" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="10" y="12" width="20" height="2" rx="1" fill="#8159BB" opacity="0.3"/>
        <rect x="10" y="17" width="16" height="2" rx="1" fill="#8159BB" opacity="0.2"/>
        <rect x="10" y="22" width="20" height="2" rx="1" fill="#8159BB" opacity="0.15"/>
        <rect x="10" y="27" width="12" height="2" rx="1" fill="#8159BB" opacity="0.1"/>
      </svg>
    ),
    stores: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M8 16 L8 34 L32 34 L32 16" stroke="#8159BB" strokeWidth="1.5"/>
        <path d="M4 16 L8 6 L32 6 L36 16 Z" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
        <rect x="16" y="24" width="8" height="10" rx="1" stroke="#8159BB" strokeWidth="1.2"/>
        <circle cx="20" cy="12" r="2" stroke="#8159BB" strokeWidth="1"/>
      </svg>
    ),
    'link-in-bio': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="12" r="6" stroke="#8159BB" strokeWidth="1.5"/>
        <rect x="10" y="22" width="20" height="4" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
        <rect x="10" y="28" width="20" height="4" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
        <rect x="10" y="34" width="20" height="4" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
      </svg>
    ),
  }
  return icons[id] || null
}

export default function BrowseByCategory() {
  return (
    <section className="py-10">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-3xl text-center">
          {t.heading}
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/generators#${cat.id}`}
              className="flex items-start gap-4 bg-white border border-card-border rounded-card p-5 transition-all hover:shadow-md hover:border-brand-purple focus-ring group"
            >
              <div className="shrink-0">
                <CategoryIcon id={cat.id} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block font-heading font-bold uppercase text-heading-dark text-sm">
                  {cat.name}
                </span>
                <span className="block mt-1 text-body-text font-body text-sm">
                  {cat.desc}
                </span>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="shrink-0 mt-1 text-body-text group-hover:text-brand-purple transition-colors"
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
