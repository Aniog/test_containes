import { useState, useMemo } from 'react';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/shared/ProductCard';
import { products, categories } from '@/data/products';

export default function Shop() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [sort, setSort] = useState('featured');
  const [sortOpen, setSortOpen] = useState(false);

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (selectedMaterial) {
      result = result.filter((p) => p.material === selectedMaterial);
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategories, priceRange, selectedMaterial, sort]);

  const activeFiltersCount =
    selectedCategories.length +
    (selectedMaterial ? 1 : 0) +
    (priceRange[0] > 0 || priceRange[1] < 150 ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 150]);
    setSelectedMaterial(null);
    setSort('featured');
  };

  return (
    <main className="pt-20 md:pt-24 bg-ivory min-h-screen">
      <div className="container-main">
        {/* Header */}
        <div className="py-8 md:py-12 border-b border-border">
          <h1 className="font-serif text-3xl md:text-4xl font-medium mb-2">
            Shop All
          </h1>
          <p className="text-sm text-taupe">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between py-4 border-b border-border">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-charcoal hover:text-taupe transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-champagne text-[10px] font-medium flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-charcoal hover:text-taupe transition-colors"
            >
              Sort by: {sort === 'featured' && 'Featured'}
              {sort === 'price-asc' && 'Price: Low to High'}
              {sort === 'price-desc' && 'Price: High to Low'}
              {sort === 'rating' && 'Top Rated'}
              <ChevronDown className="w-3 h-3" />
            </button>
            {sortOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setSortOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-border shadow-sm z-50">
                  {[
                    { value: 'featured', label: 'Featured' },
                    { value: 'price-asc', label: 'Price: Low to High' },
                    { value: 'price-desc', label: 'Price: High to Low' },
                    { value: 'rating', label: 'Top Rated' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSort(option.value);
                        setSortOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-ivory transition-colors ${
                        sort === option.value ? 'font-medium' : ''
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 py-8 md:py-10">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-lg text-taupe mb-2">
              No products match your filters.
            </p>
            <button
              onClick={clearFilters}
              className="btn-secondary inline-block mt-4"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity ${
          sidebarOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal/40"
          onClick={() => setSidebarOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-80 bg-ivory text-charcoal flex flex-col transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <h2 className="font-serif text-xl tracking-widest uppercase">
              Filters
            </h2>
            <button onClick={() => setSidebarOpen(false)} aria-label="Close filters">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
            {/* Category */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-medium text-taupe mb-4">
                Category
              </h3>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <label
                    key={cat.id}
                    className="flex items-center gap-3 text-sm cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat.id)}
                      onChange={() => toggleCategory(cat.id)}
                      className="w-4 h-4 accent-charcoal"
                    />
                    {cat.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-medium text-taupe mb-4">
                Price
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-sm">${priceRange[0]}</span>
                <input
                  type="range"
                  min={0}
                  max={150}
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="flex-1 accent-charcoal"
                />
                <span className="text-sm">${priceRange[1]}</span>
              </div>
            </div>

            {/* Material */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-medium text-taupe mb-4">
                Material
              </h3>
              <div className="space-y-3">
                {[
                  { id: '18k-gold-plated', label: '18K Gold Plated' },
                  { id: 'silver', label: 'Sterling Silver' },
                ].map((mat) => (
                  <label
                    key={mat.id}
                    className="flex items-center gap-3 text-sm cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === mat.id}
                      onChange={() => setSelectedMaterial(mat.id)}
                      className="w-4 h-4 accent-charcoal"
                    />
                    {mat.label}
                  </label>
                ))}
                <label className="flex items-center gap-3 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="material"
                    checked={!selectedMaterial}
                    onChange={() => setSelectedMaterial(null)}
                    className="w-4 h-4 accent-charcoal"
                  />
                  All Materials
                </label>
              </div>
            </div>
          </div>

          <div className="px-6 py-5 border-t border-border bg-white">
            <button
              onClick={() => {
                clearFilters();
                setSidebarOpen(false);
              }}
              className="btn-secondary w-full text-center"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
