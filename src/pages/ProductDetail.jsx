import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Star, Minus, Plus, ChevronRight } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { useStrkImages, getStrkImageUrl } from '@/lib/strk-image'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const ref = useStrkImages([id])

  const [tone, setTone] = useState(product?.tones[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const related = getRelatedProducts(product.id, 4)

  const handleAdd = () => {
    addItem(product, { tone, quantity })
  }

  const galleryImages = [
    { imgId: product.imgId, label: 'Primary view' },
    { imgId: product.imgId2, label: 'Worn on model' },
  ]

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials}\n\nCare: ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days and arrive in 3–7 business days depending on location. Enjoy 30-day hassle-free returns on unworn pieces in their original packaging.',
    },
  ]

  return (
    <div ref={ref} className="pt-16 md:pt-20 bg-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    'shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden bg-sand border transition-colors',
                    activeImg === i ? 'border-gold' : 'border-transparent'
                  )}
                  aria-label={img.label}
                >
                  <img
                    src={getStrkImageUrl(`thumb-${img.imgId}`)}
                    alt={img.label}
                    data-strk-img-id={`thumb-${img.imgId}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="200"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative aspect-[4/5] overflow-hidden bg-sand">
              <img
                src={getStrkImageUrl(galleryImages[activeImg].imgId)}
                alt={product.name}
                data-strk-img-id={galleryImages[activeImg].imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-cream/90 text-ink text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl uppercase tracking-[0.1em] text-ink leading-tight"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < Math.round(product.rating)
                        ? 'fill-gold text-gold'
                        : 'text-champagne'
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-muted">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="font-serif text-3xl text-ink mt-5">{formatPrice(product.price)}</p>

            <p id={product.descId} className="text-muted mt-5 leading-relaxed">
              {product.shortDesc}
            </p>

            {/* Tone selector */}
            <div className="mt-7">
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal mb-3">
                Tone: <span className="text-ink">{tone}</span>
              </p>
              <div className="flex gap-3">
                {product.tones.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={cn(
                      'px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium border transition-colors',
                      tone === t
                        ? 'border-ink bg-ink text-cream'
                        : 'border-champagne text-charcoal hover:border-ink'
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal mb-3">Quantity</p>
              <div className="inline-flex items-center border border-champagne/60">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  className="px-4 py-3 text-charcoal hover:text-gold transition-colors"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 text-sm text-ink min-w-[3ch] text-center">{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  className="px-4 py-3 text-charcoal hover:text-gold transition-colors"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAdd}
              className="w-full bg-gold text-ink py-4 mt-7 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold-deep hover:text-cream transition-colors"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            <p className="text-xs text-muted mt-4 text-center">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-20 md:py-24 bg-sand border-t border-champagne/40">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-ink text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
