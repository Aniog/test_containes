import { X } from 'lucide-react';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const materials = ['All', '18K Gold Plated'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

export default function FilterSidebar({
  filters,
  setFilters,
  mobileOpen,
  setMobileOpen,
}) {
  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearAll = () => {
    setFilters({ category: 'All', material: 'All', price: 'All Prices' });
  };

  const hasActive = filters.category !== 'All' || filters.material !== 'All' || filters.price !== 'All Prices';

  const content = (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-lg tracking-wide">Filters</h3>
        <div className="flex items-center gap-3">
          {hasActive && (
            <button onClick={clearAll} className="text-[10px] tracking-[0.12em] uppercase text-velmora-muted hover:text-velmora-black transition-colors">
              Clear All
            </button>
          )}
          <button className="lg:hidden p-1" onClick={() => setMobileOpen(false)}>
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Category */}
      <div>
        <h4 className="text-[10px] tracking-[0.2em] uppercase text-velmora-muted mb-4">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => updateFilter('category', cat)}
              className={`block text-sm transition-colors ${
                filters.category === cat ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-[10px] tracking-[0.2em] uppercase text-velmora-muted mb-4">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => updateFilter('material', mat)}
              className={`block text-sm transition-colors ${
                filters.material === mat ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-black'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-[10px] tracking-[0.2em] uppercase text-velmora-muted mb-4">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => updateFilter('price', range.label)}
              className={`block text-sm transition-colors ${
                filters.price === range.label ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-black'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-52 flex-shrink-0">
        {content}
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-velmora-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-velmora-cream p-6 overflow-y-auto shadow-2xl">
            {content}
          </div>
        </div>
      )}
    </>
  );
}
