import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { seedProducts } from '../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, Filter } from 'lucide-react';
import { useCart } from '../context/CartContext';

const useQuery = () => new URLSearchParams(useLocation().search);

const Shop = () => {
  const query = useQuery();
  const initialCategory = query.get('category') || 'All';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  useEffect(() => {
    setActiveCategory(query.get('category') || 'All');
  }, [query]);

  useEffect(() => {
    // Scan anytime products change (due to filtering/sorting)
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy]);

  // Filter
  let filteredProducts = seedProducts;
  if (activeCategory.toLowerCase() !== 'all') {
    filteredProducts = seedProducts.filter(
      p => p.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }

  // Sort
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500 min-h-screen container mx-auto px-4 md:px-8" ref={containerRef}>
      
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 id="shop-title" className="text-4xl md:text-5xl font-serif mb-4 capitalize">
          {activeCategory === 'All' ? 'Complete Collection' : activeCategory}
        </h1>
        <p className="text-muted-foreground font-light max-w-lg mx-auto">
          Explore our curated pieces designed for everyday elegance.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between border-b border-border pb-4">
          <button 
            className="flex items-center gap-2 uppercase tracking-widest text-sm font-medium"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="w-4 h-4" /> Filter & Sort
          </button>
          <span className="text-sm text-muted-foreground">{filteredProducts.length} Products</span>
        </div>

        {/* Sidebar */}
        <aside className={`lg:w-64 shrink-0 space-y-10 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4 pb-2 border-b border-border">Category</h3>
            <ul className="space-y-3 font-light text-muted-foreground text-sm">
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => {
                        setActiveCategory(cat);
                        setIsFilterOpen(false); // Close on mobile after selection
                    }}
                    className={`hover:text-foreground transition-colors capitalize ${activeCategory.toLowerCase() === cat.toLowerCase() ? 'text-foreground font-medium underline underline-offset-4' : ''}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h3 className="text-sm font-semibold uppercase tracking-widest mb-4 pb-2 border-b border-border">Sort By</h3>
             <div className="relative">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full appearance-none bg-transparent border border-border px-4 py-2 pr-8 text-sm font-light text-foreground focus:outline-none focus:border-primary cursor-pointer rounded-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
             </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="hidden lg:flex justify-end mb-6 text-sm text-muted-foreground font-light">
             {filteredProducts.length} Products
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-muted-foreground mb-4">No products found in this category.</p>
              <button 
                onClick={() => setActiveCategory('All')} 
                className="text-sm uppercase tracking-widest border-b border-primary pb-1 hover:text-primary/70 transition-colors inline-block"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
              {filteredProducts.map(product => (
                <div key={product.id} className="group cursor-pointer flex flex-col h-full">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                    <img 
                      data-strk-img-id={`shop-${product.id}-main`}
                      data-strk-img={`[shop-title-${product.id}] [shop-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img 
                      data-strk-img-id={`shop-${product.id}-hover`}
                      data-strk-img={`[shop-title-${product.id}] close up worn lifestyle`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} worn`}
                      className="absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                        className="w-full bg-background/95 backdrop-blur text-foreground py-3 text-xs font-semibold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </Link>
                  <div className="text-center mt-auto">
                    <h3 id={`shop-title-${product.id}`} className="product-title mb-2"><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
                    <p className="font-serif text-lg">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;