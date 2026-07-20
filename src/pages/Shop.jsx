import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Layout } from '../components/layout/Layout';
import { ProductCard } from '../components/ui/ProductCard';
import { products } from '../data/products';
import { ChevronDown, Filter } from 'lucide-react';

export default function Shop() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // We use a small timeout or requestAnimationFrame to ensure DOM is updated after filtering
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = products.filter(p => 
    activeCategory === 'All' ? true : p.category === activeCategory
  ).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0; // featured/default
  });

  return (
    <Layout>
      <div className="pt-32 pb-24" ref={containerRef}>
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 id="shop-title" className="text-4xl md:text-5xl mb-4 text-brand-900">
              {activeCategory === 'All' ? 'Complete Collection' : activeCategory}
            </h1>
            <p id="shop-desc" className="text-brand-600 font-light max-w-xl mx-auto">
              Curated pieces designed to elevate your everyday. Discover our collection of demi-fine jewelry.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters (Desktop) & Mobile Toggle */}
            <div className="lg:w-64 shrink-0">
              <div className="flex justify-between items-center lg:hidden mb-6">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 text-brand-900 uppercase tracking-widest text-sm font-medium"
                >
                  <Filter className="w-4 h-4" /> Filters
                </button>
                <div className="text-brand-500 text-sm">
                  {filteredProducts.length} Results
                </div>
              </div>

              <div className={`${showFilters ? 'block' : 'hidden'} lg:block sticky top-32`}>
                <div className="mb-10 text-brand-900 border border-brand-200 p-6 bg-white">
                  <h3 className="font-serif text-xl mb-4 pb-2 border-b border-brand-200">Category</h3>
                  <ul className="space-y-3 font-light">
                    {categories.map(cat => (
                      <li key={cat}>
                        <button 
                          className={`hover:text-accent transition-colors ${activeCategory === cat ? 'text-accent font-medium' : ''}`}
                          onClick={() => {
                            setActiveCategory(cat);
                            setShowFilters(false);
                          }}
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-brand-900 border border-brand-200 p-6 bg-white">
                   <h3 className="font-serif text-xl mb-4 pb-2 border-b border-brand-200">Price</h3>
                   <ul className="space-y-3 font-light text-brand-600">
                     <li><button className="hover:text-accent transition-colors">Under $50</button></li>
                     <li><button className="hover:text-accent transition-colors">$50 - $100</button></li>
                     <li><button className="hover:text-accent transition-colors">Over $100</button></li>
                   </ul>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              {/* Top Controls */}
              <div className="hidden lg:flex justify-between items-center mb-8 pb-4 border-b border-brand-200 text-brand-900">
                <span className="text-sm font-light text-brand-500">{filteredProducts.length} Results</span>
                <div className="flex items-center gap-2 relative group">
                  <span className="text-sm uppercase tracking-widest font-medium">Sort by:</span>
                  <select 
                    className="appearance-none bg-transparent border-none pr-6 focus:outline-none cursor-pointer font-light"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-24 text-brand-500">
                  <p className="font-serif text-2xl mb-4">No products found</p>
                  <button onClick={() => setActiveCategory('All')} className="btn-secondary">
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}