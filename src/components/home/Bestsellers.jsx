import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden bg-velmora-cream aspect-portrait">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="bg-velmora-gold text-velmora-obsidian font-manrope text-[9px] tracking-widest uppercase px-2 py-0.5">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-velmora-obsidian text-velmora-text-light font-manrope text-[9px] tracking-widest uppercase px-2 py-0.5">
              New
            </span>
          )}
        </div>

        {/* Quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={() => addItem(product, product.variants[0])}
            className="w-full bg-velmora-obsidian/90 backdrop-blur-sm text-velmora-text-light font-manrope text-[10px] tracking-widest uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-300"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-3 pb-1">
        <p className="font-manrope text-[9px] tracking-widest uppercase text-velmora-text-muted mb-1">
          {product.category}
        </p>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-cormorant text-base tracking-widest uppercase text-velmora-text-dark hover:text-velmora-gold transition-colors duration-300 leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">{product.shortDesc}</p>
        <div className="flex items-center justify-between mt-1.5">
          <span className="font-manrope text-sm font-medium text-velmora-text-dark">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" stroke="none" />
            <span className="font-manrope text-[10px] text-velmora-text-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Bestsellers() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
          <div>
            <p className="font-manrope text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-2">
              Most Loved
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-text-dark">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-manrope text-xs tracking-widest uppercase text-velmora-text-mid border-b border-velmora-stone/40 pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-all duration-300 self-start md:self-auto"
          >
            View All →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
