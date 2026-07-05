import { categories, products } from "@/data/products";
import { cn } from "@/lib/utils";

const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $80", min: 50, max: 80 },
  { label: "$80+", min: 80, max: Infinity },
];

export default function FilterSidebar({
  selectedCategories,
  toggleCategory,
  selectedPrices,
  togglePrice,
  clearFilters,
  isMobileOpen,
  onClose,
}) {
  void products;

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-espresso/30 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={cn(
          "fixed md:static top-0 left-0 z-50 h-full md:h-auto w-[280px] md:w-full bg-cream md:bg-transparent p-6 md:p-0 border-r md:border-r-0 border-stonehair transition-transform duration-300",
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between md:hidden mb-8">
          <h3 className="font-serif text-xl">Filters</h3>
          <button
            type="button"
            onClick={onClose}
            className="text-sm uppercase tracking-widest"
          >
            Close
          </button>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-taupe mb-4">
              Category
            </h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category}>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div
                      className={cn(
                        "w-4 h-4 border flex items-center justify-center transition-colors",
                        selectedCategories.includes(category)
                          ? "bg-espresso border-espresso"
                          : "border-stonehair group-hover:border-espresso"
                      )}
                    >
                      {selectedCategories.includes(category) && (
                        <span className="text-cream text-xs">✓</span>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                    />
                    <span className="text-sm">{category}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="hairline" />

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-taupe mb-4">
              Price
            </h4>
            <ul className="space-y-3">
              {priceRanges.map((range) => (
                <li key={range.label}>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div
                      className={cn(
                        "w-4 h-4 border flex items-center justify-center transition-colors",
                        selectedPrices.includes(range.label)
                          ? "bg-espresso border-espresso"
                          : "border-stonehair group-hover:border-espresso"
                      )}
                    >
                      {selectedPrices.includes(range.label) && (
                        <span className="text-cream text-xs">✓</span>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={selectedPrices.includes(range.label)}
                      onChange={() => togglePrice(range.label)}
                    />
                    <span className="text-sm">{range.label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="hairline" />

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-taupe mb-4">
              Material
            </h4>
            <ul className="space-y-3">
              {["18K Gold Plated", "Hypoallergenic"].map((material) => (
                <li key={material}>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-stonehair group-hover:border-espresso transition-colors" />
                    <span className="text-sm">{material}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {(selectedCategories.length > 0 || selectedPrices.length > 0) && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs uppercase tracking-[0.2em] border-b border-espresso pb-0.5 hover:text-accent hover:border-accent transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
