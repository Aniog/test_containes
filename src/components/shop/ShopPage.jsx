import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import products from '../../data/products';
import ProductCard from '../product/ProductCard';
import { SlidersHorizontal, X } from 'lucide-react';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get filter values from URL params
  const selectedCategory = searchParams.get('category') || 'All';
  const sortBy = searchParams.get('sort') || 'featured';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All' || value === 'featured') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  return (
    <main className="min-h-screen pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
            {selectedCategory === 'All' ? 'All Collections' : selectedCategory}
          </h1>
          <div className="w-24 h-px bg-velmora-gold" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden flex items-center justify-between w-full p-4 border border-velmora-warm"
          >
            <span className="flex items-center space-x-2">
              <SlidersHorizontal className="w-5 h-5" />
              <span className="text-sm tracking-wider uppercase">Filters</span>
            </span>
            <span className="text-sm text-velmora-mist">
              {selectedCategory !== 'All' ? 1 : 0} selected
            </span>
          </button>

          {/* Filter Sidebar */}
          <aside
            className={`${
              isFilterOpen ? 'block' : 'hidden'
            } lg:block w-full lg:w-64 flex-shrink-0`}
          >
            <div className="lg:sticky lg:top-32 space-y-8">
              {/* Close button for mobile */}
              <div className="flex items-center justify-between lg:hidden">
                <h3 className="font-serif text-xl">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="font-serif text-lg mb-4 text-velmora-charcoal">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => updateFilter('category', category)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-velmora-gold text-white'
                          : 'text-velmora-graphite hover:bg-velmora-cream'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory !== 'All' || sortBy !== 'featured') && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-warm">
              <p className="text-sm text-velmora-mist">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <select
                value={sortBy}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="text-sm border border-velmora-warm px-4 py-2 focus:outline-none focus:border-velmora-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-velmora-graphite text-lg mb-4">
                  No products found in this category.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  View All Products
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

export default ShopPage;
