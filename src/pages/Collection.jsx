import { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories, priceRanges } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

function FilterSidebar({ selectedCategory, setSelectedCategory, selectedPriceRange, setSelectedPriceRange, selectedMaterial, setSelectedMaterial, onClose }) {
  const materials = ['Gold', 'Silver']

  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs font-sans tracking-widest uppercase text-brand-cream mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`block text-sm w-full text-left py-1 transition-colors ${
              !selectedCategory ? 'text-brand-gold' : 'text-brand-cream/60 hover:text-brand-cream'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                selectedCategory === cat.id ? 'text-brand-gold' : 'text-brand-cream/60 hover:text-brand-cream'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs font-sans tracking-widest uppercase text-brand-cream mb-4">Price</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedPriceRange(null)}
            className={`block text-sm w-full text-left py-1 transition-colors ${
              !selectedPriceRange ? 'text-brand-gold' : 'text-brand-cream/60 hover:text-brand-cream'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedPriceRange(range)}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                selectedPriceRange?.label === range.label ? 'text-brand-gold' : 'text-brand-cream/60 hover:text-brand-cream'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs font-sans tracking-widest uppercase text-brand-cream mb-4">Material</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedMaterial(null)}
            className={`block text-sm w-full text-left py-1 transition-colors ${
              !selectedMaterial ? 'text-brand-gold' : 'text-brand-cream/60 hover:text-brand-cream'
            }`}
          >
            All Materials
          </button>
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                selectedMaterial === mat ? 'text-brand-gold' : 'text-brand-cream/60 hover:text-brand-cream'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile close */}
      {onClose && (
        <button
          onClick={onClose}
          className="w-full py-3 border border-brand-gold text-brand-gold text-sm tracking-wider uppercase hover:bg-brand-gold hover:text-brand-black transition-colors md:hidden"
        >
          Apply Filters
        </button>
      )}
    </div>
  )
}

function SortDropdown({ sort, setSort }) {
  const [open, setOpen] = useState(false)
  const options = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
    { value: 'newest', label: 'Newest' },
  ]

  const selectedLabel = options.find((o) => o.value === sort)?.label || 'Featured'

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm text-brand-cream/60 hover:text-brand-cream transition-colors"
      >
        Sort: <span className="text-brand-cream">{selectedLabel}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 z-20 bg-brand-graphite border border-brand-divider/10 min-w-[200px] shadow-xl">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => { setSort(option.value); setOpen(false) }}
                className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                  sort === option.value
                    ? 'text-brand-gold bg-brand-gold/5'
                    : 'text-brand-cream/60 hover:text-brand-cream hover:bg-brand-charcoal'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function CollectionProductCard({ product }) {
  const { addItem } = useCart()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square bg-brand-graphite overflow-hidden">
          <img
            data-strk-img-id={`col-${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {product.badge && (
            <span className="absolute top-3 left-3 px-3 py-1 bg-brand-gold text-brand-black text-[10px] font-semibold tracking-wider uppercase">
              {product.badge}
            </span>
          )}

          <div
            className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full py-3 bg-brand-charcoal/90 backdrop-blur-sm text-brand-cream text-xs font-semibold tracking-wider uppercase hover:bg-brand-gold hover:text-brand-black transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>

        <div className="mt-4 space-y-1">
          <h3 className="font-serif text-lg tracking-wide text-brand-cream group-hover:text-brand-gold transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center justify-between pt-1">
            <span className="text-lg font-serif text-brand-gold">{formatPrice(product.price)}</span>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
              <span className="text-xs text-brand-muted">{product.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default function Collection() {
  const [searchParams] = useSearchParams()
  const containerRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedPriceRange, setSelectedPriceRange] = useState(null)
  const [selectedMaterial, setSelectedMaterial] = useState(null)
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Read category from URL params
  useEffect(() => {
    const urlCategory = searchParams.get('category')
    if (urlCategory && categories.some((c) => c.id === urlCategory)) {
      setSelectedCategory(urlCategory)
    }
  }, [searchParams])

  useEffect(() => {
    document.body.style.overflow = mobileFiltersOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileFiltersOpen])

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (selectedPriceRange) {
      result = result.filter(
        (p) => p.price >= selectedPriceRange.min && p.price < selectedPriceRange.max
      )
    }

    if (selectedMaterial) {
      result = result.filter((p) => p.variants.includes(selectedMaterial))
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.reverse()
        break
      default:
        break
    }

    return result
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sort])

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [filteredProducts])

  const activeFilterCount = [selectedCategory, selectedPriceRange, selectedMaterial].filter(Boolean).length

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-charcoal pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <nav className="text-xs text-brand-muted tracking-wider mb-6">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-cream/60">Shop All</span>
        </nav>

        <div className="flex items-end justify-between">
          <div>
            <h1 className="font-serif text-4xl md:text-heading text-brand-cream">
              {selectedCategory
                ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop All'
                : 'Shop All'}
            </h1>
            <p className="text-sm text-brand-muted mt-2">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <SortDropdown sort={sort} setSort={setSort} />

            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-brand-divider/20 text-sm text-brand-cream/60 hover:text-brand-cream transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 bg-brand-gold text-brand-black text-[10px] font-semibold rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Active filters */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-gold/10 text-brand-gold text-xs tracking-wider"
              >
                {categories.find((c) => c.id === selectedCategory)?.name}
                <X className="w-3 h-3" />
              </button>
            )}
            {selectedPriceRange && (
              <button
                onClick={() => setSelectedPriceRange(null)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-gold/10 text-brand-gold text-xs tracking-wider"
              >
                {selectedPriceRange.label}
                <X className="w-3 h-3" />
              </button>
            )}
            {selectedMaterial && (
              <button
                onClick={() => setSelectedMaterial(null)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-gold/10 text-brand-gold text-xs tracking-wider"
              >
                {selectedMaterial}
                <X className="w-3 h-3" />
              </button>
            )}
            <button
              onClick={() => {
                setSelectedCategory(null)
                setSelectedPriceRange(null)
                setSelectedMaterial(null)
              }}
              className="text-xs text-brand-muted hover:text-brand-cream underline transition-colors"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <FilterSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
              selectedMaterial={selectedMaterial}
              setSelectedMaterial={setSelectedMaterial}
            />
          </aside>

          {/* Product grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <CollectionProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-brand-cream/60 mb-2">No pieces found</p>
                <p className="text-sm text-brand-muted">
                  Try adjusting your filters or{' '}
                  <button
                    onClick={() => {
                      setSelectedCategory(null)
                      setSelectedPriceRange(null)
                      setSelectedMaterial(null)
                    }}
                    className="text-brand-gold underline"
                  >
                    view all jewelry
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-brand-black/60" onClick={() => setMobileFiltersOpen(false)} />
        <div
          className={`absolute top-0 left-0 bottom-0 w-80 bg-brand-charcoal p-6 pt-16 overflow-y-auto transition-transform duration-300 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button
            onClick={() => setMobileFiltersOpen(false)}
            className="absolute top-4 right-4 p-2 text-brand-cream/60 hover:text-brand-cream"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="font-serif text-xl text-brand-cream mb-6">Filters</h2>
          <FilterSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
            selectedMaterial={selectedMaterial}
            setSelectedMaterial={setSelectedMaterial}
            onClose={() => setMobileFiltersOpen(false)}
          />
        </div>
      </div>
    </div>
  )
}
