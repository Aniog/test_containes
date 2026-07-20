import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { SEED_PRODUCTS } from '../constants/products';
import strkImgConfig from '../strk-img-config.json';
import ProductCard from '../components/common/ProductCard';
import { Filter, ChevronDown, X } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState(SEED_PRODUCTS);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [products]);
  
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

        const { data, error } = await query;
        if (!error && data?.success && data?.data?.list?.length > 0) {
          let list = data.data.list;
          
          if (sort === 'price-low') list.sort((a, b) => a.data.price - b.data.price);
          if (sort === 'price-high') list.sort((a, b) => b.data.price - a.data.price);
          
          setProducts(list);
        } else if (category !== 'All') {
          setProducts(SEED_PRODUCTS.filter(p => p.data.category === category));
        } else {
          setProducts(SEED_PRODUCTS);
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setProducts(SEED_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category, sort]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-8">
        <div>
          <h1 className="font-serif text-5xl md:text-6xl mb-4">Shop All <span className="italic">Jewelry</span></h1>
          <p className="text-muted text-[11px] uppercase tracking-[0.3em] font-medium">Elevate your daily ritual</p>
        </div>

        <div className="flex items-center gap-6 w-full md:w-auto">
          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 md:hidden border border-border px-4 py-2 text-[10px] tracking-widest uppercase font-bold"
          >
            <Filter size={14} />
            Filters
          </button>

          <div className="relative group ml-auto">
            <select 
              value={sort}
              onChange={(e) => {
                searchParams.set('sort', e.target.value);
                setSearchParams(searchParams);
              }}
              className="appearance-none bg-transparent border-b border-border pr-8 pl-2 py-2 text-[10px] tracking-widest uppercase font-bold focus:outline-none cursor-pointer"
            >
              <option value="newest">Newest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-16">
        {/* Sidebar Filter */}
        <aside className="hidden md:block w-48 flex-shrink-0 space-y-12">
          <div className="space-y-6">
            <h3 className="font-serif uppercase tracking-[0.1em] text-sm">Collections</h3>
            <div className="flex flex-col gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    searchParams.set('category', cat);
                    setSearchParams(searchParams);
                  }}
                  className={`text-left text-[11px] uppercase tracking-widest transition-colors font-semibold ${
                    category === cat ? 'text-accent border-l-2 border-accent pl-4' : 'text-muted hover:text-foreground pl-0'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif uppercase tracking-[0.1em] text-sm">Material</h3>
            <div className="flex flex-col gap-4 text-[11px] uppercase tracking-widest font-semibold text-muted">
              <label className="flex items-center gap-3 cursor-pointer hover:text-foreground transition-colors">
                <input type="checkbox" defaultChecked className="accent-accent w-3 h-3" />
                18K Gold Plated
              </label>
              <label className="flex items-center gap-3 cursor-pointer hover:text-foreground transition-colors">
                <input type="checkbox" className="accent-accent w-3 h-3" />
                Sterling Silver
              </label>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {loading ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4 animate-pulse">
                  <div className="aspect-[4/5] bg-surface rounded-sm" />
                  <div className="h-4 w-1/2 bg-surface mx-auto" />
                  <div className="h-3 w-1/4 bg-surface mx-auto" />
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="py-24 text-center space-y-6">
              <p className="font-serif italic text-2xl text-muted">No treasures found in this category.</p>
              <button 
                onClick={() => setSearchParams({ category: 'All' })}
                className="text-[10px] uppercase tracking-widest font-bold border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-all"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
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
