import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Star, SlidersHorizontal, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [categoryFilter, setCategoryFilter] = useState(
    searchParams.get("category") || "all"
  );
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { addItem, openCart } = useCart();

  const categories = ["all", "Earrings", "Necklaces", "Huggies", "Sets"];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFilter !== "all") {
      result = result.filter(
        (p) => p.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [categoryFilter, priceRange, sortBy]);

  const handleCategoryChange = (cat) => {
    setCategoryFilter(cat);
    if (cat === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat.toLowerCase() });
    }
  };

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    openCart();
  };

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-cream-50 border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <h1 className="font-serif text-3xl md:text-5xl text-warm-900 font-light text-center">
            {categoryFilter === "all" ? "All Jewelry" : categoryFilter}
          </h1>
          <p className="mt-2 text-sm text-warm-500 font-sans text-center">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "piece" : "pieces"}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile filter toggle */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-2 text-xs tracking-wider uppercase text-warm-800 font-sans"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs tracking-wider uppercase text-warm-700 font-sans bg-transparent border border-warm-300 px-3 py-2"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Best Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="md:sticky md:top-24 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase text-warm-800 font-sans font-medium mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`block w-full text-left text-sm font-sans py-1 transition-colors ${
                        categoryFilter === cat
                          ? "text-gold-700 font-medium"
                          : "text-warm-600 hover:text-warm-900"
                      }`}
                    >
                      {cat === "all" ? "All" : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase text-warm-800 font-sans font-medium mb-4">
                  Price Range
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-warm-600 font-sans">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}+</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={200}
                    step={10}
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Number(e.target.value)])
                    }
                    className="w-full accent-gold-600"
                  />
                </div>
              </div>

              {/* Sort */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase text-warm-800 font-sans font-medium mb-4">
                  Sort By
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full text-xs text-warm-700 font-sans bg-transparent border border-warm-300 px-3 py-2.5"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Best Rated</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Mobile filters */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-40 md:hidden">
              <div
                className="absolute inset-0 bg-black/30"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#FAF7F2] p-6 shadow-xl overflow-y-auto">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs tracking-[0.15em] uppercase text-warm-800 font-sans font-medium mb-4">
                      Category
                    </h3>
                    <div className="space-y-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            handleCategoryChange(cat);
                            setMobileFiltersOpen(false);
                          }}
                          className={`block w-full text-left text-sm font-sans py-1 transition-colors ${
                            categoryFilter === cat
                              ? "text-gold-700 font-medium"
                              : "text-warm-600 hover:text-warm-900"
                          }`}
                        >
                          {cat === "all" ? "All" : cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs tracking-[0.15em] uppercase text-warm-800 font-sans font-medium mb-4">
                      Price Range
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-warm-600 font-sans">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}+</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={200}
                        step={10}
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([priceRange[0], Number(e.target.value)])
                        }
                        className="w-full accent-gold-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-warm-600 mb-4">
                  No pieces found
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setCategoryFilter("all");
                    setPriceRange([0, 200]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[4/5] bg-cream-200 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {product.isNew && (
                        <Badge variant="default" className="absolute top-3 left-3">
                          New
                        </Badge>
                      )}
                      <button
                        onClick={(e) => handleQuickAdd(e, product)}
                        className="absolute bottom-0 left-0 right-0 bg-warm-900/90 backdrop-blur-sm text-cream-100 py-3 px-4 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                      >
                        <span className="text-[10px] tracking-wider uppercase font-sans font-medium">
                          Quick Add
                        </span>
                      </button>
                    </div>
                    <div className="mt-3 space-y-1">
                      <h3 className="product-name text-warm-900 truncate">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
                        <span className="text-[10px] text-warm-500 font-sans">
                          {product.rating}
                        </span>
                      </div>
                      <p className="text-sm font-sans font-medium text-warm-900">
                        ${product.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}