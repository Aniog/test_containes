import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Search } from "lucide-react"
import { PRODUCTS } from "@/data/products"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"

export function SearchOverlay({ open, onOpenChange }) {
  const [query, setQuery] = useState("")

  useEffect(() => {
    if (!open) setQuery("")
  }, [open])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return PRODUCTS.slice(0, 3)
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    ).slice(0, 5)
  }, [query])

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="top" className="h-auto max-h-[85vh] overflow-y-auto">
        <SheetTitle className="sr-only">Search</SheetTitle>
        <div className="container py-8">
          <div className="flex items-center gap-3 border-b border-ink/25 pb-3">
            <Search className="size-5 shrink-0 text-bronze" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search earrings, huggies, necklaces..."
              className="w-full bg-transparent font-serif text-2xl font-medium text-ink placeholder:text-ink-soft/40 focus:outline-none md:text-3xl"
            />
          </div>
          <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-ink-soft">
            {query.trim() ? `${results.length} result${results.length === 1 ? "" : "s"}` : "Popular right now"}
          </p>

          <div className="mt-5 divide-y divide-line">
            {results.map((p) => {
              const titleId = `search-${p.id}-title`
              return (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  onClick={() => onOpenChange(false)}
                  className="group flex items-center gap-4 py-3"
                >
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-sm bg-cream">
                    <span className="font-serif text-xl font-medium text-bronze">
                      {p.name.charAt(0)}
                    </span>
                  </span>
                  <span className="flex-1">
                    <span
                      id={titleId}
                      className="block font-serif text-base font-medium uppercase tracking-[0.14em] text-ink transition-colors group-hover:text-bronze"
                    >
                      {p.name}
                    </span>
                    <span className="mt-0.5 block text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                      {p.category}
                    </span>
                  </span>
                  <span className="text-sm font-medium text-ink">${p.price}</span>
                  <ArrowRight className="size-4 text-ink-soft opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              )
            })}
            {results.length === 0 && (
              <p className="py-8 text-center text-sm text-ink-soft">
                Nothing found for "{query}" — try "huggies" or "pearl".
              </p>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
