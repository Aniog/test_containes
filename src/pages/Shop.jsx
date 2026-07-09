import { useState, useEffect, useRef, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const ShopProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, [isHovered]);

  return (
    <div 
      ref={cardRef}
      className="group relative flex flex-col gap-4 animate-in fade-in duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-secondary">
        <img
          data-strk-img-id={`shop-${product.id}-main`}
          data-strk-img={product.images.query}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-all duration-700 ease-out",
            isHovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
          )}
        />
        <img
          data-strk-img-id={`shop-${product.id}-hover`}
          data-strk-img={product.hoverImage.query}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
          alt={`${product.name} hover`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out",
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
          )}
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 transition-all duration-500 translate-y-full group-hover:translate-y-0 hidden lg:block">
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-white/95 backdrop-blur-sm text-primary py-3 text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
          >
            Add to Bag
          </button>
        </div>
      </Link>

      <div className="flex flex-col items-center text-center space-y-1">
        <h3 className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-primary/80">
          {product.name}
        </h3>
        <p className="text-sm font-sans font-medium text-muted-foreground">${product.price}</p>
      </div>
    </div>
  );
};

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  const activeCategory = searchParams.get("category") || "All";

  const filteredProducts = useMemo(() => {
    let result = activeCategory === "All" 
      ? PRODUCTS 
      : PRODUCTS.filter(p => p.category === activeCategory);

    if (sortBy === "price-low") result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result = [...result].sort((a, b) => b.price - a.price);
    
    return result;
  }, [activeCategory, sortBy]);

  const handleCategoryChange = (cat) => {
    if (cat === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
    setIsFilterOpen(false);
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 lg:px-12">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 space-y-4">
        <h2 className="text-xs uppercase tracking-[0.3em] font-sans font-medium text-accent">Collections</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic">
          {activeCategory === "All" ? "Shop All Jewelry" : activeCategory}
        </h1>
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center mb-12 border-b border-gray-100 pb-6">
        <button 
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold"
        >
          <SlidersHorizontal size={16} strokeWidth={1.5} />
          Filter
          <span className="bg-secondary px-1.5 rounded text-[9px]">{activeCategory}</span>
        </button>

        <div className="flex items-center gap-2">
            <span className="hidden md:inline-block text-[10px] uppercase tracking-widest text-muted-foreground mr-2 font-medium">Sort By:</span>
            <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-[10px] uppercase tracking-widest font-bold bg-transparent focus:outline-none cursor-pointer"
            >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
            </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
        {filteredProducts.map((product) => (
          <ShopProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-24 text-center">
            <p className="font-serif italic text-muted-foreground">No products found in this category.</p>
        </div>
      )}

      {/* Mobile Filter Drawer */}
      <div className={cn(
        "fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300 sm:hidden",
        isFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )} onClick={() => setIsFilterOpen(false)} />
      
      <div className={cn(
        "fixed inset-y-0 left-0 w-[280px] bg-white z-[110] p-8 transition-transform duration-300 ease-in-out sm:hidden",
        isFilterOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex justify-between items-center mb-10">
            <h3 className="text-xs uppercase tracking-widest font-bold font-bold">Categories</h3>
            <button onClick={() => setIsFilterOpen(false)}><X size={20} /></button>
        </div>
        <div className="space-y-6">
            {["All", ...CATEGORIES].map((cat) => (
                <button 
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={cn(
                        "block text-xs uppercase tracking-widest transition-colors w-full text-left font-medium",
                        activeCategory === cat ? "text-accent font-bold" : "text-muted-foreground hover:text-primary"
                    )}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      {/* Desktop Quick Category Filter */}
      <div className="hidden sm:flex flex-wrap justify-center gap-10 mt-24 pt-12 border-t border-gray-50">
        {["All", ...CATEGORIES].map((cat) => (
            <button 
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={cn(
                    "text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-300",
                    activeCategory === cat ? "text-primary scale-110 font-bold border-b border-accent pb-1" : "text-muted-foreground hover:text-primary"
                )}
            >
                {cat}
            </button>
        ))}
      </div>
    </div>
  );
}
