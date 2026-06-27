import { strings } from '@/lib/strings'

const CATEGORIES = [
  { 
    id: "websites", 
    name: "Websites", 
    desc: "AI-built business and personal sites for any goal.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-[color:var(--color-brand-purple)]">
        <path d="M3 4H21V20H3V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 8H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 6H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    id: "landing-pages", 
    name: "Landing Pages", 
    desc: "Single-page sites built to convert visitors fast.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-[color:var(--color-brand-purple)]">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    id: "portfolios", 
    name: "Portfolios", 
    desc: "Showcase your work with a clean, focused site.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-[color:var(--color-brand-purple)]">
        <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 6V4h8v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    id: "blogs", 
    name: "Blogs", 
    desc: "Publish-ready blogs with built-in SEO basics.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-[color:var(--color-brand-purple)]">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 7h10M7 11h10M7 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    id: "stores", 
    name: "Online Stores", 
    desc: "Sell products online with payments built in.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-[color:var(--color-brand-purple)]">
        <path d="M9 20a1 1 0 100-2 1 1 0 000 2zM20 20a1 1 0 100-2 1 1 0 000 2z" fill="currentColor"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    id: "link-in-bio", 
    name: "Link-in-Bio", 
    desc: "One link, all your places. Made for creators.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-[color:var(--color-brand-purple)]">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

export default function BrowseByCategory() {
  const { categories } = strings

  return (
    <section className="max-w-[1200px] mx-auto px-5 py-[40px] mb-10">
      <div className="text-center mb-8">
        <h2 className="heading text-[26px] md:text-[32px] text-[color:var(--color-text-heading)]">
          {categories.heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CATEGORIES.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="block bg-white border border-[color:var(--color-border-card)] rounded-[3px] p-[20px] hover:shadow-md hover:border-[color:var(--color-brand-purple)] transition-all group"
          >
            <div className="mb-4">
              {cat.icon}
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[18px] uppercase tracking-wide text-[#2E2E2F] group-hover:text-[color:var(--color-brand-purple)] transition-colors">
                {cat.name}
              </h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="text-[color:var(--color-border-card)] group-hover:text-[color:var(--color-brand-purple)] transition-colors">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-[14px] text-[color:var(--color-text-body)] m-0">
              {cat.desc}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}
