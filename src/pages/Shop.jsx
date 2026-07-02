import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import ProductCard from '@/components/product/ProductCard';
import { Filter, ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  
  const categoryFilter = searchParams.get('category') || 'All';
  const sortFilter = searchParams.get('sort') || 'featured';

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
  const sortOptions = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price_asc' },
    { label: 'Price: High to Low', value: 'price_desc' },
  ];

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        let query = client.from('Products').select('*');
        
        if (categoryFilter !== 'All') {
          query = query.eq('category', categoryFilter);
        }

        if (sortFilter === 'price_asc') {
          query = query.order('price', { ascending: true });
        } else if (sortFilter === 'price_desc') {
          query = query.order('price', { ascending: false });
        }

        const { data: response } = await query;
        setProducts(response?.data?.list || []);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [categoryFilter, sortFilter]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All' || !value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-4 mb-12">
          <span className="uppercase-spaced text-[10px] font-bold text-accent">Collections</span>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground">
            {categoryFilter === 'All' ? 'All Jewelry' : categoryFilter}
          </h1>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center py-6 border-y border-border mb-12">
          <button 
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2 uppercase-spaced text-[10px] font-bold lg:hidden"
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>
          
          <div className="hidden lg:flex items-center gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => updateFilter('category', cat)}
                className={cn(
                  "uppercase-spaced text-[10px] font-bold transition-colors hover:text-accent",
                  categoryFilter === cat ? "text-accent border-b border-accent pb-1" : "text-muted-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden md:inline">{products.length} Products</span>
            <div className="relative group">
              <button className="flex items-center gap-2 uppercase-spaced text-[10px] font-bold">
                Sort By: {sortOptions.find(o => o.value === sortFilter)?.label}
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                <div className="bg-background border border-border shadow-xl min-w-[200px]">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => updateFilter('sort', opt.value)}
                      className="w-full text-left px-5 py-3 hover:bg-muted text-[10px] uppercase-spaced font-bold transition-colors"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse flex flex-col gap-4">
                <div className="aspect-[3/4] bg-muted" />
                <div className="h-4 bg-muted w-3/4 mx-auto" />
                <div className="h-4 bg-muted w-1/2 mx-auto" />
              </div>
            ))}
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h3 className="font-serif text-2xl mb-4">No products found</h3>
            <button 
              onClick={() => updateFilter('category', 'All')}
              className="uppercase-spaced text-[10px] font-bold border-b border-foreground pb-1"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Drawer Overlay */}
      {showFilters && (
        <div className="fixed inset-0 z-[60] flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowFilters(false)} />
          <div className="relative bg-background w-[80%] max-w-sm h-full flex flex-col p-8">
            <div className="flex justify-between items-center mb-12">
              <span className="uppercase-spaced text-[10px] font-bold">Filters</span>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-col gap-12">
              <div>
                <h4 className="font-serif text-xl mb-6">Category</h4>
                <div className="flex flex-col gap-4">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        updateFilter('category', cat);
                        setShowFilters(false);
                      }}
                      className={cn(
                        "text-left text-sm uppercase-spaced",
                        categoryFilter === cat ? "text-accent font-bold" : "text-muted-foreground"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-serif text-xl mb-6">Sort By</h4>
                <div className="flex flex-col gap-4">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        updateFilter('sort', opt.value);
                        setShowFilters(false);
                      }}
                      className={cn(
                        "text-left text-sm uppercase-spaced",
                        sortFilter === opt.value ? "text-accent font-bold" : "text-muted-foreground"
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <button 
                onClick={() => setShowFilters(false)}
                className="w-full bg-foreground text-white py-4 uppercase-spaced text-xs font-bold"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
