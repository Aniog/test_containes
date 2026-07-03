import React, { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronRight } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useStrkImages } from '@/lib/useStrkImages'
import { cn, formatPrice } from '@/lib/utils'
import Accordion from '@/components/product/Accordion'
import ProductCard from '@/components/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem, openCart } = useCart()
  const [variant, setVariant] = useState(product?.variants[0] || 'Gold')
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  // Re-scan when product changes (gallery images mount).
  const ref = useStrkImages([id])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const related = getRelatedProducts(product.id, 4)

  const gallery = [
    { imgId: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { imgId: product.imgIdAlt, query: `[${product.descId}] ${product.name} worn on model` },
    { imgId: `${product.imgId}-detail`, query: `[${product.titleId}] gold jewelry detail close up macro` },
  ]

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant,
      imgId: product.imgId,
      titleId: product.titleId,
      qty,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-stone">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:w-20">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    'shrink-0 w-16 h-20 md:w-full md:h-24 overflow-hidden border transition-colors',
                    activeImg === i ? 'border-gold' : 'border-sand hover:border-stone'
                  )}
                >
                  <img
                    data-strk-img-id={`${g.imgId}-thumb`}
                    data-strk-img={g.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[4/5] bg-sand overflow-hidden relative">
              <img
                data-strk-img-id={gallery[activeImg].imgId}
                data-strk-img={gallery[activeImg].query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-cream/90 text-ink text-[10px] uppercase tracking-[0.2em] px-3 py-1">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="md:pt-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl uppercase tracking-[0.1em] text-ink leading-tight mb-4"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < Math.round(product.rating)
                        ? 'fill-gold text-gold'
                        : 'text-sand'
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-stone">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="font-serif text-2xl text-ink mb-6">
              {formatPrice(product.price)}
            </p>

            <p id={product.descId} className="text-stone leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-[0.25em] text-stone mb-3">
                Tone: <span className="text-ink">{variant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={cn(
                      'px-5 py-2.5 rounded-full border text-[11px] uppercase tracking-[0.2em] transition-colors duration-300',
                      variant === v
                        ? 'bg-ink text-cream border-ink'
                        : 'border-stone text-stone hover:border-ink hover:text-ink'
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-[0.25em] text-stone mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-sand">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-5 text-sm tabular-nums">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-3 hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAdd}
              className={cn(
                'w-full flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.25em] py-4 transition-colors duration-300 mb-3',
                added ? 'bg-ink text-cream' : 'bg-gold text-ink hover:bg-gold-soft'
              )}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Cart' : `Add to Cart · ${formatPrice(product.price * qty)}`}
            </button>
            <button
              type="button"
              onClick={openCart}
              className="w-full border border-ink text-ink text-[11px] uppercase tracking-[0.25em] py-4 hover:bg-ink hover:text-cream transition-colors duration-300"
            >
              View Cart
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordions} />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
