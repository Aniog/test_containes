import { useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/shared/ProductCard'
import SectionHeading from '@/components/shared/SectionHeading'
import ShopFilters from '@/components/shop/ShopFilters'
import { products } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [maxPrice, setMaxPrice] = useState(120)
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const containerRef = useRef(null)

  const visibleProducts = useMemo(() => {
    let nextProducts = [...products]

    if (selectedCategory !== 'All') {
      nextProducts = nextProducts.filter((product) => product.category === selectedCategory)
    }

    if (selectedMaterials.length) {
      nextProducts = nextProducts.filter((product) => selectedMaterials.includes(product.material))
    }

    nextProducts = nextProducts.filter((product) => product.price <= maxPrice)

    if (sortBy === 'price-low') {
      nextProducts.sort((a, b) => a.price - b.price)
    }

    if (sortBy === 'price-high') {
      nextProducts.sort((a, b) => b.price - a.price)
    }

    if (sortBy === 'rating') {
      nextProducts.sort((a, b) => b.rating - a.rating)
    }

    return nextProducts
  }, [maxPrice, selectedCategory, selectedMaterials, sortBy])

  useImageLoader(containerRef, [selectedCategory, maxPrice, selectedMaterials.join(','), sortBy, visibleProducts.length])

  const toggleMaterial = (material) => {
    setSelectedMaterials((current) =>
      current.includes(material)
        ? current.filter((item) => item !== material)
        : [...current, material],
    )
  }

  return (
    <div ref={containerRef} className="section-shell pt-32 pb-20 sm:pb-24">
      <div className="space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Collection"
            title="A refined edit of demi-fine gold jewelry"
            description="Filter by silhouette, material, or price to find the pieces that fit your daily rotation."
            align="left"
          />
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setShowFilters((open) => !open)}
              className="inline-flex items-center gap-2 rounded-full border border-champagne px-5 py-3 text-sm text-espresso lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="h-12 rounded-full border border-champagne bg-pearl px-5 text-sm text-espresso focus:border-gold focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className={`lg:col-span-3 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <ShopFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              maxPrice={maxPrice}
              onPriceChange={setMaxPrice}
              selectedMaterials={selectedMaterials}
              onMaterialToggle={toggleMaterial}
            />
          </div>
          <div className="lg:col-span-9">
            <div className="mb-6 flex items-center justify-between border-b border-champagne pb-4 text-sm text-mocha">
              <span>{visibleProducts.length} products</span>
              <span>Premium-but-accessible from $30–$120</span>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} scopeId="shop-grid" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
