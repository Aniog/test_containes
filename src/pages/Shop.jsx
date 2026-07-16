import { useEffect, useMemo, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { SlidersHorizontal } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";
import strkImgConfig from "@/strk-img-config.json";

const categoryOptions = ["All", "Earrings", "Necklaces", "Huggies", "Gift Sets"];
const priceOptions = ["All", "Under $50", "$50–$80", "$80+"];
const materialOptions = ["All", "18K Gold Plated", "Gold Vermeil"];

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get("category") || "All");
  const [price, setPrice] = useState("All");
  const [material, setMaterial] = useState("All");
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    setCategory(searchParams.get("category") || "All");
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch = category === "All" || product.category === category;
      const materialMatch = material === "All" || product.material === material;
      const priceMatch =
        price === "All" ||
        (price === "Under $50" && product.price < 50) ||
        (price === "$50–$80" && product.price >= 50 && product.price <= 80) ||
        (price === "$80+" && product.price > 80);
      return categoryMatch && materialMatch && priceMatch;
    });

    if (sort === "price-low") return [...result].sort((a, b) => a.price - b.price);
    if (sort === "price-high") return [...result].sort((a, b) => b.price - a.price);
    return result;
  }, [category, material, price, sort]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, material, price, sort]);

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="velmora-container pb-12 pt-10 md:pb-16">
        <p className="section-kicker">Shop Velmora</p>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 id="shop-title" className="serif-heading text-6xl md:text-8xl">Collection</h1>
            <p id="shop-subtitle" className="mt-5 max-w-2xl text-sm leading-7 text-velmora-cocoa md:text-base">
              Demi-fine earrings, necklaces, huggies, and giftable gold pieces
              crafted for premium everyday wear.
            </p>
          </div>
          <label className="flex items-center gap-3 text-sm font-bold uppercase tracking-nav text-velmora-cocoa">
            Sort
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="rounded-full border border-velmora-linen bg-velmora-ivory px-4 py-3 text-sm normal-case tracking-normal text-velmora-espresso focus:border-velmora-gold focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
          </label>
        </div>
      </section>

      <section className="velmora-container grid gap-10 pb-20 lg:grid-cols-[17rem_1fr]">
        <aside className="h-fit rounded-[2rem] border border-velmora-linen bg-velmora-parchment p-5 text-velmora-espresso lg:sticky lg:top-28">
          <div className="mb-5 flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
            <h2 className="text-xs font-bold uppercase tracking-nav">Filters</h2>
          </div>
          <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={priceOptions} value={price} onChange={setPrice} />
          <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between border-b border-velmora-linen pb-4 text-sm text-velmora-cocoa">
            <span>{filteredProducts.length} pieces</span>
            <span className="hidden sm:inline">Free worldwide shipping on every order</span>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <fieldset className="border-t border-velmora-linen py-5 first:border-t-0 first:pt-0">
      <legend className="mb-3 text-xs font-bold uppercase tracking-nav text-velmora-bronze">
        {title}
      </legend>
      <div className="flex flex-wrap gap-2 lg:flex-col">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-4 py-2 text-left text-sm transition ${
              value === option
                ? "border-velmora-espresso bg-velmora-espresso text-velmora-ivory"
                : "border-velmora-linen bg-velmora-ivory text-velmora-cocoa hover:border-velmora-gold hover:text-velmora-espresso"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
