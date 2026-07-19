import { useMemo, useState } from "react"
import { SlidersHorizontal } from "lucide-react"
import ProductCard from "@/components/product/ProductCard.jsx"
import { Button } from "@/components/ui/Buttons.jsx"
import { useCart } from "@/context/CartContext.jsx"
import { products } from "@/data/products.js"

const filters = {
  category: ["All", "Earrings", "Necklaces", "Huggies", "Sets"],
  price: ["All", "$30–$50", "$50–$80", "$80–$120"],
  material: ["All", "18K Gold Plated", "Crystal + Gold Plated", "Textured Gold Plated"],
}

export default function Shop() {
  const { addItem } = useCart()
  const [category, setCategory] = useState("All")
  const [price, setPrice] = useState("All")
  const [material, setMaterial] = useState("All")
  const [sort, setSort] = useState("featured")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    const priceRanges = {
      "$30–$50": [30, 50],
      "$50–$80": [50, 80],
      "$80–$120": [80, 120],
    }

    const visible = products.filter((product) => {
      const categoryMatch = category === "All" || product.category === category
      const materialMatch = material === "All" || product.material === material
      const priceMatch =
        price === "All" ||
        (product.price >= priceRanges[price][0] && product.price <= priceRanges[price][1])
      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === "price-low") return [...visible].sort((a, b) => a.price - b.price)
    if (sort === "price-high") return [...visible].sort((a, b) => b.price - a.price)
    return visible
  }, [category, price, material, sort])

  const filterPanel = (
    <aside className="space-y-8 text-velmora-ink">
      <FilterGroup label="Category" options={filters.category} value={category} onChange={setCategory} />
      <FilterGroup label="Price" options={filters.price} value={price} onChange={setPrice} />
      <FilterGroup label="Material" options={filters.material} value={material} onChange={setMaterial} />
      <button
        type="button"
        onClick={() => {
          setCategory("All")
          setPrice("All")
          setMaterial("All")
        }}
        className="focus-ring border-b border-velmora-gold pb-1 text-xs font-bold uppercase tracking-luxe text-velmora-ink hover:text-velmora-gold"
      >
        Clear Filters
      </button>
    </aside>
  )

  return (
    <main className="bg-velmora-cream pb-20 pt-28 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="border-b border-velmora-hairline pb-8">
          <p className="text-xs font-bold uppercase tracking-widerLuxe text-velmora-gold">Shop Velmora</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-6xl font-medium leading-none text-velmora-ink sm:text-7xl">The Collection</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-velmora-clay">
                Demi-fine gold pieces made for luminous everyday wear, thoughtful gifting, and refined layering.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button type="button" variant="outline" onClick={() => setMobileFiltersOpen((open) => !open)} className="lg:hidden">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
              <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-luxe text-velmora-clay">
                Sort
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="focus-ring rounded-full border border-velmora-hairline bg-velmora-parchment px-4 py-3 text-sm normal-case tracking-normal text-velmora-ink"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[260px_1fr]">
          <div className="hidden lg:block">{filterPanel}</div>
          {mobileFiltersOpen && (
            <div className="border border-velmora-hairline bg-velmora-parchment p-5 lg:hidden">{filterPanel}</div>
          )}
          <section>
            <div className="mb-5 flex items-center justify-between text-sm text-velmora-clay">
              <span>{filteredProducts.length} pieces</span>
              <span>Premium demi-fine jewelry from $30–$120</span>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAdd={addItem} compact />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ label, options, value, onChange }) {
  return (
    <fieldset>
      <legend className="mb-4 text-xs font-bold uppercase tracking-widerLuxe text-velmora-gold">{label}</legend>
      <div className="space-y-3">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-velmora-clay transition hover:text-velmora-ink">
            <span>{option}</span>
            <input
              type="radio"
              name={label}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 accent-velmora-gold"
            />
          </label>
        ))}
      </div>
    </fieldset>
  )
}
