import { categories, tones } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { X } from "lucide-react";

const PRICE_BUCKETS = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "u50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "80p", label: "$80 & above", min: 80, max: Infinity },
];

export default function FilterSidebar({
  filters,
  onChange,
  onReset,
  resultCount,
}) {
  const update = (key, value) => onChange({ ...filters, [key]: value });

  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-2xl">Filter</h3>
        <button
          type="button"
          onClick={onReset}
          className="text-[0.65rem] uppercase tracking-[0.22em] text-espresso/60 hover:text-espresso transition-colors flex items-center gap-1.5"
        >
          <X className="w-3 h-3" strokeWidth={1.4} />
          Reset
        </button>
      </div>

      <div className="space-y-9">
        <FilterGroup title="Category">
          <ul className="space-y-2.5">
            <li>
              <RadioRow
                label="All"
                active={filters.category === "all"}
                onClick={() => update("category", "all")}
              />
            </li>
            {categories.map((c) => (
              <li key={c.id}>
                <RadioRow
                  label={c.label}
                  active={filters.category === c.id}
                  onClick={() => update("category", c.id)}
                />
              </li>
            ))}
          </ul>
        </FilterGroup>

        <FilterGroup title="Price">
          <ul className="space-y-2.5">
            {PRICE_BUCKETS.map((b) => (
              <li key={b.id}>
                <RadioRow
                  label={b.label}
                  active={filters.price === b.id}
                  onClick={() => update("price", b.id)}
                />
              </li>
            ))}
          </ul>
        </FilterGroup>

        <FilterGroup title="Material">
          <ul className="space-y-2.5">
            <li>
              <RadioRow
                label="All"
                active={filters.material === "all"}
                onClick={() => update("material", "all")}
              />
            </li>
            {tones.map((t) => (
              <li key={t.id}>
                <RadioRow
                  label={t.label}
                  active={filters.material === t.id}
                  onClick={() => update("material", t.id)}
                />
              </li>
            ))}
            <li>
              <RadioRow
                label="Sterling Silver"
                active={filters.material === "silver-925"}
                onClick={() => update("material", "silver-925")}
              />
            </li>
          </ul>
        </FilterGroup>
      </div>

      <p className="mt-10 text-xs text-espresso/55">
        {resultCount} {resultCount === 1 ? "piece" : "pieces"}
      </p>
    </aside>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h4 className="text-[0.7rem] uppercase tracking-[0.22em] text-espresso/70 mb-4">
        {title}
      </h4>
      {children}
    </div>
  );
}

function RadioRow({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 text-sm transition-colors ${
        active ? "text-espresso" : "text-espresso/65 hover:text-espresso"
      }`}
    >
      <span
        className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
          active ? "border-espresso" : "border-espresso/30"
        }`}
      >
        {active && <span className="w-1.5 h-1.5 rounded-full bg-espresso" />}
      </span>
      {label}
    </button>
  );
}
