import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { Check, ChevronDown, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";
import strkImgConfig from "@/strk-img-config.json";

const SHOP_PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    price: 42,
    category: "earrings",
    material: "gold",
    rating: 4.9,
    badge: "Bestseller",
    nameId: "shop-vivid-aura-jewels-name",
    taglineId: "shop-vivid-aura-jewels-tag",
    mainImgId: "shop-vivid-aura-jewels-m",
    hoverImgId: "shop-vivid-aura-jewels-h",
    mainQuery: "[shop-vivid-aura-jewels-tag] [shop-vivid-aura-jewels-name] [shop-sub] [shop-title]",
    hoverQuery: "[shop-vivid-aura-jewels-tag] worn close-up lifestyle [shop-title]",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    price: 68,
    category: "necklaces",
    material: "gold",
    rating: 4.8,
    badge: "New",
    nameId: "shop-majestic-flora-nectar-name",
    taglineId: "shop-majestic-flora-nectar-tag",
    mainImgId: "shop-majestic-flora-nectar-m",
    hoverImgId: "shop-majestic-flora-nectar-h",
    mainQuery: "[shop-majestic-flora-nectar-tag] [shop-majestic-flora-nectar-name] [shop-sub] [shop-title]",
    hoverQuery: "[shop-majestic-flora-nectar-tag] worn close-up lifestyle [shop-title]",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    price: 38,
    category: "huggies",
    material: "gold",
    rating: 5.0,
    badge: "Bestseller",
    nameId: "shop-golden-sphere-huggies-name",
    taglineId: "shop-golden-sphere-huggies-tag",
    mainImgId: "shop-golden-sphere-huggies-m",
    hoverImgId: "shop-golden-sphere-huggies-h",
    mainQuery: "[shop-golden-sphere-huggies-tag] [shop-golden-sphere-huggies-name] [shop-sub] [shop-title]",
    hoverQuery: "[shop-golden-sphere-huggies-tag] worn close-up lifestyle [shop-title]",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    price: 54,
    category: "earrings",
    material: "gold",
    rating: 4.7,
    badge: null,
    nameId: "shop-amber-lace-earrings-name",
    taglineId: "shop-amber-lace-earrings-tag",
    mainImgId: "shop-amber-lace-earrings-m",
    hoverImgId: "shop-amber-lace-earrings-h",
    mainQuery: "[shop-amber-lace-earrings-tag] [shop-amber-lace-earrings-name] [shop-sub] [shop-title]",
    hoverQuery: "[shop-amber-lace-earrings-tag] worn close-up lifestyle [shop-title]",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring and necklace set in linen box",
    price: 95,
    compareAt: 116,
    category: "sets",
    material: "gold",
    rating: 4.9,
    badge: "Gift Ready",
    nameId: "shop-royal-heirloom-set-name",
    taglineId: "shop-royal-heirloom-set-tag",
    mainImgId: "shop-royal-heirloom-set-m",
    hoverImgId: "shop-royal-heirloom-set-h",
    mainQuery: "[shop-royal-heirloom-set-tag] [shop-royal-heirloom-set-name] [shop-sub] [shop-title]",
    hoverQuery: "[shop-royal-heirloom-set-tag] elegant flat lay lifestyle [shop-title]",
  },
];

const CATEGORY_OPTIONS = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Gift Sets" },
];

const MATERIAL_OPTIONS = [
  { id: "gold", label: "18K Gold Plated" },
  { id: "silver", label: "Silver Tone" },
];

const PRICE_OPTIONS = [
  { id: "under-50", label: "Under $50", test: (p) => p.price < 50 },
  { id: "50-75", label: "$50 – $75", test: (p) => p.price >= 50 && p.price <= 75 },
  { id: "over-75", label: "Over $75", test: (p) => p.price > 75 },
];

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

function FilterGroup({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-line py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between"
        aria-expanded={open}
      >
        <span className="text-[11px] font-semibold uppercase tracking-widest2 text-ink">
          {title}
        </span>
        <ChevronDown
          size={15}
          strokeWidth={1.5}
          className={cn("text-espresso transition-transform duration-300", open && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] pt-4 opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="space-y-2.5 overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

function CheckOption({ label, checked, onChange }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onChange}
      className="group flex w-full cursor-pointer items-center gap-3 text-left"
    >
      <span
        className={cn(
          "flex h-4 w-4 items-center justify-center border transition-all duration-200",
          checked ? "border-gold bg-gold" : "border-espresso/40 bg-transparent group-hover:border-gold"
        )}
      >
        {checked && <Check size={11} strokeWidth={2.5} className="text-cream" />}
      </span>
      <span className="text-sm text-espresso transition-colors group-hover:text-ink">{label}</span>
    </button>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [sort, setSort] = useState("featured");
  const [categories, setCategories] = useState(() => {
    const c = searchParams.get("category");
    return c ? [c] : [];
  });
  const [materials, setMaterials] = useState([]);
  const [prices, setPrices] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const c = searchParams.get("category");
    setCategories(c ? [c] : []);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() =>
      ImageHelper.loadImages(strkImgConfig, containerRef.current),
    );
    return () => window.cancelAnimationFrame(frameId);
  }, [searchParams, categories, materials, prices, sort]);

  const toggle = (list, setList, id) => {
    setList(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);
  };

  const filtered = useMemo(() => {
    let out = SHOP_PRODUCTS.filter((p) => {
      if (categories.length && !categories.includes(p.category)) return false;
      if (materials.length && !materials.includes(p.material)) return false;
      if (prices.length && !prices.some((pid) => PRICE_OPTIONS.find((o) => o.id === pid)?.test(p)))
        return false;
      return true;
    });
    switch (sort) {
      case "price-asc":
        out = [...out].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        out = [...out].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        out = [...out].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return out;
  }, [categories, materials, prices, sort]);

  const activeCount = categories.length + materials.length + prices.length;

  const clearAll = () => {
    setCategories([]);
    setMaterials([]);
    setPrices([]);
    setSearchParams({});
  };

  const visibleIds = useMemo(() => new Set(filtered.map((p) => p.id)), [filtered]);
  const displayProducts = useMemo(() => {
    const order = new Map(filtered.map((p, i) => [p.id, i]));
    return SHOP_PRODUCTS.filter((p) => visibleIds.has(p.id)).sort(
      (a, b) => (order.get(a.id) ?? 0) - (order.get(b.id) ?? 0)
    );
  }, [filtered, visibleIds]);

  const filterPanel = (
    <div>
      <FilterGroup title="Category">
        {CATEGORY_OPTIONS.map((o) => (
          <CheckOption
            key={o.id}
            label={o.label}
            checked={categories.includes(o.id)}
            onChange={() => toggle(categories, setCategories, o.id)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Price">
        {PRICE_OPTIONS.map((o) => (
          <CheckOption
            key={o.id}
            label={o.label}
            checked={prices.includes(o.id)}
            onChange={() => toggle(prices, setPrices, o.id)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Material">
        {MATERIAL_OPTIONS.map((o) => (
          <CheckOption
            key={o.id}
            label={o.label}
            checked={materials.includes(o.id)}
            onChange={() => toggle(materials, setMaterials, o.id)}
          />
        ))}
      </FilterGroup>
      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="mt-5 text-[11px] uppercase tracking-widest2 text-taupe underline-offset-4 transition-colors hover:text-gold-deep hover:underline"
        >
          Clear all ({activeCount})
        </button>
      )}
    </div>
  );

  return (
    <main ref={containerRef} className="bg-cream pt-20 md:pt-28">
      <header className="border-b border-line bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">
              The Collection
            </p>
            <h1 id="shop-title" className="mt-3 font-serif text-4xl font-light text-ink md:text-6xl">
              Shop All Jewelry
            </h1>
            <p id="shop-sub" className="mt-4 max-w-xl text-sm leading-relaxed text-espresso">
              Demi-fine 18K gold plated earrings, necklaces and huggies — everyday
              heirlooms photographed on soft neutral backgrounds, priced between
              $30 and $120.
            </p>
          </Reveal>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <div className="mb-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 border border-line px-4 py-2.5 text-[11px] font-medium uppercase tracking-widest2 text-ink transition-colors hover:border-gold hover:text-gold-deep lg:hidden"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters
            {activeCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-cream">
                {activeCount}
              </span>
            )}
          </button>

          <p className="text-xs text-taupe">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>

          <label className="flex items-center gap-2.5">
            <span className="hidden text-[11px] uppercase tracking-widest2 text-taupe sm:inline">
              Sort
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="cursor-pointer border border-line bg-cream px-3.5 py-2.5 text-xs text-ink transition-colors focus:border-gold focus:outline-none"
              aria-label="Sort products"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid gap-10 lg:grid-cols-[220px_1fr] xl:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28">{filterPanel}</div>
          </aside>

          <div>
            {displayProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center border border-line bg-sand/50 px-6 py-24 text-center">
                <p className="font-serif text-2xl italic text-espresso">
                  Nothing matches those filters
                </p>
                <p className="mt-2 max-w-xs text-sm text-taupe">
                  Try removing a filter or two — beautiful things await.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 border border-ink px-8 py-3 text-[11px] font-medium uppercase tracking-widest2 text-ink transition-all hover:border-gold hover:text-gold-deep"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8">
                {displayProducts.map((p, i) => (
                  <Reveal key={p.id} delay={i * 60}>
                    <ProductCard product={p} eager={i < 3} />
                  </Reveal>
                ))}
              </div>
            )}

            {filtered.length > 0 && (
              <p className="mt-12 border-t border-line pt-6 text-center text-xs text-taupe">
                Showing all {filtered.length} pieces · Prices from {formatPrice(30)} to{" "}
                {formatPrice(120)}
              </p>
            )}
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 transition-[visibility] duration-300 lg:hidden",
          mobileFiltersOpen ? "visible" : "invisible"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink/50 backdrop-blur-[2px] transition-opacity duration-300",
            mobileFiltersOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <aside
          className={cn(
            "absolute left-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-cream px-6 pb-6 pt-5 shadow-2xl transition-transform duration-300",
            mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          )}
          role="dialog"
          aria-label="Product filters"
        >
          <div className="mb-2 flex items-center justify-between border-b border-line pb-4">
            <h2 className="font-serif text-lg font-medium uppercase tracking-widest2 text-ink">
              Filters
            </h2>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
              className="p-1.5 text-espresso transition-colors hover:text-gold-deep"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">{filterPanel}</div>
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            className="mt-4 w-full rounded-sm border border-ink bg-ink py-4 text-xs font-medium uppercase tracking-widest2 text-cream transition-colors hover:border-gold-deep hover:bg-gold-deep"
          >
            View {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
          </button>
        </aside>
      </div>
    </main>
  );
}
