import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import ShopFilters from '@/components/shop/ShopFilters'
import { products } from '@/data/storeData'
import { useImageLoader } from '@/hooks/useImageLoader'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('All')
  const [sortValue, setSortValue] = useState('featured')
  const [mobileOpen, setMobileOpen] = useState(false)

  const categories = [...new Set(products.map((product) => product.category))]
  const materials = [...new Set(products.map((product) => product.material))]

  const filteredProducts = useMemo(() => {
    const priceMatch = (price) => {
      if (selectedPrice === 'Under $50') return price < 50
      if (selectedPrice === '$50 to $80') return price >= 50 && price <= 80
      if (selectedPrice === '$80+') return price > 80
      return true
    }

    const result = products.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      const matchesMaterial = selectedMaterial === 'All' || product.material === selectedMaterial
      const matchesPrice = priceMatch(product.price)
      return matchesCategory && matchesMaterial && matchesPrice
    })

    if (sortValue === 'price-low') return [...result].sort((a, b) => a.price - b.price)
    if (sortValue === 'price-high') return [...result].sort((a, b) => b.price - a.price)
    if (sortValue === 'rating') return [...result].sort((a, b) => b.rating - a.rating)
    return result
  }, [selectedCategory, selectedMaterial, selectedPrice, sortValue])

  const visibleIds = filteredProducts.map((product) => product.id).join('-')
  const containerRef = useImageLoader([visibleIds, sortValue, mobileOpen])

  return (
    <div ref={containerRef} className="page-shell py-28 pb-16 md:pb-24">
      <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
        <ShopFilters
          categories={categories}
          materials={materials}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedMaterial={selectedMaterial}
          setSelectedMaterial={setSelectedMaterial}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        <section>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Collection"
              title="Everyday demi-fine jewelry with editorial polish."
              description="Filter by silhouette, material, or price to find your next daily signature or gift-ready favorite."
            />
            <div className="flex items-center gap-3 self-start md:self-auto">
              <label htmlFor="sort" className="text-xs uppercase tracking-[0.26em] text-velmora-taupe">
                Sort
              </label>
              <select
                id="sort"
                value={sortValue}
                onChange={(event) => setSortValue(event.target.value)}
                className="rounded-full border border-velmora-sand bg-velmora-ivory px-4 py-3 text-sm text-velmora-ink outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between border-y border-velmora-sand py-4 text-xs uppercase tracking-[0.28em] text-velmora-taupe">
            <span>{filteredProducts.length} pieces</span>
            <span>Premium but accessible</span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="mt-10 rounded-[2rem] border border-dashed border-velmora-sand bg-velmora-ivory px-8 py-16 text-center">
              <p className="font-display text-4xl text-velmora-ink">No pieces match your filters.</p>
              <p className="mt-4 text-sm leading-7 text-velmora-taupe">Try broadening the price range or browsing all categories.</p>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
