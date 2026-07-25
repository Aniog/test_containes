import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { SlidersHorizontal } from 'lucide-react'
import FilterSidebar from '../components/storefront/FilterSidebar'
import ProductCard from '../components/storefront/ProductCard'
import SectionHeader from '../components/storefront/SectionHeader'
import { products } from '../data/storefront'
import strkImgConfig from '../strk-img-config.json'

const categories = ['Earrings', 'Necklaces', 'Huggies']
const materials = ['18K Gold Plated', '14K Gold Vermeil']

const toggleValue = (values, value) =>
  values.includes(value) ? values.filter((item) => item !== value) : [...values, value]

function priceMatches(product, priceFilter) {
  if (priceFilter === 'under-50') return product.price < 50
  if (priceFilter === '50-80') return product.price >= 50 && product.price <= 80
  if (priceFilter === '80-120') return product.price > 80 && product.price <= 120
  return true
}

function sortProducts(list, sortValue) {
  const copy = [...list]

  if (sortValue === 'price-asc') {
    return copy.sort((a, b) => a.price - b.price)
  }

  if (sortValue === 'price-desc') {
    return copy.sort((a, b) => b.price - a.price)
  }

  if (sortValue === 'name') {
    return copy.sort((a, b) => a.name.localeCompare(b.name))
  }

  return copy
}

function ShopPage({ mode }) {
  const [searchParams] = useSearchParams()
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [priceFilter, setPriceFilter] = useState('all')
  const [sortValue, setSortValue] = useState('featured')
  const [searchValue, setSearchValue] = useState(searchParams.get('q') ?? '')
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const category = searchParams.get('category')
    setSelectedCategories(category ? [category] : [])
    setSearchValue(searchParams.get('q') ?? '')
  }, [searchParams])

  const visibleProducts = useMemo(() => {
    const query = searchValue.trim().toLowerCase()

    const filtered = products.filter((product) => {
      const matchesQuery =
        !query ||
        [product.name, product.category, product.material, product.shortDescription]
          .join(' ')
          .toLowerCase()
          .includes(query)

      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category)
      const matchesMaterial =
        selectedMaterials.length === 0 || selectedMaterials.includes(product.material)

      return (
        matchesQuery &&
        matchesCategory &&
        matchesMaterial &&
        priceMatches(product, priceFilter)
      )
    })

    return sortProducts(filtered, sortValue)
  }, [priceFilter, searchValue, selectedCategories, selectedMaterials, sortValue])

  const imageDependency = visibleProducts.map((product) => product.slug).join('|')
  const containerRef = useRef(null)
  const heading = mode === 'collections' ? 'Signature collections' : 'Shop Velmora'
  const description =
    mode === 'collections'
      ? 'A polished edit of gifting favorites, everyday icons, and statement silhouettes.'
      : 'Refined demi-fine jewelry for layering, gifting, and daily shine.'

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [imageDependency])


  return (
    <div ref={containerRef} className="bg-ivory px-4 pb-20 pt-28 sm:px-6 lg:px-10 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-[2.5rem] border border-mist bg-glow px-6 py-10 shadow-whisper sm:px-10 lg:px-12">
          <SectionHeader
            eyebrow={mode === 'collections' ? 'Collections' : 'Shop'}
            id="collection-heading"
            title={heading}
            description={description}
          />
          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="w-full lg:max-w-md">
              <span className="sr-only">Search products</span>
              <input
                type="search"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Search the collection"
                className="w-full rounded-full border border-mist bg-ivory px-5 py-4 text-sm text-ink outline-none transition-colors duration-300 ease-editorial placeholder:text-truffle focus:border-champagne"
              />
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => setShowFilters((current) => !current)}
                className="flex items-center justify-center gap-2 rounded-full border border-mist px-5 py-4 text-sm uppercase tracking-editorial text-ink transition-colors duration-300 ease-editorial hover:bg-shell lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
              <label>
                <span className="sr-only">Sort products</span>
                <select
                  value={sortValue}
                  onChange={(event) => setSortValue(event.target.value)}
                  className="w-full rounded-full border border-mist bg-ivory px-5 py-4 text-sm text-ink outline-none transition-colors duration-300 ease-editorial focus:border-champagne"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Alphabetical</option>
                </select>
              </label>
            </div>
          </div>
        </section>

        <div className="mt-10 grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)]">
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block lg:self-start lg:sticky lg:top-28`}>
            <FilterSidebar
              categories={categories}
              materials={materials}
              selectedCategories={selectedCategories}
              selectedMaterials={selectedMaterials}
              selectedPrice={priceFilter}
              onCategoryToggle={(value) => setSelectedCategories((current) => toggleValue(current, value))}
              onMaterialToggle={(value) => setSelectedMaterials((current) => toggleValue(current, value))}
              onPriceChange={setPriceFilter}
              onClear={() => {
                setSelectedCategories([])
                setSelectedMaterials([])
                setPriceFilter('all')
                setSearchValue('')
              }}
            />
          </div>

          <section>
            <div className="flex items-center justify-between gap-4 border-b border-mist pb-5">
              <p className="text-xs uppercase tracking-editorial text-truffle">
                {visibleProducts.length} {visibleProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <p className="text-xs uppercase tracking-editorial text-truffle">
                Premium but accessible · $30 to $120
              </p>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard key={product.slug} product={product} sectionTitleId="collection-heading" />
              ))}
            </div>
            {visibleProducts.length === 0 ? (
              <div className="mt-10 rounded-[2rem] border border-mist bg-glow px-6 py-12 text-center shadow-whisper">
                <h3 className="font-display text-4xl text-ink">No matches yet</h3>
                <p className="mt-4 text-sm leading-7 text-truffle">
                  Try removing a filter or searching for earrings, necklaces, or gifting.
                </p>
              </div>
            ) : null}
          </section>
        </div>
      </div>
    </div>
  )
}

export default ShopPage
