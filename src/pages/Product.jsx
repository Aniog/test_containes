import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { findProductById, products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { Plus, Minus, Check, Truck, RefreshCcw, ShieldCheck } from 'lucide-react'
import StarRating from '@/components/product/StarRating'
import Accordion from '@/components/product/Accordion'
import ProductCard from '@/components/product/ProductCard'

const galleryRatios = ['1x1', '3x4', '1x1', '4x5']

export default function Product() {
  const { id } = useParams()
  const product = findProductById(id)
  const { addItem } = useCart()
  const [activeImage, setActiveImage] = useState(0)
  const [tone, setTone] = useState(product?.defaultTone || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [id])

  useEffect(() => {
    if (product) {
      setTone(product.defaultTone)
      setQuantity(1)
      setActiveImage(0)
    }
  }, [id, product])

  const related = useMemo(() => {
    if (!product) return []
    return products
      .filter((p) => p.id !== product.id && p.category === product.category)
      .slice(0, 4)
  }, [product])

  if (!product) {
    return (
      <div className="container-page pt-40 pb-32 text-center">
        <p className="font-serif text-4xl">Piece not found</p>
        <Link to="/shop" className="btn-outline mt-8 inline-flex">Back to the shop</Link>
      </div>
    )
  }

  const titleId = `prod-${product.id}-title`
  const subtitleId = `prod-${product.id}-subtitle`
  const titleQuery = `[${subtitleId}] [${titleId}]`

  const galleryQueries = [
    `${titleQuery} gold jewelry editorial dark background`,
    `${titleQuery} gold jewelry detail macro`,
    `${titleQuery} gold jewelry worn on ear neck`,
    `${titleQuery} gold jewelry lifestyle warm light`,
  ]

  const handleAdd = () => {
    addItem(product.id, tone, quantity)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div ref={containerRef} className="bg-ivory pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="container-page pt-6">
        <nav className="text-[11px] uppercase tracking-widest2 text-taupe">
          <Link to="/" className="hover:text-espresso transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-espresso transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-espresso">{product.name}</span>
        </nav>
      </div>

      <section className="container-page py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-4">
              <div className="hidden md:flex md:col-span-1 flex-col gap-3">
                {galleryQueries.map((q, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`View image ${i + 1}`}
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      'relative w-full aspect-square overflow-hidden bg-cream border transition-colors',
                      activeImage === i ? 'border-espresso' : 'border-hairline hover:border-espresso/50',
                    )}
                  >
                    <img
                      alt={`${product.name} thumbnail ${i + 1}`}
                      data-strk-img-id={`${product.id}-thumb-${i}`}
                      data-strk-img={q}
                      data-strk-img-ratio={galleryRatios[i]}
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <div className="col-span-12 md:col-span-11">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-cream">
                  <img
                    alt={product.name}
                    data-strk-img-id={`${product.id}-main`}
                    data-strk-img={galleryQueries[activeImage]}
                    data-strk-img-ratio={galleryRatios[activeImage]}
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {product.badges?.length > 0 && (
                    <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest2 font-medium bg-ivory/95 text-espresso px-3 py-1.5">
                      {product.badges[0]}
                    </span>
                  )}
                </div>

                {/* Mobile thumbnail strip */}
                <div className="md:hidden mt-4 flex gap-3 overflow-x-auto no-scrollbar">
                  {galleryQueries.map((q, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`View image ${i + 1}`}
                      onClick={() => setActiveImage(i)}
                      className={cn(
                        'relative w-20 h-20 flex-shrink-0 overflow-hidden bg-cream border transition-colors',
                        activeImage === i ? 'border-espresso' : 'border-hairline',
                      )}
                    >
                      <img
                        alt=""
                        data-strk-img-id={`${product.id}-m-thumb-${i}`}
                        data-strk-img={q}
                        data-strk-img-ratio={galleryRatios[i]}
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5">
            <h1
              id={titleId}
              className="font-serif text-4xl md:text-5xl uppercase tracking-[0.18em] leading-[1.1]"
            >
              {product.name}
            </h1>
            <p id={subtitleId} className="mt-3 text-sm text-taupe">
              {product.subtitle}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <StarRating value={product.rating} size={14} />
              <span className="text-xs text-taupe">
                {product.rating.toFixed(1)} · {product.reviewCount} reviews
              </span>
            </div>

            <p className="mt-6 text-2xl font-light">{formatPrice(product.price)}</p>

            <p className="mt-5 text-sm text-espresso-soft leading-relaxed max-w-prose">
              {product.description}
            </p>

            {/* Tone selector */}
            {product.toneOptions?.length > 1 && (
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest2 font-medium">
                    Tone
                  </span>
                  <span className="text-xs text-taupe capitalize">{tone}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.toneOptions.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTone(t.id)}
                      className={cn(
                        'px-5 py-2.5 border text-[11px] uppercase tracking-widest2 font-medium transition-colors',
                        tone === t.id
                          ? 'border-espresso bg-espresso text-ivory'
                          : 'border-hairline text-espresso hover:border-espresso',
                      )}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + CTA */}
            <div className="mt-8 flex items-stretch gap-3">
              <div className="inline-flex items-center border border-hairline">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-12 flex items-center justify-center hover:bg-cream transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={1.4} />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-12 flex items-center justify-center hover:bg-cream transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={1.4} />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className={cn(
                  'flex-1 inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-widest2 font-medium px-8 py-3.5 transition-colors',
                  added
                    ? 'bg-espresso text-ivory'
                    : 'bg-gold text-ivory hover:bg-gold-deep',
                )}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" strokeWidth={1.6} /> Added to bag
                  </>
                ) : (
                  'Add to bag'
                )}
              </button>
            </div>

            <p className="mt-3 text-[11px] uppercase tracking-widest2 text-taupe">
              4 interest-free payments of {formatPrice(product.price / 4)} with
            </p>

            {/* Promises */}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] uppercase tracking-widest2 text-taupe">
              <li className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-gold" strokeWidth={1.4} />
                Free shipping
              </li>
              <li className="flex items-center gap-2">
                <RefreshCcw className="w-3.5 h-3.5 text-gold" strokeWidth={1.4} />
                30-day returns
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" strokeWidth={1.4} />
                Hypoallergenic
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion
                items={[
                  {
                    title: 'Description',
                    content: product.description,
                    bullets: product.details,
                  },
                  {
                    title: 'Materials & Care',
                    content: product.materials,
                    bullets: product.care,
                  },
                  {
                    title: 'Shipping & Returns',
                    content: product.shipping,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-hairline py-20 md:py-28">
          <div className="container-page">
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-serif text-3xl md:text-4xl">
                You may also{' '}
                <span className="italic font-light text-espresso-soft">like</span>
              </h2>
              <Link
                to="/shop"
                className="text-[11px] uppercase tracking-widest2 font-medium link-underline hidden sm:inline-block"
              >
                View all
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
