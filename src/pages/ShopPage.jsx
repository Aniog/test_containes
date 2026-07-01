import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { products } from '../data/products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Jewelry' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
    { id: 'sets', name: 'Gift Sets' },
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'under50', name: 'Under $50' },
    { id: '50to75', name: '$50 - $75' },
    { id: 'over75', name: 'Over $75' },
  ];

  const materials = [
    { id: 'all', name: 'All Materials' },
    { id: 'gold', name: '18K Gold Plated' },
    { id: 'silver', name: 'Silver Tone' },
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-asc', name: 'Price: Low to High' },
    { id: 'price-desc', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rated' },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    if (selectedPrice === 'under50') {
      result = result.filter(p => p.price < 50);
    } else if (selectedPrice === '50to75') {
      result = result.filter(p => p.price >= 50 && p.price <= 75);
    } else if (selectedPrice === 'over75') {
      result = result.filter(p => p.price > 75);
    }

    // Filter by material
    if (selectedMaterial === 'gold') {
      result = result.filter(p => p.material.toLowerCase().includes('gold'));
    } else if (selectedMaterial === 'silver') {
      result = result.filter(p => p.variants.includes('Silver'));
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice('all');
    setSelectedMaterial('all');
    setSearchParams({});
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs tracking-ultra-wide uppercase text-velmora-charcoal mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block text-sm transition-colors ${
                selectedCategory === cat.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-stone hover:text-velmora-base'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs tracking-ultra-wide uppercase text-velmora-charcoal mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <button
              key={range.id}
              onClick={() => setSelectedPrice(range.id)}
              className={`block text-sm transition-colors ${
                selectedPrice === range.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-stone hover:text-velmora-base'
              }`}
            >
              {range.name}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="text-xs tracking-ultra-wide uppercase text-velmora-charcoal mb-4">Material</h3>
        <div className="space-y-2">
          {materials.map(mat => (
            <button
              key={mat.id}
              onClick={() => setSelectedMaterial(mat.id)}
              className={`block text-sm transition-colors ${
                selectedMaterial === mat.id
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-stone hover:text-velmora-base'
              }`}
            >
              {mat.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <main className="bg-velmora-cream min-h-screen">
      {/* Page Header */}
      <div className="bg-velmora-base py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-wide mb-3">
            The Collection
          </h1>
          <div className="w-16 h-px bg-velmora-gold mx-auto" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Mobile filter button */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-velmora-charcoal mb-6"
          >
            <SlidersHorizontal size={18} />
            <span className="text-sm">Filters</span>
          </button>

          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />

              {/* Clear filters */}
              {(selectedCategory !== 'all' || selectedPrice !== 'all' || selectedMaterial !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-velmora-stone underline hover:text-velmora-base transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="fixed left-0 top-0 h-full w-80 bg-velmora-cream z-50 p-6 overflow-y-auto animate-slide-in-right">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-xl tracking-wide">Filters</h2>
                  <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                    <X size={20} />
                  </button>
                </div>
                <FilterContent />
                <button
                  onClick={() => {
                    setMobileFiltersOpen(false);
                  }}
                  className="w-full bg-velmora-base text-white py-3 text-xs tracking-ultra-wide uppercase mt-8"
                >
                  Show Results
                </button>
              </div>
            </>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort and count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-velmora-stone text-sm">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border border-velmora-stone-light text-velmora-charcoal text-sm px-3 py-2 focus:outline-none focus:border-velmora-gold"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-velmora-charcoal mb-2">No products found</p>
                <p className="text-velmora-stone text-sm mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="text-velmora-gold underline text-sm"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.slug}`} className="group">
                    <div className="aspect-[3/4] overflow-hidden bg-velmora-warm mb-3 relative">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {product.bestseller && (
                        <span className="absolute top-3 left-3 bg-velmora-gold text-velmora-base text-[10px] tracking-wide px-2 py-1 uppercase">
                          Bestseller
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-sm tracking-wide text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star size={12} className="text-velmora-gold fill-velmora-gold" />
                      <span className="text-xs text-velmora-stone">{product.rating}</span>
                    </div>
                    <p className="text-velmora-base font-medium mt-1">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
