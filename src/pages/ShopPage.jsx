import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const CATEGORY_OPTIONS = ['All', 'Earrings', 'Necklaces', 'Huggies']
const PRICE_OPTIONS = [
  { value: 'all', label: 'All Prices' },
  { value: 'under50', label: 'Under $50' },
  { value: '50to80', label: '$50 – $80' },
  { value: 'over80', label: 'Over $80' },
]

function ShopProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.descId}] [${product.titleId}] jewelry detail`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      <button
        onClick={() => addItem(product)}
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-charcoal text-white text-xs font-sans tracking-widest uppercase px-6 py-2.5 flex items-center gap-2 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>

      <div className="mt-4 pointer-events-none">
        <Link to={`/product/${product.slug}`} className="pointer-events-auto">
          <h3
            id={product.titleId}
            className="font-serif text-sm uppercase tracking-ultrawide text-charcoal hover:text-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="text-xs text-stone-500 font-sans mt-1">{product.description}</p>
        <p className="text-sm font-sans font-medium text-charcoal mt-1.5">${product.price}</p>
      </div>
    </div>
  )
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFilters, setMobileFilters] = useState(false)
  const containerRef = useRef(null)

  const categoryParam = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(
    CATEGORY_OPTIONS.includes(categoryParam) ? categoryParam : 'All'
  )
  const [priceRange, setPriceRange] = useState('all')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    if (categoryParam && CATEGORY_OPTIONS.includes(categoryParam)) {
      setCategory(categoryParam)
    }
  }, [categoryParam])

  const filtered = useMemo(() => {
    let result = [...products]

    if (category !== 'All') {
      result = result.filter(p => p.category === category)
    }

    if (priceRange === 'under50') result = result.filter(p => p.price < 50)
    else if (priceRange === '50to80') result = result.filter(p => p.price >= 50 && p.price <= 80)
    else if (priceRange === 'over80') result = result.filter(p => p.price > 80)

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)
    else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating)

    return result
  }, [category, priceRange, sort])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [filtered])

  const handleCategoryChange = (cat) => {
    setCategory(cat)
    if (cat === 'All') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat.toLowerCase())
    }
    setSearchParams(searchParams)
  }

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs font-sans font-semibold tracking-ultrawide uppercase text-charcoal mb-4">Category</h3>
        <div className="space-y-2">
          {CATEGORY_OPTIONS.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`block w-full text-left text-sm font-sans py-1 transition-colors ${
                category === cat ? 'text-gold font-medium' : 'text-stone-600 hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs font-sans font-semibold tracking-ultrawide uppercase text-charcoal mb-4">Price</h3>
        <div className="space-y-2">
          {PRICE_OPTIONS.map(opt => (
            <button
              key={opt.value}
              onClick={() => setPriceRange(opt.value)}
              className={`block w-full text-left text-sm font-sans py-1 transition-colors ${
                priceRange === opt.value ? 'text-gold font-medium' : 'text-stone-600 hover:text-charcoal'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs font-sans font-semibold tracking-ultrawide uppercase text-charcoal mb-4">Material</h3>
        <p className="text-sm font-sans text-stone-500">18K Gold Plated</p>
      </div>
    </>
  )

  return (
    <div className="bg-cream-50 min-h-screen pt-24 md:pt-28">
      <div className="container-wide pb-16">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-charcoal">The Collection</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Mobile filter toggle */}
        <div className="flex items-center justify-between mb-8 lg:hidden">
          <button
            onClick={() => setMobileFilters(!mobileFilters)}
            className="flex items-center gap-2 text-xs font-sans tracking-wide uppercase text-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs font-sans tracking-wide text-stone-600 bg-transparent border border-stone-300 px-3 py-2"
          >
            {SORT_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Mobile filters dropdown */}
        {mobileFilters && (
          <div className="lg:hidden bg-white border border-stone-200 p-6 mb-6 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-sans font-semibold tracking-ultrawide uppercase text-charcoal">Filters</h3>
              <button onClick={() => setMobileFilters(false)} className="text-stone-400">
                <X className="w-4 h-4" />
              </button>
            </div>
            <FilterContent />
          </div>
        )}

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1" ref={containerRef}>
            {/* Desktop sort */}
            <div className="hidden lg:flex items-center justify-end mb-6">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-xs font-sans tracking-wide text-stone-600 bg-transparent border border-stone-300 px-3 py-2"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-stone-500 font-sans text-sm">No products match your filters.</p>
                <button
                  onClick={() => { setCategory('All'); setPriceRange('all'); setSearchParams({}) }}
                  className="mt-4 btn-secondary text-xs"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
