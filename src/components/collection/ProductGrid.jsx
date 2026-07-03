import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import ProductCard from "@/components/home/ProductCard"

export default function ProductGrid({ products, sort, onSortChange }) {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <p className="text-sm text-ink-muted">
          Showing <span className="text-ink-primary">{products.length}</span>{" "}
          {products.length === 1 ? "piece" : "pieces"}
        </p>
        <label className="relative inline-flex items-center gap-2">
          <span className="text-[11px] uppercase tracking-eyebrow text-ink-secondary">
            Sort
          </span>
          <span className="relative">
            <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
              className={cn(
                "appearance-none bg-transparent border-b border-line-strong",
                "pl-2 pr-7 py-1.5 text-sm text-ink-primary",
                "focus:outline-none focus:border-accent cursor-pointer",
              )}
            >
              <option value="featured" className="bg-base">Featured</option>
              <option value="price-asc" className="bg-base">Price: Low to High</option>
              <option value="price-desc" className="bg-base">Price: High to Low</option>
              <option value="rating" className="bg-base">Top Rated</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-ink-secondary"
              strokeWidth={1.5}
            />
          </span>
        </label>
      </div>

      {products.length === 0 ? (
        <div className="py-24 text-center">
          <p className="font-serif text-2xl text-ink-primary">Nothing matches just yet</p>
          <p className="mt-2 text-sm text-ink-secondary">
            Try removing a filter to see more pieces.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}
