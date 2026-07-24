import { useEffect, useMemo, useRef, useState } from 'react'
import { Search } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/common/ProductCard?card=v3'
import SectionHeading from '@/components/common/SectionHeading'
import FilterSidebar from '@/components/shop/FilterSidebar'
import SortBar from '@/components/shop/SortBar'
import { filterOptions, products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const getPriceMatch = (priceFilter, price) => {
  if (priceFilter === 'Under $50') return price < 50
  if (priceFilter === '$50-$80') return price >= 50 && price <= 80
  if (priceFilter === '$80+') return price > 80
  return true
}

const sortProducts = (items, sort) => {
  const sorted = [...items]

  switch (sort) {
    case 'Price: Low to High':
      return sorted.sort((a, b) => a.price - b.price)
    case 'Price: High to Low':
      return sorted.sort((a, b) => b.price - a.price)
    case 'Top Rated':
      return sorted.sort((a, b) => b.rating - a.rating)
    default:
      return sorted
  }
}

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const pageRef = useRef(null)
  const initialCategory = searchParams.get('category') || 'All'
  const initialSearch = searchParams.get('search') || ''
  const [searchValue, setSearchValue] = useState(initialSearch)
  const searchQuery = searchValue.trim().toLowerCase()
  const [filters, setFilters] = useState({
    category: filterOptions.category.includes(initialCategory) ? initialCategory : 'All',
    price: 'All',
    material: 'All',
  })
  const [sort, setSort] = useState('Featured')

  useEffect(() => {
    const nextCategory = searchParams.get('category') || 'All'
    const nextSearch = searchParams.get('search') || ''
    const normalizedCategory = filterOptions.category.includes(nextCategory) ? nextCategory : 'All'

    setFilters((current) =>
      current.category === normalizedCategory ? current : { ...current, category: normalizedCategory },
    )
    setSearchValue((current) => (current === nextSearch ? current : nextSearch))
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const visible = products.filter((product) => {
      const matchesCategory = filters.category === 'All' || product.category === filters.category
      const matchesPrice = getPriceMatch(filters.price, product.price)
      const matchesMaterial = filters.material === 'All' || product.material === filters.material
      const matchesSearch =
        !searchQuery ||
        `${product.name} ${product.category} ${product.type} ${product.description}`
          .toLowerCase()
          .includes(searchQuery)

      return matchesCategory && matchesPrice && matchesMaterial && matchesSearch
    })

    return sortProducts(visible, sort)
  }, [filters, sort, searchQuery])

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [filteredProducts])

  const handleFilterChange = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }))
  }

  const handleSearchChange = (value) => {
    setSearchValue(value)

    const nextParams = new URLSearchParams(searchParams)

    if (value.trim()) {
      nextParams.set('search', value.trim())
    } else {
      nextParams.delete('search')
    }

    setSearchParams(nextParams, { replace: true })
  }

  return (
    <div ref={pageRef} className="bg-velmora-ivory px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-velmora-line bg-velmora-pearl/60 px-6 py-8 shadow-velmora sm:px-8 lg:px-10 lg:py-10">
          <SectionHeading
            eyebrow="The Collection"
            title="Elevated demi-fine jewelry for every day and every gift"
            description="Browse bestselling earrings, softly sculpted huggies, and necklaces designed to be layered with ease."
          />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[300px_1fr]">
          <FilterSidebar filters={filters} options={filterOptions} onChange={handleFilterChange} />
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-velmora-line bg-white px-5 py-5 text-velmora-ink shadow-velmora">
              <label htmlFor="shop-search" className="text-xs font-medium uppercase tracking-[0.28em] text-velmora-mist">
                Search the collection
              </label>
              <div className="mt-4 flex items-center gap-3 rounded-full border border-velmora-line bg-velmora-pearl/60 px-4">
                <Search className="h-4 w-4 text-velmora-mist" />
                <input
                  id="shop-search"
                  value={searchValue}
                  onChange={(event) => handleSearchChange(event.target.value)}
                  placeholder="Search pieces"
                  className="h-12 w-full bg-transparent text-sm text-velmora-ink placeholder:text-velmora-mist focus:outline-none"
                />
              </div>
              <p className="mt-3 text-sm text-velmora-mist">Try amber, huggies, gift, or necklace.</p>
            </div>
            <SortBar value={sort} options={filterOptions.sort} onChange={setSort} count={filteredProducts.length} />
            {filteredProducts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-velmora-line bg-velmora-pearl/70 px-6 py-14 text-center shadow-velmora">
                <h3 className="font-display text-4xl text-velmora-ink">No pieces match just yet</h3>
                <p className="mt-4 text-sm leading-7 text-velmora-mist">
                  Try adjusting your filters to explore the full Velmora assortment.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopPage
