import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { products, categories, materials } from "@/data/products"
import { ProductCard } from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
]

const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 — $75", min: 50, max: 75 },
  { label: "$75 — $100", min: 75, max: 100 },
  { label: "$100+", min: 100, max: Infinity },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState("featured")
  const [sortOpen, setSortOpen] = useState(false)

  const initialCategory = searchParams.get("category") || ""
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([])

  useEffect(() => {
    const category = searchParams.get("category")
    if (category) {
      setSelectedCategories([category])
    }
  }, [searchParams])

  const toggle = (value, list, setList) => {
    setList((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setSelectedPriceRanges([])
    setSearchParams({})
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material))
    }

    if (selectedPriceRanges.length > 0) {
      result = result.filter((p) =>
        selectedPriceRanges.some(
          (label) => {
            const range = priceRanges.find((r) => r.label === label)
            return range && p.price >= range.min && p.price <= range.max
          }
        )
      )
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [selectedCategories, selectedMaterials, selectedPriceRanges, sortBy])

  const activeFiltersCount =
    selectedCategories.length + selectedMaterials.length + selectedPriceRanges.length

  const FilterPanel = ({ mobile = false }) => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-xl font-light text-ink">Filters</h3>
        {activeFiltersCount > 0 && (
          <button
            onClick={clearFilters}
            className="text-xs font-medium uppercase tracking-wide text-taupe hover:text-ink"
          >
            Clear all
          </button>
        )}
      </div>
      <Separator />

      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-wide text-ink">
          Category
        </h4>
        <ul className="mt-3 space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <label className="flex cursor-pointer items-center gap-2 text-sm text-taupe hover:text-ink">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggle(cat, selectedCategories, setSelectedCategories)}
                  className="h-4 w-4 accent-ink"
                />
                {cat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <Separator />

      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-wide text-ink">
          Price
        </h4>
        <ul className="mt-3 space-y-2">
          {priceRanges.map((range) => (
            <li key={range.label}>
              <label className="flex cursor-pointer items-center gap-2 text-sm text-taupe hover:text-ink">
                <input
                  type="checkbox"
                  checked={selectedPriceRanges.includes(range.label)}
                  onChange={() => toggle(range.label, selectedPriceRanges, setSelectedPriceRanges)}
                  className="h-4 w-4 accent-ink"
                />
                {range.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <Separator />

      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-wide text-ink">
          Material
        </h4>
        <ul className="mt-3 space-y-2">
          {materials.map((mat) => (
            <li key={mat}>
              <label className="flex cursor-pointer items-center gap-2 text-sm text-taupe hover:text-ink">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(mat)}
                  onChange={() => toggle(mat, selectedMaterials, setSelectedMaterials)}
                  className="h-4 w-4 accent-ink"
                />
                {mat}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {mobile && (
        <Button onClick={() => setMobileFiltersOpen(false)} className="w-full">
          Show {filteredProducts.length} Results
        </Button>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-paper pb-16 pt-24 md:pb-24 md:pt-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <div className="text-center md:text-left">
          <p className="font-sans text-xs font-medium uppercase tracking-wide text-champagne">
            The Collection
          </p>
          <h1 className="mt-2 font-serif text-4xl font-light text-ink md:text-6xl">
            Shop All Jewelry
          </h1>
        </div>

        <div className="mt-8 flex items-center justify-between border-b border-divider pb-4">
          <div className="flex items-center gap-3">
            <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
              <SheetTrigger asChild>
                <button className="flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-wide text-ink md:hidden">
                  <SlidersHorizontal size={14} />
                  Filter
                  {activeFiltersCount > 0 && (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-ink text-[9px] text-white">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-paper">
                <FilterPanel mobile />
              </SheetContent>
            </Sheet>
            <span className="hidden text-sm text-taupe md:inline">
              {filteredProducts.length} pieces
            </span>
          </div>

          <div className="relative">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-wide text-ink"
            >
              Sort by: {sortOptions.find((s) => s.value === sortBy)?.label}
              <ChevronDown size={14} className={cn("transition-transform", sortOpen && "rotate-180")} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full z-20 mt-2 w-48 border border-divider bg-white shadow-lg">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value)
                      setSortOpen(false)
                    }}
                    className={cn(
                      "block w-full px-4 py-2.5 text-left text-xs hover:bg-linen",
                      sortBy === option.value ? "font-semibold text-ink" : "text-taupe"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex gap-10">
          <aside className="hidden w-56 flex-shrink-0 md:block">
            <FilterPanel />
          </aside>

          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-ink">No pieces match your filters.</p>
                <Button onClick={clearFilters} variant="outline" className="mt-4">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
