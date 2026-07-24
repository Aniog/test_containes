import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const { addItem } = useCart()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const activeCategory = searchParams.get('category') || 'all'
  const sortBy = searchParams.get('sort') || 'default'

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    return 0
  })

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [activeCategory, sortBy])

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  const setSort = (sort) => {
    if (sort === 'default') {
      searchParams.delete('sort')
    } else {
      searchParams.set('sort', sort)
    }
    setSearchParams(searchParams)
  }

  const handleQuickAdd = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-light pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-dark tracking-wide uppercase">The Collection</h1>
          <div className="mt-3 w-12 h-px bg-velmora-gold mx-auto" />
        </div>

        {/* Controls bar */}
        <div className="flex items-center justify-between mb-8 border-b border-stone-200 pb-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden font-sans text-sm tracking-[0.05em] uppercase text-velmora-dark flex items-center gap-2"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>

          {/* Desktop category filters */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setCategory('all')}
              className={`font-sans text-sm tracking-[0.05em] uppercase transition-colors duration-300 ${
                activeCategory === 'all' ? 'text-velmora-gold' : 'text-stone-500 hover:text-velmora-dark'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.slug)}
                className={`font-sans text-sm tracking-[0.05em] uppercase transition-colors duration-300 ${
                  activeCategory === cat.slug ? 'text-velmora-gold' : 'text-stone-500 hover:text-velmora-dark'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSort(e.target.value)}
            className="font-sans text-sm text-velmora-dark bg-transparent border border-stone-200 px-3 py-2 focus:border-velmora-gold focus:outline-none"
          >
            <option value="default">Sort by: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>

        {/* Mobile filter sidebar */}
        {sidebarOpen && (
          <div className="md:hidden mb-6 p-4 bg-velmora-cream border border-stone-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-sans text-sm tracking-[0.05em] uppercase text-velmora-dark">Filter by Category</h3>
              <button onClick={() => setSidebarOpen(false)} className="text-velmora-dark hover:text-velmora-gold">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setCategory('all')}
                className={`font-sans text-sm tracking-[0.05em] uppercase px-4 py-2 border transition-all ${
                  activeCategory === 'all' ? 'bg-velmora-gold text-velmora-dark border-velmora-gold' : 'text-velmora-dark border-stone-300'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.slug)}
                  className={`font-sans text-sm tracking-[0.05em] uppercase px-4 py-2 border transition-all ${
                    activeCategory === cat.slug ? 'bg-velmora-gold text-velmora-dark border-velmora-gold' : 'text-velmora-dark border-stone-300'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sorted.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="group block"
            >
              <div className="relative aspect-[3x4] overflow-hidden bg-velmora-cream">
                <img
                  data-strk-img-id={`shop-${product.imgId}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  data-strk-img-id={`shop-${product.imgId2}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <button
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="w-full bg-velmora-gold text-velmora-dark font-sans text-xs tracking-[0.1em] uppercase py-3 hover:bg-velmora-gold-light transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="mt-3 md:mt-4">
                <h3 id={product.titleId} className="font-serif text-sm md:text-base tracking-[0.15em] uppercase text-velmora-dark">
                  {product.name}
                </h3>
                <p id={product.descId} className="text-xs text-stone-500 font-sans mt-1 line-clamp-2 hidden md:block">
                  {product.description}
                </p>
                <p className="font-sans text-sm md:text-base font-medium text-velmora-dark mt-1">{formatPrice(product.price)}</p>
              </div>
            </Link>
          ))}
        </div>

        {sorted.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-velmora-dark">No products found in this category</p>
            <button
              onClick={() => setCategory('all')}
              className="mt-4 font-sans text-sm text-velmora-gold hover:text-velmora-gold-light underline"
            >
              View all products
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
