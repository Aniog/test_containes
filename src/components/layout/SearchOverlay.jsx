import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Search, X } from "lucide-react"
import { products } from "@/data/products"
import { formatPrice } from "@/lib/utils"

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState("")
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ""
      setQuery("")
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  const q = query.trim().toLowerCase()
  const results = q
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    : []

  return (
    <div className="fixed inset-0 z-[70]">
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="absolute top-0 inset-x-0 bg-cream shadow-soft-lg animate-fade-up">
        <div className="max-w-content mx-auto px-6 md:px-10 py-8">
          <div className="flex items-center gap-4 border-b border-sand pb-4">
            <Search size={22} className="text-muted" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for earrings, necklaces, huggies…"
              className="flex-1 bg-transparent text-ink placeholder:text-muted font-serif text-xl md:text-2xl outline-none"
            />
            <button onClick={onClose} aria-label="Close search" className="text-ink hover:text-gold transition-colors">
              <X size={24} />
            </button>
          </div>

          {q && (
            <div className="mt-6">
              {results.length === 0 ? (
                <p className="text-sm text-muted py-6">
                  No pieces match "{query}". Try another search.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {results.map((p) => (
                    <Link
                      key={p.id}
                      to={`/product/${p.id}`}
                      onClick={onClose}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-cream-deep transition-colors"
                    >
                      <div className="w-14 h-14 bg-cream-deep shrink-0" />
                      <div>
                        <p className="font-serif uppercase tracking-wide text-ink text-sm">{p.name}</p>
                        <p className="text-xs text-muted">{p.tagline}</p>
                      </div>
                      <span className="ml-auto text-sm text-gold font-medium">{formatPrice(p.price)}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {!q && (
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest2 text-muted mb-4">Popular searches</p>
              <div className="flex flex-wrap gap-2">
                {["Huggies", "Gold", "Necklaces", "Gift set", "Ear cuff"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="text-xs uppercase tracking-wide text-ink border border-sand rounded-full px-4 py-2 hover:border-gold hover:text-gold transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
