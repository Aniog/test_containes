import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className="w-3 h-3" viewBox="0 0 12 12" fill="none">
          <path
            d="M6 1l1.236 2.506L10 3.927l-2 1.95.472 2.75L6 7.25l-2.472 1.377L4 5.877l-2-1.95 2.764-.421L6 1z"
            fill={i <= Math.round(rating) ? '#C9A96E' : 'none'}
            stroke="#C9A96E"
            strokeWidth="0.8"
          />
        </svg>
      ))}
    </div>
  )
}

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative overflow-hidden bg-linen aspect-[3/4]">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry editorial`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.badge && (
              <span className="bg-obsidian text-ivory font-manrope text-[9px] tracking-widest px-2 py-0.5">{product.badge}</span>
            )}
            {product.isNew && (
              <span className="bg-gold text-obsidian font-manrope text-[9px] tracking-widest px-2 py-0.5">NEW</span>
            )}
          </div>
          {/* Quick add */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => { e.preventDefault(); addItem(product) }}
              className="w-full bg-obsidian/90 backdrop-blur-sm text-ivory font-manrope text-[10px] tracking-widest py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-colors duration-300"
            >
              <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
              QUICK ADD
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="pt-4 pb-2">
          <p id={product.titleId} className="font-manrope text-[11px] tracking-widest text-obsidian font-medium">{product.name}</p>
          <p id={product.descId} className="font-manrope text-xs text-muted mt-1">{product.shortDesc}</p>
          <div className="flex items-center justify-between mt-2">
            <p className="font-serif text-lg text-obsidian">
              <span className="text-sm">$</span>{product.price}
            </p>
            <div className="flex items-center gap-1.5">
              <StarRating rating={product.rating} />
              <span className="font-manrope text-[10px] text-muted">({product.reviewCount})</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default function Bestsellers() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-manrope text-[10px] tracking-widest3 text-gold mb-3">MOST LOVED</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-obsidian">Bestsellers</h2>
          </div>
          <div className="w-16 h-px bg-gold/40 hidden md:block mb-2" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 border border-obsidian text-obsidian font-manrope text-xs tracking-widest px-8 py-4 hover:bg-obsidian hover:text-ivory transition-colors duration-300"
          >
            VIEW ALL JEWELRY
          </Link>
        </div>
      </div>
    </section>
  )
}
