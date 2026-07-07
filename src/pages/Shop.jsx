import { useState, useMemo } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { SlidersHorizontal, X } from "lucide-react";

const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];
const materials = ["All", "Gold", "Silver"];
const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMaterial, setSelectedMaterial] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];

    if (selectedCategory !== "All") {
      list = list.filter(
        (p) =>
          p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (selectedMaterial !== "All") {
      list = list.filter((p) =>
        p.material.toLowerCase().includes(selectedMaterial.toLowerCase())
      );
    }

    list = list.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [selectedCategory, selectedMaterial, priceRange, sort]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedMaterial("All");
    setPriceRange([0, 120]);
    setSort("featured");
  };

  const activeFilterCount = [
    selectedCategory !== "All",
    selectedMaterial !== "All",
    priceRange[0] > 0 || priceRange[1] < 120,
  ].filter(Boolean).length;

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-widest font-medium mb-3">
          Category
        </p>
        <div className="space-y-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`block text-sm transition-colors ${
                selectedCategory === c
                  ? "text-velmora-text font-medium"
                  : "text-velmora-muted hover:text-velmora-text"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-widest font-medium mb-3">
          Material
        </p>
        <div className="space-y-2">
          {materials.map((m) => (
            <button
              key={m}
              onClick={() => setSelectedMaterial(m)}
              className={`block text-sm transition-colors ${
                selectedMaterial === m
                  ? "text-velmora-text font-medium"
                  : "text-velmora-muted hover:text-velmora-text"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-widest font-medium mb-3">
          Price
        </p>
        <div className="flex items-center gap-2">
          <input
            type="number"
            min={0}
            max={120}
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            className="w-16 border border-velmora-hairline px-2 py-1 text-sm"
          />
          <span className="text-velmora-muted">-</span>
          <input
            type="number"
            min={0}
            max={120}
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="w-16 border border-velmora-hairline px-2 py-1 text-sm"
          />
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-widest underline text-velmora-muted hover:text-velmora-text"
        >
          Clear Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="pt-20 pb-16 bg-velmora-bg min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-10 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl uppercase tracking-widest">
            Shop All
          </h1>
          <p className="mt-3 text-sm text-velmora-muted">
            Demi-fine jewelry for every moment
          </p>
        </div>

        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-velmora-accent text-white text-[10px] px-1.5 py-0.5 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </button>

          <div className="flex items-center gap-2 ml-auto">
            <span className="text-xs text-velmora-muted hidden sm:inline">
              Sort by
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-velmora-hairline bg-transparent px-3 py-2 text-xs uppercase tracking-wide"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-muted text-sm">
                  No products match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-3 text-xs uppercase tracking-widest underline text-velmora-accent"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 z-50 h-full w-[280px] bg-velmora-surface shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  );
}
