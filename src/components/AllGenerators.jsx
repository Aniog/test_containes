import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import { strings } from '../lib/strings'
import { allGenerators, generatorUrl, totalGeneratorCount } from '../lib/generators'
import { SearchIcon, categoryThumbnails } from './Icons'

const s = strings.en

const VISIBLE_COUNT = 6 // Cards visible before "Show all" toggle

function CategorySubsection({ slug, title, description, generators, searchQuery, expandedCategories, toggleCategory }) {
  const ThumbnailIcon = categoryThumbnails[slug]
  const isExpanded = expandedCategories[slug]
  const filteredGens = useMemo(() => {
    if (!searchQuery) return generators
    const q = searchQuery.toLowerCase()
    return generators.filter(
      (g) =>
        g.name.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        title.toLowerCase().includes(q)
    )
  }, [generators, searchQuery, title])

  if (searchQuery && filteredGens.length === 0) return null

  const showToggle = !searchQuery && generators.length > VISIBLE_COUNT
  const visibleGens = (searchQuery || isExpanded) ? filteredGens : filteredGens.slice(0, VISIBLE_COUNT)
  const hiddenCount = generators.length - VISIBLE_COUNT

  return (
    <div id={slug} className="scroll-mt-20">
      <h3 className="font-heading font-bold text-heading text-lg md:text-xl uppercase mb-1">
        {title}
      </h3>
      <p className="text-body-text text-sm mb-5">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleGens.map((gen) => (
          <a
            key={gen.name}
            href={generatorUrl(gen.name)}
            className="generator-card block bg-white border border-card-border rounded-[3px] p-5 no-underline"
          >
            <div className="mb-3">
              {ThumbnailIcon && <ThumbnailIcon />}
            </div>
            <h4 className="font-heading font-bold text-heading-dark text-sm uppercase mb-1">
              {gen.name}
            </h4>
            <p className="text-body-text text-sm">
              {gen.description}
            </p>
          </a>
        ))}
      </div>
      {showToggle && !isExpanded && (
        <div className="mt-4">
          <button
            onClick={() => toggleCategory(slug)}
            aria-expanded={false}
            aria-controls={`gens-${slug}`}
            className="text-brand-purple font-heading font-bold text-sm uppercase hover:underline bg-transparent border-none cursor-pointer p-0"
          >
            {s.showAll.replace('{count}', hiddenCount + VISIBLE_COUNT)}
          </button>
        </div>
      )}
    </div>
  )
}

export default function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedCategories, setExpandedCategories] = useState({})
  const inputRef = useRef(null)

  const toggleCategory = useCallback((slug) => {
    setExpandedCategories((prev) => ({ ...prev, [slug]: !prev[slug] }))
  }, [])

  const matchCount = useMemo(() => {
    if (!searchQuery) return totalGeneratorCount()
    const q = searchQuery.toLowerCase()
    let count = 0
    Object.entries(allGenerators).forEach(([slug, gens]) => {
      const catTitle = s.categories.find((c) => c.slug === slug)?.name || ''
      count += gens.filter(
        (g) =>
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          catTitle.toLowerCase().includes(q)
      ).length
    })
    return count
  }, [searchQuery])

  const hasAnyMatch = matchCount > 0

  return (
    <section id="all-generators" className="w-full py-10 md:py-16">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading font-bold text-heading text-2xl md:text-3xl uppercase mb-2">
          {s.allGeneratorsHeading}
        </h2>
        <p className="text-body-text text-base mb-8">
          {s.allGeneratorsSub}
        </p>

        {/* Search input */}
        <div className="mb-8 max-w-lg">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon />
            </span>
            <input
              ref={inputRef}
              type="text"
              aria-label={s.searchAriaLabel}
              placeholder={s.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-card-border rounded-[4px] text-sm font-body text-heading-dark bg-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
            />
          </div>
          {searchQuery && (
            <p className="mt-2 text-sm text-body-text">
              {s.matchCount.replace('{count}', matchCount)}
            </p>
          )}
        </div>

        {/* No results state */}
        {!hasAnyMatch && searchQuery && (
          <div className="text-center py-10">
            <p className="text-body-text text-base mb-4">{s.noResultsTitle}</p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-brand-purple font-heading font-bold text-sm uppercase hover:underline bg-transparent border border-brand-purple rounded-[4px] px-4 py-2 cursor-pointer mr-3"
            >
              {s.clearSearch}
            </button>
            <a
              href="/s/ai_site_builder"
              className="text-brand-purple font-body text-sm hover:underline"
            >
              {s.cantFindLink}
            </a>
          </div>
        )}

        {/* Category subsections */}
        {(hasAnyMatch || !searchQuery) && (
          <div className="space-y-12">
            {s.categories.map((cat) => (
              <CategorySubsection
                key={cat.slug}
                slug={cat.slug}
                title={cat.name}
                description={s.categoryDescriptions[cat.slug]}
                generators={allGenerators[cat.slug] || []}
                searchQuery={searchQuery}
                expandedCategories={expandedCategories}
                toggleCategory={toggleCategory}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
