import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sort]);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category.toLowerCase() === activeCategory);
    }
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [activeCategory, sort]);

  const setCategory = (category) => {
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <Navbar />
      <CartDrawer />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-[#3d3229] tracking-wide">Shop</h1>
              <p className="mt-2 text-sm text-[#8c7b6b]">{filteredProducts.length} products</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase text-[#3d3229] border border-[#e8e0d5] px-4 py-2 rounded-full"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-transparent border border-[#e8e0d5] text-xs tracking-widest uppercase text-[#3d3229] pl-4 pr-10 py-2 rounded-full focus:outline-none focus:border-[#b08d57]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8c7b6b] pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex gap-10">
            <aside className={`${mobileFiltersOpen ? 'fixed inset-0 z-40 bg-white p-6' : 'hidden'} md:block md:static md:w-56 md:flex-shrink-0`}>
              <div className="md:sticky md:top-28">
                <h3 className="text-xs tracking-widest uppercase text-[#3d3229] mb-4">Category</h3>
                <ul className="space-y-2">
                  <li>
                    <button onClick={() => setCategory('all')} className={`text-sm ${activeCategory === 'all' ? 'text-[#b08d57] font-medium' : 'text-[#8c7b6b] hover:text-[#b08d57]'}`}>
                      All
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button onClick={() => setCategory(cat.id)} className={`text-sm ${activeCategory === cat.id ? 'text-[#b08d57] font-medium' : 'text-[#8c7b6b] hover:text-[#b08d57]'}`}>
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xs tracking-widest uppercase text-[#3d3229] mt-8 mb-4">Price</h3>
                <ul className="space-y-2">
                  {['Under $50', '$50 - $75', '$75 - $100', 'Over $100'].map((range) => (
                    <li key={range}>
                      <button className="text-sm text-[#8c7b6b] hover:text-[#b08d57]">{range}</button>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xs tracking-widest uppercase text-[#3d3229] mt-8 mb-4">Material</h3>
                <ul className="space-y-2">
                  {['18K Gold Plated', 'Silver Tone', 'Crystal', 'Hypoallergenic'].map((mat) => (
                    <li key={mat}>
                      <button className="text-sm text-[#8c7b6b] hover:text-[#b08d57]">{mat}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-[#3d3229]">No products found in this category.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
