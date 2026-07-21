import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sort, setSort] = useState('newest');

  const categoryFilter = searchParams.get('category');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      let query = client.from('Products').select('*');
      
      if (categoryFilter) {
        // Enforce title case for query
        const cat = categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1);
        query = query.eq('category', cat);
      }

      const { data: response, error } = await query;

      if (!error && response?.data?.list) {
        setProducts(response.data.list);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [categoryFilter]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-8 md:space-y-0 text-center md:text-left">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif mb-4 italic">
              {categoryFilter ? categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1) : 'Collection'}
            </h1>
            <p className="text-xs uppercase tracking-[0.2em] text-[#888888]">
              {products.length} Products
            </p>
          </div>

          <div className="flex items-center space-x-8">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 text-[10px] uppercase tracking-widest hover:text-[#A68A56] transition-colors"
            >
              <SlidersHorizontal size={14} />
              <span>Filters</span>
            </button>

            <div className="relative group cursor-pointer">
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest">
                <span>Sort: {sort}</span>
                <ChevronDown size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Filters (Desktop Bar/Sidebar Style) */}
        <div className="mb-12 flex items-center justify-center space-x-12 border-y border-[#E5E2DA] py-6 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                if (cat === 'All') searchParams.delete('category');
                else setSearchParams({ category: cat.toLowerCase() });
              }}
              className={`text-[10px] uppercase tracking-widest transition-all duration-300 ${
                (cat === 'All' && !categoryFilter) || categoryFilter === cat.toLowerCase()
                  ? 'text-[#A68A56] border-b border-[#A68A56] pb-1 font-bold'
                  : 'text-[#888888] hover:text-[#1C1C1C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="h-64 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-[#A68A56] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {products.map((product) => {
              const fields = product.data || product;
              return (
                <motion.div 
                  key={product.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="group"
                >
                  <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-[#E5E2DA]">
                    <img 
                      src={fields.image_url} 
                      alt={fields.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                  </Link>
                  <div className="mt-6 text-left">
                    <h3 className="text-sm font-serif uppercase tracking-[0.2em] mb-1">{fields.name}</h3>
                    <p className="text-xs font-sans text-[#555555]">${fields.price}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
