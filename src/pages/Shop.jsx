import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import ProductCard from '@/components/ui/ProductCard';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);
  
  const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);
  
  const activeCategory = searchParams.get('category') || 'All';
  const activeSort = searchParams.get('sort') || 'featured';

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const sorts = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      let query = client.from('JewelryProduct').select('*');
      
      if (activeCategory !== 'All') {
        query = query.eq('category', activeCategory);
      }

      const { data: response } = await query;
      
      if (response?.data?.list) {
        let list = response.data.list.map(item => ({ id: item.id, ...item.data }));
        
        // Manual sorting since database might not support all sort orders yet
        if (activeSort === 'price-asc') list.sort((a, b) => a.price - b.price);
        if (activeSort === 'price-desc') list.sort((a, b) => b.price - a.price);
        
        setProducts(list);
      }
      setLoading(false);
    };
    fetchProducts();
  }, [activeCategory, activeSort]);

  useEffect(() => {
    if (products.length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [products]);

  const toggleCategory = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const toggleSort = (sort) => {
    searchParams.set('sort', sort);
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 italic">The Collection</h1>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Adorn yourself in timeless elegance</p>
        </div>

        {/* Filters Desktop */}
        <div className="hidden md:flex items-center justify-between border-y border-[#E5E5E5]/50 py-6 mb-12">
          <div className="flex items-center space-x-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={cn(
                  "text-[10px] uppercase tracking-luxury transition-all hover:opacity-70",
                  activeCategory === cat ? "text-[#9D8C70] border-b border-[#9D8C70] pb-1" : "text-muted-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
             <span className="text-[10px] uppercase tracking-luxury text-muted-foreground">Sort by:</span>
             <select 
               value={activeSort} 
               onChange={(e) => toggleSort(e.target.value)}
               className="bg-transparent text-[10px] uppercase tracking-luxury focus:outline-none cursor-pointer"
             >
               {sorts.map(s => (
                 <option key={s.value} value={s.value}>{s.label}</option>
               ))}
             </select>
          </div>
        </div>

        {/* Filters Mobile */}
        <div className="md:hidden flex items-center justify-between mb-8">
           <button 
             onClick={() => setIsFilterOpen(true)}
             className="flex items-center space-x-2 text-[10px] uppercase tracking-luxury border border-[#E5E5E5] px-4 py-3"
           >
             <SlidersHorizontal className="w-3 h-3" />
             <span>Filter & Sort</span>
           </button>
           <span className="text-[10px] uppercase tracking-luxury text-muted-foreground">{products.length} Items</span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {loading && [...Array(8)].map((_, i) => (
            <div key={i} className="animate-pulse">
               <div className="aspect-[3/4] bg-[#F9F8F6] mb-4" />
               <div className="h-4 bg-[#F9F8F6] w-1/2 mb-2" />
               <div className="h-3 bg-[#F9F8F6] w-1/4" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div className={cn(
        "fixed inset-0 bg-white z-[100] transition-transform duration-500 p-8 flex flex-col",
        isFilterOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <button onClick={() => setIsFilterOpen(false)} className="self-end mb-12">
          <X className="w-8 h-8" />
        </button>
        
        <div className="flex-1 space-y-12">
          <div>
            <h3 className="text-xs uppercase tracking-luxury mb-8 text-[#9D8C70]">Category</h3>
            <div className="flex flex-col space-y-6">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => { toggleCategory(cat); setIsFilterOpen(false); }}
                  className={cn(
                    "text-3xl font-serif text-left",
                    activeCategory === cat ? "text-[#1A1A1A]" : "text-muted-foreground opacity-50"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
