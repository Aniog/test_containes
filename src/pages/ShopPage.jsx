import { ImageHelper } from "@strikingly/sdk";
import { ChevronDown } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import FilterSidebar from "../components/products/FilterSidebar.jsx";
import ProductCard from "../components/products/ProductCard.jsx";
import SectionHeading from "../components/shared/SectionHeading.jsx";
import {
  categoryOptions,
  materialOptions,
  products,
} from "../data/storefront.js";
import { useStorefront } from "../hooks/useStorefront.jsx";
import strkImgConfig from "../strk-img-config.json";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
];

const matchesPrice = (product, price) => {
  if (price === "under-50") return product.price < 50;
  if (price === "50-80") return product.price >= 50 && product.price < 80;
  if (price === "80-plus") return product.price >= 80;
  return true;
};

const ShopPage = () => {
  const { addToCart } = useStorefront();
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const category = searchParams.get("category") || "All";
  const material = searchParams.get("material") || "All";
  const price = searchParams.get("price") || "all";
  const sortBy = searchParams.get("sort") || "featured";

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch = category === "All" || product.category === category;
      const materialMatch = material === "All" || product.material === material;
      return categoryMatch && materialMatch && matchesPrice(product, price);
    });

    switch (sortBy) {
      case "price-asc":
        return [...result].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...result].sort((a, b) => b.price - a.price);
      case "newest":
        return [...result].sort((a, b) => b.order - a.order);
      default:
        return [...result].sort((a, b) => a.order - b.order);
    }
  }, [category, material, price, sortBy]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [category, material, price, sortBy]);

  const updateParam = (key, value, defaultValue) => {
    const next = new URLSearchParams(searchParams);
    if (value === defaultValue) {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  return (
    <div ref={containerRef} className="pb-16 pt-28 sm:pt-32">
      <section className="container-shell">
        <div className="rounded-[2.5rem] border border-stone-200 bg-stone-100 px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
          <SectionHeading
            eyebrow="Collection"
            title="Jewelry for layering, gifting, and keeping close"
            description="Refine the edit by silhouette, material, or price, then sort the collection to find your next everyday signature."
          />
        </div>
      </section>

      <section className="container-shell mt-10 grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
        <FilterSidebar
          categories={categoryOptions}
          materials={materialOptions}
          category={category}
          material={material}
          price={price}
          resultCount={filteredProducts.length}
          setCategory={(value) => updateParam("category", value, "All")}
          setMaterial={(value) => updateParam("material", value, "All")}
          setPrice={(value) => updateParam("price", value, "all")}
        />

        <div>
          <div className="mb-6 flex flex-col gap-4 rounded-[2rem] border border-stone-200 bg-stone-50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-stone-600">
              Showing <span className="font-semibold text-stone-950">{filteredProducts.length}</span> pieces
            </p>
            <label className="relative inline-flex items-center">
              <select
                className="appearance-none rounded-full border border-stone-300 bg-stone-50 px-4 py-3 pr-10 text-sm text-stone-950 outline-none transition focus:border-amber-600"
                value={sortBy}
                onChange={(event) => updateParam("sort", event.target.value, "featured")}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 h-4 w-4 text-stone-500" />
            </label>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="rounded-[2rem] border border-stone-200 bg-stone-100 px-6 py-12 text-center">
              <p className="product-name text-sm text-stone-500">No matches just yet</p>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                Try clearing one filter to bring more of the Velmora collection into view.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.slug}
                  idPrefix="shop-grid"
                  onAddToCart={addToCart}
                  product={product}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
