import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Shop = () => {
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState(category || 'all');
  const [sortOrder, setSortOrder] = useState('featured');
  const containerRef = useRef(null);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
    }
    if (sortOrder === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }
    return result;
  }, [activeCategory, sortOrder]);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeCategory, sortOrder]);

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];

  return (
    <div ref={containerRef} className="pt-32 pb-24 min-h-screen bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-charcoal/40 mb-4 block font-bold">Collections</span>
          <h1 className="font-serif text-5xl md:text-6xl uppercase tracking-widest-editorial text-charcoal mb-8">
            {activeCategory === 'all' ? 'All Treasures' : activeCategory}
          </h1>
          
          {/* Category Chips */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-y border-charcoal/5 py-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold transition-all ${
                  activeCategory === cat ? 'text-gold' : 'text-charcoal/40 hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center mb-12 border-b border-charcoal/5 pb-8">
          <div className="flex items-center gap-2 text-charcoal/60 font-sans text-[10px] tracking-widest uppercase font-bold">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="font-sans text-[10px] tracking-widest text-charcoal/40 uppercase font-bold hidden md:inline">
              Showing {filteredProducts.length} items
            </span>
            <div className="relative group">
              <button className="flex items-center gap-2 font-sans text-[10px] tracking-widest text-charcoal uppercase font-bold">
                Sort By: {sortOrder.replace('-', ' ')}
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 border border-charcoal/5">
                {['featured', 'price-low', 'price-high'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSortOrder(opt)}
                    className="w-full text-left px-6 py-4 text-[10px] tracking-widest uppercase font-bold hover:bg-cream hover:text-gold transition-colors"
                  >
                    {opt.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-serif text-2xl text-charcoal/40">No pieces found in this collection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
