import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = ({ products, onAddToCart }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const selectedCategory = searchParams.get('category') || 'all';
  const selectedSort = searchParams.get('sort') || 'featured';

  const categories = ['all', 'earrings', 'necklaces', 'rings', 'sets'];
  const sortOptions = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedSort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, selectedSort, products]);

  const updateCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat === 'all') params.delete('category');
    else params.set('category', cat);
    setSearchParams(params);
  };

  const updateSort = (val) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', val);
    setSearchParams(params);
  };

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 bg-velmora-alabaster min-h-screen">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-serif">The Collection</h1>
            <p className="text-velmora-grey font-sans text-sm tracking-widest uppercase">
              {filteredProducts.length} Pieces
            </p>
          </div>

          <div className="flex items-center space-x-6">
             {/* Sort Select */}
             <div className="relative group">
                <div className="flex items-center space-x-2 cursor-pointer pb-1 border-b border-velmora-charcoal/20">
                    <span className="text-[10px] uppercase tracking-widest font-bold">Sort By</span>
                    <ChevronDown className="w-4 h-4" />
                </div>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-xl border border-velmora-charcoal/5 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                    {sortOptions.map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => updateSort(opt.value)}
                            className={`w-full text-left px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-velmora-charcoal/5 transition-colors ${selectedSort === opt.value ? 'font-bold' : ''}`}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
             </div>

             <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold border-b border-velmora-charcoal/20 pb-1"
             >
                <Filter className="w-4 h-4" />
                <span>Filter</span>
             </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0 space-y-12">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold mb-6 font-sans">Category</h3>
              <div className="flex flex-col space-y-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => updateCategory(cat)}
                    className={`text-sm text-left uppercase tracking-widest hover:text-velmora-gold transition-colors font-sans ${selectedCategory === cat ? 'text-velmora-gold font-bold' : 'text-velmora-grey'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-12 border-t border-velmora-charcoal/10">
              <h3 className="text-xs uppercase tracking-widest font-bold mb-6 font-sans">Material</h3>
              <div className="flex flex-col space-y-4">
                {['18K Gold Plated', 'Cubic Zirconia', 'Mixed Crystals'].map((m) => (
                   <label key={m} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="w-3 h-3 border border-velmora-charcoal/30 flex items-center justify-center group-hover:border-velmora-gold transition-colors">
                        <div className="w-1.5 h-1.5 bg-velmora-gold scale-0 group-hover:scale-100 transition-transform" />
                      </div>
                      <span className="text-xs uppercase tracking-widest text-velmora-grey group-hover:text-velmora-charcoal font-sans transition-colors">{m}</span>
                   </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
                <div className="py-24 text-center">
                    <p className="font-serif text-2xl text-velmora-grey">No pieces found matching your criteria.</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-16">
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="group"
                    >
                      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-velmora-charcoal/5 mb-6">
                        <img
                          data-strk-img-id={`shop-product-${product.id}`}
                          data-strk-img={`[shop-product-title-${product.id}] gold jewelry luxury editorial`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            onAddToCart(product);
                          }}
                          className="absolute bottom-6 left-6 right-6 bg-velmora-alabaster text-velmora-charcoal py-4 text-[10px] uppercase tracking-widest font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                        >
                          Add to Bag
                        </button>
                      </Link>
                      <div className="text-center md:text-left px-2">
                        <h3 id={`shop-product-title-${product.id}`} className="text-xs uppercase tracking-widest font-serif font-medium mb-2 group-hover:text-velmora-gold transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm font-sans text-velmora-grey">{formatPrice(product.price)}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)} />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-velmora-alabaster p-8 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="text-2xl font-serif tracking-widest">Filter</span>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Category</h3>
                  <div className="flex flex-col space-y-4">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                            updateCategory(cat);
                            setIsFilterOpen(false);
                        }}
                        className={`text-lg text-left uppercase tracking-widest font-serif ${selectedCategory === cat ? 'text-velmora-gold' : 'text-velmora-grey'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-12 border-t border-velmora-charcoal/10">
                    <button
                        onClick={() => {
                            updateCategory('all');
                            setIsFilterOpen(false);
                        }}
                        className="w-full bg-velmora-charcoal text-velmora-alabaster py-4 text-[10px] uppercase tracking-widest font-bold"
                    >
                        Clear All
                    </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
