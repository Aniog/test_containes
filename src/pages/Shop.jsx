import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { products } from '@/data/products'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

const categories = ['Earrings', 'Necklaces', 'Huggies']
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || ''
  const [activeCategory, setActiveCategory] = useState(categoryParam)
  const [priceRange, setPriceRange] = useState([0, 150])
  const [sort, setSort] = useState('featured')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    let result = products.slice()

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory)
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
    }

    if (sort === 'price-asc') result = [...result].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') result = [...result].sort((a, b) => b.price - a.price)
    if (sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating)

    return result
  }, [activeCategory, priceRange, sort, search])

  const handleCategoryChange = (value) => {
    setActiveCategory(value)
    if (value) {
      setSearchParams({ category: value })
    } else {
      setSearchParams({})
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="font-serif text-3xl text-brand-ink md:text-4xl">Shop</h1>
          <p className="mt-2 text-sm text-brand-muted">Quiet luxury for everyday moments.</p>
        </div>

        <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search pieces..."
            className="md:w-64"
          />
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="md:w-48">
              <SelectValue placeholder="Sort by" />
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

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr]">
        <aside className="space-y-6">
          <div>
            <Label className="text-xs uppercase tracking-widest text-brand-ink">Category</Label>
            <div className="mt-3 flex flex-col gap-2">
              <button
                onClick={() => handleCategoryChange('')}
                className={`text-left text-sm ${
                  !activeCategory ? 'text-brand-ink' : 'text-brand-muted hover:text-brand-ink'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`text-left text-sm ${
                    activeCategory === cat ? 'text-brand-ink' : 'text-brand-muted hover:text-brand-ink'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <Label className="text-xs uppercase tracking-widest text-brand-ink">Price</Label>
            <div className="mt-3 flex items-center gap-3">
              <Input
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="h-9"
              />
              <span className="text-brand-muted">—</span>
              <Input
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="h-9"
              />
            </div>
          </div>
        </aside>

        <div>
          {filtered.length === 0 ? (
            <div className="py-20 text-center text-sm text-brand-muted">No pieces match your filters.</div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {filtered.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="group">
                  <div className="aspect-[3x4] overflow-hidden rounded-md bg-brand-warm">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="text-xs uppercase tracking-widest text-brand-ink">{product.name}</p>
                    <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}