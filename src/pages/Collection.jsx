import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { SlidersHorizontal, X, ShoppingBag, ChevronDown } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const categoryOptions = [
  { label: "All", value: "" },
  { label: "Earrings", value: "earrings" },
  { label: "Necklaces", value: "necklaces" },
  { label: "Huggies", value: "huggies" },
  { label: "Gift Sets", value: "sets" },
];

const priceOptions = [
  { label: "All", value: "" },
  { label: "Under $50", value: "under50" },
  { label: "$50 – $70", value: "50to70" },
  { label: "Over $70", value: "over70" },
];

const materialOptions = [
  { label: "All", value: "" },
  { label: "Gold", value: "gold" },
  { label: "Silver", value: "silver" },
];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "priceAsc" },
  { label: "Price: High to Low", value: "priceDesc" },
  { label: "Best Rated", value: "rating" },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        to={`/product/${product.slug}`}
        className="block relative overflow-hidden rounded-sm bg-velmora-sand/40 aspect-[3/4]"
      >
        <img
          src={product.image_primary}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
          loading="lazy"
        />
        <img
          src={product.image_secondary}
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
        />
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addItem(product, product.variants?.[0]);
        }}
        className={`absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 py-2.5 bg-white/95 text-velmora-ink text-[11px] font-medium tracking-[0.15em] uppercase shadow-sm transition-all duration-300 ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <ShoppingBag size={14} strokeWidth={1.5} />
        Quick Add
      </button>
      <div className="mt-3">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-serif text-[14px] tracking-[0.08em] uppercase">{product.name}</h3>
        </Link>
        <p className="mt-1 text-sm text-velmora-mocha">${product.price}</p>
      </div>
    </div>
  );
}

export default function Collection() {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [material, setMaterial] = useState("");
  const [sort, setSort] = useState("featured");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (category) list = list.filter((p) => p.category === category);
    if (material) list = list.filter((p) => p.material === material);
    if (price === "under50") list = list.filter((p) => p.price < 50);
    if (price === "50to70") list = list.filter((p) => p.price >= 50 && p.price <= 70);
    if (price === "over70") list = list.filter((p) => p.price > 70);

    if (sort === "priceAsc") list.sort((a, b) => a.price - b.price);
    if (sort === "priceDesc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [category, price, material, sort]);

  const activeFiltersCount = [category, price, material].filter(Boolean).length;

  const clearFilters = () => {
    setCategory("");
    setPrice("");
    setMaterial("");
  };

  return (
    <div className="pt-20 sm:pt-24 bg-velmora-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-8 sm:py-12 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl tracking-wide">The Collection</h1>
          <p className="mt-2 text-sm text-velmora-mocha">Demi-fine jewelry, designed to be treasured</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between py-4 border-t border-velmora-stone/20">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-2 text-[11px] font-medium tracking-[0.15em] uppercase text-velmora-mocha hover:text-velmora-ink transition-colors"
          >
            <SlidersHorizontal size={15} strokeWidth={1.5} />
            Filter
            {activeFiltersCount > 0 && (
              <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-white text-[9px] font-bold">
                {activeFiltersCount}
              </span>
            )}
          </button>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent pr-6 pl-2 py-1 text-[11px] font-medium tracking-[0.1em] uppercase text-velmora-mocha focus:outline-none cursor-pointer"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-velmora-taupe pointer-events-none" />
          </div>
        </div>

        {/* Active filter chips */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2 pb-4">
            {category && (
              <span className="inline-flex items-center gap-1 text-[10px] tracking-wide uppercase bg-velmora-sand px-2 py-1 rounded-sm text-velmora-mocha">
                {categoryOptions.find((c) => c.value === category)?.label}
                <button onClick={() => setCategory("")} aria-label="Remove filter">
                  <X size={10} />
                </button>
              </span>
            )}
            {price && (
              <span className="inline-flex items-center gap-1 text-[10px] tracking-wide uppercase bg-velmora-sand px-2 py-1 rounded-sm text-velmora-mocha">
                {priceOptions.find((c) => c.value === price)?.label}
                <button onClick={() => setPrice("")} aria-label="Remove filter">
                  <X size={10} />
                </button>
              </span>
            )}
            {material && (
              <span className="inline-flex items-center gap-1 text-[10px] tracking-wide uppercase bg-velmora-sand px-2 py-1 rounded-sm text-velmora-mocha">
                {materialOptions.find((c) => c.value === material)?.label}
                <button onClick={() => setMaterial("")} aria-label="Remove filter">
                  <X size={10} />
                </button>
              </span>
            )}
            <button
              onClick={clearFilters}
              className="text-[10px] tracking-wide uppercase text-velmora-taupe hover:text-velmora-ink underline underline-offset-2"
            >
              Clear All
            </button>
          </div>
        )}

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-serif text-lg text-velmora-mocha">No products match your filters.</p>
            <button onClick={clearFilters} className="mt-4 btn-outline">
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pb-16">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>

      {/* Mobile filter drawer */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed top-0 left-0 z-[70] h-full w-full max-w-xs bg-velmora-cream shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-velmora-stone/20">
              <h2 className="font-serif text-lg tracking-wide">Filters</h2>
              <button onClick={() => setSidebarOpen(false)} aria-label="Close filters">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-velmora-mocha mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  {categoryOptions.map((o) => (
                    <button
                      key={o.value}
                      onClick={() => setCategory(o.value)}
                      className={`block text-sm ${
                        category === o.value ? "text-velmora-gold font-medium" : "text-velmora-ink"
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
              {/* Price */}
              <div>
                <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-velmora-mocha mb-3">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceOptions.map((o) => (
                    <button
                      key={o.value}
                      onClick={() => setPrice(o.value)}
                      className={`block text-sm ${
                        price === o.value ? "text-velmora-gold font-medium" : "text-velmora-ink"
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
              {/* Material */}
              <div>
                <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-velmora-mocha mb-3">
                  Material
                </h3>
                <div className="space-y-2">
                  {materialOptions.map((o) => (
                    <button
                      key={o.value}
                      onClick={() => setMaterial(o.value)}
                      className={`block text-sm ${
                        material === o.value ? "text-velmora-gold font-medium" : "text-velmora-ink"
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-velmora-stone/20 px-5 py-4">
              <button
                onClick={() => {
                  clearFilters();
                  setSidebarOpen(false);
                }}
                className="w-full btn-outline"
              >
                Clear All
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
