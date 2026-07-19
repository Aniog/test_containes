import React from 'react';

const FilterSidebar = ({ categories, selectedCategory, onCategoryChange, priceRange, onPriceChange }) => {
  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-8">
        <div>
          <h3 className="font-serif text-lg text-brand-ink mb-3">Category</h3>
          <div className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`block w-full text-left text-sm transition-colors ${
                  selectedCategory === cat.id ? 'text-brand-ink font-medium' : 'text-brand-muted hover:text-brand-ink'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg text-brand-ink mb-3">Price</h3>
          <div className="space-y-2">
            {[
              { label: 'Under $50', min: 0, max: 50 },
              { label: '$50 – $80', min: 50, max: 80 },
              { label: '$80 – $120', min: 80, max: 120 },
            ].map((range) => (
              <button
                key={range.label}
                onClick={() => onPriceChange(range)}
                className={`block w-full text-left text-sm transition-colors ${
                  priceRange.min === range.min && priceRange.max === range.max
                    ? 'text-brand-ink font-medium'
                    : 'text-brand-muted hover:text-brand-ink'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
