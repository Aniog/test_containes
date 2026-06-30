import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ChevronDown, Filter } from 'lucide-react';
import { cn } from '../lib/utils';

const Collection = () => {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  
  const categoryFilter = searchParams.get('category');
  
  const filteredProducts = products.filter(p => {
    if (!categoryFilter) return true;
    return p.category.toLowerCase() === categoryFilter.toLowerCase();
  });
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0; // featured
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [sortedProducts]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  return (
    <div className="pt-32 pb-24" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 id="collection-title" className="font-serif text-4xl md:text-5xl mb-4">
            {categoryFilter ? categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1) : 'The Collection'}
          </h1>
          <p className="text-muted-foreground font-light">
            Each piece is thoughtfully designed to empower the wearer. Explore our full range of demi-fine jewelry.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-y border-border mb-12 gap-4">
          <button 
            className="md:hidden flex items-center gap-2 uppercase tracking-wide text-sm font-medium"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter size={16} /> Filters
          </button>
          
          <div className="text-sm text-muted-foreground">
            {sortedProducts.length} Product{sortedProducts.length !== 1 && 's'}
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm uppercase tracking-wide">Sort by</span>
            <div className="relative inline-block">
              <select 
                className="appearance-none bg-transparent pl-2 pr-8 py-1 border-none focus:outline-none text-sm uppercase tracking-wide cursor-pointer font-medium"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <aside className={cn(
            "w-full md:w-64 flex-shrink-0 transition-all",
            isFilterOpen ? "block" : "hidden md:block"
          )}>
            <div className="space-y-8 sticky top-32">
              <div>
                <h3 className="font-serif text-xl mb-4">Category</h3>
                <ul className="space-y-3">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => {
                          if (cat === 'All') {
                            searchParams.delete('category');
                          } else {
                            searchParams.set('category', cat.toLowerCase());
                          }
                          setSearchParams(searchParams);
                          setIsFilterOpen(false);
                        }}
                        className={cn(
                          "text-sm tracking-wide transition-colors",
                          (cat.toLowerCase() === categoryFilter?.toLowerCase()) || (cat === 'All' && !categoryFilter)
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-primary font-light"
                        )}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-serif text-xl mb-4">Material</h3>
                <ul className="space-y-3">
                  <li>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 border border-border flex items-center justify-center group-hover:border-gold">
                        <div className="w-2 h-2 bg-gold" />
                      </div>
                      <span className="text-sm text-foreground tracking-wide font-light">18K Gold Plated</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-3 cursor-pointer group text-muted-foreground">
                      <div className="w-4 h-4 border border-border flex items-center justify-center opacity-50">
                      </div>
                      <span className="text-sm tracking-wide font-light">Sterling Silver (Coming Soon)</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                <p>No products found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="group cursor-pointer flex flex-col">
                    <Link to={`/product/${product.id}`} className="relative aspect-[4/5] bg-muted mb-4 overflow-hidden block">
                      <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-strk-img-id={`${product.imgId}-main-coll`}
                        data-strk-img={`[prod-title-${product.id}] on model styling`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="600"
                      />
                      <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`${product.title} alternate view`}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        data-strk-img-id={`${product.imgId}-alt-coll`}
                        data-strk-img={`[prod-title-${product.id}] close up product shot details`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="600"
                      />
                      <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product, 'Gold');
                          }}
                          className="w-full bg-white/90 backdrop-blur text-primary py-3 uppercase tracking-wider text-xs font-medium hover:bg-gold hover:text-white transition-colors"
                        >
                          Quick Add
                        </button>
                      </div>
                    </Link>
                    <div className="flex flex-col flex-1 mt-auto items-center text-center">
                      <h3 id={`prod-title-${product.id}`} className="font-serif uppercase tracking-wide text-sm font-medium mb-2">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground font-light">${product.price}</p>
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
};

export default Collection;