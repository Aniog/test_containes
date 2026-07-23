import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

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
      default:
        break;
    }

    return result;
  }, [selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide mb-4">Shop All</h1>
          <p className="text-stone-500 max-w-xl mx-auto">
            Discover our collection of demi-fine jewelry, each piece crafted to be worn and treasured.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="font-serif text-xl tracking-wide mb-6">Filters</h2>

              <div className="mb-8">
                <h3 className="text-sm tracking-widest uppercase mb-4">Category</h3>
                <div className="space-y-3">
                  {['all', ...categories.map((c) => c.id)].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block text-sm capitalize ${
                        selectedCategory === cat ? 'text-stone-900 font-medium' : 'text-stone-500 hover:text-stone-800'
                      }`}
                    >
                      {cat === 'all' ? 'All' : categories.find((c) => c.id === cat)?.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-sm tracking-widest uppercase mb-4">Price</h3>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-20 border border-stone-300 px-2 py-1 text-sm"
                  />
                  <span className="text-stone-400">—</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-20 border border-stone-300 px-2 py-1 text-sm"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-sm tracking-widest uppercase mb-4">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full border border-stone-300 px-3 py-2 text-sm bg-white"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm tracking-widest uppercase"
            >
              <SlidersHorizontal size={16} />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-stone-300 px-3 py-2 text-sm bg-white"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden bg-white p-6 border border-stone-200 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-serif text-lg">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X size={20} />
                </button>
              </div>
              <div className="mb-6">
                <h4 className="text-sm tracking-widest uppercase mb-3">Category</h4>
                <div className="flex flex-wrap gap-2">
                  {['all', ...categories.map((c) => c.id)].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 border text-sm capitalize ${
                        selectedCategory === cat
                          ? 'border-stone-900 bg-stone-900 text-white'
                          : 'border-stone-300 text-stone-700'
                      }`}
                    >
                      {cat === 'all' ? 'All' : categories.find((c) => c.id === cat)?.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm tracking-widest uppercase mb-3">Price Range</h4>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-24 border border-stone-300 px-2 py-1 text-sm"
                  />
                  <span className="text-stone-400">—</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-24 border border-stone-300 px-2 py-1 text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="group">
                  <div className="aspect-[3/4] bg-stone-100 overflow-hidden mb-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-sm tracking-wider text-center">{product.name}</h3>
                  <p className="text-stone-500 text-sm text-center mt-1">${product.price}</p>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-stone-500">No products match your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([0, 150]);
                  }}
                  className="mt-4 text-sm underline text-stone-800"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
