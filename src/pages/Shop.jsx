import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { ShoppingBag, ChevronDown, Filter, X } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addToCart } = useCart();

  const activeCategory = searchParams.get('category') || 'All';
  const sortBy = searchParams.get('sort') || 'featured';

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);
      let query = client.from('Products').select('*');
      
      const { data: response, error } = await query;
      if (!error && response?.success) {
        setProducts(response.data.list);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    
    // Filter by Category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(p => p.data.category.toLowerCase() === activeCategory.toLowerCase());
    }

    // Sort
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.data.price - b.data.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.data.price - a.data.price);
    } else if (sortBy === 'newest') {
        filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    return filtered;
  }, [products, activeCategory, sortBy]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
  const sortOptions = [
    { label: 'Featured', value: 'featured' },
    { label: 'Newest', value: 'newest' },
    { label: 'Price: Low to High', value: 'price-low' },
    { label: 'Price: High to Low', value: 'price-high' },
  ];

  const toggleCategory = (cat) => {
    setSearchParams(params => {
      if (cat === 'All') params.delete('category');
      else params.set('category', cat.toLowerCase());
      return params;
    });
  };

  const handleSort = (val) => {
    setSearchParams(params => {
      params.set('sort', val);
      return params;
    });
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:row items-baseline justify-between mb-12 space-y-4 md:space-y-0">
        <h1 className="text-5xl md:text-7xl font-serif">The Collection</h1>
        <p className="text-sm text-muted-foreground uppercase tracking-widest">{filteredProducts.length} Pieces</p>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between py-6 border-y border-border mb-12">
        <button 
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center space-x-2 text-xs uppercase tracking-widest font-medium md:hidden"
        >
          <Filter className="w-4 h-4" />
          <span>Filters</span>
        </button>

        {/* Desktop Categories */}
        <div className="hidden md:flex items-center space-x-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={cn(
                "text-xs uppercase tracking-[0.2em] transition-colors hover:text-accent",
                (activeCategory.toLowerCase() === cat.toLowerCase() || (activeCategory === 'All' && cat === 'All'))
                  ? "text-primary border-b border-accent pb-1"
                  : "text-muted-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort Select */}
        <div className="relative group">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-widest cursor-pointer">
            <span className="text-muted-foreground">Sort By:</span>
            <span className="font-medium">{sortOptions.find(o => o.value === sortBy)?.label}</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-40">
            {sortOptions.map(opt => (
              <button
                key={opt.value}
                onClick={() => handleSort(opt.value)}
                className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest hover:bg-secondary transition-colors"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
        {loading ? (
          [...Array(8)].map((_, i) => (
            <div key={i} className="animate-pulse space-y-4">
              <div className="aspect-[3/4] bg-muted" />
              <div className="h-4 bg-muted w-2/3" />
              <div className="h-4 bg-muted w-1/3" />
            </div>
          ))
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map(p => (
            <div key={p.id} className="group flex flex-col">
               <Link to={`/product/${p.id}`} className="block relative aspect-[3/4] overflow-hidden bg-muted mb-6">
                <img
                  alt={p.data.name}
                  data-strk-img-id={`shop-${p.id}-primary`}
                  data-strk-img={`[shop-title-${p.id}] jewelry gold`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(p.data, 1, 'Gold');
                    toast.success(`${p.data.name} added to bag`);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md py-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest font-medium">Quick Add</span>
                </button>
              </Link>

              <Link to={`/product/${p.id}`} className="space-y-2">
                <h3 id={`shop-title-${p.id}`} className="text-xs uppercase tracking-widest leading-relaxed">
                  {p.data.name}
                </h3>
                <p className="text-sm font-serif italic">${p.data.price}</p>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-full py-24 text-center">
             <p className="font-serif italic text-muted-foreground text-xl">No pieces found matching your criteria.</p>
             <button 
                onClick={() => setSearchParams({})}
                className="mt-6 text-xs uppercase tracking-widest underline underline-offset-8"
              >
                Clear All Filters
              </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Drawer Overlay */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-secondary p-8 animate-in slide-in-from-bottom duration-500">
           <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-serif tracking-widest uppercase">Filters</h2>
            <button onClick={() => setIsFilterOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-12">
             <div className="space-y-6">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium text-muted-foreground">Category</h4>
                <div className="flex flex-wrap gap-3">
                   {categories.map(cat => (
                     <button
                        key={cat}
                        onClick={() => {
                          toggleCategory(cat);
                          setIsFilterOpen(false);
                        }}
                        className={cn(
                          "px-6 py-3 border text-[10px] uppercase tracking-widest transition-all",
                          (activeCategory.toLowerCase() === cat.toLowerCase() || (activeCategory === 'All' && cat === 'All'))
                            ? "bg-primary text-secondary border-primary"
                            : "border-border hover:border-primary"
                        )}
                     >
                       {cat}
                     </button>
                   ))}
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
