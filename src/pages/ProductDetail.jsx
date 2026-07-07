import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, ChevronRight } from 'lucide-react'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { useStrkImages } from '@/hooks/useStrkImages'
import StarRating from '@/components/ui/StarRating'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const containerRef = useStrkImages([slug])

  const [tone, setTone] = useState(product?.tone?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center pt-20">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <p className="mt-3 text-sm text-stone">
          The piece you’re looking for may have moved.
        </p>
        <Link
          to="/shop"
          className="mt-8 border border-ink px-8 py-3 text-[11px] uppercase tracking-[0.25em] text-ink transition-colors hover:bg-ink hover:text-ivory"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const gallery = [
    { imgId: product.imgId, label: 'Primary view' },
    { imgId: product.imgIdAlt, label: 'Worn view' },
  ].filter((g) => g.imgId)

  const related = getRelatedProducts(slug, 4)

  const handleAdd = () => {
    addItem(product, { tone, quantity })
  }

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div ref={containerRef} className="bg-ivory pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-8xl px-5 py-5 md:px-8">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-stone">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 px-5 pb-20 md:grid-cols-2 md:gap-16 md:px-8">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          {/* Thumbnails */}
          <div className="flex gap-3 md:flex-col">
            {gallery.map((g, i) => (
              <button
                key={g.imgId}
                type="button"
                onClick={() => setActiveImg(i)}
                className={`relative h-20 w-16 flex-shrink-0 overflow-hidden border bg-cream md:h-24 md:w-20 ${
                  activeImg === i ? 'border-gold' : 'border-transparent'
                }`}
              >
                <img
                  alt={`${product.name} ${g.label}`}
                  data-strk-img-id={`thumb-${g.imgId}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-cream">
            <img
              alt={product.name}
              data-strk-img-id={`pdp-main-${gallery[activeImg]?.imgId}`}
              data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink backdrop-blur-sm">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            {product.category}
          </p>
          <h1
            id={product.titleId}
            className="mt-3 font-serif text-3xl uppercase tracking-[0.1em] text-ink md:text-4xl"
          >
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <StarRating value={product.rating} size={15} showValue />
            <span className="text-xs text-stone">({product.reviews} reviews)</span>
          </div>

          <p className="mt-5 font-serif text-3xl text-ink">
            {formatPrice(product.price)}
          </p>

          <p
            id={product.descId}
            className="mt-5 text-sm leading-relaxed text-ink-soft"
          >
            {product.shortDesc}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.25em] text-stone">
              Tone — <span className="text-ink">{tone}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.tone.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className={`min-w-[72px] border px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] transition-colors ${
                    tone === t
                      ? 'border-ink bg-ink text-ivory'
                      : 'border-sand text-ink-soft hover:border-ink'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-stone">
              Quantity
            </p>
            <div className="mt-3 inline-flex items-center border border-sand">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="px-3 py-3 text-ink transition-colors hover:bg-cream"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
              <span className="min-w-10 text-center text-sm text-ink">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="px-3 py-3 text-ink transition-colors hover:bg-cream"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={handleAdd}
            className="mt-8 w-full bg-gold py-4 text-[11px] uppercase tracking-[0.3em] text-ivory transition-colors duration-300 hover:bg-gold-deep"
          >
            Add to Cart — {formatPrice(product.price * quantity)}
          </button>

          <p className="mt-4 text-center text-[11px] uppercase tracking-[0.2em] text-stone">
            Free Shipping · 30-Day Returns
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-sand bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-8xl px-5 md:px-8">
          <div className="mb-10 text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
              Complete the Look
            </p>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
