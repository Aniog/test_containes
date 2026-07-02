import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';
import { fetchProducts } from '../api/products';
import { ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '../lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const activeCategory = searchParams.get('category') || 'All';

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(p => p.data.category === activeCategory);
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.data.price - b.data.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.data.price - a.data.price);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    setFilteredProducts(result);
  }, [products, activeCategory, sortBy]);

  const handleCategoryChange = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Shop All</h1>
          <p className="text-muted text-sm uppercase tracking-widest font-light">
            {filteredProducts.length} Treasures Found
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center mb-10 py-4 border-y border-zinc-100">
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => handleCategoryChange('All')}
              className={cn(
                "text-[10px] uppercase tracking-[0.2em] transition-colors pb-1 border-b",
                activeCategory === 'All' ? "text-primary border-primary" : "text-zinc-400 border-transparent hover:text-primary"
              )}
            >
              All Jewelry
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={cn(
                  "text-[10px] uppercase tracking-[0.2em] transition-colors pb-1 border-b",
                  activeCategory === cat ? "text-primary border-primary" : "text-zinc-400 border-transparent hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="md:hidden flex items-center gap-2 text-[10px] uppercase tracking-widest">
            <Filter size={14} /> Filter
          </button>

          <div className="relative group">
            <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-semibold">
              Sort By: {sortBy.replace('-', ' ')} <ChevronDown size={14} />
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-zinc-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
              {[
                { label: 'Newest', value: 'newest' },
                { label: 'Price: Low to High', value: 'price-asc' },
                { label: 'Price: High to Low', value: 'price-desc' },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setSortBy(opt.value)}
                  className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest hover:bg-zinc-50 transition-colors"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 animate-pulse">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex flex-col">
                <div className="aspect-[3/4] bg-zinc-100 mb-4" />
                <div className="h-4 bg-zinc-100 w-2/3 mb-2" />
                <div className="h-4 bg-zinc-100 w-1/3" />
              </div>
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="py-32 text-center">
            <p className="font-serif italic text-muted text-xl mb-6">No pieces match your search.</p>
            <button onClick={() => handleCategoryChange('All')} className="text-xs uppercase tracking-widest underline">
              View All Jewelry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Mobile Filter Sidebar */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white p-8 animate-in slide-in-from-bottom duration-300">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold">Filter by Category</h3>
              <button onClick={() => setIsFilterOpen(false)}><X size={20} strokeWidth={1} /></button>
            </div>
            <div className="flex flex-col gap-6">
              {['All', ...categories].map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    handleCategoryChange(cat);
                    setIsFilterOpen(false);
                  }}
                  className={cn(
                    "text-lg font-serif text-left",
                    (activeCategory === cat || (cat === 'All' && activeCategory === 'All')) ? "text-accent" : "text-primary"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
