import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, ChevronRight } from 'lucide-react'
import { getProductBySlug, getRelatedProducts, formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useImageLoader } from '@/lib/useImageLoader'
import StarRating from '@/components/StarRating'
import Accordion from '@/components/product/Accordion'
import ProductCard from '@/components/product/ProductCard'
import { cn } from '@/lib/utils'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const ref = useImageLoader([slug])
  const { addItem } = useCart()

  const [variant, setVariant] = useState(product?.variants[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [added, setAdded] = useState(false)

  if (!product) return <Navigate to="/shop" replace />

  const related = getRelatedProducts(product, 4)
  const images = product.images

  const handleAdd = () => {
    addItem(product, { variant, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-8xl px-6 md:px-10 py-5">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-stone">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto max-w-8xl px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:w-20">
              {images.map((img, i) => (
                <button
                  key={img.imgId}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    'relative aspect-square w-16 md:w-full overflow-hidden bg-sand border transition-colors',
                    activeImage === i ? 'border-gold' : 'border-transparent hover:border-sand'
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    alt={`${product.name} thumbnail ${i + 1}`}
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={`[${img.titleId}] [${img.descId}] gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="120"
                    src={PLACEHOLDER}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1">
              <div className="relative aspect-[4x5] overflow-hidden bg-sand">
                <img
                  alt={product.name}
                  data-strk-img-id={images[activeImage].imgId}
                  data-strk-img={`[${images[activeImage].titleId}] [${images[activeImage].descId}] gold jewelry`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  src={PLACEHOLDER}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="lg:py-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{product.type}</p>
            <h1
              id={images[0].titleId}
              className="font-serif text-4xl md:text-5xl text-charcoal uppercase tracking-[0.1em] leading-tight"
            >
              {product.name}
            </h1>
            <p id={images[0].descId} className="sr-only">
              {product.shortDescription}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <StarRating rating={product.rating} size={15} />
              <span className="text-sm text-stone">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="font-serif text-3xl text-charcoal mt-6">{formatPrice(product.price)}</p>

            <p className="mt-5 text-stone leading-relaxed text-[15px]">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-stone mb-3">
                Tone: <span className="text-charcoal">{variant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={cn(
                      'px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium border transition-colors',
                      variant === v
                        ? 'border-ink bg-ink text-ivory'
                        : 'border-sand text-charcoal hover:border-ink'
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-stone mb-3">Quantity</p>
              <div className="inline-flex items-center border border-sand">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2.5 text-ink hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={15} strokeWidth={1.5} />
                </button>
                <span className="px-5 text-sm text-charcoal min-w-[3ch] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2.5 text-ink hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={15} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={cn(
                'mt-8 w-full flex items-center justify-center gap-2 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-colors',
                added ? 'bg-gold-deep text-ivory' : 'bg-gold text-ink hover:bg-gold-deep hover:text-ivory'
              )}
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            <p className="mt-4 text-xs text-stone text-center">
              Free worldwide shipping · 30-day returns · Ships in 1–2 business days
            </p>

            {/* Accordions */}
            <div className="mt-12">
              <Accordion
                items={[
                  { title: 'Description', content: product.description },
                  { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
                  {
                    title: 'Shipping & Returns',
                    content:
                      'Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days and arrive in signature Velmora packaging. Enjoy 30-day returns on unworn pieces — no questions asked.',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-20 md:py-24 bg-cream border-t border-sand">
        <div className="mx-auto max-w-8xl px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
