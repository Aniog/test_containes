import React from 'react';
import strings from '@/data/strings.en';
import { featuredGenerators } from '@/data/generators';

const categoryLabelMap = {
  'Website': 'Website',
  'Portfolio': 'Portfolio',
  'Landing Page': 'Landing Page',
  'Blog': 'Blog',
  'Store': 'Store',
  'Link-in-Bio': 'Link-in-Bio',
};

export default function FeaturedGenerators() {
  const s = strings.featured;
  return (
    <section className="w-full py-[40px]" style={{ backgroundColor: 'var(--white)' }}>
      <div className="section-container">
        <h2 className="font-heading font-bold text-[26px] md:text-[32px] text-center mb-[10px]" style={{ color: 'var(--heading-text)' }}>
          {s.heading}
        </h2>
        <p className="text-center mb-[30px] text-[15px]" style={{ color: 'var(--body-text)' }}>
          {s.subheading}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="card block group"
            >
              <h3 className="font-heading font-bold text-[15px] mb-[8px]" style={{ color: 'var(--heading-text)' }}>
                {gen.name}
              </h3>
              <p className="text-[13px] mb-[12px]" style={{ color: 'var(--body-text)' }}>
                {gen.description}
              </p>
              <span className="tag">{categoryLabelMap[gen.category] || gen.category}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
