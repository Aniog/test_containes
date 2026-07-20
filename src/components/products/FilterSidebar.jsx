import { SlidersHorizontal } from "lucide-react";

const priceOptions = [
  { label: "All Prices", value: "all" },
  { label: "Under $50", value: "under-50" },
  { label: "$50 to $80", value: "50-80" },
  { label: "$80 and above", value: "80-plus" },
];

const FilterSidebar = ({
  categories,
  materials,
  category,
  material,
  price,
  setCategory,
  setMaterial,
  setPrice,
  resultCount,
}) => (
  <aside className="rounded-[2rem] border border-stone-200 bg-stone-100 p-6 shadow-sm lg:sticky lg:top-28">
    <div className="flex items-center gap-3 border-b border-stone-200 pb-5">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-stone-50 text-stone-700">
        <SlidersHorizontal className="h-4 w-4" />
      </span>
      <div>
        <p className="eyebrow">Filters</p>
        <p className="text-sm text-stone-600">{resultCount} pieces available</p>
      </div>
    </div>

    <div className="space-y-8 pt-6 text-sm text-stone-700">
      <div className="space-y-3">
        <h3 className="font-semibold uppercase tracking-[0.2em] text-stone-500">
          Category
        </h3>
        <div className="flex flex-wrap gap-2 lg:flex-col">
          <button
            type="button"
            className={`rounded-full border px-4 py-2 text-left transition ${
              category === "All"
                ? "border-stone-950 bg-stone-950 text-stone-50"
                : "border-stone-300 bg-stone-50 hover:border-amber-600 hover:text-amber-700"
            }`}
            onClick={() => setCategory("All")}
          >
            All
          </button>
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={`rounded-full border px-4 py-2 text-left transition ${
                category === item
                  ? "border-stone-950 bg-stone-950 text-stone-50"
                  : "border-stone-300 bg-stone-50 hover:border-amber-600 hover:text-amber-700"
              }`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold uppercase tracking-[0.2em] text-stone-500">
          Price
        </h3>
        <div className="flex flex-wrap gap-2 lg:flex-col">
          {priceOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`rounded-full border px-4 py-2 text-left transition ${
                price === option.value
                  ? "border-stone-950 bg-stone-950 text-stone-50"
                  : "border-stone-300 bg-stone-50 hover:border-amber-600 hover:text-amber-700"
              }`}
              onClick={() => setPrice(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold uppercase tracking-[0.2em] text-stone-500">
          Material
        </h3>
        <div className="flex flex-wrap gap-2 lg:flex-col">
          <button
            type="button"
            className={`rounded-full border px-4 py-2 text-left transition ${
              material === "All"
                ? "border-stone-950 bg-stone-950 text-stone-50"
                : "border-stone-300 bg-stone-50 hover:border-amber-600 hover:text-amber-700"
            }`}
            onClick={() => setMaterial("All")}
          >
            All
          </button>
          {materials.map((item) => (
            <button
              key={item}
              type="button"
              className={`rounded-full border px-4 py-2 text-left transition ${
                material === item
                  ? "border-stone-950 bg-stone-950 text-stone-50"
                  : "border-stone-300 bg-stone-50 hover:border-amber-600 hover:text-amber-700"
              }`}
              onClick={() => setMaterial(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  </aside>
);

export default FilterSidebar;
