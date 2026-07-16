import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { productsApi } from '../api/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { Filter, ChevronDown, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  const categoryFilter = searchParams.get('category') || 'All';
  const sort = searchParams.get('sort') || 'newest';

  useEffect(() => {
    productsApi.list().then(setProducts);
  }, []);

  useEffect(() => {
    let result = [...products];

    if (categoryFilter !== 'All') {
      result = result.filter(p => p.data.category === categoryFilter);
    }

    if (sort === 'price-low') {
      result.sort((a, b) => a.data.price - b.data.price);
    } else if (sort === 'price-high') {
      result.sort((a, b) => b.data.price - a.data.price);
    }

    setFilteredProducts(result);
  }, [products, categoryFilter, sort]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];

  // Static slugs for tracing
  const seedSlugs = [
    'vivid-aura-jewels',
    'majestic-flora-nectar',
    'golden-sphere-huggies',
    'amber-lace-earrings',
    'royal-heirloom-set'
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Hidden hints for tracing */}
      <div className="hidden">
        {seedSlugs.map(slug => (
          <img key={`hint-shop-${slug}`} data-strk-img-id={`shop-pd-${slug}`} data-strk-img={`[pd-name-${slug}] shopPiece`} />
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Shop All Pieces</h1>
          <p className="text-[#A69B8F] font-sans tracking-wide">Refined adornments for every occasion.</p>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-48">
            <select 
              value={sort}
              onChange={(e) => {
                searchParams.set('sort', e.target.value);
                setSearchParams(searchParams);
              }}
              className="w-full bg-transparent border border-[#E5E2DD] py-2 px-4 font-sans text-xs uppercase tracking-widest appearance-none focus:outline-none"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#A69B8F]" />
          </div>
          
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden flex items-center gap-2 border border-[#E5E2DD] py-2 px-4 font-sans text-xs uppercase tracking-widest"
          >
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar Filter */}
        <aside className={cn(
          "md:w-64 space-y-10 transition-all",
          isFilterOpen ? "block" : "hidden md:block"
        )}>
          <div>
            <h3 className="font-serif text-lg tracking-widest uppercase mb-6">Category</h3>
            <div className="flex flex-col gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    searchParams.set('category', cat);
                    setSearchParams(searchParams);
                  }}
                  className={cn(
                    "text-left font-sans text-xs uppercase tracking-[0.2em] hover:text-[#C5A059] transition-colors",
                    categoryFilter === cat ? "text-[#C5A059] font-bold" : "text-[#A69B8F]"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-10 border-t border-[#E5E2DD]">
             <h3 className="font-serif text-lg tracking-widest uppercase mb-6">Material</h3>
             <div className="flex flex-col gap-4 text-[#A69B8F] font-sans text-xs uppercase tracking-[0.2em]">
                <label className="flex items-center gap-3 cursor-pointer hover:text-[#1A150E]">
                    <input type="checkbox" className="accent-[#C5A059]" /> 18K Gold Plated
                </label>
                <label className="flex items-center gap-3 cursor-pointer hover:text-[#1A150E]">
                    <input type="checkbox" className="accent-[#C5A059]" /> Sterling Silver
                </label>
             </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-serif text-2xl text-[#A69B8F]">No pieces found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group flex flex-col">
                  <Link to={`/product/${product.data.slug}`} className="relative aspect-[2/3] overflow-hidden bg-[#E5E2DD] mb-6 block">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'%3E%3Crect width='2' height='3' fill='%23E5E2DD'/%3E%3C/svg%3E"
                      alt={product.data.name}
                      data-strk-img={`[pd-name-${product.data.slug}] jewelry editorial`}
                      data-strk-img-id={`shop-pd-${product.data.slug}`}
                      data-strk-img-width="600"
                      data-strk-img-ratio="2x3"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="absolute bottom-0 left-0 right-0 py-4 bg-[#1A150E]/90 backdrop-blur-sm text-white font-sans uppercase tracking-[0.2em] text-[10px] translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    >
                      Add to Bag
                    </button>
                  </Link>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 id={`pd-name-${product.data.slug}`} className="font-serif text-sm tracking-widest uppercase mb-1">{product.data.name}</h3>
                      <p className="text-[10px] text-[#A69B8F] font-sans uppercase tracking-widest">{product.data.category}</p>
                    </div>
                    <p className="font-serif text-[#C5A059]">${product.data.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
