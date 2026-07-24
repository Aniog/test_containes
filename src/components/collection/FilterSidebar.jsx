import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'sets', label: 'Sets' },
];

const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over80', label: 'Over $80', min: 80, max: Infinity },
];

const materials = [
  { id: 'all', label: 'All Materials' },
  { id: 'gold', label: '18K Gold Plated' },
];

export default function FilterSidebar({
  filters,
  setFilters,
  isMobileOpen,
  closeMobile,
}) {
  const [showCategory, setShowCategory] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showMaterial, setShowMaterial] = useState(true);

  const handleCategory = (id) => {
    setFilters((prev) => ({ ...prev, category: id }));
  };

  const handlePrice = (id) => {
    setFilters((prev) => ({ ...prev, price: id }));
  };

  const handleMaterial = (id) => {
    setFilters((prev) => ({ ...prev, material: id }));
  };

  const clearFilters = () => {
    setFilters({ category: 'all', price: 'all', material: 'all' });
  };

  const filterContent = (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <button
          onClick={() => setShowCategory(!showCategory)}
          className="flex items-center justify-between w-full text-sm tracking-[0.1em] uppercase text-charcoal mb-3"
        >
          Category
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showCategory ? 'rotate-180' : ''}`} />
        </button>
        {showCategory && (
          <div className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategory(cat.id)}
                className={`block w-full text-left text-sm py-1.5 transition-colors ${
                  filters.category === cat.id
                    ? 'text-gold font-medium'
                    : 'text-warm-gray hover:text-charcoal'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="h-px bg-border-light" />

      {/* Price */}
      <div>
        <button
          onClick={() => setShowPrice(!showPrice)}
          className="flex items-center justify-between w-full text-sm tracking-[0.1em] uppercase text-charcoal mb-3"
        >
          Price
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showPrice ? 'rotate-180' : ''}`} />
        </button>
        {showPrice && (
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => handlePrice(range.id)}
                className={`block w-full text-left text-sm py-1.5 transition-colors ${
                  filters.price === range.id
                    ? 'text-gold font-medium'
                    : 'text-warm-gray hover:text-charcoal'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="h-px bg-border-light" />

      {/* Material */}
      <div>
        <button
          onClick={() => setShowMaterial(!showMaterial)}
          className="flex items-center justify-between w-full text-sm tracking-[0.1em] uppercase text-charcoal mb-3"
        >
          Material
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showMaterial ? 'rotate-180' : ''}`} />
        </button>
        {showMaterial && (
          <div className="space-y-2">
            {materials.map((mat) => (
              <button
                key={mat.id}
                onClick={() => handleMaterial(mat.id)}
                className={`block w-full text-left text-sm py-1.5 transition-colors ${
                  filters.material === mat.id
                    ? 'text-gold font-medium'
                    : 'text-warm-gray hover:text-charcoal'
                }`}
              >
                {mat.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="pt-2">
        <button
          onClick={clearFilters}
          className="text-xs tracking-[0.1em] uppercase text-warm-gray hover:text-charcoal transition-colors"
        >
          Clear All
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-56 flex-shrink-0">
        {filterContent}
      </aside>

      {/* Mobile filter drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={closeMobile} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-ivory p-6 overflow-y-auto shadow-xl animate-slideInRight">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm tracking-[0.1em] uppercase text-charcoal">Filters</h3>
              <button onClick={closeMobile} className="text-sm text-warm-gray hover:text-charcoal">
                Close
              </button>
            </div>
            {filterContent}
          </div>
        </div>
      )}
    </>
  );
}