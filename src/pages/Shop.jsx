import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { products } from '../data/products';

const categoryOptions = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-80', label: '$50 – $80' },
  { value: '80+', label: '$80+' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [category, setCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== 'all') {
      result = result.filter((p) => p.category === category);
    }

    if (priceRange !== 'all') {
      if (priceRange === '0-50') result = result.filter((p) => p.price < 50);
      else if (priceRange === '50-80') result = result.filter((p) => p.price >= 50 && p.price <= 80);
      else if (priceRange === '80+') result = result.filter((p) => p.price >= 80);
    }

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [category, priceRange, sort]);

  const handleCategoryChange = (value) => {
    setCategory(value);
    if (value === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', value);
    }
    setSearchParams(searchParams);
  };

  const FilterSidebar = ({ className = '' }) => (
    <div className={className}>
      {/* Category */}
      <div className="mb-8">
        <h3 className="font-sans text-[11px] tracking-[0.2em] uppercase text-ivory/50 mb-4">Category</h3>
        <div className="space-y-2">
          {categoryOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleCategoryChange(opt.value)}
              className={`block text-sm tracking-wider transition-colors ${
                category === opt.value ? 'text-gold' : 'text-muted/60 hover:text-ivory'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="font-sans text-[11px] tracking-[0.2em] uppercase text-ivory/50 mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setPriceRange(opt.value)}
              className={`block text-sm tracking-wider transition-colors ${
                priceRange === opt.value ? 'text-gold' : 'text-muted/60 hover:text-ivory'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-[11px] tracking-[0.2em] uppercase text-ivory/50 mb-4">Material</h3>
        <div className="space-y-2">
          <span className="block text-sm text-gold tracking-wider">18K Gold Plated</span>
          <span className="block text-sm text-muted/60 tracking-wider hover:text-ivory cursor-pointer transition-colors">Sterling Silver</span>
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 lg:pt-24 bg-obsidian min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-ivory tracking-wide">
          {category === 'all' ? 'All Jewelry' : categoryOptions.find((o) => o.value === category)?.label}
        </h1>
        <div className="w-12 h-px bg-gold/40 mt-4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex gap-10 lg:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm text-muted/70 hover:text-ivory transition-colors"
              >
                <SlidersHorizontal size={16} strokeWidth={1.5} />
                Filters
              </button>

              <span className="text-sm text-muted/50 hidden sm:block">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </span>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-charcoal/50 text-sm text-muted/70 pl-4 pr-10 py-2 focus:outline-none focus:border-gold/40 cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-obsidian">
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted/40 pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-heading text-lg text-ivory/60 tracking-wider mb-2">No pieces found</p>
                <p className="text-sm text-muted/50">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-40 w-72 bg-obsidian border-r border-charcoal p-6 pt-20 overflow-y-auto">
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="absolute top-6 right-6 p-2 text-muted hover:text-ivory transition-colors"
            >
              <X size={20} />
            </button>
            <FilterSidebar />
          </div>
        </>
      )}
    </main>
  );
}
