import { useMemo, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { useImageLoader } from "@/hooks/useImageLoader";
import { cn } from "@/lib/utils";

const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $80", min: 50, max: 80 },
  { label: "$80+", min: 80, max: Infinity },
];

const materials = ["Gold-Plated", "Sterling Silver"];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [category, setCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState([]);
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const gridRef = useRef(null);
  useImageLoader(gridRef, [category, selectedPrice, selectedMaterial, sort]);

  const filtered = useMemo(() => {
    let data = [...products];
    if (category && category !== "all") {
      data = data.filter((p) => p.category === category);
    }
    if (selectedPrice !== null) {
      const range = priceRanges[selectedPrice];
      data = data.filter((p) => p.price >= range.min && p.price < range.max);
    }
    if (selectedMaterial.length > 0) {
      data = data.filter((p) =>
        selectedMaterial.some((m) =>
          p.material.toLowerCase().includes(m.toLowerCase()),
        ),
      );
    }
    if (sort === "price-asc") data.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") data.sort((a, b) => b.price - a.price);
    if (sort === "rating") data.sort((a, b) => b.rating - a.rating);
    return data;
  }, [category, selectedPrice, selectedMaterial, sort]);

  const updateCategory = (cat) => {
    setCategory(cat);
    const next = new URLSearchParams(searchParams);
    if (cat === "all") next.delete("category");
    else next.set("category", cat);
    setSearchParams(next);
  };

  const clearFilters = () => {
    setCategory("all");
    setSelectedPrice(null);
    setSelectedMaterial([]);
    setSearchParams({});
  };

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.18em]">Category</h4>
        <div className="mt-4 space-y-2">
          {["all", "earrings", "necklaces", "huggies", "sets"].map((cat) => (
            <label key={cat} className="flex cursor-pointer items-center gap-3 text-sm capitalize">
              <input
                type="radio"
                name="category"
                checked={category === cat}
                onChange={() => updateCategory(cat)}
                className="h-4 w-4 accent-velmora-gold"
              />
              {cat === "all" ? "All Jewelry" : cat}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.18em]">Price</h4>
        <div className="mt-4 space-y-2">
          {priceRanges.map((range, idx) => (
            <label key={range.label} className="flex cursor-pointer items-center gap-3 text-sm">
              <input
                type="radio"
                name="price"
                checked={selectedPrice === idx}
                onChange={() => setSelectedPrice(idx)}
                className="h-4 w-4 accent-velmora-gold"
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.18em]">Material</h4>
        <div className="mt-4 space-y-2">
          {materials.map((mat) => (
            <label key={mat} className="flex cursor-pointer items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={selectedMaterial.includes(mat)}
                onChange={(e) => {
                  setSelectedMaterial((prev) =>
                    e.target.checked
                      ? [...prev, mat]
                      : prev.filter((m) => m !== mat),
                  );
                }}
                className="h-4 w-4 accent-velmora-gold"
              />
              {mat}
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={clearFilters}
        className="text-xs font-medium uppercase tracking-widest text-velmora-taupe hover:text-velmora-gold transition-colors"
      >
        Clear Filters
      </button>
    </div>
  );

  return (
    <div className="bg-velmora-cream">
      <div className="border-b border-velmora-sand bg-velmora-cream">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
            Shop
          </p>
          <h1 id="shop-title" className="mt-3 font-serif text-3xl tracking-wide md:text-5xl">
            The Collection
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <div className="flex items-center justify-between gap-4 pb-6">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>

          <p className="hidden text-sm text-velmora-taupe md:block">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none rounded-sm border border-velmora-sand bg-white py-2 pl-4 pr-10 text-sm focus:border-velmora-gold focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-taupe" />
          </div>
        </div>

        <div className="flex gap-12">
          <aside className="hidden w-64 shrink-0 md:block">
            <FilterContent />
          </aside>

          <div ref={gridRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-velmora-gold underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    contextId="shop-title"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[70] md:hidden">
          <div
            className="absolute inset-0 bg-velmora-ink/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto rounded-t-2xl bg-velmora-cream p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-xl">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close">
                <X className="w-6 h-6" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </div>
  );
}
