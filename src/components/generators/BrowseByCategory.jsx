import React from 'react';
import { categories, t } from '../../data/generatorsData';
import { CategoryIcon, ArrowRightIcon } from './Icons';

const BrowseByCategory = () => (
  <section className="py-10 md:py-16 bg-light-bg">
    <div className="max-w-content mx-auto px-5">
      <h2 className="section-heading text-center mb-10">{t('browseByCategoryHeading')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`/generators#${cat.id}`}
            className="card block group"
          >
            <div className="mb-4">
              <CategoryIcon category={cat.id} />
            </div>
            <h3 className="font-heading text-heading-darker text-base mb-2 group-hover:text-brand-purple transition-colors">
              {cat.name}
            </h3>
            <p className="text-body-gray text-sm mb-3">{cat.description}</p>
            <div className="flex items-center text-brand-purple text-sm font-heading">
              <span>Explore</span>
              <ArrowRightIcon className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default BrowseByCategory;
