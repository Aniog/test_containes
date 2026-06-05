import React from 'react'
import { strings } from '../lib/strings'
import { featuredGenerators, generatorUrl } from '../lib/generators'

const s = strings.en

export default function FeaturedGenerators() {
  return (
    <section className="w-full py-10 md:py-16">
      <div className="max-w-content mx-auto px-5">
        <h2 className="font-heading font-bold text-heading text-2xl md:text-3xl uppercase mb-2">
          {s.featuredHeading}
        </h2>
        <p className="text-body-text text-base mb-8">
          {s.featuredSub}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.name}
              href={generatorUrl(gen.name)}
              className="generator-card block bg-white border border-card-border rounded-[3px] p-5 no-underline"
            >
              <h3 className="font-heading font-bold text-heading-dark text-sm uppercase mb-1">
                {gen.name}
              </h3>
              <p className="text-body-text text-sm mb-3">
                {gen.description}
              </p>
              <span className="inline-block text-brand-purple border border-brand-purple text-[11px] font-heading font-bold uppercase px-1.5 py-0.5 rounded-[3px]">
                {gen.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
