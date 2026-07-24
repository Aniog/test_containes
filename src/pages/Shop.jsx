import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../lib/data';
import { Link } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { toast } from 'sonner';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'All';
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Featured');
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  const filteredProducts = products.filter(p => 
    categoryFilter === 'All' || p.category === categoryFilter
  );

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
    window.scrollTo(0, 0);
  }, [categoryFilter]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0 border-b border-border pb-12">
          <div>
            <h1 className="font-serif text-5xl md:text-6xl mb-4 italic">{categoryFilter === 'All' ? 'The Collection' : categoryFilter}</h1>
            <p className="text-sm text-muted-foreground uppercase tracking-widest font-light">Showing {filteredProducts.length} results</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold border border-border px-6 py-3 hover:bg-muted transition-colors md:hidden"
            >
              <Filter size={14} />
              <span>Filter</span>
            </button>
            
            <div className="relative group">
              <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold border border-border px-6 py-3 hover:bg-muted transition-colors">
                <span>Sort By: {sortBy}</span>
                <ChevronDown size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Filters */}
          <div className={cn(
            "lg:block space-y-10",
            isFilterOpen ? "fixed inset-0 z-[60] bg-background p-12 overflow-y-auto" : "hidden"
          )}>
            {isFilterOpen && (
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="absolute top-8 right-8 lg:hidden"
              >
                <X size={24} />
              </button>
            )}

            <div className="space-y-6">
              <h3 className="font-serif text-sm uppercase tracking-widest font-semibold">Category</h3>
              <div className="flex flex-col space-y-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSearchParams({ category: cat });
                      setIsFilterOpen(false);
                    }}
                    className={cn(
                      "text-xs uppercase tracking-[0.2em] text-left hover:text-accent transition-colors pb-1 border-b w-fit",
                      categoryFilter === cat ? "text-accent border-accent" : "text-muted-foreground border-transparent"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-serif text-sm uppercase tracking-widest font-semibold">Material</h3>
              <div className="flex flex-col space-y-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <label className="flex items-center space-x-3 cursor-pointer hover:text-accent">
                   <div className="w-3 h-3 border border-border rounded-full" />
                   <span>18K Gold Plated</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer hover:text-accent">
                   <div className="w-3 h-3 border border-border rounded-full" />
                   <span>Sterling Silver</span>
                </label>
              </div>
            </div>

            {isFilterOpen && (
               <button 
                 onClick={() => setIsFilterOpen(false)}
                 className="w-full bg-primary text-primary-foreground py-4 text-xs uppercase tracking-widest font-bold mt-12"
               >
                 Show Results
               </button>
            )}
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group space-y-4">
                <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                  <img
                    data-strk-img-id={`shop-item-${product.id}`}
                    data-strk-img={`[shop-title-${product.id}] [shop-cat-${product.id}] jewelry collection`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="bg-white text-black px-6 py-3 text-[10px] uppercase tracking-widest font-bold shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-black hover:text-white"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>
                <div className="space-y-1 text-center">
                  <p id={`shop-cat-${product.id}`} className="text-[10px] uppercase tracking-widest text-muted-foreground">{product.category}</p>
                  <h3 id={`shop-title-${product.id}`} className="font-serif text-sm uppercase tracking-widest font-medium group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm font-light">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
