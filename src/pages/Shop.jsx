import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/ui/StarRating";

const categories = [
  { label: "All", value: "all" },
  { label: "Earrings", value: "earrings" },
  { label: "Necklaces", value: "necklaces" },
  { label: "Huggies", value: "huggies" },
  { label: "Sets", value: "sets" },
];

const materials = [
  { label: "Gold", value: "gold" },
  { label: "Silver", value: "silver" },
];

const priceRanges = [
  { label: "Under $50", value: "0-50" },
  { label: "$50 – $80", value: "50-80" },
  { label: "$80+", value: "80-999" },
];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
];

export default function Shop() {
  const { addToCart } = useCart();
  const [selectedCats, setSelectedCats] = useState(["all"]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [sort, setSort] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggle = (arr, setArr, val) => {
    if (arr.includes(val)) setArr(arr.filter((v) => v !== val));
    else setArr([...arr, val]);
  };

  const filtered = useMemo(() => {
    let list = [...products];

    if (!selectedCats.includes("all")) {
      list = list.filter((p) => selectedCats.includes(p.category));
    }

    if (selectedMaterials.length) {
      list = list.filter((p) => selectedMaterials.includes(p.material));
    }

    if (selectedPrices.length) {
      list = list.filter((p) =>
        selectedPrices.some((r) => {
          const [min, max] = r.split("-").map(Number);
          return p.price >= min && p.price < max;
        })
      );
    }

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return list;
  }, [selectedCats, selectedMaterials, selectedPrices, sort]);

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h4 className="text-[11px] tracking-[0.14em] uppercase font-medium mb-3">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((c) => (
            <label key={c.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCats.includes(c.value)}
                onChange={() => {
                  if (c.value === "all") {
                    setSelectedCats(["all"]);
                  } else {
                    const next = selectedCats.filter((v) => v !== "all");
                    const has = next.includes(c.value);
                    const updated = has ? next.filter((v) => v !== c.value) : [...next, c.value];
                    setSelectedCats(updated.length ? updated : ["all"]);
                  }
                }}
                className="accent-[#B8966A]"
              />
              <span className="text-xs text-[#6E6862]">{c.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-[11px] tracking-[0.14em] uppercase font-medium mb-3">
          Material
        </h4>
        <div className="space-y-2">
          {materials.map((m) => (
            <label key={m.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(m.value)}
                onChange={() => toggle(selectedMaterials, setSelectedMaterials, m.value)}
                className="accent-[#B8966A]"
              />
              <span className="text-xs text-[#6E6862]">{m.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-[11px] tracking-[0.14em] uppercase font-medium mb-3">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((p) => (
            <label key={p.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedPrices.includes(p.value)}
                onChange={() => toggle(selectedPrices, setSelectedPrices, p.value)}
                className="accent-[#B8966A]"
              />
              <span className="text-xs text-[#6E6862]">{p.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 md:pt-24 pb-16 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-light tracking-wide">
              Shop All
            </h1>
            <p className="text-xs text-[#6E6862] mt-2">
              {filtered.length} piece{filtered.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 text-xs tracking-[0.1em] uppercase font-medium border border-[#1A1816]/20 rounded px-3 py-2"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} />
              Filter
            </button>

            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent border border-[#1A1816]/20 rounded pl-3 pr-8 py-2 text-xs tracking-[0.1em] font-medium focus:outline-none focus:border-[#B8966A]"
              >
                {sortOptions.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterContent />
          </aside>

          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-sm text-[#6E6862]">No products match your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCats(["all"]);
                    setSelectedMaterials([]);
                    setSelectedPrices([]);
                  }}
                  className="mt-4 text-xs tracking-[0.12em] uppercase text-[#B8966A] hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((p) => (
                  <div key={p.id} className="group">
                    <Link to={`/product/${p.id}`} className="block">
                      <div className="relative aspect-[3/4] bg-[#EAE5E0] rounded overflow-hidden mb-3">
                        {p.badge && (
                          <span className="absolute top-2 left-2 z-10 bg-[#1A1816] text-white text-[10px] tracking-[0.12em] uppercase px-2 py-1 rounded">
                            {p.badge}
                          </span>
                        )}
                        <img
                          src={`https://images.unsplash.com/photo-${
                            p.id === 1
                              ? "1535632066927-ab7c9ab60908"
                              : p.id === 2
                              ? "1599643478518-17477f983af0"
                              : p.id === 3
                              ? "1635767798638-3e2523c0188b"
                              : p.id === 4
                              ? "1611591437281-46057d3fe0e9"
                              : "1602173574767-37ac01994b2a"
                          }?w=600&q=80`}
                          alt={p.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <StarRating rating={p.rating} size={12} />
                          <span className="text-[10px] text-[#6E6862]">
                            ({p.reviews})
                          </span>
                        </div>
                        <h3 className="font-serif text-sm md:text-[15px] tracking-[0.06em] uppercase leading-tight">
                          {p.name}
                        </h3>
                        <p className="text-xs text-[#6E6862] truncate">{p.subtitle}</p>
                        <p className="text-sm font-medium">${p.price}</p>
                      </div>
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(p, "gold", 1);
                      }}
                      className="mt-2 w-full border border-[#1A1816]/20 text-[#1A1816] text-[11px] tracking-[0.12em] uppercase font-medium py-2 rounded hover:bg-[#1A1816] hover:text-white transition-colors"
                    >
                      Quick Add
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="relative w-80 max-w-[85vw] bg-[#F5F0EB] h-full overflow-y-auto p-6 animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl tracking-wide">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <FilterContent />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full bg-[#1A1816] text-white text-xs tracking-[0.14em] uppercase font-medium py-3 rounded"
            >
              Show Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
