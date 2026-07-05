import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import ProductCard from '../components/shop/ProductCard';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '../lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const containerRef = useRef(null);

  const category = searchParams.get('category') || 'All';
  const sort = searchParams.get('sort') || 'featured';

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
  const sorts = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);
      let query = client.from('Products').select('*');

      if (category !== 'All') {
        query = query.eq('category', category);
      }

      if (sort === 'price-asc') {
        query = query.order('price', { ascending: true });
      } else if (sort === 'price-desc') {
        query = query.order('price', { ascending: false });
      }

      const { data: response } = await query;
      if (response?.data?.list) {
        setProducts(response.data.list);
      }
      setIsLoading(false);
    };

    fetchProducts();
  }, [category, sort]);

  useEffect(() => {
    if (products.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [products]);

  const toggleCategory = (cat) => {
    setSearchParams({ category: cat, sort });
    setIsSidebarOpen(false);
  };

  const toggleSort = (newSort) => {
    setSearchParams({ category, sort: newSort });
  };

  return (
    <div ref={containerRef} className="pt-24 lg:pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-screen-2xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 border-b pb-12">
          <div className="space-y-4">
            <nav className="text-[10px] uppercase tracking-widest text-muted-foreground flex gap-2">
              <Link to="/">Home</Link> / <span className="text-foreground">Shop All</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight">
              {category === 'All' ? 'The Collection' : category}
            </h1>
          </div>
          
          <div className="flex items-center gap-6 w-full md:w-auto">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-semibold py-2 px-4 border"
            >
              <SlidersHorizontal size={14} /> Filter
            </button>
            <div className="relative group ml-auto md:ml-0">
               <button className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold py-2 px-4 border hover:bg-muted/30 transition-colors">
                 Sort By: {sorts.find(s => s.value === sort)?.label} <ChevronDown size={14} />
               </button>
               <div className="absolute top-full right-0 mt-1 w-48 bg-white border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-40">
                  {sorts.map(s => (
                    <button 
                      key={s.value}
                      onClick={() => toggleSort(s.value)}
                      className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest hover:bg-muted/50 transition-colors border-b last:border-0"
                    >
                      {s.label}
                    </button>
                  ))}
               </div>
            </div>
          </div>
        </div>

        <div className="flex gap-16">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 space-y-12 flex-shrink-0">
            <div className="space-y-6">
              <h4 className="font-serif text-sm tracking-widest uppercase border-b pb-4">Categories</h4>
              <ul className="space-y-4">
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => toggleCategory(cat)}
                      className={cn(
                        "text-xs uppercase tracking-widest hover:text-accent transition-colors",
                        category === cat ? "text-accent font-bold underline underline-offset-8" : "text-muted-foreground"
                      )}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6 pt-12">
               <h4 className="font-serif text-sm tracking-widest uppercase border-b pb-4">Style</h4>
               <ul className="space-y-4">
                 {['Minimalist', 'Statement', 'Vintage Inspired', 'Daily Wear'].map(style => (
                   <li key={style} className="flex items-center gap-3">
                     <div className="w-3 h-3 border border-muted-foreground/30 flex-shrink-0" />
                     <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{style}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            {isLoading ? (
               <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="space-y-4 animate-pulse">
                      <div className="aspect-[3/4] bg-muted/30 w-full" />
                      <div className="h-4 bg-muted/30 w-3/4 mx-auto" />
                      <div className="h-4 bg-muted/30 w-1/4 mx-auto" />
                    </div>
                  ))}
               </div>
            ) : products.length === 0 ? (
               <div className="text-center py-24 space-y-6">
                 <p className="font-serif text-2xl">No pieces found in this category.</p>
                 <button onClick={() => toggleCategory('All')} className="text-xs uppercase tracking-widest border-b pb-1">Reset Filters</button>
               </div>
            ) : (
               <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
                 {products.map((item) => (
                   <ProductCard key={item.id} product={item.data ? { ...item.data, id: item.id } : item} />
                 ))}
               </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isSidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[100] transition-opacity" onClick={() => setIsSidebarOpen(false)} />
          <div className="fixed top-0 left-0 bottom-0 w-80 bg-white z-[110] p-10 flex flex-col animate-in slide-in-from-left duration-500">
             <div className="flex justify-between items-center mb-12">
               <h2 className="font-serif text-xl tracking-widest uppercase">Filters</h2>
               <button onClick={() => setIsSidebarOpen(false)}><X size={20} /></button>
             </div>
             <div className="space-y-12 overflow-y-auto">
                <div className="space-y-6">
                  <h4 className="font-serif text-xs tracking-widest uppercase border-b pb-4">Categories</h4>
                  <ul className="space-y-6">
                    {categories.map(cat => (
                      <li key={cat}>
                        <button 
                          onClick={() => toggleCategory(cat)}
                          className={cn(
                            "text-[10px] uppercase tracking-widest w-full text-left",
                            category === cat ? "text-accent font-bold" : "text-muted-foreground"
                          )}
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
             </div>
          </div>
        </>
      )}
    </div>
  );
};

// Removed local Link helper to use react-router-dom Link

export default Shop;
