import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import SectionHeading from '@/components/common/SectionHeading'
import FilterSidebar from '@/components/products/FilterSidebar'
import ProductCard from '@/components/products/ProductCard'
import { products } from '@/data/storefront'
import strkImgConfig from '@/strk-img-config.json'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating-desc' },
]

const matchPrice = (price, selectedPrice) => {
  if (selectedPrice === 'under-50') return price < 50
  if (selectedPrice === '50-80') return price >= 50 && price < 80
  if (selectedPrice === '80-plus') return price >= 80
  return true
}

const ShopPage = () => {
  const containerRef = useRef(null)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [selectedSort, setSelectedSort] = useState('featured')

  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))],
    [],
  )

  const materials = useMemo(
    () => [...new Set(products.map((product) => product.material))],
    [],
  )

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch =
        selectedCategories.length === 0 || selectedCategories.includes(product.category)
      const materialMatch =
        selectedMaterials.length === 0 || selectedMaterials.includes(product.material)

      return categoryMatch && materialMatch && matchPrice(product.price, selectedPrice)
    })

    if (selectedSort === 'price-asc') {
      return [...nextProducts].sort((a, b) => a.price - b.price)
    }

    if (selectedSort === 'price-desc') {
      return [...nextProducts].sort((a, b) => b.price - a.price)
    }

    if (selectedSort === 'rating-desc') {
      return [...nextProducts].sort((a, b) => b.rating - a.rating)
    }

    return nextProducts
  }, [selectedCategories, selectedMaterials, selectedPrice, selectedSort])

  const toggleCategory = (category) => {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    )
  }

  const toggleMaterial = (material) => {
    setSelectedMaterials((current) =>
      current.includes(material)
        ? current.filter((item) => item !== material)
        : [...current, material],
    )
  }

  const resetFilters = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setSelectedPrice('all')
    setSelectedSort('featured')
  }

  useEffect(() => {
    let disconnectImages
    const frameId = window.requestAnimationFrame(() => {
      disconnectImages = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof disconnectImages === 'function') {
        disconnectImages()
      }
    }
  }, [filteredProducts])

  return (
    <main ref={containerRef} className="px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="overflow-hidden rounded-[2.5rem] bg-velmora-ink px-6 py-12 text-velmora-cream sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr,0.8fr] lg:items-end">
            <div className="flex flex-col gap-4 text-left">
              <p className="eyebrow text-velmora-gold">Collection</p>
              <div className="space-y-4">
                <h1 className="font-display text-4xl text-velmora-cream sm:text-5xl">The Velmora shop</h1>
                <p className="max-w-2xl text-sm leading-7 text-velmora-cream/76 sm:text-base">
                  A curated storefront of demi-fine earrings, necklaces, and huggies designed to feel refined, wearable, and gift-ready.
                </p>
              </div>
            </div>
            <p className="text-sm leading-7 text-velmora-cream/76 lg:justify-self-end lg:text-right">
              Premium-but-accessible pieces between $30 and $120, with warm gold finishes, soft crystal accents, and silhouettes made for repeat wear.
            </p>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[300px,1fr]">
          <FilterSidebar
            categories={categories}
            materials={materials}
            selectedCategories={selectedCategories}
            selectedMaterials={selectedMaterials}
            selectedPrice={selectedPrice}
            onCategoryToggle={toggleCategory}
            onMaterialToggle={toggleMaterial}
            onPriceChange={setSelectedPrice}
            onReset={resetFilters}
          />

          <div className="space-y-6">
            <div className="flex flex-col gap-4 rounded-[2rem] border border-velmora-line bg-white px-5 py-4 shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-velmora-muted">
                Showing <span className="font-semibold text-velmora-ink">{filteredProducts.length}</span> pieces
              </p>
              <label className="flex items-center gap-3 text-sm text-velmora-muted">
                <span>Sort by</span>
                <select
                  value={selectedSort}
                  onChange={(event) => setSelectedSort(event.target.value)}
                  className="rounded-full border border-velmora-line bg-white px-4 py-3 text-sm text-velmora-ink outline-none transition duration-300 focus:border-velmora-gold"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {filteredProducts.length ? (
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-velmora-line bg-white px-6 py-16 text-center shadow-soft">
                <p className="eyebrow text-velmora-muted">No matches</p>
                <h2 className="mt-4 font-display text-4xl text-velmora-ink">Try a softer filter set</h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-velmora-muted">
                  Clear one or two filters to uncover more earrings, necklaces, and gifting pieces from the collection.
                </p>
                <button type="button" className="btn-secondary mt-8" onClick={resetFilters}>
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

export default ShopPage
