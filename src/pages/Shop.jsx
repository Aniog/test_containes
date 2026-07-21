import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS, CATEGORIES } from '@/config';
import ProductCard from '@/components/shop/ProductCard';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');
  const [sortOrder, setSortOrder] = useState('newest');
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, sortOrder]);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }
    
    if (sortOrder === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortOrder === 'price-high') result.sort((a, b) => b.price - a.price);
    
    return result;
  }, [activeCategory, sortOrder]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    const newParams = new URLSearchParams(searchParams);
    if (cat === 'All') {
      newParams.delete('category');
    } else {
      newParams.set('category', cat);
    }
    setSearchParams(newParams);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-background px-6">
      <div className="container mx-auto">
        <header className="mb-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Shop the Collection</h1>
            <p className="text-muted-foreground text-[10px] uppercase tracking-[0.4em]">Explore our curated demi-fine jewelry</p>
          </div>
          
          <div className="flex items-center w-full md:w-auto">
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-full md:w-[220px] rounded-none border-hairline h-12 text-[10px] uppercase tracking-[0.2em] px-4 focus:ring-0">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent className="rounded-none border-hairline font-sans">
                <SelectItem value="newest" className="text-[10px] uppercase tracking-widest">Newest Arrivals</SelectItem>
                <SelectItem value="price-low" className="text-[10px] uppercase tracking-widest">Price: Low to High</SelectItem>
                <SelectItem value="price-high" className="text-[10px] uppercase tracking-widest">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="mb-12">
              <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-8 flex items-center border-b hairline pb-4">
                <Filter size={14} className="mr-3 text-accent" />
                Categories
              </h3>
              <ul className="space-y-6">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button 
                      onClick={() => handleCategoryChange(cat)}
                      className={cn(
                        "text-[12px] uppercase tracking-[0.2em] transition-all duration-500 block w-full text-left",
                        activeCategory === cat ? "text-accent font-bold translate-x-2" : "text-muted-foreground hover:translate-x-1"
                      )}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-velmora-cream p-10 text-center space-y-6 border hairline">
               <p className="text-[9px] uppercase tracking-[0.3em] text-accent font-bold">Velmora Privé</p>
               <h4 className="font-serif text-xl italic">Special Offer</h4>
               <p className="text-[12px] text-muted-foreground leading-relaxed">Join our inner circle for exclusive access and 10% off your first order.</p>
               <Button variant="outline" className="rounded-none border-velmora-charcoal text-[9px] uppercase tracking-[0.2em] w-full h-10 hover:bg-velmora-charcoal hover:text-white transition-luxury">
                 Join Now
               </Button>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="py-32 text-center border hairline dashed">
                <p className="font-serif text-2xl italic text-muted-foreground mb-8">Our artisans are crafting more treasures...</p>
                <Button 
                  onClick={() => handleCategoryChange('All')} 
                  className="rounded-none bg-velmora-charcoal text-white uppercase tracking-[0.2em] text-[10px] px-8 h-12"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;

