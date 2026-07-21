import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, ChevronRight } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useToast } from '@/context/ToastContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { formatPrice } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/product/ProductCard'

const GALLERY = [
  { id: 'g1', ratio: '4x5', ctx: 'product detail gold jewelry close up' },
  { id: 'g2', ratio: '4x5', ctx: 'product detail gold jewelry worn model' },
  { id: 'g3', ratio: '4x5', ctx: 'product detail gold jewelry packaging gift box' },
  { id: 'g4', ratio: '4x5', ctx: 'product detail gold jewelry styled flat lay' },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const { toast } = useToast()
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id])

  const [tone, setTone] = useState(product?.tone?.[0] || 'Gold')
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    setTone(product?.tone?.[0] || 'Gold')
    setQty(1)
    setActiveImg(0)
  }, [id, product])

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <p className="mt-4 text-taupe">The piece you are looking for may have moved.</p>
        <Link
          to="/shop"
          className="mt-8 inline-flex items-center justify-center bg-gold px-8 py-4 text-xs uppercase tracking-widest3 text-ivory hover:bg-gold-deep"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  const titleId = `pd-${product.id}-title`
  const descId = `pd-${product.id}-desc`

  const handleAdd = () => {
    addItem(product, tone, qty)
    toast(`Added ${product.name} to bag`)
  }

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div ref={containerRef}>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-8xl px-5 pt-28 md:px-8 md:pt-32">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-taupe">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 px-5 py-10 md:grid-cols-2 md:gap-16 md:px-8 md:py-14">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          {/* Thumbnails */}
          <div className="flex gap-3 md:flex-col">
            {GALLERY.map((g, i) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setActiveImg(i)}
                className={`relative aspect-[4/5] w-16 shrink-0 overflow-hidden border transition-colors md:w-20 ${
                  activeImg === i ? 'border-gold' : 'border-sand hover:border-taupe'
                }`}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  alt=""
                  data-strk-img-id={`pd-${product.id}-thumb-${g.id}`}
                  data-strk-img={`[${descId}] [${titleId}] ${g.ctx}`}
                  data-strk-img-ratio="4x5"
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
              data-strk-img-id={`pd-${product.id}-main-${GALLERY[activeImg].id}`}
              data-strk-img={`[${descId}] [${titleId}] ${GALLERY[activeImg].ctx}`}
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
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold">{product.badge}</p>
          )}
          <h1
            id={titleId}
            className="mt-2 font-serif text-3xl uppercase tracking-widest3 text-ink md:text-4xl"
          >
            {product.name}
          </h1>
          <p id={descId} className="sr-only">
            {product.short}
          </p>

          <div className="mt-3 flex items-center gap-3">
            <StarRating value={product.rating} size={14} />
            <span className="text-xs text-taupe">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-2xl text-ink">{formatPrice(product.price)}</p>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-taupe">{product.short}</p>

          {/* Tone selector */}
          {product.tone.length > 0 && (
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-widest2 text-ink">
                Tone: <span className="text-taupe">{tone}</span>
              </p>
              <div className="mt-3 flex gap-3">
                {product.tone.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={`min-w-16 rounded-full border px-5 py-2 text-xs uppercase tracking-widest3 transition-all ${
                      tone === t
                        ? 'border-ink bg-ink text-ivory'
                        : 'border-sand text-ink hover:border-ink'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity + Add */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-stretch">
            <div className="flex items-center justify-between border border-sand sm:justify-start">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-4 py-4 text-ink hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus size={15} strokeWidth={1.5} />
              </button>
              <span className="min-w-10 text-center text-sm text-ink">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="px-4 py-4 text-ink hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus size={15} strokeWidth={1.5} />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 bg-gold py-4 text-xs uppercase tracking-widest3 text-ivory transition-colors hover:bg-gold-deep"
            >
              Add to Bag — {formatPrice(product.price * qty)}
            </button>
          </div>

          {/* Trust mini */}
          <ul className="mt-8 grid grid-cols-1 gap-2 text-xs text-taupe sm:grid-cols-2">
            <li>· Free worldwide shipping</li>
            <li>· 30-day returns</li>
            <li>· 18K gold plated</li>
            <li>· Hypoallergenic</li>
          </ul>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-sand bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-8xl px-5 md:px-8">
          <div className="mb-12 text-center">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Complete the Look</p>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
