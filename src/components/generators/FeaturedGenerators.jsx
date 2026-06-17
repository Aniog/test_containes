import React from 'react';
import { strings } from '@/data/strings';
import { featuredGenerators, getGeneratorSlug } from '@/data/generators';

const s = strings.en;

export default function FeaturedGenerators() {
  return (
    <section className="py-[40px]">
      <div className="section-wrapper">
        <h2 className="text-[26px] md:text-[32px] text-heading mb-[5px]">
          {s.featured.heading}
        </h2>
        <p className="text-body-text text-[14px] mb-[30px]">
          {s.featured.subheading}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.name}
              href={`/generators/${getGeneratorSlug(gen.name)}`}
              className="card-base block no-underline group"
            >
              <h3 className="font-heading font-bold text-[15px] text-heading-dark m-0 mb-[8px] uppercase leading-[1.3]">
                {gen.name}
              </h3>
              <p className="text-body-text text-[13px] m-0 mb-[12px] leading-[1.5]">
                {gen.description}
              </p>
              <span className="tag-ghost">{gen.category}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
