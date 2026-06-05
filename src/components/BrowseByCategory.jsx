import React from 'react'
import { strings } from '../lib/strings'
import { WebsiteIcon, LandingPageIcon, PortfolioIcon, BlogIcon, StoreIcon, LinkInBioIcon, ArrowRightIcon } from './Icons'

const s = strings.en

const categoryIcons = {
  websites: WebsiteIcon,
  'landing-pages': LandingPageIcon,
  portfolios: PortfolioIcon,
  blogs: BlogIcon,
  stores: StoreIcon,
  'link-in-bio': LinkInBioIcon,
}

export default function BrowseByCategory() {
  return (
    <section className="w-full py-10 md:py-16 bg-light-bg">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading font-bold text-heading text-2xl md:text-3xl uppercase mb-8">
          {s.browseHeading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.categories.map((cat) => {
            const IconComponent = categoryIcons[cat.slug]
            return (
              <a
                key={cat.slug}
                href={`/generators#${cat.slug}`}
                className="generator-card flex flex-col items-start bg-white border border-card-border rounded-[3px] p-5 no-underline"
              >
                <div className="mb-3">
                  {IconComponent && <IconComponent />}
                </div>
                <h3 className="font-heading font-bold text-heading-dark text-sm uppercase mb-1">
                  {cat.name}
                </h3>
                <p className="text-body-text text-sm mb-3 flex-1">
                  {cat.description}
                </p>
                <span className="inline-block" aria-hidden="true">
                  <ArrowRightIcon />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
