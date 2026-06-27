import { strings } from '@/lib/strings'

const FEATURED_ITEMS = [
  { name: "AI Website Generator", desc: "Describe your business, get a full site", category: "Website", slug: "ai-website-generator" },
  { name: "Free Portfolio Generator", desc: "For creatives, in minutes, no fee", category: "Portfolio", slug: "free-portfolio-generator" },
  { name: "AI Landing Page Maker", desc: "One-page sites built to convert", category: "Landing Page", slug: "ai-landing-page-maker" },
  { name: "Online Store Builder", desc: "Start selling without writing code", category: "Store", slug: "online-store-builder" },
  { name: "Link-in-Bio Generator", desc: "One link for all your channels", category: "Link-in-Bio", slug: "link-in-bio-generator" },
  { name: "One-Page Website Builder", desc: "Simple sites, single scroll", category: "Website", slug: "one-page-website-builder" },
  { name: "Wedding Website Generator", desc: "Share your day with guests", category: "Website", slug: "wedding-website-generator" },
  { name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done", category: "Website", slug: "restaurant-website-builder" },
  { name: "Blog Generator for Beginners", desc: "Publish-ready in minutes", category: "Blog", slug: "blog-generator-for-beginners" }
]

export default function FeaturedGenerators() {
  const { featured } = strings

  return (
    <section className="max-w-[1200px] mx-auto px-5 py-[40px] bg-[color:var(--color-bg-light)] mt-10 mb-10 rounded-xl">
      <div className="text-center mb-8">
        <h2 className="heading text-[26px] md:text-[32px] text-[color:var(--color-text-heading)] mb-2">
          {featured.heading}
        </h2>
        <p className="text-[16px]">{featured.subheading}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURED_ITEMS.map((item) => (
          <a 
            key={item.slug} 
            href={`/generators/${item.slug}`}
            className="block bg-white border border-[color:var(--color-border-card)] rounded-[3px] p-[20px] hover:shadow-md hover:border-[color:var(--color-brand-purple)] transition-all group"
          >
            <div className="flex items-start justify-between mb-2 gap-2">
              <h3 className="font-bold text-[#2E2E2F] group-hover:text-[color:var(--color-brand-purple)] transition-colors leading-tight">
                {item.name}
              </h3>
              <span className="shrink-0 inline-block px-1.5 py-0.5 rounded-[3px] border border-[color:var(--color-brand-purple)] text-[color:var(--color-brand-purple)] text-[11px] uppercase font-['Josefin_Sans'] font-bold leading-none">
                {item.category}
              </span>
            </div>
            <p className="text-[14px] text-[color:var(--color-text-body)] m-0">
              {item.desc}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}
