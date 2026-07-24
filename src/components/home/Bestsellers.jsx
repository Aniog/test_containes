import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-warm-white mb-4">
          {/* Primary image */}
          <img
            data-strk-img-id={product.images[0].imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio={product.images[0].ratio}
            data-strk-img-width={String(product.images[0].width)}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          {/* Hover image */}
          <img
            data-strk-img-id={product.images[1].imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn`}
            data-strk-img-ratio={product.images[1].ratio}
            data-strk-img-width={String(product.images[1].width)}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 absolute inset-0 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        {/* Product info */}
        <h3
          id={product.titleId}
          className="font-serif text-sm tracking-product uppercase text-warm-dark group-hover:text-gold transition-colors duration-200"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="font-sans text-xs text-muted mt-1 font-light"
        >
          {product.description}
        </p>
        <p className="font-sans text-sm text-warm-dark font-medium mt-2">
          ${product.price}
        </p>
      </Link>

      {/* Quick add to cart */}
      <button
        onClick={(e) => { e.preventDefault(); addItem(product) }}
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 font-sans text-xs tracking-btn uppercase bg-charcoal text-cream px-6 py-2.5 hover:bg-gold transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <ShoppingBag className="w-3.5 h-3.5 inline mr-2" />
        Add to Cart
      </button>
    </div>
  )
}

const Bestsellers = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-sans text-xs tracking-section uppercase text-muted mb-3">
            Most Loved
          </h2>
          <p className="font-serif text-3xl md:text-4xl text-warm-dark font-light">
            Bestsellers
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
