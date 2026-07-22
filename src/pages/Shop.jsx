import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SlidersHorizontal, X } from "lucide-react"
import { CATEGORIES, PRODUCTS } from "@/data/products"
import { ProductCard } from "@/components/product/ProductCard"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"
import { cn } from "@/lib/utils"

const PRICE_RANGES = [
  { value: "under-40", label: "Under $40", test: (p) => p.price < 40 },
  { value: "40-60", label: "$40 – $60", test: (p) => p.price >= 40 && p.price <= 60 },
  { value: "over-60", label: "$60 & Above", test: (p) => p.price > 60 },
]

const MATERIALS = [
  { value: "gold", label: "18K Gold Plated" },
  { value: "silver", label: "Silver Tone" },
  { value: "crystal", label: "Crystal Accents" },
  { value: "pearl", label: "Freshwater Pearl" },
]

const SORTS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
]

function FilterSection({ title, children }) {
  return (
    <div className="border-b border-line py-6 first:pt-0 last:border-0">
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink">{title}</h4>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  )
}

function FilterOption({ id, label, checked, onChange }) {
  return (
    <label htmlFor={id} className="group flex cursor-pointer items-center gap-3">
      <Checkbox id={id} checked={checked} onCheckedChange={onChange} />
      <span className="text-sm text-ink-soft transition-colors group-hover:text-ink">{label}</span>
    </label>
  )
}

export default function Shop() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get("category")

  const [categories, setCategories] = useState(initialCategory ? [initialCategory] : [])
  const [prices, setPrices] = useState([])
  const [materials, setMaterials] = useState([])
  const [sort, setSort] = useState("featured")
  const [filtersOpen, setFiltersOpen] = useState(false)

  const toggle = (list, setList, value) =>
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])

  const hasFilters = categories.length > 0 || prices.length > 0 || materials.length > 0

  const clearFilters = () => {
    setCategories([])
    setPrices([])
    setMaterials([])
  }

  const products = useMemo(() => {
    let list = [...PRODUCTS]
    if (categories.length) list = list.filter((p) => categories.includes(p.category))
    if (prices.length) list = list.filter((p) => prices.some((v) => PRICE_RANGES.find((r) => r.value === v)?.test(p)))
    if (materials.length) {
      list = list.filter((p) =>
        materials.some((m) => {
          if (m === "crystal") return p.tags.some((t) => t.includes("crystal")) || p.description.toLowerCase().includes("crystal")
          if (m === "pearl") return p.tags.includes("pearl")
          return true
        })
      )
    }
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price)
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price)
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating)
    return list
  }, [categories, prices, materials, sort])

  const filterContent = (
    <>
      <FilterSection title="Category">
        {CATEGORIES.map((cat) => (
          <FilterOption
            key={cat.value}
            id={`cat-${cat.value}`}
            label={cat.label}
            checked={categories.includes(cat.value)}
            onChange={() => toggle(categories, setCategories, cat.value)}
          />
        ))}
      </FilterSection>
      <FilterSection title="Price">
        {PRICE_RANGES.map((range) => (
          <FilterOption
            key={range.value}
            id={`price-${range.value}`}
            label={range.label}
            checked={prices.includes(range.value)}
            onChange={() => toggle(prices, setPrices, range.value)}
          />
        ))}
      </FilterSection>
      <FilterSection title="Material">
        {MATERIALS.map((mat) => (
          <FilterOption
            key={mat.value}
            id={`mat-${mat.value}`}
            label={mat.label}
            checked={materials.includes(mat.value)}
            onChange={() => toggle(materials, setMaterials, mat.value)}
          />
        ))}
      </FilterSection>
      {hasFilters && (
        <button
          type="button"
          onClick={clearFilters}
          className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-bronze transition-colors hover:text-bronze-dark"
        >
          <X className="size-3.5" />
          Clear All
        </button>
      )}
    </>
  )

  return (
    <div className="pt-16 md:pt-20">
      <section className="border-b border-line bg-cream">
        <div className="container py-12 text-center md:py-16">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-bronze md:text-[11px]">
            The Collection
          </p>
          <h1 id="shop-heading" className="mt-3 font-serif text-4xl font-medium text-ink md:text-6xl">
            Shop All Jewelry
          </h1>
          <p id="shop-sub" className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
            Demi-fine essentials in 18K gold plate — earrings, necklaces and huggies made to be worn daily.
          </p>
        </div>
      </section>

      <div className="container py-10 md:py-14">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-28">{filterContent}</div>
          </aside>

          <div>
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
                {products.length} {products.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-2">
                <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-2 lg:hidden">
                      <SlidersHorizontal className="size-3.5" />
                      Filters
                      {hasFilters && <span className="flex size-4 items-center justify-center rounded-full bg-bronze text-[9px] font-semibold text-ivory">{categories.length + prices.length + materials.length}</span>}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[85vw] max-w-sm overflow-y-auto">
                    <SheetTitle className="px-6 pt-7 font-serif text-2xl">Filters</SheetTitle>
                    <div className="p-6">{filterContent}</div>
                    <div className="border-t border-line p-6">
                      <Button className="w-full" onClick={() => setFiltersOpen(false)}>
                        View {products.length} {products.length === 1 ? "Piece" : "Pieces"}
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>

                <Select value={sort} onValueChange={setSort}>
                  <SelectTrigger className="w-[180px] md:w-[210px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {SORTS.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {products.length > 0 ? (
              <div
                className={cn(
                  "mt-8 grid grid-cols-2 gap-x-4 gap-y-10 transition-opacity duration-300 md:grid-cols-3"
                )}
              >
                {products.map((product, i) => (
                  <Reveal key={product.id} delay={(i % 3) * 60}>
                    <ProductCard product={product} />
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="mt-8 flex flex-col items-center gap-4 rounded-sm border border-dashed border-line py-20 text-center">
                <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
                <p className="max-w-xs text-sm text-ink-soft">
                  Try removing a filter or two — the full collection is worth a browse.
                </p>
                <Button variant="outline" onClick={clearFilters}>
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
