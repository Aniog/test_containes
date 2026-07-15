import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { products, categories } from '@/data/products';
import strkImgConfig from '@/strk-img-config.json';
import { ImageHelper } from '@strikingly/sdk';

const CollectionPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    if (selectedPriceRange === 'under50') {
      result = result.filter((p) => p.price < 50);
    } else if (selectedPriceRange === '50to75') {
      result = result.filter((p) => p.price >= 50 && p.price <= 75);
    } else if (selectedPriceRange === 'over75') {
      result = result.filter((p) => p.price > 75);
    }

    // Material filter
    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial);
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0));
    }

    return result;
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange('all');
    setSelectedMaterial('all');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPriceRange !== 'all' || selectedMaterial !== 'all';

  return (
    <main ref={containerRef} className="pt-20 lg:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="py-8 lg:py-12">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-foreground mb-3">
            All Jewelry
          </h1>
          <p className="font-sans text-sm text-muted-foreground">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile filter button */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-foreground border border-border px-4 py-2.5 rounded-sm"
            >
              <Filter size={14} />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-primary rounded-full" />
              )}
            </button>

            {/* Sort dropdown mobile */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none font-sans text-xs tracking-widest uppercase text-foreground bg-transparent border border-border px-4 py-2.5 pr-8 rounded-sm focus:outline-none focus:border-primary"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Filter sidebar */}
          <aside
            className={`lg:w-64 flex-shrink-0 ${
              isFilterOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Mobile close */}
              <div className="lg:hidden flex items-center justify-between mb-4">
                <h3 className="font-sans text-xs tracking-widest uppercase text-foreground">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)} className="p-1">
                  <X size={18} />
                </button>
              </div>

              {/* Category */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-foreground mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                      className="accent-primary"
                    />
                    <span className="font-sans text-sm text-muted-foreground">All</span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id}
                        onChange={() => setSelectedCategory(cat.id)}
                        className="accent-primary"
                      />
                      <span className="font-sans text-sm text-muted-foreground">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-foreground mb-3">
                  Price
                </h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to75', label: '$50 - $75' },
                    { value: 'over75', label: 'Over $75' },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPriceRange === option.value}
                        onChange={() => setSelectedPriceRange(option.value)}
                        className="accent-primary"
                      />
                      <span className="font-sans text-sm text-muted-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-foreground mb-3">
                  Material
                </h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All' },
                    { value: 'gold', label: 'Gold Plated' },
                    { value: 'silver', label: 'Silver Plated' },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={selectedMaterial === option.value}
                        onChange={() => setSelectedMaterial(option.value)}
                        className="accent-primary"
                      />
                      <span className="font-sans text-sm text-muted-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="font-sans text-xs tracking-widest uppercase text-primary hover:text-[#A07D52] transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort dropdown desktop */}
            <div className="hidden lg:flex items-center justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none font-sans text-xs tracking-widest uppercase text-foreground bg-transparent border border-border px-4 py-2.5 pr-8 rounded-sm focus:outline-none focus:border-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-foreground mb-2">No pieces found</p>
                <p className="font-sans text-sm text-muted-foreground mb-6">
                  Try adjusting your filters
                </p>
                <button onClick={clearFilters} className="btn-secondary">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CollectionPage;
