import React from "react";
import { RotateCcw } from "lucide-react";

const priceRanges = [
  { id: "under-50", label: "Under $50", test: (p) => p.price < 50 },
  { id: "50-75", label: "$50 – $75", test: (p) => p.price >= 50 && p.price <= 75 },
  { id: "over-75", label: "Over $75", test: (p) => p.price > 75 },
];

export const priceRangeMap = Object.fromEntries(
  priceRanges.map((r) => [r.id, r])
);

function FilterGroup({ title, children }) {
  return (
    <fieldset className="border-b border-line pb-7">
      <legend className="sr-only">{title}</legend>
      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-espresso">
        {title}
      </p>
      <div className="mt-4 space-y-3">{children}</div>
    </fieldset>
  );
}

function CheckRow({ id, label, count, checked, onChange }) {
  return (
    <label
      htmlFor={id}
      className="group flex cursor-pointer items-center gap-3"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 appearance-none border border-espresso/40 bg-ivory transition-all duration-200 checked:border-bronze checked:bg-bronze focus:outline-none focus:ring-1 focus:ring-bronze"
      />
      <span className="flex-1 text-sm text-cocoa transition-colors group-hover:text-espresso">
        {label}
      </span>
      {typeof count === "number" && (
        <span className="text-xs text-cocoa/60">({count})</span>
      )}
    </label>
  );
}

export default function FilterSidebar({
  products,
  selectedCategories,
  toggleCategory,
  selectedPrices,
  togglePrice,
  selectedMaterials,
  toggleMaterial,
  resetFilters,
  activeCount,
}) {
  const categories = [...new Set(products.map((p) => p.category))];
  const materials = [...new Set(products.map((p) => p.material))];

  const countFor = (fn) => products.filter(fn).length;

  return (
    <div className="space-y-7">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-xl font-medium text-espresso">
          Filters
        </h2>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={resetFilters}
            className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-bronze transition-colors hover:text-bronze-dark"
          >
            <RotateCcw className="h-3 w-3" strokeWidth={1.5} />
            Clear ({activeCount})
          </button>
        )}
      </div>

      <FilterGroup title="Category">
        {categories.map((cat) => (
          <CheckRow
            key={cat}
            id={`cat-${cat}`}
            label={cat === "sets" ? "Gift Sets" : cat[0].toUpperCase() + cat.slice(1)}
            count={countFor((p) => p.category === cat)}
            checked={selectedCategories.includes(cat)}
            onChange={() => toggleCategory(cat)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {priceRanges.map((range) => (
          <CheckRow
            key={range.id}
            id={`price-${range.id}`}
            label={range.label}
            count={countFor(range.test)}
            checked={selectedPrices.includes(range.id)}
            onChange={() => togglePrice(range.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {materials.map((mat) => (
          <CheckRow
            key={mat}
            id={`mat-${mat}`}
            label={mat === "gold" ? "18K Gold Plated" : "Sterling Silver"}
            count={countFor((p) => p.material === mat)}
            checked={selectedMaterials.includes(mat)}
            onChange={() => toggleMaterial(mat)}
          />
        ))}
      </FilterGroup>
    </div>
  );
}
