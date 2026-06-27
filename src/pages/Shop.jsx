import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '@/api/products';
import ProductCard from '@/components/shop/ProductCard';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const containerRef = useRef(null);
  
  const category = searchParams.get('category') || 'All';
  const sort = searchParams.get('sort') || 'newest';

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts({ category });
        
        // Handle sorting manually for demonstration
        let sorted = [...data];
        if (sort === 'price-low') sorted.sort((a, b) => a.data.price - b.data.price);
        if (sort === 'price-high') sorted.sort((a, b) => b.data.price - a.data.price);
        
        setProducts(sorted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [category, sort]);

  useEffect(() => {
    if (!loading) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, products]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const sortOptions = [
    { label: 'Newest', value: 'newest' },
    { label: 'Price: Low to High', value: 'price-low' },
    { label: 'Price: High to Low', value: 'price-high' }
  ];

  const handleCategoryChange = (cat) => {
    setSearchParams({ category: cat, sort });
  };

  const handleSortChange = (e) => {
    setSearchParams({ category, sort: e.target.value });
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-primary-bg min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-serif">All Jewelry</h1>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Timeless pieces for your collection</p>
        </div>

        {/* Filters & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 py-6 border-y border-stone animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="hidden md:flex items-center space-x-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={cn(
                  "text-[10px] uppercase tracking-[0.2em] transition-colors hover:text-accent font-medium",
                  category === cat ? "text-accent border-b border-accent pb-1" : "text-muted"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between w-full md:w-auto space-x-8">
            <button 
              className="md:hidden flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-muted font-medium"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal size={14} />
              <span>Filter</span>
            </button>

            <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.2em] text-muted font-medium">
              <span>Sort By:</span>
              <select 
                value={sort}
                onChange={handleSortChange}
                className="bg-transparent border-none focus:ring-0 text-accent font-medium cursor-pointer"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Mobile Filters Dropdown */}
        {showFilters && (
          <div className="md:hidden grid grid-cols-2 gap-4 mb-8 p-4 bg-white border border-stone animate-in fade-in slide-in-from-top-2">
             {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { handleCategoryChange(cat); setShowFilters(false); }}
                className={cn(
                  "text-[10px] uppercase tracking-[0.2em] text-left py-2",
                  category === cat ? "text-accent font-bold" : "text-muted"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Results */}
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="animate-pulse space-y-4">
                <div className="aspect-[4/5] bg-stone/20" />
                <div className="h-4 bg-stone/20 w-3/4 mx-auto" />
                <div className="h-4 bg-stone/20 w-1/4 mx-auto" />
              </div>
            ))}
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-muted tracking-widest uppercase text-sm">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
