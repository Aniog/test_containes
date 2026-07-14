import React, { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] bg-velmora-linen overflow-hidden mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[${product.descId}] [${product.titleId}] warm gold jewelry product`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-velmora-black text-white text-[10px] font-sans font-semibold tracking-widest-xl uppercase">
            {product.badge}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product)
            }}
            className="w-full py-2.5 bg-velmora-gold text-white text-[11px] font-sans font-semibold tracking-widest-xl uppercase hover:bg-velmora-gold-dark transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <h3 className="font-serif text-sm tracking-widest text-velmora-charcoal group-hover:text-velmora-gold transition-colors duration-300">
        {product.name}
      </h3>
      <div className="flex items-center gap-2 mt-1.5">
        <Star size={12} className="fill-velmora-gold text-velmora-gold" />
        <span className="text-xs font-sans text-velmora-slate">{product.rating}</span>
        <span className="text-xs text-velmora-silver">({product.reviewCount})</span>
      </div>
      <p className="font-sans text-sm font-semibold text-velmora-black mt-1.5">
        {formatPrice(product.price)}
        {product.originalPrice && (
          <span className="ml-2 text-velmora-silver line-through font-normal">
            {formatPrice(product.originalPrice)}
          </span>
        )}
      </p>
    </Link>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'all'

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [activeCategory, sortBy])

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  return (
    <div className="bg-velmora-cream min-h-screen">
      {/* Page header */}
      <div className="pt-24 md:pt-28 pb-8 text-center bg-velmora-linen border-b border-velmora-ivory">
        <h1 className="font-serif text-3xl md:text-4xl text-velmora-black mb-2">Shop All</h1>
        <p className="font-sans text-sm text-velmora-slate">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} curated for you
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 font-sans text-xs tracking-widest-xl uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent font-sans text-xs tracking-widest-xl uppercase text-velmora-charcoal pr-6 cursor-pointer focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-slate" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="font-sans text-xs font-semibold tracking-widest-xl uppercase text-velmora-charcoal mb-4">
                  Category
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setCategory('all')}
                      className={`font-sans text-sm transition-colors ${
                        activeCategory === 'all'
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-slate hover:text-velmora-charcoal'
                      }`}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => setCategory(cat.id)}
                        className={`font-sans text-sm transition-colors ${
                          activeCategory === cat.id
                            ? 'text-velmora-gold font-medium'
                            : 'text-velmora-slate hover:text-velmora-charcoal'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="font-sans text-xs font-semibold tracking-widest-xl uppercase text-velmora-charcoal mb-4">
                  Price
                </h3>
                <ul className="space-y-2 font-sans text-sm text-velmora-slate">
                  <li>Under $50</li>
                  <li>$50 — $80</li>
                  <li>$80+</li>
                </ul>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-sans text-xs font-semibold tracking-widest-xl uppercase text-velmora-charcoal mb-4">
                  Material
                </h3>
                <ul className="space-y-2 font-sans text-sm text-velmora-slate">
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-velmora-gold" />
                    18K Gold Plated
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gray-300" />
                    Sterling Silver
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-charcoal mb-2">No pieces found</p>
                <p className="font-sans text-sm text-velmora-slate">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
