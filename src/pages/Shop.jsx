import React, { useState, useEffect, useRef } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { fetchProducts } from '@/api/products';
import { useCart } from '@/lib/CartContext';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Shop = () => {
  const { category: urlCategory } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const { addToCart } = useCart();

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const sortOptions = [
    { label: 'Sort by', value: 'newest' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
  ];

  const currentCategory = urlCategory || searchParams.get('category') || 'All';
  const currentSort = searchParams.get('sort') || 'newest';

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const cat = currentCategory === 'All' ? null : currentCategory;
        let data = await fetchProducts(cat);
        
        // Manual sorting since we have limited data
        if (currentSort === 'price-asc') data = [...data].sort((a,b) => a.data.price - b.data.price);
        if (currentSort === 'price-desc') data = [...data].sort((a,b) => b.data.price - a.data.price);

        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [currentCategory, currentSort]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [products]);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen" ref={containerRef}>
      {/* Header */}
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl md:text-6xl font-serif">
          {currentCategory === 'All' ? 'The Collection' : currentCategory}
        </h1>
        <p className="text-[10px] uppercase tracking-[0.4em] opacity-50 max-w-lg mx-auto leading-loose">
          Thoughtfully curated demi-fine essentials. Each piece is designed to be worn solo or layered for an effortless look.
        </p>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center border-y border-border py-4 mb-12">
        <button 
          onClick={() => setShowFilters(true)}
          className="flex items-center text-[10px] uppercase tracking-widest space-x-2 border-r border-border pr-8 hover:text-accent transition-colors"
        >
          <SlidersHorizontal size={14} />
          <span>Filters</span>
        </button>

        <div className="flex items-center space-x-6 text-[10px] uppercase tracking-widest">
           <div className="hidden md:flex space-x-6">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSearchParams({ category: cat })}
                  className={cn("hover:text-accent transition-colors", currentCategory === cat && "text-accent border-b border-accent")}
                >
                  {cat}
                </button>
              ))}
           </div>
           
           <div className="relative group">
              <button className="flex items-center space-x-2 hover:text-accent transition-colors">
                <span>{sortOptions.find(o => o.value === currentSort)?.label}</span>
                <ChevronDown size={12} />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                {sortOptions.map(opt => (
                  <button 
                    key={opt.value}
                    onClick={() => setSearchParams(prev => {
                      prev.set('sort', opt.value);
                      return prev;
                    })}
                    className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest hover:bg-secondary"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
           </div>
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="h-64 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                <img 
                  data-strk-img-id={`shop-img-${product.id}`}
                  data-strk-img={`[shop-name-${product.id}] minimalist jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={product.data.name}
                />
                <div className="absolute top-4 left-4">
                  {product.data.price > 80 && (
                    <span className="bg-foreground text-white text-[8px] uppercase tracking-[0.2em] px-2 py-1">Limited Edition</span>
                  )}
                </div>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="absolute bottom-0 left-0 right-0 bg-white/95 text-foreground py-3 text-[90px] text-[10px] uppercase tracking-widest opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                >
                  Quick Add
                </button>
              </Link>
              <h3 id={`shop-name-${product.id}`} className="font-serif uppercase tracking-widest text-xs mb-1 group-hover:text-accent transition-colors">
                {product.data.name}
              </h3>
              <p className="font-serif text-sm opacity-60">\${product.data.price}</p>
            </div>
          ))}
        </div>
      )}

      {/* Filter Sidebar (Mobile) */}
      <div className={cn(
        "fixed inset-0 bg-black/40 z-[70] backdrop-blur-sm transition-opacity duration-300",
        showFilters ? "opacity-100 visible" : "opacity-0 invisible"
      )} onClick={() => setShowFilters(false)} />
      
      <div className={cn(
        "fixed top-0 left-0 h-screen w-80 bg-background z-[71] p-8 shadow-2xl transition-transform duration-500",
        showFilters ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-xl font-serif uppercase tracking-widest">Filters</h2>
          <button onClick={() => setShowFilters(false)}><X size={20} /></button>
        </div>
        
        <div className="space-y-12">
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6">Category</h4>
            <div className="flex flex-col space-y-4">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => {
                    setSearchParams({ category: cat });
                    setShowFilters(false);
                  }}
                  className={cn("text-xs text-left uppercase tracking-widest hover:text-accent", currentCategory === cat && "text-accent")}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6">Price</h4>
            <div className="flex flex-col space-y-4">
              {['Under \$50', '\$50 - \$100', 'Over \$100'].map(range => (
                <label key={range} className="flex items-center space-x-3 text-xs uppercase tracking-widest opacity-60">
                  <input type="checkbox" className="w-3 h-3 accent-accent" />
                  <span>{range}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <button 
          onClick={() => setShowFilters(false)}
          className="absolute bottom-8 left-8 right-8 bg-foreground text-white py-4 text-[10px] uppercase tracking-[0.3em]"
        >
          Show Results
        </button>
      </div>
    </div>
  );
};

export default Shop;
