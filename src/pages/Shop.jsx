import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { seedProducts } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'all';
  const sortFilter = searchParams.get('sort') || 'featured';
  
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      const frameId = window.requestAnimationFrame(() => {
        if (containerRef.current) {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
      });
      return () => window.cancelAnimationFrame(frameId);
    } catch(e) {
      console.log('Image helper not loaded properly yet', e);
    }
  }, [categoryFilter, sortFilter]);

  const categories = [
    { id: 'all', label: 'All Jewelry' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'huggies', label: 'Huggies & Cuffs' },
    { id: 'sets', label: 'Sets' },
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let products = [...seedProducts];
    
    // Filter
    if (categoryFilter !== 'all') {
      products = products.filter(p => p.category === categoryFilter);
    }
    
    // Sort
    switch (sortFilter) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'name-a-z':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - leave as is
        break;
    }
    
    return products;
  }, [categoryFilter, sortFilter]);

  const updateFilter = (type, value) => {
    const params = new URLSearchParams(searchParams);
    params.set(type, value);
    setSearchParams(params);
  };

  return (
    <div className="pt-24 min-h-screen bg-background pb-20" ref={containerRef}>
      {/* Page Header */}
      <div className="bg-secondary/50 py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 capitalize">
            {categories.find(c => c.id === categoryFilter)?.label || 'Shop'}
          </h1>
          <p className="text-muted-foreground font-light">Elevate your everyday with demi-fine pieces crafted to last.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Mobile Filter Toggle */}
        <div className="flex justify-between items-center mb-8 md:hidden border-b border-border pb-4">
          <button 
            className="flex items-center gap-2 font-medium uppercase tracking-widest text-sm"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters & Sort
          </button>
          <span className="text-muted-foreground text-sm">{filteredAndSortedProducts.length} products</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <aside className={`w-full md:w-64 flex-shrink-0 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-32 space-y-10">
              
              {/* Category Filter */}
              <div>
                <h3 className="font-serif text-xl mb-6 border-b border-border pb-2">Category</h3>
                <ul className="space-y-4">
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <button
                        onClick={() => updateFilter('category', cat.id)}
                        className={`text-sm tracking-wide transition-colors ${
                          categoryFilter === cat.id 
                            ? 'font-medium text-foreground' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sort Filter */}
              <div>
                <h3 className="font-serif text-xl mb-6 border-b border-border pb-2">Sort By</h3>
                <div className="relative">
                  <select 
                    className="w-full appearance-none bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary rounded-none cursor-pointer tracking-wide"
                    value={sortFilter}
                    onChange={(e) => updateFilter('sort', e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name-a-z">Alphabetical</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
                </div>
              </div>

              {/* Materials Info Block */}
              <div className="bg-secondary/50 p-6">
                <h4 className="font-serif text-lg mb-3">Our Materials</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All pieces are crafted with a thick layer of 18k gold vermeil over a solid sterling silver or brass core, meaning they're durable, hypoallergenic, and ethically made.
                </p>
              </div>

            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="hidden md:flex justify-between items-center mb-8 text-sm text-muted-foreground">
              <span>Showing {filteredAndSortedProducts.length} results</span>
            </div>

            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {filteredAndSortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl font-serif text-muted-foreground">No products found in this category.</p>
                <button 
                  onClick={() => updateFilter('category', 'all')}
                  className="mt-6 border-b border-primary hover:text-accent border-accent transition-colors tracking-widest uppercase text-sm"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;