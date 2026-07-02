import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/product/ProductCard';
import { Filter, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Shop = () => {
  const { category: urlCategory } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(urlCategory || 'all');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    setActiveCategory(urlCategory || 'all');
  }, [urlCategory]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let query = client.from('VelmoraProduct').select('*');
        
        if (activeCategory !== 'all') {
          query = query.ilike('category', `%${activeCategory}%`);
        }

        const { data, error } = await query;
        if (error) throw error;
        
        let list = data?.list || [];
        
        // Handling raw vs data-wrapped items
        list = list.map(item => item.data ? { ...item.data, id: item.id } : item);

        // Sorting
        if (sortBy === 'price-low') list.sort((a, b) => a.price - b.price);
        if (sortBy === 'price-high') list.sort((a, b) => b.price - a.price);
        
        setProducts(list);
      } catch (err) {
        console.error('Error fetching shop products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [activeCategory, sortBy]);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        ImageHelper.loadImages(strkImgConfig, pageRef.current);
      }, 100);
    }
  }, [loading, products]);

  const categories = ['all', 'earrings', 'necklaces', 'huggies'];

  return (
    <div className="pt-32 pb-24" ref={pageRef}>
      <div className="container mx-auto px-4 md:px-8">
        <header className="mb-12 space-y-4">
          <nav className="text-[10px] uppercase tracking-ultra-wide text-velmora-grey">
            <Link to="/" className="hover:text-velmora-gold">Home</Link> / 
            <span className="text-velmora-charcoal ml-2">Shop</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-serif capitalize">
            {activeCategory === 'all' ? 'All Jewelry' : activeCategory}
          </h1>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:block w-64 space-y-12">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium mb-6">Collections</h3>
              <div className="flex flex-col space-y-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "text-sm uppercase tracking-widest text-left transition-colors",
                      activeCategory === cat ? "text-velmora-gold font-medium" : "text-velmora-grey hover:text-velmora-base"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium mb-6">Material</h3>
              <div className="flex flex-col space-y-4 text-sm text-velmora-grey">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-black/10 flex items-center justify-center p-1 group-hover:border-velmora-gold">
                    <div className="w-full h-full bg-velmora-gold opacity-0 group-hover:opacity-20" />
                  </div>
                  <span>18K Gold Vermeil</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-black/10 flex items-center justify-center p-1 group-hover:border-velmora-gold">
                    <div className="w-full h-full bg-velmora-gold opacity-0 group-hover:opacity-20" />
                  </div>
                  <span>Recycled Silver</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/5">
              <button 
                onClick={() => setShowFilters(true)}
                className="md:hidden flex items-center space-x-2 text-xs uppercase tracking-widest"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
              </button>

              <div className="hidden md:block text-xs uppercase tracking-widest text-velmora-grey">
                Showing {products.length} Results
              </div>

              <div className="flex items-center space-x-4">
                <span className="hidden sm:inline text-[10px] uppercase tracking-widest text-velmora-grey">Sort by</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-xs uppercase tracking-widest focus:outline-none cursor-pointer"
                >
                  <option value="newest">New arrivals</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            {loading ? (
              <div className="h-96 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-velmora-gold border-t-transparent rounded-full animate-spin" />
              </div>
            ) : products.length === 0 ? (
              <div className="h-96 flex flex-col items-center justify-center text-center">
                <p className="font-serif text-xl mb-4">No items found</p>
                <button onClick={() => setActiveCategory('all')} className="text-sm underline underline-offset-4">Clear all filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {showFilters && (
        <div 
          className="fixed inset-0 bg-black/40 z-[200] backdrop-blur-sm md:hidden"
          onClick={() => setShowFilters(false)}
        >
          <div 
            className="absolute top-0 right-0 h-full w-[85%] bg-velmora-bg p-8 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="font-serif text-2xl">Filter</h2>
              <button onClick={() => setShowFilters(false)}><X className="w-6 h-6" /></button>
            </div>
            
            <div className="flex-1 space-y-12">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium mb-6">Collections</h3>
                <div className="flex flex-col space-y-4">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setActiveCategory(cat); setShowFilters(false); }}
                      className={cn(
                        "text-sm uppercase tracking-widest text-left",
                        activeCategory === cat ? "text-velmora-gold" : "text-velmora-grey"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-black/5">
              <button 
                onClick={() => setShowFilters(false)}
                className="w-full h-14 bg-velmora-base text-white uppercase tracking-ultra-wide text-xs"
              >
                Show Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
