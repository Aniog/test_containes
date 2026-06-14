import React from "react"
import { strings } from "@/i18n/strings"
import { generators, categories, featuredSlugs } from "@/data/generators"
import { slugify } from "@/lib/utils"

const s = strings.en

// Build a lookup from slug to the data we need.
function buildFeatured() {
  const flat = []
  for (const cat of categories) {
    for (const g of generators[cat.slug]) {
      const slug = slugify(g.name)
      flat.push({ ...g, slug, category: cat })
    }
  }
  const bySlug = Object.fromEntries(flat.map((g) => [g.slug, g]))
  // Preserve the pinned order; skip any missing so we never crash
  return featuredSlugs.map((slug) => bySlug[slug]).filter(Boolean)
}

export default function FeaturedGenerators() {
  const featured = buildFeatured()
  return (
    <section
      aria-labelledby="featured-heading"
      className="w-full"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-12 md:py-16">
        <header className="mb-7">
          <h2
            id="featured-heading"
            className="font-heading font-bold uppercase text-[#4B5056] text-[22px] md:text-[28px]"
          >
            {s.featured.heading}
          </h2>
          <p className="mt-1.5 text-[14px] text-[#636972]">
            {s.featured.subheading}
          </p>
        </header>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
        >
          {featured.map((g) => (
            <li key={g.slug}>
              <a
                href={`/generators/${g.slug}`}
                className="group block h-full bg-white border border-[#C6C9CD] rounded-[3px] p-5 transition-all duration-200 hover:border-[#8159BB] hover:shadow-[0_4px_12px_rgba(129,89,187,0.10)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8159BB]"
              >
                <h3 className="font-heading font-bold text-[#2E2E2F] text-[16px] uppercase leading-snug">
                  {g.name}
                </h3>
                <p className="mt-1.5 text-[14px] text-[#636972] leading-[1.5]">
                  {g.desc}
                </p>
                <div className="mt-3">
                  <span className="inline-block font-heading text-[11px] font-bold uppercase tracking-wide text-[#8159BB] border border-[#8159BB] rounded-[3px] px-2 py-1 leading-none">
                    {g.category.shortName}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
