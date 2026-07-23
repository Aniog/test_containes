import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../lib/data";
import ProductCard from "../components/ProductCard";
import { ChevronDown, Filter, X } from "lucide-react";
import { cn } from "../lib/utils";
import { useStrkImages } from "../lib/useStrkImages";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const containerRef = useStrkImages();
  
  const activeCategory = searchParams.get("category") || "All";
  const activeSort = searchParams.get("sort") || "featured";

  const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Filter by Category
    if (activeCategory !== "All") {
      result = result.filter(p => p.category === activeCategory);
    }
    
    // Sort
    if (activeSort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (activeSort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (activeSort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }
    
    return result;
  }, [activeCategory, activeSort]);

  const handleCategoryChange = (cat) => {
    const newParams = new URLSearchParams(searchParams);
    if (cat === "All") {
      newParams.delete("category");
    } else {
      newParams.set("category", cat);
    }
    setSearchParams(newParams);
    setIsFilterOpen(false);
  };

  const handleSortChange = (sort) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort", sort);
    setSearchParams(newParams);
  };

  return (
    <div ref={containerRef} className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 uppercase tracking-widest">{activeCategory}</h1>
          <p className="text-muted-foreground uppercase tracking-[0.3em] text-[10px]">
            {filteredProducts.length} Pieces
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between py-6 border-y border-gray-100 mb-12">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 uppercase tracking-widest text-[10px] font-bold hover-gold transition-colors"
          >
            <Filter className={cn("w-4 h-4", isFilterOpen && "fill-brand-gold text-brand-gold")} /> 
            Filters
          </button>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={cn(
                    "text-[10px] uppercase tracking-widest font-bold transition-all",
                    activeCategory === cat ? "text-brand-gold" : "text-muted-foreground hover:text-brand-ebony"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative group">
              <button className="flex items-center gap-2 uppercase tracking-widest text-[10px] font-bold">
                Sort: {activeSort} <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                {[
                  { id: "featured", label: "Featured" },
                  { id: "price-low", label: "Price: Low to High" },
                  { id: "price-high", label: "Price: High to Low" },
                  { id: "rating", label: "Top Rated" }
                ].map(option => (
                  <button
                    key={option.id}
                    onClick={() => handleSortChange(option.id)}
                    className="w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest hover:bg-brand-linen transition-colors"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Drawer (Mobile/Desktop Toggle) */}
        <div className={cn(
          "fixed inset-0 bg-black/20 z-[60] transition-opacity duration-300",
          isFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )} onClick={() => setIsFilterOpen(false)} />
        
        <div className={cn(
          "fixed top-0 left-0 h-full w-full max-w-xs bg-brand-linen z-[61] transition-transform duration-500 p-10 flex flex-col gap-12",
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="flex justify-between items-center">
            <h3 className="font-serif text-xl uppercase tracking-widest">Filter By</h3>
            <button onClick={() => setIsFilterOpen(false)}><X className="w-5 h-5" /></button>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Collections</h4>
            <div className="flex flex-col gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={cn(
                    "text-xs uppercase tracking-widest text-left transition-colors",
                    activeCategory === cat ? "text-brand-gold font-bold" : "text-muted-foreground hover:text-brand-ebony"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Material</h4>
            <div className="flex flex-col gap-4">
              {['18K Gold Plated', 'Silver Plated', 'Mixed Metals'].map(mat => (
                <label key={mat} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-gray-300 rounded-sm group-hover:border-brand-gold transition-colors" />
                  <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-brand-ebony transition-colors">{mat}</span>
                </label>
              ))}
            </div>
          </div>

          <button 
            onClick={() => setIsFilterOpen(false)}
            className="mt-auto bg-brand-ebony text-white py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-brand-gold transition-colors"
          >
            Show Results
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-serif text-2xl text-muted-foreground">No pieces found in this collection.</p>
            <button 
              onClick={() => handleCategoryChange("All")}
              className="mt-6 border-b border-brand-ebony pb-1 uppercase tracking-widest text-xs font-bold"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
