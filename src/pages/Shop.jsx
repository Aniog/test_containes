import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config';
import strkImgConfig from '../strk-img-config.json';
import ProductCard from '../components/products/ProductCard';
import { Filter, ChevronDown, X } from 'lucide-react';
import { cn } from '../lib/utils';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const containerRef = useRef(null);

  const category = searchParams.get('category') || 'All';
  const sort = searchParams.get('sort') || 'newest';

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        let query = client.from('Products').select('*');
        
        if (category !== 'All') {
          query = query.eq('category', category);
        }

        if (sort === 'price-low') {
          query = query.order('price', { ascending: true });
        } else if (sort === 'price-high') {
          query = query.order('price', { ascending: false });
        } else {
          query = query.order('created_at', { ascending: false });
        }

        const { data, error } = await query;
        if (error) throw error;
        setProducts(data?.list || []);
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [category, sort]);

  useEffect(() => {
    if (!isLoading) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isLoading, products]);

  const categories = ['All', 'Necklaces', 'Earrings', 'Huggies'];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6" ref={containerRef}>
      <div className="text-center mb-16">
        <h1 className="text-sm serif-caps mb-4 tracking-[0.4em]">Collection</h1>
        <h2 className="text-4xl md:text-6xl font-serif">
          {category === 'All' ? 'Everything' : category}
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters - Desktop */}
        <aside className="hidden lg:block w-64 space-y-10">
          <div>
            <h3 className="serif-caps text-[10px] mb-6">Categories</h3>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <button 
                    onClick={() => {
                      searchParams.set('category', cat);
                      setSearchParams(searchParams);
                    }}
                    className={cn(
                      "text-sm font-sans tracking-wide transition-colors",
                      category === cat ? "text-stone-900 font-medium" : "text-stone-400 hover:text-stone-900"
                    )}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="serif-caps text-[10px] mb-6">Material</h3>
            <ul className="space-y-3 text-sm text-stone-400 font-sans tracking-wide">
              <li><label className="flex items-center space-x-3 cursor-pointer hover:text-stone-900"><input type="checkbox" className="accent-stone-900" defaultChecked /> <span>18K Gold Plated</span></label></li>
              <li><label className="flex items-center space-x-3 cursor-pointer hover:text-stone-900"><input type="checkbox" className="accent-stone-900" /> <span>Sterling Silver</span></label></li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Controls */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-100">
            <button 
              className="lg:hidden flex items-center space-x-2 text-xs serif-caps"
              onClick={() => setShowMobileFilters(true)}
            >
              <Filter size={16} />
              <span>Filters</span>
            </button>

            <p className="hidden md:block text-[10px] text-stone-400 serif-caps">
              Showing {products.length} products
            </p>

            <div className="flex items-center space-x-2">
              <span className="text-[10px] serif-caps text-stone-400">Sort by:</span>
              <select 
                className="bg-transparent text-xs font-sans focus:outline-none cursor-pointer"
                value={sort}
                onChange={(e) => {
                  searchParams.set('sort', e.target.value);
                  setSearchParams(searchParams);
                }}
              >
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
            {isLoading ? (
              Array(6).fill(0).map((_, i) => (
                <div key={i} className="animate-pulse space-y-4">
                  <div className="aspect-[3/4] bg-stone-200" />
                  <div className="h-4 bg-stone-200 w-3/4" />
                  <div className="h-4 bg-stone-200 w-1/4" />
                </div>
              ))
            ) : products.length > 0 ? (
              products.map((product) => <ProductCard key={product.id} product={product} />)
            ) : (
              <div className="col-span-full py-24 text-center">
                <p className="font-serif italic text-stone-400">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-[100] lg:hidden transition-opacity duration-300",
          showMobileFilters ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-stone-900/40" onClick={() => setShowMobileFilters(false)} />
        <div className={cn(
          "absolute bottom-0 left-0 w-full bg-white transition-transform duration-500 rounded-t-3xl p-8",
          showMobileFilters ? "translate-y-0" : "translate-y-full"
        )}>
          <div className="flex justify-between items-center mb-10">
            <h3 className="serif-caps text-lg">Filters</h3>
            <button onClick={() => setShowMobileFilters(false)}><X size={24} /></button>
          </div>
          
          <div className="space-y-10">
            <div>
              <h4 className="serif-caps text-[10px] mb-6">Categories</h4>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => {
                      searchParams.set('category', cat);
                      setSearchParams(searchParams);
                    }}
                    className={cn(
                      "px-6 py-2 text-xs border transition-all",
                      category === cat ? "bg-stone-900 text-white border-stone-900" : "border-stone-200 text-stone-500"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <button 
              className="w-full btn-primary py-4"
              onClick={() => setShowMobileFilters(false)}
            >
              Show Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
