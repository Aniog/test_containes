import { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { PRODUCTS, CATEGORIES } from "../data/products";
import { useCart } from "../contexts/CartContext";
import { Filter, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "All";
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  const handleCategoryChange = (category) => {
    if (category === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
    setIsFilterOpen(false);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...PRODUCTS];
    
    // Filter
    if (currentCategory !== "All") {
      result = result.filter(p => p.category === currentCategory);
    }
    
    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured - keep original order
        break;
    }
    
    return result;
  }, [currentCategory, sortBy]);

  useEffect(() => {
     if (containerRef.current) {
        const frameId = window.requestAnimationFrame(() => {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
        return () => window.cancelAnimationFrame(frameId);
     }
  }, [currentCategory, sortBy]);

  return (
    <div className="pt-24 lg:pt-32 pb-20 container mx-auto px-4 md:px-8" ref={containerRef}>
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl lg:text-5xl text-[#2D2A26] mb-4">
          {currentCategory === "All" ? "Complete Collection" : currentCategory}
        </h1>
        <p className="font-sans text-[#8B857D] font-light max-w-2xl mx-auto">
          Discover our curated collection of demi-fine gold jewelry, designed to bring a touch of quiet luxury to your everyday moments.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Sidebar Filters - Desktop */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-32">
            <div className="mb-10">
              <h3 className="font-sans text-xs tracking-widest uppercase font-medium text-[#2D2A26] mb-6 border-b border-[#E5E0D8] pb-3">
                Categories
              </h3>
              <ul className="space-y-4">
                {CATEGORIES.map(category => (
                  <li key={category}>
                    <button 
                      onClick={() => handleCategoryChange(category)}
                      className={`font-sans text-sm hover:text-[#A68D47] transition-colors ${
                        currentCategory === category ? "text-[#A68D47] font-medium" : "text-[#8B857D]"
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Filter by Material Placeholder */}
            <div>
              <h3 className="font-sans text-xs tracking-widest uppercase font-medium text-[#2D2A26] mb-6 border-b border-[#E5E0D8] pb-3">
                Material
              </h3>
              <div className="space-y-4 text-sm text-[#8B857D] font-sans">
                <label className="flexItems items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-[#2D2A26]" /> 
                  18K Gold Plated
                </label>
                <label className="flexItems items-center gap-3 cursor-pointer opacity-50">
                  <input type="checkbox" disabled className="accent-[#2D2A26]" /> 
                  Sterling Silver (Coming Soon)
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Filters & Sort Bar */}
        <div className="lg:hidden flex items-center justify-between border-y border-[#E5E0D8] py-4 mb-6">
          <button 
            className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>
          
          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent font-sans text-xs tracking-widest uppercase pr-6 pl-2 py-1 outline-none text-right w-full cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        {isFilterOpen && (
          <div className="lg:hidden fixed inset-0 z-[60] flex">
             <div className="absolute inset-0 bg-black/40" onClick={() => setIsFilterOpen(false)} />
             <div className="relative w-4/5 max-w-sm bg-[#FAF9F5] h-full p-6 shadow-2xl overflow-y-auto">
               <h3 className="font-serif text-2xl mb-8 border-b border-[#E5E0D8] pb-4">Filters</h3>
               
               <h4 className="font-sans text-xs tracking-widest uppercase font-medium mb-4">Categories</h4>
               <ul className="space-y-4 mb-10">
                {CATEGORIES.map(category => (
                  <li key={category}>
                    <button 
                      onClick={() => handleCategoryChange(category)}
                      className={`font-sans text-sm w-full text-left ${ currentCategory === category ? "text-[#A68D47]" : "text-[#8B857D]" }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="w-full bg-[#2D2A26] text-white py-4 font-sans text-xs tracking-widest uppercase mt-auto"
              >
                Apply
              </button>
             </div>
          </div>
        )}

        {/* Product Grid Area */}
        <div className="flex-1">
          {/* Desktop Sort */}
          <div className="hidden lg:flex justify-between items-center mb-8 border-b border-[#E5E0D8] pb-4">
            <span className="font-sans text-sm text-[#8B857D]">{filteredAndSortedProducts.length} Results</span>
            <div className="relative flex items-center gap-3">
              <span className="font-sans text-xs tracking-widest uppercase text-[#8B857D]">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent font-sans text-sm pr-6 outline-none cursor-pointer text-[#2D2A26] border-b border-transparent focus:border-[#A68D47]"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 text-[#8B857D] pointer-events-none" />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
            {filteredAndSortedProducts.map((product) => (
               <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-[#E5E0D8] mb-6 overflow-hidden">
                  <img
                    src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                    alt={product.name}
                    data-strk-img-id={`shop-${product.imgId}-1`}
                    data-strk-img={`[shop-item-${product.id}-name] jewelry isolated premium`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                    alt={`${product.name} worn`}
                    data-strk-img-id={`shop-${product.imgId}-2`}
                    data-strk-img={`[shop-item-${product.id}-name] jewelry worn editorial macro`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  
                  {/* Quick Add Button */}
                  <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="w-full bg-[#FAF9F5]/95 backdrop-blur text-[#2D2A26] py-3 text-xs tracking-widest uppercase font-medium hover:bg-[#2D2A26] hover:text-[#FAF9F5] transition-colors"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>
                
                <Link to={`/product/${product.id}`} className="block text-center mt-4">
                  <h3 id={`shop-item-${product.id}-name`} className="font-serif text-lg tracking-wide mb-2 text-[#2D2A26]">{product.name}</h3>
                  <p className="font-sans text-[#8B857D] text-sm">${product.price}</p>
                </Link>
              </div>
            ))}
            
            {filteredAndSortedProducts.length === 0 && (
              <div className="col-span-full text-center py-20">
                <p className="font-sans text-[#8B857D] mb-4">No products found in this category.</p>
                <button 
                  onClick={() => handleCategoryChange("All")}
                  className="font-sans text-xs tracking-widest uppercase border-b border-[#2D2A26] pb-1 hover:text-[#A68D47] hover:border-[#A68D47]"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
