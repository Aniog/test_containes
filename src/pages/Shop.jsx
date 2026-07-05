import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { allProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/ui/StarRating";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All" },
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
];

const priceRanges = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under-40", label: "Under $40", min: 0, max: 40 },
  { id: "40-60", label: "$40 – $60", min: 40, max: 60 },
  { id: "60-80", label: "$60 – $80", min: 60, max: 80 },
  { id: "over-80", label: "Over $80", min: 80, max: Infinity },
];

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Highest Rated" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [addedId, setAddedId] = useState(null);

  const activeCategory = searchParams.get("category") || "all";
  const activePrice = searchParams.get("price") || "all";
  const activeSort = searchParams.get("sort") || "featured";
  const activeMaterial = searchParams.get("material") || "all";

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === "all" || !value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // Category filter
    if (activeCategory !== "all") {
      result = result.filter(
        (p) => p.category.toLowerCase() === activeCategory
      );
    }

    // Price filter
    const priceRange = priceRanges.find((r) => r.id === activePrice);
    if (priceRange && activePrice !== "all") {
      result = result.filter(
        (p) => p.price >= priceRange.min && p.price < priceRange.max
      );
    }

    // Material filter
    if (activeMaterial !== "all") {
      result = result.filter((p) => p.material === activeMaterial);
    }

    // Sort
    switch (activeSort) {
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
  }, [activeCategory, activePrice, activeSort, activeMaterial]);

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, "gold");
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-primary font-sans font-medium mb-3">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter("category", cat.id === "all" ? "" : cat.id)}
              className={cn(
                "block w-full text-left text-sm font-sans py-1 transition-colors",
                activeCategory === cat.id
                  ? "text-accent"
                  : "text-secondary hover:text-primary"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-primary font-sans font-medium mb-3">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setFilter("price", range.id === "all" ? "" : range.id)}
              className={cn(
                "block w-full text-left text-sm font-sans py-1 transition-colors",
                activePrice === range.id
                  ? "text-accent"
                  : "text-secondary hover:text-primary"
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-primary font-sans font-medium mb-3">
          Material
        </h4>
        <div className="space-y-2">
          {[
            { id: "all", label: "All" },
            { id: "gold", label: "18K Gold" },
            { id: "silver", label: "Silver Tone" },
          ].map((mat) => (
            <button
              key={mat.id}
              onClick={() => setFilter("material", mat.id === "all" ? "" : mat.id)}
              className={cn(
                "block w-full text-left text-sm font-sans py-1 transition-colors",
                activeMaterial === mat.id
                  ? "text-accent"
                  : "text-secondary hover:text-primary"
              )}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-[#2a2a2a]">
        <div className="max-w-page mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-primary font-light">
                {activeCategory === "all" ? "All Jewelry" : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
              </h1>
              <p className="text-sm text-secondary mt-1 font-sans">
                {filteredProducts.length} pieces
              </p>
            </div>

            {/* Sort + Filter toggle */}
            <div className="flex items-center gap-4">
              {/* Mobile filter */}
              <button
                className="md:hidden text-secondary hover:text-primary transition-colors flex items-center gap-2 text-sm font-sans"
                onClick={() => setMobileFilterOpen(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              {/* Sort */}
              <select
                value={activeSort}
                onChange={(e) => setFilter("sort", e.target.value)}
                className="bg-transparent border border-[#2a2a2a] text-secondary text-sm font-sans px-3 py-2 focus:outline-none focus:border-accent/50 transition-colors"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.id} value={opt.id} className="bg-surface">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-page mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex gap-8 md:gap-12">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-secondary font-sans">
                  No pieces found matching your selection.
                </p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-accent text-sm font-sans mt-2 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[3/4] bg-surface-secondary overflow-hidden rounded-sm">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      <button
                        onClick={(e) => handleQuickAdd(product, e)}
                        className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                      >
                        {addedId === product.id ? (
                          <span className="w-full bg-accent text-background text-xs font-sans font-medium tracking-wider py-2.5 flex items-center justify-center gap-2">
                            &#10003; Added
                          </span>
                        ) : (
                          <span className="w-full bg-accent text-background text-xs font-sans font-medium tracking-wider py-2.5 flex items-center justify-center gap-2">
                            Quick Add
                          </span>
                        )}
                      </button>
                    </div>
                    <div className="mt-3 space-y-1.5">
                      <h3 className="product-name text-primary truncate">
                        {product.name}
                      </h3>
                      <StarRating rating={product.rating} size={12} />
                      <p className="text-accent font-sans text-sm font-medium">
                        ${product.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-72 bg-surface border-l border-[#2a2a2a] p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <span className="font-sans text-sm tracking-wider uppercase text-primary font-medium">
                Filters
              </span>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="text-secondary hover:text-primary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </main>
  );
}