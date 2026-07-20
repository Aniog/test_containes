import React, { useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const [category, setCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    let list = [...products]
    if (category !== 'all') list = list.filter((p) => p.category === category)
    if (priceRange === 'under50') list = list.filter((p) => p.price < 50)
    if (priceRange === '50to80') list = list.filter((p) => p.price >= 50 && p.price <= 80)
    if (priceRange === 'over80') list = list.filter((p) => p.price > 80)
    if (material === 'gold') list = list.filter((p) => p.variants.includes('gold'))
    if (material === 'silver') list = list.filter((p) => p.variants.includes('silver'))
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating)
    return list
  }, [category, priceRange, material, sort])

  const clearFilters = () => {
    setCategory('all')
    setPriceRange('all')
    setMaterial('all')
    setSort('featured')
    setSearchParams({})
  }

  const FilterSection = ({ title, children }) => (
    <div className="border-b border-brand-line pb-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-ink">{title}</p>
      <div className="mt-3 space-y-2">{children}</div>
    </div>
  )

  const PillButton = ({ active, onClick, children }) => (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
        active ? 'border-brand-ink bg-brand-ink text-white' : 'border-brand-line text-brand-ink hover:border-brand-ink'
      }`}
    >
      {children}
    </button>
  )

  return (
    <div className="bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif text-3xl font-semibold text-brand-ink">Shop</h1>
            <p className="mt-1 text-sm text-brand-muted">{filtered.length} products</p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-10 rounded-full border border-brand-line bg-white px-3 text-xs text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <Button variant="outline" className="md:hidden" onClick={() => setMobileFiltersOpen(true)}>
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <aside className="hidden md:block">
            <div className="space-y-6">
              <FilterSection title="Category">
                <div className="flex flex-wrap gap-2">
                  <PillButton active={category === 'all'} onClick={() => setCategory('all')}>All</PillButton>
                  {categories.map((cat) => (
                    <PillButton key={cat.id} active={category === cat.id} onClick={() => setCategory(cat.id)}>
                      {cat.label}
                    </PillButton>
                  ))}
                </div>
              </FilterSection>
              <FilterSection title="Price">
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: 'all', label: 'All' },
                    { key: 'under50', label: 'Under $50' },
                    { key: '50to80', label: '$50 – $80' },
                    { key: 'over80', label: 'Over $80' },
                  ].map((opt) => (
                    <PillButton key={opt.key} active={priceRange === opt.key} onClick={() => setPriceRange(opt.key)}>
                      {opt.label}
                    </PillButton>
                  ))}
                </div>
              </FilterSection>
              <FilterSection title="Material">
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: 'all', label: 'All' },
                    { key: 'gold', label: 'Gold' },
                    { key: 'silver', label: 'Silver' },
                  ].map((opt) => (
                    <PillButton key={opt.key} active={material === opt.key} onClick={() => setMaterial(opt.key)}>
                      {opt.label}
                    </PillButton>
                  ))}
                </div>
              </FilterSection>
              <Button variant="ghost" className="text-xs" onClick={clearFilters}>Clear filters</Button>
            </div>
          </aside>

          <div className="md:col-span-3">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {filtered.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="group">
                  <div className="overflow-hidden rounded-2xl bg-brand-warm">
                    <img src={product.images[0]} alt={product.name} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-serif text-base font-medium uppercase tracking-wide text-brand-ink">{product.name}</h3>
                    <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="mt-10 text-center text-sm text-brand-muted">No products match your filters.</div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 md:hidden">
          <div className="absolute inset-y-0 right-0 w-full max-w-xs bg-white shadow-lift">
            <div className="flex items-center justify-between border-b border-brand-line px-4 py-3">
              <p className="text-sm font-semibold text-brand-ink">Filters</p>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-brand-muted">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-6 overflow-y-auto px-4 py-4">
              <FilterSection title="Category">
                <div className="flex flex-wrap gap-2">
                  <PillButton active={category === 'all'} onClick={() => setCategory('all')}>All</PillButton>
                  {categories.map((cat) => (
                    <PillButton key={cat.id} active={category === cat.id} onClick={() => setCategory(cat.id)}>
                      {cat.label}
                    </PillButton>
                  ))}
                </div>
              </FilterSection>
              <FilterSection title="Price">
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: 'all', label: 'All' },
                    { key: 'under50', label: 'Under $50' },
                    { key: '50to80', label: '$50 – $80' },
                    { key: 'over80', label: 'Over $80' },
                  ].map((opt) => (
                    <PillButton key={opt.key} active={priceRange === opt.key} onClick={() => setPriceRange(opt.key)}>
                      {opt.label}
                    </PillButton>
                  ))}
                </div>
              </FilterSection>
              <FilterSection title="Material">
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: 'all', label: 'All' },
                    { key: 'gold', label: 'Gold' },
                    { key: 'silver', label: 'Silver' },
                  ].map((opt) => (
                    <PillButton key={opt.key} active={material === opt.key} onClick={() => setMaterial(opt.key)}>
                      {opt.label}
                    </PillButton>
                  ))}
                </div>
              </FilterSection>
              <div className="flex gap-2">
                <Button className="flex-1" variant="accent" onClick={() => setMobileFiltersOpen(false)}>Show results</Button>
                <Button className="flex-1" variant="outline" onClick={clearFilters}>Clear</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Shop
