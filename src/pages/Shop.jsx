import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useLocation, Link, useSearchParams } from 'react-router-dom';
import { getProducts } from '@/api/products';
import Navbar from '@/components/layout/Navbar';
import CartDrawer from '@/components/layout/CartDrawer';
import ProductCard from '@/components/products/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, ChevronDown } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const containerRef = useRef(null);

  const initialCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!loading && containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    const cat = searchParams.get('category');
    if (cat && cat !== 'all') {
      result = result.filter(p => p.category === cat);
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, searchParams, sortBy]);

  const categories = [
    { id: 'all', name: 'All Collection' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
  ];

  const toggleCategory = (id) => {
    if (id === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', id);
    }
    setSearchParams(searchParams);
  };

  if (loading) return <div className="min-h-screen bg-[#FDFCF8] flex items-center justify-center font-serif italic uppercase tracking-widest text-sm">Loading Store...</div>;

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FDFCF8]">
      <Navbar />
      <CartDrawer />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <header className="mb-16 text-center">
           <h1 className="text-4xl sm:text-5xl font-serif uppercase tracking-[0.1em] mb-4">Shop the Archive</h1>
           <p className="text-[#717171] text-xs uppercase tracking-[0.2em]">Demi-Fine Essentials</p>
        </header>

        {/* Filters & Grid */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 space-y-12">
             <div className="space-y-6">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold pb-4 border-b border-[#E5E5E5]">Categories</h3>
                <div className="flex flex-col gap-4">
                   {categories.map(cat => (
                     <button 
                       key={cat.id}
                       onClick={() => toggleCategory(cat.id)}
                       className={`text-xs tracking-widest uppercase text-left transition-colors ${
                         (searchParams.get('category') || 'all') === cat.id 
                            ? 'text-[#C5A059] font-bold' 
                            : 'text-[#717171] hover:text-[#1A1A1A]'
                       }`}
                     >
                       {cat.name}
                     </button>
                   ))}
                </div>
             </div>

             <div className="space-y-6">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold pb-4 border-b border-[#E5E5E5]">Price Range</h3>
                <div className="space-y-3 text-xs text-[#717171] uppercase tracking-widest leading-loose italic">
                   Under $50 <br />
                   $50 - $100 <br />
                   $100+
                </div>
             </div>
          </aside>

          {/* Controls - Mobile */}
          <div className="lg:hidden flex items-center justify-between py-4 border-y border-[#E5E5E5] mb-8">
             <button 
               onClick={() => setIsFilterOpen(true)}
               className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold"
             >
               <Filter className="w-4 h-4" /> Filter
             </button>
             <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
               Sort By <ChevronDown className="w-3 h-3" />
             </div>
          </div>

          {/* Product Grid */}
          <div className="flex-grow">
             <div className="flex justify-between items-center mb-10 hidden lg:flex">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#717171]">Showing {filteredProducts.length} items</p>
                <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest font-bold">
                   <span className="text-[#C5A059]">Sort By:</span>
                   <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent outline-none cursor-pointer"
                   >
                     <option value="newest">Newest</option>
                     <option value="price-low">Price: Low to High</option>
                     <option value="price-high">Price: High to Low</option>
                   </select>
                </div>
             </div>

             <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
             </div>

             {filteredProducts.length === 0 && (
               <div className="py-24 text-center">
                  <p className="font-serif italic text-[#717171]">No pieces found matching your criteria.</p>
                  <button onClick={() => toggleCategory('all')} className="mt-6 text-[10px] uppercase tracking-widest border-b border-[#1A1A1A]">View all collection</button>
               </div>
             )}
          </div>
        </div>
      </main>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/30 z-[60] backdrop-blur-sm"
            />
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="fixed inset-x-0 bottom-0 bg-[#FDFCF8] z-[70] p-8 rounded-t-3xl overflow-y-auto max-h-[80vh]"
            >
              <div className="flex justify-between items-center mb-10 pb-6 border-b border-[#E5E5E5]">
                 <h2 className="font-serif text-2xl">Filters</h2>
                 <button onClick={() => setIsFilterOpen(false)}><X className="w-6 h-6" /></button>
              </div>
              
              <div className="space-y-12 mb-12">
                <div className="space-y-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#717171]">By Category</p>
                  <div className="flex flex-wrap gap-3">
                     {categories.map(cat => (
                       <button 
                        key={cat.id} 
                        onClick={() => toggleCategory(cat.id)}
                        className={`px-6 py-3 text-[10px] uppercase tracking-widest border ${
                          (searchParams.get('category') || 'all') === cat.id 
                            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' 
                            : 'border-[#E5E5E5] text-[#1A1A1A]'
                        }`}
                       >
                         {cat.name}
                       </button>
                     ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#717171]">By Price</p>
                  <div className="flex flex-col gap-4 text-xs tracking-widest uppercase italic">
                     Under $50 <br />
                     $50 - $100 <br />
                     $100+
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsFilterOpen(false)}
                className="w-full bg-[#1A1A1A] text-white py-4 tracking-widest text-xs font-bold uppercase transition-luxury"
              >
                Show {filteredProducts.length} Results
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <footer className="py-20 px-6 border-t border-[#E5E5E5] text-center">
          <p className="text-[10px] text-[#717171] uppercase tracking-[0.1em]">© 2026 Velmora Fine Jewelry.</p>
      </footer>
    </div>
  );
};

export default Shop;
