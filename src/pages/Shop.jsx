import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { products, formatPrice } from "@/data/products"
import { ProductCard } from "@/components/shop/ProductCard"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const categories = [
  { value: "earrings", label: "Earrings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "huggies", label: "Huggies" },
  { value: "sets", label: "Gift Sets" },
]

const materials = [
  { value: "18k-gold-plated", label: "18K Gold Plated" },
  { value: "crystal", label: "Crystal" },
]

const priceRanges = [
  { value: "under-50", label: "Under $50", min: 0, max: 50 },
  { value: "50-75", label: "$50 — $75", min: 50, max: 75 },
  { value: "75-plus", label: "$75+", min: 75, max: Infinity },
]

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
]

function FilterGroup({ title, options, selected, toggle }) {
  return (
    <div className="py-6">
      <h4 className="text-xs font-semibold uppercase tracking-widest text-velmora-charcoal">{title}</h4>
      <div className="mt-4 space-y-3">
        {options.map((option) => (
          <label key={option.value} className="flex cursor-pointer items-center gap-3">
            <div
              className={`flex h-4 w-4 items-center justify-center border ${
                selected.includes(option.value)
                  ? "border-velmora-accent bg-velmora-accent"
                  : "border-velmora-stone"
              }`}
            >
              {selected.includes(option.value) && <span className="h-2 w-2 bg-white" />}
            </div>
            <input
              type="checkbox"
              className="sr-only"
              checked={selected.includes(option.value)}
              onChange={() => toggle(option.value)}
            />
            <span className="text-sm text-velmora-charcoal/80">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sort, setSort] = useState("featured")

  const initialCategory = searchParams.get("category") || ""
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])

  useEffect(() => {
    const cat = searchParams.get("category") || ""
    if (cat) setSelectedCategories([cat])
  }, [searchParams])

  const toggle = (setter) => (value) => {
    setter((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))
  }

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCategories.length && !selectedCategories.includes(p.category)) return false
      if (selectedMaterials.length && !p.material.some((m) => selectedMaterials.includes(m))) return false
      if (selectedPrices.length) {
        const inRange = selectedPrices.some((range) => {
          const option = priceRanges.find((r) => r.value === range)
          return option && p.price >= option.min && p.price < option.max
        })
        if (!inRange) return false
      }
      return true
    })

    switch (sort) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return result
  }, [selectedCategories, selectedMaterials, selectedPrices, sort])

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setSelectedPrices([])
    setSearchParams({})
  }

  const activeFilterCount = selectedCategories.length + selectedMaterials.length + selectedPrices.length

  const Filters = () => (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-xl uppercase tracking-widest text-velmora-charcoal">Filters</h3>
        {activeFilterCount > 0 && (
          <button onClick={clearFilters} className="text-xs font-medium uppercase tracking-widest text-velmora-accent hover:text-velmora-charcoal">
            Clear all
          </button>
        )}
      </div>
      <Separator />
      <FilterGroup title="Category" options={categories} selected={selectedCategories} toggle={toggle(setSelectedCategories)} />
      <Separator />
      <FilterGroup title="Material" options={materials} selected={selectedMaterials} toggle={toggle(setSelectedMaterials)} />
      <Separator />
      <FilterGroup title="Price" options={priceRanges} selected={selectedPrices} toggle={toggle(setSelectedPrices)} />
    </div>
  )

  return (
    <main className="bg-velmora-cream pb-20 pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-accent">The Collection</p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-velmora-charcoal sm:text-5xl">Shop All</h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="hidden w-64 flex-shrink-0 lg:block">
            <Filters />
          </aside>

          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between border-b border-velmora-stone pb-4">
              <div className="flex items-center gap-3 lg:hidden">
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <button className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-velmora-charcoal">
                      <SlidersHorizontal className="h-4 w-4" />
                      Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
                    </button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] bg-velmora-cream p-6">
                    <SheetTitle className="font-serif text-2xl tracking-widest">Filters</SheetTitle>
                    <Filters />
                  </SheetContent>
                </Sheet>
              </div>
              <p className="hidden text-sm text-velmora-taupe lg:block">{filtered.length} products</p>

              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-xs font-medium uppercase tracking-widest text-velmora-taupe">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="h-9 border border-velmora-stone bg-transparent px-3 text-sm text-velmora-charcoal focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-velmora-accent"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-velmora-charcoal">No products match your filters.</p>
                <Button onClick={clearFilters} variant="outline" className="mt-4">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
