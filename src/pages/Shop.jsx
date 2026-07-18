import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { products } from '../../data/products';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

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

    return filtered;
  }, [selectedCategory, sortBy, priceRange]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Sidebar */}
        <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-lg mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block text-sm ${
                      selectedCategory === cat ? 'text-velmora-black font-medium' : 'text-velmora-warm-gray'
                    } hover:text-velmora-black transition-colors`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-4">Price</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange[1] === 200}
                    onChange={() => setPriceRange([0, 200])}
                    className="accent-velmora-gold"
                  />
                  All
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange[1] === 50}
                    onChange={() => setPriceRange([0, 50])}
                    className="accent-velmora-gold"
                  />
                  Under $50
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange[0] === 50 && priceRange[1] === 100}
                    onChange={() => setPriceRange([50, 100])}
                    className="accent-velmora-gold"
                  />
                  $50 - $100
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange[0] === 100}
                    onChange={() => setPriceRange([100, 200])}
                    className="accent-velmora-gold"
                  />
                  Over $100
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 text-sm uppercase tracking-wider"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <p className="text-sm text-velmora-warm-gray">
              {filteredProducts.length} products
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-velmora-border px-4 py-2 focus:outline-none focus:border-velmora-black"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
                <div className="aspect-square bg-velmora-cream overflow-hidden mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-sm uppercase tracking-wider font-medium">{product.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                  <span className="text-sm text-velmora-warm-gray">{product.rating}</span>
                </div>
                <p className="text-lg font-light mt-1">${product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
