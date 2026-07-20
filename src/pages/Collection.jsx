import React, { useState, useEffect, useMemo, useRef } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { products } from "../data/products.js";
import ProductCard from "../components/home/ProductCard.jsx";
import { ChevronDown, Filter, X } from "lucide-react";
import { cn } from "../lib/utils";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

const Collection = () => {
  const containerRef = useRef(null);
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  });

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category) {
      result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    if (sortBy === "newest") result.sort((a, b) => b.id.localeCompare(a.id));

    return result;
  }, [category, sortBy, priceRange]);

  const materials = ["18K Gold Plated", "Sterling Silver", "Recycled Gold", "Gemstone"];

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#FAF9F6] py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-serif uppercase tracking-widest mb-4">
            {category ? category : "All Jewelry"}
          </h1>
          <p className="text-muted-foreground uppercase tracking-[0.2em] text-[10px]">
             {filteredProducts.length} pieces found
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar / Filters */}
          <div className={cn(
            "lg:w-1/4 space-y-12 fixed lg:relative inset-0 bg-white z-[60] lg:z-0 p-8 lg:p-0 transition-transform duration-500",
            isFilterOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          )}>
            <div className="flex justify-between items-center lg:hidden mb-8">
               <h2 className="text-xl font-serif">Filters</h2>
               <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-widest font-bold border-b border-border pb-4">Category</h3>
              <div className="flex flex-col space-y-3">
                {["All", "Earrings", "Necklaces", "Huggies", "Sets"].map(cat => (
                  <a
                    key={cat}
                    href={cat === "All" ? "/shop" : `/category/${cat.toLowerCase()}`}
                    className={cn(
                      "text-sm hover:text-accent transition-colors",
                      (category === cat.toLowerCase() || (!category && cat === "All")) ? "text-accent font-bold" : "text-muted-foreground"
                    )}
                  >
                    {cat}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-widest font-bold border-b border-border pb-4">Price</h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="0"
                  max="150"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full accent-accent"
                />
                <div className="flex justify-between text-xs text-muted-foreground tracking-widest">
                  <span>$0</span>
                  <span>Up to ${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-widest font-bold border-b border-border pb-4">Material</h3>
              <div className="flex flex-col space-y-3">
                {materials.map(mat => (
                  <label key={mat} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 border-border rounded-none accent-primary" />
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{mat}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              className="premium-button w-full lg:hidden py-4 text-xs font-bold uppercase tracking-widest"
              onClick={() => setIsFilterOpen(false)}
            >
              Apply Filters
            </button>
          </div>

          {/* Product Grid Area */}
          <div className="lg:w-3/4 flex-grow">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-12 border-b border-border pb-6">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center space-x-2 lg:hidden text-xs uppercase tracking-widest font-bold"
              >
                <Filter size={16} />
                <span>Filters</span>
              </button>

              <div className="hidden lg:flex items-center space-x-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                 <span>Showing {filteredProducts.length} of {products.length} products</span>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground hidden md:block">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-[10px] uppercase tracking-widest font-bold bg-transparent focus:outline-none border-b border-primary/20 pb-1 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-24 text-center">
                 <p className="text-muted-foreground font-serif text-xl italic">No pieces found matching your criteria.</p>
                 <button
                  onClick={() => setPriceRange([0, 150])}
                  className="mt-6 text-xs uppercase tracking-widest border-b border-primary pb-1 hover:text-accent transition-all"
                 >
                   Clear all filters
                 </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
