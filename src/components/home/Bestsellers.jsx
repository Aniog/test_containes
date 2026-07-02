import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group flex flex-col">
      {/* Image container */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-parchment aspect-[3/4] mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-400 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] [${product.descId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-400 group-hover:opacity-100"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags?.includes('bestseller') && (
            <span className="font-sans text-[9px] tracking-widest uppercase bg-champagne text-velvet px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags?.includes('new') && (
            <span className="font-sans text-[9px] tracking-widest uppercase bg-velvet text-cream px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product) }}
            className="w-full bg-velvet/90 backdrop-blur-sm text-cream font-sans text-[10px] tracking-widest uppercase py-3 hover:bg-champagne hover:text-velvet transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <p
          id={product.titleId}
          className="font-serif text-sm tracking-widest uppercase text-velvet leading-tight"
        >
          {product.name}
        </p>
        <p id={product.descId} className="font-sans text-[11px] text-stone">
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-between mt-1">
          <span className="font-sans text-sm font-medium text-velvet">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} className="fill-champagne text-champagne" />
            <span className="font-sans text-[10px] text-stone">{product.rating}</span>
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
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-widest3 uppercase text-champagne mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velvet">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-champagne mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-velvet text-velvet font-sans text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-velvet hover:text-cream transition-all duration-300"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  )
}
