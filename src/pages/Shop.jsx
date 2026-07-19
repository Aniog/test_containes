import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const products = [
  { id: 1, name: "Vivid Aura Jewels", price: 42, category: "Earrings", desc: "Gold ear cuff with crystal accent", tags: ["gold", "crystal"] },
  { id: 2, name: "Majestic Flora Nectar", price: 68, category: "Necklaces", desc: "Multicolor floral crystal necklace", tags: ["gold", "crystal", "floral"] },
  { id: 3, name: "Golden Sphere Huggies", price: 38, category: "Huggies", desc: "Chunky gold dome huggie earrings", tags: ["gold", "daily"] },
  { id: 4, name: "Amber Lace Earrings", price: 54, category: "Earrings", desc: "Textured gold filigree drop earrings", tags: ["gold", "textured"] },
  { id: 5, name: "Royal Heirloom Set", price: 95, category: "Necklaces", desc: "Gift-boxed earring + necklace set", tags: ["set", "gift"] },
  { id: 6, name: "Celestial Drop Pendant", price: 58, category: "Necklaces", desc: "Hand-carved gold pendant with moonstone", tags: ["gold", "stone"] },
  { id: 7, name: "Linear Muse Studs", price: 34, category: "Earrings", desc: "Minimalist bar studs in 18k gold", tags: ["gold", "minimal"] },
  { id: 8, name: "Serpentine Chain", price: 72, category: "Necklaces", desc: "Flat snake chain for layering", tags: ["gold", "classic"] },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('cat');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [categoryFilter]);

  const filteredProducts = categoryFilter 
    ? products.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase())
    : products;

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Shop All Jewelry</h1>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500">
            <span>Home</span> / <span className="text-black">Shop</span>
            {categoryFilter && (
              <> / <span className="text-black capitalize">{categoryFilter}</span></>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <Button 
            variant="outline" 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex-grow md:flex-none flex items-center gap-2 rounded-none border-[#E5E2D9] uppercase tracking-widest text-[10px]"
          >
            <Filter className="w-4 h-4" /> Filter
          </Button>
          <div className="relative group flex-grow md:flex-none">
            <Button variant="outline" className="w-full flex items-center justify-between gap-8 rounded-none border-[#E5E2D9] uppercase tracking-widest text-[10px]">
              Sort By <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar Filter - Desktop */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-32 space-y-12">
            <div>
              <h3 className="uppercase tracking-widest text-[11px] font-bold mb-6">Collections</h3>
              <ul className="space-y-4 text-sm font-light text-gray-600">
                {['All', 'Earrings', 'Necklaces', 'Huggies', 'Rings'].map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => cat === 'All' ? setSearchParams({}) : setSearchParams({ cat: cat.toLowerCase() })}
                      className={cn(
                        "hover:text-[#C5A059] transition-colors",
                        (categoryFilter === cat.toLowerCase() || (cat === 'All' && !categoryFilter)) && "text-[#C5A059] font-medium"
                      )}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="uppercase tracking-widest text-[11px] font-bold mb-6">Price</h3>
              <ul className="space-y-4 text-sm font-light text-gray-600">
                <li>Under $50</li>
                <li>$50 — $100</li>
                <li>Over $100</li>
              </ul>
            </div>

            <div>
              <h3 className="uppercase tracking-widest text-[11px] font-bold mb-6">Material</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="rounded-none border-[#E5E2D9] text-gray-500 font-light px-3 py-1 cursor-pointer hover:border-[#C5A059]">18K Gold Plated</Badge>
                <Badge variant="outline" className="rounded-none border-[#E5E2D9] text-gray-500 font-light px-3 py-1 cursor-pointer hover:border-[#C5A059]">925 Silver</Badge>
                <Badge variant="outline" className="rounded-none border-[#E5E2D9] text-gray-500 font-light px-3 py-1 cursor-pointer hover:border-[#C5A059]">Semi-Precious Stones</Badge>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-10 md:gap-y-16">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-[#F5F2EA]">
                   <img
                    data-strk-img-id={`shop-prod-img-${product.id}`}
                    data-strk-img={`[shop-prod-title-${product.id}] [shop-prod-category-${product.id}] gold jewelry editorial close up`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                     {product.price > 80 && (
                        <Badge className="rounded-none bg-[#C5A059] text-[8px] uppercase tracking-widest border-none">Bestseller</Badge>
                     )}
                  </div>
                  <button className="absolute bottom-0 left-0 right-0 py-5 bg-white shadow-lg translate-y-full group-hover:translate-y-0 transition-transform duration-300 uppercase tracking-[0.2em] text-[10px] font-bold">
                    Quick Shop
                  </button>
                </div>
                <div className="space-y-2">
                   <p id={`shop-prod-category-${product.id}`} className="text-[10px] uppercase tracking-widest text-gray-400">{product.category}</p>
                   <h3 id={`shop-prod-title-${product.id}`} className="product-name text-xs">{product.name}</h3>
                   <p className="text-sm font-light text-gray-600">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="py-24 text-center">
               <p className="font-serif text-2xl text-gray-400">No pieces found in this collection.</p>
               <Button 
                variant="link" 
                onClick={() => setSearchParams({})}
                className="mt-4 uppercase tracking-widest text-xs"
               >
                 View All Jewelry
               </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
