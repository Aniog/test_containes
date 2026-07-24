import { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductFilters from '@/components/shop/ProductFilters'
import ProductGrid from '@/components/shop/ProductGrid'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose, SheetBody } from '@/components/ui/Sheet'
import { Separator } from '@/components/ui/Separator'

const sortOptions = {
  featured: 'Featured',
  'price-asc': 'Price: Low to High',
  'price-desc': 'Price: High to Low',
  'name-asc': 'Name: A-Z',
  rating: 'Top Rated',
}

function matchPrice(product, ranges) {
  if (ranges.length === 0) return true
  return ranges.some((range) => {
    if (range === 'under-50') return product.price < 50
    if (range === '50-75') return product.price >= 50 && product.price <= 75
    if (range === '75-100') return product.price >= 75 && product.price <= 100
    if (range === 'over-100') return product.price > 100
    return true
  })
}

function matchMaterial(product, materials) {
  if (materials.length === 0) return true
  const normalized = product.materials.toLowerCase()
  return materials.some((m) => normalized.includes(m.replace(/-/g, ' ')))
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState('featured')
  const [filters, setFilters] = useState({ categories: [], materials: [], priceRanges: [] })
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filters, sort])

  const categoryParam = searchParams.get('category')
  useEffect(() => {
    if (categoryParam) {
      setFilters((prev) => ({
        ...prev,
        categories: prev.categories.includes(categoryParam) ? prev.categories : [...prev.categories, categoryParam],
      }))
    }
  }, [categoryParam])

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const categoryMatch = filters.categories.length === 0 || filters.categories.includes(p.category)
      const materialMatch = matchMaterial(p, filters.materials)
      const priceMatch = matchPrice(p, filters.priceRanges)
      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'price-asc') result = [...result].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') result = [...result].sort((a, b) => b.price - a.price)
    if (sort === 'name-asc') result = [...result].sort((a, b) => a.name.localeCompare(b.name))
    if (sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating)

    return result
  }, [filters, sort])

  return (
    <div ref={containerRef} className="min-h-screen bg-background pb-20 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-accent">
            The Collection
          </p>
          <h1 className="font-serif text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Shop All Jewelry
          </h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Desktop filters */}
          <div className="hidden lg:block lg:w-64 lg:shrink-0">
            <ProductFilters filters={filters} setFilters={setFilters} />
          </div>

          <div className="flex-1">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} piece{filteredProducts.length !== 1 && 's'}
              </p>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  className="lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filters
                </Button>
                <Select value={sort} onChange={(e) => setSort(e.target.value)} className="w-48">
                  {Object.entries(sortOptions).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </Select>
              </div>
            </div>

            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>

      {/* Mobile filters */}
      <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen} side="right">
        <SheetContent className="w-full max-w-sm">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
            <SheetClose onClick={() => setMobileFiltersOpen(false)} />
          </SheetHeader>
          <Separator className="my-4" />
          <SheetBody>
            <ProductFilters filters={filters} setFilters={setFilters} />
          </SheetBody>
        </SheetContent>
      </Sheet>
    </div>
  )
}
