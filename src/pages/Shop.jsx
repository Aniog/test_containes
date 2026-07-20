import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../api/products';
import { motion } from 'framer-motion';
import { Filter, ChevronDown, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

const Shop = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center space-y-4 mb-20">
        <h1 className="text-5xl md:text-6xl font-serif">The Collection</h1>
        <p className="text-sm text-gray-400 tracking-widest uppercase italic serif">Timeless essentials designed for everyday luxury</p>
      </div>

      {/* Filters & Grid */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-12">
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-widest font-semibold border-b border-gray-100 pb-4 flex items-center">
              <Filter size={14} className="mr-2" /> Categories
            </h3>
            <div className="flex flex-wrap lg:flex-col gap-4">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-sm tracking-widest uppercase transition-colors text-left ${activeCategory === cat ? 'text-velmora-gold font-semibold' : 'text-gray-400 hover:text-velmora-dark'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-widest font-semibold border-b border-gray-100 pb-4">Material</h3>
            <div className="flex flex-col gap-4">
              {['18K Gold Plated', 'Silver Tone'].map(material => (
                <label key={material} className="flex items-center space-x-3 cursor-pointer group">
                  <div className="w-4 h-4 rounded-full border border-gray-300 group-hover:border-velmora-gold" />
                  <span className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-velmora-dark">{material}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          <div className="flex justify-between items-baseline mb-8">
            <p className="text-[10px] uppercase tracking-widest text-gray-400">{filteredProducts.length} Products</p>
            <button className="text-[10px] uppercase tracking-widest flex items-center text-gray-500 hover:text-velmora-dark">
              Sort By <ChevronDown size={12} className="ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProducts.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={item.id}
              >
                <Link to={`/product/${item.id}`} className="group block">
                  <div className="aspect-[3/4] overflow-hidden bg-velmora-warm relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <img 
                      src={item.hoverImage} 
                      alt={`${item.name} hover view`} 
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <button 
                      onClick={(e) => handleAddToCart(e, item)}
                      className="absolute bottom-6 left-6 right-6 py-4 bg-white/95 text-velmora-dark text-[10px] uppercase tracking-widest font-semibold translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
                    >
                      Add to Bag
                    </button>
                  </div>
                  <div className="mt-6 space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-800">{item.name}</h3>
                    <p className="text-sm font-light text-velmora-gold font-serif italic tracking-wider">${item.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
