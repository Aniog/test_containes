import { useState, useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Plus, Minus, ChevronDown, ShoppingBag, Check } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { formatPrice } from '@/lib/utils'
import Stars from '@/components/ui/Stars'
import ProductCard from '@/components/product/ProductCard'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-widest2 text-ink">
          {title}
        </span>
        <ChevronDown
          width={16}
          height={16}
          strokeWidth={1.5}
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
          <p className="text-sm leading-relaxed text-stone">{children}</p>
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()

  const [tone, setTone] = useState(product?.tones[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id, activeImg])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
        <h1 className="font-serif text-3xl text-ink">Piece not found</h1>
        <Link
          to="/shop"
          className="mt-6 border-b border-gold pb-1 text-xs uppercase tracking-widest2 text-ink"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const gallery = [
    { imgId: product.imgId, label: 'Main' },
    { imgId: product.img2Id, label: 'Worn' },
  ]

  const handleAdd = () => {
    addItem(product.id, tone, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div ref={ref} className="bg-cream">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-8 md:px-8">
        <nav className="text-[11px] uppercase tracking-widest2 text-stone">
          <Link to="/" className="hover:text-ink">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-ink">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 md:grid-cols-2 md:gap-16 md:px-8 md:py-14">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex gap-3 md:flex-col">
            {gallery.map((g, i) => (
              <button
                key={g.imgId}
                type="button"
                onClick={() => setActiveImg(i)}
                className={`relative aspect-[3/4] w-16 shrink-0 overflow-hidden border md:w-20 ${
                  activeImg === i ? 'border-gold' : 'border-line'
                }`}
              >
                <img
                  alt={`${product.name} ${g.label}`}
                  data-strk-img-id={`thumb-${g.imgId}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src={PLACEHOLDER}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="relative flex-1 overflow-hidden bg-cream-deep">
            <img
              alt={product.name}
              data-strk-img-id={`pdp-${gallery[activeImg].imgId}`}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src={PLACEHOLDER}
              className="aspect-[3/4] w-full object-cover"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-widest2 text-ink">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">
            {product.category}
          </p>
          <h1
            id={product.titleId}
            className="mt-3 font-serif text-3xl uppercase tracking-widest3 text-ink md:text-4xl"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.short}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <Stars rating={product.rating} size={15} />
            <span className="text-xs text-stone">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="mt-5 font-serif text-3xl text-ink">
            {formatPrice(product.price)}
          </p>

          <p className="mt-5 text-sm leading-relaxed text-stone">
            {product.short}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-widest2 text-stone">
              Tone: <span className="text-ink">{tone}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.tones.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className={`px-6 py-3 text-xs uppercase tracking-widest2 transition-all ${
                    tone === t
                      ? 'border border-ink bg-ink text-cream'
                      : 'border border-line text-ink hover:border-ink'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <div className="flex items-center border border-line">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="px-4 py-4 text-ink transition-colors hover:bg-cream-deep"
              >
                <Minus width={14} height={14} strokeWidth={1.5} />
              </button>
              <span className="min-w-10 text-center text-sm text-ink">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="px-4 py-4 text-ink transition-colors hover:bg-cream-deep"
              >
                <Plus width={14} height={14} strokeWidth={1.5} />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="flex flex-1 items-center justify-center gap-2 bg-gold py-4 text-xs uppercase tracking-widest2 text-ink transition-all hover:bg-gold-deep hover:text-cream"
            >
              {added ? (
                <>
                  <Check width={15} height={15} strokeWidth={1.5} />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag width={15} height={15} strokeWidth={1.5} />
                  Add to Cart
                </>
              )}
            </button>
          </div>

          <p className="mt-4 text-[11px] text-stone">
            Free worldwide shipping &middot; 30-day returns &middot; Ships in 24h
          </p>

          {/* Accordions */}
          <div className="mt-10 border-t border-line">
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
      <section className="border-t border-line bg-cream-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 text-center">
            <p className="text-[11px] uppercase tracking-widest2 text-gold">
              Complete the Look
            </p>
            <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
              You May Also Like
            </h2>
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
