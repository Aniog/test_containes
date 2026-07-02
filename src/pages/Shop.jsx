import React from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import FilterSidebar from '@/components/shop/FilterSidebar'
import { products } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

const matchesPriceFilter = (price, selectedPrice) => {
  if (selectedPrice === 'under-50') return price < 50
  if (selectedPrice === '50-80') return price >= 50 && price <= 80
  if (selectedPrice === 'over-80') return price > 80
  return true
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = React.useRef(null)
  const initialCategory = searchParams.get('category') || 'all'
  const [selectedCategory, setSelectedCategory] = React.useState(initialCategory)
  const [selectedPrice, setSelectedPrice] = React.useState('all')
  const [selectedMaterial, setSelectedMaterial] = React.useState('all')
  const [sort, setSort] = React.useState('featured')

  React.useEffect(() => {
    const category = searchParams.get('category') || 'all'
    setSelectedCategory(category)
  }, [searchParams])

  React.useEffect(() => {
    setSearchParams((current) => {
      const nextParams = new URLSearchParams(current)

      if (selectedCategory === 'all') {
        nextParams.delete('category')
      } else {
        nextParams.set('category', selectedCategory)
      }

      return nextParams
    })
  }, [selectedCategory, setSearchParams])

  const filteredProducts = React.useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch =
        selectedCategory === 'all' || product.category === selectedCategory
      const materialMatch =
        selectedMaterial === 'all' || product.material === selectedMaterial
      const priceMatch = matchesPriceFilter(product.price, selectedPrice)

      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'price-asc') return [...nextProducts].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') return [...nextProducts].sort((a, b) => b.price - a.price)
    if (sort === 'rating-desc') return [...nextProducts].sort((a, b) => b.rating - a.rating)
    return nextProducts
  }, [selectedCategory, selectedMaterial, selectedPrice, sort])

  useStrkImages(containerRef, [selectedCategory, selectedMaterial, selectedPrice, sort])

  return (
    <div ref={containerRef} className="bg-stone-100 text-stone-900">
      <section className="border-b border-stone-200 bg-stone-950 px-4 pb-12 pt-28 text-stone-50 sm:px-6 lg:px-8 lg:pb-16 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200">Collection</p>
          <h1 className="mt-4 font-display text-5xl text-stone-50 sm:text-6xl">
            Shop Velmora
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-stone-300 sm:text-base">
            A curated edit of demi-fine earrings, necklaces, huggies, and giftable sets in warm precious finishes.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[18rem_minmax(0,1fr)] lg:px-8 lg:py-16">
        <FilterSidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          selectedMaterial={selectedMaterial}
          setSelectedMaterial={setSelectedMaterial}
          sort={sort}
          setSort={setSort}
        />

        <div className="space-y-6">
          <div className="flex flex-col gap-4 rounded-[1.75rem] border border-stone-200 bg-stone-50 px-5 py-5 text-stone-900 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Available now</p>
              <h2 className="mt-2 font-display text-3xl text-stone-950">
                {filteredProducts.length} polished finds
              </h2>
            </div>
            <p className="text-sm leading-7 text-stone-600">
              Premium-but-accessible pieces priced for self-purchase and thoughtful gifting.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
