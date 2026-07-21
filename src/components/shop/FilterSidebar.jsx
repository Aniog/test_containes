import { X } from 'lucide-react';

const categories = [
  { name: 'All', value: 'all' },
  { name: 'Earrings', value: 'earrings' },
  { name: 'Necklaces', value: 'necklaces' },
  { name: 'Huggies', value: 'huggies' },
  { name: 'Sets', value: 'sets' },
];

const priceRanges = [
  { name: 'All Prices', value: 'all' },
  { name: 'Under $50', value: '0-50' },
  { name: '$50 - $100', value: '50-100' },
  { name: 'Over $100', value: '100-999' },
];

export function FilterSidebar({
  filters,
  setFilters,
  isOpen,
  onClose,
  productCount
}) {
  const handleCategoryChange = (value) => {
    setFilters({ ...filters, category: value });
  };

  const handlePriceChange = (value) => {
    setFilters({ ...filters, priceRange: value });
  };

  const clearFilters = () => {
    setFilters({ category: 'all', priceRange: 'all' });
  };

  const hasActiveFilters = filters.category !== 'all' || filters.priceRange !== 'all';

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal/50 md:hidden transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-80 md:w-64 bg-ivory transform transition-transform duration-300 md:transform-none overflow-y-auto md:overflow-visible md:bg-transparent ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 md:hidden border-b border-hairline">
          <span className="font-serif text-lg">Filters</span>
          <button onClick={onClose} className="p-2 text-stone">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-0 space-y-8">
          {/* Category Filter */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-stone mb-4">Category</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label
                  key={category.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="category"
                    value={category.value}
                    checked={filters.category === category.value}
                    onChange={() => handleCategoryChange(category.value)}
                    className="sr-only"
                  />
                  <span
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                      filters.category === category.value
                        ? 'border-gold bg-gold'
                        : 'border-hairline group-hover:border-gold'
                    }`}
                  >
                    {filters.category === category.value && (
                      <span className="w-2 h-2 rounded-full bg-ivory" />
                    )}
                  </span>
                  <span className="text-sm text-stone group-hover:text-warmblack transition-colors">
                    {category.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-stone mb-4">Price</h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <label
                  key={range.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="price"
                    value={range.value}
                    checked={filters.priceRange === range.value}
                    onChange={() => handlePriceChange(range.value)}
                    className="sr-only"
                  />
                  <span
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                      filters.priceRange === range.value
                        ? 'border-gold bg-gold'
                        : 'border-hairline group-hover:border-gold'
                    }`}
                  >
                    {filters.priceRange === range.value && (
                      <span className="w-2 h-2 rounded-full bg-ivory" />
                    )}
                  </span>
                  <span className="text-sm text-stone group-hover:text-warmblack transition-colors">
                    {range.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-stone hover:text-gold transition-colors underline"
            >
              Clear all filters
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
