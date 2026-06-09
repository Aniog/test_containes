import React from 'react';
import { featuredGenerators, strings } from '../data/generators';

const s = strings.en;

export default function FeaturedGenerators() {
  return (
    <section className="bg-light-bg section-padding">
      <div className="section-container">
        <div className="text-center mb-[30px]">
          <h2 className="text-[22px] md:text-[28px] text-heading-gray mb-[10px]">
            {s.featuredHeading}
          </h2>
          <p className="text-body-gray text-[14px]">
            {s.featuredSubheading}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`${s.generatorsPath}/${gen.slug}`}
              className="card featured-card group block"
              aria-label={`${gen.name} - ${gen.description}`}
            >
              <div className="flex items-start justify-between mb-[10px]">
                <p className="text-[15px] text-heading-dark font-heading font-bold leading-snug">
                  {gen.name}
                </p>
                <span className="tag ml-[8px] flex-shrink-0">{gen.category}</span>
              </div>
              <p className="text-body-gray text-[13px] leading-[1.5]">{gen.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
