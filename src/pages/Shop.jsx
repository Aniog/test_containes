import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  const containerRef = useRef(null);
  const { addItem, openCart } = useCartStore();

  const categoryParam = searchParams.get('category');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filteredProducts]);

  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (categoryParam) {
      result = result.filter(p => p.category.toLowerCase() === categoryParam.toLowerCase());
    }

    // Sort
    if (sortOption === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } // 'featured' keeps original order mostly, maybe promote bestsellers

    setFilteredProducts(result);
  }, [categoryParam, sortOption]);

  const handleCategoryChange = (category) => {
    if (category) {
      setSearchParams({ category: category.toLowerCase() });
    } else {
      setSearchParams({});
    }
  };

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    addItem(product);
  };

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  return (
    <div className="pt-20 bg-background min-h-screen" ref={containerRef}>
      
      {/* Category Header */}
      <div className="bg-[#FAF9F6] py-16 px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-4 text-brand-charcoal capitalize">
          {categoryParam ? categoryParam : 'All Jewelry'}
        </h1>
        <p className="text-brand-muted max-w-2xl mx-auto font-light">
          Discover our collection of enduring demi-fine pieces, crafted to be layered, lived in, and loved.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-32">
              <h3 className="font-serif text-xl mb-6">Categories</h3>
              <ul className="space-y-4">
                {categories.map(cat => {
                  const isActive = (cat === 'All' && !categoryParam) || (cat.toLowerCase() === categoryParam?.toLowerCase());
                  return (
                    <li key={cat}>
                      <button 
                        onClick={() => handleCategoryChange(cat === 'All' ? null : cat)}
                        className={`text-sm tracking-wide transition-colors ${isActive ? 'text-brand-gold font-medium' : 'text-brand-muted hover:text-brand-charcoal'}`}
                      >
                        {cat}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="my-8 h-px bg-brand-border w-full" />
              
              <h3 className="font-serif text-xl mb-6">Material</h3>
              <ul className="space-y-4">
                <li>
                  <button className="text-sm tracking-wide text-brand-gold font-medium">
                    18K Gold Plated
                  </button>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 text-[#2A2A2A]">
            
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-brand-border">
              <span className="text-sm text-brand-muted">{filteredProducts.length} Products</span>
              
              <div className="flex items-center gap-4">
                {/* Mobile Filter Trigger */}
                <Sheet open={isMobileFiltersOpen} onOpenChange={setIsMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden rounded-none border-brand-border text-xs uppercase tracking-widest px-4 h-10">
                      <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] bg-background">
                    <SheetHeader className="pb-6 border-b border-brand-border mb-6">
                      <SheetTitle className="font-serif text-2xl">Filters</SheetTitle>
                    </SheetHeader>
                    <div className="space-y-8">
                       <div>
                        <h3 className="font-serif text-xl mb-4">Categories</h3>
                        <ul className="space-y-4">
                          {categories.map(cat => {
                            const isActive = (cat === 'All' && !categoryParam) || (cat.toLowerCase() === categoryParam?.toLowerCase());
                            return (
                              <li key={cat}>
                                <button 
                                  onClick={() => {
                                    handleCategoryChange(cat === 'All' ? null : cat);
                                    setIsMobileFiltersOpen(false);
                                  }}
                                  className={`text-sm tracking-wide transition-colors ${isActive ? 'text-brand-gold font-medium' : 'text-brand-muted hover:text-brand-charcoal'}`}
                                >
                                  {cat}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Sort Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="rounded-none border-brand-border text-xs uppercase tracking-widest px-4 h-10">
                      Sort <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-none border-brand-border">
                    <DropdownMenuItem onClick={() => setSortOption('featured')} className="text-sm cursor-pointer">Featured</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortOption('price-asc')} className="text-sm cursor-pointer">Price: Low to High</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortOption('price-desc')} className="text-sm cursor-pointer">Price: High to Low</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group group/card cursor-pointer flex flex-col">
                    <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
                      {product.isBestseller && (
                        <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] uppercase tracking-widest text-brand-charcoal">
                          Bestseller
                        </div>
                      )}
                      <img 
                        data-strk-img-id={`shop-${product.id}-img`}
                        data-strk-img={`[shop-${product.id}-name]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E`}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                        style={{backgroundColor: '#e5e5e5'}}
                      />
                      
                      <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/5 transition-colors duration-300" />
                      
                      <button 
                        onClick={(e) => handleAddToCart(e, product)}
                        className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm text-brand-charcoal py-4 text-xs uppercase tracking-widest translate-y-full group-hover/card:translate-y-0 transition-transform duration-300 ease-out hover:bg-brand-charcoal hover:text-white"
                      >
                        Add to Cart
                      </button>
                    </div>
                    
                    <div className="flex flex-col flex-1 items-center text-center">
                      <h3 id={`shop-${product.id}-name`} className="font-serif uppercase tracking-widest text-sm mb-2">{product.name}</h3>
                      <span className="text-brand-charcoal text-sm mt-auto">${product.price}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-24 text-center">
                <h3 className="font-serif text-2xl mb-4">No pieces found.</h3>
                <p className="text-brand-muted mb-8">Try adjusting your filters.</p>
                <Button 
                  onClick={() => setSearchParams({})}
                  className="bg-brand-charcoal text-white hover:bg-brand-black rounded-none px-8 tracking-widest text-xs uppercase"
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