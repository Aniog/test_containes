import React, { useState, useEffect } from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

export default function ShopPage() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    if (priceRange !== 'All') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, sortBy, priceRange]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const priceRanges = [
    { label: 'All', value: 'All' },
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $80', value: '50-80' },
    { label: 'Over $80', value: '80-1000' },
  ];

  return (
    <main className="py-24 px-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 
          className="font-serif text-charcoal mb-3"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
        >
          Shop All
        </h1>
        <div className="hairline w-16 mx-auto my-4" />
        <p className="text-charcoal-500" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}>
          {filteredProducts.length} products
        </p>
      </div>

      {/* Filters & Sort Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-charcoal-200">
        {/* Filter Toggle (Mobile) */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="sm:hidden flex items-center gap-2 text-charcoal uppercase tracking-wider text-sm"
        >
          <SlidersHorizontal size={16} />
          Filters
        </button>

        {/* Category Pills */}
        <div className={`flex flex-wrap gap-2 ${isFilterOpen ? 'block' : 'hidden sm:flex'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm uppercase tracking-wider transition-all ${
                selectedCategory === category
                  ? 'bg-charcoal text-cream-50'
                  : 'bg-transparent text-charcoal border border-charcoal-300 hover:border-charcoal'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none bg-transparent border border-charcoal-300 px-4 py-2 pr-10 text-sm uppercase tracking-wider text-charcoal cursor-pointer focus:outline-none focus:border-charcoal"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
          <ChevronDown 
            size={16} 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 pointer-events-none" 
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="font-serif text-2xl text-charcoal-400 mb-2">No products found</p>
          <p className="text-charcoal-500 text-sm">Try adjusting your filters</p>
        </div>
      )}
    </main>
  );
}
