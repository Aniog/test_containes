import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

// Extended Seed product data
const ALL_PRODUCTS = [
  { id: '1', name: 'VIVID AURA JEWELS', price: 42, category: 'earrings', image: '1' },
  { id: '2', name: 'MAJESTIC FLORA NECTAR', price: 68, category: 'necklaces', image: '2' },
  { id: '3', name: 'GOLDEN SPHERE HUGGIES', price: 38, category: 'huggies', image: '3' },
  { id: '4', name: 'AMBER LACE EARRINGS', price: 54, category: 'earrings', image: '4' },
  { id: '5', name: 'ROYAL HEIRLOOM SET', price: 95, category: 'necklaces', image: '5' },
  { id: '6', name: 'TWISTED VINE HUGGIES', price: 45, category: 'huggies', image: '6' },
  { id: '7', name: 'CELESTIAL DROP EARRINGS', price: 62, category: 'earrings', image: '7' },
  { id: '8', name: 'LUNA PEARL CHAIN', price: 75, category: 'necklaces', image: '8' },
];

const Shop = () => {
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('featured');

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filter, sort]); // Rerun when list changes

  const filteredProducts = ALL_PRODUCTS
    .filter(p => filter === 'all' || p.category === filter)
    .sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      return 0; // featured/default
    });

  return (
    <div ref={containerRef} className="pt-8 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 id="shop-title" className="font-serif text-4xl md:text-5xl mb-4">The Collection</h1>
          <p id="shop-subtitle" className="text-neutral-500 max-w-xl mx-auto">
            Discover our full range of demi-fine jewelry. Curated pieces designed to elevate your everyday and become cherished heirlooms.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar / Filters (Desktop) */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-32">
              <h3 className="font-medium text-sm tracking-widest uppercase mb-6 border-b border-neutral-200 pb-4">Categories</h3>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li>
                  <button 
                    onClick={() => setFilter('all')}
                    className={`hover:text-amber-700 transition-colors ${filter === 'all' ? 'text-amber-700 font-medium' : ''}`}
                  >
                    All Jewelry
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setFilter('earrings')}
                    className={`hover:text-amber-700 transition-colors ${filter === 'earrings' ? 'text-amber-700 font-medium' : ''}`}
                  >
                    Earrings
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setFilter('necklaces')}
                    className={`hover:text-amber-700 transition-colors ${filter === 'necklaces' ? 'text-amber-700 font-medium' : ''}`}
                  >
                    Necklaces
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setFilter('huggies')}
                    className={`hover:text-amber-700 transition-colors ${filter === 'huggies' ? 'text-amber-700 font-medium' : ''}`}
                  >
                    Huggies
                  </button>
                </li>
              </ul>
              
              <h3 className="font-medium text-sm tracking-widest uppercase mt-12 mb-6 border-b border-neutral-200 pb-4">Material</h3>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li><button className="text-amber-700 font-medium">18k Gold Vermeil</button></li>
                <li><button className="hover:text-amber-700 transition-colors">Sterling Silver</button></li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-neutral-200">
              <div className="md:hidden">
                 <button className="flex items-center gap-2 text-sm uppercase tracking-widest text-neutral-500">
                    <SlidersHorizontal className="w-4 h-4" /> Filters
                 </button>
              </div>
              <div className="hidden md:block text-sm text-neutral-500">
                {filteredProducts.length} Products
              </div>
              <div className="relative flex items-center gap-4">
                <span className="text-sm text-neutral-500 hidden sm:inline">Sort by:</span>
                <select 
                  className="bg-transparent text-sm uppercase tracking-wider outline-none cursor-pointer text-neutral-900 pr-8 appearance-none"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  style={{backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231A1817%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: '10px auto'}}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary overflow-hidden mb-4">
                    <img
                      alt={product.name}
                      data-strk-img-id={`shop-img-${product.id}`}
                      data-strk-img={`[shop-prod-title-${product.id}] [shop-title] [shop-subtitle]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                        className="bg-white text-neutral-900 text-xs px-6 py-2 tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-colors translate-y-4 group-hover:translate-y-0 duration-300"
                      >
                        Quick Add
                      </button>
                    </div>
                  </Link>
                  <div className="text-center md:text-left">
                    <h3 id={`shop-prod-title-${product.id}`} className="font-serif text-sm tracking-widest mb-1">{product.name}</h3>
                    <p className="text-neutral-500 text-sm">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination Placeholder */}
            <div className="mt-20 flex justify-center">
              <button className="border border-neutral-200 text-neutral-900 px-8 py-3 text-sm tracking-[0.15em] uppercase hover:bg-neutral-50 transition-colors">
                Load More
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
