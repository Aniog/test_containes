import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ImageHelper } from '@strikingly/sdk';

const strkImgConfig = {};

const PRODUCTS = [
  { id: 1, name: "Vivid Aura Jewels", price: 42, category: "Earrings", variant: "Gold", collection: "bestsellers", imageQuery: "gold ear cuff with crystal accent close up jewelry editorial warm light", description: "A stunning gold ear cuff featuring a delicate crystal accent." },
  { id: 2, name: "Majestic Flora Nectar", price: 68, category: "Necklaces", variant: "Gold", collection: "bestsellers", imageQuery: "multicolor floral crystal necklace gold editorial warm light close up", description: "An intricate floral necklace featuring multicolor crystals on an 18K gold-plated chain." },
  { id: 3, name: "Golden Sphere Huggies", price: 38, category: "Huggies", variant: "Gold", collection: "bestsellers", imageQuery: "chunky gold dome huggie earrings warm light editorial", description: "Chunky, bold, and incredibly lightweight gold dome huggies." },
  { id: 4, name: "Amber Lace Earrings", price: 54, category: "Earrings", variant: "Gold", collection: "bestsellers", imageQuery: "textured gold filigree drop earrings warm light close up", description: "Vintage-inspired textured gold filigree drop earrings." },
  { id: 5, name: "Royal Heirloom Set", price: 95, category: "Sets", variant: "Gold", collection: "bestsellers", imageQuery: "elegant gold earring and necklace set in premium gift box warm light overlay", description: "The ultimate gift. A matching necklace and earring set presented in our signature box." },
  { id: 6, name: "Lumina Chain", price: 48, category: "Necklaces", variant: "Gold", collection: "essentials", imageQuery: "dainty gold chain necklace on neck close up lifestyle", description: "A delicate, everyday gold chain perfect for layering." },
  { id: 7, name: "Petite Pearl Drops", price: 62, category: "Earrings", variant: "Gold", collection: "essentials", imageQuery: "small pearl drop earrings gold hoops editorial", description: "Classic pearl drops suspended from 14K gold-filled hoops." },
  { id: 8, name: "Stella Solitaire Ring", price: 45, category: "Rings", variant: "Gold", collection: "essentials", imageQuery: "minimalist gold ring with small diamond on hand", description: "A minimalist gold band featuring a single, brilliant-cut cubic zirconia." }
];

const CATEGORIES = ["All", "Earrings", "Huggies", "Necklaces", "Rings"];
const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" }
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category")?.toLowerCase() || "all";
  const activeCollection = searchParams.get("collection")?.toLowerCase() || "all";
  const [sortParam, setSortParam] = useState("featured");
  
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, activeCollection, sortParam]); // Reload images when filters/sort change

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchCategory = activeCategory === "all" || p.category.toLowerCase() === activeCategory;
    const matchCollection = activeCollection === "all" || p.collection.toLowerCase() === activeCollection;
    return matchCategory && matchCollection;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortParam === "price-asc") return a.price - b.price;
    if (sortParam === "price-desc") return b.price - a.price;
    return 0; // "featured" leaves original order
  });

  const handleCategoryChange = (cat) => {
    searchParams.set("category", cat.toLowerCase());
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-24 min-h-screen bg-background pb-20" ref={containerRef}>
      {/* Header */}
      <div className="bg-secondary/50 py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide mb-4 capitalize">
            {activeCollection !== 'all' ? activeCollection : activeCategory === 'all' ? 'All Jewelry' : activeCategory}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of demi-fine jewelry. Crafted from premium materials for everyday wear.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 shrink-0 space-y-8">
          <div>
            <h3 className="font-serif text-lg tracking-wider uppercase mb-4 border-b border-border pb-2">Category</h3>
            <div className="flex flex-col gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`text-left text-sm transition-colors hover:text-primary ${
                    activeCategory === cat.toLowerCase() ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid Area */}
        <div className="flex-1">
          {/* Controls Bar */}
          <div className="flex justify-between items-center mb-8 border-b border-border pb-4">
            <span className="text-sm text-muted-foreground">{sortedProducts.length} Products</span>
            
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm text-muted-foreground sr-only">Sort by:</label>
              <select 
                id="sort"
                value={sortParam}
                onChange={(e) => setSortParam(e.target.value)}
                className="text-sm border-none bg-transparent outline-none cursor-pointer text-foreground focus:ring-0"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
            {sortedProducts.map((item) => (
              <div key={item.id} className="group flex flex-col">
                <Link to={`/product/${item.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                  <img
                    data-strk-img-id={`plp-img-${item.id}`}
                    data-strk-img={item.imageQuery}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Quick Add Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20">
                    <Button 
                      className="w-full bg-white/95 backdrop-blur-sm text-primary hover:bg-white rounded-none uppercase tracking-widest text-xs h-10 shadow-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(item);
                      }}
                    >
                      Quick Add
                    </Button>
                  </div>
                </Link>
                <div className="flex flex-col gap-1 text-center md:text-left flex-1 justify-between">
                  <Link to={`/product/${item.id}`} className="font-serif tracking-wide hover:opacity-70 uppercase text-sm md:text-base leading-tight">
                    {item.name}
                  </Link>
                  <p className="text-muted-foreground text-sm">${item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
             <div className="py-20 text-center text-muted-foreground">
               No products found in this category.
             </div>
          )}
        </div>
      </div>
    </div>
  );
}