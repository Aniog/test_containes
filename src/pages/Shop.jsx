import { useState, useMemo, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products, categories } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/StarRating";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";

const priceRanges = [
  { label: "Under $40", min: 0, max: 40 },
  { label: "$40 – $60", min: 40, max: 60 },
  { label: "$60 – $80", min: 60, max: 80 },
  { label: "$80+", min: 80, max: Infinity },
];

const materials = ["Gold", "Silver"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-stone/30">
          <img
            data-strk-img-id={`shop-${product.id}`}
            data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-title] ${product.category} jewelry gold elegant`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.displayName}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              hovered ? "scale-105" : "scale-100"
            }`}
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-champagne text-charcoal text-[10px] uppercase tracking-widest px-2.5 py-1">
              {product.badge}
            </span>
          )}
        </div>
        <span id={`shop-${product.id}-title`} className="sr-only">
          {product.displayName}
        </span>
        <span id={`shop-${product.id}-desc`} className="sr-only">
          {product.description}
        </span>
      </Link>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <p className="font-serif text-xs tracking-widest uppercase text-charcoal">
            {product.name}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <StarRating rating={product.rating} size={12} />
            <span className="text-[11px] text-taupe">({product.reviews})</span>
          </div>
        </div>
        <p className="text-sm font-medium text-charcoal">${product.price}</p>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          addToCart(product, product.variants[0], 1);
        }}
        className="mt-3 w-full border border-charcoal text-charcoal py-2 text-[11px] uppercase tracking-widest hover:bg-charcoal hover:text-ivory transition-all duration-200 opacity-0 group-hover:opacity-100"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState("featured");
  const containerRef = useRef(null);

  const initialCategory = searchParams.get("category") || "";

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategories([cat]);
    }
  }, [searchParams]);

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const togglePrice = (idx) => {
    setSelectedPrices((prev) =>
      prev.includes(idx) ? prev.filter((p) => p !== idx) : [...prev, idx]
    );
  };

  const toggleMaterial = (m) => {
    setSelectedMaterials((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((idx) => {
          const r = priceRanges[idx];
          return p.price >= r.min && p.price < r.max;
        })
      );
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) =>
        selectedMaterials.some((m) =>
          p.variants.some((v) => v.toLowerCase() === m.toLowerCase())
        )
      );
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategories, selectedPrices, selectedMaterials, sort]);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const hasFilters =
    selectedCategories.length > 0 ||
    selectedPrices.length > 0 ||
    selectedMaterials.length > 0;

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [filtered]);

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-widest font-medium mb-3">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-2 cursor-pointer text-sm"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="w-4 h-4 accent-champagne border-stone"
              />
              <span>{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-widest font-medium mb-3">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((r, i) => (
            <label
              key={i}
              className="flex items-center gap-2 cursor-pointer text-sm"
            >
              <input
                type="checkbox"
                checked={selectedPrices.includes(i)}
                onChange={() => togglePrice(i)}
                className="w-4 h-4 accent-champagne border-stone"
              />
              <span>{r.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-widest font-medium mb-3">
          Material
        </h3>
        <div className="space-y-2">
          {materials.map((m) => (
            <label
              key={m}
              className="flex items-center gap-2 cursor-pointer text-sm"
            >
              <input
                type="checkbox"
                checked={selectedMaterials.includes(m)}
                onChange={() => toggleMaterial(m)}
                className="w-4 h-4 accent-champagne border-stone"
              />
              <span>{m}</span>
            </label>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-widest underline text-taupe hover:text-charcoal transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl tracking-wide">
              All Jewelry
            </h1>
            <p className="text-sm text-taupe mt-1">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 border border-stone px-3 py-2 text-xs uppercase tracking-widest"
            >
              <SlidersHorizontal size={14} />
              Filters
              {hasFilters && (
                <span className="w-2 h-2 bg-champagne rounded-full" />
              )}
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-white border border-stone px-4 py-2 pr-10 text-xs uppercase tracking-widest focus:outline-none focus:border-champagne cursor-pointer"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-taupe">
                  No products match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm uppercase tracking-widest underline text-charcoal hover:text-champagne transition-colors"
                >
                  Clear Filters
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

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-charcoal/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-ivory p-6 flex flex-col animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl tracking-widest">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <FilterContent />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
