import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [sortParam, setSortParam] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (categoryFilter && categoryFilter !== 'Collections') {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    switch (sortParam) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        // featured: do nothing (keep seed order)
        break;
    }
    return result;
  }, [categoryFilter, sortParam]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts, sortParam, categoryFilter]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
  const handleCategoryClick = (cat) => {
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
    setIsMobileFiltersOpen(false);
  };

  return (
    <div ref={containerRef} className="pt-24 pb-24">
      {/* Header Banner */}
      <div className="bg-secondary mb-16 relative">
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-multiply"
          data-strk-bg-id="col-bg-1"
          data-strk-bg="[col-title] fine gold jewelry aesthetic editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="container mx-auto px-4 md:px-8 py-20 text-center relative z-10">
          <h1 id="col-title" className="text-4xl md:text-5xl font-serif uppercase tracking-widest mb-4">
            {categoryFilter || 'Shop All'}
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Discover our collection of demi-fine pieces, thoughtfully designed to be layered, loved, and lived in.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        
        {/* Controls Row */}
        <div className="flex justify-between items-center mb-8 border-b border-border pb-4">
          <button 
            className="md:hidden flex items-center gap-2 text-sm uppercase tracking-widest"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            <SlidersHorizontal size={16} /> Filters
          </button>
          
          <div className="hidden md:flex gap-6 text-sm uppercase tracking-widest text-muted-foreground">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`hover:text-foreground transition-colors ${
                  (categoryFilter === cat) || (!categoryFilter && cat === 'All') 
                    ? 'text-foreground border-b border-foreground' 
                    : ''
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative group">
            <button className="flex items-center gap-2 text-sm uppercase tracking-widest">
              Sort By <ChevronDown size={14} className="opacity-50" />
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 flex flex-col py-2">
              <button 
                className={`text-left px-4 py-2 text-sm hover:bg-muted ${sortParam === 'featured' ? 'font-medium' : ''}`}
                onClick={() => setSortParam('featured')}
              >
                Featured
              </button>
              <button 
                className={`text-left px-4 py-2 text-sm hover:bg-muted ${sortParam === 'price-low' ? 'font-medium' : ''}`}
                onClick={() => setSortParam('price-low')}
              >
                Price: Low to High
              </button>
              <button 
                className={`text-left px-4 py-2 text-sm hover:bg-muted ${sortParam === 'price-high' ? 'font-medium' : ''}`}
                onClick={() => setSortParam('price-high')}
              >
                Price: High to Low
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Filters Drawer */}
        {isMobileFiltersOpen && (
          <div className="md:hidden bg-muted p-6 mb-8 -mt-4 flex flex-col gap-4">
             <h3 className="font-serif text-lg border-b border-border/50 pb-2">Categories</h3>
             {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`text-left text-sm uppercase tracking-widest ${
                  (categoryFilter === cat) || (!categoryFilter && cat === 'All') ? 'font-medium text-primary' : 'text-muted-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="flex flex-wrap -mx-2 md:-mx-3">
            {filteredProducts.map(product => (
              <div key={product.id} className="w-1/2 md:w-1/3 lg:w-1/4 px-2 md:px-3 mb-8 md:mb-12">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h2 className="text-2xl font-serif mb-4">No products found</h2>
            <p className="text-muted-foreground mb-8">Try adjusting your filters or search criteria.</p>
            <Button onClick={() => handleCategoryClick('All')} variant="outline">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}