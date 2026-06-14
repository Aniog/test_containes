import React from "react"
import { strings } from "@/i18n/strings"
import { categories, generators } from "@/data/generators"
import { slugify } from "@/lib/utils"
import { CategoryThumb, SearchIcon } from "@/components/illustrations"

const s = strings.en

// Number of cards visible after JS progressive collapse.
const COLLAPSED_VISIBLE = 6

// All data attributes the vanilla JS later reads to wire up search and
// "Show all" behavior. They are emitted directly in HTML so the page works
// with JS off (all cards visible, search inert).
function GeneratorCard({ g, category }) {
  return (
    <li data-card data-search={`${g.name} ${g.desc} ${category.name} ${category.shortName}`.toLowerCase()}>
      <a
        href={`/generators/${slugify(g.name)}`}
        className="group flex h-full bg-white border border-[#C6C9CD] rounded-[3px] p-5 transition-all duration-200 hover:border-[#8159BB] hover:shadow-[0_4px_12px_rgba(129,89,187,0.10)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8159BB]"
      >
        <div className="shrink-0 mr-4 self-start">
          <CategoryThumb kind={category.illustration} />
        </div>
        <div className="min-w-0">
          <h3 className="font-heading font-bold text-[#2E2E2F] text-[15px] uppercase leading-snug">
            {g.name}
          </h3>
          <p className="mt-1.5 text-[14px] text-[#636972] leading-[1.5]">
            {g.desc}
          </p>
        </div>
      </a>
    </li>
  )
}

function CategorySubsection({ category, items, totalLabel }) {
  const hasMore = items.length > COLLAPSED_VISIBLE
  const sectionId = `subsection-${category.slug}`
  return (
    <section
      id={category.slug}
      data-subsection
      data-category-slug={category.slug}
      className="pt-8 first:pt-0 border-t border-[#E2E4E7] first:border-t-0"
    >
      <header className="mb-4">
        <h3
          id={`${category.slug}-heading`}
          className="font-heading font-bold uppercase text-[#4B5056] text-[18px] md:text-[20px]"
        >
          {category.name}
        </h3>
        <p className="mt-1 text-[14px] text-[#636972]">{category.description}</p>
      </header>
      <ul
        id={sectionId}
        role="list"
        data-card-grid
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
      >
        {items.map((g) => (
          <GeneratorCard key={g.name} g={g} category={category} />
        ))}
      </ul>
      {hasMore && (
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            data-show-all
            data-controls={sectionId}
            aria-expanded="true"
            aria-controls={sectionId}
            className="js-only inline-flex items-center gap-2 h-10 px-4 rounded font-heading text-[12px] font-bold uppercase tracking-wide border border-[#8159BB] text-[#8159BB] bg-transparent hover:bg-[#F4F6F8] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8159BB] hidden"
          >
            <span data-show-all-label>{totalLabel}</span>
          </button>
        </div>
      )}
    </section>
  )
}

export default function AllGenerators() {
  // Pre-compute total match count for the result counter at the top of the section.
  const totalCount = categories.reduce(
    (acc, cat) => acc + generators[cat.slug].length,
    0
  )
  return (
    <section
      id="all-generators"
      aria-labelledby="all-generators-heading"
      className="w-full bg-[#F4F6F8]"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-12 md:py-16">
        <header className="mb-6">
          <h2
            id="all-generators-heading"
            className="font-heading font-bold uppercase text-[#4B5056] text-[22px] md:text-[28px]"
          >
            {s.allGenerators.heading}
          </h2>
          <p className="mt-1.5 text-[14px] text-[#636972]">
            {s.allGenerators.subheading}
          </p>
        </header>

        <div className="mb-6">
          <label
            htmlFor="generator-search"
            className="sr-only"
          >
            {s.allGenerators.searchLabel}
          </label>
          <div className="relative max-w-[480px]">
            <span
              className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#636972]"
              aria-hidden="true"
            >
              <SearchIcon />
            </span>
            <input
              id="generator-search"
              type="search"
              data-search-input
              aria-label={s.allGenerators.searchLabel}
              placeholder={s.allGenerators.searchPlaceholder}
              className="w-full h-11 pl-10 pr-3 bg-white border border-[#C6C9CD] rounded-[3px] text-[14px] text-[#2E2E2F] placeholder:text-[#8A8F97] focus:outline-none focus:border-[#8159BB] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8159BB]"
            />
          </div>
          <p
            data-search-count
            aria-live="polite"
            className="mt-2 text-[13px] text-[#636972]"
          >
            {s.allGenerators.resultCount(totalCount)}
          </p>
        </div>

        <div data-subsection-list className="space-y-10">
          {categories.map((cat) => (
            <CategorySubsection
              key={cat.slug}
              category={cat}
              items={generators[cat.slug]}
              totalLabel={s.allGenerators.showAll(generators[cat.slug].length)}
            />
          ))}
        </div>

        <div
          data-empty-state
          hidden
          className="mt-6 bg-white border border-[#C6C9CD] rounded-[3px] p-6 text-center"
        >
          <p className="text-[14px] text-[#636972]">
            {s.allGenerators.emptyTitle}
          </p>
          <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <button
              type="button"
              data-clear-search
              className="inline-flex items-center justify-center h-9 px-4 rounded font-heading text-[12px] font-bold uppercase tracking-wide border border-[#8159BB] text-[#8159BB] bg-transparent hover:bg-[#F4F6F8] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8159BB]"
            >
              {s.allGenerators.emptyClear}
            </button>
            <a
              href="/s/ai_site_builder"
              className="text-[13px] text-[#8159BB] underline underline-offset-2 hover:text-[#5E3FA0] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8159BB] rounded-sm"
            >
              {s.allGenerators.emptyCtaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
