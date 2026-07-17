import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/shared/ProductCard'
import SectionHeader from '@/components/shared/SectionHeader'
import FilterSidebar from '@/components/shop/FilterSidebar'
import SortSelect from '@/components/shop/SortSelect'
import {
  categoryFilters,
  materialFilters,
  products,
} from '@/data/products'
import { useImageLoader } from '@/lib/useImageLoader'

const sortProducts = (items, sortBy) => {
  if (sortBy === 'price-asc') {
    return [...items].sort((left, right) => left.price - right.price)
  }

  if (sortBy === 'price-desc') {
    return [...items].sort((left, right) => right.price - left.price)
  }

  if (sortBy === 'rating') {
    return [...items].sort((left, right) => right.rating - left.rating)
  }

  return items
}

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || 'All'
  const [selectedCategory, setSelectedCategory] = useState(
    categoryFilters.includes(categoryParam) ? categoryParam : 'All',
  )
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [priceCap, setPriceCap] = useState(120)
  const [sortBy, setSortBy] = useState('featured')
  const containerRef = useRef(null)

  useEffect(() => {
    setSelectedCategory(
      categoryFilters.includes(categoryParam) ? categoryParam : 'All',
    )
  }, [categoryParam])

  useEffect(() => {
    const nextParams = new URLSearchParams(searchParams)
    if (selectedCategory === 'All') {
      nextParams.delete('category')
    } else {
      nextParams.set('category', selectedCategory)
    }

    if (nextParams.toString() !== searchParams.toString()) {
      setSearchParams(nextParams, { replace: true })
    }
  }, [searchParams, selectedCategory, setSearchParams])

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory
      const matchesMaterial =
        selectedMaterial === 'All' || product.materialGroup === selectedMaterial
      const matchesPrice = product.price <= priceCap

      return matchesCategory && matchesMaterial && matchesPrice
    })

    return sortProducts(filtered, sortBy)
  }, [priceCap, selectedCategory, selectedMaterial, sortBy])

  useImageLoader(containerRef, [selectedCategory, selectedMaterial, priceCap, sortBy])

  return (
    <main ref={containerRef} className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
        <div className="space-y-6">
          <SectionHeader
            eyebrow="Shop"
            title="A polished edit of demi-fine signatures."
            description="Filter by category, material, or price to find the piece that fits your mood, your stack, or your gifting list."
          />
          <FilterSidebar
            categories={categoryFilters}
            materials={materialFilters}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedMaterial={selectedMaterial}
            setSelectedMaterial={setSelectedMaterial}
            priceCap={priceCap}
            setPriceCap={setPriceCap}
          />
        </div>

        <div>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm uppercase tracking-[0.28em] text-velvet-700">
              {filteredProducts.length} pieces
            </p>
            <SortSelect value={sortBy} onChange={setSortBy} />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ShopPage
