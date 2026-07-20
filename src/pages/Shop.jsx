import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useImageLoader } from "@/hooks/useImageLoader";
import { cn } from "@/lib/utils";

const priceRanges = [
  { label: "Under $40", min: 0, max: 40 },
  { label: "$40 – $60", min: 40, max: 60 },
  { label: "$60 – $80", min: 60, max: 80 },
  { label: "$80+", min: 80, max: Infinity },
];

const materials = ["gold-plated", "silver", "crystal", "brass"];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState("featured");
  const containerRef = useImageLoader([searchParams.toString(), sort]);

  const activeCategory = searchParams.get("category") || "";
  const activePrice = searchParams.get("price") || "";
  const activeMaterial = searchParams.get("material") || "";

  useEffect(() => {
    document.title = "Shop | Velmora Fine Jewelry";
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePrice) {
      const range = priceRanges.find((r) => r.label === activePrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    if (activeMaterial) {
      result = result.filter((p) => p.material.includes(activeMaterial));
    }

    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => a.id.localeCompare(b.id));
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activePrice, activeMaterial, sort]);

  const toggleParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (next.get(key) === value) {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next, { replace: true });
  };

  const clearFilters = () => {
    setSearchParams({}, { replace: true });
  };

  const activeFiltersCount = [activeCategory, activePrice, activeMaterial].filter(Boolean).length;

  const FilterContent = ({ mobile = false }) => (
    <div className="space-y-8">
      {mobile && (
        <div className="flex items-center justify-between border-b border-stone-200 pb-4">
          <h3 className="font-serif text-lg uppercase tracking-[0.18em] text-stone-900">
            Filters
          </h3>
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            className="text-stone-500 hover:text-stone-900"
          >
            <X size={20} />
          </button>
        </div>
      )}

      <div>
        <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-stone-900">
          Category
        </h4>
        <div className="mt-4 space-y-3">
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center gap-3">
              <Checkbox
                id={`cat-${cat.id}`}
                checked={activeCategory === cat.id}
                onCheckedChange={() => toggleParam("category", cat.id)}
              />
              <Label
                htmlFor={`cat-${cat.id}`}
                className="cursor-pointer text-sm capitalize text-stone-600"
              >
                {cat.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-stone-900">
          Price
        </h4>
        <div className="mt-4 space-y-3">
          {priceRanges.map((range) => (
            <div key={range.label} className="flex items-center gap-3">
              <Checkbox
                id={`price-${range.label}`}
                checked={activePrice === range.label}
                onCheckedChange={() => toggleParam("price", range.label)}
              />
              <Label
                htmlFor={`price-${range.label}`}
                className="cursor-pointer text-sm text-stone-600"
              >
                {range.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-stone-900">
          Material
        </h4>
        <div className="mt-4 space-y-3">
          {materials.map((mat) => (
            <div key={mat} className="flex items-center gap-3">
              <Checkbox
                id={`mat-${mat}`}
                checked={activeMaterial === mat}
                onCheckedChange={() => toggleParam("material", mat)}
              />
              <Label
                htmlFor={`mat-${mat}`}
                className="cursor-pointer text-sm capitalize text-stone-600"
              >
                {mat}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <Button
          variant="outline"
          onClick={clearFilters}
          className="w-full text-xs uppercase tracking-[0.15em]"
        >
          Clear All ({activeFiltersCount})
        </Button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="bg-[#fbfaf9]">
      <div className="border-b border-stone-200 bg-[#fbfaf9] pb-10 pt-28 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-700">
          The Collection
        </p>
        <h1 className="mt-3 font-serif text-4xl font-light text-stone-900 md:text-5xl">
          Shop All Jewelry
        </h1>
      </div>

      <div className="mx-auto flex max-w-7xl gap-10 px-5 py-12 md:px-8">
        {/* Desktop filters */}
        <aside className="hidden w-60 flex-shrink-0 lg:block">
          <div className="sticky top-24">
            <FilterContent />
          </div>
        </aside>

        <div className="flex-1">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-stone-500">
              {filteredProducts.length} {filteredProducts.length === 1 ? "piece" : "pieces"}
            </p>
            <div className="flex items-center gap-3">
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="h-10 w-[160px] rounded-none border-stone-200 bg-white text-xs uppercase tracking-[0.1em]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                className="h-10 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal size={16} className="mr-2" />
                Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </Button>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-serif text-xl text-stone-900">No pieces found</p>
              <p className="mt-2 text-sm text-stone-500">Try adjusting your filters.</p>
              <Button variant="outline" onClick={clearFilters} className="mt-6">
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filters drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-stone-900/30 backdrop-blur-sm transition-opacity lg:hidden",
          mobileFiltersOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setMobileFiltersOpen(false)}
      />
      <div
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-[85%] max-w-sm transform bg-[#fbfaf9] p-6 shadow-2xl transition-transform duration-300 lg:hidden",
          mobileFiltersOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <FilterContent mobile />
      </div>
    </div>
  );
};

export default Shop;
