import { useEffect, useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X, ShoppingBag } from 'lucide-react'
import { CATEGORIES } from '@/data/products'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import StarRating from '@/components/products/StarRating'
import { useImageLoader } from '@/hooks/useImageLoader'
import { useCart } from '@/context/CartContext'

const SHOP_PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    category: 'earrings',
    tone: ['gold', 'silver'],
    imgId: 'shop-vivid-aura',
    hoverImgId: 'shop-vivid-aura-hover',
    titleId: 'shop-title-vivid-aura',
    descId: 'shop-desc-vivid-aura',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    category: 'necklaces',
    tone: ['gold'],
    imgId: 'shop-flora-nectar',
    hoverImgId: 'shop-flora-nectar-hover',
    titleId: 'shop-title-flora-nectar',
    descId: 'shop-desc-flora-nectar',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 210,
    category: 'huggies',
    tone: ['gold', 'silver'],
    imgId: 'shop-sphere-huggies',
    hoverImgId: 'shop-sphere-huggies-hover',
    titleId: 'shop-title-sphere-huggies',
    descId: 'shop-desc-sphere-huggies',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    rating: 4.6,
    reviewCount: 76,
    category: 'earrings',
    tone: ['gold'],
    imgId: 'shop-amber-lace',
    hoverImgId: 'shop-amber-lace-hover',
    titleId: 'shop-title-amber-lace',
    descId: 'shop-desc-amber-lace',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    rating: 5.0,
    reviewCount: 52,
    category: 'sets',
    tone: ['gold'],
    imgId: 'shop-heirloom-set',
    hoverImgId: 'shop-heirloom-set-hover',
    titleId: 'shop-title-heirloom-set',
    descId: 'shop-desc-heirloom-set',
  },
]

const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 49.99 },
  { label: '$50 — $80', min: 50, max: 80 },
  { label: 'Over $80', min: 80.01, max: Infinity },
]

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
]

function useHover() {
  const [hovered, setHovered] = useState(false)
  return {
    hovered,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  }
}

export default function Shop() {
  const [searchParams] = useSearchParams()
  const containerRef = useImageLoader()

  const initialCategory = searchParams.get('category') || ''

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategories([cat])
  }, [searchParams])

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const { addItem } = useCart()

  const filteredCount = useMemo(() => {
    return SHOP_PRODUCTS.filter((p) => {
      const categoryMatch =
        selectedCategories.length === 0 || selectedCategories.includes(p.category)
      const priceMatch =
        !selectedPrice ||
        (p.price >= selectedPrice.min && p.price <= selectedPrice.max)
      return categoryMatch && priceMatch
    }).length
  }, [selectedCategories, selectedPrice])

  const activeFiltersCount =
    selectedCategories.length + (selectedPrice ? 1 : 0)

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xs uppercase tracking-[0.14em] font-semibold text-espresso mb-4">
          Category
        </h3>
        <div className="space-y-2.5">
          {CATEGORIES.map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="w-4 h-4 accent-gold border-warm"
              />
              <span className="text-sm text-stone capitalize group-hover:text-espresso transition-colors">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-[0.14em] font-semibold text-espresso mb-4">
          Price
        </h3>
        <div className="space-y-2.5">
          {PRICE_RANGES.map((range) => (
            <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={selectedPrice?.label === range.label}
                onChange={() => setSelectedPrice(range)}
                className="w-4 h-4 accent-gold border-warm"
              />
              <span className="text-sm text-stone group-hover:text-espresso transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-[0.14em] font-semibold text-espresso mb-4">
          Material
        </h3>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked
            readOnly
            className="w-4 h-4 accent-gold border-warm"
          />
          <span className="text-sm text-stone group-hover:text-espresso transition-colors">
            18K Gold Plated
          </span>
        </label>
      </div>

      {activeFiltersCount > 0 && (
        <button
          type="button"
          onClick={() => {
            setSelectedCategories([])
            setSelectedPrice(null)
          }}
          className="text-xs uppercase tracking-[0.12em] text-gold font-semibold hover:text-gold-dark transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-cream" ref={containerRef}>
      <Navbar />
      <main className="pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
              The Collection
            </h1>
            <p className="mt-3 text-sm text-stone max-w-md mx-auto">
              Elegant demi-fine jewelry designed for layering, gifting, and
              treasuring.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <FilterPanel />
            </aside>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-warm">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-espresso"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="w-4 h-4 bg-gold text-cream rounded-full text-[10px] flex items-center justify-center">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>

                <p className="text-sm text-stone hidden sm:block">
                  {filteredCount} {filteredCount === 1 ? 'piece' : 'pieces'}
                </p>

                <div className="flex items-center gap-2">
                  <label
                    htmlFor="sort"
                    className="text-xs uppercase tracking-[0.12em] text-stone hidden sm:block"
                  >
                    Sort by
                  </label>
                  <select
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="bg-transparent border border-warm text-espresso text-xs uppercase tracking-[0.1em] py-2 pl-3 pr-8 outline-none focus:border-gold"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {filteredCount === 0 ? (
                <div className="text-center py-20">
                  <p className="font-serif text-xl text-espresso">
                    No pieces match your filters.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategories([])
                      setSelectedPrice(null)
                    }}
                    className="mt-4 text-xs uppercase tracking-[0.12em] text-gold font-semibold"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {SHOP_PRODUCTS.filter((p) => {
                    const categoryMatch =
                      selectedCategories.length === 0 ||
                      selectedCategories.includes(p.category)
                    const priceMatch =
                      !selectedPrice ||
                      (p.price >= selectedPrice.min && p.price <= selectedPrice.max)
                    return categoryMatch && priceMatch
                  })
                    .sort((a, b) => {
                      if (sort === 'price-asc') return a.price - b.price
                      if (sort === 'price-desc') return b.price - a.price
                      if (sort === 'rating') return b.rating - a.rating
                      return 0
                    })
                    .map((product) => {
                      const hover = useHover()
                      return (
                        <article key={product.id} {...hover} className="group">
                          <Link
                            to={`/product/${product.id}`}
                            className="block relative overflow-hidden bg-taupe aspect-[3/4]"
                          >
                            <img
                              data-strk-img-id={product.imgId}
                              data-strk-img={`[${product.descId}] [${product.titleId}]`}
                              data-strk-img-ratio="3x4"
                              data-strk-img-width="600"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                              alt={product.name}
                              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                                hover.hovered ? 'opacity-0' : 'opacity-100'
                              }`}
                            />
                            <img
                              data-strk-img-id={product.hoverImgId}
                              data-strk-img={`[${product.descId}] [${product.titleId}]`}
                              data-strk-img-ratio="3x4"
                              data-strk-img-width="600"
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                              alt={product.name}
                              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                                hover.hovered ? 'opacity-100' : 'opacity-0'
                              }`}
                            />
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault()
                                addItem(product, product.tone[0])
                              }}
                              className="absolute bottom-3 left-3 right-3 bg-cream text-espresso py-2.5 uppercase tracking-[0.12em] text-[10px] font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-espresso hover:text-cream"
                            >
                              <ShoppingBag className="w-3.5 h-3.5" />
                              Quick Add
                            </button>
                          </Link>
                          <div className="mt-4 text-center">
                            <h3
                              id={product.titleId}
                              className="font-serif text-sm tracking-[0.18em] uppercase text-espresso"
                            >
                              <Link
                                to={`/product/${product.id}`}
                                className="hover:text-gold transition-colors"
                              >
                                {product.name}
                              </Link>
                            </h3>
                            <p id={product.descId} className="text-xs text-stone mt-1 capitalize">
                              {product.category}
                            </p>
                            <div className="flex items-center justify-center gap-2 mt-2">
                              <StarRating rating={product.rating} size={12} />
                              <span className="text-sm font-medium text-espresso">
                                ${product.price}
                              </span>
                            </div>
                          </div>
                        </article>
                      )
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="flex-1 bg-espresso/40"
            onClick={() => setMobileFiltersOpen(false)}
            aria-hidden="true"
          />
          <aside className="w-80 bg-cream h-full shadow-xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-lg tracking-[0.12em] uppercase text-espresso">
                Filters
              </h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X className="w-5 h-5 text-espresso" />
              </button>
            </div>
            <FilterPanel />
          </aside>
        </div>
      )}
    </div>
  )
}
