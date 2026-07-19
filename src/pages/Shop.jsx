import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products, useCartStore } from '@/store';
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ChevronDown, Check } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ProductCard = ({ product }) => {
    const { addItem } = useCartStore();
    const [isHovered, setIsHovered] = React.useState(false);
  
    return (
      <div 
        className="group relative flex flex-col cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted mb-4 rounded-sm">
          <Link to={`/product/${product.id}`} className="block h-full w-full">
             <img
              data-strk-img-id={`shop-prod-${product.id}-img-1`}
              data-strk-img={`[shop-prod-${product.id}-title] primary image close up jewelry product shot on neutral background`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="400"
              alt={product.name}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <img
              data-strk-img-id={`shop-prod-${product.id}-img-2`}
              data-strk-img={`[shop-prod-${product.id}-title] lifestyle image model wearing jewelry`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="400"
              alt={`${product.name} lifestyle`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </Link>
          <div className={`absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out hidden lg:block z-20`}>
            <Button 
              className="w-full bg-background/95 text-foreground hover:bg-background tracking-widest uppercase text-xs h-10"
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
            >
              Quick Add +
            </Button>
          </div>
        </div>
        <div className="flex flex-col text-center">
          <h3 id={`shop-prod-${product.id}-title`} className="text-xs tracking-[0.15em] font-medium uppercase mb-1.5">
            <Link to={`/product/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0 z-10 lg:z-auto" />
              {product.name}
            </Link>
          </h3>
          <p className="text-sm font-serif italic text-muted-foreground">${product.price}</p>
        </div>
      </div>
    );
};

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [sortOption, setSortOption] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [categoryParam, sortOption]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = useMemo(() => {
     let filtered = products;
     if (categoryParam && categoryParam !== 'All') {
         filtered = filtered.filter(p => p.category === categoryParam);
     }
     
     return [...filtered].sort((a, b) => {
         if (sortOption === 'price-asc') return a.price - b.price;
         if (sortOption === 'price-desc') return b.price - a.price;
         return 0; // featured/default
     });
  }, [categoryParam, sortOption]);

  const handleCategoryChange = (category) => {
      if (category === 'All') {
          searchParams.delete('category');
      } else {
          searchParams.set('category', category);
      }
      setSearchParams(searchParams);
      setIsMobileFiltersOpen(false);
  };

  const sortOptions = [
      { id: 'featured', label: 'Featured' },
      { id: 'price-asc', label: 'Price: Low to High' },
      { id: 'price-desc', label: 'Price: High to Low' },
  ];

  return (
    <div className="pt-20 lg:pt-24 pb-24" ref={containerRef}>
      {/* Shop Header */}
      <div className="bg-secondary/40 py-16 mb-12">
          <div className="container mx-auto px-4 text-center">
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
                 {categoryParam && categoryParam !== 'All' ? categoryParam : 'All Fine Jewelry'}
             </h1>
             <p className="text-muted-foreground font-serif italic text-lg max-w-xl mx-auto">
                 Discover our collection of demi-fine jewelry. Designed for everyday elegance.
             </p>
          </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Mobile Filter & Sort Toggle */}
            <div className="flex justify-between items-center lg:hidden pb-6 border-b border-border">
                <Button 
                    variant="outline" 
                    className="rounded-none border-border"
                    onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                >
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filters
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="rounded-none font-normal">
                             Sort: {sortOptions.find(o => o.id === sortOption)?.label}
                             <ChevronDown className="w-4 h-4 ml-2" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="rounded-none w-48">
                        {sortOptions.map(option => (
                            <DropdownMenuItem 
                                key={option.id} 
                                onClick={() => setSortOption(option.id)}
                                className="flex justify-between cursor-pointer"
                            >
                                {option.label}
                                {sortOption === option.id && <Check className="w-4 h-4" />}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Sidebar Desktop */}
            <div className={`lg:w-64 flex-shrink-0 ${isMobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
                <div className="sticky top-32">
                    <div className="mb-10">
                        <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">Category</h3>
                        <ul className="space-y-4">
                            {categories.map(cat => (
                                <li key={cat}>
                                    <button
                                        onClick={() => handleCategoryChange(cat)}
                                        className={`text-sm transition-colors hover:text-foreground ${
                                            (categoryParam === cat) || (!categoryParam && cat === 'All') 
                                            ? 'text-foreground font-medium border-b border-foreground inline-block' 
                                            : 'text-muted-foreground'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
                {/* Desktop Sort */}
                <div className="hidden lg:flex justify-between items-center mb-8 pb-4 border-b border-border">
                    <p className="text-sm text-muted-foreground">{filteredProducts.length} Results</p>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="rounded-none font-normal hover:bg-transparent px-0">
                                Sort by: {sortOptions.find(o => o.id === sortOption)?.label}
                                <ChevronDown className="w-4 h-4 ml-2" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="rounded-none w-48">
                            {sortOptions.map(option => (
                                <DropdownMenuItem 
                                    key={option.id} 
                                    onClick={() => setSortOption(option.id)}
                                    className="flex justify-between cursor-pointer"
                                >
                                    {option.label}
                                    {sortOption === option.id && <Check className="w-4 h-4" />}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="py-24 text-center">
                        <h3 className="text-2xl font-serif mb-2">No products found</h3>
                        <p className="text-muted-foreground">Try adjusting your filters.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
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