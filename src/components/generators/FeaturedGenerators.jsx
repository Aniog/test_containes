import React from 'react';
import { featuredGenerators, t } from '../../data/generatorsData';

const FeaturedGenerators = () => (
  <section className="py-10 md:py-16">
    <div className="max-w-content mx-auto px-5">
      <h2 className="section-heading text-center">{t('featuredHeading')}</h2>
      <p className="text-body-gray text-center mb-10">{t('featuredSubheading')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredGenerators.map((gen) => (
          <a
            key={gen.slug}
            href={`/generators/${gen.slug}`}
            className="card block group"
          >
            <h3 className="font-heading text-heading-darker text-base mb-2 group-hover:text-brand-purple transition-colors">
              {gen.name}
            </h3>
            <p className="text-body-gray text-sm mb-3">{gen.description}</p>
            <span className="tag">{gen.category}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedGenerators;
