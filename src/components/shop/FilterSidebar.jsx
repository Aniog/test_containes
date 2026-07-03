import { X } from 'lucide-react';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const materials = ['18K Gold Plated', 'Sterling Silver', 'Gold & Silver'];

export default function FilterSidebar({
  activeCategory,
  setActiveCategory,
  activePrice,
  setActivePrice,
  activeMaterial,
  setActiveMaterial,
  isOpen,
  onClose,
}) {
  const clearFilters = () => {
    setActiveCategory('All');
    setActivePrice(null);
    setActiveMaterial(null);
  };

  const hasFilters = activeCategory !== 'All' || activePrice || activeMaterial;

  const content = (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xs tracking-wide-2xl uppercase font-sans text-ink">Filters</h3>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="text-[10px] tracking-wide-lg uppercase text-warm-500 hover:text-gold-600 transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Category */}
      <div>
        <h4 className="text-[11px] tracking-wide-xl uppercase font-sans text-warm-500 mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`block w-full text-left text-sm py-1.5 transition-colors font-sans ${
                activeCategory === cat
                  ? 'text-ink font-medium'
                  : 'text-warm-500 hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-[11px] tracking-wide-xl uppercase font-sans text-warm-500 mb-3">Price Range</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() =>
                setActivePrice(
                  activePrice?.label === range.label ? null : range
                )
              }
              className={`block w-full text-left text-sm py-1.5 transition-colors font-sans ${
                activePrice?.label === range.label
                  ? 'text-ink font-medium'
                  : 'text-warm-500 hover:text-ink'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-[11px] tracking-wide-xl uppercase font-sans text-warm-500 mb-3">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() =>
                setActiveMaterial(activeMaterial === mat ? null : mat)
              }
              className={`block w-full text-left text-sm py-1.5 transition-colors font-sans ${
                activeMaterial === mat
                  ? 'text-ink font-medium'
                  : 'text-warm-500 hover:text-ink'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-56 flex-shrink-0">
        {content}
      </aside>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={onClose}
        />
        <div
          className={`absolute top-0 left-0 h-full w-72 bg-[#FDFBFA] p-6 shadow-xl transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button
            onClick={onClose}
            className="mb-6 p-1 hover:text-gold-600 transition-colors"
            aria-label="Close filters"
          >
            <X className="w-5 h-5" />
          </button>
          {content}
        </div>
      </div>
    </>
  );
}