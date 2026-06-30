import React, { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ShoppingBag, SlidersHorizontal, Star, X } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const categories = [
  { id: "all", name: "All" },
  { id: "earrings", name: "Earrings" },
  { id: "necklaces", name: "Necklaces" },
  { id: "huggies", name: "Huggies" },
  { id: "sets", name: "Sets" },
];

const materials = ["Gold", "Silver"];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name", label: "Alphabetical" },
];

export default function ShopPage() {
  const { addItem } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [material, setMaterial] = useState("all");
  const [sort, setSort] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [mobileFilters, setMobileFilters] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setCategory(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (category !== "all") {
      result = result.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (material !== "all") {
      result = result.filter(
        (p) => p.material.toLowerCase() === material.toLowerCase()
      );
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [category, material, sort, priceRange]);

  const handleCategory = (cat) => {
    setCategory(cat);
    setSearchParams(cat === "all" ? {} : { category: cat });
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.1em] text-foreground">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategory(cat.id)}
              className={`block w-full text-left font-sans text-sm transition-colors ${
                category === cat.id
                  ? "text-foreground font-medium"
                  : "text-foreground/50 hover:text-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.1em] text-foreground">
          Material
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setMaterial("all")}
            className={`block w-full text-left font-sans text-sm transition-colors ${
              material === "all"
                ? "text-foreground font-medium"
                : "text-foreground/50 hover:text-foreground"
            }`}
          >
            All
          </button>
          {materials.map((m) => (
            <button
              key={m}
              onClick={() => setMaterial(m)}
              className={`block w-full text-left font-sans text-sm transition-colors ${
                material === m
                  ? "text-foreground font-medium"
                  : "text-foreground/50 hover:text-foreground"
              }`}
            >
              {m} Tone
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.1em] text-foreground">
          Price Range
        </h3>
        <div className="space-y-3">
          <input
            type="range"
            min={0}
            max={200}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full accent-primary"
          />
          <div className="flex justify-between font-sans text-xs text-foreground/50">
            <span>$0</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-24 md:pt-28">
      {/* Page Header */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-12 lg:px-16">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-primary">
            Collection
          </p>
          <h1 className="mt-2 font-serif text-3xl font-light text-foreground md:text-4xl">
            All Jewelry
          </h1>
          <p className="mt-2 font-sans text-sm text-foreground/40">
            {filtered.length} styles
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10 md:px-12 lg:px-16">
        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden w-56 flex-shrink-0 lg:block">
            <FilterContent />
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Top bar */}
            <div className="mb-8 flex items-center justify-between">
              <button
                onClick={() => setMobileFilters(true)}
                className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.08em] text-foreground/50 transition-colors hover:text-foreground lg:hidden"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Filters
              </button>

              <div className="flex items-center gap-3">
                <label className="font-sans text-xs text-foreground/40">Sort by</label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-border bg-background px-3 py-2 font-sans text-xs uppercase tracking-[0.05em] text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-sans text-sm text-foreground/40">
                  No products match your filters.
                </p>
                <button
                  onClick={() => {
                    setCategory("all");
                    setMaterial("all");
                    setPriceRange([0, 200]);
                  }}
                  className="mt-4 font-sans text-xs uppercase tracking-[0.08em] text-primary underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group">
                    <Link
                      to={`/product/${product.id}`}
                      className="relative aspect-[3/4] block overflow-hidden bg-muted"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      {product.badge && (
                        <span className="absolute left-3 top-3 bg-primary/90 px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-primary-foreground">
                          {product.badge}
                        </span>
                      )}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addItem(product);
                        }}
                        className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 bg-foreground/90 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-background opacity-0 transition-all duration-300 group-hover:opacity-100"
                      >
                        <ShoppingBag className="h-3.5 w-3.5" />
                        Add to Cart
                      </button>
                    </Link>
                    <div className="mt-3 space-y-1">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="product-name text-xs font-medium leading-tight text-foreground transition-colors group-hover:text-primary md:text-sm">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="font-sans text-[11px] text-foreground/40">
                        {product.category}
                      </p>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-primary text-primary" />
                        <span className="font-sans text-[11px] text-foreground/50">
                          {product.rating}
                        </span>
                      </div>
                      <p className="font-serif text-sm font-medium text-foreground">
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

      {/* Mobile Filter Overlay */}
      {mobileFilters && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileFilters(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] overflow-y-auto bg-background p-6 shadow-2xl lg:hidden">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-sans text-xs font-medium uppercase tracking-[0.1em]">
                Filters
              </h2>
              <button
                onClick={() => setMobileFilters(false)}
                className="transition-colors hover:text-foreground/60"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </main>
  );
}