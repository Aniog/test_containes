import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ShoppingBag, Star, SlidersHorizontal, X } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];
const priceRanges = [
  { label: "Under $40", min: 0, max: 40 },
  { label: "$40 – $60", min: 40, max: 60 },
  { label: "$60 – $80", min: 60, max: 80 },
  { label: "$80+", min: 80, max: Infinity },
];
const materials = ["All", "Gold", "Silver", "Rose Gold"];
const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { dispatch } = useCart();
  const [mobileFilters, setMobileFilters] = useState(false);

  const activeCategory = searchParams.get("category") || "All";
  const activePrice = searchParams.get("price") || "";
  const activeMaterial = searchParams.get("material") || "All";
  const activeSort = searchParams.get("sort") || "newest";

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === "All" || value === "") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "All") {
      result = result.filter(
        (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    if (activePrice) {
      const range = priceRanges.find((r) => r.label === activePrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    if (activeMaterial !== "All") {
      result = result.filter(
        (p) => p.material.toLowerCase() === activeMaterial.toLowerCase()
      );
    }

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
  }, [activeCategory, activePrice, activeMaterial, activeSort]);

  const hasActiveFilters =
    activeCategory !== "All" || activePrice || activeMaterial !== "All";

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[#1C1917] font-medium">
              All Jewelry
            </h1>
            <p className="text-[#6B6358] text-sm mt-1">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "piece" : "pieces"}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={activeSort}
              onChange={(e) => setFilter("sort", e.target.value)}
              className="text-sm border border-[#E5DED5] bg-white px-3 py-2 rounded-sm text-[#6B6358] focus:outline-none focus:border-[#B8943C] hidden md:block"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <button
              onClick={() => setMobileFilters(true)}
              className="md:hidden flex items-center gap-2 text-sm text-[#6B6358] border border-[#E5DED5] px-3 py-2 rounded-sm"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs tracking-[0.12em] uppercase text-[#6B6358] font-semibold mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter("category", cat)}
                      className={`block text-sm transition-colors ${
                        activeCategory === cat
                          ? "text-[#B8943C] font-medium"
                          : "text-[#6B6358] hover:text-[#1C1917]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs tracking-[0.12em] uppercase text-[#6B6358] font-semibold mb-3">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setFilter("price", range.label)}
                      className={`block text-sm transition-colors ${
                        activePrice === range.label
                          ? "text-[#B8943C] font-medium"
                          : "text-[#6B6358] hover:text-[#1C1917]"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs tracking-[0.12em] uppercase text-[#6B6358] font-semibold mb-3">
                  Material
                </h3>
                <div className="space-y-2">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setFilter("material", mat)}
                      className={`block text-sm transition-colors ${
                        activeMaterial === mat
                          ? "text-[#B8943C] font-medium"
                          : "text-[#6B6358] hover:text-[#1C1917]"
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-[0.1em] uppercase text-[#B8943C] hover:text-[#D4B96A] transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-[#6B6358] font-['Cormorant_Garamond'] text-xl">
                  No pieces found matching your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-outline mt-6 inline-block"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link
                      to={`/product/${product.id}`}
                      className="block relative aspect-[3/4] bg-[#E5DED5] rounded-sm overflow-hidden"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch({
                            type: "ADD_ITEM",
                            payload: {
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              image: product.images[0],
                            },
                          });
                          dispatch({ type: "OPEN_CART" });
                        }}
                        className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-[#B8943C] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </Link>
                    <div className="mt-3 space-y-1">
                      <h3 className="font-['Cormorant_Garamond'] text-xs tracking-[0.15em] uppercase text-[#1C1917] font-medium truncate">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-[#B8943C] fill-[#B8943C]" />
                        <span className="text-xs text-[#6B6358]">
                          {product.rating}
                        </span>
                      </div>
                      <p className="text-[#B8943C] font-medium text-sm">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFilters && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50 md:hidden"
            onClick={() => setMobileFilters(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-[#F5F2ED] z-50 rounded-t-xl p-6 md:hidden max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-['Cormorant_Garamond'] text-lg">Filters</h3>
              <button onClick={() => setMobileFilters(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs tracking-[0.12em] uppercase text-[#6B6358] font-semibold mb-3">
                  Sort by
                </h4>
                <select
                  value={activeSort}
                  onChange={(e) => setFilter("sort", e.target.value)}
                  className="w-full text-sm border border-[#E5DED5] bg-white px-3 py-2.5 rounded-sm text-[#1C1917]"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <h4 className="text-xs tracking-[0.12em] uppercase text-[#6B6358] font-semibold mb-3">
                  Category
                </h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter("category", cat)}
                      className={`px-4 py-2 text-sm border rounded-sm transition-colors ${
                        activeCategory === cat
                          ? "border-[#B8943C] bg-[#B8943C] text-white"
                          : "border-[#E5DED5] text-[#6B6358]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs tracking-[0.12em] uppercase text-[#6B6358] font-semibold mb-3">
                  Price
                </h4>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setFilter("price", range.label)}
                      className={`px-4 py-2 text-sm border rounded-sm transition-colors ${
                        activePrice === range.label
                          ? "border-[#B8943C] bg-[#B8943C] text-white"
                          : "border-[#E5DED5] text-[#6B6358]"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs tracking-[0.12em] uppercase text-[#6B6358] font-semibold mb-3">
                  Material
                </h4>
                <div className="flex flex-wrap gap-2">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setFilter("material", mat)}
                      className={`px-4 py-2 text-sm border rounded-sm transition-colors ${
                        activeMaterial === mat
                          ? "border-[#B8943C] bg-[#B8943C] text-white"
                          : "border-[#E5DED5] text-[#6B6358]"
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setMobileFilters(false)}
              className="btn-primary w-full mt-6"
            >
              Apply Filters
            </button>
          </div>
        </>
      )}
    </div>
  );
}