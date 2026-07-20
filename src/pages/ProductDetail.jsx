import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Plus, Minus, ChevronDown, Check, ShoppingBag } from 'lucide-react'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import Stars from '@/components/Stars'
import ProductCard from '@/components/product/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const ACCORDIONS = [
  { key: 'description', label: 'Description' },
  { key: 'materials', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

const SHIPPING_TEXT =
  'Free worldwide shipping on all orders. Orders are processed within 1–2 business days and typically arrive within 5–10 business days. Enjoy 30-day returns on unworn pieces in their original packaging — we will send you a prepaid return label.'

function Accordion({ label, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-linen">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-xs uppercase tracking-widest2 text-espresso">
          {label}
        </span>
        <ChevronDown
          size={16}
          className={cn(
            'text-espresso transition-transform duration-300',
            open && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'grid transition-all duration-500 ease-out',
          open ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden">
          <div className="text-sm text-espresso/80 leading-relaxed pr-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const related = getRelatedProducts(slug, 4)
  const { addItem } = useCart()

  const galleryRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (galleryRef.current) {
        ImageHelper.loadImages(strkImgConfig, galleryRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])
  const relatedRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (relatedRef.current) {
        ImageHelper.loadImages(strkImgConfig, relatedRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  const [variant, setVariant] = useState(product?.variants?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="container-velmora py-40 text-center">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <Link to="/shop" className="btn-primary mt-8 inline-flex">
          Back to Shop
        </Link>
      </div>
    )
  }

  const handleAdd = () => {
    addItem(product, { variant, quantity })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1800)
  }

  const galleryQueries = [
    `[${product.descId}] [${product.titleId}] gold jewelry product warm editorial`,
    `[${product.descId}] [${product.titleId}] worn on model close up`,
    `[${product.descId}] [${product.titleId}] detail macro gold texture`,
    `[${product.descId}] [${product.titleId}] styled flat lay warm neutral`,
  ]

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 md:pt-28 bg-cream">
        <div className="container-velmora">
          <nav className="text-xs uppercase tracking-widest2 text-taupe flex items-center gap-2 py-5">
            <Link to="/" className="hover:text-espresso transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-espresso transition-colors">Shop</Link>
            <span>/</span>
            <Link
              to={`/shop?category=${product.category}`}
              className="hover:text-espresso transition-colors"
            >
              {product.categoryName}
            </Link>
            <span>/</span>
            <span className="text-espresso">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main */}
      <section className="bg-cream pb-20 md:pb-28">
        <div className="container-velmora">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <div ref={galleryRef} className="flex flex-col-reverse md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-3 md:w-20">
                {galleryQueries.map((q, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImg(i)}
                    className={cn(
                      'relative w-16 h-16 md:w-20 md:h-20 overflow-hidden bg-sand shrink-0 transition-all',
                      activeImg === i
                        ? 'ring-1 ring-champagne ring-offset-2 ring-offset-cream'
                        : 'opacity-70 hover:opacity-100'
                    )}
                  >
                    <img
                      alt={`${product.name} view ${i + 1}`}
                      data-strk-img-id={product.galleryIds[i]}
                      data-strk-img={q}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src={PLACEHOLDER}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-sand">
                <img
                  alt={product.name}
                  data-strk-img-id={`${product.imgId}-main-${activeImg}`}
                  data-strk-img={galleryQueries[activeImg]}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  src={PLACEHOLDER}
                  className="absolute inset-0 w-full h-full object-cover"
                  key={activeImg}
                />
              </div>
            </div>

            {/* Info */}
            <div className="lg:pl-6">
              <p className="eyebrow mb-3">{product.categoryName}</p>
              <h1
                id={product.titleId}
                className="product-name text-3xl md:text-4xl text-ink leading-tight"
              >
                {product.name}
              </h1>
              <p id={product.descId} className="sr-only">
                {product.tagline}
              </p>

              <div className="flex items-center gap-3 mt-4">
                <Stars rating={product.rating} size={15} />
                <span className="text-xs text-taupe">
                  {product.rating} · {product.reviewCount} reviews
                </span>
              </div>

              <p className="mt-6 font-serif text-3xl text-ink">
                {formatPrice(product.price)}
              </p>

              <p className="mt-5 text-espresso/80 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Variant selector */}
              <div className="mt-8">
                <p className="text-xs uppercase tracking-widest2 text-taupe mb-3">
                  Tone — <span className="text-espresso">{variant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setVariant(v)}
                      className={cn(
                        'px-6 py-2.5 text-xs uppercase tracking-widest2 border transition-all duration-300',
                        variant === v
                          ? 'border-espresso bg-espresso text-cream'
                          : 'border-linen text-espresso hover:border-espresso'
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <p className="text-xs uppercase tracking-widest2 text-taupe mb-3">Quantity</p>
                <div className="inline-flex items-center border border-linen">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-11 h-11 flex items-center justify-center text-espresso hover:bg-sand transition-colors"
                  >
                    <Minus size={15} />
                  </button>
                  <span className="w-12 text-center text-sm text-espresso">{quantity}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-11 h-11 flex items-center justify-center text-espresso hover:bg-sand transition-colors"
                  >
                    <Plus size={15} />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                type="button"
                onClick={handleAdd}
                className="btn-primary w-full mt-8"
              >
                {added ? (
                  <span className="inline-flex items-center gap-2">
                    <Check size={15} /> Added to Cart
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <ShoppingBag size={15} /> Add to Cart — {formatPrice(product.price * quantity)}
                  </span>
                )}
              </button>

              <p className="mt-4 text-xs text-taupe text-center">
                Free shipping · 30-day returns · Hypoallergenic
              </p>

              {/* Accordions */}
              <div className="mt-10 border-t border-linen">
                <Accordion label={ACCORDIONS[0].label} defaultOpen>
                  {product.description}
                </Accordion>
                <Accordion label={ACCORDIONS[1].label}>
                  <p>{product.materials}</p>
                  <p className="mt-3">{product.care}</p>
                </Accordion>
                <Accordion label={ACCORDIONS[2].label}>
                  {SHIPPING_TEXT}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section ref={relatedRef} className="py-20 md:py-28 bg-sand">
        <div className="container-velmora">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Complete the Look</p>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-ink">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
