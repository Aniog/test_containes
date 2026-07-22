import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { categories } from '@/data/products';

export default function FilterSidebar({ filters, setFilters, productCount }) {
  const [openSections, setOpenSections] = useState({ category: true, price: true, material: true });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $75', min: 50, max: 75 },
    { label: '$75 - $100', min: 75, max: 100 },
    { label: 'Over $100', min: 100, max: 999 },
  ];

  const materials = ['18K Gold Plated', 'Sterling Silver', 'Rose Gold Plated'];

  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      {/* Mobile filter toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setOpenSections((prev) => ({ ...prev, mobileOpen: !prev.mobileOpen }))}
          className="w-full flex items-center justify-between px-4 py-3 bg-[var(--velmora-bg)] border border-[var(--velmora-border)]"
        >
          <span className="text-sm">Filters ({productCount} results)</span>
          <ChevronDown size={16} />
        </button>
      </div>

      <div className={`${openSections.mobileOpen ? 'block' : 'hidden'} md:block space-y-6`}>
        {/* Category */}
        <div>
          <button
            onClick={() => toggleSection('category')}
            className="w-full flex items-center justify-between py-2 text-sm tracking-[0.1em] uppercase"
          >
            Category
            <ChevronDown size={14} className={`transition-transform ${openSections.category ? 'rotate-180' : ''}`} />
          </button>
          {openSections.category && (
            <div className="space-y-2 mt-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.category === 'all'}
                  onChange={() => setFilters((prev) => ({ ...prev, category: 'all' }))}
                  className="accent-[var(--velmora-warm)]"
                />
                <span className="text-sm text-[var(--velmora-text-muted)]">All</span>
              </label>
              {categories.map((cat) => (
                <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.category === cat.id}
                    onChange={() => setFilters((prev) => ({ ...prev, category: cat.id }))}
                    className="accent-[var(--velmora-warm)]"
                  />
                  <span className="text-sm text-[var(--velmora-text-muted)]">{cat.name}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price */}
        <div>
          <button
            onClick={() => toggleSection('price')}
            className="w-full flex items-center justify-between py-2 text-sm tracking-[0.1em] uppercase"
          >
            Price
            <ChevronDown size={14} className={`transition-transform ${openSections.price ? 'rotate-180' : ''}`} />
          </button>
          {openSections.price && (
            <div className="space-y-2 mt-3">
              {priceRanges.map((range, i) => (
                <label key={i} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    checked={filters.priceRange?.min === range.min}
                    onChange={() => setFilters((prev) => ({ ...prev, priceRange: range }))}
                    className="accent-[var(--velmora-warm)]"
                  />
                  <span className="text-sm text-[var(--velmora-text-muted)]">{range.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Material */}
        <div>
          <button
            onClick={() => toggleSection('material')}
            className="w-full flex items-center justify-between py-2 text-sm tracking-[0.1em] uppercase"
          >
            Material
            <ChevronDown size={14} className={`transition-transform ${openSections.material ? 'rotate-180' : ''}`} />
          </button>
          {openSections.material && (
            <div className="space-y-2 mt-3">
              {materials.map((mat) => (
                <label key={mat} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.material === mat}
                    onChange={() => setFilters((prev) => ({ ...prev, material: filters.material === mat ? null : mat }))}
                    className="accent-[var(--velmora-warm)]"
                  />
                  <span className="text-sm text-[var(--velmora-text-muted)]">{mat}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
