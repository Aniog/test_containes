import React, { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { products, categories } from "@/data/products";
import { useCart } from "@/context/CartContext";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState("all");
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { addItem, toggleDrawer } = useCart();

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category.toLowerCase() === activeCategory);
    }
    if (priceRange === "under-50") result = result.filter((p) => p.price < 50);
    if (priceRange === "50-80") result = result.filter((p) => p.price >= 50 && p.price <= 80);
    if (priceRange === "over-80") result = result.filter((p) => p.price > 80);

    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCategory, priceRange, sort]);

  const handleCategory = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="section-container py-10 md:py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Collection</p>
          <h1 className="mt-2 font-serif text-3xl md:text-4xl text-ink">Shop</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setFiltersOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-ink-secondary hover:text-ink md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none rounded-full border border-border bg-white pl-4 pr-10 py-2 text-xs font-medium text-ink focus:outline-none focus:ring-2 focus:ring-accent/40"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
        <aside className={`md:block ${filtersOpen ? "block" : "hidden"}`}>
          <div className="md:sticky md:top-24 space-y-8">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">Category</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-secondary">
                <li>
                  <button type="button" onClick={() => handleCategory("all")} className={`hover:text-ink ${activeCategory === "all" ? "text-ink font-medium" : ""}`}>
                    All
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      type="button"
                      onClick={() => handleCategory(category.id)}
                      className={`hover:text-ink ${activeCategory === category.id ? "text-ink font-medium" : ""}`}
                    >
                      {category.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">Price</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-secondary">
                {[
                  { key: "all", label: "All prices" },
                  { key: "under-50", label: "Under $50" },
                  { key: "50-80", label: "$50 – $80" },
                  { key: "over-80", label: "Over $80" },
                ].map((option) => (
                  <li key={option.key}>
                    <button
                      type="button"
                      onClick={() => setPriceRange(option.key)}
                      className={`hover:text-ink ${priceRange === option.key ? "text-ink font-medium" : ""}`}
                    >
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <div>
          {filtered.length === 0 ? (
            <p className="py-20 text-center text-sm text-ink-secondary">No pieces match your filters.</p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((product) => (
                <div key={product.id} className="product-card group">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="aspect-[3/4] overflow-hidden bg-background">
                      <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-3 md:p-4">
                      <p className="text-[11px] uppercase tracking-[0.14em] text-ink-muted">{product.category}</p>
                      <h3 className="mt-1 font-serif text-base md:text-lg text-ink">{product.name}</h3>
                      <p className="mt-1 text-sm font-medium text-ink">${product.price}</p>
                    </div>
                  </Link>
                  <div className="px-3 md:px-4 pb-3 md:pb-4">
                    <button
                      type="button"
                      onClick={() => {
                        addItem(product, "gold");
                        toggleDrawer();
                      }}
                      className="w-full rounded-full border border-border py-2 text-xs font-medium text-ink hover:bg-ink hover:text-white transition-colors"
                    >
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
  );
};

export default Shop;
