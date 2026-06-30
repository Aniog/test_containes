import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/products/ProductCard';
import { cn } from '@/lib/utils';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sort, setSort] = useState('newest');

  const activeCategory = searchParams.get('category') || 'All';

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      let query = client.from('JewelryProducts').select('*');
      
      if (activeCategory !== 'All') {
        query = query.eq('category', activeCategory);
      }
      
      const { data: response } = await query;
      
      if (response?.data?.list) {
        setProducts(response.data.list);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, [activeCategory]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [products]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];

  return (
    <div ref={containerRef} className="pt-24 pb-24">
      {/* Page Header */}
      <section className="py-24 px-6 border-b border-[#E5E5E5] bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif uppercase tracking-[0.1em]">{activeCategory} Jewelry</h1>
          <p className="text-[#6B6B6B] tracking-[0.2em] uppercase text-[10px] font-medium">Discover your new favorites</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Controls Bar */}
        <div className="flex justify-between items-center mb-12 py-6 border-b border-[#E5E5E5]">
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold text-[#1A1A1A] lg:hidden"
          >
            <Filter size={16} />
            Filters
          </button>

          <div className="hidden lg:flex items-center gap-8 text-[10px] tracking-[0.2em] uppercase font-bold text-[#6B6B6B]">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSearchParams({ category: cat })}
                className={cn(
                  "hover:text-[#1A1A1A] transition-colors",
                  activeCategory === cat ? "text-[#1A1A1A] border-b border-[#D4AF37] pb-1" : ""
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#6B6B6B] hidden md:inline">Sort By:</span>
            <div className="relative group">
              <button className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold text-[#1A1A1A]">
                {sort}
                <ChevronDown size={14} />
              </button>
              {/* Simple dropdown mock */}
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#6B6B6B] ml-4">{products.length} Products</span>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar Filter (Desktop) */}
          <aside className="hidden lg:flex flex-col gap-12 w-64 flex-shrink-0">
            <div className="space-y-6">
              <h3 className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1A1A1A]">Category</h3>
              <div className="flex flex-col gap-4 text-xs tracking-widest text-[#6B6B6B]">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSearchParams({ category: cat })}
                    className={cn(
                      "text-left hover:text-[#1A1A1A] transition-colors",
                      activeCategory === cat ? "text-[#D4AF37] font-bold" : ""
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1A1A1A]">Price</h3>
              <div className="flex flex-col gap-4 text-xs tracking-widest text-[#6B6B6B]">
                {['Under $50', '$50 - $100', 'Over $100'].map(price => (
                  <label key={price} className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-4 h-4 border border-[#E5E5E5] group-hover:border-[#1A1A1A]" />
                    {price}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1A1A1A]">Material</h3>
              <div className="flex flex-col gap-4 text-xs tracking-widest text-[#6B6B6B]">
                {['Gold Vermeil', '18K gold plated', 'Silver'].map(mat => (
                  <label key={mat} className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-4 h-4 border border-[#E5E5E5] group-hover:border-[#1A1A1A]" />
                    {mat}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {isLoading ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {Array(6).fill(0).map((_, i) => (
                  <div key={i} className="animate-pulse flex flex-col gap-4">
                    <div className="aspect-[3/4] bg-[#F5EFE6]" />
                    <div className="h-4 bg-[#F5EFE6] w-2/3" />
                  </div>
                ))}
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center gap-6">
                <p className="font-serif text-2xl">No products found for this category.</p>
                <button 
                  onClick={() => setSearchParams({ category: 'All' })}
                  className="bg-[#1A1A1A] text-white px-10 py-4 text-[10px] tracking-[0.2em] uppercase font-medium hover:opacity-90"
                >
                  Shop All Jewelry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white p-6 animate-in slide-in-from-bottom duration-500 lg:hidden">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-xl font-serif tracking-widest uppercase font-medium">FILTERS</h2>
            <button onClick={() => setIsFilterOpen(false)}>
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-12 pb-12">
            <div className="space-y-6">
              <h3 className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1A1A1A]">Category</h3>
              <div className="grid grid-cols-2 gap-4">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => { setSearchParams({ category: cat }); setIsFilterOpen(false); }}
                    className={cn(
                      "px-6 py-3 border text-[10px] tracking-[0.2em] uppercase transition-all text-center",
                      activeCategory === cat ? "border-[#1A1A1A] bg-[#1A1A1A] text-white" : "border-[#E5E5E5] text-[#1A1A1A]"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            {/* Add other filters as needed */}
          </div>

          <button 
            onClick={() => setIsFilterOpen(false)}
            className="w-full bg-[#1A1A1A] text-white py-5 text-xs tracking-[0.2em] font-medium uppercase"
          >
            Show Results
          </button>
        </div>
      )}
    </div>
  );
}
