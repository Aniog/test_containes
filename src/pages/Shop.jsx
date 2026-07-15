import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { products } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/components/ui/StrkImage"
import { cn, formatPrice } from "@/lib/utils"

const categoryOptions = ["Earrings", "Necklaces", "Huggies"]
const materialOptions = ["18K Gold Plated"]
const priceBands = [
  { id: "under50", label: "Under $50", min: 0, max: 50 },
  { id: "50to80", label: "$50 – $80", min: 50, max: 80 },
  { id: "over80", label: "Over $80", min: 80, max: Infinity },
]
const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ref = useStrkImages([])

  const initialCategory = searchParams.get("category") || ""
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrice, setSelectedPrice] = useState("")
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync category from URL
  useEffect(() => {
    const cat = searchParams.get("category") || ""
    setSelectedCategories(cat ? [cat] : [])
  }, [searchParams])

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    )
  }

  const clearAll = () => {
    setSelectedCategories([])
    setSelectedPrice("")
    setSelectedMaterials([])
    setSearchParams({})
  }

  const filtered = useMemo(() => {
    let list = [...products]
    if (selectedCategories.length) {
      list = list.filter((p) => selectedCategories.includes(p.category))
    }
    if (selectedMaterials.length) {
      list = list.filter((p) => selectedMaterials.includes(p.material))
    }
    if (selectedPrice) {
      const band = priceBands.find((b) => b.id === selectedPrice)
      if (band) {
        list = list.filter((p) => p.price >= band.min && p.price < band.max)
      }
    }
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        list.sort((a, b) => b.price - a.price)
        break
      case "rating":
        list.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return list
  }, [selectedCategories, selectedMaterials, selectedPrice, sort])

  const activeFilterCount =
    selectedCategories.length +
    selectedMaterials.length +
    (selectedPrice ? 1 : 0)

  const FilterPanel = () => (
    <div className="space-y-10">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.2em] text-ink mb-4">
          Category
        </h3>
        <ul className="space-y-3">
          {categoryOptions.map((cat) => (
            <li key={cat}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="w-4 h-4 accent-gold border-line"
                />
                <span className="text-sm text-stone group-hover:text-ink transition-colors">
                  {cat}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.2em] text-ink mb-4">Price</h3>
        <ul className="space-y-3">
          {priceBands.map((band) => (
            <li key={band.id}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="price"
                  checked={selectedPrice === band.id}
                  onChange={() => setSelectedPrice(band.id)}
                  className="w-4 h-4 accent-gold border-line"
                />
                <span className="text-sm text-stone group-hover:text-ink transition-colors">
                  {band.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.2em] text-ink mb-4">
          Material
        </h3>
        <ul className="space-y-3">
          {materialOptions.map((mat) => (
            <li key={mat}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(mat)}
                  onChange={() => toggleMaterial(mat)}
                  className="w-4 h-4 accent-gold border-line"
                />
                <span className="text-sm text-stone group-hover:text-ink transition-colors">
                  {mat}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={clearAll}
          className="text-xs uppercase tracking-[0.2em] text-gold underline underline-offset-4 hover:text-ink transition-colors"
        >
          Clear All ({activeFilterCount})
        </button>
      )}
    </div>
  )

  return (
    <div ref={ref} className="pt-16 md:pt-20 bg-cream min-h-screen">
      {/* Header */}
      <div className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
            The Collection
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">
            Shop All Jewelry
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink border border-line px-4 py-2.5"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-gold text-cream rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                {activeFilterCount}
              </span>
            )}
          </button>
          <p className="hidden lg:block text-sm text-stone">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-line text-xs uppercase tracking-[0.15em] text-ink pl-4 pr-10 py-2.5 cursor-pointer focus:outline-none focus:border-gold"
            >
              {sortOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  Sort: {o.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-ink absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar */}
          <aside className="hidden lg:block w-60 shrink-0">
            <FilterPanel />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-serif text-2xl text-ink mb-2">
                  No pieces match your filters
                </p>
                <p className="text-stone text-sm mb-6">
                  Try adjusting or clearing your selection.
                </p>
                <button
                  onClick={clearAll}
                  className="text-xs uppercase tracking-[0.2em] text-gold underline underline-offset-4"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-cream shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-line">
              <h2 className="font-serif text-2xl">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X className="w-5 h-5 text-ink" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterPanel />
            </div>
            <div className="border-t border-line px-6 py-4">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-gold text-cream text-xs uppercase tracking-[0.2em] py-4"
              >
                Show {filtered.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
