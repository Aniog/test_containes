import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/store/SectionHeading.jsx'
import ProductGrid from '@/components/store/ProductGrid.jsx'
import FilterSidebar from '@/components/store/FilterSidebar.jsx'
import { products } from '@/data/storeData.js'

const matchesPrice = (price, selectedPrice) => {
  if (selectedPrice === 'Under $50') return price < 50
  if (selectedPrice === '$50 - $80') return price >= 50 && price <= 80
  if (selectedPrice === '$80+') return price > 80
  return true
}

const sortProducts = (items, sortBy) => {
  const cloned = [...items]

  if (sortBy === 'price-low') return cloned.sort((a, b) => a.price - b.price)
  if (sortBy === 'price-high') return cloned.sort((a, b) => b.price - a.price)
  if (sortBy === 'rating') return cloned.sort((a, b) => b.rating - a.rating)
  return cloned
}

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const containerRef = useRef(null)

  useEffect(() => {
    const category = searchParams.get('category') || 'All'
    setSelectedCategory(category)
  }, [searchParams])

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  const filteredProducts = useMemo(() => {
    const visible = products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory
      const matchesMaterial =
        selectedMaterial === 'All' || product.material === selectedMaterial
      return matchesCategory && matchesMaterial && matchesPrice(product.price, selectedPrice)
    })

    return sortProducts(visible, sortBy)
  }, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  const handleFilterChange = (nextValues) => {
    const nextCategory = nextValues.category ?? selectedCategory
    const nextMaterial = nextValues.material ?? selectedMaterial
    const nextPrice = nextValues.price ?? selectedPrice

    setSelectedCategory(nextCategory)
    setSelectedMaterial(nextMaterial)
    setSelectedPrice(nextPrice)

    const nextParams = new URLSearchParams(searchParams)
    if (nextCategory && nextCategory !== 'All') {
      nextParams.set('category', nextCategory)
    } else {
      nextParams.delete('category')
    }
    setSearchParams(nextParams, { replace: true })
  }

  return (
    <main ref={containerRef} className="pt-28 sm:pt-32">
      <section className="page-shell pb-10">
        <div className="rounded-[32px] border border-velmora-sand/70 bg-white/60 px-6 py-10 shadow-velmora sm:px-10 sm:py-14">
          <SectionHeading
            eyebrow="The collection"
            title="Demi-fine jewelry with an editorial warmth"
            description="Explore gift-worthy earrings, luminous necklaces, and polished huggies in a premium yet approachable price range."
          />
        </div>
      </section>

      <section className="page-shell pb-20 sm:pb-24">
        <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <FilterSidebar
              selectedCategory={selectedCategory}
              selectedMaterial={selectedMaterial}
              selectedPrice={selectedPrice}
              onChange={handleFilterChange}
            />
          </div>

          <div>
            <div className="mb-6 flex flex-col gap-4 rounded-[24px] border border-velmora-sand/70 bg-white/60 p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-velmora-mocha">
                Showing <span className="font-semibold text-velmora-ink">{filteredProducts.length}</span>{' '}
                curated pieces
              </p>
              <label className="flex items-center gap-3 text-sm text-velmora-mocha">
                <span>Sort by</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="rounded-full border border-velmora-sand bg-velmora-ivory px-4 py-2 text-sm text-velmora-ink outline-none focus:border-velmora-gold"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to high</option>
                  <option value="price-high">Price: High to low</option>
                  <option value="rating">Top rated</option>
                </select>
              </label>
            </div>

            {filteredProducts.length ? (
              <ProductGrid products={filteredProducts} titleId="shop-grid-title" />
            ) : (
              <div className="rounded-[28px] border border-velmora-sand/70 bg-white/70 px-6 py-14 text-center shadow-velmora-soft">
                <h2 className="text-3xl text-velmora-ink">No pieces match those filters</h2>
                <p className="mt-3 text-sm leading-7 text-velmora-mocha">
                  Try broadening your material or price selection to see more of the collection.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ShopPage
