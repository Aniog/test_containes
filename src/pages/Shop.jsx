import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, Check } from 'lucide-react';
import { seedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const { category } = useParams();
  const { addToCart } = useCart();
  const containerRef = React.useRef(null);
  
  React.useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [category]);
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [priceFilter, setPriceFilter] = useState(null);

  // Derive products based on route params and filters
  const filteredProducts = useMemo(() => {
    let result = [...seedProducts];
    
    // Category filter
    if (category && category !== 'all') {
      if (category === 'bestsellers') {
        result = result.filter(p => p.isBestseller);
      } else {
        // match case-insensitively
        result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
      }
    }

    // Price filter
    if (priceFilter) {
      if (priceFilter === 'under50') result = result.filter(p => p.price < 50);
      else if (priceFilter === '50to100') result = result.filter(p => p.price >= 50 && p.price <= 100);
      else if (priceFilter === 'over100') result = result.filter(p => p.price > 100);
    }

    // Sorting
    switch(sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // using ID as a proxy for newest
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [category, sortBy, priceFilter]);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const pageTitle = category === 'all' || !category 
    ? 'All Jewelry' 
    : category === 'bestsellers' 
      ? 'Bestsellers'
      : category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="pt-20 min-h-screen" ref={containerRef}>
      {/* Header */}
      <div className="bg-[#F9F8F6] py-16 text-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">{pageTitle}</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover our curated collection of demi-fine jewelry. Crafted for the modern muse to wear every day.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex justify-between items-center border-b border-border pb-4">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center text-sm font-sans tracking-widest uppercase"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filter & Sort
            </button>
            <span className="text-sm text-muted-foreground">{filteredProducts.length} Results</span>
          </div>

          {/* Sidebar Filters */}
          <div className={`lg:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="space-y-10 sticky top-24">
              {/* Sort (Mobile mainly, but visible on desktop too) */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase mb-4 text-foreground/70">Sort By</h3>
                <ul className="space-y-3 font-serif text-lg">
                  {[
                    { id: 'featured', label: 'Featured' },
                    { id: 'newest', label: 'New Arrivals' },
                    { id: 'price-low', label: 'Price: Low to High' },
                    { id: 'price-high', label: 'Price: High to Low' },
                  ].map(option => (
                    <li key={option.id}>
                      <button 
                        onClick={() => setSortBy(option.id)}
                        className={`flex items-center hover:text-primary transition-colors ${sortBy === option.id ? 'text-primary' : 'text-muted-foreground'}`}
                      >
                        {sortBy === option.id && <Check className="w-4 h-4 mr-2" />}
                        <span className={sortBy !== option.id ? 'ml-6' : ''}>{option.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase mb-4 text-foreground/70">Price</h3>
                <ul className="space-y-3 font-serif text-lg">
                  {[
                    { id: null, label: 'All Prices' },
                    { id: 'under50', label: 'Under $50' },
                    { id: '50to100', label: '$50 - $100' },
                    { id: 'over100', label: 'Over $100' },
                  ].map(option => (
                    <li key={option.label}>
                       <button 
                        onClick={() => setPriceFilter(option.id)}
                        className={`flex items-center hover:text-primary transition-colors ${priceFilter === option.id ? 'text-primary' : 'text-muted-foreground'}`}
                      >
                        {priceFilter === option.id && <Check className="w-4 h-4 mr-2" />}
                        <span className={priceFilter !== option.id ? 'ml-6' : ''}>{option.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="hidden lg:flex justify-between items-center mb-8 pb-4 border-b border-border">
              <span className="text-sm text-muted-foreground">{filteredProducts.length} Results</span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-muted-foreground mb-4">No products found matching your criteria.</p>
                <button 
                  onClick={() => { setPriceFilter(null); setSortBy('featured'); }}
                  className="text-sm font-sans tracking-widest uppercase text-primary hover:text-primary/80"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6">
                {filteredProducts.map(product => (
                  <Link key={product.id} to={`/products/${product.id}`} className="group block">
                    <div className="relative aspect-[3/4] mb-4 bg-muted overflow-hidden">
                      <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        data-strk-img-id={product.imageId}
                        data-strk-img={`[product-title-${product.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                      />
                      <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`${product.name} worn`}
                        data-strk-img-id={product.imageHoverId}
                        data-strk-img={`model wearing [product-title-${product.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-105 group-hover:scale-100"
                      />
                      
                      <button 
                        onClick={(e) => handleQuickAdd(e, product)}
                        className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur text-foreground py-3 text-xs tracking-widest uppercase opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                      >
                        Quick Add
                      </button>
                    </div>
                    <div className="text-center px-2">
                      <h3 id={`product-title-${product.id}`} className="font-serif text-base uppercase tracking-widest mb-1 truncate">{product.name}</h3>
                      <p className="text-muted-foreground">${product.price}</p>
                    </div>
                  </Link>
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
