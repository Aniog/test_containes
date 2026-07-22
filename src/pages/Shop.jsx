import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/home/ProductCard";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const activeCategory = searchParams.get("category") || "all";
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [activeCategory]);

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const handleCategoryChange = (cat) => {
    if (cat === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal font-medium">
            {activeCategory === "all" ? "All Jewelry" : categories.find(c => c.id === activeCategory)?.name || "Shop"}
          </h1>
          <p className="mt-3 text-sm text-muted-fg">
            {sortedProducts.length} {sortedProducts.length === 1 ? "piece" : "pieces"}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs tracking-widest uppercase font-medium text-charcoal mb-4">Category</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleCategoryChange("all")}
                    className={`text-sm transition-colors ${activeCategory === "all" ? "text-gold font-medium" : "text-muted-fg hover:text-charcoal"}`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`text-sm transition-colors ${activeCategory === cat.id ? "text-gold font-medium" : "text-muted-fg hover:text-charcoal"}`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-border pt-6">
                <h3 className="text-xs tracking-widest uppercase font-medium text-charcoal mb-4">Price</h3>
                <ul className="space-y-2">
                  <li><span className="text-sm text-muted-fg hover:text-charcoal cursor-pointer transition-colors">Under $40</span></li>
                  <li><span className="text-sm text-muted-fg hover:text-charcoal cursor-pointer transition-colors">$40 – $70</span></li>
                  <li><span className="text-sm text-muted-fg hover:text-charcoal cursor-pointer transition-colors">$70 – $100</span></li>
                  <li><span className="text-sm text-muted-fg hover:text-charcoal cursor-pointer transition-colors">Over $100</span></li>
                </ul>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <h3 className="text-xs tracking-widest uppercase font-medium text-charcoal mb-4">Material</h3>
                <ul className="space-y-2">
                  <li><span className="text-sm text-muted-fg hover:text-charcoal cursor-pointer transition-colors">18K Gold Plated</span></li>
                  <li><span className="text-sm text-muted-fg hover:text-charcoal cursor-pointer transition-colors">Sterling Silver</span></li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-charcoal"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filter
              </button>

              <div className="hidden md:block" />

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs tracking-wide text-charcoal bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal">No products found</p>
                <p className="mt-2 text-sm text-muted-fg">Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <>
          <div className="fixed inset-0 bg-charcoal/40 z-[60]" onClick={() => setFilterOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-72 bg-cream z-[70] shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs tracking-widest uppercase font-medium text-charcoal">Filters</h3>
              <button onClick={() => setFilterOpen(false)} className="text-charcoal">
                <X className="w-5 h-5" />
              </button>
            </div>

            <h4 className="text-xs tracking-widest uppercase font-medium text-charcoal mb-3">Category</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <button
                  onClick={() => { handleCategoryChange("all"); setFilterOpen(false); }}
                  className={`text-sm ${activeCategory === "all" ? "text-gold font-medium" : "text-muted-fg"}`}
                >
                  All Jewelry
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => { handleCategoryChange(cat.id); setFilterOpen(false); }}
                    className={`text-sm ${activeCategory === cat.id ? "text-gold font-medium" : "text-muted-fg"}`}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="text-xs tracking-widest uppercase font-medium text-charcoal mb-3 border-t border-border pt-4">Price</h4>
            <ul className="space-y-2 mb-6">
              <li><span className="text-sm text-muted-fg cursor-pointer">Under $40</span></li>
              <li><span className="text-sm text-muted-fg cursor-pointer">$40 – $70</span></li>
              <li><span className="text-sm text-muted-fg cursor-pointer">$70 – $100</span></li>
              <li><span className="text-sm text-muted-fg cursor-pointer">Over $100</span></li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;
