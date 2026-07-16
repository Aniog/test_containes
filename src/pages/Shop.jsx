import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductCard from "@/components/home/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { formatPrice } from "@/lib/utils";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [selectedMaterial, setSelectedMaterial] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const searchQuery = searchParams.get("search") || "";

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Material filter (simplified - based on product data)
    if (selectedMaterial !== "all") {
      if (selectedMaterial === "crystal") {
        result = result.filter((p) => p.material.includes("Crystal"));
      }
    }

    // Price filter
    if (priceRange !== "all") {
      if (priceRange === "under-50") {
        result = result.filter((p) => p.price < 50);
      } else if (priceRange === "50-80") {
        result = result.filter((p) => p.price >= 50 && p.price <= 80);
      } else if (priceRange === "over-80") {
        result = result.filter((p) => p.price > 80);
      }
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy, searchQuery]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    const newParams = new URLSearchParams(searchParams);
    if (cat === "all") {
      newParams.delete("category");
    } else {
      newParams.set("category", cat);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedMaterial("all");
    setPriceRange("all");
    setSortBy("featured");
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedMaterial !== "all" ||
    priceRange !== "all" ||
    searchQuery;

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Navbar />
      
      <div className="pt-20">
        {/* Header */}
        <div className="border-b border-[#E5DFD6] bg-white">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <h1 className="font-serif text-4xl tracking-[1px]">Shop All</h1>
            {searchQuery && (
              <p className="text-[#9A8F82] mt-2">
                Results for "{searchQuery}"
              </p>
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Filters */}
            <aside className="lg:w-56 flex-shrink-0">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="text-xs tracking-[2px] mb-4 text-[#B89778]">CATEGORY</h3>
                  <div className="space-y-2 text-sm">
                    {[
                      { value: "all", label: "All Jewelry" },
                      { value: "earrings", label: "Earrings" },
                      { value: "necklaces", label: "Necklaces" },
                      { value: "huggies", label: "Huggies" },
                    ].map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => handleCategoryChange(cat.value)}
                        className={`block w-full text-left py-1 transition-colors ${
                          selectedCategory === cat.value
                            ? "text-[#B89778] font-medium"
                            : "text-[#6B6259] hover:text-[#2C2522]"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs tracking-[2px] mb-4 text-[#B89778]">PRICE</h3>
                  <div className="space-y-2 text-sm">
                    {[
                      { value: "all", label: "Any Price" },
                      { value: "under-50", label: "Under $50" },
                      { value: "50-80", label: "$50 – $80" },
                      { value: "over-80", label: "Over $80" },
                    ].map((range) => (
                      <button
                        key={range.value}
                        onClick={() => setPriceRange(range.value)}
                        className={`block w-full text-left py-1 transition-colors ${
                          priceRange === range.value
                            ? "text-[#B89778] font-medium"
                            : "text-[#6B6259] hover:text-[#2C2522]"
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-xs tracking-[1.5px] text-[#B89778] hover:underline"
                  >
                    CLEAR ALL FILTERS
                  </button>
                )}
              </div>
            </aside>

              {/* Product Grid */}
              <div className="flex-1">
                {/* Toolbar */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5DFD6]">
                  <p className="text-sm text-[#9A8F82]">
                    {filteredProducts.length} {filteredProducts.length === 1 ? "piece" : "pieces"}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-xs tracking-[1.5px] text-[#9A8F82]">SORT</span>
                    <Select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-40 text-sm"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="name">Name A–Z</option>
                    </Select>
                  </div>
                </div>

                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <p className="text-[#9A8F82] mb-4">No pieces match your filters.</p>
                    <Button variant="outline" onClick={clearFilters}>
                      CLEAR FILTERS
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Shop;
