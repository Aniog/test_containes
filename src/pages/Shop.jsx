import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown, Star } from 'lucide-react';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Compute filtered and sorted products on each render
  const displayProducts = React.useMemo(() => {
    let result = products.filter(p => {
      // Category filter
      if (selectedCategories.length && !selectedCategories.includes(p.category)) {
        return false;
      }
      // Price filter
      if (p.price < priceRange[0] || p.price > priceRange[1]) {
        return false;
      }
      return true;
    });

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      default: // featured - keep original order
        result = [...result];
    }

    return result;
  }, [selectedCategories, priceRange, sortBy]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  // Sync URL category parameter to state
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    } else {
      setSelectedCategories([]);
    }
  }, [searchParams]);

  const handleCategoryToggle = (categoryId) => {
    const newCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(c => c !== categoryId)
      : [...selectedCategories, categoryId];
    
    setSelectedCategories(newCategories);
    
    if (newCategories.length === 0) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', newCategories[0]); // Single category for now
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 200]);
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <div className="container-custom py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-serif mb-2">Shop All</h1>
          <p className="text-charcoal-600">
            {displayProducts.length} {displayProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 space-y-8">
              {/* Sort */}
              <div>
                <h3 className="font-serif text-lg mb-4">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-3 border border-gold-200 bg-white text-sm focus:outline-none focus:border-gold-400"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-serif text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => handleCategoryToggle(category.id)}
                        className="w-4 h-4 border-gold-300 text-gold-500 focus:ring-gold-400"
                      />
                      <span className="text-sm text-charcoal-700 group-hover:text-gold-600 transition-colors">
                        {category.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-serif text-lg mb-4">Price Range</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-gold-500"
                  />
                  <div className="flex justify-between text-sm text-charcoal-600">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategories.length > 0 || priceRange[1] < 200 || sortBy !== 'featured') && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="w-full text-xs tracking-wider"
                >
                  Clear All Filters
                </Button>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-center space-x-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
                {(selectedCategories.length > 0 || priceRange[1] < 200) && (
                  <span className="w-2 h-2 bg-gold-500 rounded-full" />
                )}
              </Button>
            </div>

            {displayProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-charcoal-600 mb-4">No products match your filters.</p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {displayProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group card animate-fade-in"
                  >
                    <div className="relative overflow-hidden aspect-[3/4]">
                      <img
                        data-strk-img-id={product.shopImgId}
                        data-strk-img={`[${product.titleId}] [${product.descId}] Velmora ${product.name}`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />

                      {/* Quick View Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="text-white text-sm uppercase tracking-wider border-b border-white pb-1">
                          Quick View
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-sm flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
                        <span className="text-xs font-medium">{product.rating}</span>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="product-name text-sm mb-1">{product.name}</h3>
                      <p className="text-xs text-charcoal-600 mb-2">{product.category}</p>
                      <p className="text-gold-600 font-semibold">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;