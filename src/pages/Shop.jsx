import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES, MATERIALS } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Filter, X, ChevronDown } from 'lucide-react';

const Shop = () => {
  const containerRef = useRef(null);
  const { addItem } = useCartStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categoryFilter = searchParams.get('category');
  const sortFilter = searchParams.get('sort') || 'featured';
  
  useEffect(() => {
    try {
      if (typeof ImageHelper !== 'undefined') {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    } catch (e) {
      console.error("Image loader error", e);
    }
  }, [categoryFilter, sortFilter]);

  let filteredProducts = [...PRODUCTS];
  if (categoryFilter && categoryFilter !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
  }
  
  if (sortFilter === 'price-low-high') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortFilter === 'price-high-low') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const handleCategoryChange = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const handleSortChange = (e) => {
    const sort = e.target.value;
    if (sort === 'featured') {
      searchParams.delete('sort');
    } else {
      searchParams.set('sort', sort);
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="container mx-auto px-4 max-w-7xl py-12 md:py-24 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-widest mb-4">
          {categoryFilter && categoryFilter !== 'All' ? categoryFilter : 'All Collections'}
        </h1>
        <p className="text-muted-foreground">{filteredProducts.length} Products</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex justify-between items-center mb-6 pt-4 border-t border-border border-b py-4">
          <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center gap-2 uppercase tracking-widest text-sm font-medium">
            <Filter className="w-4 h-4" /> Filters
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Sort</span>
            <select 
              value={sortFilter} 
              onChange={handleSortChange}
              className="bg-transparent border-none text-sm uppercase tracking-widest focus:ring-0 cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Sidebar Filters */}
        <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0 animate-in slide-in-from-left-4 lg:animate-none`}>
          <div className="sticky top-32 space-y-10">
            
            <div>
              <h3 className="uppercase tracking-widest text-sm font-medium mb-4">Category</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => handleCategoryChange('All')}
                    className={`text-sm tracking-wide hover:text-foreground transition-colors ${!categoryFilter || categoryFilter === 'All' ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
                  >
                    All Jewelry
                  </button>
                </li>
                {CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => handleCategoryChange(cat)}
                      className={`text-sm tracking-wide hover:text-foreground transition-colors ${categoryFilter === cat ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:block">
              <h3 className="uppercase tracking-widest text-sm font-medium mb-4">Materials</h3>
              <ul className="space-y-3">
                {MATERIALS.map(mat => (
                  <li key={mat}>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded-sm border-muted text-accent focus:ring-accent accent-accent" />
                      <span className="text-sm tracking-wide text-muted-foreground group-hover:text-foreground transition-colors">{mat}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:block">
              <h3 className="uppercase tracking-widest text-sm font-medium mb-4">Sort By</h3>
              <select 
                value={sortFilter} 
                onChange={handleSortChange}
                className="w-full border border-border bg-background p-3 text-sm focus:outline-none focus:border-foreground transition-colors cursor-pointer appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
              </select>
            </div>

          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-xl font-serif text-muted-foreground">No products found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-6 uppercase tracking-widest"
                onClick={() => setSearchParams({})}
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group flex flex-col animate-in fade-in zoom-in-95 duration-500 fill-mode-both" style={{ animationDelay: `${Math.random() * 200}ms`}}>
                  <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary block">
                    <img
                      alt={product.name}
                      data-strk-img-id={`shop-img-${product.id}`}
                      data-strk-img={`[shop-title-${product.id}] jewelry product photography`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <Button 
                        onClick={(e) => {
                          e.preventDefault();
                          addItem(product);
                        }} 
                        className="w-full bg-background/90 text-foreground hover:bg-background backdrop-blur-sm shadow-sm font-sans uppercase tracking-widest text-xs h-12"
                      >
                        Quick Add
                      </Button>
                    </div>
                  </Link>
                  <div className="flex flex-col gap-1 items-center text-center px-2">
                    <h3 id={`shop-title-${product.id}`} className="font-serif uppercase tracking-wider text-base leading-snug">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h3>
                    <span className="font-medium tracking-wide mt-1">${product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Shop;