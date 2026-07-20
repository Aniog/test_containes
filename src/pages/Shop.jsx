import React, { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { ProductCard } from "@/components/common/ProductCard";
import { 
  ChevronDown, 
  SlidersHorizontal, 
  X,
  Grid2X2,
  Square
} from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get("category") || "All"
  );
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState("all");
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, sortBy, priceRange]); // Rerun when filters change

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (priceRange === "under-50") {
      result = result.filter((p) => p.price < 50);
    } else if (priceRange === "50-100") {
      result = result.filter((p) => p.price >= 50 && p.price <= 100);
    } else if (priceRange === "over-100") {
      result = result.filter((p) => p.price > 100);
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, sortBy, priceRange]);

  const FilterContent = () => (
    <div className="space-y-8">
      <Accordion type="multiple" defaultValue={["category", "price"]} className="w-full">
        <AccordionItem value="category" className="border-none">
          <AccordionTrigger className="font-serif uppercase tracking-widest text-xs hover:no-underline">
            Category
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setSearchParams({ category: cat });
                  }}
                  className={`text-[11px] uppercase tracking-widest text-left transition-colors ${
                    activeCategory === cat ? "text-primary font-bold" : "text-muted-foreground hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price" className="border-none">
          <AccordionTrigger className="font-serif uppercase tracking-widest text-xs hover:no-underline">
            Price Range
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-3">
              {[
                { label: "All Prices", value: "all" },
                { label: "Under $50", value: "under-50" },
                { label: "$50 - $100", value: "50-100" },
                { label: "Over $100", value: "over-100" },
              ].map((range) => (
                <button
                  key={range.value}
                  onClick={() => setPriceRange(range.value)}
                  className={`text-[11px] uppercase tracking-widest text-left transition-colors ${
                    priceRange === range.value ? "text-primary font-bold" : "text-muted-foreground hover:text-black"
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );

  return (
    <div className="pt-32 pb-24" ref={containerRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 uppercase tracking-wider">
            {activeCategory === "All" ? "Collection" : activeCategory}
          </h1>
          <p className="max-w-xl mx-auto text-muted-foreground font-light text-sm italic">
            Adorn yourself in timeless pieces. From everyday essentials to statement sets, 
            each creation is designed to be cherished.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar (Desktop) */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-10 border-b border-border pb-6">
              <div className="flex items-center gap-4">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="outline" className="md:hidden outline-button py-2 h-auto text-[10px]">
                      <SlidersHorizontal className="w-3 h-3 mr-2" />
                      Filter & Sort
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="px-6 pb-12 bg-white">
                    <DrawerHeader className="px-0 mb-6">
                      <DrawerTitle className="font-serif uppercase tracking-widest">
                        Refine Collection
                      </DrawerTitle>
                    </DrawerHeader>
                    <FilterContent />
                    <div className="mt-8 pt-8 border-t border-border">
                      <p className="font-serif uppercase tracking-widest text-xs mb-4">Sort By</p>
                      <div className="grid grid-cols-2 gap-2">
                        <Button 
                          variant={sortBy === "featured" ? "default" : "outline"}
                          onClick={() => setSortBy("featured")}
                          className="text-[10px] h-10 px-2 uppercase"
                        >
                          Featured
                        </Button>
                        <Button 
                          variant={sortBy === "price-low" ? "default" : "outline"}
                          onClick={() => setSortBy("price-low")}
                          className="text-[10px] h-10 px-2 uppercase"
                        >
                          Price: Low-High
                        </Button>
                        <Button 
                          variant={sortBy === "price-high" ? "default" : "outline"}
                          onClick={() => setSortBy("price-high")}
                          className="text-[10px] h-10 px-2 uppercase"
                        >
                          Price: High-Low
                        </Button>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
                
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {filteredProducts.length} Products
                </span>
              </div>

              <div className="hidden md:flex items-center gap-6">
                <div className="flex items-center gap-1 border-r border-border pr-6 mr-6">
                   <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent text-[10px] uppercase tracking-widest outline-none cursor-pointer font-medium"
                   >
                     <option value="featured">Sort: Featured</option>
                     <option value="price-low">Price: Low to High</option>
                     <option value="price-high">Price: High to Low</option>
                   </select>
                </div>
                <div className="flex gap-2">
                  <Grid2X2 className="w-4 h-4 text-primary cursor-pointer" />
                  <Square className="w-4 h-4 text-muted-foreground cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Active Filters Tokens */}
            {(activeCategory !== "All" || priceRange !== "all") && (
              <div className="flex flex-wrap gap-2 mb-8">
                {activeCategory !== "All" && (
                  <Badge variant="secondary" className="bg-secondary/50 rounded-none px-3 py-1 text-[10px] font-medium uppercase tracking-widest flex items-center gap-2">
                    {activeCategory}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => {
                        setActiveCategory("All");
                        setSearchParams({});
                    }} />
                  </Badge>
                )}
                {priceRange !== "all" && (
                  <Badge variant="secondary" className="bg-secondary/50 rounded-none px-3 py-1 text-[10px] font-medium uppercase tracking-widest flex items-center gap-2">
                    {priceRange === "under-50" ? "Under $50" : priceRange === "50-100" ? "$50 - $100" : "Over $100"}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setPriceRange("all")} />
                  </Badge>
                )}
                <button 
                  onClick={() => {
                    setActiveCategory("All");
                    setPriceRange("all");
                    setSearchParams({});
                  }}
                  className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-black transition-colors ml-2"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center">
                <p className="font-serif italic text-xl text-muted-foreground">
                  No products found in this category.
                </p>
                <Button 
                  variant="link" 
                  onClick={() => {
                    setActiveCategory("All");
                    setPriceRange("all");
                    setSearchParams({});
                  }}
                  className="mt-4 uppercase tracking-widest text-xs"
                >
                  View All Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
