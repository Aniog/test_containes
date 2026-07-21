import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProduct, getRelated } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/product/ProductCard'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

// Gallery thumbnails: primary, alt, plus two detail crops derived from the same product.
const buildGallery = (product) => [
  { id: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
  { id: product.imgIdAlt, query: `[${product.descId}] [${product.titleId}] worn on model` },
  { id: `${product.imgId}-d1`, query: `[${product.descId}] [${product.titleId}] close up detail macro` },
  { id: `${product.imgId}-d2`, query: `[${product.descId}] [${product.titleId}] packaging gift box` },
]

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const { addItem } = useCart()
  const ref = useRef(null)

  const [variant, setVariant] = useState(product?.variants[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    if (product) {
      setVariant(product.variants[0])
      setQuantity(1)
      setActiveImg(0)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [slug, product])

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [slug])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-ink mb-4">Product not found</h1>
          <Link to="/shop" className="text-[11px] uppercase tracking-[0.2em] text-gold hover:text-gold-deep">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const gallery = buildGallery(product)
  const related = getRelated(product, 4)

  const handleAdd = () => {
    addItem(product, { variant, quantity })
  }

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders. Orders ship within 1–2 business days and arrive in 3–7 days depending on region. Enjoy 30-day returns on unworn pieces in original packaging. A prepaid return label is included with every order.',
    },
  ]

  return (
    <div ref={ref} className="bg-cream pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-5">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-stone">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pb-20">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 md:w-20">
            {gallery.map((img, i) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setActiveImg(i)}
                className={cn(
                  'relative w-16 h-20 md:w-full md:h-24 overflow-hidden bg-sand border transition-colors',
                  activeImg === i ? 'border-ink' : 'border-hairline hover:border-stone'
                )}
              >
                <img
                  alt={`${product.name} view ${i + 1}`}
                  data-strk-img-id={`${img.id}-thumb`}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src={PLACEHOLDER}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="flex-1 relative aspect-[4/5] overflow-hidden bg-sand">
            <img
              alt={product.name}
              data-strk-img-id={`${gallery[activeImg].id}-main`}
              data-strk-img={gallery[activeImg].query}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src={PLACEHOLDER}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-cream/90 text-ink text-[10px] uppercase tracking-[0.18em] px-3 py-1.5">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="lg:py-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
            {product.category} · {product.type}
          </p>
          <h1
            id={product.titleId}
            className="font-serif text-4xl md:text-5xl text-ink uppercase tracking-[0.04em] leading-tight"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.shortDescription}
          </p>

          <div className="flex items-center gap-3 mt-4">
            <StarRating rating={product.rating} size={15} />
            <span className="text-xs text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="font-serif text-3xl text-ink mt-6">{formatPrice(product.price)}</p>

          <p className="text-stone text-sm leading-relaxed mt-5 max-w-md">
            {product.shortDescription}
          </p>

          {/* Variants */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink mb-3">
              Tone: <span className="text-stone normal-case tracking-normal">{variant}</span>
            </p>
            <div className="flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={cn(
                    'px-6 py-3 text-[11px] uppercase tracking-[0.18em] border transition-colors duration-300',
                    variant === v
                      ? 'border-ink bg-ink text-cream'
                      : 'border-hairline text-ink hover:border-ink'
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink mb-3">Quantity</p>
            <div className="inline-flex items-center border border-hairline">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-11 h-11 flex items-center justify-center text-ink hover:bg-sand transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center text-sm text-ink">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-11 h-11 flex items-center justify-center text-ink hover:bg-sand transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={handleAdd}
            className="w-full bg-ink text-cream text-[11px] uppercase tracking-[0.2em] py-4 mt-8 hover:bg-gold-deep transition-colors duration-300"
          >
            Add to Cart — {formatPrice(product.price * quantity)}
          </button>

          <p className="text-xs text-stone mt-4 text-center">
            Free shipping · 30-day returns · Ships in 1–2 business days
          </p>

          {/* Accordions */}
          <div className="mt-12">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-sand py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} sectionTitleId="related-title" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
