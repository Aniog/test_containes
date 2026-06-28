import React from 'react';
import strings from '../../strings';

const s = strings.en;

const FeaturedGenerators = ({ generators }) => (
  <section className="py-[40px] bg-[var(--color-light-bg)]">
    <div className="content-container">
      <div className="text-center mb-[10px]">
        <h2 className="text-[24px] md:text-[28px] text-[var(--color-heading-text)]">
          {s.featuredTitle}
        </h2>
        <p className="mt-[10px] text-[15px] text-[var(--color-body-text)]">
          {s.featuredSubtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[20px]">
        {generators.map((gen) => (
          <a
            key={gen.slug}
            href={`/generators/${gen.slug}`}
            className="card-link card-hover block bg-white border border-[var(--color-card-border)] rounded-[3px] p-[20px] no-underline"
          >
            <h3 className="text-[15px] font-bold text-[var(--color-heading-text)] uppercase mb-[6px]" style={{ fontFamily: 'var(--font-heading)' }}>
              {gen.name}
            </h3>
            <p className="text-[13px] text-[var(--color-body-text)] mb-[10px] leading-[1.5]">
              {gen.description}
            </p>
            <span
              className="inline-block text-[11px] uppercase tracking-wide border border-[var(--color-brand-purple)] text-[var(--color-brand-purple)] rounded-[3px] px-[6px] py-[2px]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {gen.category}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedGenerators;
