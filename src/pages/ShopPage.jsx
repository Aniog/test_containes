import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies']
const priceOptions = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
]
const materialOptions = ['All', 'Gold', 'Silver']
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
]

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3x4] overflow-hidden bg-ivory">
          <img
            data-strk-img-id={`shop-${product.images[0].imgId}`}
            data-strk-img={`[${product.images[0].descId}] [${product.images[0].titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover img-crossfade ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`shop-${product.images[1].imgId}`}
            data-strk-img={`[${product.images[1].descId}] [${product.images[1].titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover img-crossfade ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      <button
        onClick={() => addItem(product)}
        className={`absolute bottom-3 left-3 right-3 font-sans text-[11px] tracking-wide uppercase bg-warm-black/90 text-text-light py-2.5 flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>

      <div className="mt-3">
        <h3
          id={`shop-${product.images[0].titleId}`}
          className="font-serif text-sm tracking-extra-wide uppercase text-text-primary"
        >
          {product.name}
        </h3>
        <p id={`shop-${product.images[0].descId}`} className="sr-only">
          {product.description}
        </p>
        <p className="mt-1 font-sans text-sm text-text-secondary">${product.price}</p>
      </div>
    </div>
  )
}

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const containerRef = useRef(null)

  const [category, setCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState(0)
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setCategory(initialCategory)
  }, [initialCategory])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [category, priceRange, material, sort])

  const filtered = useMemo(() => {
    let result = [...products]

    if (category !== 'All') {
      result = result.filter((p) => p.category === category)
    }

    const price = priceOptions[priceRange]
    result = result.filter((p) => p.price >= price.min && p.price < price.max)

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)

    return result
  }, [category, priceRange, material, sort])

  const FilterContent = () => (
    <>
      {/* Category */}
      <div>
        <h4 className="font-sans text-xs tracking-super-wide uppercase text-text-primary mb-3">
          Category
        </h4>
        <div className="flex flex-col gap-2">
          {categoryOptions.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`font-sans text-sm text-left transition-colors duration-300 ${
                category === cat ? 'text-gold' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs tracking-super-wide uppercase text-text-primary mb-3">
          Price
        </h4>
        <div className="flex flex-col gap-2">
          {priceOptions.map((opt, i) => (
            <button
              key={opt.label}
              onClick={() => setPriceRange(i)}
              className={`font-sans text-sm text-left transition-colors duration-300 ${
                priceRange === i ? 'text-gold' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-sans text-xs tracking-super-wide uppercase text-text-primary mb-3">
          Material
        </h4>
        <div className="flex flex-col gap-2">
          {materialOptions.map((mat) => (
            <button
              key={mat}
              onClick={() => setMaterial(mat)}
              className={`font-sans text-sm text-left transition-colors duration-300 ${
                material === mat ? 'text-gold' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </>
  )

  return (
    <div className="pt-24 md:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-text-primary">
            The Collection
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 border-b border-sand pb-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-wide uppercase text-text-secondary"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block font-sans text-xs text-text-muted">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent font-sans text-xs tracking-wide uppercase text-text-secondary pr-6 cursor-pointer focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-text-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8" ref={containerRef}>
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="flex flex-col gap-8 sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-text-secondary">No pieces match your filters</p>
                <button
                  onClick={() => { setCategory('All'); setPriceRange(0); setMaterial('All'); }}
                  className="mt-4 font-sans text-xs tracking-wide uppercase text-gold hover:text-gold-dark transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 bg-cream z-50 shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg tracking-wide text-text-primary">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-text-secondary hover:text-text-primary"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              <FilterContent />
            </div>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mt-8 w-full font-sans text-xs tracking-super-wide uppercase bg-gold text-warm-black py-3 hover:bg-gold-light transition-colors duration-300"
            >
              Apply Filters
            </button>
          </div>
        </>
      )}
    </div>
  )
}
