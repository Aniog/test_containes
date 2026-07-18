import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/store/ProductCard.jsx'
import SectionHeading from '@/components/store/SectionHeading.jsx'
import { products } from '@/data/products.js'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceOptions = ['All', '30-60', '60-90', '90-120']
const materialOptions = ['All', '18K Gold Plated', 'Gold Plated Crystal', 'Textured Gold Finish', 'Gift-Boxed Gold Set']

const sorters = {
  featured: (items) => items,
  priceAsc: (items) => [...items].sort((a, b) => a.price - b.price),
  priceDesc: (items) => [...items].sort((a, b) => b.price - a.price),
  topRated: (items) => [...items].sort((a, b) => b.rating - a.rating),
}

const Shop = () => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'

  const [filters, setFilters] = useState({
    category: categoryOptions.includes(initialCategory) ? initialCategory : 'All',
    priceRange: 'All',
    material: 'All',
  })
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    const categoryFromQuery = searchParams.get('category') || 'All'

    setFilters((current) => ({
      ...current,
      category: categoryOptions.includes(categoryFromQuery) ? categoryFromQuery : 'All',
    }))
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatches = filters.category === 'All' || product.category === filters.category
      const priceMatches = filters.priceRange === 'All' || product.priceRange === filters.priceRange
      const materialMatches = filters.material === 'All' || product.material === filters.material

      return categoryMatches && priceMatches && materialMatches
    })

    return sorters[sort](filtered)
  }, [filters, sort])

  return (
    <div className="bg-ivory pb-20 pt-28 md:pt-32">
      <div className="content-wrap">
        <SectionHeading
          kicker="Velmora shop"
          title="A curated edit of demi-fine jewelry"
          description="Filter by category, price, or material to find your everyday signature piece or next gift."
        />

        <div className="grid gap-8 lg:grid-cols-[17rem_1fr]">
          <aside className="surface-card h-fit p-5">
            <div className="space-y-6">
              <div>
                <p className="mb-3 text-xs uppercase tracking-luxe text-champagne">Category</p>
                <div className="flex flex-wrap gap-2">
                  {categoryOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFilters((current) => ({ ...current, category: option }))}
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${filters.category === option ? 'border-champagne bg-champagne/10 text-velvet' : 'border-ink/10 text-ink/70 hover:border-champagne'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-3 block text-xs uppercase tracking-luxe text-champagne" htmlFor="price-filter">Price</label>
                <select
                  id="price-filter"
                  value={filters.priceRange}
                  onChange={(event) => setFilters((current) => ({ ...current, priceRange: event.target.value }))}
                  className="w-full rounded-full border border-ink/10 bg-ivory px-4 py-3 text-sm text-ink focus:border-champagne focus:outline-none"
                >
                  {priceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option === 'All' ? 'All prices' : `$${option.replace('-', '–$')}`}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-3 block text-xs uppercase tracking-luxe text-champagne" htmlFor="material-filter">Material</label>
                <select
                  id="material-filter"
                  value={filters.material}
                  onChange={(event) => setFilters((current) => ({ ...current, material: event.target.value }))}
                  className="w-full rounded-full border border-ink/10 bg-ivory px-4 py-3 text-sm text-ink focus:border-champagne focus:outline-none"
                >
                  {materialOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-4 rounded-luxe border border-ink/10 bg-mist px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-ink/70">Showing <span className="font-medium text-velvet">{filteredProducts.length}</span> refined pieces</p>
              <div className="flex items-center gap-3">
                <label htmlFor="sort-products" className="text-xs uppercase tracking-[0.18em] text-ink/60">Sort</label>
                <select
                  id="sort-products"
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="rounded-full border border-ink/10 bg-ivory px-4 py-2.5 text-sm text-ink focus:border-champagne focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="topRated">Top Rated</option>
                </select>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
