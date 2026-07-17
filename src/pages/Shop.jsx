import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import ProductCard from '@/components/ui/ProductCard';
import { ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const category = searchParams.get('category') || 'all';
  const sort = searchParams.get('sort') || 'featured';

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        let query = client.from('Product').select('*');
        if (category !== 'all') {
          query = query.eq('category', category);
        }

        if (sort === 'price-low') {
          query = query.order('price', { ascending: true });
        } else if (sort === 'price-high') {
          query = query.order('price', { ascending: false });
        }

        const { data, error } = await query;
        if (error) throw error;
        setProducts(data?.data?.list || []);
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [category, sort]);

  const categories = ['all', 'earrings', 'necklaces', 'huggies'];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-light mb-4 uppercase tracking-[0.1em]">{category === 'all' ? 'The Collection' : category}</h1>
            <p className="text-muted-foreground font-light tracking-wide max-w-sm">Demi-fine essentials, thoughtfully designed to be worn and treasured every day.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
            {/* Desktop Sidebar Filters */}
            <aside className="hidden md:block w-48 shrink-0">
                <div className="sticky top-32">
                    <div className="mb-12">
                        <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-800 mb-6">Category</h4>
                        <ul className="flex flex-col gap-4">
                            {categories.map((cat) => (
                                <li key={cat}>
                                    <button 
                                        onClick={() => setSearchParams({ category: cat, sort })}
                                        className={cn(
                                            "text-xs tracking-widest uppercase hover:text-primary transition-colors",
                                            category === cat ? "text-primary font-medium" : "text-gray-400"
                                        )}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-12">
                        <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-800 mb-6">Material</h4>
                        <ul className="flex flex-col gap-4 text-xs tracking-widest uppercase text-gray-400">
                            <li className="hover:text-primary cursor-pointer transition-colors">18K Gold Plated</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">Sterling Silver</li>
                        </ul>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
                {/* Mobile Toolbar */}
                <div className="flex md:hidden justify-between items-center mb-8 border-y py-4">
                    <button 
                        onClick={() => setShowFilters(true)}
                        className="flex items-center gap-2 text-[10px] tracking-widest uppercase font-bold"
                    >
                        <Filter size={14} /> Filter
                    </button>
                    <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase">
                        <span>Sort:</span>
                        <select 
                            value={sort}
                            onChange={(e) => setSearchParams({ category, sort: e.target.value })}
                            className="bg-transparent font-bold focus:outline-none"
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Desktop Sort */}
                <div className="hidden md:flex justify-end items-center mb-8 gap-12">
                    <div className="flex items-center gap-4 text-[10px] tracking-widest uppercase">
                        <span className="text-gray-400">Sort by</span>
                        <select 
                            value={sort}
                            onChange={(e) => setSearchParams({ category, sort: e.target.value })}
                            className="bg-transparent font-medium border-b border-transparent hover:border-gray-200 transition-all focus:outline-none cursor-pointer"
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Grid */}
                {loading ? (
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="animate-pulse">
                                <div className="aspect-[3/4] bg-gray-50 mb-4" />
                                <div className="h-4 bg-gray-50 w-2/3 mb-2" />
                                <div className="h-4 bg-gray-50 w-1/3" />
                            </div>
                        ))}
                    </div>
                ) : products.length === 0 ? (
                    <div className="py-24 text-center">
                        <p className="text-muted-foreground font-light mb-8">No pieces found in this category.</p>
                        <button 
                            onClick={() => setSearchParams({ category: 'all', sort })}
                            className="text-xs tracking-widest uppercase font-bold border-b border-gray-800 pb-1"
                        >
                            Back to all jewelry
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 animate-in fade-in duration-700">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-[100] md:hidden">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setShowFilters(false)} />
            <div className="absolute top-0 right-0 h-full w-full max-w-[300px] bg-white p-8 animate-in slide-in-from-right duration-300 shadow-2xl">
                <div className="flex justify-between items-center mb-12">
                    <h3 className="text-xs tracking-[0.3em] uppercase font-bold">Filters</h3>
                    <button onClick={() => setShowFilters(false)}><X size={20} /></button>
                </div>
                
                <div className="mb-12">
                    <h4 className="text-[10px] tracking-[0.3em] font-medium uppercase text-gray-400 mb-6">Category</h4>
                    <ul className="flex flex-col gap-6">
                        {categories.map((cat) => (
                            <li key={cat}>
                                <button 
                                    onClick={() => {
                                        setSearchParams({ category: cat, sort });
                                        setShowFilters(false);
                                    }}
                                    className={cn(
                                        "text-sm tracking-[0.1em] uppercase",
                                        category === cat ? "font-bold text-black" : "font-light text-gray-500"
                                    )}
                                >
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}
