import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const SORTS = [
  { value: "featured",   label: "Featured" },
  { value: "price-asc",  label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating",     label: "Top rated" },
  { value: "newest",     label: "Newest" },
];

export default function ShopToolbar({
  total,
  sort,
  onSort,
  filters,
  resultCount,
  onOpenMobileFilters,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-6 border-b border-taupe-light">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobileFilters}
          className="lg:hidden btn btn-ghost h-10"
        >
          <SlidersHorizontal size={14} strokeWidth={1.5} />
          Filter
        </button>
        <p className="text-[11px] uppercase tracking-widest2 text-espresso/60">
          Showing <span className="text-espresso">{resultCount}</span> of {total} pieces
        </p>
      </div>

      <div className="flex items-center gap-3 self-start sm:self-auto">
        {/* Sort dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={open}
            className="btn btn-ghost h-10"
          >
            Sort: <span className="text-espresso">{SORTS.find((s) => s.value === sort)?.label}</span>
            <ChevronDown
              size={14}
              strokeWidth={1.5}
              className={cn("transition-transform", open && "rotate-180")}
            />
          </button>
          {open && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} aria-hidden />
              <ul
                role="listbox"
                className="absolute right-0 top-full mt-2 z-20 w-56 bg-bone-50 border border-taupe-light shadow-card py-1"
              >
                {SORTS.map((s) => (
                  <li key={s.value}>
                    <button
                      type="button"
                      onClick={() => { onSort(s.value); setOpen(false); }}
                      className={cn(
                        "block w-full text-left px-4 py-2.5 text-sm transition-colors",
                        sort === s.value
                          ? "text-espresso bg-bone-100"
                          : "text-espresso/70 hover:bg-bone-100",
                      )}
                    >
                      {s.label}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export { SORTS };
