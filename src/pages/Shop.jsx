import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "@/api/products";
import ProductCard from "@/components/ProductCard";
import { SlidersHorizontal, X } from "lucide-react";

const categories = ["Earrings", "Necklaces", "Huggies"];
const priceRanges = [
  { label: "Under $40", min: 0, max: 40 },
  { label: "$40 – $70", min: 40, max: 70 },
  { label: "$70 – $100", min: 70, max: 100 },
  { label: "$100+", min: 100, max: Infinity },
];
const materials = ["Gold Plated", "Silver Plated", "Crystal"];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get("category") || "";
  const activePrice = searchParams.get("price") || "";
  const activeMaterial = searchParams.get("material") || "";
  const sort = searchParams.get("sort") || "featured";

  useEffect(() => {
    setStatus("loading");
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory) {
      list = list.filter((p) => (p.data?.category || p.category) === activeCategory);
    }
    if (activePrice) {
      const range = priceRanges.find((r) => r.label === activePrice);
      if (range) {
        list = list.filter((p) => {
          const price = p.data?.price || p.price;
          return price >= range.min && price <= range.max;
        });
      }
    }
    if (activeMaterial) {
      list = list.filter((p) => {
        const tags = p.data?.tags || p.tags || [];
        const desc = (p.data?.description || p.description || "").toLowerCase();
        const mat = activeMaterial.toLowerCase();
        return tags.some((t) => t.toLowerCase().includes(mat)) || desc.includes(mat);
      });
    }
    if (sort === "price-asc") {
      list.sort((a, b) => (a.data?.price || a.price) - (b.data?.price || b.price));
    } else if (sort === "price-desc") {
      list.sort((a, b) => (b.data?.price || b.price) - (a.data?.price || a.price));
    } else if (sort === "rating") {
      list.sort((a, b) => (b.data?.rating || b.rating || 0) - (a.data?.rating || a.rating || 0));
    }
    return list;
  }, [products, activeCategory, activePrice, activeMaterial, sort]);

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  };

  const hasFilters = activeCategory || activePrice || activeMaterial;

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest mb-4">Category</h4>
        <div className="space-y-2">
          {categories.map((c) => (
            <label key={c} className="flex items-center gap-2 cursor-pointer group">
              <div
                onClick={() => updateParam("category", activeCategory === c ? "" : c)}
                className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${activeCategory === c ? "bg-accent border-accent" : "border-warm-gray-light group-hover:border-warm-gray"}`}
              >
                {activeCategory === c && <span className="text-cream text-[10px]">✓</span>}
              </div>
              <span className="text-sm text-warm-gray group-hover:text-charcoal transition-colors">{c}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest mb-4">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((r) => (
            <label key={r.label} className="flex items-center gap-2 cursor-pointer group">
              <div
                onClick={() => updateParam("price", activePrice === r.label ? "" : r.label)}
                className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${activePrice === r.label ? "bg-accent border-accent" : "border-warm-gray-light group-hover:border-warm-gray"}`}
              >
                {activePrice === r.label && <span className="text-cream text-[10px]">✓</span>}
              </div>
              <span className="text-sm text-warm-gray group-hover:text-charcoal transition-colors">{r.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest mb-4">Material</h4>
        <div className="space-y-2">
          {materials.map((m) => (
            <label key={m} className="flex items-center gap-2 cursor-pointer group">
              <div
                onClick={() => updateParam("material", activeMaterial === m ? "" : m)}
                className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${activeMaterial === m ? "bg-accent border-accent" : "border-warm-gray-light group-hover:border-warm-gray"}`}
              >
                {activeMaterial === m && <span className="text-cream text-[10px]">✓</span>}
              </div>
              <span className="text-sm text-warm-gray group-hover:text-charcoal transition-colors">{m}</span>
            </label>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={() => setSearchParams({})}
          className="text-xs uppercase tracking-widest text-accent hover:text-accent-hover underline underline-offset-4"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="serif text-3xl md:text-4xl font-light mb-2">Shop All</h1>
          <p className="text-sm text-warm-gray">Curated demi-fine jewelry for every moment.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-sm font-medium uppercase tracking-widest"
              >
                <SlidersHorizontal size={16} />
                Filters
              </button>
              <span className="text-xs text-warm-gray hidden md:block">{filtered.length} product{filtered.length !== 1 ? "s" : ""}</span>
              <select
                value={sort}
                onChange={(e) => updateParam("sort", e.target.value)}
                className="text-sm bg-transparent border border-divider rounded-sm px-3 py-2 outline-none focus:border-accent"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {status === "loading" ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="aspect-[3/4] bg-cream-dark rounded-sm animate-pulse" />
                ))}
              </div>
            ) : status === "error" ? (
              <p className="text-center text-warm-gray py-20">Unable to load products.</p>
            ) : filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="serif text-xl mb-2">No products match your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-sm text-accent hover:text-accent-hover underline underline-offset-4"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-charcoal/40 z-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-80 bg-cream z-50 shadow-2xl overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="serif text-xl font-medium">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-2 hover:bg-cream-dark rounded-full">
                <X size={18} />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  );
}
