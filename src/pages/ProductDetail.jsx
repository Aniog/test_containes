import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductGallery from '@/components/product/ProductGallery'
import Accordion from '@/components/product/Accordion'
import Button from '@/components/ui/button'
import { Star, ChevronLeft } from 'lucide-react'

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const product = products.find((p) => p.id === id)
  const related = products.filter((p) => p.id !== id).slice(0, 4)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [id])

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <h1 className="font-serif text-2xl mb-4">Product not found</h1>
        <Link to="/collection" className="text-gold hover:underline">Back to Shop</Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, variant)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'fill-gold text-gold' : 'fill-divider text-divider'
        }`}
      />
    ))
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Link
          to="/collection"
          className="inline-flex items-center gap-2 text-xs text-taupe hover:text-gold transition-colors mb-8 font-sans uppercase tracking-wider"
        >
          <ChevronLeft className="w-3 h-3" />
          Back to Shop
        </Link>

        {/* Product */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Info */}
          <div className="flex flex-col">
            <h1
              className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-[#1A1A1A] mb-3"
              id={`pd-title-${product.id}`}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">{renderStars(product.rating)}</div>
              <span className="text-xs text-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-2xl font-serif text-[#1A1A1A] mb-6">${product.price}</p>

            <p className="text-sm text-taupe leading-relaxed mb-8" id={`pd-desc-${product.id}`}>
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs font-sans font-medium uppercase tracking-wider text-[#1A1A1A] mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-3 text-xs font-sans font-medium uppercase tracking-wider transition-all duration-300 ${
                      variant === v
                        ? 'bg-[#1A1A1A] text-white'
                        : 'bg-transparent text-[#1A1A1A] border border-divider hover:border-[#1A1A1A]'
                    }`}
                  >
                    {v === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs font-sans font-medium uppercase tracking-wider text-[#1A1A1A] mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-divider w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-sm hover:text-gold transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 text-sm font-medium border-x border-divider min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-sm hover:text-gold transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={handleAddToCart}
            >
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </Button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion />
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-20 md:mt-24 pt-12 border-t border-divider">
            <h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] mb-10 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="group">
                  <div className="aspect-[3/4] bg-[#E5DDD3] overflow-hidden mb-3">
                    <img
                      data-strk-img-id={`related-${item.id}`}
                      data-strk-img={`[pd-title-${item.id}] [pd-desc-${item.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-xs uppercase tracking-wider text-[#1A1A1A] mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-taupe">${item.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}