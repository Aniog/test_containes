import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { ProductCard } from '@/components/ProductCard'
import { products } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 49.99 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: 'Over $80', min: 80.01, max: Infinity },
]

const materials = ['18K Gold Plated', 'Sterling Silver']

export const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const pageRef = useRef(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const q = searchParams.get('q') || ''
  const categoryParam = searchParams.get('category') || ''
  const priceParam = searchParams.get('price') || ''
  const materialParam = searchParams.get('material') || ''
  const sort = searchParams.get('sort') || 'featured'

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [searchParams.toString()])

  const filtered = useMemo(() => {
    let list = [...products]

    if (q.trim()) {
      const term = q.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term)
      )
    }

    if (categoryParam) {
      list = list.filter((p) => p.category === categoryParam)
    }

    if (materialParam) {
      list = list.filter((p) => p.material === materialParam)
    }

    if (priceParam) {
      const range = priceRanges.find((r) => r.label === priceParam)
      if (range) {
        list = list.filter((p) => p.price >= range.min && p.price <= range.max)
      }
    }

    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return list
  }, [q, categoryParam, priceParam, materialParam, sort])

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    []
  )

  const toggleParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (next.get(key) === value) {
      next.delete(key)
    } else {
      next.set(key, value)
    }
    setSearchParams(next)
  }

  const clearFilters = () => {
    const next = new URLSearchParams()
    if (q) next.set('q', q)
    setSearchParams(next)
  }

  const activeCount = [categoryParam, priceParam, materialParam].filter(Boolean).length

  const FilterPanel = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between md:hidden">
        <h3 className="font-heading text-xl uppercase tracking-brand">Filters</h3>
        <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
          <X size={20} />
        </button>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-brand text-muted-foreground mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={categoryParam === cat}
                onChange={() => toggleParam('category', cat)}
                className="accent-primary"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="text-xs uppercase tracking-brand text-muted-foreground mb-3">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={priceParam === range.label}
                onChange={() => toggleParam('price', range.label)}
                className="accent-primary"
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="text-xs uppercase tracking-brand text-muted-foreground mb-3">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <label key={mat} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                name="material"
                checked={materialParam === mat}
                onChange={() => toggleParam('material', mat)}
                className="accent-primary"
              />
              {mat}
            </label>
          ))}
        </div>
      </div>

      {activeCount > 0 && (
        <Button
          variant="outline"
          className="w-full uppercase tracking-brand text-xs"
          onClick={clearFilters}
        >
          Clear Filters
        </Button>
      )}
    </div>
  )

  return (
    <main ref={pageRef} className="pt-24 md:pt-28 pb-16 md:pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-brand text-muted-foreground mb-3">
            {q ? `Search results for “${q}”` : 'Curated Collection'}
          </p>
          <h1 className="font-heading text-4xl md:text-6xl uppercase tracking-brand">
            {categoryParam || 'Shop All'}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          <aside className="hidden md:block w-64 flex-shrink-0">
            <FilterPanel />
          </aside>

          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="md:hidden uppercase tracking-brand text-xs">
                      <SlidersHorizontal size={14} className="mr-2" />
                      Filter {activeCount > 0 && `(${activeCount})`}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] bg-background">
                    <FilterPanel />
                  </SheetContent>
                </Sheet>
                <p className="text-sm text-muted-foreground">{filtered.length} products</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-brand text-muted-foreground hidden sm:inline">Sort</span>
                <select
                  value={sort}
                  onChange={(e) => {
                    const next = new URLSearchParams(searchParams)
                    next.set('sort', e.target.value)
                    setSearchParams(next)
                  }}
                  className="text-sm border border-border rounded-sm bg-transparent px-3 py-2 focus:outline-none focus:ring-1 focus:ring-ring"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {activeCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {categoryParam && (
                  <Badge variant="secondary" className="gap-1">
                    {categoryParam}
                    <button onClick={() => toggleParam('category', categoryParam)}><X size={12} /></button>
                  </Badge>
                )}
                {priceParam && (
                  <Badge variant="secondary" className="gap-1">
                    {priceParam}
                    <button onClick={() => toggleParam('price', priceParam)}><X size={12} /></button>
                  </Badge>
                )}
                {materialParam && (
                  <Badge variant="secondary" className="gap-1">
                    {materialParam}
                    <button onClick={() => toggleParam('material', materialParam)}><X size={12} /></button>
                  </Badge>
                )}
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-border rounded-sm">
                <p className="text-muted-foreground">No products match your filters.</p>
                <Button
                  variant="outline"
                  className="mt-4 uppercase tracking-brand text-xs"
                  onClick={clearFilters}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
