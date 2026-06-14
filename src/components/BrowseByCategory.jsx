import React from "react"
import { strings } from "@/i18n/strings"
import { categories } from "@/data/generators"
import { CategoryHeroIcon, ArrowRight } from "@/components/illustrations"

const s = strings.en

export default function BrowseByCategory() {
  return (
    <section
      aria-labelledby="browse-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-12 md:py-16">
        <header className="mb-7">
          <h2
            id="browse-heading"
            className="font-heading font-bold uppercase text-[#4B5056] text-[22px] md:text-[28px]"
          >
            {s.browseByCategory.heading}
          </h2>
        </header>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
        >
          {categories.map((cat) => (
            <li key={cat.slug}>
              <a
                href={`/generators#${cat.slug}`}
                className="group block h-full bg-white border border-[#C6C9CD] rounded-[3px] p-5 transition-all duration-200 hover:border-[#8159BB] hover:shadow-[0_4px_12px_rgba(129,89,187,0.10)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8159BB]"
              >
                <div className="flex items-start justify-between gap-3">
                  <CategoryHeroIcon kind={cat.illustration} />
                  <span className="text-[#8159BB] mt-1 group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight />
                  </span>
                </div>
                <h3 className="mt-3 font-heading font-bold uppercase text-[#2E2E2F] text-[16px]">
                  {cat.name}
                </h3>
                <p className="mt-1.5 text-[14px] text-[#636972] leading-[1.5]">
                  {cat.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
