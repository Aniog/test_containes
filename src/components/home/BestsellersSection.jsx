import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function ProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    addItem(product, product.variants[0])
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-velmora-cream aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] [${product.descId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-velmora-obsidian text-velmora-ivory font-manrope text-[9px] uppercase tracking-widest px-2 py-0.5">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-velmora-gold text-velmora-obsidian font-manrope text-[9px] uppercase tracking-widest px-2 py-0.5">
              New
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={handleAdd}
            className="w-full bg-velmora-obsidian/90 backdrop-blur-sm text-velmora-ivory font-manrope text-[10px] uppercase tracking-widest py-3 flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-200"
          >
            <ShoppingBag className="w-3 h-3" />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="mt-3 px-0.5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3
              id={product.titleId}
              className="font-cormorant text-sm uppercase tracking-widest text-velmora-text leading-tight"
            >
              {product.name}
            </h3>
            <p
              id={product.descId}
              className="font-manrope text-xs text-velmora-muted mt-0.5"
            >
              {product.shortDescription}
            </p>
          </div>
          <span className="font-manrope text-sm text-velmora-text flex-shrink-0">${product.price}</span>
        </div>
        <div className="flex items-center gap-1 mt-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}`}
            />
          ))}
          <span className="font-manrope text-[10px] text-velmora-subtle ml-1">({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  )
}

export default function BestsellersSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-2">
              Most Loved
            </p>
            <h2 className="font-cormorant text-3xl md:text-5xl font-light text-velmora-text">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-manrope text-xs uppercase tracking-widest text-velmora-muted hover:text-velmora-gold transition-colors duration-200 flex items-center gap-2 self-start md:self-auto"
          >
            View All
            <span className="text-velmora-gold">→</span>
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
