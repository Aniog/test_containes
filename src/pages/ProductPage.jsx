import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, Truck, RotateCcw, Shield } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import ProductGallery from '@/components/products/ProductGallery'
import ProductAccordion from '@/components/products/ProductAccordion'
import ProductCard from '@/components/products/ProductCard'

export default function ProductPage() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const relatedRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (relatedRef.current) {
      return ImageHelper.loadImages(strkImgConfig, relatedRef.current)
    }
  }, [product])

  if (!product) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center bg-cream-100">
        <div className="text-center">
          <h1 className="heading-lg text-charcoal mb-4">Product Not Found</h1>
          <p className="text-charcoal-400 mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/collection" className="btn-outline">
            Browse Collection
          </Link>
        </div>
      </main>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem(product, selectedVariant, quantity)
    setTimeout(() => setIsAdding(false), 1000)
  }

  return (
    <main className="pt-20 bg-cream-100">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto section-padding py-4">
        <nav className="flex items-center gap-2 text-xs text-charcoal-400">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-charcoal transition-colors">Collection</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="max-w-[1440px] mx-auto section-padding pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Product info */}
          <div className="lg:py-4">
            <p className="caption text-gold mb-2 tracking-mega-wide">
              {product.category}
            </p>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-ultra-wide font-light text-charcoal mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-gold fill-gold'
                        : 'text-charcoal-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal-400">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-charcoal mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p className="text-charcoal-500 body-sm leading-relaxed mb-8 max-w-lg">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-8">
              <p className="caption text-charcoal-400 mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-sm tracking-wider uppercase border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-charcoal bg-charcoal text-cream-100'
                        : 'border-charcoal-200 text-charcoal hover:border-charcoal-400'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="caption text-charcoal-400 mb-3">Quantity</p>
              <div className="inline-flex items-center border border-charcoal-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-11 h-11 flex items-center justify-center text-charcoal-400 hover:text-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-sans text-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-11 h-11 flex items-center justify-center text-charcoal-400 hover:text-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-full py-4 text-sm tracking-wider uppercase font-medium transition-all duration-300 ${
                isAdding
                  ? 'bg-gold text-charcoal'
                  : 'bg-charcoal text-cream-100 hover:bg-charcoal-600 active:scale-[0.99]'
              }`}
            >
              {isAdding ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-charcoal-100/50">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-charcoal-400" strokeWidth={1.5} />
                <span className="text-xs text-charcoal-400">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-charcoal-400" strokeWidth={1.5} />
                <span className="text-xs text-charcoal-400">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-charcoal-400" strokeWidth={1.5} />
                <span className="text-xs text-charcoal-400">Hypoallergenic</span>
              </div>
            </div>

            {/* Accordion */}
            <div className="mt-10">
              <ProductAccordion product={product} />
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section ref={relatedRef} className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-[1440px] mx-auto section-padding">
          <div className="text-center mb-14">
            <p className="caption text-gold mb-3 tracking-mega-wide">You May Also Like</p>
            <h2 className="heading-lg text-charcoal">Related Products</h2>
            <div className="divider-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
