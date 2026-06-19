import React, { useEffect, useRef, useState } from 'react';
import Layout from '../Layout';
import { useSearchParams, Link } from 'react-router-dom';
import { ImageHelper, DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import strkImgConfig from '../strk-img-config.json';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Filter, X } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  const categoryFilter = searchParams.get('category') || 'All';
  const sortFilter = searchParams.get('sort') || 'featured';

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      let query = client.from('Product').select('*');
      
      if (categoryFilter !== 'All') {
        query = query.eq('category', categoryFilter);
      }

      if (sortFilter === 'price-low') {
        query = query.order('price', { ascending: true });
      } else if (sortFilter === 'price-high') {
        query = query.order('price', { ascending: false });
      }

      const { data: response } = await query;
      
      if (response?.data?.list) {
        setProducts(response.data.list);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, [categoryFilter, sortFilter]);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [products]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
  ];

  const toggleCategory = (cat) => {
    const newParams = new URLSearchParams(searchParams);
    if (cat === 'All') {
      newParams.delete('category');
    } else {
      newParams.set('category', cat);
    }
    setSearchParams(newParams);
  };

  return (
    <Layout>
      <div className="pt-32 pb-24 px-6 md:px-12 bg-white" ref={containerRef}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-serif text-brand-charcoal mb-6"> {categoryFilter !== 'All' ? categoryFilter : 'All Jewelry'} </h1>
            <p className="text-sm font-sans text-brand-espresso/50 uppercase tracking-[0.2em]">Crafted with intention, designed for you.</p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-12 py-6 border-y border-brand-charcoal/5">
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold hover:text-brand-gold transition-colors"
            >
              <Filter size={16} /> Filters
            </button>

            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-espresso/40 hidden md:block">Sort By:</span>
              <div className="relative group">
                <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
                  {sortOptions.find(o => o.value === sortFilter)?.label} <ChevronDown size={14} />
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-xl border border-brand-charcoal/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                  {sortOptions.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        const newParams = new URLSearchParams(searchParams);
                        newParams.set('sort', opt.value);
                        setSearchParams(newParams);
                      }}
                      className="w-full text-left px-6 py-4 text-[10px] uppercase tracking-widest hover:bg-brand-cream transition-colors"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar (Mobile Overlay) */}
          <AnimatePresence>
            {isFilterOpen && (
              <>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsFilterOpen(false)}
                  className="fixed inset-0 bg-brand-charcoal/20 backdrop-blur-sm z-[60]"
                />
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  className="fixed top-0 left-0 h-full w-full max-w-xs bg-white z-[70] shadow-2xl p-8"
                >
                  <div className="flex items-center justify-between mb-12">
                    <h2 className="text-sm uppercase tracking-widest font-bold">Filters</h2>
                    <button onClick={() => setIsFilterOpen(false)}><X size={20} /></button>
                  </div>

                  <div className="space-y-10">
                    <div>
                      <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-espresso/40 mb-6">Category</h3>
                      <div className="space-y-4">
                        {categories.map(cat => (
                          <button
                            key={cat}
                            onClick={() => { toggleCategory(cat); setIsFilterOpen(false); }}
                            className={cn(
                              "block text-xs uppercase tracking-widest transition-colors",
                              categoryFilter === cat ? "text-brand-gold font-bold" : "text-brand-charcoal hover:text-brand-gold"
                            )}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-10 md:gap-y-16">
            {isLoading ? (
              Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="animate-pulse space-y-4">
                  <div className="aspect-[3/4] bg-brand-cream" />
                  <div className="h-4 bg-brand-cream w-2/3" />
                  <div className="h-4 bg-brand-cream w-1/3" />
                </div>
              ))
            ) : products.length > 0 ? (
              products.map((product) => {
                const fields = product.data;
                return (
                  <motion.div 
                    key={product.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="group"
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-brand-cream shadow-sm">
                        <img
                          data-strk-img={`[shop-item-${product.id}-title] jewelry product high end`}
                          data-strk-img-id={`shop-${product.id}`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="w-full h-full object-cover transition-soft group-hover:scale-105"
                          alt={fields.name}
                        />
                        <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/5 transition-soft" />
                      </div>
                      <h3 id={`shop-item-${product.id}-title`} className="text-xs uppercase tracking-[0.2em] font-bold mb-2 text-brand-charcoal">
                        {fields.name}
                      </h3>
                      <p className="text-xs text-brand-espresso/40 font-semibold">$ {fields.price}</p>
                    </Link>
                  </motion.div>
                );
              })
            ) : (
              <div className="col-span-full py-24 text-center">
                <p className="font-serif text-2xl text-brand-espresso/40">No pieces found matching your criteria.</p>
                <button 
                  onClick={() => {setSearchParams({}); toggleCategory('All');}}
                  className="mt-6 text-xs uppercase tracking-widest font-bold border-b border-brand-charcoal pb-1"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}
