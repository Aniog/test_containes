import { useState, useMemo, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { useImageLoader } from "@/hooks/useImageLoader";
import { cn } from "@/lib/utils";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category");

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sortBy, setSortBy] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);

  const containerRef = useRef(null);
  useImageLoader(containerRef, [selectedCategories, selectedMaterials, selectedPrice]);

  useEffect(() => {
    if (initialCategory && !selectedCategories.includes(initialCategory)) {
      setSelectedCategories([initialCategory]);
    }
  }, [initialCategory]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const toggleMaterial = (material) => {
    setSelectedMaterials((prev) =>
      prev.includes(material) ? prev.filter((m) => m !== material) : [...prev, material]
    );
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }
    if (selectedPrice) {
      result = result.filter(
        (p) => p.price >= selectedPrice.min && p.price <= selectedPrice.max
      );
    }

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
  }, [selectedCategories, selectedMaterials, selectedPrice, sortBy]);

  return (
    <div ref={containerRef} className="bg-cream pb-20 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gold">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-3xl text-espresso md:text-5xl">
            Shop All
          </h1>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          <FilterSidebar
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
            selectedMaterials={selectedMaterials}
            toggleMaterial={toggleMaterial}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
            isOpen={filterOpen}
            onClose={() => setFilterOpen(false)}
          />

          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between border-b border-stone-200 pb-4">
              <button
                type="button"
                onClick={() => setFilterOpen(true)}
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-espresso transition-colors hover:text-gold focus-visible:outline-none lg:hidden"
              >
                <SlidersHorizontal size={16} />
                Filters
              </button>
              <span className="hidden text-sm text-warm-gray lg:block">
                {filteredProducts.length} product
                {filteredProducts.length !== 1 ? "s" : ""}
              </span>
              <div className="flex items-center gap-2">
                <label
                  htmlFor="sort"
                  className="hidden text-xs uppercase tracking-widest text-warm-gray sm:block"
                >
                  Sort by
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="h-10 border border-stone-300 bg-transparent px-3 text-sm text-espresso focus:border-gold focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-espresso">No products match your filters.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedMaterials([]);
                    setSelectedPrice(null);
                    setSearchParams({});
                  }}
                  className="mt-4 text-sm text-gold underline-offset-4 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:gap-x-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={`${product.id}-${sortBy}`} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionPage;
