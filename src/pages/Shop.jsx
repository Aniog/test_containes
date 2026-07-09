import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/products/ProductCard';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  const activeCategory = searchParams.get('category') || 'All';

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let query = client.from('Product').select('*');
        
        if (activeCategory !== 'All') {
          query = query.eq('category', activeCategory);
        }

        const { data: response } = await query;
        let list = response?.data?.list || [];

        // Simple client-side sorting
        if (sortBy === 'price-low') {
          list = [...list].sort((a, b) => a.data.price - b.data.price);
        } else if (sortBy === 'price-high') {
          list = [...list].sort((a, b) => b.data.price - a.data.price);
        }

        setProducts(list);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [activeCategory, sortBy]);

  const toggleCategory = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-20 space-y-4">
        <h1 className="text-5xl md:text-7xl font-serif">
          {activeCategory === 'All' ? 'The Collection' : activeCategory}
        </h1>
        <p className="text-velmora-charcoal/60 uppercase tracking-[0.3em] text-[10px] font-bold">
          {products.length} Products
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center mb-12 border-b border-velmora-sand/30 pb-6">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 uppercase tracking-widest text-[10px] font-bold hover:text-velmora-gold transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>

        <div className="flex items-center gap-2 group relative">
          <span className="uppercase tracking-widest text-[10px] font-bold text-velmora-charcoal/40">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none bg-transparent uppercase tracking-widest text-[10px] font-bold outline-none cursor-pointer pr-4"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
          <ChevronDown className="w-3 h-3 absolute right-0 pointer-events-none" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters */}
        <div
          className={cn(
            'w-full md:w-64 space-y-12 transition-all duration-500 overflow-hidden',
            showFilters ? 'max-h-[1000px] opacity-100' : 'max-h-0 md:max-h-none opacity-0 md:opacity-100 md:w-0'
          )}
        >
          <div className="space-y-6">
            <h3 className="uppercase tracking-[0.2em] text-[11px] font-bold border-b border-velmora-sand/30 pb-2">Category</h3>
            <ul className="space-y-4">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => toggleCategory(cat)}
                    className={cn(
                      'uppercase tracking-widest text-[10px] transition-colors hover:text-velmora-gold',
                      activeCategory === cat ? 'text-velmora-gold font-bold' : 'text-velmora-charcoal/60'
                    )}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="uppercase tracking-[0.2em] text-[11px] font-bold border-b border-velmora-sand/30 pb-2">Material</h3>
            <ul className="space-y-4">
              {['18K Gold Plated', '925 Sterling Silver', 'Recycled Gold'].map((mat) => (
                <li key={mat} className="flex items-center gap-3">
                  <div className="w-3 h-3 border border-velmora-sand rounded-sm" />
                  <span className="uppercase tracking-widest text-[10px] text-velmora-charcoal/60">{mat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-10">
               {[...Array(6)].map((_, i) => (
                 <div key={i} className="space-y-4 animate-pulse">
                   <div className="aspect-[4/5] bg-velmora-cream rounded-sm" />
                   <div className="h-4 bg-velmora-cream w-2/3" />
                   <div className="h-4 bg-velmora-cream w-1/3" />
                 </div>
               ))}
            </div>
          ) : products.length === 0 ? (
            <div className="py-24 text-center space-y-6">
              <p className="text-xl font-serif italic text-velmora-charcoal/40">No pieces found in this collection.</p>
              <button
                onClick={() => toggleCategory('All')}
                className="inline-block border-b border-velmora-charcoal pb-1 uppercase tracking-widest text-[10px] font-bold"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-10">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
