import { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

export default function FilterSidebar({ filters, setFilters, products, mobileOpen, setMobileOpen }) {
  const [openSections, setOpenSections] = useState({ category: true, price: true, material: true });

  const categories = ['earrings', 'necklaces', 'huggies'];
  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $75', min: 50, max: 75 },
    { label: '$75+', min: 75, max: 999 },
  ];
  const materials = ['Gold', 'Silver'];

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const clearFilters = () => {
    setFilters({ category: null, priceRange: null, material: null });
  };

  const hasActiveFilters = filters.category || filters.priceRange || filters.material;

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="border-b border-velmora-border pb-4">
        <button
          onClick={() => toggleSection('category')}
          className="w-full flex items-center justify-between py-2"
        >
          <span className="font-sans text-xs tracking-widest uppercase text-velmora-text">Category</span>
          {openSections.category ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {openSections.category && (
          <div className="mt-3 space-y-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.category === cat}
                  onChange={() => setFilters((prev) => ({ ...prev, category: prev.category === cat ? null : cat }))}
                  className="accent-velmora-gold w-4 h-4"
                />
                <span className="text-sm text-velmora-muted group-hover:text-velmora-text capitalize transition-colors">
                  {cat}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="border-b border-velmora-border py-4">
        <button
          onClick={() => toggleSection('price')}
          className="w-full flex items-center justify-between py-2"
        >
          <span className="font-sans text-xs tracking-widest uppercase text-velmora-text">Price</span>
          {openSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {openSections.price && (
          <div className="mt-3 space-y-2">
            {priceRanges.map((range, i) => (
              <label key={i} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="price"
                  checked={filters.priceRange === i}
                  onChange={() => setFilters((prev) => ({ ...prev, priceRange: prev.priceRange === i ? null : i }))}
                  className="accent-velmora-gold w-4 h-4"
                />
                <span className="text-sm text-velmora-muted group-hover:text-velmora-text transition-colors">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Material */}
      <div className="border-b border-velmora-border py-4">
        <button
          onClick={() => toggleSection('material')}
          className="w-full flex items-center justify-between py-2"
        >
          <span className="font-sans text-xs tracking-widest uppercase text-velmora-text">Material</span>
          {openSections.material ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {openSections.material && (
          <div className="mt-3 space-y-2">
            {materials.map((mat) => (
              <label key={mat} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.material === mat}
                  onChange={() => setFilters((prev) => ({ ...prev, material: prev.material === mat ? null : mat }))}
                  className="accent-velmora-gold w-4 h-4"
                />
                <span className="text-sm text-velmora-muted group-hover:text-velmora-text transition-colors">
                  {mat} Tone
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="mt-4 text-xs text-velmora-gold hover:text-velmora-gold-hover flex items-center gap-1 transition-colors"
        >
          <X size={12} />
          Clear all filters
        </button>
      )}
    </>
  );

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 md:z-auto w-72 md:w-56 bg-velmora-bg md:bg-transparent p-6 md:p-0 overflow-y-auto transition-transform duration-300 md:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between md:hidden mb-6">
          <h3 className="font-serif text-xl">Filters</h3>
          <button onClick={() => setMobileOpen(false)} className="p-2" aria-label="Close filters">
            <X size={20} />
          </button>
        </div>
        <FilterContent />
      </aside>
    </>
  );
}
