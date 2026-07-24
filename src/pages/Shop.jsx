import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { ChevronDown, SlidersHorizontal, Grid, LayoutGrid } from 'lucide-react';
import { cn } from '@/lib/utils';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const data = product.data;

  return (
    <div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-[#1C1C1C] mb-5">
        <img 
          src={isHovered && data.hover_image_url ? data.hover_image_url : data.image_url} 
          alt={data.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-[#C5A059] text-[#121212] py-5 uppercase text-[10px] tracking-[0.2em] font-bold"
        >
          Add to Cart
        </button>
      </Link>
      <div className="flex flex-col items-center text-center">
        <h3 className="text-xs uppercase tracking-[0.2em] font-serif mb-2 group-hover:text-[#C5A059] transition-colors leading-relaxed">
          {data.name}
        </h3>
        <p className="text-sm font-light text-white/40">${data.price}</p>
      </div>
    </div>
  );
};

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const category = searchParams.get('category') || 'All';
  const sortBy = searchParams.get('sort') || 'featured';

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      let query = client.from('Product').select('*');
      
      if (category !== 'All') {
        query = query.eq('category', category);
      }

      if (sortBy === 'price-low') {
        // Post-processing sort might be easier if SDK query support is limited
      }

      const { data: response } = await query;
      if (response?.success) {
        let list = response.data.list;
        
        // Manual sorting for demo
        if (sortBy === 'price-low') list.sort((a,b) => a.data.price - b.data.price);
        if (sortBy === 'price-high') list.sort((a,b) => b.data.price - a.data.price);
        
        setProducts(list);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [category, sortBy]);

  const containerRef = useRef(null);
  useEffect(() => {
    if (!loading) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, products]);

  return (
    <div ref={containerRef} className="pt-32 pb-24 min-h-screen">
      <div className="px-6 md:px-12 max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-20">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] mb-4">Adornment</p>
          <h1 className="text-5xl md:text-6xl font-serif text-center mb-8">
            {category === 'All' ? 'The Collection' : category}
          </h1>
          <div className="w-12 h-[1px] bg-white/20" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between py-6 border-y border-white/5 mb-12">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter</span>
          </button>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSearchParams({ category: cat, sort: sortBy })}
                  className={cn(
                    "text-[10px] uppercase tracking-[0.2em] font-medium transition-colors hover:text-[#C5A059]",
                    category === cat ? "text-[#C5A059]" : "text-white/40"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative group">
              <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium hover:text-[#C5A059]">
                <span>Sort: {sortBy.replace('-', ' ')}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-[#1C1C1C] border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                <div className="p-2 flex flex-col gap-1">
                  {['featured', 'price-low', 'price-high'].map(option => (
                    <button
                      key={option}
                      onClick={() => setSearchParams({ category, sort: option })}
                      className="text-[10px] uppercase tracking-widest p-3 text-left hover:bg-white/5 transition-colors w-full"
                    >
                      {option.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 md:gap-x-10 gap-y-16">
          {loading ? (
            Array(10).fill(0).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-white/5 mb-4" />
                <div className="h-4 bg-white/5 w-3/4 mx-auto mb-2" />
                <div className="h-4 bg-white/5 w-1/4 mx-auto" />
              </div>
            ))
          ) : (
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>

        {!loading && products.length === 0 && (
          <div className="py-40 text-center">
            <p className="font-serif italic text-white/40 text-xl">No treasures found in this category.</p>
            <button 
              onClick={() => setSearchParams({ category: 'All' })}
              className="mt-6 text-xs uppercase tracking-widest border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
