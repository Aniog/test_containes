import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { products, categories } from "@/data/products";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("featured");
  const [priceRange, setPriceRange] = useState("all");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];

    if (category !== "all") {
      list = list.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }

    if (priceRange === "under50") list = list.filter((p) => p.price < 50);
    if (priceRange === "50to80") list = list.filter((p) => p.price >= 50 && p.price <= 80);
    if (priceRange === "over80") list = list.filter((p) => p.price > 80);

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [category, sort, priceRange]);

  const handleCategoryChange = (value) => {
    setCategory(value);
    if (value === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", value);
    }
    setSearchParams(searchParams);
  };

  const FilterSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-900">Category</h3>
        <ul className="mt-3 space-y-2 text-sm text-gray-700">
          {["all", ...categories.map((c) => c.id)].map((value) => (
            <li key={value}>
              <button
                type="button"
                onClick={() => handleCategoryChange(value)}
                className={`capitalize hover:text-gold-700 transition-colors ${
                  category === value ? "text-gold-700 font-medium" : ""
                }`}
              >
                {value === "all" ? "All" : value}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-900">Price</h3>
        <ul className="mt-3 space-y-2 text-sm text-gray-700">
          {[
            { value: "all", label: "All prices" },
            { value: "under50", label: "Under $50" },
            { value: "50to80", label: "$50 – $80" },
            { value: "over80", label: "Over $80" },
          ].map((option) => (
            <li key={option.value}>
              <button
                type="button"
                onClick={() => setPriceRange(option.value)}
                className={`hover:text-gold-700 transition-colors ${
                  priceRange === option.value ? "text-gold-700 font-medium" : ""
                }`}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-900">Material</h3>
        <ul className="mt-3 space-y-2 text-sm text-gray-700">
          <li><button type="button" className="hover:text-gold-700 transition-colors">18K Gold Plated</button></li>
          <li><button type="button" className="hover:text-gold-700 transition-colors">Sterling Silver</button></li>
          <li><button type="button" className="hover:text-gold-700 transition-colors">Crystal</button></li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="font-serif text-2xl md:text-3xl">Shop</h1>
            <p className="mt-1 text-sm text-gray-600">{filtered.length} {filtered.length === 1 ? "piece" : "pieces"}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-xs font-medium"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none rounded-full border border-gray-200 bg-white pl-4 pr-10 py-2 text-xs font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold-800"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="hidden md:block md:col-span-1">
            <FilterSection />
          </aside>

          {mobileFiltersOpen && (
            <div className="md:hidden col-span-1">
              <FilterSection />
            </div>
          )}

          <div className="md:col-span-3">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-sm text-gray-600">No pieces match your filters.</p>
                <button
                  type="button"
                  onClick={() => {
                    setCategory("all");
                    setPriceRange("all");
                    setSort("featured");
                    setSearchParams({});
                  }}
                  className="mt-3 text-sm font-medium text-gold-800 hover:text-gold-900"
                >
                  Clear all
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
