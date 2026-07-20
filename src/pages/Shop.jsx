import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '../api/products';
import ProductCard from '../components/ProductCard';
import { ChevronDown, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    let result = [...products];
    if (activeCategory !== 'all') {
      result = result.filter(p => p.data?.category?.toLowerCase() === activeCategory.toLowerCase());
    }

    // Sort
    if (sortBy === 'price-low') result.sort((a, b) => a.data.price - b.data.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.data.price - a.data.price);

    setFilteredProducts(result);
  }, [products, activeCategory, sortBy]);

  const categories = [
    { name: 'All Pieces', slug: 'all' },
    { name: 'Earrings', slug: 'earrings' },
    { name: 'Necklaces', slug: 'necklaces' },
    { name: 'Huggies', slug: 'huggies' },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-24 px-6 md:px-12 bg-velmora-stone min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-dark capitalize">
            {activeCategory === 'all' ? 'Shop All' : activeCategory}
          </h1>
          <p className="text-velmora-muted font-serif italic text-lg">
            Timeless designs for your everyday collection.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-velmora-dark/5">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-sans font-bold text-velmora-dark hover:text-velmora-gold transition-colors"
          >
            <Filter size={16} /> Filters
          </button>

          <div className="flex items-center gap-4">
            <span className="hidden md:block text-[10px] uppercase tracking-widest text-velmora-muted font-sans underline underline-offset-4 decoration-velmora-dark/10">
              {filteredProducts.length} Results
            </span>
            <div className="relative group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-[10px] uppercase tracking-widest font-sans font-bold pr-8 focus:outline-none cursor-pointer"
              >
                <option value="newest">Sort: Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-4 md:gap-x-12">
          {loading ? (
            [...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse space-y-4">
                <div className="aspect-[3/4] bg-velmora-dark/5" />
                <div className="h-4 bg-velmora-dark/5 w-2/3 mx-auto" />
                <div className="h-4 bg-velmora-dark/5 w-1/3 mx-auto" />
              </div>
            ))
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full py-24 text-center">
              <p className="font-serif italic text-velmora-muted text-xl">No pieces found in this category.</p>
              <button
                onClick={() => setSearchParams({ category: 'all' })}
                className="mt-4 text-xs uppercase tracking-exclusive font-sans border-b border-velmora-dark pb-1"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile/Filter Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-velmora-dark/30 backdrop-blur-[2px] z-[60]"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed top-0 left-0 bottom-0 w-full max-w-xs bg-velmora-stone z-[70] p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="font-serif text-2xl uppercase tracking-widest">Filters</h2>
                <button onClick={() => setIsSidebarOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-[10px] uppercase tracking-widest font-sans font-bold border-b border-velmora-dark/5 pb-2">Category</h3>
                  <div className="flex flex-col space-y-4">
                    {categories.map((cat) => (
                      <button
                        key={cat.slug}
                        onClick={() => {
                          setSearchParams({ category: cat.slug });
                          setIsSidebarOpen(false);
                        }}
                        className={cn(
                          "text-left text-sm font-serif italic transition-colors",
                          activeCategory === cat.slug ? "text-velmora-gold font-bold" : "text-velmora-dark hover:text-velmora-gold"
                        )}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-[10px] uppercase tracking-widest font-sans font-bold border-b border-velmora-dark/5 pb-2">Material</h3>
                  <div className="flex flex-col space-y-4 opacity-50 cursor-not-allowed">
                    <span className="text-sm font-serif italic">18K Gold Plated (5)</span>
                    <span className="text-sm font-serif italic">Sterling Silver (0)</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="w-full bg-velmora-dark text-white py-4 uppercase tracking-exclusive text-[10px] font-sans font-semibold"
                >
                  Show Results
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
