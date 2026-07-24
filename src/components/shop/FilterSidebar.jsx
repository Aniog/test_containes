import { SlidersHorizontal, X } from "lucide-react";

const categoryOptions = [
  { value: "earrings", label: "Earrings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "huggies", label: "Huggies" },
  { value: "sets", label: "Gift Sets" },
];

const priceOptions = [
  { value: "under50", label: "Under $50" },
  { value: "50to80", label: "$50 – $80" },
  { value: "over80", label: "$80+" },
];

const materialOptions = [
  { value: "gold", label: "Gold" },
  { value: "silver", label: "Silver" },
];

export default function FilterSidebar({ filters, setFilters, isOpen, onClose }) {
  const toggleFilter = (key, value) => {
    setFilters((prev) => {
      const current = prev[key];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [key]: updated };
    });
  };

  const clearFilters = () => {
    setFilters({ category: [], price: [], material: [] });
  };

  const FilterGroup = ({ title, options, filterKey }) => (
    <div className="mb-8">
      <h4 className="text-xs tracking-widest uppercase font-medium text-muted mb-4">
        {title}
      </h4>
      <div className="space-y-3">
        {options.map((option) => {
          const checked = filters[filterKey].includes(option.value);
          return (
            <label
              key={option.value}
              className="flex items-center gap-3 text-sm text-foreground cursor-pointer group"
            >
              <span
                className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                  checked ? "bg-foreground border-foreground" : "border-border group-hover:border-foreground"
                }`}
              >
                {checked && <span className="w-2 h-2 bg-background" />}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={checked}
                onChange={() => toggleFilter(filterKey, option.value)}
              />
              {option.label}
            </label>
          );
        })}
      </div>
    </div>
  );

  const activeCount =
    filters.category.length + filters.price.length + filters.material.length;

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-40 md:hidden transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed md:sticky top-0 md:top-28 left-0 h-full md:h-fit w-4/5 max-w-sm md:w-full md:max-w-none bg-background md:bg-transparent z-50 md:z-auto transform transition-transform duration-300 ease-out overflow-y-auto md:overflow-visible ${
          isOpen
            ? "translate-x-0 pointer-events-auto"
            : "-translate-x-full md:translate-x-0 pointer-events-none md:pointer-events-auto"
        }`}
        role={isOpen ? "dialog" : undefined}
        aria-modal={isOpen ? "true" : undefined}
        aria-label={isOpen ? "Filters" : undefined}
      >
        <div className="p-6 md:p-0 md:pr-8">
          <div className="flex items-center justify-between md:hidden mb-8">
            <h2 className="font-serif text-2xl tracking-widest uppercase">Filters</h2>
            <button onClick={onClose} aria-label="Close filters" className="p-2">
              <X size={20} />
            </button>
          </div>

          <div className="hidden md:flex items-center justify-between mb-8">
            <h3 className="text-xs tracking-widest uppercase font-medium text-muted flex items-center gap-2">
              <SlidersHorizontal size={14} /> Filter By
            </h3>
            {activeCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-xs text-muted hover:text-foreground underline"
              >
                Clear ({activeCount})
              </button>
            )}
          </div>

          <FilterGroup title="Category" options={categoryOptions} filterKey="category" />
          <FilterGroup title="Price" options={priceOptions} filterKey="price" />
          <FilterGroup title="Material" options={materialOptions} filterKey="material" />

          {activeCount > 0 && (
            <button
              onClick={clearFilters}
              className="md:hidden w-full border border-foreground text-foreground py-3 text-xs tracking-widest uppercase font-medium mt-4"
            >
              Clear Filters
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
