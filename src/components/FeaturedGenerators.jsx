import React from 'react';
import strings from '../strings';
import { featuredGenerators } from '../data';

export default function FeaturedGenerators() {
  const t = strings.en;

  return (
    <section className="max-w-[1200px] mx-auto px-5 py-10">
      <h2 className="text-[26px] md:text-[32px] font-heading font-bold text-[#4B5056] mb-[5px]">
        {t.featuredHeading}
      </h2>
      <p className="text-[14px] text-[#636972] mb-[30px]">
        {t.featuredSub}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredGenerators.map((gen) => (
          <a
            key={gen.slug}
            href={`/generators/${gen.slug}`}
            className="card flex flex-col gap-[10px]"
          >
            <span className="tag self-start">{gen.category}</span>
            <span className="font-heading font-bold text-[16px] text-[#2E2E2F] leading-[1.2]">
              {gen.name}
            </span>
            <span className="text-[14px] text-[#636972] leading-[1.5]">
              {gen.desc}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
