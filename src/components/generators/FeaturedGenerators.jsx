import React from 'react';
import { strings } from '@/data/strings';
import { featuredGenerators } from '@/data/generators';

const t = strings.en;

const FeaturedGenerators = () => (
  <section className="py-10 bg-white">
    <div className="max-w-[1200px] mx-auto px-5">
      <h2 className="font-heading font-bold uppercase text-heading-section text-2xl md:text-3xl leading-tight mb-2.5">
        {t.featured.heading}
      </h2>
      <p className="text-body-text text-sm mb-8">
        {t.featured.subheading}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredGenerators.map((gen) => (
          <a
            key={gen.slug}
            href={`/generators/${gen.slug}`}
            className="block bg-white border border-card-border rounded p-5 transition-shadow transition-colors hover:shadow-md hover:border-brand-purple group"
          >
            <h3 className="font-heading font-bold uppercase text-heading-section text-sm mb-1.5 group-hover:text-brand-purple transition-colors">
              {gen.name}
            </h3>
            <p className="text-body-text text-sm mb-3 leading-normal">
              {gen.description}
            </p>
            <span className="inline-block text-[11px] font-heading font-bold uppercase px-1.5 py-0.5 rounded border border-brand-purple text-brand-purple">
              {gen.category}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedGenerators;
