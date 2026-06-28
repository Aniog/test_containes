import { useEffect, useId, useMemo, useRef, useState } from "react"
import { Search, ChevronDown, ArrowRight } from "lucide-react"

import { Logo } from "@/components/ui/Logo"
import { GeneratorCard, CategoryIllustration } from "@/components/GeneratorCard"
import { HeroIllustration } from "@/components/HeroIllustration"
import { strings } from "@/data/strings.en"
import {
  allGenerators,
  featuredGenerators,
  generatorCategories,
  generatorsByCategory,
} from "@/data/generators"

const s = strings.en
const INITIAL_VISIBLE_COUNT = 6

function slugToHref(slug) {
  return `/generators/${slug}`
}

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E2E4E7] bg-white">
      <div className="mx-auto flex h-[56px] max-w-[1200px] items-center px-5">
        <a href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 rounded-sm">
          <Logo className="text-lg" />
        </a>
      </div>
    </header>
  )
}

function Breadcrumb() {
  return (
    <nav aria-label={s.breadcrumb.ariaLabel} className="border-b border-[#E2E4E7] bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-3">
        <ol className="flex items-center gap-2 text-sm text-[#636972]">
          <li>
            <a href="/" className="hover:text-[#8159BB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 rounded-sm">
              {s.breadcrumb.home}
            </a>
          </li>
          <li aria-hidden="true">{s.breadcrumb.separator}</li>
          <li className="text-[#4B5056]" aria-current="page">
            {s.breadcrumb.current}
          </li>
        </ol>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-[80px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(118,113,255,0.12) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(203,12,159,0.08) 0%, transparent 50%)",
        }}
      />
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-5 md:flex-row md:justify-between">
        <div className="flex max-w-[560px] flex-col items-start text-left">
          <h1 className="font-['Josefin_Sans',sans-serif] text-[32px] font-bold uppercase leading-[1.1] text-[#2E2E2F] md:text-[44px] lg:text-[48px]">
            <span className="block">{s.hero.line1}</span>
            <span
              className="block bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              {s.hero.line2}
            </span>
          </h1>
          <p className="mt-5 max-w-[480px] text-base leading-relaxed text-[#636972]">
            {s.hero.subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={s.hero.aiBuilderHref}
              className="inline-flex h-11 items-center justify-center rounded-[4px] bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] px-[15px] font-['Josefin_Sans',sans-serif] text-sm font-bold uppercase text-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2"
            >
              {s.hero.primaryCta}
            </a>
            <a
              href={s.hero.browseHref}
              className="inline-flex h-11 items-center justify-center rounded-[4px] border border-[#8159BB] bg-transparent px-[15px] font-['Josefin_Sans',sans-serif] text-sm font-bold uppercase text-[#8159BB] transition-colors hover:bg-[#F4F6F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2"
            >
              {s.hero.secondaryCta}
            </a>
          </div>
        </div>
        <div className="flex w-full justify-center md:w-auto md:justify-end">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}

function FeaturedGenerators() {
  return (
    <section className="bg-[#F4F6F8] py-10 md:py-12 lg:py-16">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="mb-8">
          <h2 className="font-['Josefin_Sans',sans-serif] text-[26px] font-bold uppercase leading-tight text-[#4B5056] md:text-[30px]">
            {s.featured.heading}
          </h2>
          <p className="mt-2 text-sm text-[#636972]">{s.featured.subheading}</p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGenerators.map((item) => (
            <GeneratorCard
              key={item.id}
              href={slugToHref(item.slug)}
              name={item.name}
              description={item.description}
              categoryKey={item.categoryKey}
              categoryLabel={item.categoryLabel}
              showCategoryTag
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function BrowseByCategory() {
  const categoryKeys = [
    "websites",
    "landingPages",
    "portfolios",
    "blogs",
    "stores",
    "linkInBio",
  ]

  return (
    <section className="bg-white py-10 md:py-12 lg:py-16">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="mb-8">
          <h2 className="font-['Josefin_Sans',sans-serif] text-[26px] font-bold uppercase leading-tight text-[#4B5056] md:text-[30px]">
            {s.categories.heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categoryKeys.map((key) => {
            const cat = s.categories.list[key]
            return (
              <a
                key={key}
                href={cat.href}
                className="group block rounded-[3px] border border-[#C6C9CD] bg-white p-5 transition-all duration-200 hover:border-[#8159BB] hover:shadow-[0_4px_12px_rgba(129,89,187,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2"
              >
                <CategoryIllustration categoryKey={key} className="mb-4" />
                <h3 className="font-['Josefin_Sans',sans-serif] text-base font-bold uppercase leading-tight text-[#4B5056]">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#636972]">
                  {cat.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#8159BB]">
                  Browse
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function DirectorySection() {
  const [query, setQuery] = useState("")
  const [expanded, setExpanded] = useState(() => {
    const initial = {}
    generatorCategories.forEach((cat) => {
      initial[cat.key] = false
    })
    return initial
  })
  const searchId = useId()
  const resultCountRef = useRef(null)

  const normalizedQuery = query.trim().toLowerCase()

  const filteredByCategory = useMemo(() => {
    if (!normalizedQuery) {
      return generatorCategories.map((cat) => ({
        ...cat,
        items: generatorsByCategory[cat.key],
      }))
    }
    return generatorCategories.map((cat) => ({
      ...cat,
      items: generatorsByCategory[cat.key].filter((item) => {
        const haystack = `${item.name} ${item.description} ${cat.title}`.toLowerCase()
        return haystack.includes(normalizedQuery)
      }),
    }))
  }, [normalizedQuery])

  const totalMatches = useMemo(
    () => filteredByCategory.reduce((sum, cat) => sum + cat.items.length, 0),
    [filteredByCategory]
  )

  const visibleItems = (items, categoryKey) => {
    if (normalizedQuery) return items
    if (expanded[categoryKey]) return items
    return items.slice(0, INITIAL_VISIBLE_COUNT)
  }

  useEffect(() => {
    if (resultCountRef.current && normalizedQuery) {
      resultCountRef.current.focus()
    }
  }, [normalizedQuery, totalMatches])

  return (
    <section id={s.directory.id} className="bg-[#F4F6F8] py-10 md:py-12 lg:py-16">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="mb-8">
          <h2 className="font-['Josefin_Sans',sans-serif] text-[26px] font-bold uppercase leading-tight text-[#4B5056] md:text-[30px]">
            {s.directory.heading}
          </h2>
          <p className="mt-2 text-sm text-[#636972]">{s.directory.subheading}</p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-[480px]">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#636972]"
              aria-hidden="true"
            />
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label={s.directory.search.ariaLabel}
              placeholder={s.directory.search.placeholder}
              className="h-10 w-full rounded-[4px] border border-[#C6C9CD] bg-white pl-9 pr-3 text-sm text-[#2E2E2F] placeholder:text-[#636972]/60 focus:border-[#8159BB] focus:outline-none focus:ring-2 focus:ring-[#8159BB]/20"
            />
          </div>
          {normalizedQuery && (
            <p
              ref={resultCountRef}
              tabIndex={-1}
              aria-live="polite"
              className="mt-2 text-sm text-[#636972]"
            >
              {s.directory.search.resultCount(totalMatches)}
            </p>
          )}
        </div>

        {normalizedQuery && totalMatches === 0 && (
          <div className="rounded-[3px] border border-[#C6C9CD] bg-white p-8 text-center">
            <p className="text-[#4B5056]">{s.directory.search.noResults}</p>
            <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setQuery("")}
                className="inline-flex h-9 items-center justify-center rounded-[4px] border border-[#8159BB] bg-transparent px-4 font-['Josefin_Sans',sans-serif] text-xs font-bold uppercase text-[#8159BB] transition-colors hover:bg-[#F4F6F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2"
              >
                {s.directory.search.clear}
              </button>
              <a
                href="/s/ai_site_builder"
                className="text-sm font-medium text-[#8159BB] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 rounded-sm"
              >
                {s.directory.search.aiBuilderFallback}
              </a>
            </div>
          </div>
        )}

        <div className="space-y-10">
          {filteredByCategory.map((cat) => {
            const visible = visibleItems(cat.items, cat.key)
            const hasMore = cat.items.length > INITIAL_VISIBLE_COUNT && !normalizedQuery
            const isExpanded = expanded[cat.key]

            return (
              <div
                key={cat.key}
                id={cat.slug}
                className={visible.length === 0 ? "hidden" : ""}
                aria-hidden={visible.length === 0}
              >
                <div className="mb-4">
                  <h3 className="font-['Josefin_Sans',sans-serif] text-lg font-bold uppercase leading-tight text-[#4B5056]">
                    {s.directory.categories[cat.key].title}
                  </h3>
                  <p className="mt-1 text-sm text-[#636972]">
                    {s.directory.categories[cat.key].description}
                  </p>
                </div>
                <div
                  id={`${cat.slug}-grid`}
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {visible.map((item) => (
                    <GeneratorCard
                      key={item.id}
                      href={slugToHref(item.slug)}
                      name={item.name}
                      description={item.description}
                      categoryKey={item.categoryKey}
                    />
                  ))}
                </div>
                {hasMore && (
                  <div className="mt-5">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={`${cat.slug}-grid`}
                      onClick={() =>
                        setExpanded((prev) => ({ ...prev, [cat.key]: !prev[cat.key] }))
                      }
                      className="inline-flex h-9 items-center justify-center rounded-[4px] border border-[#8159BB] bg-transparent px-4 font-['Josefin_Sans',sans-serif] text-xs font-bold uppercase text-[#8159BB] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2"
                    >
                      {isExpanded
                        ? s.directory.showLess
                        : s.directory.showAll(cat.items.length)}
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="bg-white py-10 md:py-12 lg:py-16">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="mb-8 font-['Josefin_Sans',sans-serif] text-[26px] font-bold uppercase leading-tight text-[#4B5056] md:text-[30px]">
          {s.howItWorks.heading}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {s.howItWorks.steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8159BB] text-sm font-bold text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 font-['Josefin_Sans',sans-serif] text-sm font-bold uppercase leading-tight text-[#4B5056]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#636972]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyStrikingly() {
  return (
    <section className="bg-[#F4F6F8] py-10 md:py-12 lg:py-16">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="mb-8 font-['Josefin_Sans',sans-serif] text-[26px] font-bold uppercase leading-tight text-[#4B5056] md:text-[30px]">
          {s.whyStrikingly.heading}
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {s.whyStrikingly.claims.map((claim) => (
            <div key={claim.title} className="flex flex-col items-start">
              <div className="mb-4 h-8 w-8 rounded-full border-2 border-[#8159BB]" />
              <h3 className="font-['Josefin_Sans',sans-serif] text-sm font-bold uppercase leading-tight text-[#4B5056]">
                {claim.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#636972]">
                {claim.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white py-10 md:py-12 lg:py-16">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="mb-8 font-['Josefin_Sans',sans-serif] text-[26px] font-bold uppercase leading-tight text-[#4B5056] md:text-[30px]">
          {s.faq.heading}
        </h2>
        <div className="space-y-3">
          {s.faq.items.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <div
                key={index}
                className="rounded-[3px] border border-[#C6C9CD] bg-white"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left font-['Josefin_Sans',sans-serif] text-sm font-bold uppercase text-[#4B5056] transition-colors hover:bg-[#F4F6F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8159BB]"
                  >
                    {item.question}
                    <ChevronDown
                      className={`ml-3 h-4 w-4 shrink-0 text-[#8159BB] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-200 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-0">
                      {item.answer.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="mt-3 text-sm leading-relaxed text-[#636972] first:mt-0"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ClosingCTA() {
  return (
    <section className="bg-white py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-5 text-center">
        <h2 className="font-['Josefin_Sans',sans-serif] text-[26px] font-bold uppercase leading-tight text-[#4B5056] md:text-[32px]">
          {s.closingCta.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-[520px] text-sm leading-relaxed text-[#636972]">
          {s.closingCta.subheading}
        </p>
        <a
          href={s.closingCta.href}
          className="mt-6 inline-flex h-11 items-center justify-center rounded-[4px] bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] px-6 font-['Josefin_Sans',sans-serif] text-sm font-bold uppercase text-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2"
        >
          {s.closingCta.cta}
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#E2E4E7] bg-white py-10">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Logo className="text-lg" />
          </div>
          {s.footer.columns.map((column) => (
            <div key={column.title}>
              <h4 className="font-['Josefin_Sans',sans-serif] text-xs font-bold uppercase text-[#4B5056]">
                {column.title}
              </h4>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#636972] hover:text-[#8159BB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8159BB] focus-visible:ring-offset-2 rounded-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-[#636972]">{s.footer.copyright}</p>
      </div>
    </footer>
  )
}

export function GeneratorsHub() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Breadcrumb />
      <main>
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
        <DirectorySection />
        <HowItWorks />
        <WhyStrikingly />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  )
}
