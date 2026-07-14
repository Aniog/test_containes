import { useState, useMemo, useEffect, useRef } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/components/cart/CartContext';
import { Button } from '@/components/ui/button';
import { LayoutGrid, List, SlidersHorizontal, ChevronDown } from 'lucide-react';

export function Shop() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'all');
  const [sortOption, setSortOption] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  // Update active category when URL changes
  useEffect(() => {
    setActiveCategory(categoryParam || 'all');
  }, [categoryParam]);

  // Load images when products change
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortOption]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      navigate('/shop');
    } else {
      navigate(`/shop?category=${category}`);
    }
  };

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category.toLowerCase() === activeCategory);
    }
    
    switch (sortOption) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'newest':
        // Assuming higher ID is newer just for demo purposes
        return filtered.sort((a, b) => b.id.localeCompare(a.id));
      case 'featured':
      default:
        // Already generally in featured order in data
        return filtered;
    }
  }, [activeCategory, sortOption]);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-foreground mb-4 capitalize">
            {activeCategory === 'all' ? 'All Collections' : activeCategory}
          </h1>
          <p className="text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
            Discover our curated selection of demi-fine jewelry. Designed to be layered, loved, and lived in.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-y border-border py-4 mb-8 gap-4">
          
          {/* Mobile Filter Toggle */}
          <div className="w-full flex justify-between md:hidden">
            <button 
              className="flex items-center text-sm tracking-widest uppercase font-serif"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </button>
            <div className="text-sm text-muted-foreground">
              {filteredProducts.length} Results
            </div>
          </div>

          {/* Desktop Categories */}
          <div className="hidden md:flex space-x-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-xs tracking-widest uppercase pb-1 border-b-2 transition-colors ${
                  activeCategory === cat 
                    ? 'border-primary text-foreground' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center w-full md:w-auto justify-between md:justify-end md:space-x-6">
            <div className="hidden md:block text-sm text-muted-foreground tracking-wide">
              {filteredProducts.length} Results
            </div>
            
            <div className="flex items-center text-sm border border-border px-3 py-1.5 focus-within:ring-1 focus-within:ring-primary h-10 w-full md:w-auto">
              <span className="text-muted-foreground mr-2 font-serif tracking-wider uppercase text-[10px]">Sort</span>
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-transparent border-none outline-none text-foreground focus:ring-0 cursor-pointer w-full"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="hidden lg:flex border border-border h-10">
              <button 
                onClick={() => setViewMode('grid')}
                className={`w-10 flex items-center justify-center transition-colors ${viewMode === 'grid' ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <LayoutGrid className="w-4 h-4 stroke-[1.5]" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`w-10 flex items-center justify-center transition-colors border-l border-border ${viewMode === 'list' ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <List className="w-4 h-4 stroke-[1.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Filters Drawer */}
        {mobileFiltersOpen && (
          <div className="md:hidden border-b border-border pb-6 mb-8 mb-8 space-y-4">
            <h3 className="font-serif tracking-widest text-sm uppercase">Categories</h3>
            <div className="flex flex-col space-y-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    handleCategoryChange(cat);
                    setMobileFiltersOpen(false);
                  }}
                  className={`text-left text-sm tracking-wide capitalize ${
                    activeCategory === cat ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  {cat === 'all' ? 'All Jewelry' : cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className={`grid gap-x-6 gap-y-12 sm:grid-cols-2 ${
          viewMode === 'grid' ? 'lg:grid-cols-3 xl:grid-cols-4' : 'lg:grid-cols-2'
        }`}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className={`group relative flex ${viewMode === 'list' ? 'flex-row gap-6' : 'flex-col'} cursor-pointer`}>
                <Link to={`/product/${product.id}`} className={`${viewMode === 'list' ? 'w-1/2' : 'w-full'} aspect-[3/4] relative overflow-hidden bg-secondary mb-4 block flex-shrink-0`}>
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                    data-strk-img-id={`shop-${product.imgId}`}
                    data-strk-img={`[shop-item-${product.id}-title] on model`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  />
                  <img
                    alt={`${product.name} alternate view`}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    data-strk-img-id={`shop-${product.hoverImgId}`}
                    data-strk-img={`[shop-item-${product.id}-title] close up detail`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  />
                  
                  {product.isBestseller && viewMode === 'grid' && (
                    <span className="absolute top-2 left-2 bg-background/90 backdrop-blur-sm text-[10px] font-serif uppercase tracking-widest px-2 py-1">
                      Bestseller
                    </span>
                  )}
                  
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button 
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="w-full bg-background/95 hover:bg-primary text-foreground hover:text-primary-foreground backdrop-blur-sm rounded-none h-12 uppercase tracking-widest text-xs font-serif transition-colors"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Link>
                
                <div className={`flex flex-col flex-1 ${viewMode === 'grid' ? 'text-center' : 'justify-center text-left'}`}>
                  {product.isBestseller && viewMode === 'list' && (
                    <span className="text-[10px] text-primary font-serif uppercase tracking-widest mb-2">Bestseller</span>
                  )}
                  
                  <Link to={`/product/${product.id}`}>
                    <h3 id={`shop-item-${product.id}-title`} className="font-serif uppercase tracking-widest text-[13px] md:text-sm text-foreground mb-2 group-hover:text-primary transition-colors leading-snug mx-auto max-w-[90%]">
                      {product.name}
                    </h3>
                  </Link>
                  
                  {viewMode === 'list' && (
                    <p className="text-sm font-light text-muted-foreground my-4 line-clamp-3">
                      {product.description}
                    </p>
                  )}
                  
                  <p className="text-sm text-muted-foreground font-light">${product.price.toFixed(2)}</p>
                  
                  {viewMode === 'list' && (
                    <Button 
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="mt-6 w-max bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none h-12 px-8 uppercase tracking-widest text-xs font-serif transition-all"
                    >
                      Add to Cart
                    </Button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-xl font-serif text-muted-foreground font-light tracking-wide mb-6">No products found in this category.</p>
              <Button 
                onClick={() => handleCategoryChange('all')}
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none uppercase tracking-widest font-serif text-xs font-light h-12 px-8"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}