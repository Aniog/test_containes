import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { Button } from '../components/ui/button';
import { useCart } from '../lib/cart-context';
import { toast } from 'sonner';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

export function Collection() {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const categoryFilter = searchParams.get('category');
  const sortParam = searchParams.get('sort') || 'featured';
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    if (sortParam === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortParam === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [categoryFilter, sortParam]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ImageHelper && ImageHelper.loadImages && strkImgConfig && containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts]);

  const handleAddToCart = (product) => {
    addItem(product);
    toast.success(`${product.title} added to cart`);
  };

  const handleCategoryChange = (category) => {
    if (category) {
      setSearchParams({ category, sort: sortParam });
    } else {
      setSearchParams({ sort: sortParam });
    }
  };

  const handleSortChange = (e) => {
    const sort = e.target.value;
    if (categoryFilter) {
      setSearchParams({ category: categoryFilter, sort });
    } else {
      setSearchParams({ sort });
    }
  };

  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div ref={containerRef} className="bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl mb-4 capitalize">
            {categoryFilter ? categoryFilter : 'All Jewelry'}
          </h1>
          <p className="text-muted-foreground">
            {categoryFilter 
              ? `Discover our curated collection of ${categoryFilter}.` 
              : 'Explore our complete collection of demi-fine jewelry.'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b border-border mb-8 gap-4">
          <Button 
            variant="outline" 
            className="sm:hidden w-full flex items-center gap-2 border-border"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </Button>
          
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium tracking-wide">
            <button 
              onClick={() => handleCategoryChange(null)}
              className={`hover:text-accent transition-colors ${!categoryFilter ? 'border-b border-foreground' : 'text-muted-foreground'}`}
            >
              All
            </button>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`capitalize hover:text-accent transition-colors ${categoryFilter === cat ? 'border-b border-foreground' : 'text-muted-foreground'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto mt-4 sm:mt-0">
            <span className="text-sm text-muted-foreground hidden sm:inline">Sort by:</span>
            <div className="relative w-full sm:w-auto">
              <select 
                value={sortParam}
                onChange={handleSortChange}
                className="w-full sm:w-auto appearance-none bg-transparent border border-border pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent rounded-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Mobile Filters Dropdown */}
        {isFilterOpen && (
          <div className="sm:hidden mb-8 border border-border p-4 bg-secondary">
            <h3 className="font-serif mb-4 flex justify-between items-center">
              Categories
            </h3>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => { handleCategoryChange(null); setIsFilterOpen(false); }}
                className={`text-left text-sm ${!categoryFilter ? 'font-bold' : ''}`}
              >
                All Jewelry
              </button>
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => { handleCategoryChange(cat); setIsFilterOpen(false); }}
                  className={`text-left capitalize text-sm ${categoryFilter === cat ? 'font-bold' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map(product => (
            <div key={product.id} className="group flex flex-col">
              <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary block">
                <img 
                  alt={product.title}
                  data-strk-img-id={`collection-${product.id}-img1`}
                  data-strk-img={`[product-${product.id}-title] on white marble`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-0"
                />
                <img 
                  alt={product.title}
                  data-strk-img-id={`collection-${product.id}-img2`}
                  data-strk-img={`[product-${product.id}-title] lifestyle model`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="object-cover w-full h-full absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button 
                    className="w-full bg-background/90 text-foreground hover:bg-accent hover:text-accent-foreground backdrop-blur"
                    onClick={(e) => { e.preventDefault(); handleAddToCart(product); }}
                  >
                    Quick Add
                  </Button>
                </div>
              </Link>
              <Link to={`/product/${product.id}`}>
                <h3 className="font-serif text-lg leading-tight mb-1" id={`product-${product.id}-title`}>{product.title}</h3>
                <p className="text-muted-foreground text-sm">${product.price.toFixed(2)}</p>
              </Link>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            No products found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}