import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const categoryFilter = searchParams.get('category') || 'all';
  const materialFilter = searchParams.get('material') || 'all';
  const priceFilter = searchParams.get('price') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Material filter
    if (materialFilter !== 'all') {
      result = result.filter(p => p.material.toLowerCase().includes(materialFilter.toLowerCase()));
    }

    // Price filter
    if (priceFilter !== 'all') {
      const [min, max] = priceFilter.split('-').map(Number);
      result = result.filter(p => p.price >= min && (max ? p.price <= max : true));
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [categoryFilter, materialFilter, priceFilter, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === '') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = categoryFilter !== 'all' || materialFilter !== 'all' || priceFilter !== 'all';

  const filterOptions = {
    categories: [
      { value: 'all', label: 'All Categories' },
      { value: 'earrings', label: 'Earrings' },
      { value: 'necklaces', label: 'Necklaces' },
      { value: 'huggies', label: 'Huggies' },
      { value: 'sets', label: 'Sets' }
    ],
    materials: [
      { value: 'all', label: 'All Materials' },
      { value: 'gold', label: '18K Gold Plated' },
      { value: 'rose', label: 'Rose Gold' },
      { value: 'silver', label: 'Silver' }
    ],
    prices: [
      { value: 'all', label: 'All Prices' },
      { value: '0-40', label: 'Under $40' },
      { value: '40-60', label: '$40 - $60' },
      { value: '60-100', label: '$60 - $100' },
      { value: '100-', label: 'Over $100' }
    ]
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-gold-antique mb-3">Category</h3>
        <div className="space-y-2">
          {filterOptions.categories.map(option => (
            <button
              key={option.value}
              onClick={() => updateFilter('category', option.value)}
              className={`block text-sm text-left w-full py-1 transition-colors ${
                categoryFilter === option.value ? 'text-charcoal font-medium' : 'text-stone-warm hover:text-charcoal'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-gold-antique mb-3">Material</h3>
        <div className="space-y-2">
          {filterOptions.materials.map(option => (
            <button
              key={option.value}
              onClick={() => updateFilter('material', option.value)}
              className={`block text-sm text-left w-full py-1 transition-colors ${
                materialFilter === option.value ? 'text-charcoal font-medium' : 'text-stone-warm hover:text-charcoal'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest text-gold-antique mb-3">Price</h3>
        <div className="space-y-2">
          {filterOptions.prices.map(option => (
            <button
              key={option.value}
              onClick={() => updateFilter('price', option.value)}
              className={`block text-sm text-left w-full py-1 transition-colors ${
                priceFilter === option.value ? 'text-charcoal font-medium' : 'text-stone-warm hover:text-charcoal'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-sm text-stone-warm hover:text-gold-antique transition-colors underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <main className="min-h-screen bg-cream pt-24 pb-16">
      <div className="max-w-content mx-auto px-4 md:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal">Shop All</h1>
          <p className="mt-2 text-stone-warm">{filteredProducts.length} pieces</p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-sm text-charcoal"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && <span className="w-2 h-2 bg-gold-antique rounded-full" />}
            </button>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-stone-light px-4 py-2 pr-8 text-sm text-charcoal focus:outline-none focus:border-gold-antique cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-warm pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-stone-warm mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="text-gold-antique hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal/50" onClick={() => setIsFilterOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-80 bg-cream shadow-xl p-6 overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </main>
  );
}