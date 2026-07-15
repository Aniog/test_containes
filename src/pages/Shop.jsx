import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ShoppingBag, Star, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products, categories } from "@/data/products";
import { useCart } from "@/context/CartContext";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get("category") || "";
  const activeMaterial = searchParams.get("material") || "";
  const priceRange = searchParams.get("price") || "";

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (activeCategory) {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }
    if (activeMaterial) {
      filtered = filtered.filter((p) => p.material === activeMaterial);
    }
    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      filtered = filtered.filter((p) => p.price >= min && p.price <= max);
    }

    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [activeCategory, activeMaterial, priceRange, sortBy]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
    setMobileFiltersOpen(false);
  };

  const hasActiveFilters = activeCategory || activeMaterial || priceRange;

  return (
    <main className="bg-cream pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="py-10 md:py-14">
          <h1 className="text-3xl md:text-5xl font-serif text-text-primary">Shop</h1>
          <p className="text-text-muted text-sm font-light mt-2">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "piece" : "pieces"} found
          </p>
        </div>

        <div className="flex gap-8 pb-20">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Categories */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-text-muted mb-4 font-medium">Category</h4>
                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={() => updateFilter("category", "")}
                    className={`text-sm text-left transition-colors ${
                      !activeCategory ? "text-text-primary font-medium" : "text-text-muted hover:text-text-primary"
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter("category", cat.slug)}
                      className={`text-sm text-left transition-colors ${
                        activeCategory === cat.slug
                          ? "text-text-primary font-medium"
                          : "text-text-muted hover:text-text-primary"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-text-muted mb-4 font-medium">Price</h4>
                <div className="flex flex-col gap-2.5">
                  {[
                    { label: "All Prices", value: "" },
                    { label: "Under $40", value: "0-40" },
                    { label: "$40 - $60", value: "40-60" },
                    { label: "$60 - $80", value: "60-80" },
                    { label: "$80 - $100", value: "80-100" },
                  ].map((p) => (
                    <button
                      key={p.value}
                      onClick={() => updateFilter("price", p.value)}
                      className={`text-sm text-left transition-colors ${
                        priceRange === p.value
                          ? "text-text-primary font-medium"
                          : "text-text-muted hover:text-text-primary"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-text-muted mb-4 font-medium">Material</h4>
                <div className="flex flex-col gap-2.5">
                  {[
                    { label: "All", value: "" },
                    { label: "Gold", value: "gold" },
                    { label: "Silver", value: "silver" },
                  ].map((m) => (
                    <button
                      key={m.value}
                      onClick={() => updateFilter("material", m.value)}
                      className={`text-sm text-left transition-colors ${
                        activeMaterial === m.value
                          ? "text-text-primary font-medium"
                          : "text-text-muted hover:text-text-primary"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-widest text-accent-gold hover:text-accent-gold-hover transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest text-text-body"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="hidden md:block" />

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-xs uppercase tracking-widest text-text-body pr-6 py-2 
                             focus:outline-none cursor-pointer border-b border-border-light hover:border-text-muted transition-colors"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-text-muted text-sm mb-4">No pieces match your filters.</p>
                <button onClick={clearFilters} className="text-xs uppercase tracking-widest text-accent-gold hover:text-accent-gold-hover">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-cream p-6 overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm uppercase tracking-widest text-text-primary font-medium">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5 text-text-body" />
              </button>
            </div>

            {/* Category */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest text-text-muted mb-4 font-medium">Category</h4>
              <div className="flex flex-col gap-3">
                <button onClick={() => { updateFilter("category", ""); setMobileFiltersOpen(false); }}
                  className={`text-sm text-left ${!activeCategory ? "text-text-primary font-medium" : "text-text-muted"}`}>All</button>
                {categories.map((cat) => (
                  <button key={cat.id} onClick={() => { updateFilter("category", cat.slug); setMobileFiltersOpen(false); }}
                    className={`text-sm text-left ${activeCategory === cat.slug ? "text-text-primary font-medium" : "text-text-muted"}`}>
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest text-text-muted mb-4 font-medium">Price</h4>
              <div className="flex flex-col gap-3">
                {[
                  { label: "All Prices", value: "" },
                  { label: "Under $40", value: "0-40" },
                  { label: "$40 - $60", value: "40-60" },
                  { label: "$60 - $80", value: "60-80" },
                  { label: "$80 - $100", value: "80-100" },
                ].map((p) => (
                  <button key={p.value} onClick={() => { updateFilter("price", p.value); setMobileFiltersOpen(false); }}
                    className={`text-sm text-left ${priceRange === p.value ? "text-text-primary font-medium" : "text-text-muted"}`}>
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button onClick={clearFilters} className="text-xs uppercase tracking-widest text-accent-gold">
                Clear All
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: "Gold",
      quantity: 1,
    });
  };

  const stars = Math.floor(product.rating);

  return (
    <Link to={`/product/${product.id}`} className="group no-underline">
      <div className="aspect-[3/4] bg-cream-dark overflow-hidden mb-3 relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <button
            onClick={handleAddToCart}
            className="w-full bg-white/90 backdrop-blur-sm text-text-primary text-[11px] uppercase tracking-widest 
                       py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-accent-gold hover:text-white"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="px-1">
        <p className="product-name leading-tight">{product.name}</p>
        <div className="flex items-center gap-1 mt-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < stars ? "text-star-gold fill-star-gold" : "text-border-medium"
              }`}
            />
          ))}
          <span className="text-[10px] text-text-muted ml-1">({product.reviewCount})</span>
        </div>
        <p className="price mt-1.5">${product.price}</p>
      </div>
    </Link>
  );
}