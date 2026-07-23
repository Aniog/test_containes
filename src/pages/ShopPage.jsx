import React, { useState, useMemo } from 'react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const { addToCart } = useCart();

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      const categoryName = categories.find(c => c.id === selectedCategory)?.name;
      filtered = filtered.filter(p => p.category.toLowerCase() === categoryName?.toLowerCase());
    }

    // Filter by price
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => {
        if (max) {
          return p.price >= min && p.price <= max;
        }
        return p.price >= min;
      });
    }

    // Sort
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
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category Filter */}
      <div>
        <h3 className="font-serif text-lg mb-4">Category</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="category" 
              checked={selectedCategory === 'all'} 
              onChange={() => setSelectedCategory('all')}
              className="text-velmora-gold"
            />
            <span className="text-sm">All</span>
          </label>
          {categories.map(cat => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="category" 
                checked={selectedCategory === cat.id} 
                onChange={() => setSelectedCategory(cat.id)}
                className="text-velmora-gold"
              />
              <span className="text-sm">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-serif text-lg mb-4">Price</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All' },
            { value: '0-50', label: 'Under $50' },
            { value: '50-75', label: '$50 - $75' },
            { value: '75-100', label: '$75 - $100' },
            { value: '100+', label: 'Over $100' }
          ].map(option => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="price" 
                checked={priceRange === option.value} 
                onChange={() => setPriceRange(option.value)}
                className="text-velmora-gold"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="font-serif text-4xl">Shop All</h1>
        <div className="flex items-center gap-4">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-velmora-warm-gray text-sm focus:outline-none focus:border-velmora-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Alphabetical</option>
          </select>
          <button 
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="lg:hidden flex items-center gap-2 text-sm uppercase tracking-wider"
          >
            <SlidersHorizontal size={16} />
            Filter
          </button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Desktop Filter Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <FilterSidebar />
        </aside>

        {/* Mobile Filter Drawer */}
        {isMobileFilterOpen && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
                 onClick={() => setIsMobileFilterOpen(false)} />
            <div className="fixed inset-y-0 left-0 w-80 bg-white z-50 p-6 overflow-y-auto lg:hidden">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-serif text-2xl">Filters</h2>
                <button onClick={() => setIsMobileFilterOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <FilterSidebar />
            </div>
          </>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          <p className="text-sm text-velmora-warm-gray mb-6">
            {filteredAndSortedProducts.length} products
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProducts.map(product => (
              <div key={product.id} className="group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative aspect-square bg-velmora-light-gray overflow-hidden mb-4">
                    <img 
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product, 1, product.variants[0]);
                      }}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-black 
                               px-6 py-2 text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 
                               transition-opacity duration-300 hover:bg-velmora-black hover:text-white"
                    >
                      <ShoppingBag size={16} className="inline mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </Link>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-serif text-sm uppercase tracking-wider mb-1">{product.name}</h3>
                </Link>
                <p className="text-sm text-velmora-warm-gray">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
