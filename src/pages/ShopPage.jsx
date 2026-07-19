import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { allProducts, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
];

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const activePriceRange = searchParams.get('price') || '';
  const activeSort = searchParams.get('sort') || 'newest';

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // Filter by category
    if (activeCategory) {
      const catName = categories.find(c => c.id === activeCategory)?.name;
      if (catName) {
        result = result.filter(p => p.category.toLowerCase() === catName.toLowerCase());
      }
    }

    // Filter by price range
    if (activePriceRange) {
      const range = priceRanges.find(r => r.label === activePriceRange);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    // Sort
    switch (activeSort) {
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
  }, [activeCategory, activePriceRange, activeSort]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory || activePriceRange;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category filter */}
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-velvet-900 mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', activeCategory === cat.id ? '' : cat.id)}
              className={`block w-full text-left text-sm py-1.5 transition-colors duration-200 ${
                activeCategory === cat.id
                  ? 'text-gold font-medium'
                  : 'text-velvet-600 hover:text-velvet-900'
              }`}
            >
              {cat.name}
              <span className="text-velvet-400 ml-1">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-velvet-900 mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => updateFilter('price', activePriceRange === range.label ? '' : range.label)}
              className={`block w-full text-left text-sm py-1.5 transition-colors duration-200 ${
                activePriceRange === range.label
                  ? 'text-gold font-medium'
                  : 'text-velvet-600 hover:text-velvet-900'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-[0.15em] uppercase text-velvet-500 hover:text-velvet-900 transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="mb-8 md:mb-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velvet-900 font-light">
            {activeCategory
              ? categories.find(c => c.id === activeCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <div className="w-12 h-px bg-gold/40 mt-4" />
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-velvet-200">
              <div className="flex items-center gap-4">
                {/* Mobile filter button */}
                <button
                  className="lg:hidden flex items-center gap-2 text-sm text-velvet-700 hover:text-velvet-900 transition-colors"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
                <p className="text-sm text-velvet-500">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>
              </div>

              {/* Sort */}
              <select
                value={activeSort}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="text-sm text-velvet-700 bg-transparent border border-velvet-300 px-3 py-2 focus:outline-none focus:border-velvet-900"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velvet-500 font-serif text-xl">No products found</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-gold hover:text-gold-light transition-colors uppercase tracking-wider"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group relative">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] overflow-hidden bg-velvet-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-gold text-white text-[10px] tracking-[0.15em] uppercase px-2.5 py-1">
                            New
                          </span>
                        )}
                      </div>
                    </Link>
                    <button
                      onClick={() => addItem(product)}
                      className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm hover:bg-gold hover:text-white"
                      aria-label="Quick add to cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                    <div className="mt-3">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif text-xs md:text-sm tracking-[0.15em] text-velvet-900 uppercase">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-velvet-700 mt-0.5">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/40 lg:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 z-50 h-full w-72 bg-[#F8F5F0] shadow-xl lg:hidden overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-200">
              <h2 className="text-sm tracking-[0.15em] uppercase text-velvet-900">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-velvet-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterContent />
            </div>
          </div>
        </>
      )}
    </main>
  );
}