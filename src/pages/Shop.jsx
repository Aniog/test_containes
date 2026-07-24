import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { products } from './Home';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '../lib/utils';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    const buttonElement = e.currentTarget;
    const parentContainer = buttonElement.closest('div.relative.aspect-\\[3\\/4\\]');
    let realImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";
    
    if (parentContainer) {
      const imgElements = parentContainer.querySelectorAll('img[data-strk-img-id]');
      if (imgElements && imgElements.length > 0) {
        realImage = imgElements[0].src;
      }
    }

    addItem({
      ...product,
      variant: 'gold',
      image: realImage
    });
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div 
        className="relative aspect-[3/4] bg-muted mb-4 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            isHovered ? "opacity-0" : "opacity-100"
          )}
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-product-desc-${product.id}] [shop-product-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}
          data-strk-img-id={`shop-${product.imgHoverId}`}
          data-strk-img={`[shop-product-desc-${product.id}] [shop-product-name-${product.id}] lifestyle`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />
        
        <div className={cn(
          "absolute bottom-0 inset-x-0 p-4 translate-y-full transition-transform duration-300 pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-0",
        )}>
          <button 
            onClick={handleAddToCart}
            className="w-full bg-background/90 backdrop-blur text-foreground py-3 text-sm tracking-widest uppercase hover:bg-background transition-colors shadow-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="text-center group-hover:opacity-70 transition-opacity">
        <h3 id={`shop-product-name-${product.id}`} className="font-serif text-lg tracking-wider mb-1">{product.name}</h3>
        <p id={`shop-product-desc-${product.id}`} className="text-muted-foreground text-sm mb-2 opacity-0 h-0 overflow-hidden">{product.description}</p>
        <p className="font-medium text-sm">${product.price}</p>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  
  const categoryFilter = searchParams.get('category');
  
  const categories = [
    { id: 'all', label: 'All Jewelry' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'huggies', label: 'Huggies' },
    { id: 'sets', label: 'Matching Sets' }
  ];

  const handleCategoryChange = (catId) => {
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
    setIsMobileFiltersOpen(false);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];
    
    if (categoryFilter && categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    switch(sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-a-z':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    
    return result;
  }, [categoryFilter, sortBy]);

  useEffect(() => {
    try {
      if (typeof ImageHelper !== 'undefined') {
        const frameId = window.requestAnimationFrame(() => {
          ImageHelper.loadImages(strkImgConfig || {}, containerRef.current);
        });
        return () => window.cancelAnimationFrame(frameId);
      }
    } catch(e) {
      console.log("Image load expected failure", e);
    }
  }, [filteredAndSortedProducts]);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background" ref={containerRef}>
      {/* Page Header */}
      <div className="bg-secondary mb-12">
         <div className="container mx-auto px-4 md:px-6 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">
              {categoryFilter ? categories.find(c => c.id === categoryFilter)?.label : 'The Collection'}
            </h1>
            <p className="text-muted-foreground font-light max-w-xl mx-auto">
              Curated demi-fine pieces designed for the modern editorial aesthetic. 18k gold plated for lasting everyday wear.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-32">
              <h2 className="text-xl font-serif mb-6 pb-4 border-b border-border">Categories</h2>
              <ul className="space-y-4">
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => handleCategoryChange(cat.id)}
                      className={cn(
                        "text-sm tracking-widest uppercase transition-colors hover:text-foreground",
                        (categoryFilter === cat.id || (!categoryFilter && cat.id === 'all'))
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                      )}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 pb-4 border-b border-border gap-4">
              <button 
                className="lg:hidden flex items-center gap-2 text-sm uppercase tracking-widest"
                onClick={() => setIsMobileFiltersOpen(true)}
              >
                <SlidersHorizontal size={18} />
                Filters
              </button>
              
              <div className="text-sm text-muted-foreground hidden sm:block">
                Showing {filteredAndSortedProducts.length} items
              </div>
              
              <div className="flex items-center gap-2 self-end sm:self-auto relative group">
                <span className="text-sm uppercase tracking-widest text-muted-foreground">Sort By:</span>
                <select 
                  className="bg-transparent text-sm uppercase tracking-widest appearance-none outline-none cursor-pointer pr-4"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name-a-z">Alphabetical</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 pointer-events-none text-muted-foreground" />
              </div>
            </div>

            {/* Product Grid */}
            {filteredAndSortedProducts.length > 0 ? (
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                 {filteredAndSortedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                 ))}
               </div>
            ) : (
                <div className="py-24 text-center">
                    <p className="text-xl font-serif mb-4">No products found in this category.</p>
                    <button 
                      onClick={() => handleCategoryChange('all')}
                      className="border-b border-foreground text-sm uppercase tracking-widest pb-1 hover:text-muted-foreground transition-colors"
                    >
                        View All Collections
                    </button>
                </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <div className={cn(
        "fixed inset-0 z-50 transition-opacity",
        isMobileFiltersOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileFiltersOpen(false)} />
        <div className={cn(
          "absolute inset-y-0 left-0 w-4/5 max-w-sm bg-background transition-transform duration-300 transform flex flex-col shadow-2xl",
          isMobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="flex justify-between items-center p-6 border-b border-border">
            <h2 className="text-xl font-serif">Filters</h2>
            <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 -mr-2">
              <X size={24} />
            </button>
          </div>
          
          <div className="p-6 flex-1 overflow-y-auto">
            <h3 className="text-sm uppercase tracking-widest mb-6 text-muted-foreground">Categories</h3>
            <ul className="space-y-6">
              {categories.map(cat => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryChange(cat.id)}
                    className={cn(
                      "text-lg font-serif transition-colors",
                      (categoryFilter === cat.id || (!categoryFilter && cat.id === 'all'))
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-6 border-t border-border">
            <button 
                onClick={() => setIsMobileFiltersOpen(false)}
                className="w-full bg-primary text-primary-foreground py-4 uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
            >
                View Results ({filteredAndSortedProducts.length})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}