import { cn } from "@/lib/utils";

const categoryOptions = [
  { value: "all", label: "All Pieces" },
  { value: "earrings", label: "Earrings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "huggies", label: "Huggies" },
  { value: "sets", label: "Gift Sets" },
];

const priceOptions = [
  { value: "all", label: "All Prices" },
  { value: "0-50", label: "Under $50", min: 0, max: 50 },
  { value: "50-100", label: "$50 — $100", min: 50, max: 100 },
  { value: "100-9999", label: "$100+", min: 100, max: 9999 },
];

const materialOptions = [
  { value: "all", label: "All Materials" },
  { value: "18k-gold", label: "18K Gold Plated" },
  { value: "sterling-silver", label: "Sterling Silver" },
  { value: "crystal", label: "Hand-Set Crystals" },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export const sortValueMap = sortOptions.reduce((acc, o) => {
  acc[o.value] = o.label;
  return acc;
}, {});

export const defaultFilters = {
  category: "all",
  price: "all",
  material: "all",
  sort: "featured",
};

function Group({ title, children }) {
  return (
    <fieldset className="border-t border-hairline py-5 first:border-t-0 first:pt-0">
      <legend className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ink">
        {title}
      </legend>
      <div className="flex flex-col gap-1.5">{children}</div>
    </fieldset>
  );
}

function Radio({ name, value, label, selected, onChange }) {
  return (
    <label
      className={cn(
        "group flex cursor-pointer items-center gap-3 py-1.5 text-sm transition-colors",
        selected ? "text-ink" : "text-ink-soft hover:text-ink"
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={cn(
          "grid h-4 w-4 shrink-0 place-items-center rounded-full border transition-colors",
          selected ? "border-gold" : "border-hairline group-hover:border-ink-soft"
        )}
      >
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full transition-all duration-200",
            selected ? "scale-100 bg-gold" : "scale-0 bg-transparent"
          )}
        />
      </span>
      {label}
    </label>
  );
}

export function Filters({ filters, onChange, onReset, totalCount }) {
  const update = (key) => (value) => onChange({ ...filters, [key]: value });

  return (
    <aside
      aria-label="Product filters"
      className="lg:sticky lg:top-24 lg:self-start"
    >
      <div className="hidden lg:block">
        <p className="eyebrow">Refine</p>
        <p className="mt-1 font-serif text-2xl text-ink">Filters</p>
        <p className="mt-1 text-xs text-ink-soft">
          {totalCount} piece{totalCount === 1 ? "" : "s"}
        </p>

        <div className="mt-6">
          <Group title="Category">
            {categoryOptions.map((o) => (
              <Radio
                key={o.value}
                name="category"
                value={o.value}
                label={o.label}
                selected={filters.category === o.value}
                onChange={update("category")}
              />
            ))}
          </Group>
          <Group title="Price">
            {priceOptions.map((o) => (
              <Radio
                key={o.value}
                name="price"
                value={o.value}
                label={o.label}
                selected={filters.price === o.value}
                onChange={update("price")}
              />
            ))}
          </Group>
          <Group title="Material">
            {materialOptions.map((o) => (
              <Radio
                key={o.value}
                name="material"
                value={o.value}
                label={o.label}
                selected={filters.material === o.value}
                onChange={update("material")}
              />
            ))}
          </Group>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="mt-5 text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft underline underline-offset-4 transition-colors hover:text-ink"
        >
          Reset filters
        </button>
      </div>

      {/* Mobile filter sheet trigger (visible only on mobile) */}
      <details className="lg:hidden">
        <summary className="flex cursor-pointer items-center justify-between border border-hairline bg-ivory px-5 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink">
          Filters & Sort
          <span className="text-ink-soft">{totalCount} pieces</span>
        </summary>
        <div className="mt-5 border border-hairline bg-ivory p-5">
          <Group title="Sort">
            {sortOptions.map((o) => (
              <Radio
                key={o.value}
                name="sort-mobile"
                value={o.value}
                label={o.label}
                selected={filters.sort === o.value}
                onChange={update("sort")}
              />
            ))}
          </Group>
          <Group title="Category">
            {categoryOptions.map((o) => (
              <Radio
                key={o.value}
                name="category-mobile"
                value={o.value}
                label={o.label}
                selected={filters.category === o.value}
                onChange={update("category")}
              />
            ))}
          </Group>
          <Group title="Price">
            {priceOptions.map((o) => (
              <Radio
                key={o.value}
                name="price-mobile"
                value={o.value}
                label={o.label}
                selected={filters.price === o.value}
                onChange={update("price")}
              />
            ))}
          </Group>
          <Group title="Material">
            {materialOptions.map((o) => (
              <Radio
                key={o.value}
                name="material-mobile"
                value={o.value}
                label={o.label}
                selected={filters.material === o.value}
                onChange={update("material")}
              />
            ))}
          </Group>
          <button
            type="button"
            onClick={onReset}
            className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft underline underline-offset-4 transition-colors hover:text-ink"
          >
            Reset filters
          </button>
        </div>
      </details>
    </aside>
  );
}

export { categoryOptions, priceOptions, materialOptions, sortOptions };
