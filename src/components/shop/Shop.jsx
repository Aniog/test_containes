import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store';
import { products as homeProducts } from '../home/Home'; // Re-use seed data

const products = [
  { id: '1', name: 'Vivid Aura Jewels', price: 42, type: 'earrings', imageQuery: '[product-1-name] gold ear cuff with crystal accent', imageRatio: '1x1' },
  { id: '2', name: 'Majestic Flora Nectar', price: 68, type: 'necklaces', imageQuery: '[product-2-name] multicolor floral crystal necklace', imageRatio: '1x1' },
  { id: '3', name: 'Golden Sphere Huggies', price: 38, type: 'huggies', imageQuery: '[product-3-name] chunky gold dome huggie earrings', imageRatio: '1x1' },
  { id: '4', name: 'Amber Lace Earrings', price: 54, type: 'earrings', imageQuery: '[product-4-name] textured gold filigree drop earrings', imageRatio: '1x1' },
  { id: '5', name: 'Royal Heirloom Set', price: 95, type: 'sets', imageQuery: '[product-5-name] gift-boxed earring + necklace set', imageRatio: '1x1' },
];
import Layout from '../layout/Layout';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MOCK_CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const MOCK_MATERIALS = ['Solid Gold', 'Gold Vermeil', 'Sterling Silver'];

const Shop = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const { addItem } = useCartStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update images when filter changes
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy]);

  const filteredProducts = products.filter(p => 
    activeCategory === 'All' ? true : p.type.toLowerCase() === activeCategory.toLowerCase()
  ).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0; // featured/default
  });

  const FilterSidebar = ({ className = "" }) => (
    <div className={`space-y-8 ${className}`}>
      <div>
        <h3 className="font-serif text-lg mb-4">Category</h3>
        <ul className="space-y-3 text-sm">
          {MOCK_CATEGORIES.map(cat => (
            <li key={cat}>
              <button 
                onClick={() => setActiveCategory(cat)}
                className={`hover:text-primary transition-colors ${activeCategory === cat ? 'font-medium text-foreground' : 'text-muted-foreground'}`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-serif text-lg mb-4">Material</h3>
        <ul className="space-y-3 text-sm">
          {MOCK_MATERIALS.map(mat => (
            <li key={mat}>
              <label className="flex items-center gap-2 cursor-not-allowed opacity-70">
                <input type="checkbox" className="rounded-none border-border Accent-primary" disabled />
                <span className="text-muted-foreground">{mat}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-12" ref={containerRef}>
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover our complete collection of demi-fine jewelry. Ethically sourced, 
            thoughtfully designed, and crafted to last.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center py-4 border-y border-border mb-8">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="rounded-none gap-2 px-0 hover:bg-transparent">
                  <Filter className="w-4 h-4" /> Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <SheetHeader className="mb-8 text-left">
                  <SheetTitle className="font-serif text-2xl">Filters</SheetTitle>
                </SheetHeader>
                <FilterSidebar />
              </SheetContent>
            </Sheet>
          </div>
          
          <div className="hidden md:block text-sm text-muted-foreground">
            {filteredProducts.length} Results
          </div>

          <div className="flex items-center gap-2 text-sm ml-auto md:ml-0">
            <span className="hidden sm:inline text-muted-foreground">Sort By:</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-none gap-1 px-2 h-8 hover:bg-transparent">
                  {sortBy === 'featured' && 'Featured'}
                  {sortBy === 'price-asc' && 'Price: Low to High'}
                  {sortBy === 'price-desc' && 'Price: High to Low'}
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-none">
                <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                  <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="price-asc">Price: Low to High</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="price-desc">Price: High to Low</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Desktop Sidebar */}
          <div className="hidden md:block w-48 lg:w-64 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center text-muted-foreground font-serif text-lg">
                No products found in this category.
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group relative flex flex-col group/card cursor-pointer">
                    <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary/30 mb-4 overflow-hidden">
                      <img 
                        data-strk-img-id={`shop-${product.id}-img1`}
                        data-strk-img={product.imageQuery}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="400"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover transition-opacity duration-500 group-hover/card:opacity-0"
                      />
                      <img 
                        data-strk-img-id={`shop-${product.id}-img2`}
                        data-strk-img={`${product.imageQuery} different angle`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="400"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`${product.name} alternate`}
                        className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                      />
                      
                      {/* Quick Add Button overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300 md:block hidden">
                        <Button 
                          className="w-full rounded-none tracking-widest uppercase text-xs shadow-md"
                          onClick={(e) => {
                            e.preventDefault();
                            addItem(product, 'Gold Tone');
                          }}
                        >
                          Quick Add
                        </Button>
                      </div>
                    </Link>
                    <div className="flex flex-col">
                      <h3 id={`shop-${product.id}-name`} className="font-serif uppercase tracking-widest text-sm mb-1">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;