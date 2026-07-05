import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products, categories, materials } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import FilterSidebar from '@/components/shop/FilterSidebar'
import SortDropdown from '@/components/shop/SortDropdown'
import { SlidersHorizontal } from 'lucide-react'

const priceBands = {
  all: { min: 0, max: Infinity },
  'under-50': { min: 0, max: 50 },
  '50-80': { min: 50, max: 80 },
  'over-80': { min: 80, max: Infinity },
}

function sortProducts(list, sort) {
  const copy = [...list]
  switch (sort) {
    case 'price-asc':
      return copy.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return copy.sort((a, b) => b.price - a.price)
    case 'rating':
      return copy.sort((a, b) => b.rating - a.rating)
    case 'name':
      return copy.sort((a, b) => a.name.localeCompare(b.name))
    default:
      return copy
  }
}

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const initialCategory = params.get('category')

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : [],
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [sort, setSort] = useState('featured')
  const [filterOpen, setFilterOpen] = useState(false)

  // keep URL ?category= in sync
  useEffect(() => {
    if (selectedCategories.length === 1) {
      setParams({ category: selectedCategories[0] }, { replace: true })
    } else {
      const next = new URLSearchParams(params)
      next.delete('category')
      setParams(next, { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories])

  const counts = useMemo(() => {
    const byCategory = {}
    categories.forEach((c) => (byCategory[c.id] = 0))
    const byMaterial = {}
    materials.forEach((m) => (byMaterial[m.id] = 0))
    products.forEach((p) => {
      if (byCategory[p.category] !== undefined) byCategory[p.category] += 1
      if (byMaterial[p.material] !== undefined) byMaterial[p.material] += 1
    })
    return { byCategory, byMaterial }
  }, [])

  const filtered = useMemo(() => {
    const band = priceBands[selectedPrice] || priceBands.all
    return products.filter((p) => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) return false
      if (selectedMaterials.length > 0 && !selectedMaterials.includes(p.material)) return false
      if (p.price < band.min) return false
      if (p.price > band.max) return false
      return true
    })
  }, [selectedCategories, selectedMaterials, selectedPrice])

  const sorted = useMemo(() => sortProducts(filtered, sort), [filtered, sort])

  const toggleCategory = (id) =>
    setSelectedCategories((cur) =>
      cur.includes(id) ? cur.filter((c) => c !== id) : [...cur, id],
    )
  const toggleMaterial = (id) =>
    setSelectedMaterials((cur) =>
      cur.includes(id) ? cur.filter((c) => c !== id) : [...cur, id],
    )
  const clear = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setSelectedPrice('all')
  }

  const activeCount =
    selectedCategories.length + selectedMaterials.length + (selectedPrice !== 'all' ? 1 : 0)

  return (
    <div className="bg-ivory">
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-10 md:pb-14 border-b border-hairline">
        <div className="container-page">
          <span className="eyebrow">All pieces</span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05]">
            The Shop
          </h1>
          <p className="mt-4 text-sm md:text-base text-taupe max-w-xl">
            Demi-fine gold jewelry, hand-finished in small batches. Filter by
            category, material, or price to find your next piece.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container-page flex gap-10">
          <FilterSidebar
            open={filterOpen}
            onClose={() => setFilterOpen(false)}
            selectedCategories={selectedCategories}
            selectedMaterials={selectedMaterials}
            selectedPrice={selectedPrice}
            onToggleCategory={toggleCategory}
            onToggleMaterial={toggleMaterial}
            onChangePrice={setSelectedPrice}
            onClear={clear}
            counts={counts}
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setFilterOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 border border-hairline hover:border-espresso px-4 py-2.5 text-[11px] uppercase tracking-widest2 font-medium transition-colors"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.4} />
                  Filters
                  {activeCount > 0 && (
                    <span className="bg-espresso text-ivory text-[10px] px-1.5 py-0.5 rounded-full">
                      {activeCount}
                    </span>
                  )}
                </button>
                <p className="text-xs text-taupe">
                  {sorted.length} {sorted.length === 1 ? 'piece' : 'pieces'}
                </p>
              </div>
              <SortDropdown value={sort} onChange={setSort} />
            </div>

            {sorted.length === 0 ? (
              <div className="py-24 text-center border border-hairline">
                <p className="font-serif text-3xl">No pieces match</p>
                <p className="mt-2 text-sm text-taupe">Try clearing some filters.</p>
                <button type="button" onClick={clear} className="btn-outline mt-6">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-12">
                {sorted.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
