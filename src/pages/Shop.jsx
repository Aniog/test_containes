import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

const categories = ['all', 'earrings', 'necklaces', 'huggies'];
const materials = ['all', 'gold'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [categoryFilter, setCategoryFilter] = useState(searchParams.get('category') || 'all');
  const [materialFilter, setMaterialFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState(0);
  const [sort, setSort] = useState('featured');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && categories.includes(cat)) {
      setCategoryFilter(cat);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFilter !== 'all') {
      result = result.filter((p) => p.category === categoryFilter);
    }
    if (materialFilter !== 'all') {
      result = result.filter((p) => p.material === materialFilter);
    }

    const range = priceRanges[priceFilter];
    result = result.filter((p) => p.price >= range.min && p.price < range.max);

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
  }, [categoryFilter, materialFilter, priceFilter, sort]);

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-espresso mb-4 font-medium">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategoryFilter(cat);
                setSearchParams(cat === 'all' ? {} : { category: cat });
              }}
              className={`block text-sm transition-colors ${
                categoryFilter === cat
                  ? 'text-espresso font-medium'
                  : 'text-mocha/60 hover:text-espresso'
              }`}
            >
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-espresso mb-4 font-medium">
          Material
        </h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setMaterialFilter(mat)}
              className={`block text-sm transition-colors ${
                materialFilter === mat
                  ? 'text-espresso font-medium'
                  : 'text-mocha/60 hover:text-espresso'
              }`}
            >
              {mat === 'all' ? 'All Materials' : '18K Gold Plated'}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase text-espresso mb-4 font-medium">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range, i) => (
            <button
              key={range.label}
              onClick={() => setPriceFilter(i)}
              className={`block text-sm transition-colors ${
                priceFilter === i
                  ? 'text-espresso font-medium'
                  : 'text-mocha/60 hover:text-espresso'
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
    <div className="pt-20 md:pt-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        {/* Header */}
        <div className="py-12 md:py-16 text-center">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-mocha/50 mb-3">
            Curated Selection
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
            Shop All
          </h1>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-5" />
        </div>

        <div className="flex gap-10 pb-24">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-28">
              <FilterSidebar />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Sort & Filter Bar */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase text-mocha/70"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>

              <div className="hidden md:block text-xs text-mocha/50">
                {filteredProducts.length} products
              </div>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent text-xs tracking-widest uppercase text-mocha/70 pr-6 py-2 cursor-pointer outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-mocha/40 pointer-events-none" />
              </div>
            </div>

            {/* Mobile Filters */}
            {mobileFiltersOpen && (
              <div className="md:hidden mb-8 p-6 bg-warm/50">
                <FilterSidebar />
              </div>
            )}

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-mocha/60 text-sm">No products match your filters.</p>
                <button
                  onClick={() => {
                    setCategoryFilter('all');
                    setMaterialFilter('all');
                    setPriceFilter(0);
                  }}
                  className="text-xs tracking-widest uppercase underline mt-3"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
