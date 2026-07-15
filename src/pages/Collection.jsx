import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { products, categories } from '@/lib/data';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const Collection = () => {
  const { addToCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const selectedCategory = searchParams.get('category') || 'All';
  const priceFilter = searchParams.get('price') || 'All';
  const sortBy = searchParams.get('sort') || 'featured';
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, priceFilter, sortBy]);

  const filteredProducts = products.filter(p => {
    const categoryMatch = selectedCategory === 'All' || p.category === selectedCategory;
    let priceMatch = true;
    if (priceFilter === 'under50') priceMatch = p.price < 50;
    if (priceFilter === 'over50') priceMatch = p.price >= 50;
    return categoryMatch && priceMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // featured
  });

  const updateFilters = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to your bag`);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Shop All</h1>
            <div className="flex justify-between items-center py-4 border-y border-velmora-charcoal/5">
                <div className="flex items-center space-x-6 text-[10px] uppercase tracking-ultra-wide font-sans">
                    <button 
                      onClick={() => setIsSidebarOpen(true)}
                      className="flex items-center space-x-2 lg:hidden font-semibold"
                    >
                        <Filter size={16} />
                        <span>Filter</span>
                    </button>
                    <span className="hidden lg:block text-velmora-charcoal/40">{sortedProducts.length} Items</span>
                </div>
                
                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-ultra-wide font-sans font-semibold relative group">
                    <span>Sort By: {sortBy.replace('-', ' ')}</span>
                    <ChevronDown size={14} />
                    <div className="absolute top-full right-0 w-48 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 border border-velmora-charcoal/5">
                        {['featured', 'price-low', 'price-high'].map(option => (
                            <button 
                                key={option} 
                                onClick={() => updateFilters('sort', option)}
                                className="w-full text-left px-6 py-4 hover:bg-velmora-cream transition-colors border-b border-velmora-charcoal/5"
                            >
                                {option.replace('-', ' ')}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="flex gap-12">
            {/* Sidebar Desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0 space-y-12">
                <div>
                    <h3 className="text-xs uppercase tracking-ultra-wide font-semibold mb-6">Category</h3>
                    <div className="space-y-4">
                        {['All', ...categories].map(cat => (
                            <button 
                                key={cat}
                                onClick={() => updateFilters('category', cat)}
                                className={cn(
                                    "block text-sm font-sans transition-colors border-b border-transparent",
                                    selectedCategory === cat ? "text-gold font-medium border-gold" : "text-velmora-charcoal/60 hover:text-velmora-charcoal"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xs uppercase tracking-ultra-wide font-semibold mb-6">Price</h3>
                    <div className="space-y-4">
                        {[
                            { label: 'All', value: 'All' },
                            { label: 'Under $50', value: 'under50' },
                            { label: 'Over $50', value: 'over50' }
                        ].map(f => (
                            <button 
                                key={f.value}
                                onClick={() => updateFilters('price', f.value)}
                                className={cn(
                                    "block text-sm font-sans transition-colors",
                                    priceFilter === f.value ? "text-gold font-medium" : "text-velmora-charcoal/60 hover:text-velmora-charcoal"
                                )}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pt-12">
                    <div className="bg-velmora-cream p-10 text-center relative overflow-hidden group">
                        <div 
                          className="absolute inset-0 bg-velmora-gold/5 scale-110 group-hover:scale-125 transition-transform duration-1000" 
                          data-strk-bg-id="ad-bg"
                          data-strk-bg="abstract luxury texture ivory gold"
                          data-strk-bg-ratio="1x1"
                          data-strk-bg-width="400"
                        />
                        <div className="relative z-10">
                            <h4 className="text-xl font-serif mb-4">Gifts under $100</h4>
                            <Link to="/shop?price=under100" className="text-[10px] uppercase tracking-ultra-wide font-semibold border-b border-velmora-charcoal pb-1 hover:text-gold hover:border-gold">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="flex-grow">
                {sortedProducts.length === 0 ? (
                    <div className="py-24 text-center">
                        <p className="font-serif text-2xl text-velmora-charcoal/40">No pieces found matching your filter.</p>
                        <button 
                            onClick={() => setSearchParams({})}
                            className="mt-6 text-xs uppercase tracking-ultra-wide font-semibold border-b border-velmora-charcoal pb-1"
                        >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-12 gap-y-16">
                        {sortedProducts.map((product) => (
                            <div key={product.id} className="group cursor-pointer">
                                <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden mb-6 bg-velmora-cream">
                                    <img 
                                        data-strk-img-id={`coll-img-${product.id}`}
                                        data-strk-img={`[coll-title-${product.id}] luxury gold jewelry editorial`}
                                        data-strk-img-ratio="3x4"
                                        data-strk-img-width="700"
                                        src={product.images[0]} 
                                        alt={product.name} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    />
                                    <button 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleAddToCart(product);
                                        }}
                                        className="absolute bottom-4 left-4 right-4 bg-white text-velmora-charcoal py-3 text-[10px] uppercase tracking-ultra-wide font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-velmora-charcoal hover:text-white"
                                    >
                                        Quick Add
                                    </button>
                                </Link>
                                <h3 id={`coll-title-${product.id}`} className="text-[11px] uppercase tracking-ultra-wide mb-2 font-medium font-sans">{product.name}</h3>
                                <p className="text-sm font-sans tracking-tight text-velmora-charcoal/80">${product.price}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
              <div className="absolute top-0 right-0 h-full w-[80%] bg-white p-10 flex flex-col pt-24">
                  <button className="absolute top-8 right-8" onClick={() => setIsSidebarOpen(false)}>
                      <X size={24} strokeWidth={1} />
                  </button>
                  
                  <div className="space-y-12">
                    <div>
                        <h3 className="text-xs uppercase tracking-ultra-wide font-semibold mb-8 border-b pb-4">Category</h3>
                        <div className="space-y-6">
                            {['All', ...categories].map(cat => (
                                <button 
                                    key={cat}
                                    onClick={() => { updateFilters('category', cat); setIsSidebarOpen(false); }}
                                    className={cn(
                                        "block text-lg font-serif transition-colors",
                                        selectedCategory === cat ? "text-gold italic underline underline-offset-8" : "text-velmora-charcoal/60"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs uppercase tracking-ultra-wide font-semibold mb-8 border-b pb-4">Price</h3>
                        <div className="space-y-6">
                            {[
                                { label: 'All', value: 'All' },
                                { label: 'Under $50', value: 'under50' },
                                { label: 'Over $50', value: 'over50' }
                            ].map(f => (
                                <button 
                                    key={f.value}
                                    onClick={() => { updateFilters('price', f.value); setIsSidebarOpen(false); }}
                                    className={cn(
                                        "block text-lg font-serif transition-colors",
                                        priceFilter === f.value ? "text-gold italic underline underline-offset-8" : "text-velmora-charcoal/60"
                                    )}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default Collection;
