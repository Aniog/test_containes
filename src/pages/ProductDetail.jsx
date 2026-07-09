import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Plus, Minus, ChevronDown, Check, ShoppingBag } from 'lucide-react'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { useStrkImages } from '@/lib/useStrkImages'
import ProductCard from '@/components/product/ProductCard'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-widest2 text-ink">
          {title}
        </span>
        <ChevronDown
          size={16}
          className={`text-ink transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-stone leading-relaxed pr-6">{children}</p>
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const containerRef = useStrkImages([slug])

  const [tone, setTone] = useState(product?.tones?.[0] || 'Gold')
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="container-velmora py-32 text-center">
        <h1 className="font-serif text-4xl text-ink">Product not found</h1>
        <Link to="/shop" className="btn-outline mt-6 inline-flex">
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(slug, 4)
  const gallery = [
    { imgId: product.imgId, label: 'Main' },
    { imgId: product.imgId2, label: 'Worn' },
  ]

  const handleAdd = () => {
    addItem(product, { tone, qty })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div ref={containerRef}>
      {/* Breadcrumb */}
      <div className="container-velmora pt-28 md:pt-32 pb-6">
        <nav className="text-xs uppercase tracking-widest2 text-stone flex items-center gap-2">
          <Link to="/" className="hover:text-ink transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-ink transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="container-velmora pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3">
              {gallery.map((g, i) => (
                <button
                  key={g.imgId}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={`relative w-16 h-20 md:w-20 md:h-24 bg-sand overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    alt={`${product.name} ${g.label}`}
                    data-strk-img-id={`${g.imgId}-thumb`}
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
            <div className="flex-1 relative aspect-[4/5] bg-sand overflow-hidden">
              <img
                alt={product.name}
                data-strk-img-id={gallery[activeImg].imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            {product.badge && (
              <span className="inline-block bg-champagne text-ink text-[10px] uppercase tracking-widest2 px-3 py-1.5 mb-4">
                {product.badge}
              </span>
            )}
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl uppercase tracking-widest2 text-ink leading-tight"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">
              {product.shortDesc}
            </p>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.round(product.rating)
                        ? 'fill-gold text-gold'
                        : 'text-line'
                    }
                  />
                ))}
              </div>
              <span className="text-xs text-stone">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="font-serif text-3xl text-ink mt-5">
              {formatPrice(product.price)}
            </p>

            <p className="mt-5 text-stone leading-relaxed">
              {product.shortDesc}
            </p>

            {/* Tone selector */}
            <div className="mt-7">
              <p className="text-xs uppercase tracking-widest2 text-ink mb-3">
                Tone: <span className="text-stone">{tone}</span>
              </p>
              <div className="flex gap-3">
                {product.tones.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={`px-6 py-2.5 text-xs uppercase tracking-widest2 border transition-all ${
                      tone === t
                        ? 'border-ink bg-ink text-cream'
                        : 'border-line text-ink hover:border-ink'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-7 flex items-center gap-4">
              <div className="flex items-center border border-line">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-3 py-3.5 text-ink hover:text-gold transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 text-sm text-ink min-w-[2.5rem] text-center">
                  {qty}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="px-3 py-3.5 text-ink hover:text-gold transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className="btn-primary flex-1"
              >
                {added ? (
                  <span className="flex items-center gap-2">
                    <Check size={16} /> Added to Bag
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <ShoppingBag size={16} /> Add to Bag
                  </span>
                )}
              </button>
            </div>

            <p className="mt-4 text-xs text-stone">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="py-20 md:py-24 bg-sand">
        <div className="container-velmora">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Complete the Look</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
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
