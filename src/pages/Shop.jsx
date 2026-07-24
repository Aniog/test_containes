import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ProductCard } from "@/components/product/ProductCard"
import { PRODUCTS, CATEGORIES } from "@/data/products"

const SORTS = {
  featured: "Featured",
  priceAsc: "Price: Low to High",
  priceDesc: "Price: High to Low",
  rating: "Top Rated",
}

const MATERIALS = [
  { id: "18k-gold-plated", label: "18K Gold Plated" },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory === "all" ? [] : [initialCategory]
  )
  const [priceRange, setPriceRange] = useState([0, 120])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    let list = [...PRODUCTS]

    if (selectedCategories.length) {
      list = list.filter((p) => selectedCategories.includes(p.category))
    }

    list = list.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

    if (selectedMaterials.length) {
      list = list.filter((p) => selectedMaterials.includes(p.material))
    }

    switch (sort) {
      case "priceAsc":
        list.sort((a, b) => a.price - b.price)
        break
      case "priceDesc":
        list.sort((a, b) => b.price - a.price)
        break
      case "rating":
        list.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return list
  }, [selectedCategories, priceRange, selectedMaterials, sort])

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
    setSearchParams({})
  }

  const toggleMaterial = (id) => {
    setSelectedMaterials((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    )
  }

  const Filters = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-sans text-xs uppercase tracking-label text-velmora-espresso">
          Category
        </h3>
        <div className="mt-4 space-y-2">
          <label className="flex items-center gap-2 text-sm text-velmora-mocha">
            <input
              type="checkbox"
              checked={selectedCategories.length === 0}
              onChange={() => setSelectedCategories([])}
              className="accent-velmora-gold"
            />
            All
          </label>
          {CATEGORIES.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-2 text-sm text-velmora-mocha"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="accent-velmora-gold"
              />
              {cat.label}
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-sans text-xs uppercase tracking-label text-velmora-espresso">
          Price
        </h3>
        <div className="mt-4 flex items-center gap-2">
          <Input
            type="number"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            className="h-9"
          />
          <span className="text-velmora-mocha">—</span>
          <Input
            type="number"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="h-9"
          />
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-sans text-xs uppercase tracking-label text-velmora-espresso">
          Material
        </h3>
        <div className="mt-4 space-y-2">
          {MATERIALS.map((mat) => (
            <label
              key={mat.id}
              className="flex items-center gap-2 text-sm text-velmora-mocha"
            >
              <input
                type="checkbox"
                checked={selectedMaterials.includes(mat.id)}
                onChange={() => toggleMaterial(mat.id)}
                className="accent-velmora-gold"
              />
              {mat.label}
            </label>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full text-xs uppercase tracking-label"
        onClick={() => {
          setSelectedCategories([])
          setSelectedMaterials([])
          setPriceRange([0, 120])
          setSort("featured")
          setSearchParams({})
        }}
      >
        Reset Filters
      </Button>
    </div>
  )

  return (
    <section className="bg-velmora-cream px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="font-sans text-xs uppercase tracking-widest text-velmora-gold">
            Shop
          </p>
          <h1 className="mt-2 font-serif text-4xl text-velmora-espresso md:text-5xl">
            The Collection
          </h1>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Desktop sidebar */}
          <aside className="hidden w-64 flex-shrink-0 lg:block">
            <Filters />
          </aside>

          {/* Mobile filter toggle */}
          <div className="lg:hidden">
            <Button
              variant="outline"
              className="w-full justify-start gap-2 text-xs uppercase tracking-label"
              onClick={() => setMobileFiltersOpen((v) => !v)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
            {mobileFiltersOpen && (
              <div className="mt-4 border border-velmora-espresso/10 bg-white p-5">
                <Filters />
              </div>
            )}
          </div>

          <div className="flex-1">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-velmora-mocha">
                {filtered.length} result{filtered.length !== 1 && "s"}
              </p>
              <div className="flex items-center gap-2">
                <label className="text-xs uppercase tracking-label text-velmora-mocha">
                  Sort by
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="h-9 border border-velmora-espresso/10 bg-white px-3 text-sm text-velmora-espresso focus:outline-none focus:ring-1 focus:ring-velmora-gold"
                >
                  {Object.entries(SORTS).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-velmora-espresso">
                  No pieces match your filters.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedMaterials([])
                    setPriceRange([0, 120])
                    setSearchParams({})
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
