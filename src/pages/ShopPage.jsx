import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { SlidersHorizontal, X } from "lucide-react";
import products from "../data/products";

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categoryFilter = searchParams.get("category") || "";
  const materialFilter = searchParams.get("material") || "";
  const sortBy = searchParams.get("sort") || "featured";

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFilter) {
      result = result.filter(
        (p) => p.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    if (materialFilter) {
      result = result.filter((p) =>
        p.material.toLowerCase().includes(materialFilter.toLowerCase())
      );
    }

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
        result.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    return result;
  }, [categoryFilter, materialFilter, sortBy]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const categories = ["Earrings", "Necklaces", "Huggies", "Sets"];
  const materials = ["18K Gold Plated"];

  return (
    <div className="pt-20 sm:pt-24">
      <div className="container-velmora py-6 sm:py-10">
        {/* Page header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal mb-3">
            {categoryFilter || "All Jewelry"}
          </h1>
          <p className="text-sm text-velmora-charcoal/60">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar (desktop) */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-sm tracking-wide uppercase mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter("category", "")}
                    className={`block text-sm ${
                      !categoryFilter
                        ? "text-accent font-medium"
                        : "text-velmora-charcoal/60 hover:text-velmora-charcoal"
                    } transition-colors`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => updateFilter("category", cat)}
                      className={`block text-sm ${
                        categoryFilter === cat
                          ? "text-accent font-medium"
                          : "text-velmora-charcoal/60 hover:text-velmora-charcoal"
                      } transition-colors`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-sm tracking-wide uppercase mb-3">
                  Material
                </h3>
                <div className="space-y-2">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() =>
                        updateFilter(
                          "material",
                          materialFilter === mat ? "" : mat
                        )
                      }
                      className={`block text-sm ${
                        materialFilter === mat
                          ? "text-accent font-medium"
                          : "text-velmora-charcoal/60 hover:text-velmora-charcoal"
                      } transition-colors`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear */}
              {(categoryFilter || materialFilter) && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-accent hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="lg:hidden flex items-center gap-2 text-sm border border-border px-3 py-2 hover:border-accent transition-colors"
              >
                <SlidersHorizontal size={16} />
                Filter
              </button>

              <div className="ml-auto">
                <select
                  value={sortBy}
                  onChange={(e) => updateFilter("sort", e.target.value)}
                  className="text-sm border border-border px-3 py-2 bg-transparent focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>

            {/* Mobile filter drawer */}
            {mobileFilterOpen && (
              <div className="lg:hidden fixed inset-0 z-40 bg-black/40" onClick={() => setMobileFilterOpen(false)}>
                <div
                  className="absolute right-0 top-0 h-full w-72 bg-white p-6 overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm tracking-wide uppercase">Filter</h3>
                    <button onClick={() => setMobileFilterOpen(false)}>
                      <X size={18} />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Category</h4>
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            updateFilter("category", cat);
                            setMobileFilterOpen(false);
                          }}
                          className={`block w-full text-left py-1 text-sm ${
                            categoryFilter === cat
                              ? "text-accent font-medium"
                              : "text-velmora-charcoal/60"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      clearFilters();
                      setMobileFilterOpen(false);
                    }}
                    className="mt-8 w-full btn-outline text-sm py-2"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            )}

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-charcoal/60 mb-4">No products found.</p>
                <button onClick={clearFilters} className="btn-outline text-sm">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
