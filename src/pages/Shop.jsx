import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { seedProducts } from '@/data/mockData';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState('featured');

  const currentCategory = searchParams.get('category') || 'All';
  
  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = useMemo(() => {
    let result = [...seedProducts];
    
    if (currentCategory !== 'All') {
      result = result.filter(p => p.category === currentCategory);
    }
    
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      default: // featured
        result.sort((a, b) => (b.isBestseller === a.isBestseller) ? 0 : b.isBestseller ? 1 : -1);
    }
    
    return result;
  }, [currentCategory, sortOption]);

  const updateCategory = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
    setIsFilterOpen(false);
  };

  return (
    <div className="pt-24 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="text-center mb-16 pt-8">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">{currentCategory === 'All' ? 'Complete Collection' : currentCategory}</h1>
        <p className="text-muted-foreground font-light max-w-lg mx-auto">
          Discover our full range of demi-fine jewelry. Designed to be layered, loved, and lived in.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 pb-4 border-b border-border gap-4">
        <button 
          className="flex items-center gap-2 text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors md:hidden w-full justify-center sm:w-auto sm:justify-start py-2 border sm:border-transparent rounded-md"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </button>
        
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase overflow-x-auto pb-2 -mb-2 w-full sm:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => updateCategory(cat)}
              className={cn(
                "whitespace-nowrap transition-colors hover:text-accent",
                currentCategory === cat ? "text-foreground border-b border-foreground" : "text-muted-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative flex items-center w-full sm:w-auto justify-between sm:justify-end gap-4">
          <span className="text-xs text-muted-foreground">{filteredProducts.length} Products</span>
          <div className="relative group">
            <select 
              className="appearance-none bg-transparent text-sm font-medium tracking-widest uppercase pr-8 py-2 cursor-pointer outline-none hover:text-accent transition-colors"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="md:hidden mb-8 p-6 bg-stone-100 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium tracking-widest uppercase text-sm">Categories</h3>
            <button onClick={() => setIsFilterOpen(false)}><X className="w-5 h-5" /></button>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => updateCategory(cat)}
                className={cn(
                  "text-left py-2 border-b border-border/50",
                  currentCategory === cat ? "font-bold text-foreground" : "text-muted-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative flex flex-col">
              <Link to={`/product/${product.slug}`} className="block relative aspect-[4/5] overflow-hidden bg-stone-100 mb-4">
                <img 
                  data-strk-img={product.images.primary}
                  data-strk-img-id={`shop-primary-${product.id}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                 <img 
                  data-strk-img={product.images.hover}
                  data-strk-img-id={`shop-hover-${product.id}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
                
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                  <div className="pointer-events-auto">
                    <Button 
                      variant="solid" 
                      className="w-full bg-stone-900/90 backdrop-blur-sm text-stone-50 hover:bg-stone-900"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                    >
                      Quick Add
                    </Button>
                  </div>
                </div>
              </Link>
              
              <div className="text-center flex flex-col flex-grow">
                <h3 className="font-serif uppercase tracking-wider text-sm mb-1">
                  <Link to={`/product/${product.slug}`} className="hover:text-accent transition-colors">
                    {product.name}
                  </Link>
                </h3>
                <p className="text-sm font-medium mt-auto">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <p className="text-lg text-muted-foreground mb-6">No products found in this category.</p>
          <Button onClick={() => updateCategory('All')} variant="outline">Clear Filters</Button>
        </div>
      )}
    </div>
  );
}
