import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { products, categories } from '@/data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;
      default:
        filtered.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return filtered;
  }, [activeCategory, sortBy]);

  const handleCategoryChange = (category) => {
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-cream-light border-b border-base/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="font-serif text-4xl md:text-5xl text-base text-center mb-4">
            {activeCategory === 'all'
              ? 'Shop All'
              : categories.find((c) => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="text-base/60 text-center max-w-xl mx-auto">
            Discover our collection of demi-fine jewelry, designed to be worn and treasured.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar filters - desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-serif text-xl text-base mb-6">Filters</h3>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="text-sm tracking-widest uppercase text-base/60 mb-4">
                  Category
                </h4>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => handleCategoryChange('all')}
                      className={`text-sm transition-colors duration-300 ${
                        activeCategory === 'all'
                          ? 'text-gold font-medium'
                          : 'text-base/70 hover:text-gold'
                      }`}
                    >
                      All Products
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => handleCategoryChange(category.id)}
                        className={`text-sm transition-colors duration-300 ${
                          activeCategory === category.id
                            ? 'text-gold font-medium'
                            : 'text-base/70 hover:text-gold'
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price range */}
              <div className="mb-8">
                <h4 className="text-sm tracking-widest uppercase text-base/60 mb-4">
                  Price
                </h4>
                <ul className="space-y-3">
                  {[
                    { label: 'Under $50', min: 0, max: 50 },
                    { label: '$50 - $75', min: 50, max: 75 },
                    { label: '$75 - $100', min: 75, max: 100 },
                    { label: 'Over $100', min: 100, max: Infinity },
                  ].map((range) => (
                    <li key={range.label}>
                      <button className="text-sm text-base/70 hover:text-gold transition-colors duration-300">
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material */}
              <div>
                <h4 className="text-sm tracking-widest uppercase text-base/60 mb-4">
                  Material
                </h4>
                <ul className="space-y-3">
                  <li>
                    <button className="text-sm text-base/70 hover:text-gold transition-colors duration-300">
                      18K Gold Plated
                    </button>
                  </li>
                  <li>
                    <button className="text-sm text-base/70 hover:text-gold transition-colors duration-300">
                      Sterling Silver
                    </button>
                  </li>
                  <li>
                    <button className="text-sm text-base/70 hover:text-gold transition-colors duration-300">
                      Gold Filled
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-base/10">
              <p className="text-sm text-base/60">
                Showing {filteredProducts.length} product
                {filteredProducts.length !== 1 ? 's' : ''}
              </p>

              <div className="flex items-center gap-4">
                {/* Mobile filter button */}
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-base/20 text-sm tracking-wider hover:border-gold transition-colors duration-300"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>

                {/* Sort dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border border-base/20 px-4 py-2 pr-10 text-sm tracking-wider text-base/70 focus:outline-none focus:border-gold transition-colors duration-300 cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-base/40 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-base/60 mb-4">
                  No products found
                </p>
                <button
                  onClick={() => handleCategoryChange('all')}
                  className="text-gold hover:underline"
                >
                  View all products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-cream z-50 lg:hidden overflow-y-auto animate-slide-in-right">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-serif text-2xl text-base">Filters</h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 hover:text-gold transition-colors duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="text-sm tracking-widest uppercase text-base/60 mb-4">
                  Category
                </h4>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => {
                        handleCategoryChange('all');
                        setIsFilterOpen(false);
                      }}
                      className={`text-sm transition-colors duration-300 ${
                        activeCategory === 'all'
                          ? 'text-gold font-medium'
                          : 'text-base/70'
                      }`}
                    >
                      All Products
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => {
                          handleCategoryChange(category.id);
                          setIsFilterOpen(false);
                        }}
                        className={`text-sm transition-colors duration-300 ${
                          activeCategory === category.id
                            ? 'text-gold font-medium'
                            : 'text-base/70'
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h4 className="text-sm tracking-widest uppercase text-base/60 mb-4">
                  Price
                </h4>
                <ul className="space-y-3">
                  {[
                    { label: 'Under $50', min: 0, max: 50 },
                    { label: '$50 - $75', min: 50, max: 75 },
                    { label: '$75 - $100', min: 75, max: 100 },
                    { label: 'Over $100', min: 100, max: Infinity },
                  ].map((range) => (
                    <li key={range.label}>
                      <button className="text-sm text-base/70">
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material */}
              <div>
                <h4 className="text-sm tracking-widest uppercase text-base/60 mb-4">
                  Material
                </h4>
                <ul className="space-y-3">
                  <li>
                    <button className="text-sm text-base/70">18K Gold Plated</button>
                  </li>
                  <li>
                    <button className="text-sm text-base/70">Sterling Silver</button>
                  </li>
                  <li>
                    <button className="text-sm text-base/70">Gold Filled</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;