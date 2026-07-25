import React from 'react';
import { categories, materials } from '@/data/products';

const FilterSidebar = ({ filters, setFilters }) => {
  const toggleFilter = (key, value) => {
    setFilters((prev) => {
      const current = prev[key] || [];
      const next = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [key]: next };
    });
  };

  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-8">
        <div>
          <h3 className="text-xs uppercase tracking-widest text-brand-ink">Category</h3>
          <div className="mt-3 flex flex-col gap-2">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center gap-2 text-sm text-brand-ink">
                <input
                  type="checkbox"
                  checked={(filters.category || []).includes(category.id)}
                  onChange={() => toggleFilter('category', category.id)}
                  className="h-4 w-4 rounded border-brand-line text-brand-accent focus:ring-brand-accent"
                />
                {category.label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-brand-ink">Tone</h3>
          <div className="mt-3 flex flex-col gap-2">
            {materials.map((material) => (
              <label key={material.id} className="flex items-center gap-2 text-sm text-brand-ink">
                <input
                  type="checkbox"
                  checked={(filters.material || []).includes(material.id)}
                  onChange={() => toggleFilter('material', material.id)}
                  className="h-4 w-4 rounded border-brand-line text-brand-accent focus:ring-brand-accent"
                />
                {material.label}
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
