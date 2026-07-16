import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ShoppingBag, Star, SlidersHorizontal, X } from "lucide-react";
import { products as allProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";

const categories = ["all", "earrings", "necklaces", "huggies", "sets"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get("category") || "all";
  const activeSort = searchParams.get("sort") || "featured";
  const priceRange = searchParams.get("price") || "all";

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === "all" || !value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const filtered = useMemo(() => {
    let result = [...allProducts];
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (priceRange === "under50") {
      result = result.filter((p) => p.price < 50);
    } else if (priceRange === "50to80") {
      result = result.filter((p) => p.price >= 50 && p.price <= 80);
    } else if (priceRange === "over80") {
      result = result.filter((p) => p.price > 80);
    }

    switch (activeSort) {
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
        break;
    }
    return result;
  }, [activeCategory, activeSort, priceRange]);

  const FiltersPanel = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-sans font-semibold text-velmora-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter("category", cat === "all" ? "" : cat)}
              className={`block text-sm font-sans transition-colors ${
                activeCategory === cat
                  ? "text-velmora-charcoal font-medium"
                  : "text-velmora-taupe hover:text-velmora-charcoal"
              }`}
            >
              {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="hairline" />

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-widest uppercase font-sans font-semibold text-velmora-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          {[
            { value: "all", label: "All Prices" },
            { value: "under50", label: "Under $50" },
            { value: "50to80", label: "$50 – $80" },
            { value: "over80", label: "Over $80" },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter("price", opt.value === "all" ? "" : opt.value)}
              className={`block text-sm font-sans transition-colors ${
                priceRange === opt.value
                  ? "text-velmora-charcoal font-medium"
                  : "text-velmora-taupe hover:text-velmora-charcoal"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-[72px] bg-[#FDFCFA]">
      {/* Page header */}
      <div className="border-b border-velmora-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-velmora-charcoal font-light text-center">
            Shop All Jewelry
          </h1>
          <p className="text-sm text-velmora-taupe text-center mt-3 font-sans">
            {filtered.length} pieces to discover
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex gap-10 lg:gap-14">
          {/* Sidebar - desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FiltersPanel />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Sort & mobile filter bar */}
            <div className="flex items-center justify-between mb-6">
              {/* Mobile filter toggle */}
              <button
                className="lg:hidden flex items-center gap-2 text-xs tracking-wider uppercase font-sans text-velmora-charcoal"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <div className="hidden lg:block" />

              {/* Sort */}
              <select
                value={activeSort}
                onChange={(e) => setFilter("sort", e.target.value)}
                className="text-xs tracking-wider uppercase font-sans text-velmora-charcoal bg-transparent border border-velmora-sand/60 px-3 py-2 outline-none focus:border-velmora-charcoal cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-taupe mb-3">No pieces match your filters</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-sm tracking-wider uppercase font-sans text-velmora-gold hover:text-velmora-gold-dark"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group product-card">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[4/5] bg-velmora-cream overflow-hidden mb-3">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addItem(product);
                          }}
                          className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-velmora-charcoal p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg hover:bg-velmora-gold hover:text-white"
                          aria-label="Quick add to cart"
                        >
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                      </div>
                    </Link>
                    <div className="px-0.5">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
                        <span className="text-xs text-velmora-taupe font-sans">{product.rating}</span>
                      </div>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif text-xs tracking-widest uppercase text-velmora-charcoal leading-relaxed">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="font-serif text-sm text-velmora-charcoal mt-1">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      <div
        className={`fixed inset-0 z-60 lg:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-[300px] bg-[#FDFCFA] shadow-2xl transition-transform duration-400 ease-out ${
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs tracking-widest uppercase font-sans font-semibold text-velmora-charcoal">
                Filters
              </span>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5 text-velmora-charcoal-light" />
              </button>
            </div>
            <FiltersPanel />
            <button
              onClick={() => {
                setSearchParams({});
                setMobileFiltersOpen(false);
              }}
              className="mt-8 w-full text-center text-xs tracking-wider uppercase font-sans text-velmora-taupe hover:text-velmora-charcoal py-3 border border-velmora-sand/60"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}