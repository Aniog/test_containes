import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config';
import ProductCard from '../components/ProductCard';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { cn } from '../lib/utils';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const activeCategory = searchParams.get('category') || 'All';
  const activeSort = searchParams.get('sort') || 'newest';

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let query = client.from('Products').select('*');
        
        if (activeCategory !== 'All') {
          // In a real app, we'd use .eq('category', activeCategory)
          // But for this seed, I'll filter client-side for better flex
        }

        const { data: response, error } = await query;
        if (error) throw error;

        let list = response?.data?.list?.map(item => ({ ...item.data, id: item.id })) || [];

        if (activeCategory !== 'All') {
          list = list.filter(p => p.category === activeCategory || p.name.toLowerCase().includes(activeCategory.toLowerCase().slice(0, -1)));
        }

        // Sorting
        if (activeSort === 'price-low') list.sort((a, b) => a.price - b.price);
        if (activeSort === 'price-high') list.sort((a, b) => b.price - a.price);

        setProducts(list);
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [activeCategory, activeSort]);

  const handleCategoryChange = (cat) => {
    setSearchParams({ ...Object.fromEntries(searchParams), category: cat });
  };

  const handleSortChange = (sort) => {
    setSearchParams({ ...Object.fromEntries(searchParams), sort });
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Shop All</h1>
          <p className="text-gray-500 text-sm tracking-wide">Showing all {products.length} pieces</p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex-grow md:flex-none flex items-center justify-center gap-2 border py-3 px-6 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-dark hover:text-white transition-colors"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>
          
          <div className="relative group">
            <select 
              value={activeSort}
              onChange={(e) => handleSortChange(e.target.value)}
              className="appearance-none bg-transparent border py-3 px-8 pr-12 text-[10px] uppercase tracking-widest font-bold focus:outline-none cursor-pointer"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters - Desktop */}
        <aside className={cn(
          "md:w-64 space-y-12 fixed inset-0 z-50 bg-white p-8 md:p-0 md:relative md:bg-transparent md:z-0 transition-transform duration-500",
          showFilters ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}>
          <div className="md:hidden flex justify-between items-center mb-8">
            <h2 className="uppercase tracking-widest font-bold text-sm">Filters</h2>
            <button onClick={() => setShowFilters(false)}><X size={20}/></button>
          </div>

          <div>
            <h3 className="uppercase tracking-widest font-bold text-[10px] mb-6">Category</h3>
            <div className="flex flex-col gap-4">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={cn(
                    "text-left text-sm tracking-wide transition-colors",
                    activeCategory === cat ? "text-accent font-bold" : "text-gray-500 hover:text-primary"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="uppercase tracking-widest font-bold text-[10px] mb-6">Material</h3>
            <div className="flex flex-col gap-4 text-sm text-gray-500">
              <label className="flex items-center gap-3 cursor-pointer hover:text-primary transition-colors">
                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded text-accent focus:ring-accent" />
                18K Gold Plated
              </label>
              <label className="flex items-center gap-3 cursor-pointer hover:text-primary transition-colors">
                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded text-accent focus:ring-accent" />
                Sterling Silver
              </label>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-grow">
          {loading ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[4/5] bg-brand-beige mb-4" />
                  <div className="h-4 bg-brand-beige w-3/4 mb-2" />
                  <div className="h-4 bg-brand-beige w-1/2" />
                </div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="font-serif text-xl italic text-gray-500">No pieces found matching your criteria.</p>
              <button 
                onClick={() => setSearchParams({})}
                className="mt-6 text-[10px] uppercase tracking-widest font-bold border-b pb-1"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
