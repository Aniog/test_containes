import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { useSearchParams } from 'react-router-dom'
import SectionIntro from '@/components/common/SectionIntro'
import ProductCard from '@/components/product/ProductCard'
import FilterSidebar from '@/components/shop/FilterSidebar'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const defaultFilters = {
  category: 'All',
  price: 'All',
  material: 'All',
}

const ShopPage = () => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [filters, setFilters] = useState({ ...defaultFilters, category: initialCategory })
  const [sortValue, setSortValue] = useState('featured')
  const containerRef = useRef(null)

  useEffect(() => {
    setFilters((current) => ({
      ...current,
      category: initialCategory,
    }))
  }, [initialCategory])

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [filters.category, filters.price, filters.material, sortValue])

  const filteredProducts = useMemo(() => {
    const matchesPriceBand = (product) => {
      if (filters.price === 'Under $50') return product.price < 50
      if (filters.price === '$50–$80') return product.price >= 50 && product.price <= 80
      if (filters.price === '$80+') return product.price > 80
      return true
    }

    const list = products.filter((product) => {
      const categoryMatch = filters.category === 'All' || product.category === filters.category
      const materialMatch = filters.material === 'All' || product.material === filters.material
      return categoryMatch && materialMatch && matchesPriceBand(product)
    })

    if (sortValue === 'price-asc') return [...list].sort((a, b) => a.price - b.price)
    if (sortValue === 'price-desc') return [...list].sort((a, b) => b.price - a.price)
    if (sortValue === 'rating-desc') return [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [filters, sortValue])

  const handleFilterChange = (key, value) => {
    setFilters((current) => ({
      ...current,
      [key]: value,
    }))
  }

  return (
    <div ref={containerRef} className="bg-ivory text-velvet">
      <section className="border-b border-velvet/10 bg-white pt-28 md:pt-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 md:px-10 xl:px-16">
          <SectionIntro
            eyebrow="Collection"
            title="The Velmora shop"
            description="A curated storefront of premium demi-fine jewelry, designed to be gifted beautifully and worn daily."
          />
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-eyebrow text-velvet/55">
            <span>{filteredProducts.length} styles available</span>
            <span className="h-3 w-px bg-velvet/15" />
            <span>Premium-but-accessible pricing</span>
          </div>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:px-10 lg:grid-cols-[18rem_1fr] xl:px-16">
        <FilterSidebar
          filters={filters}
          onFilterChange={handleFilterChange}
          sortValue={sortValue}
          onSortChange={setSortValue}
        />
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-velvet/10 pb-4 text-sm text-velvet/60">
            <p>Refined essentials for gifting and self-purchase.</p>
            <p>{filteredProducts.length} products</p>
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

export default ShopPage
