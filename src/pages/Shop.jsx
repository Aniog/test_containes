import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, Filter, Plus } from 'lucide-react';
import { toast } from 'sonner';

const products = [
  { id: 1, name: "Vivid Aura Jewels", description: "Gold ear cuff with crystal accent", price: 42, category: "Earrings", imgId: "prod-1" },
  { id: 2, name: "Majestic Flora Nectar", description: "Multicolor floral crystal necklace", price: 68, category: "Necklaces", imgId: "prod-2" },
  { id: 3, name: "Golden Sphere Huggies", description: "Chunky gold dome huggie earrings", price: 38, category: "Earrings", imgId: "prod-3" },
  { id: 4, name: "Amber Lace Earrings", description: "Textured gold filigree drop earrings", price: 54, category: "Earrings", imgId: "prod-4" },
  { id: 5, name: "Royal Heirloom Set", description: "Gift-boxed earring + necklace set", price: 95, category: "Sets", imgId: "prod-5" },
];

const Shop = ({ addToCart }) => {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Featured');
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filter]);

  const filteredProducts = products.filter(p => filter === 'All' || p.category === filter);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <div className="pt-12 pb-24 px-6 lg:px-20 animate-fade-in" ref={containerRef}>
      {/* Page Header */}
      <header className="mb-16">
        <h1 className="text-4xl lg:text-5xl font-serif mb-4">Shop All</h1>
        <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-stone-500">
          <Link to="/" className="hover:text-brand-black transition-colors">Home</Link>
          <span className="text-stone-300">/</span>
          <span className="text-brand-black font-semibold">Shop All</span>
        </div>
      </header>

      {/* Filters & Sorting */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 border-b border-brand-stone pb-8">
        <div className="flex flex-wrap gap-4 md:gap-8">
          {['All', 'Earrings', 'Necklaces', 'Sets'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs uppercase tracking-widest transition-colors ${filter === cat ? 'text-brand-black font-bold border-b border-brand-black' : 'text-stone-400 hover:text-brand-black'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-8 w-full lg:w-auto justify-between lg:justify-end">
          <button className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 hover:text-brand-black transition-colors md:hidden">
            <Filter size={14} /> Filter
          </button>
          <div className="relative group flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 hover:text-brand-black cursor-pointer transition-colors">
            Sort: <span className="text-brand-black font-semibold">{sort}</span>
            <ChevronDown size={14} />
          </div>
        </div>
      </div>

      <div className="flex gap-12">
        {/* Sidebar Filters - Desktop */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="mb-10">
            <h3 className="uppercase tracking-widest text-[10px] font-bold mb-6">Price</h3>
            <div className="flex flex-col gap-3">
              {['Under $50', '$50 - $100', 'Over $100'].map((range) => (
                <label key={range} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-3 h-3 border border-brand-stone group-hover:border-stone-400" />
                  <span className="text-xs text-stone-500 group-hover:text-brand-black transition-colors">{range}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="uppercase tracking-widest text-[10px] font-bold mb-6">Material</h3>
            <div className="flex flex-col gap-3">
              {['18K Gold Plated', 'Sterling Silver'].map((mat) => (
                <label key={mat} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-3 h-3 border border-brand-stone group-hover:border-stone-400" />
                  <span className="text-xs text-stone-500 group-hover:text-brand-black transition-colors">{mat}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-6">
                  <Link to={`/product/${product.id}`}>
                    <img 
                      data-strk-img-id={`shop-${product.id}`}
                      data-strk-img={`[shop-prod-${product.id}-name] fine jewelry gold accessory`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="700"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      alt={product.name}
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(product);
                        }}
                        className="w-full bg-white/95 backdrop-blur-sm text-brand-black py-4 uppercase tracking-widest text-[10px] font-bold hover:bg-brand-black hover:text-white transition-colors flex items-center justify-center gap-2"
                      >
                        <Plus size={14} /> Quick Add
                      </button>
                    </div>
                  </Link>
                </div>
                <h3 id={`shop-prod-${product.id}-name`} className="uppercase tracking-widest text-[11px] font-semibold mb-1 group-hover:text-brand-gold transition-colors">{product.name}</h3>
                <p className="text-stone-500 font-serif text-sm">${product.price}</p>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="uppercase tracking-widest text-stone-400 text-xs">No products found in this category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;