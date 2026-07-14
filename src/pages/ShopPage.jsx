import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import { products, categories, materials } from "@/data/products.js"
import ProductCard from "@/components/product/ProductCard.jsx"
import FilterSidebar from "@/components/shop/FilterSidebar.jsx"
import { cn } from "@/lib/utils.js"

const priceRanges = [
  { id: "u50", label: "Under $50", test: (p) => p < 50 },
  { id: "50to75", label: "$50 – $75", test: (p) => p >= 50 && p < 75 },
  { id: "75to100", label: "$75 – $100", test: (p) => p >= 75 && p < 100 },
  { id: "100plus", label: "$100+", test: (p) => p >= 100 },
]

const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "bestsellers", label: "Bestsellers" },
  { id: "low", label: "Price: Low to High" },
  { id: "high", label: "Price: High to Low" },
  { id: "new", label: "Newest" },
]

export default function ShopPage() {
  const [params, setParams] = useSearchParams()
  const [selected, setSelected] = useState({
    category: params.get("cat") || null,
    price: null,
    material: null,
  })
  const [sort, setSort] = useState("featured")
  const [sortOpen, setSortOpen] = useState(false)
  const sortRef = useRef(null)
  const ref = useRef(null)

  useEffect(() => {
    const cat = params.get("cat")
    if (cat) setSelected((s) => ({ ...s, category: cat }))
  }, [params])

  useEffect(() => {
    const onClick = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false)
      }
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const mod = await import("@strikingly/sdk")
        const cfgMod = await import("@/strk-img-config.json")
        if (cancelled) return
        if (mod?.ImageHelper?.loadImages) {
          mod.ImageHelper.loadImages(cfgMod.default || cfgMod, ref.current)
        }
      } catch (e) {}
    })()
    return () => {
      cancelled = true
    }
  }, [selected, sort])

  const filtered = useMemo(() => {
    let list = products.slice()
    if (selected.category) {
      list = list.filter((p) => p.category === selected.category)
    }
    if (selected.price) {
      const range = priceRanges.find((r) => r.id === selected.price)
      if (range) list = list.filter((p) => range.test(p.price))
    }
    if (selected.material) {
      const mat = materials.find((m) => m.id === selected.material)
      if (mat) {
        // Very simple material inference from product name + description
        list = list.filter((p) => {
          if (mat.id === "18k-gold")
            return /gold/i.test(p.name) || /gold/i.test(p.description)
          if (mat.id === "crystal")
            return /crystal/i.test(p.name) || /crystal/i.test(p.description)
          if (mat.id === "sterling-silver")
            return /silver/i.test(p.name) || /silver/i.test(p.description)
          return true
        })
      }
    }
    switch (sort) {
      case "low":
        list.sort((a, b) => a.price - b.price)
        break
      case "high":
        list.sort((a, b) => b.price - a.price)
        break
      case "bestsellers":
        list.sort(
          (a, b) =>
            (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0) ||
            b.reviewCount - a.reviewCount
        )
        break
      case "new":
        list.sort((a, b) => a.id.localeCompare(b.id))
        break
      default:
        list.sort(
          (a, b) =>
            (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0) ||
            b.rating - a.rating
        )
    }
    return list
  }, [selected, sort])

  const clear = () => {
    setSelected({ category: null, price: null, material: null })
    setParams({})
  }

  const updateSelected = (next) => {
    setSelected(next)
    if (next.category) setParams({ cat: next.category })
    else setParams({})
  }

  const currentSortLabel = sortOptions.find((s) => s.id === sort)?.label

  return (
    <div ref={ref} className="page-fade bg-ivory pt-24 md:pt-28">
      <div className="container-x">
        <header className="border-b border-hairline pb-10 pt-6">
          <span className="eyebrow">Shop</span>
          <h1
            id="shop-title"
            className="h-section mt-3 text-5xl text-espresso md:text-6xl"
          >
            All Pieces
          </h1>
          <p className="mt-3 max-w-md text-sm text-taupe">
            Earrings, necklaces, huggies, and considered gift sets — each one
            made in small batches and finished by hand.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-[220px_1fr] md:gap-12">
          <FilterSidebar
            categories={categories}
            materials={materials}
            priceRanges={priceRanges}
            selected={selected}
            onChange={updateSelected}
            onClear={clear}
          />

          <div>
            <div className="flex items-center justify-between border-b border-hairline pb-4">
              <p className="font-sans text-xs text-taupe">
                {filtered.length}{" "}
                {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="relative" ref={sortRef}>
                <button
                  type="button"
                  onClick={() => setSortOpen((s) => !s)}
                  className="flex items-center gap-2 font-sans text-[12px] uppercase tracking-[0.22em] text-espresso"
                >
                  Sort: {currentSortLabel}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-300",
                      sortOpen && "rotate-180"
                    )}
                    strokeWidth={1.5}
                  />
                </button>
                {sortOpen && (
                  <ul
                    role="listbox"
                    className="absolute right-0 top-full z-20 mt-2 w-56 border border-hairline bg-card py-2 shadow-card"
                  >
                    {sortOptions.map((opt) => (
                      <li key={opt.id}>
                        <button
                          type="button"
                          onClick={() => {
                            setSort(opt.id)
                            setSortOpen(false)
                          }}
                          className={cn(
                            "block w-full px-4 py-2 text-left font-sans text-sm transition-colors",
                            sort === opt.id
                              ? "text-espresso"
                              : "text-taupe hover:text-espresso"
                          )}
                        >
                          {opt.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-espresso">
                  No pieces match those filters.
                </p>
                <button
                  type="button"
                  onClick={clear}
                  className="btn-outline mt-6"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-8">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
