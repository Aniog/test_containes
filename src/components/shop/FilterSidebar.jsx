import { useId } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { CATEGORIES, MATERIALS } from "@/data/products";
import { cn } from "@/lib/cn";

const PRICE_BUCKETS = [
  { id: "0-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-100", label: "$50 – $100", min: 50, max: 100 },
  { id: "100-200", label: "$100+", min: 100, max: 1000 },
];

export default function FilterSidebar({
  category,
  material,
  priceBucket,
  onCategory,
  onMaterial,
  onPriceBucket,
  onClear,
  total,
  resultCount,
  open,
  onClose,
}) {
  const categoryId = useId();
  const materialId = useId();
  const priceId = useId();

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink/40 transition-opacity lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden={!open}
      />

      <aside
        className={cn(
          "bg-ivory lg:bg-transparent",
          "lg:sticky lg:top-24 lg:self-start",
          "fixed inset-y-0 left-0 z-50 w-[88%] max-w-sm overflow-y-auto",
          "transition-transform duration-300 ease-drawer lg:translate-x-0 lg:w-full lg:max-w-none lg:static lg:inset-auto",
          open ? "translate-x-0" : "-translate-x-full"
        )}
        aria-label="Filter products"
      >
        <div className="px-6 py-6 lg:py-0 lg:px-0">
          <div className="flex items-center justify-between mb-8 lg:mb-10">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={14} strokeWidth={1.4} className="text-ink" />
              <h2 className="eyebrow text-ink">Filter</h2>
              <span className="text-[11px] text-mauve price">
                {resultCount}/{total}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClear}
                className="text-[11px] uppercase tracking-eyebrow text-mauve hover:text-ink transition-colors"
              >
                Clear all
              </button>
              <button
                type="button"
                aria-label="Close filters"
                onClick={onClose}
                className="lg:hidden p-1 text-ink"
              >
                <X size={18} strokeWidth={1.4} />
              </button>
            </div>
          </div>

          <FilterGroup label="Category" id={categoryId}>
            <ul className="space-y-3">
              <li>
                <FilterRow
                  label="All"
                  active={!category}
                  onClick={() => onCategory(null)}
                />
              </li>
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <FilterRow
                    label={c.label}
                    active={category === c.slug}
                    onClick={() =>
                      onCategory(category === c.slug ? null : c.slug)
                    }
                  />
                </li>
              ))}
            </ul>
          </FilterGroup>

          <FilterGroup label="Price" id={priceId}>
            <ul className="space-y-3">
              <li>
                <FilterRow
                  label="All prices"
                  active={!priceBucket}
                  onClick={() => onPriceBucket(null)}
                />
              </li>
              {PRICE_BUCKETS.map((b) => (
                <li key={b.id}>
                  <FilterRow
                    label={b.label}
                    active={priceBucket === b.id}
                    onClick={() =>
                      onPriceBucket(priceBucket === b.id ? null : b.id)
                    }
                  />
                </li>
              ))}
            </ul>
          </FilterGroup>

          <FilterGroup label="Material" id={materialId}>
            <ul className="space-y-3">
              <li>
                <FilterRow
                  label="All"
                  active={!material}
                  onClick={() => onMaterial(null)}
                />
              </li>
              {MATERIALS.map((m) => (
                <li key={m.slug}>
                  <FilterRow
                    label={m.label}
                    active={material === m.slug}
                    onClick={() =>
                      onMaterial(material === m.slug ? null : m.slug)
                    }
                  />
                </li>
              ))}
            </ul>
          </FilterGroup>
        </div>
      </aside>
    </>
  );
}

function FilterGroup({ label, id, children }) {
  return (
    <section className="mb-8" aria-labelledby={id}>
      <h3
        id={id}
        className="eyebrow text-mauve mb-4 pb-3 border-b border-tan/50"
      >
        {label}
      </h3>
      {children}
    </section>
  );
}

function FilterRow({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full flex items-center justify-between text-left",
        "text-sm transition-colors duration-200",
        active ? "text-ink font-medium" : "text-mauve hover:text-ink"
      )}
      aria-pressed={active}
    >
      <span>{label}</span>
      <span
        className={cn(
          "w-3.5 h-3.5 border transition-all duration-200",
          active ? "border-gold bg-gold" : "border-tan bg-transparent"
        )}
        aria-hidden="true"
      />
    </button>
  );
}
