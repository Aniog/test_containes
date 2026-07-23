import { useState, useMemo, useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { products, categories } from "@/data/products"
import { ProductCard } from "@/components/layout/ProductCard"

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
]

const materials = [
  { id: "18k-gold-plated", label: "18k Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [priceRange, setPriceRange] = useState([30, 120])
  const [sortBy, setSortBy] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get("category")
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [selectedCategory, selectedMaterials, priceRange, sortBy])

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      const categoryMatch =
        selectedCategory === "all" || p.category === selectedCategory
      const materialMatch =
        selectedMaterials.length === 0 ||
        selectedMaterials.includes(p.material)
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1]
      return categoryMatch && materialMatch && priceMatch
    })

    switch (sortBy) {
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
  }, [selectedCategory, selectedMaterials, priceRange, sortBy])

  const clearFilters = () => {
    setSelectedCategory("all")
    setSelectedMaterials([])
    setPriceRange([30, 120])
    setSearchParams({})
  }

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-velmora-charcoal">
          Category
        </h3>
        <div className="mt-4 space-y-2">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-velmora-charcoal">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === "all"}
              onChange={() => {
                setSelectedCategory("all")
                setSearchParams({})
              }}
              className="h-4 w-4 accent-velmora-gold"
            />
            All Jewelry
          </label>
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex cursor-pointer items-center gap-2 text-sm text-velmora-charcoal"
            >
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => {
                  setSelectedCategory(cat.id)
                  setSearchParams({ category: cat.id })
                }}
                className="h-4 w-4 accent-velmora-gold"
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-velmora-charcoal">
          Price
        </h3>
        <div className="mt-6 px-1">
          <Slider
            value={priceRange}
            min={30}
            max={120}
            step={5}
            onValueChange={setPriceRange}
          />
        </div>
        <div className="mt-3 flex justify-between text-sm text-velmora-warm-gray">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-velmora-charcoal">
          Material
        </h3>
        <div className="mt-4 space-y-2">
          {materials.map((material) => (
            <label
              key={material.id}
              className="flex cursor-pointer items-center gap-2 text-sm text-velmora-charcoal"
            >
              <input
                type="checkbox"
                checked={selectedMaterials.includes(material.id)}
                onChange={(e) => {
                  setSelectedMaterials((prev) =>
                    e.target.checked
                      ? [...prev, material.id]
                      : prev.filter((m) => m !== material.id)
                  )
                }}
                className="h-4 w-4 accent-velmora-gold"
              />
              {material.label}
            </label>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        onClick={clearFilters}
        className="w-full text-xs"
      >
        Clear Filters
      </Button>
    </div>
  )

  return (
    <div ref={containerRef} className="bg-velmora-cream pb-20 pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.25em] text-velmora-gold">
            The Collection
          </p>
          <h1 className="font-serif text-3xl font-light uppercase tracking-[0.12em] text-velmora-charcoal md:text-4xl">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Desktop Filters */}
          <aside className="hidden w-64 flex-shrink-0 lg:block">
            <FilterPanel />
          </aside>

          {/* Mobile Filters */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 bg-velmora-charcoal/40 backdrop-blur-sm lg:hidden">
              <div className="absolute left-0 top-0 h-full w-4/5 max-w-sm overflow-y-auto bg-velmora-cream p-6 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="font-serif text-lg uppercase tracking-[0.15em] text-velmora-charcoal">
                    Filters
                  </h2>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X className="h-5 w-5 text-velmora-charcoal" />
                  </button>
                </div>
                <FilterPanel />
              </div>
            </div>
          )}

          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-sm text-velmora-warm-gray">
                {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filters
                </Button>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[170px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:gap-x-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-sm border border-velmora-border bg-velmora-ivory py-20 text-center">
                <p className="font-serif text-lg text-velmora-charcoal">
                  No pieces match your filters
                </p>
                <p className="mt-2 text-sm text-velmora-warm-gray">
                  Try adjusting your category, material, or price range.
                </p>
                <Button onClick={clearFilters} className="mt-6">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
