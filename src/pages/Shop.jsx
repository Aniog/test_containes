import { useState, useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SlidersHorizontal, X, ShoppingBag, ChevronDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const categoryOptions = [
  { value: "all", label: "All Jewelry" },
  { value: "earrings", label: "Earrings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "huggies", label: "Huggies" },
  { value: "sets", label: "Gift Sets" },
];

const priceRanges = [
  { value: "all", label: "All Prices" },
  { value: "0-50", label: "Under $50" },
  { value: "50-75", label: "$50 – $75" },
  { value: "75-120", label: "$75 – $120" },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Best Rated" },
];

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-parchment aspect-[3/4] mb-3">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge variant={product.badge === "New" ? "dark" : "gold"}>{product.badge}</Badge>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-cream/95 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between">
          <span className="font-sans text-xs tracking-widest uppercase text-ink">Quick Add</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="w-7 h-7 bg-ink text-cream flex items-center justify-center hover:bg-gold hover:text-ink transition-colors duration-200"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
          </button>
        </div>
      </Link>
      <Link to={`/product/${product.slug}`}>
        <h3
          id={`shop-${product.titleId}`}
          className="font-serif text-sm tracking-wider uppercase text-ink hover:text-gold transition-colors duration-200 mb-1"
        >
          {product.name}
        </h3>
      </Link>
      <p id={`shop-${product.descId}`} className="font-sans text-xs text-stone-warm mb-2">
        {product.shortDescription}
      </p>
      <div className="flex items-center justify-between">
        <StarRating rating={product.rating} />
        <span className="font-sans text-sm font-medium text-ink">${product.price}</span>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [priceRange, setPriceRange] = useState("all");
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

  const filtered = products
    .filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (priceRange !== "all") {
        const [min, max] = priceRange.split("-").map(Number);
        if (p.price < min || p.price > max) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  const handleCategoryChange = (val) => {
    setCategory(val);
    if (val !== "all") {
      setSearchParams({ category: val });
    } else {
      setSearchParams({});
    }
  };

  const FilterSidebar = () => (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-taupe mb-4">Category</h3>
        <div className="flex flex-col gap-2">
          {categoryOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleCategoryChange(opt.value)}
              className={cn(
                "text-left font-sans text-sm transition-colors duration-200 py-0.5",
                category === opt.value ? "text-ink font-medium" : "text-taupe hover:text-ink"
              )}
            >
              {opt.label}
              {category === opt.value && <span className="ml-2 text-gold">✦</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-hairline" />

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-taupe mb-4">Price</h3>
        <div className="flex flex-col gap-2">
          {priceRanges.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setPriceRange(opt.value)}
              className={cn(
                "text-left font-sans text-sm transition-colors duration-200 py-0.5",
                priceRange === opt.value ? "text-ink font-medium" : "text-taupe hover:text-ink"
              )}
            >
              {opt.label}
              {priceRange === opt.value && <span className="ml-2 text-gold">✦</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-hairline" />

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-taupe mb-4">Material</h3>
        <div className="flex flex-col gap-2">
          {["18K Gold Plated", "Sterling Silver"].map((m) => (
            <button key={m} className="text-left font-sans text-sm text-taupe hover:text-ink transition-colors py-0.5">
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Page header */}
      <div className="bg-parchment border-b border-hairline py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">Velmora</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-ink">
            {category === "all"
              ? "All Jewelry"
              : categoryOptions.find((c) => c.value === category)?.label || "Shop"}
          </h1>
          <p className="font-sans text-sm text-taupe mt-3">
            {filtered.length} piece{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* Mobile filter bar */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-ink border border-hairline px-4 py-2.5"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
          </button>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none font-sans text-xs tracking-widest uppercase text-ink border border-hairline px-4 py-2.5 pr-8 bg-cream focus:outline-none focus:border-ink"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-taupe pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10 md:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="font-sans text-xs text-stone-warm">
                Showing {filtered.length} result{filtered.length !== 1 ? "s" : ""}
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none font-sans text-xs tracking-widest uppercase text-ink border border-hairline px-4 py-2.5 pr-8 bg-cream focus:outline-none focus:border-ink"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-taupe pointer-events-none" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
                <p className="font-serif text-2xl text-taupe">No pieces found</p>
                <p className="font-sans text-sm text-stone-warm">Try adjusting your filters.</p>
                <Button variant="outline" onClick={() => { setCategory("all"); setPriceRange("all"); }}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <>
        <div
          className={cn(
            "fixed inset-0 bg-ink/40 z-50 transition-opacity duration-300 md:hidden",
            mobileFiltersOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={cn(
            "fixed top-0 left-0 h-full w-72 bg-cream z-50 flex flex-col transition-transform duration-300 md:hidden",
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
            <span className="font-sans text-xs tracking-widest uppercase text-ink">Filters</span>
            <button onClick={() => setMobileFiltersOpen(false)} className="text-taupe hover:text-ink">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <FilterSidebar />
          </div>
          <div className="px-6 py-4 border-t border-hairline">
            <Button variant="primary" className="w-full justify-center" onClick={() => setMobileFiltersOpen(false)}>
              Apply Filters
            </Button>
          </div>
        </div>
      </>
    </div>
  );
}
