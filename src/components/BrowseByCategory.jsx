import React from 'react';
import { categories, strings } from '../data/generators';
import { CategoryIcon, ArrowRightIcon } from './Icons';

const s = strings.en;

export default function BrowseByCategory() {
  return (
    <section className="bg-white section-padding">
      <div className="section-container">
        <h2 className="text-[22px] md:text-[28px] text-heading-gray text-center mb-[30px]">
          {s.categoryHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="card group flex flex-col items-center text-center"
            >
              <div className="mb-[12px]">
                <CategoryIcon id={cat.id} />
              </div>
              <h3 className="text-[14px] text-heading-gray mb-[6px] tracking-wide">
                {cat.name}
              </h3>
              <p className="text-body-gray text-[13px] leading-[1.5] mb-[12px]">
                {cat.description}
              </p>
              <span className="text-brand-purple flex items-center gap-1 text-[13px] font-heading font-bold uppercase">
                Browse <ArrowRightIcon />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
