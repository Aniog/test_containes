import React, { useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Star, SlidersHorizontal, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'
import { products, categories } from '@/data/products'
import { cn } from '@/lib/utils'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const [category, setCategory] = useState(initialCategory)
  const [sort, setSort] = useState('featured')
  const [priceRange, setPriceRange] = useState([0, 150])
  const [filtersOpen, setFiltersOpen] = useState(false)
  const { addItem, setDrawer } = useCart()

  const filtered = useMemo(() => {
    let result = products.slice()
    if (category !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === category.toLowerCase())
    }
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    if (sort === 'price-asc') result = result.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') result = result.sort((a, b) => b.price - a.price)
    if (sort === 'rating') result = result.sort((a, b) => b.rating - a.rating)
    return result
  }, [category, sort, priceRange])

  const handleCategoryChange = (value) => {
    setCategory(value)
    if (value === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', value)
    }
    setSearchParams(searchParams)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl tracking-wide text-[#1a1a1a]">Shop</h1>
          <p className="mt-1 text-sm text-[#1a1a1a]/70">{filtered.length} products</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-10 appearance-none rounded-full border border-[#f0f0f0] bg-white pl-4 pr-10 text-sm text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#c9a96e]"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-[#1a1a1a]/60 pointer-events-none" />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="md:hidden rounded-full"
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className={cn('md:block', filtersOpen ? 'block' : 'hidden')}>
          <div className="md:sticky md:top-24 space-y-6">
            <div>
              <h3 className="text-sm font-medium text-[#1a1a1a]">Category</h3>
              <div className="mt-3 space-y-2">
                {['all', ...categories.map(c => c.id)].map(value => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => handleCategoryChange(value)}
                    className={cn(
                      'block w-full text-left text-sm capitalize transition',
                      category === value ? 'text-[#c9a96e] font-medium' : 'text-[#1a1a1a]/70 hover:text-[#c9a96e]'
                    )}
                  >
                    {value === 'all' ? 'All' : value}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-[#1a1a1a]">Price</h3>
              <div className="mt-3 flex items-center gap-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="h-9 w-full rounded-lg border border-[#f0f0f0] px-3 text-sm text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#c9a96e]"
                />
                <span className="text-xs text-[#1a1a1a]/60">to</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="h-9 w-full rounded-lg border border-[#f0f0f0] px-3 text-sm text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#c9a96e]"
                />
              </div>
            </div>
          </div>
        </aside>

        <div className="md:col-span-3">
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-[#f0f0f0] p-10 text-center">
              <p className="text-sm text-[#1a1a1a]/70">No products match your filters.</p>
              <Button variant="accentOutline" className="mt-4 rounded-full" onClick={() => { handleCategoryChange('all'); setPriceRange([0, 150]); }}>
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filtered.map(product => (
                <div key={product.id} className="group relative rounded-xl border border-[#f0f0f0] bg-white p-3 transition hover:shadow-lg">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-[#f5f5f5]">
                      <img
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={`https://placehold.co/600x600/f5f5f5/1a1a1a?text=${encodeURIComponent(product.name)}`}
                      />
                      {product.badge && (
                        <span className="absolute left-3 top-3 rounded-full bg-[#c9a96e] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="mt-3">
                      <p className="text-xs text-[#1a1a1a]/60 uppercase tracking-wider">{product.category}</p>
                      <h3 className="mt-1 text-sm font-medium text-[#1a1a1a]">{product.name}</h3>
                      <div className="mt-1 flex items-center gap-1 text-[#c9a96e]">
                        <Star className="h-3.5 w-3.5 fill-current" />
                        <span className="text-xs font-medium">{product.rating}</span>
                        <span className="text-xs text-[#1a1a1a]/60">({product.reviewCount})</span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-[#1a1a1a]">${product.price}</p>
                    </div>
                  </Link>
                  <Button
                    variant="accent"
                    size="sm"
                    className="mt-3 w-full rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                    onClick={() => {
                      addItem({ id: product.id, name: product.name, price: product.price, image: product.images[0] })
                      setDrawer(true)
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shop
