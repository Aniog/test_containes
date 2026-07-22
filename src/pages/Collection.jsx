import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Star, SlidersHorizontal, X, ShoppingBag } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const categories = [
  { id: "all", label: "All" },
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "sets", label: "Sets" },
];

const priceRanges = [
  { id: "all", label: "All Prices" },
  { id: "under-50", label: "Under $50" },
  { id: "50-80", label: "$50 - $80" },
  { id: "over-80", label: "Over $80" },
];

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Highest Rated" },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const activeCategory = searchParams.get("category") || "all";
  const activePrice = searchParams.get("price") || "all";
  const activeSort = searchParams.get("sort") || "featured";

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === "all" || value === "featured") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Price filter
    if (activePrice === "under-50") {
      result = result.filter((p) => p.price < 50);
    } else if (activePrice === "50-80") {
      result = result.filter((p) => p.price >= 50 && p.price <= 80);
    } else if (activePrice === "over-80") {
      result = result.filter((p) => p.price > 80);
    }

    // Sort
    if (activeSort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (activeSort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (activeSort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, activePrice, activeSort]);

  const Filters = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-velmora-dark mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter("category", cat.id)}
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                activeCategory === cat.id
                  ? "text-velmora-gold font-medium"
                  : "text-velmora-muted hover:text-velmora-dark"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-velmora-dark mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setFilter("price", range.id)}
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                activePrice === range.id
                  ? "text-velmora-gold font-medium"
                  : "text-velmora-muted hover:text-velmora-dark"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-dark tracking-wide">
            All Jewelry
          </h1>
          <p className="text-sm text-velmora-muted mt-2">
            {filteredProducts.length} piece{filteredProducts.length !== 1 && "s"}
          </p>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 shrink-0">
            <Filters />
          </aside>

          {/* Mobile filter button */}
          <div className="md:hidden flex items-center gap-4 mb-6">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="flex items-center gap-2 text-sm text-velmora-dark uppercase tracking-wider"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>

            <select
              value={activeSort}
              onChange={(e) => setFilter("sort", e.target.value)}
              className="text-sm text-velmora-muted bg-transparent border border-velmora-border px-3 py-2 outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort - desktop only */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <select
                value={activeSort}
                onChange={(e) => setFilter("sort", e.target.value)}
                className="text-sm text-velmora-muted bg-transparent border border-velmora-border px-3 py-2 outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-muted">No products found.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-sm text-velmora-gold hover:underline mt-2"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`}>
                      <div className="aspect-[3/4] overflow-hidden bg-velmora-dark/5 mb-3">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                    <div className="px-0.5">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="product-name">{product.name}</h3>
                      </Link>
                      <div className="flex items-center gap-1 mt-1">
                        <Star
                          size={12}
                          className="text-velmora-gold fill-velmora-gold"
                        />
                        <span className="text-xs text-velmora-muted">
                          {product.rating}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-velmora-dark mt-1">
                        ${product.price}
                      </p>
                      <button
                        onClick={() =>
                          addItem({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            variant: "Gold",
                            image: product.images[0],
                            quantity: 1,
                          })
                        }
                        className="mt-3 w-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider py-2.5 border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-velmora-dark transition-all duration-200"
                      >
                        <ShoppingBag size={14} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-velmora-cream p-6 overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm uppercase tracking-widest text-velmora-dark">
                Filters
              </h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="text-velmora-muted hover:text-velmora-dark"
              >
                <X size={20} />
              </button>
            </div>
            <Filters />
          </div>
        </div>
      )}
    </main>
  );
}