import React, { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { Button } from '@/components/ui/button'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || 'all'
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    let list = products
    if (categoryParam !== 'all') {
      list = list.filter((p) => p.category.toLowerCase() === categoryParam.toLowerCase())
    }
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [categoryParam, sort])

  const setCategory = (value) => {
    if (value === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', value)
    }
    setSearchParams(searchParams)
  }

  return (
    <main className="pt-24 md:pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-gold mb-2">Collection</p>
            <h1 className="section-title">
              {categoryParam === 'all' ? 'All Jewelry' : categoryParam}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileFiltersOpen((prev) => !prev)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-10 rounded-full border border-brand-border bg-white pl-4 pr-10 text-sm text-brand-text appearance-none focus:border-brand-gold focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          <aside className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
            <div className="md:sticky md:top-28 space-y-6">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-brand-text mb-3">Category</h3>
                <div className="space-y-2">
                  {['all', ...categories.map((c) => c.id)].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`block w-full text-left text-sm transition-colors ${
                        categoryParam === cat ? 'text-brand-gold font-semibold' : 'text-brand-muted hover:text-brand-text'
                      }`}
                    >
                      {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xs uppercase tracking-widest text-brand-text mb-3">Price</h3>
                <div className="space-y-2 text-sm text-brand-muted">
                  <p>Under $50</p>
                  <p>$50 - $80</p>
                  <p>$80 - $120</p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xs uppercase tracking-widest text-brand-text mb-3">Material</h3>
                <div className="space-y-2 text-sm text-brand-muted">
                  <p>18K Gold Plated</p>
                  <p>Crystal</p>
                  <p>Hypoallergenic</p>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl text-brand-text mb-2">No pieces found</p>
                <p className="text-sm text-brand-muted">Try adjusting your filters or browse all jewelry.</p>
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

function Separator() {
  return <div className="h-px w-full bg-brand-border" />
}