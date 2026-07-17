import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard'
import ShopFilters from '@/components/shop/ShopFilters'
import SectionHeading from '@/components/shared/SectionHeading'
import { materials, products } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

const sortOptions = {
  featured: 'Featured',
  priceAsc: 'Price: Low to High',
  priceDesc: 'Price: High to Low',
  rating: 'Top Rated',
}

function ShopPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [sortBy, setSortBy] = useState('featured')
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const containerRef = useStrkImages([selectedCategory, selectedMaterial, selectedPrice, sortBy])

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'All')
  }, [searchParams])

  const availableCategories = useMemo(
    () => Array.from(new Set(products.map((product) => product.category))),
    [],
  )

  const filteredProducts = useMemo(() => {
    const next = products.filter((product) => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory
      const materialMatch = selectedMaterial === 'All' || product.material === selectedMaterial
      const priceMatch = selectedPrice === null || product.price <= selectedPrice

      return categoryMatch && materialMatch && priceMatch
    })

    if (sortBy === 'priceAsc') {
      return [...next].sort((a, b) => a.price - b.price)
    }

    if (sortBy === 'priceDesc') {
      return [...next].sort((a, b) => b.price - a.price)
    }

    if (sortBy === 'rating') {
      return [...next].sort((a, b) => b.rating - a.rating)
    }

    return next
  }, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  return (
    <div ref={containerRef} className="bg-ivory pt-28 text-velvet md:pt-32">
      <section className="mx-auto max-w-7xl px-5 pb-10 md:px-8 lg:px-10">
        <div className="grid gap-8 rounded-luxe border border-pearl bg-white/50 p-6 shadow-card md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Collection"
              title="A refined jewelry wardrobe, ready to gift or keep"
              description="Quietly luminous pieces designed for everyday polish, warm layering, and elevated gifting within a premium-accessible range."
            />
            <p className="text-sm leading-7 text-smoke">
              Explore earrings, necklaces, huggies, and gifting sets in softly sculpted silhouettes.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-luxe border border-pearl bg-ivory p-5">
              <p className="text-xs uppercase tracking-luxe text-smoke">Range</p>
              <p className="mt-3 font-serif text-3xl text-velvet">$30–$120</p>
            </div>
            <div className="rounded-luxe border border-pearl bg-ivory p-5">
              <p className="text-xs uppercase tracking-luxe text-smoke">Finish</p>
              <p className="mt-3 font-serif text-3xl text-velvet">Warm Gold</p>
            </div>
            <div className="rounded-luxe border border-pearl bg-ivory p-5">
              <p className="text-xs uppercase tracking-luxe text-smoke">For</p>
              <p className="mt-3 font-serif text-3xl text-velvet">Gift & Self</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 md:px-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-10 lg:pb-24">
        <ShopFilters
          categories={availableCategories}
          materials={materials}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedMaterial={selectedMaterial}
          onMaterialChange={setSelectedMaterial}
          selectedPrice={selectedPrice}
          onPriceChange={setSelectedPrice}
          isMobileOpen={isMobileOpen}
          onToggleMobile={() => setIsMobileOpen((current) => !current)}
        />

        <div className="space-y-6">
          <div className="flex flex-col gap-4 rounded-full border border-pearl bg-white/70 px-5 py-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs uppercase tracking-luxe text-smoke">
              {filteredProducts.length} piece{filteredProducts.length === 1 ? '' : 's'} available
            </p>
            <label className="flex items-center gap-3 text-xs uppercase tracking-luxe text-smoke">
              Sort
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="rounded-full border border-pearl bg-ivory px-4 py-2 text-xs uppercase tracking-luxe text-velvet outline-none"
              >
                {Object.entries(sortOptions).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} idPrefix="shop-grid" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage
