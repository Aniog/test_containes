import React from 'react';
import strings from '@/data/strings.en.js';
import { featuredGenerators } from '@/data/generators.js';

export default function FeaturedGenerators() {
  return (
    <section className="py-[40px]" style={{ background: '#FFFFFF' }}>
      <div className="max-content section-padding">
        <h2 className="text-[26px] md:text-[32px] text-heading-gray m-0 mb-[5px]">
          {strings.featuredHeading}
        </h2>
        <p className="text-body-gray text-[14px] m-0 mb-[30px]">
          {strings.featuredSub}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="card no-underline flex flex-col justify-between gap-[12px] focus-ring"
              style={{ minHeight: '120px' }}
            >
              <div>
                <h3 className="font-heading font-bold text-[16px] uppercase text-hero-dark m-0 mb-[6px] leading-[1.2]">
                  {gen.name}
                </h3>
                <p className="text-[13px] text-body-gray m-0 leading-relaxed">
                  {gen.desc}
                </p>
              </div>
              <div>
                <span className="tag">{gen.category}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}