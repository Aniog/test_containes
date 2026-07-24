import React, { useEffect, useRef, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'
import Button from '@/components/ui/Button'
import Accordion from '@/components/product/Accordion'
import ProductCard from '@/components/product/ProductCard'
import { PLACEHOLDER } from '@/components/ui/StrkImage'
import { getStrkImageUrl } from '@/lib/utils'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()
  const ref = useRef(null)

  const [tone, setTone] = useState(product?.tones[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id])

  useEffect(() => {
    if (product) {
      setTone(product.tones[0])
      setQuantity(1)
      setActiveImg(0)
    }
    window.scrollTo(0, 0)
  }, [id, product])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-3xl text-ink">Piece not found</h1>
        <Button as={Link} to="/shop" variant="outline" className="mt-6">
          Back to Shop
        </Button>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const gallery = [
    { imgId: product.imgId, label: 'Primary view' },
    { imgId: product.imgId2, label: 'Worn on model' },
    { imgId: `${product.imgId}-detail`, label: 'Detail close-up' },
    { imgId: `${product.imgId}-box`, label: 'Gift box' },
  ]

  const handleAdd = () => {
    addItem(product.id, { tone, quantity })
  }

  return (
    <div ref={ref} className="pt-24">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-stone">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight width={12} height={12} />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight width={12} height={12} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 lg:grid-cols-2">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          {/* Thumbnails */}
          <div className="flex gap-3 md:flex-col">
            {gallery.map((g, i) => (
              <button
                key={g.imgId}
                type="button"
                onClick={() => setActiveImg(i)}
                className={`relative aspect-[4/5] w-16 shrink-0 overflow-hidden border transition-colors md:w-20 ${
                  activeImg === i ? 'border-gold' : 'border-transparent hover:border-ink/30'
                }`}
                aria-label={g.label}
              >
                <img
                  alt={g.label}
                  className="absolute inset-0 h-full w-full object-cover"
                  data-strk-img-id={`thumb-${g.imgId}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] ${g.label}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src={getStrkImageUrl(`thumb-${g.imgId}`)}
                />
              </button>
            ))}
          </div>
          {/* Main image */}
          <div className="relative flex-1 overflow-hidden bg-sand aspect-[4/5]">
            <img
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover"
              data-strk-img-id={`main-${gallery[activeImg].imgId}`}
              data-strk-img={`[${product.descId}] [${product.titleId}] ${gallery[activeImg].label}`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src={getStrkImageUrl(`main-${gallery[activeImg].imgId}`)}
            />
            {product.badge && (
              <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-widest2 text-ink">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="lg:py-4">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">{product.material}</p>
          <h1
            id={product.titleId}
            className="mt-3 font-serif text-4xl uppercase tracking-widest3 text-ink md:text-5xl"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">{product.shortDesc}</p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating value={product.rating} size={15} />
            <span className="text-xs text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-6 font-serif text-3xl text-ink">{formatPrice(product.price)}</p>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-stone">
            {product.shortDesc}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-widest2 text-ink">
              Tone: <span className="text-stone">{tone}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.tones.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className={`min-w-24 border px-5 py-2.5 text-[11px] uppercase tracking-widest2 transition-colors ${
                    tone === t
                      ? 'border-ink bg-ink text-cream'
                      : 'border-ink/30 text-ink hover:border-ink'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center border border-ink/30">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-ink hover:bg-sand"
                aria-label="Decrease quantity"
              >
                <Minus width={14} height={14} />
              </button>
              <span className="min-w-10 text-center text-sm text-ink">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-ink hover:bg-sand"
                aria-label="Increase quantity"
              >
                <Plus width={14} height={14} />
              </button>
            </div>
            <Button onClick={handleAdd} variant="primary" size="lg" className="flex-1">
              <ShoppingBag width={15} height={15} className="mr-2" />
              Add to Cart
            </Button>
          </div>

          <p className="mt-4 text-xs text-stone">
            Free worldwide shipping · 30-day returns · Lifetime guarantee
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

      {/* Related */}
      <section className="border-t border-ink/10 bg-sand/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center font-serif text-3xl text-ink md:text-4xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
