import { useState, useMemo, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, ChevronDown, Truck, RefreshCw } from 'lucide-react'
import { getProductById, getRelatedProducts, formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'
import useImageLoader from '@/hooks/useImageLoader'
import StarRating from '@/components/StarRating'
import ProductCard from '@/components/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = useMemo(() => getProductById(id), [id])
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || '')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0])
      setQuantity(1)
      setActiveImage(0)
      setAdded(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [product])

  const containerRef = useImageLoader([id])

  if (!product) {
    return (
      <div className="mx-auto max-w-xl px-5 py-32 text-center">
        <h1 className="heading-display text-3xl">Product not found</h1>
        <Link
          to="/shop"
          className="mt-6 inline-block bg-charcoal-900 px-8 py-3 text-xs uppercase tracking-widest text-cream-100"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div ref={containerRef}>
      <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-24 md:px-10 md:pb-24 md:pt-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-cream-200">
              <img
                src={product.galleryImages[activeImage] || product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.galleryImages.map((src, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-square overflow-hidden bg-cream-200 ${
                    activeImage === idx ? 'ring-1 ring-charcoal-900' : 'opacity-80'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    src={src}
                    alt={`${product.name} view ${idx + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col lg:pt-10">
            <div className="mb-1 flex items-center gap-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-charcoal-500">
                {product.reviewCount} reviews
              </span>
            </div>
            <h1 className="heading-display text-3xl uppercase tracking-[0.12em] md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-3 text-2xl font-light text-charcoal-700">
              {formatPrice(product.price)}
            </p>
            <p className="mt-6 text-base leading-relaxed text-charcoal-600">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <span className="label-uppercase text-[11px] text-charcoal-500">
                Tone
              </span>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full border px-5 py-2.5 text-xs uppercase tracking-widest transition-all ${
                      selectedVariant === variant
                        ? 'border-charcoal-900 bg-charcoal-900 text-cream-100'
                        : 'border-charcoal-900/20 bg-transparent text-charcoal-700 hover:border-charcoal-900/50'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="label-uppercase text-[11px] text-charcoal-500">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-charcoal-900/10">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-cream-200"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:bg-cream-200"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              className={`mt-8 w-full py-4 text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                added
                  ? 'bg-charcoal-700 text-cream-100'
                  : 'bg-gold-600 text-charcoal-900 hover:bg-gold-500'
              }`}
            >
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-charcoal-500">
              <span className="flex items-center gap-1.5">
                <Truck size={14} className="text-gold-600" />
                Free shipping over $75
              </span>
              <span className="flex items-center gap-1.5">
                <RefreshCw size={14} className="text-gold-600" />
                30-day returns
              </span>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-charcoal-900/10">
              {[
                { key: 'description', title: 'Description', content: product.description },
                {
                  key: 'materials',
                  title: 'Materials & Care',
                  content: `${product.materials} ${product.care}`,
                },
                {
                  key: 'shipping',
                  title: 'Shipping & Returns',
                  content:
                    'Free worldwide shipping on orders over $75. Orders are processed within 1–2 business days. Returns accepted within 30 days of delivery on unworn items in original packaging.',
                },
              ].map(({ key, title, content }) => (
                <div key={key} className="border-b border-charcoal-900/10">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenAccordion(openAccordion === key ? '' : key)
                    }
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium uppercase tracking-widest">
                      {title}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        openAccordion === key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === key && (
                    <div className="pb-5 text-sm leading-relaxed text-charcoal-600">
                      {content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-charcoal-900/8 bg-cream-50 py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <h2 className="heading-display mb-10 text-center text-2xl md:text-4xl">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 lg:gap-x-6">
              {related.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
