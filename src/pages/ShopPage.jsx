import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { useSearchParams } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/storeData'
import { useCart } from '@/context/CartContext'
import PageHero from '@/components/storefront/PageHero'
import ProductCard from '@/components/storefront/ProductCard'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating-desc' },
]

const categories = ['all', 'earrings', 'necklaces', 'huggies', 'gift sets']
const materials = ['all', '18k gold plated', 'gold plated with crystal accents', 'gold filigree', '18k gold plated set']
const priceRanges = [
  { label: 'All prices', value: 'all' },
  { label: '$30–$50', value: '30-50' },
  { label: '$51–$80', value: '51-80' },
  { label: '$81–$120', value: '81-120' },
]

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addToCart } = useCart()
  const [sortBy, setSortBy] = useState('featured')
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all',
  )
  const [selectedMaterial, setSelectedMaterial] = useState('all')
  const [selectedPrice, setSelectedPrice] = useState('all')
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      const result = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      cleanup = typeof result === 'function' ? result : () => {}
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [sortBy, selectedCategory, selectedMaterial, selectedPrice])

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch =
        selectedCategory === 'all' ||
        product.category.toLowerCase() === selectedCategory
      const materialMatch =
        selectedMaterial === 'all' ||
        product.material.toLowerCase() === selectedMaterial

      const priceMatch =
        selectedPrice === 'all' ||
        (selectedPrice === '30-50' && product.price >= 30 && product.price <= 50) ||
        (selectedPrice === '51-80' && product.price >= 51 && product.price <= 80) ||
        (selectedPrice === '81-120' && product.price >= 81 && product.price <= 120)

      return categoryMatch && materialMatch && priceMatch
    })

    const sorted = [...filtered]

    if (sortBy === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price)
    }
    if (sortBy === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price)
    }
    if (sortBy === 'rating-desc') {
      sorted.sort((a, b) => b.rating - a.rating)
    }

    return sorted
  }, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  const applyCategory = (category) => {
    setSelectedCategory(category)
    const next = new URLSearchParams(searchParams)
    if (category === 'all') {
      next.delete('category')
    } else {
      next.set('category', category)
    }
    setSearchParams(next)
  }

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Shop Velmora"
        title="Premium demi-fine essentials designed to be layered, gifted, and kept close."
        description="Explore our full edit of earrings, necklaces, and huggies in a palette that flatters warm gold beautifully."
      />

      <section className="velmora-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="h-fit rounded-[2rem] border border-velmora-sand bg-velmora-card p-6 shadow-soft" id="collections">
            <div className="space-y-8">
              <div>
                <h2 className="text-xs uppercase tracking-luxe text-velmora-gold">Category</h2>
                <div className="mt-4 space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => applyCategory(category)}
                      className={`block text-left text-sm uppercase tracking-widest transition ${
                        selectedCategory === category
                          ? 'text-velmora-ink'
                          : 'text-velmora-smoke hover:text-velmora-ink'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-luxe text-velmora-gold">Price</h2>
                <div className="mt-4 space-y-3">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      type="button"
                      onClick={() => setSelectedPrice(range.value)}
                      className={`block text-left text-sm uppercase tracking-widest transition ${
                        selectedPrice === range.value
                          ? 'text-velmora-ink'
                          : 'text-velmora-smoke hover:text-velmora-ink'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-luxe text-velmora-gold">Material</h2>
                <div className="mt-4 space-y-3">
                  {materials.map((material) => (
                    <button
                      key={material}
                      type="button"
                      onClick={() => setSelectedMaterial(material)}
                      className={`block text-left text-sm uppercase tracking-widest transition ${
                        selectedMaterial === material
                          ? 'text-velmora-ink'
                          : 'text-velmora-smoke hover:text-velmora-ink'
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <div className="flex flex-col gap-4 rounded-[2rem] border border-velmora-sand bg-velmora-card p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm uppercase tracking-widest text-velmora-smoke">
                {filteredProducts.length} products
              </p>
              <label className="relative inline-flex items-center">
                <span className="sr-only">Sort products</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="h-12 appearance-none rounded-full border border-velmora-sand bg-velmora-ivory px-5 pr-12 text-sm uppercase tracking-widest text-velmora-ink focus:border-velmora-gold focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 h-4 w-4 text-velmora-smoke" />
              </label>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage
