import React from 'react';
import { CategoryIcon, ArrowRightIcon } from './Icons';
import strings from '../../strings';

const s = strings.en;

const BrowseByCategory = ({ categories }) => (
  <section className="py-[40px]">
    <div className="content-container">
      <div className="text-center mb-[10px]">
        <h2 className="text-[24px] md:text-[28px] text-[var(--color-heading-text)]">
          {s.browseTitle}
        </h2>
        <p className="mt-[10px] text-[15px] text-[var(--color-body-text)]">
          {s.browseSubtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[20px]">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="card-link card-hover block bg-white border border-[var(--color-card-border)] rounded-[3px] p-[20px] no-underline group"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="mb-[10px]">
                  <CategoryIcon icon={cat.icon} size={32} />
                </div>
                <h3 className="text-[14px] font-bold text-[var(--color-heading-text)] uppercase mb-[6px]" style={{ fontFamily: 'var(--font-heading)' }}>
                  {cat.name}
                </h3>
                <p className="text-[13px] text-[var(--color-body-text)] leading-[1.5]">
                  {cat.description}
                </p>
              </div>
              <ArrowRightIcon className="text-[var(--color-card-border)] group-hover:text-[var(--color-brand-purple)] transition-colors flex-shrink-0 mt-[4px]" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default BrowseByCategory;
