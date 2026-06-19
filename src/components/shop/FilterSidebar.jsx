import React from 'react';
import { categories } from '../../data/products';

export default function FilterSidebar({ filters, setFilters, mobileOpen, setMobileOpen }) {
  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $75', min: 50, max: 75 },
    { label: '$75 - $100', min: 75, max: 100 },
    { label: '$100+', min: 100, max: 999 },
  ];

  const materials = [
    { id: 'gold', label: 'Gold Plated' },
    { id: 'silver', label: 'Silver Plated' },
  ];

  const sidebarContent = (
    <>
      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-xs tracking-widest uppercase text-[#1a1a1a] mb-4">Category</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={!filters.category}
              onChange={() => setFilters((f) => ({ ...f, category: null }))}
              className="accent-[#c9a96e]"
            />
            <span className="text-sm text-[#1a1a1a]">All</span>
          </label>
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat.id}
                onChange={() => setFilters((f) => ({ ...f, category: cat.id }))}
                className="accent-[#c9a96e]"
              />
              <span className="text-sm text-[#1a1a1a]">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs tracking-widest uppercase text-[#1a1a1a] mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range, i) => (
            <label key={i} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={filters.priceRange?.min === range.min && filters.priceRange?.max === range.max}
                onChange={() => setFilters((f) => ({ ...f, priceRange: range }))}
                className="accent-[#c9a96e]"
              />
              <span className="text-sm text-[#1a1a1a]">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-widest uppercase text-[#1a1a1a] mb-4">Material</h3>
        <div className="space-y-2">
          {materials.map((mat) => (
            <label key={mat.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.materials?.includes(mat.id)}
                onChange={() => {
                  setFilters((f) => {
                    const current = f.materials || [];
                    const updated = current.includes(mat.id)
                      ? current.filter((m) => m !== mat.id)
                      : [...current, mat.id];
                    return { ...f, materials: updated.length > 0 ? updated : null };
                  });
                }}
                className="accent-[#c9a96e]"
              />
              <span className="text-sm text-[#1a1a1a]">{mat.label}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24">
          {sidebarContent}
        </div>
      </aside>

      {/* Mobile filter overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-full bg-[#faf8f5] p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="velmora-heading text-xl">Filters</h2>
              <button onClick={() => setMobileOpen(false)} className="p-2" aria-label="Close filters">
                &times;
              </button>
            </div>
            {sidebarContent}
            <button
              onClick={() => setMobileOpen(false)}
              className="velmora-btn-primary w-full mt-8"
            >
              Show Results
            </button>
          </div>
        </div>
      )}
    </>
  );
}
