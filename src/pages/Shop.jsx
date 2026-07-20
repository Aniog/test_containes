import { useState, useMemo, useEffect, useRef } from "react";
import { SEED_PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ChevronDown, Filter } from "lucide-react";
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json'; // Safe to import even if empty

export function Shop() {
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMaterial, setSelectedMaterial] = useState("All");
  const [sortOption, setSortOption] = useState("Featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    try {
      if (strkImgConfig) {
        // Need to use requestAnimationFrame to ensure DOM is updated after filter changes
        const frameId = window.requestAnimationFrame(() => {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
        return () => window.cancelAnimationFrame(frameId);
      }
    } catch (e) {
      console.log('Skipping image load');
    }
  }, [selectedCategory, selectedMaterial, sortOption]); // Re-run when filters change

  const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];
  const materials = ["All", "18K Gold Plated", "Sterling Silver (Coming Soon)"];
  
  const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low"];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...SEED_PRODUCTS];

    if (selectedCategory !== "All") {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (selectedMaterial !== "All") {
      result = result.filter(p => p.material === selectedMaterial);
    }

    if (sortOption === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, selectedMaterial, sortOption]);

  return (
    <div className="pt-24 pb-24" ref={containerRef}>
      {/* Header */}
      <div className="bg-[#FAF9F6] py-16 mb-12 relative">
        <div 
          className="absolute inset-0 z-0 bg-gray-200"
          data-strk-bg-id="shop-hero-bg"
          data-strk-bg="[shop-heading] [shop-subheading]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 z-10 bg-white/80 backdrop-blur-sm" />
        
        <div className="container relative z-20 mx-auto px-4 md:px-8 text-center">
          <h1 id="shop-heading" className="font-serif text-4xl md:text-5xl uppercase tracking-widest mb-4">The Collection</h1>
          <p id="shop-subheading" className="text-velmora-muted max-w-2xl mx-auto">
            Discover our full range of demi-fine jewelry. Pieces designed to be mixed, matched, and lived in.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center mb-6">
          <button 
            className="flex items-center gap-2 text-sm uppercase tracking-widest border border-velmora-border px-4 py-2"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <Filter size={16} /> Filters
          </button>
          
          <div className="relative">
            <select 
              className="appearance-none bg-transparent border-none text-sm uppercase tracking-widest pr-6 py-2 focus:outline-none cursor-pointer"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              {sortOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-muted" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className={`md:w-64 flex-shrink-0 ${isMobileFilterOpen ? 'block' : 'hidden'} md:block mb-8 md:mb-0`}>
            <div className="sticky top-32 space-y-10">
              
              <div>
                <h3 className="font-serif uppercase tracking-widest text-sm mb-4 border-b border-velmora-border pb-2">Category</h3>
                <ul className="space-y-3">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button 
                        className={`text-sm tracking-wide lowercase ${selectedCategory === cat ? 'text-velmora-dark font-medium' : 'text-velmora-muted hover:text-velmora-dark'} transition-colors`}
                        onClick={() => setSelectedCategory(cat)}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif uppercase tracking-widest text-sm mb-4 border-b border-velmora-border pb-2">Material</h3>
                <ul className="space-y-3">
                  {materials.map(mat => (
                    <li key={mat}>
                      <button 
                        className={`text-sm tracking-wide lowercase text-left ${selectedMaterial === mat ? 'text-velmora-dark font-medium' : 'text-velmora-muted hover:text-velmora-dark'} transition-colors`}
                        onClick={() => setSelectedMaterial(mat)}
                      >
                        {mat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex justify-between items-center mb-8 border-b border-velmora-border pb-4">
              <span className="text-sm text-velmora-muted">{filteredAndSortedProducts.length} Results</span>
              
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-velmora-muted">Sort By:</span>
                <div className="relative">
                  <select 
                    className="appearance-none bg-transparent border-none text-sm uppercase tracking-widest pr-6 py-1 focus:outline-none cursor-pointer"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    {sortOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-muted" />
                </div>
              </div>
            </div>

            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8">
                {filteredAndSortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center">
                <p className="font-serif text-2xl mb-4">No products found</p>
                <button 
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedMaterial("All");
                  }}
                  className="text-sm uppercase tracking-widest text-velmora-dark border-b border-velmora-dark pb-1"
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
