import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { seedProducts } from '@/lib/data';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/lib/CartContext';
import { toast } from 'sonner';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'All';
  const sortOption = searchParams.get('sort') || 'featured';
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  
  const filteredProducts = seedProducts.filter(p => 
    categoryFilter === 'All' || p.category === categoryFilter
  ).sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price;
    if (sortOption === 'price-high') return b.price - a.price;
    return 0; // Featured / Default
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [categoryFilter, sortOption]);

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-velmora-bg min-h-screen">
      <div className="container-custom max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-velmora-text uppercase tracking-widest">{categoryFilter === 'All' ? 'Shop All' : categoryFilter}</h1>
            <p className="text-sm text-velmora-muted mt-2">Discover our curated collection of demifine jewelry.</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <label className="text-[10px] uppercase tracking-widest text-velmora-muted block mb-1">Sort By</label>
              <select 
                value={sortOption}
                onChange={(e) => {
                  searchParams.set('sort', e.target.value);
                  setSearchParams(searchParams);
                }}
                className="bg-transparent border-b border-velmora-text/20 text-xs py-2 pr-8 outline-none appearance-none cursor-pointer focus:border-velmora-accent transition-colors"
                id="sort-select"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-0 bottom-2 w-3 h-3 text-velmora-muted pointer-events-none" />
            </div>

            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center space-x-2 text-xs uppercase tracking-widest border border-velmora-text/10 px-4 py-2 hover:bg-velmora-beige transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className={cn(
            "lg:w-64 space-y-12 transition-all duration-300 lg:block",
            isFilterOpen ? "block" : "hidden"
          )}>
            <div>
              <h3 className="font-serif uppercase tracking-widest text-sm mb-6 pb-2 border-b border-velmora-text/10">Categories</h3>
              <ul className="space-y-4">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => {
                        searchParams.set('category', cat);
                        setSearchParams(searchParams);
                        setIsFilterOpen(false);
                      }}
                      className={cn(
                        "text-xs uppercase tracking-widest transition-colors hover:text-velmora-accent text-left w-full",
                        categoryFilter === cat ? "text-velmora-accent font-bold" : "text-velmora-muted"
                      )}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif uppercase tracking-widest text-sm mb-6 pb-2 border-b border-velmora-text/10">Material</h3>
              <ul className="space-y-4">
                {['18K Gold Plated', 'Recycled Brass', 'Sterling Silver'].map((mat) => (
                  <li key={mat} className="flex items-center space-x-3">
                    <div className="w-4 h-4 border border-velmora-text/20" />
                    <span className="text-[10px] uppercase tracking-widest text-velmora-muted">{mat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center space-y-4 bg-velmora-beige/20 border border-dashed border-velmora-accent/20">
                <p className="font-serif italic text-lg text-velmora-muted">No pieces found in this category.</p>
                <button 
                  onClick={() => setSearchParams({})}
                  className="text-xs uppercase tracking-widest underline underline-offset-4"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group flex flex-col">
                    <Link to={`/product/${product.id}`} className="relative aspect-[3/4] bg-velmora-beige overflow-hidden mb-5">
                      <img
                        data-strk-img-id={`shop-${product.id}`}
                        data-strk-img={product.images[0].dataStrkImg}
                        data-strk-img-ratio="4/5"
                        data-strk-img-width="600"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-4 px-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                            toast.success(`${product.name} added to bag`);
                          }}
                          className="w-full bg-white text-velmora-text text-[10px] uppercase tracking-widest py-3 hover:bg-velmora-accent hover:text-white transition-colors shadow-sm"
                        >
                          Quick Add
                        </button>
                      </div>
                    </Link>
                    <Link to={`/product/${product.id}`} className="font-serif uppercase tracking-widest text-md hover:text-velmora-accent transition-colors">
                      {product.name}
                    </Link>
                    <div className="flex items-center justify-between mt-2">
                       <p className="text-sm text-velmora-muted">${product.price}</p>
                       <span className="text-[9px] uppercase tracking-widest text-velmora-accent">New Arrival</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
