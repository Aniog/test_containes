import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest'];

  // Filter and sort products
  let filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  if (sortBy === 'Price: Low to High') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'Price: High to Low') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  // Simplified sorting for 'Featured' and 'Newest' just using original order for now

  return (
    <div className="pt-24 pb-16 min-h-screen bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 mt-8">
          <h1 className="text-4xl font-serif text-stone-950 mb-4 tracking-wide">Shop All Jewelry</h1>
          <p className="text-stone-600 max-w-2xl mx-auto font-light">
            Discover our complete collection of demi-fine jewelry. Crafted from 18k gold vermeil and perfect for everyday wear.
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-stone-200 pb-4 relative z-20">
          
          <div className="flex w-full md:w-auto justify-between mb-4 md:mb-0">
            {/* Mobile Filter Toggle */}
            <button 
              className="md:hidden flex items-center text-sm uppercase tracking-widest text-stone-600 hover:text-stone-950"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>

            {/* Desktop Categories */}
            <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`${activeCategory === category ? 'text-stone-950 border-b border-stone-950 pb-1' : 'text-stone-500 hover:text-stone-950 pb-1'}`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown Mobile/Desktop */}
            <div className="relative">
              <button 
                className="flex items-center text-sm uppercase tracking-widest text-stone-600 hover:text-stone-950"
                onClick={() => setIsSortOpen(!isSortOpen)}
              >
                Sort by <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isSortOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-stone-200 shadow-sm py-2 z-30 text-left">
                  {sortOptions.map(option => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option);
                        setIsSortOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-stone-600 hover:bg-stone-50 hover:text-stone-950 flex items-center justify-between"
                    >
                      {option}
                      {sortBy === option && <Check className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Categories Dropdown */}
          {isFilterOpen && (
            <div className="w-full md:hidden flex flex-wrap gap-2 pt-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setIsFilterOpen(false);
                  }}
                  className={`px-4 py-2 text-xs uppercase tracking-widest border ${activeCategory === category ? 'bg-stone-950 text-white border-stone-950' : 'bg-transparent text-stone-600 border-stone-300'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col relative">
              <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 absolute inset-0"
                />
                <img 
                  src={product.hoverImage} 
                  alt={`${product.name} alternate view`} 
                  className="w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute inset-0"
                />
                
                {/* Quick Add Button Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 text-center">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product, 1, 'Gold');
                    }}
                    className="w-full bg-white/90 backdrop-blur-sm text-stone-950 py-3 uppercase tracking-widest text-xs font-medium hover:bg-stone-950 hover:text-white transition-colors"
                  >
                    Quick Add
                  </button>
                </div>
              </Link>
              <div className="flex flex-col flex-grow text-center">
                <h3 className="text-sm font-medium uppercase tracking-widest text-stone-950 mb-1">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="text-stone-500 text-sm mt-auto">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-500 font-serif">No products found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}
