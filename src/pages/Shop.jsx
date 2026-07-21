import { FALLBACK_PRODUCTS } from '@/lib/constants';
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import ProductCard from '@/components/ProductCard';
import strkImgConfig from '@/strk-img-config.json';
import { Filter, ChevronDown, X } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const containerRef = useRef(null);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
  const activeCategory = searchParams.get('category') || 'All';
  const currentSort = searchParams.get('sort') || 'newest';

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data: response, error } = await client
          .from('JewelryProduct')
          .select('*');
        
        if (error) throw error;
        setProducts(response?.data?.list?.length ? response.data.list : FALLBACK_PRODUCTS);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setProducts(FALLBACK_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...products];

    // Category Filter
    if (activeCategory !== 'All') {
      result = result.filter(p => (p.data?.category || p.category) === activeCategory);
    }

    // Sort
    if (currentSort === 'price-low') {
      result.sort((a, b) => (a.data?.price || a.price) - (b.data?.price || b.price));
    } else if (currentSort === 'price-high') {
      result.sort((a, b) => (b.data?.price || b.price) - (a.data?.price || a.price));
    }

    setFilteredProducts(result);
  }, [products, activeCategory, currentSort]);

  useEffect(() => {
    if (filteredProducts.length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [filteredProducts]);

  return (
    <div ref={containerRef} className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-serif mb-4">Shop the Collection</h1>
            <p className="text-sm text-muted-foreground font-sans uppercase tracking-widest">
              {filteredProducts.length} Pieces Found
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="flex items-center gap-2 px-6 py-3 border border-border text-[10px] uppercase tracking-widest font-medium hover:border-primary transition-colors h-[50px]"
            >
              <Filter className="w-4 h-4" />
              Filter
            </button>
            
            <div className="relative group flex-1 md:flex-none">
              <select 
                value={currentSort}
                onChange={(e) => {
                  const newParams = new URLSearchParams(searchParams);
                  newParams.set('sort', e.target.value);
                  setSearchParams(newParams);
                }}
                className="appearance-none bg-white border border-border px-6 py-3 pr-12 text-[10px] uppercase tracking-widest font-medium focus:outline-none focus:border-primary w-full h-[50px]"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          {isSidebarOpen && (
            <div className="lg:col-span-3 space-y-12 animate-in slide-in-from-left duration-500">
              <div>
                <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold mb-6 flex justify-between items-center">
                  Category
                  <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-1">
                    <X className="w-4 h-4" />
                  </button>
                </h3>
                <div className="flex flex-col gap-4">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        const newParams = new URLSearchParams(searchParams);
                        if (cat === 'All') newParams.delete('category');
                        else newParams.set('category', cat);
                        setSearchParams(newParams);
                      }}
                      className={`text-sm text-left transition-colors italic font-serif ${activeCategory === cat ? 'text-primary font-bold' : 'text-muted-foreground hover:text-primary'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Grid */}
          <div className={`${isSidebarOpen ? 'lg:col-span-9' : 'lg:col-span-12'}`}>
            {loading ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[3/4] bg-muted mb-4" />
                    <div className="h-4 bg-muted w-2/3 mx-auto mb-2" />
                    <div className="h-4 bg-muted w-1/3 mx-auto" />
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="py-24 text-center">
                <p className="font-serif italic text-muted-foreground">No pieces found in this selection.</p>
              </div>
            ) : (
              <div className={`grid grid-cols-2 ${isSidebarOpen ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-x-8 gap-y-16`}>
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
