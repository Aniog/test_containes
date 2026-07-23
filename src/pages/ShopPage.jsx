import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, Grid3x3, LayoutList } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addItem } = useCart();

  const filteredProducts = products
    .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="min-h-screen bg-velmora-cream pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
          <p className="text-velmora-graphite">
            Discover our complete collection of demi-fine jewelry
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 text-sm font-medium sm:hidden"
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>

          <div className={`flex flex-wrap gap-2 ${isFilterOpen ? 'flex' : 'hidden'} sm:flex`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm tracking-wide transition-colors ${
                  selectedCategory === category
                    ? 'bg-velmora-charcoal text-velmora-cream'
                    : 'bg-white text-velmora-charcoal hover:bg-velmora-warm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-velmora-border bg-white text-sm focus:outline-none focus:border-velmora-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white overflow-hidden">
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-serif text-sm uppercase tracking-wider text-velmora-charcoal mb-2 hover:text-velmora-gold transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-velmora-graphite mb-2">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-lg">${product.price}</span>
                  <div className="flex items-center gap-1 text-sm">
                    <span className="text-yellow-400">★</span>
                    <span className="text-velmora-graphite">{product.rating}</span>
                  </div>
                </div>
                <button
                  onClick={() => addItem(product)}
                  className="w-full bg-velmora-charcoal text-velmora-cream py-2 text-sm tracking-wider hover:bg-velmora-gold transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-2xl text-velmora-graphite">
              No products found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
