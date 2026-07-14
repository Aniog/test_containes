import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/lib/data';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const sortParam = searchParams.get('sort') || 'featured';
  const containerRef = useRef(null);
  const { addToCart } = useStore();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Derive categories from products
  const categories = ['All', ...new Set(products.map(p => p.category))];

  // Filter products
  let filteredProducts = products;
  if (categoryParam && categoryParam.toLowerCase() !== 'all') {
    filteredProducts = products.filter(p => p.category.toLowerCase() === categoryParam.toLowerCase());
  }

  // Sort products
  if (sortParam === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortParam === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortParam === 'newest') {
    // Mock sort for newest
    filteredProducts.sort((a, b) => b.id.localeCompare(a.id));
  } else {
    // Featured (reset to original order)
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [categoryParam, sortParam]);

  const handleCategoryChange = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  const handleSortChange = (value) => {
    searchParams.set('sort', value);
    setSearchParams(searchParams);
  };

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-heading text-lg mb-4 uppercase tracking-widest">Category</h3>
        <ul className="space-y-3">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => handleCategoryChange(cat)}
                className={`text-sm uppercase tracking-wider hover:text-foreground transition-colors ${
                  (categoryParam === cat.toLowerCase() || (!categoryParam && cat === 'All'))
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground'
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-heading text-lg mb-4 uppercase tracking-widest">Material</h3>
        <ul className="space-y-3">
          <li>
            <label className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded border-border text-primary focus:ring-primary h-4 w-4" />
              <span>18K Gold Plated</span>
            </label>
          </li>
          <li>
            <label className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
              <input type="checkbox" className="rounded border-border text-primary focus:ring-primary h-4 w-4" />
              <span>Sterling Silver</span>
            </label>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-heading text-lg mb-4 uppercase tracking-widest">Price</h3>
        <ul className="space-y-3">
          <li>
            <label className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
              <input type="radio" name="price" className="border-border text-primary focus:ring-primary h-4 w-4" />
              <span>Under $50</span>
            </label>
          </li>
          <li>
            <label className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
              <input type="radio" name="price" className="border-border text-primary focus:ring-primary h-4 w-4" />
              <span>$50 - $100</span>
            </label>
          </li>
          <li>
            <label className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
              <input type="radio" name="price" className="border-border text-primary focus:ring-primary h-4 w-4" />
              <span>Over $100</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-32 pb-24 container mx-auto px-4">
      <div className="flex flex-col items-center justify-center text-center mb-16 space-y-4">
        <h1 className="font-heading text-4xl md:text-5xl uppercase tracking-widest">
          {categoryParam && categoryParam !== 'all' ? categoryParam : 'All Collection'}
        </h1>
        <p className="text-muted-foreground max-w-lg">
          Explore our thoughtfully curated collection of demi-fine jewelry. Each piece is designed to be cherished and worn every day.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 shrink-0 mt-[72px]">
          <FilterContent />
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
            <div className="md:hidden">
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="rounded-none uppercase tracking-widest text-xs gap-2 pointer-events-auto">
                    <Filter className="w-4 h-4" />
                    Filter
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <SheetHeader className="mb-8">
                    <SheetTitle className="font-heading text-2xl uppercase tracking-widest text-left">Filters</SheetTitle>
                  </SheetHeader>
                  <FilterContent />
                </SheetContent>
              </Sheet>
            </div>
            
            <div className="hidden md:block text-sm text-muted-foreground">
              {filteredProducts.length} Products
            </div>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground md:hidden" />
              <Select value={sortParam} onValueChange={handleSortChange}>
                <SelectTrigger className="w-[180px] bg-transparent border-0 font-medium uppercase tracking-wider text-xs shadow-none focus:ring-0 focus:ring-offset-0 px-0 justify-end gap-2 pointer-events-auto">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent align="end">
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group flex flex-col">
                <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-6 overflow-hidden bg-secondary w-full block">
                  <img
                    data-strk-img-id={`${product.imageId}-shop`}
                    data-strk-img={product.image}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Secondary image for hover */}
                  <img
                    data-strk-img-id={`${product.imageId}-shop-hover`}
                    data-strk-img={`${product.image} detail view close up`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} alternate view`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  
                  {/* Quick Add Button */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Button 
                      className="w-full bg-white/90 text-black hover:bg-white backdrop-blur-sm shadow-sm rounded-none uppercase tracking-widest text-xs relative z-10 py-3 h-auto"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product, 'Gold', 1);
                      }}
                    >
                      Quick Add
                    </Button>
                  </div>
                </Link>
                
                <div className="text-center space-y-2 mt-auto">
                  <h3 id={`shop-product-${product.id}-name`} className="font-heading tracking-widest text-sm uppercase">
                    <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
                      {product.name}
                    </Link>
                  </h3>
                  <p id={`shop-product-${product.id}-desc`} className="sr-only">{product.description}</p>
                  <p className="text-muted-foreground text-sm">${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-24 px-4 bg-secondary/30">
              <p className="text-lg text-muted-foreground mb-4">No products found matching your criteria.</p>
              <Button onClick={() => {
                searchParams.delete('category');
                setSearchParams(searchParams);
              }} variant="outline" className="rounded-none uppercase tracking-widest">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}