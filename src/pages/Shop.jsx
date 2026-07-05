import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { useProducts } from '@/lib/hooks';
import { Link, useParams } from 'react-router-dom';
import { useCartStore } from '@/lib/store';
import { ChevronDown, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Shop() {
  const { category } = useParams();
  const containerRef = useRef(null);
  const { products, loading } = useProducts();
  const addItem = useCartStore(state => state.addItem);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  const displayCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Products';

  const filteredProducts = category 
    ? products.filter(p => p.category.toLowerCase() === category.toLowerCase() || p.category.toLowerCase().includes(category.toLowerCase()))
    : products;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // featured/default
  });

  useEffect(() => {
    if (!loading && sortedProducts.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages([], containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [loading, sortedProducts, category]);

  return (
    <div ref={containerRef} className="pt-32 pb-20 container mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif tracking-widest uppercase mb-4">{displayCategory}</h1>
        <p className="text-muted-foreground text-sm tracking-widest uppercase">
          {sortedProducts.length} pieces
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-y border-border py-4 mb-12 gap-4">
        <button 
          onClick={() => setFilterOpen(!filterOpen)}
          className="flex items-center gap-2 text-sm uppercase tracking-widest md:hidden font-medium hover:text-primary transition-colors"
        >
          <Filter className="w-4 h-4" /> Filter
        </button>

        <div className={cn(
          "flex gap-8 text-sm uppercase tracking-widest font-medium overflow-x-auto w-full md:w-auto pb-4 md:pb-0 md:flex",
          filterOpen ? "flex" : "hidden"
        )}>
          <Link to="/shop" className={cn("shrink-0 hover:text-primary transition-colors", !category && "text-primary border-b border-primary")} onClick={() => setFilterOpen(false)}>All</Link>
          <Link to="/collections/earrings" className={cn("shrink-0 hover:text-primary transition-colors", category === 'earrings' && "text-primary border-b border-primary")} onClick={() => setFilterOpen(false)}>Earrings</Link>
          <Link to="/collections/necklaces" className={cn("shrink-0 hover:text-primary transition-colors", category === 'necklaces' && "text-primary border-b border-primary")} onClick={() => setFilterOpen(false)}>Necklaces</Link>
          <Link to="/collections/huggies" className={cn("shrink-0 hover:text-primary transition-colors", category === 'huggies' && "text-primary border-b border-primary")} onClick={() => setFilterOpen(false)}>Huggies</Link>
          <Link to="/collections/sets" className={cn("shrink-0 hover:text-primary transition-colors", category === 'sets' && "text-primary border-b border-primary")} onClick={() => setFilterOpen(false)}>Sets</Link>
        </div>

        <div className="relative group self-end md:self-auto shrink-0 z-10 w-full md:w-auto">
          <button className="w-full md:w-auto flex items-center justify-between gap-2 text-sm uppercase tracking-widest font-medium border border-border px-4 py-2 hover:border-foreground transition-colors bg-white">
            <span>Sort: {sortBy.replace('-', ' ')}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <div className="absolute right-0 top-full mt-1 w-full md:w-48 bg-white border border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <button onClick={() => setSortBy('featured')} className="w-full text-left px-4 py-3 text-sm hover:bg-muted transition-colors">Featured</button>
            <button onClick={() => setSortBy('price-low')} className="w-full text-left px-4 py-3 text-sm hover:bg-muted transition-colors">Price: Low to High</button>
            <button onClick={() => setSortBy('price-high')} className="w-full text-left px-4 py-3 text-sm hover:bg-muted transition-colors">Price: High to Low</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
        {loading ? (
          Array(8).fill(0).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-muted aspect-[4/5] mb-4"></div>
              <div className="h-4 bg-muted w-3/4 mb-2"></div>
              <div className="h-4 bg-muted w-1/4"></div>
            </div>
          ))
        ) : sortedProducts.length > 0 ? (
          sortedProducts.map(product => (
            <div key={product.id} className="group cursor-pointer">
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                <img
                  alt={product.name}
                  data-strk-img={product.image_prompt}
                  data-strk-img-id={`shop-img-${product.id}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 bg-muted"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addItem(product);
                    useCartStore.getState().openCart();
                  }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-foreground px-6 py-3 text-xs uppercase tracking-widest font-medium hover:bg-primary hover:text-white w-[calc(100%-2rem)] text-center shadow-sm"
                >
                  Quick Add
                </button>
              </Link>
              <div className="text-center">
                <h3 id={`shop-title-${product.id}`} className="font-serif uppercase tracking-widest text-sm mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-muted-foreground font-serif text-lg">
            No pieces found in this collection.
          </div>
        )}
      </div>
    </div>
  );
}