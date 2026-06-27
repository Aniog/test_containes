import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { useCart } from '../lib/CartContext';
import { toast } from 'sonner';
import { Filter, ChevronDown, Grid, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const category = searchParams.get('category') || 'All';
  const sort = searchParams.get('sort') || 'newest';

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let query = client.from('Products').select('*');
        
        if (category !== 'All') {
          query = query.eq('category', category);
        }

        const { data: response } = await query;
        if (response?.data?.list) {
          setProducts(response.data.list);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category, sort]);

  useEffect(() => {
    if (products.length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [products]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif tracking-wide mb-4">The Collection</h1>
        <p className="text-brand-slate text-xs font-sans tracking-[0.2em] uppercase">Elegance in Every Detail</p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 py-4 border-y border-black/5 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSearchParams({ category: cat })}
                className={`text-[10px] font-sans tracking-[0.2em] uppercase transition-colors ${
                  category === cat ? 'text-brand-ebony font-bold border-b border-brand-gold' : 'text-brand-slate hover:text-brand-ebony'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="relative group cursor-pointer flex items-center space-x-2 text-[10px] font-sans tracking-[0.2em] uppercase">
            <span>Sort by: {sort}</span>
            <ChevronDown size={14} />
          </div>
        </div>
      </div>

      <div className="flex gap-12">
        {/* Main Grid */}
        <div className="flex-1">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[1,2,3,4].map(i => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[3/4] bg-brand-cream mb-4" />
                  <div className="h-3 bg-brand-cream w-2/3 mb-2" />
                  <div className="h-3 bg-brand-cream w-1/3" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
              <AnimatePresence>
                {products.map((product) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={product.id} 
                    className="group"
                  >
                    <Link to={`/product/${product.id}`} className="relative aspect-[3/4] bg-brand-cream overflow-hidden block mb-6">
                      <img 
                        data-strk-img-id={`shop-img-${product.id}`}
                        data-strk-img={`[shop-title-${product.id}] gold jewelry portrait`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.data.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart({
                              id: product.id,
                              name: product.data.name,
                              price: product.data.price,
                              category: product.data.category
                            });
                            toast.success(`${product.data.name} added to bag`);
                          }}
                          className="w-full py-3 bg-white/90 backdrop-blur-sm text-brand-ebony text-[10px] tracking-widest uppercase font-sans font-semibold hover:bg-brand-ebony hover:text-white transition-colors"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </Link>
                    <h3 id={`shop-title-${product.id}`} className="text-xs font-serif tracking-[0.15em] uppercase font-medium mb-1">
                      {product.data.name}
                    </h3>
                    <p className="text-xs font-sans text-brand-slate tracking-wide">
                      ${product.data.price}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
              {products.length === 0 && (
                <div className="col-span-full py-20 text-center">
                  <p className="font-serif text-xl italic text-brand-slate">No pieces found in this category.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
