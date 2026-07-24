import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { seedProducts } from '../lib/data';
import { useCart } from '../lib/CartContext';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [products, setProducts] = useState(seedProducts);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    let filtered = [...seedProducts];
    
    if (categoryFilter) {
      filtered = filtered.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase());
    }

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setProducts(filtered);
  }, [categoryFilter, sortBy]);

  useEffect(() => {
    if (typeof ImageHelper !== 'undefined' && ImageHelper.loadImages) {
        try {
            ImageHelper.loadImages({}, containerRef.current);
        } catch(e) {}
    }
  }, [products]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  return (
    <div ref={containerRef} className="container mx-auto px-4 pt-32 pb-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-border pb-8">
        <div className="w-full md:w-auto mb-6 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            {categoryFilter ? categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1) : 'All Jewelry'}
          </h1>
          <p className="text-muted-foreground w-full md:max-w-md">
            Discover our collection of demi-fine jewelry, crafted in 18k gold vermeil for everyday elegance.
          </p>
        </div>
        
        <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 sm:w-auto">
          <button 
            className="md:hidden flex items-center gap-2 text-sm uppercase tracking-widest font-medium"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>

          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-8 py-2 text-sm uppercase tracking-widest font-medium focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className={`md:w-64 shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
          <div className="sticky top-32">
            <div className="mb-10">
              <h3 className="font-serif text-lg tracking-widest uppercase mb-6">Category</h3>
              <ul className="space-y-4">
                {categories.map(cat => {
                  const isActive = (cat === 'All' && !categoryFilter) || (categoryFilter === cat.toLowerCase());
                  return (
                    <li key={cat}>
                      <button 
                        onClick={() => {
                          if (cat === 'All') {
                            searchParams.delete('category');
                          } else {
                            searchParams.set('category', cat.toLowerCase());
                          }
                          setSearchParams(searchParams);
                          setIsFilterOpen(false);
                        }}
                        className={`text-sm hover:text-accent transition-colors ${isActive ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
                      >
                        {cat}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-lg tracking-widest uppercase mb-6">Material</h3>
              <ul className="space-y-4">
                <li>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-border flex items-center justify-center group-hover:border-accent">
                      <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    </div>
                    <span className="text-sm text-foreground">18k Gold Plated</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-border flex items-center justify-center group-hover:border-accent">
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground">Sterling Silver</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {products.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-muted-foreground mb-4">No products found matching your criteria.</p>
              <button 
                onClick={() => setSearchParams({})}
                className="text-accent hover:underline text-sm uppercase tracking-widest"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary overflow-hidden mb-4">
                    <img 
                      src={product.imgUrl} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      data-strk-img-id={product.imgId || "shop-prod-default"}
                      data-strk-img={`[shop-prod-title-${product.id}] ${product.category} gold jewelry editorial`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                    />
                    {/* Quick Add Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          addItem({ ...product, variant: product.variants[0] });
                        }}
                        className="w-full bg-background/95 backdrop-blur text-foreground py-3 text-sm uppercase tracking-widest font-medium hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
                      >
                        Quick Add
                      </button>
                    </div>
                  </Link>
                  <div className="text-center">
                    <h3 id={`shop-prod-title-${product.id}`} className="font-serif text-sm tracking-widest uppercase mb-1">{product.name}</h3>
                    <p className="text-muted-foreground">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}