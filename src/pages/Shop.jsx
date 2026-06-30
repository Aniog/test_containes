import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, Grid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'All') {
      switch (priceRange) {
        case 'Under $50':
          filtered = filtered.filter(p => p.price < 50);
          break;
        case '$50 - $80':
          filtered = filtered.filter(p => p.price >= 50 && p.price <= 80);
          break;
        case '$80+':
          filtered = filtered.filter(p => p.price > 80);
          break;
      }
    }

    // Filter by material
    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'bestsellers':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, priceRange, selectedMaterial, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setPriceRange('All');
    setSelectedMaterial('All');
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">
            Shop All
          </h1>
          <div className="divider w-20 mx-auto my-6" />
          <p className="text-muted text-lg">
            Discover our collection of demi-fine gold jewelry
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors"
          >
            <SlidersHorizontal size={20} />
            <span className="text-sm tracking-wide">Filters</span>
          </button>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted">
              {filteredAndSortedProducts.length} products
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-border/50 bg-white text-foreground text-sm focus:outline-none focus:border-accent"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="bestsellers">Best Sellers</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Filter Sidebar */}
        {isFilterOpen && (
          <div className="bg-background/50 border border-border/30 p-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-medium text-foreground mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block text-sm ${
                        selectedCategory === category
                          ? 'text-accent font-medium'
                          : 'text-muted hover:text-foreground'
                      } transition-colors`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-medium text-foreground mb-3">Price</h3>
                <div className="space-y-2">
                  {['All', 'Under $50', '$50 - $80', '$80+'].map((range) => (
                    <button
                      key={range}
                      onClick={() => setPriceRange(range)}
                      className={`block text-sm ${
                        priceRange === range
                          ? 'text-accent font-medium'
                          : 'text-muted hover:text-foreground'
                      } transition-colors`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="font-medium text-foreground mb-3">Material</h3>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`block text-sm ${
                        selectedMaterial === material
                          ? 'text-accent font-medium'
                          : 'text-muted hover:text-foreground'
                      } transition-colors`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={clearFilters}
              className="mt-6 text-sm text-accent hover:underline"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted text-lg mb-4">No products match your filters</p>
            <button
              onClick={clearFilters}
              className="btn-secondary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
