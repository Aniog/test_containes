import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories, priceRanges } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const containerRef = useRef(null);

  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedPrice !== 'all') {
      const range = priceRanges.find((r) => r.id === selectedPrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice('all');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPrice !== 'all';

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="serif-heading text-3xl md:text-4xl tracking-wide">
            {selectedCategory !== 'all'
              ? categories.find((c) => c.id === selectedCategory)?.label || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="mt-2 text-muted-foreground text-sm">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm uppercase tracking-wider font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                      className="accent-[#2C2420]"
                    />
                    <span className="text-sm">All</span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id}
                        onChange={() => setSelectedCategory(cat.id)}
                        className="accent-[#2C2420]"
                      />
                      <span className="text-sm">{cat.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-sm uppercase tracking-wider font-medium mb-3">Price</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === 'all'}
                      onChange={() => setSelectedPrice('all')}
                      className="accent-[#2C2420]"
                    />
                    <span className="text-sm">All Prices</span>
                  </label>
                  {priceRanges.map((range) => (
                    <label key={range.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPrice === range.id}
                        onChange={() => setSelectedPrice(range.id)}
                        className="accent-[#2C2420]"
                      />
                      <span className="text-sm">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-accent hover:underline flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filter */}
          <div className="lg:hidden">
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-[#E8E2DA] rounded-sm text-sm"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {hasActiveFilters && (
                  <span className="w-2 h-2 bg-accent rounded-full" />
                )}
              </button>

              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 px-4 py-2 border border-[#E8E2DA] rounded-sm text-sm"
                >
                  Sort: {sortBy === 'featured' ? 'Featured' : sortBy === 'price-asc' ? 'Price: Low' : sortBy === 'price-desc' ? 'Price: High' : sortBy === 'rating' ? 'Top Rated' : 'Newest'}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {sortOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-[#E8E2DA] rounded-sm shadow-lg z-20 min-w-[180px]">
                    {[
                      { value: 'featured', label: 'Featured' },
                      { value: 'price-asc', label: 'Price: Low to High' },
                      { value: 'price-desc', label: 'Price: High to Low' },
                      { value: 'rating', label: 'Top Rated' },
                      { value: 'newest', label: 'Newest' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-[#F5F0EB] transition-colors ${
                          sortBy === option.value ? 'text-accent font-medium' : ''
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setFilterOpen(false)}>
                <div
                  className="absolute left-0 top-0 bottom-0 w-72 bg-[#FAF8F5] p-6 overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="serif-heading text-xl tracking-wider">Filters</h3>
                    <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm uppercase tracking-wider font-medium mb-3">Category</h4>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="mobile-category"
                            checked={selectedCategory === 'all'}
                            onChange={() => setSelectedCategory('all')}
                            className="accent-[#2C2420]"
                          />
                          <span className="text-sm">All</span>
                        </label>
                        {categories.map((cat) => (
                          <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="mobile-category"
                              checked={selectedCategory === cat.id}
                              onChange={() => setSelectedCategory(cat.id)}
                              className="accent-[#2C2420]"
                            />
                            <span className="text-sm">{cat.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-wider font-medium mb-3">Price</h4>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="mobile-price"
                            checked={selectedPrice === 'all'}
                            onChange={() => setSelectedPrice('all')}
                            className="accent-[#2C2420]"
                          />
                          <span className="text-sm">All Prices</span>
                        </label>
                        {priceRanges.map((range) => (
                          <label key={range.id} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="mobile-price"
                              checked={selectedPrice === range.id}
                              onChange={() => setSelectedPrice(range.id)}
                              className="accent-[#2C2420]"
                            />
                            <span className="text-sm">{range.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {hasActiveFilters && (
                      <button
                        onClick={clearFilters}
                        className="text-sm text-accent hover:underline flex items-center gap-1"
                      >
                        <X className="w-3 h-3" />
                        Clear Filters
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sort - Desktop */}
          <div className="hidden lg:flex items-center justify-between mb-6">
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-[#E8E2DA] rounded-sm text-sm"
              >
                Sort: {sortBy === 'featured' ? 'Featured' : sortBy === 'price-asc' ? 'Price: Low' : sortBy === 'price-desc' ? 'Price: High' : sortBy === 'rating' ? 'Top Rated' : 'Newest'}
                <ChevronDown className="w-4 h-4" />
              </button>
              {sortOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-[#E8E2DA] rounded-sm shadow-lg z-20 min-w-[200px]">
                  {[
                    { value: 'featured', label: 'Featured' },
                    { value: 'price-asc', label: 'Price: Low to High' },
                    { value: 'price-desc', label: 'Price: High to Low' },
                    { value: 'rating', label: 'Top Rated' },
                    { value: 'newest', label: 'Newest' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-[#F5F0EB] transition-colors ${
                        sortBy === option.value ? 'text-accent font-medium' : ''
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="serif-heading text-xl tracking-wider text-muted-foreground">
                  No pieces match your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-secondary inline-block mt-4"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
};

export default ShopPage;
