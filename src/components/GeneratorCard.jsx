import React from 'react';
import { strings } from '../data/generators';

const GeneratorCard = ({ name, description, category, slug, showCategoryTag, icon }) => {
  const categoryTitle = strings.en.browseByCategory.categories[category.replace(/-./g, x => x[1].toUpperCase())]?.title || category;

  return (
    <a 
      href={`/generators/${slug}`}
      className="card card-hover flex flex-col gap-3 group"
    >
      {icon && (
        <div className="mb-2 text-brand-purple" aria-hidden="true">
          {icon}
        </div>
      )}
      <div className="flex flex-col gap-1">
        <h4 className="text-base font-heading font-bold text-hero-line1 group-hover:text-brand-purple transition-colors">
          {name}
        </h4>
        <p className="text-sm text-body-text line-clamp-1">
          {description}
        </p>
      </div>
      {showCategoryTag && (
        <div className="mt-auto pt-2">
          <span className="text-[11px] font-heading font-bold text-brand-purple border border-brand-purple px-[6px] py-[2px] rounded-[3px] uppercase">
            {categoryTitle}
          </span>
        </div>
      )}
    </a>
  );
};

export default GeneratorCard;
