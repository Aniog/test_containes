import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '@/api/products';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';

const Shop = () => {
  const { category: categorySlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const activeCategory = categorySlug ? categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1) : 'All';

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }
    
    if (sortBy === 'price-low-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high-low') {
      result.sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [activeCategory, sortBy]);

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-[10px] tracking-[0.2em] font-bold uppercase mb-4 text-primary">Category</h4>
        <div className="flex flex-col space-y-2">
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                if (cat === 'All') {
                  setSearchParams({});
                } else {
                  setSearchParams({ category: cat.toLowerCase() });
                }
              }}
              className={`text-sm tracking-wide text-left hover:text-accent transition-colors ${
                (cat === 'All' && !categorySlug) || (cat.toLowerCase() === categorySlug) 
                  ? 'text-accent font-medium underline underline-offset-4' 
                  : 'text-muted-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="text-[10px] tracking-[0.2em] font-bold uppercase mb-4 text-primary">Price Range</h4>
        <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
          <label className="flex items-center space-x-2 cursor-pointer hover:text-accent transition-colors">
            <input type="checkbox" className="rounded border-border bg-background border-muted" />
            <span>Under $50</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer hover:text-accent transition-colors">
            <input type="checkbox" className="rounded border-border bg-background border-muted" />
            <span>$50 - $100</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer hover:text-accent transition-colors">
            <input type="checkbox" className="rounded border-border bg-background border-muted" />
            <span>Over $100</span>
          </label>
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="text-[10px] tracking-[0.2em] font-bold uppercase mb-4 text-primary">Material</h4>
        <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
          <label className="flex items-center space-x-2 cursor-pointer hover:text-accent transition-colors">
            <input type="checkbox" className="rounded border-border bg-background border-muted" />
            <span>18K Gold Plated</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer hover:text-accent transition-colors">
            <input type="checkbox" className="rounded border-border bg-background border-muted" />
            <span>925 Sterling Silver</span>
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="px-6 md:px-12 py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-primary uppercase leading-tight">
            {activeCategory} {activeCategory === 'All' ? 'Jewelry' : ''}
          </h1>
          <div className="w-12 h-[1px] bg-accent/30 mx-auto" />
          <p className="text-sm text-muted-foreground tracking-widest uppercase max-w-xl">
            Ethically crafted, demi-fine essentials designed for everyday luxury and timeless elegance.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <div className="flex items-center justify-between mb-8 border-b border-border pb-6">
          <Sheet open={isMobileFiltersOpen} onOpenChange={setIsMobileFiltersOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden flex items-center space-x-2 rounded-none border-border">
                <SlidersHorizontal size={16} />
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase">Filters</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="mb-8 border-b border-border pb-4">
                <SheetTitle className="font-serif tracking-widest uppercase">Filters</SheetTitle>
              </SheetHeader>
              <FilterContent />
            </SheetContent>
          </Sheet>

          <p className="hidden md:block text-[10px] tracking-[0.2em] font-bold uppercase text-muted-foreground">
            {filteredProducts.length} PRODUCTS
          </p>

          <div className="flex items-center space-x-4">
            <div className="relative group">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border-none text-[10px] tracking-[0.2em] font-bold uppercase pr-8 cursor-pointer focus:ring-0 text-primary"
              >
                <option value="featured">Sort By: Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="newest">Newest Arrival</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-50" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-48 shrink-0">
            <FilterContent />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center border border-dashed border-border flex flex-col items-center">
                <p className="font-serif text-xl opacity-60 mb-4">No products found in this category.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setSearchParams({})}
                  className="rounded-none uppercase tracking-widest text-xs"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
