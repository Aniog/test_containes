import React from 'react';
import { strings } from '@/strings.en';
import { categories } from '@/data/generators';
import { CategoryIcon, ArrowRightIcon } from './Icons';

export default function BrowseByCategory() {
  return (
    <section className="py-10 md:py-12 bg-[#F4F6F8]">
      <div className="section-wrapper">
        <h2 className="text-[26px] md:text-[32px] text-[#4B5056] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
          {strings.browseByCategory.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              className="card-base flex flex-col items-start gap-3 group"
            >
              <CategoryIcon type={cat.id} />
              <h3 className="text-sm font-bold text-[#4B5056] group-hover:text-[#8159BB] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                {cat.name}
              </h3>
              <p className="text-[#636972] text-sm leading-snug" style={{ fontFamily: 'var(--font-body)' }}>
                {cat.description}
              </p>
              <ArrowRightIcon className="text-[#8159BB] mt-auto" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
