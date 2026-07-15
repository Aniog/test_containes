import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { StarRating } from '@/components/ui/StarRating'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function Bestsellers() {
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-widest text-velvet-500 mb-3">Curated for You</p>
          <h2 className="font-serif text-4xl md:text-5xl text-obsidian-800 font-light">Bestsellers</h2>
          <div className="w-12 h-px bg-velvet-400 mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={addItem} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="font-sans text-xs uppercase tracking-widest text-obsidian-600 hover:text-velvet-500 transition-colors border-b border-obsidian-300 hover:border-velvet-500 pb-0.5"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = (e) => {
    e.preventDefault()
    onAddToCart(product)
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
      <div className="relative aspect-[3/4] bg-velvet-100 overflow-hidden mb-3">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry close up detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Tags */}
        {product.tags?.includes('new') && (
          <span className="absolute top-2 left-2 bg-obsidian-800 text-cream text-[9px] font-sans uppercase tracking-widest px-2 py-0.5">
            New
          </span>
        )}
        {product.tags?.includes('bestseller') && !product.tags?.includes('new') && (
          <span className="absolute top-2 left-2 bg-velvet-500 text-cream text-[9px] font-sans uppercase tracking-widest px-2 py-0.5">
            Best
          </span>
        )}

        {/* Quick add */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-0 left-0 right-0 bg-obsidian-800/90 text-cream text-[10px] font-sans uppercase tracking-widest py-3 flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        >
          <ShoppingBag size={12} />
          {added ? 'Added!' : 'Quick Add'}
        </button>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <p id={product.titleId} className="font-serif text-sm text-obsidian-800 uppercase tracking-widest leading-tight group-hover:text-velvet-600 transition-colors">
          {product.name}
        </p>
        <p id={product.descId} className="sr-only">{product.shortDesc}</p>
        <StarRating rating={product.rating} count={product.reviewCount} size={11} />
        <p className="font-sans text-sm text-obsidian-600">${product.price}</p>
      </div>
    </Link>
  )
}
