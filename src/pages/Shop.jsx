import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "name", label: "Name" },
];

const PRICE_BANDS = [
  { id: "all", label: "All", min: 0, max: Infinity },
  { id: "u50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "80p", label: "$80 & up", min: 80, max: Infinity },
];

const MATERIALS_LIST = ["18K Gold Plated", "Sterling Silver"];

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const [sort, setSort] = useState("featured");
  const [priceBand, setPriceBand] = useState("all");
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedCats, setSelectedCats] = useState(() => {
    const cat = params.get("cat");
    return cat ? [cat] : [];
  });
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const cat = params.get("cat");
    if (cat && !selectedCats.includes(cat)) setSelectedCats([cat]);
  }, [params]);

  const toggle = (list, setList) => (val) => {
    setList(list.includes(val) ? list.filter((x) => x !== val) : [...list, val]);
  };

  const filtered = useMemo(() => {
    const band = PRICE_BANDS.find((b) => b.id === priceBand);
    let list = PRODUCTS.filter((p) => {
      if (selectedCats.length > 0 && !selectedCats.includes(p.category)) return false;
      if (band && (p.price < band.min || p.price > band.max)) return false;
      if (selectedMaterials.length > 0) {
        const tags = p.variants.map((v) => v.label);
        if (!selectedMaterials.some((m) => tags.some((t) => t.includes(m)))) return false;
      }
      return true;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [selectedCats, priceBand, selectedMaterials, sort]);

  const clearAll = () => {
    setSelectedCats([]);
    setSelectedMaterials([]);
    setPriceBand("all");
    setSort("featured");
    setParams({});
  };

  return (
    <main className="page-fade pt-24 md:pt-32 pb-24 bg-cream min-h-screen">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        {/* Page header */}
        <div className="flex flex-col gap-3 mb-10">
          <span className="eyebrow text-taupe">The Edit</span>
          <h1 className="font-display text-5xl md:text-6xl text-ink leading-[1.02]">
            Shop All
          </h1>
          <p className="text-muted text-sm md:text-base max-w-md">
            Every Velmora piece, in one place — from everyday huggies to the gifts they remember.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between border-t border-b border-hairline py-4 mb-8">
          <button
            type="button"
            onClick={() => setFilterOpen(true)}
            className="inline-flex items-center gap-2 eyebrow text-[0.7rem] text-ink md:hidden"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} /> Filter
          </button>

          <p className="hidden md:block text-xs text-muted">
            Showing <span className="text-ink">{filtered.length}</span> of {PRODUCTS.length} pieces
          </p>
          <div className="ml-auto flex items-center gap-3">
            <span className="hidden md:inline eyebrow text-[0.6rem] text-muted">Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent text-sm text-ink border-b border-hairline focus:border-ink outline-none py-1 pr-2 cursor-pointer"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8">
          {/* Sidebar */}
          <aside className="hidden md:block md:col-span-3">
            <FilterPanel
              selectedCats={selectedCats}
              setSelectedCats={setSelectedCats}
              priceBand={priceBand}
              setPriceBand={setPriceBand}
              selectedMaterials={selectedMaterials}
              setSelectedMaterials={setSelectedMaterials}
              clearAll={clearAll}
              toggle={toggle}
            />
          </aside>

          {/* Grid */}
          <div className="md:col-span-9">
            {filtered.length === 0 ? (
              <div className="py-20 text-center text-muted">No pieces match these filters yet.</div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <div className="fixed inset-0 z-[65] md:hidden">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setFilterOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-cream rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto animate-fade-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="eyebrow text-ink">Filter</h3>
              <button onClick={() => setFilterOpen(false)} aria-label="Close filters" className="text-ink p-1">
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <FilterPanel
              selectedCats={selectedCats}
              setSelectedCats={setSelectedCats}
              priceBand={priceBand}
              setPriceBand={setPriceBand}
              selectedMaterials={selectedMaterials}
              setSelectedMaterials={setSelectedMaterials}
              clearAll={clearAll}
              toggle={toggle}
            />
            <button
              onClick={() => setFilterOpen(false)}
              className="btn-base btn-primary w-full mt-6"
            >
              Show {filtered.length} Pieces
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

function FilterPanel({
  selectedCats, setSelectedCats,
  priceBand, setPriceBand,
  selectedMaterials, setSelectedMaterials,
  clearAll, toggle,
}) {
  return (
    <div className="flex flex-col gap-8">
      <FilterGroup title="Category">
        {CATEGORIES.map((c) => (
          <Checkbox
            key={c.slug}
            label={c.label}
            checked={selectedCats.includes(c.slug)}
            onChange={() => toggle(selectedCats, setSelectedCats)(c.slug)}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Price">
        {PRICE_BANDS.map((b) => (
          <label key={b.id} className="flex items-center gap-2.5 cursor-pointer py-1 text-sm text-ink">
            <input
              type="radio"
              name="price"
              checked={priceBand === b.id}
              onChange={() => setPriceBand(b.id)}
              className="accent-champagne"
            />
            <span>{b.label}</span>
          </label>
        ))}
      </FilterGroup>
      <FilterGroup title="Material">
        {MATERIALS_LIST.map((m) => (
          <Checkbox
            key={m}
            label={m}
            checked={selectedMaterials.includes(m)}
            onChange={() => toggle(selectedMaterials, setSelectedMaterials)(m)}
          />
        ))}
      </FilterGroup>
      <button
        type="button"
        onClick={clearAll}
        className="self-start eyebrow text-[0.7rem] text-muted hover:text-ink link-underline"
      >
        Clear all
      </button>
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h4 className="eyebrow text-[0.65rem] text-ink mb-3">{title}</h4>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

function Checkbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer py-1 text-sm text-ink hover:text-champagne-dark transition-colors">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-3.5 h-3.5 accent-champagne"
      />
      <span>{label}</span>
    </label>
  );
}
