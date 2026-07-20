import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { products, categories } from "@/data/products";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory) {
      result = result.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());
    }
    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [activeCategory, sort]);

  const handleCategoryChange = (category) => {
    const next = category === activeCategory ? "" : category;
    setActiveCategory(next);
    if (next) {
      setSearchParams({ category: next });
    } else {
      setSearchParams({});
    }
  };

  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow mb-2">Collection</p>
            <h1 className="section-heading text-3xl md:text-4xl">
              {activeCategory ? activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1) : "All Pieces"}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setFiltersOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 btn-outline"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-white border border-border rounded-sm pl-4 pr-10 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase text-ink focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted pointer-events-none" />
            </div>
          </div>
        </div>

        {filtersOpen && (
          <div className="mb-10 card-surface rounded-sm p-6">
            <p className="eyebrow mb-4">Categories</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategoryChange(category.id)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition-colors ${
                    activeCategory === category.id ? "border-ink bg-ink text-white" : "border-border hover:border-ink"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <div className="mt-6">
              <p className="eyebrow mb-3">Price Range</p>
              <div className="flex items-center gap-3 text-sm text-ink-secondary">
                <span>$30</span>
                <div className="h-px flex-1 bg-border" />
                <span>$120</span>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-ink-secondary">No pieces found in this category.</p>
            <button
              type="button"
              onClick={() => handleCategoryChange("")}
              className="mt-4 btn-outline"
            >
              View All
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Shop;
