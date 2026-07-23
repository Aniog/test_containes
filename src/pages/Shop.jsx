import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const categories = ["all", "earrings", "necklaces", "huggies", "sets"];
const materials = ["gold", "silver"];
const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState("featured");
  const [showSort, setShowSort] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterials, priceRange, sortBy]);

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const activeFiltersCount =
    (selectedCategory !== "all" ? 1 : 0) +
    selectedMaterials.length +
    (priceRange[0] > 0 || priceRange[1] < 120 ? 1 : 0);

  return (
    <div className="pt-20 lg:pt-24 min-h-screen">
      {/* Header */}
      <div className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-espresso mb-3"
          >
            The Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-bronze text-sm md:text-base"
          >
            {products.length} timeless pieces, designed to be treasured
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm uppercase tracking-widest text-espresso"
          >
            <SlidersHorizontal size={16} strokeWidth={1.5} />
            Filters
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-gold text-espresso text-[10px] font-semibold rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          <p className="hidden lg:block text-sm text-bronze">
            {filteredProducts.length} products
          </p>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-2 text-sm uppercase tracking-widest text-espresso"
            >
              Sort by: {sortOptions.find((o) => o.value === sortBy)?.label}
              <ChevronDown
                size={14}
                strokeWidth={1.5}
                className={`transition-transform ${showSort ? "rotate-180" : ""}`}
              />
            </button>
            {showSort && (
              <div className="absolute right-0 top-full mt-2 bg-ivory border border-taupe/20 shadow-lg z-10 w-52">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setSortBy(opt.value);
                      setShowSort(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm hover:bg-cream transition-colors ${
                      sortBy === opt.value
                        ? "text-espresso font-medium"
                        : "text-bronze"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters - desktop */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest text-espresso font-medium mb-4">
                  Category
                </h3>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-left text-sm capitalize transition-colors ${
                        selectedCategory === cat
                          ? "text-espresso font-medium"
                          : "text-bronze hover:text-espresso"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest text-espresso font-medium mb-4">
                  Material
                </h3>
                <div className="flex flex-col gap-2">
                  {materials.map((mat) => (
                    <label
                      key={mat}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <div
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          selectedMaterials.includes(mat)
                            ? "border-espresso bg-espresso"
                            : "border-taupe"
                        }`}
                      >
                        {selectedMaterials.includes(mat) && (
                          <div className="w-1.5 h-1.5 bg-gold" />
                        )}
                      </div>
                      <span className="text-sm capitalize text-bronze">
                        {mat}
                      </span>
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest text-espresso font-medium mb-4">
                  Price
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-bronze">${priceRange[0]}</span>
                  <span className="text-taupe">—</span>
                  <span className="text-sm text-bronze">${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="120"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-full accent-gold"
                />
              </div>

              {/* Reset */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedMaterials([]);
                    setPriceRange([0, 120]);
                  }}
                  className="text-xs uppercase tracking-widest text-gold hover:text-bronze transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Products grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-espresso mb-2">
                  No products found
                </p>
                <p className="text-sm text-bronze mb-6">
                  Try adjusting your filters to see more results.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedMaterials([]);
                    setPriceRange([0, 120]);
                  }}
                  className="text-sm uppercase tracking-widest text-gold hover:text-bronze transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${
          mobileFiltersOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-espresso/40"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-80 bg-ivory shadow-xl transition-transform duration-300 ${
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 h-full overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl tracking-widest text-espresso">
                Filters
              </h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            {/* Category */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-espresso font-medium mb-4">
                Category
              </h3>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left text-sm capitalize transition-colors ${
                      selectedCategory === cat
                        ? "text-espresso font-medium"
                        : "text-bronze"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-espresso font-medium mb-4">
                Material
              </h3>
              <div className="flex flex-col gap-2">
                {materials.map((mat) => (
                  <label
                    key={mat}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <div
                      className={`w-4 h-4 border flex items-center justify-center ${
                        selectedMaterials.includes(mat)
                          ? "border-espresso bg-espresso"
                          : "border-taupe"
                      }`}
                    >
                      {selectedMaterials.includes(mat) && (
                        <div className="w-1.5 h-1.5 bg-gold" />
                      )}
                    </div>
                    <span className="text-sm capitalize text-bronze">
                      {mat}
                    </span>
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest text-espresso font-medium mb-4">
                Price
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-bronze">${priceRange[0]}</span>
                <span className="text-taupe">—</span>
                <span className="text-sm text-bronze">${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="120"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-full accent-gold"
              />
            </div>

            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedMaterials([]);
                setPriceRange([0, 120]);
              }}
              className="w-full border border-espresso text-espresso py-3 text-xs uppercase tracking-widest hover:bg-espresso hover:text-ivory transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
