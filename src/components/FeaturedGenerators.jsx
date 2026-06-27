import React from 'react';
import { strings } from '@/strings.en';
import { featuredGenerators } from '@/data/generators';

export default function FeaturedGenerators() {
  return (
    <section className="py-10 md:py-12">
      <div className="section-wrapper">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          {strings.featured.heading}
        </h2>
        <p className="text-[#636972] text-sm mb-8" style={{ fontFamily: 'var(--font-body)' }}>
          {strings.featured.subheading}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="card-base flex flex-col gap-3 group"
            >
              <h3 className="text-sm font-bold text-[#4B5056] group-hover:text-[#8159BB] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                {gen.name}
              </h3>
              <p className="text-[#636972] text-sm leading-snug" style={{ fontFamily: 'var(--font-body)' }}>
                {gen.description}
              </p>
              <span className="tag-ghost self-start">{gen.category}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
