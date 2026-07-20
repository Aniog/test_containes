import React, { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { products, categories, materials } from "../data/products";
import { ProductCard } from "../components/home/ProductCard";
import { formatPrice } from "../lib/utils";
import { ChevronDown } from "lucide-react";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Get filter values from URL
  const selectedCategories = searchParams.getAll("category");
  const selectedMaterials = searchParams.getAll("material");
  const minPrice = parseInt(searchParams.get("minPrice") || "0");
  const maxPrice = parseInt(searchParams.get("maxPrice") || "200");
  const sortBy = searchParams.get("sort") || "featured";
  const searchQuery = searchParams.get("search") || "";

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    // Price filter
    result = result.filter((p) => p.price >= minPrice && p.price <= maxPrice);

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategories, selectedMaterials, minPrice, maxPrice, sortBy, searchQuery]);

  const updateFilter = (key, value, isMulti = false) => {
    const newParams = new URLSearchParams(searchParams);

    if (isMulti) {
      const current = newParams.getAll(key);
      if (current.includes(value)) {
        // Remove
        newParams.delete(key);
        current.filter((v) => v !== value).forEach((v) => newParams.append(key, v));
      } else {
        newParams.append(key, value);
      }
    } else {
      if (newParams.get(key) === value) {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    }

    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedMaterials.length > 0 ||
    minPrice > 0 ||
    maxPrice < 200 ||
    searchQuery;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
        <div>
          <span className="text-xs tracking-[0.15em] text-[var(--color-text-muted)] uppercase">Discover</span>
          <h1 className="heading-serif text-4xl">The Collection</h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => updateFilter("sort", e.target.value)}
              className="sort-select pr-8"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="md:hidden btn btn-outline btn-sm"
          >
            Filters
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Filters Sidebar */}
        <aside className={`w-full md:w-56 flex-shrink-0 ${isMobileFiltersOpen ? "block" : "hidden md:block"}`}>
          <div className="sticky top-24 space-y-8">
            {/* Active filters */}
            {hasActiveFilters && (
              <div>
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-widest text-[var(--color-accent)] hover:underline"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Search */}
            <div>
              <div className="filter-label">Search</div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  const newParams = new URLSearchParams(searchParams);
                  if (e.target.value) {
                    newParams.set("search", e.target.value);
                  } else {
                    newParams.delete("search");
                  }
                  setSearchParams(newParams);
                }}
                placeholder="Search jewelry..."
                className="input text-sm"
              />
            </div>

            {/* Category */}
            <div>
              <div className="filter-label">Category</div>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => updateFilter("category", cat, true)}
                      className="accent-[var(--color-accent)]"
                    />
                    <span className="text-sm group-hover:text-[var(--color-accent)] transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <div className="filter-label">Material</div>
              <div className="space-y-2">
                {materials.map((mat) => (
                  <label key={mat} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => updateFilter("material", mat, true)}
                      className="accent-[var(--color-accent)]"
                    />
                    <span className="text-sm group-hover:text-[var(--color-accent)] transition-colors">{mat} Tone</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <div className="filter-label">Price Range</div>
              <div className="space-y-3">
                <div className="flex gap-2 items-center text-sm">
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => updateFilter("minPrice", e.target.value)}
                    className="input py-1.5 text-sm w-20"
                    min="0"
                  />
                  <span className="text-[var(--color-text-muted)]">to</span>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => updateFilter("maxPrice", e.target.value)}
                    className="input py-1.5 text-sm w-20"
                    min="0"
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="120"
                  step="5"
                  value={maxPrice}
                  onChange={(e) => updateFilter("maxPrice", e.target.value)}
                  className="w-full accent-[var(--color-accent)]"
                />
                <div className="text-xs text-[var(--color-text-muted)]">
                  Up to {formatPrice(maxPrice)}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <>
              <p className="text-xs text-[var(--color-text-muted)] mb-4 tracking-widest">
                {filteredProducts.length} {filteredProducts.length === 1 ? "PIECE" : "PIECES"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-[var(--color-text-muted)] mb-4">No pieces match your filters.</p>
              <button onClick={clearFilters} className="btn btn-outline btn-sm">
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
