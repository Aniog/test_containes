import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Check, ChevronRight, Heart, Minus, Plus, RotateCcw, ShieldCheck, Truck } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/product/ProductCard'
import StockImage from '@/components/ui/StockImage'
import Stars from '@/components/ui/Stars'
import Reveal from '@/components/ui/Reveal'
import { useCart } from '@/context/CartContext'
import { formatPrice, getProduct, getRelated } from '@/data/products'

const GALLERY_VIEWS = [
  { suffix: 'still', desc: 'product still life on dark velvet editorial' },
  { suffix: 'worn', desc: 'worn on model close-up warm light' },
  { suffix: 'macro', desc: 'extreme macro detail texture' },
  { suffix: 'lifestyle', desc: 'lifestyle flat lay with silk fabric warm tones' },
]

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-velmora-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-medium uppercase tracking-[0.2em] text-velmora-ink">
          {title}
        </span>
        {open ? (
          <Minus className="h-4 w-4 shrink-0 text-velmora-gold" strokeWidth={1.5} />
        ) : (
          <Plus className="h-4 w-4 shrink-0 text-velmora-muted" strokeWidth={1.5} />
        )}
      </button>
      <div
        className={`grid transition-all duration-400 ease-out ${
          open ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-sm leading-relaxed text-velmora-muted">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default function ProductPage() {
  const { id } = useParams()
  const product = getProduct(id)
  const { addItem, openCart } = useCart()
  const [variant, setVariant] = useState('Gold')
  const [qty, setQty] = useState(1)
  const [view, setView] = useState(0)
  const [added, setAdded] = useState(false)

  const related = useMemo(() => (product ? getRelated(product, 4) : []), [product])
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id, view])

  if (!product) {
    return (
      <div className="velmora-container flex min-h-[70vh] flex-col items-center justify-center pt-20 text-center">
        <p className="font-display text-3xl italic text-velmora-muted">
          This piece has found another home.
        </p>
        <Link to="/shop" className="btn-gold mt-8">
          Back to the Collection
        </Link>
      </div>
    )
  }

  const handleAdd = () => {
    addItem(product.id, variant, qty)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1200)
    openCart()
  }

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <nav className="velmora-container flex items-center gap-2 py-6 text-[11px] uppercase tracking-[0.2em] text-velmora-muted" aria-label="Breadcrumb">
        <Link to="/" className="transition-colors hover:text-velmora-gold">Home</Link>
        <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
        <Link to="/shop" className="transition-colors hover:text-velmora-gold">Shop</Link>
        <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
        <span className="text-velmora-gold">{product.name}</span>
      </nav>

      <section className="velmora-container grid gap-12 pb-20 md:grid-cols-2 md:gap-16 md:pb-28">
        <div className="md:sticky md:top-28 md:self-start">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-velmora-surface">
              {GALLERY_VIEWS.map((g, i) => (
                <StockImage
                  key={g.suffix}
                  imgId={`pdp-${product.id}-${g.suffix}`}
                  query={`[product-${product.id}-name] [product-${product.id}-tagline] ${g.desc}`}
                  ratio="4x5"
                  width={1000}
                  alt={`${product.name} — ${g.suffix} view`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    view === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {product.badge && (
                <span className="absolute left-5 top-5 z-10 border border-velmora-gold/40 bg-velmora-bg/70 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-velmora-gold-light backdrop-blur-sm">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {GALLERY_VIEWS.map((g, i) => (
                <button
                  key={g.suffix}
                  type="button"
                  onClick={() => setView(i)}
                  className={`relative aspect-square overflow-hidden border transition-all duration-300 ${
                    view === i
                      ? 'border-velmora-gold'
                      : 'border-velmora-line opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`View ${g.suffix}`}
                >
                  <StockImage
                    imgId={`pdp-thumb-${product.id}-${g.suffix}`}
                    query={`[product-${product.id}-name] [product-${product.id}-tagline] ${g.desc}`}
                    ratio="1x1"
                    width={200}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <p className="eyebrow">{product.materialLabel}</p>
          <h1 className="mt-4 font-display text-4xl font-medium uppercase leading-tight tracking-[0.08em] text-velmora-ink md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-velmora-muted">
            {product.tagline}
          </p>

          <div className="mt-5 flex items-center gap-3">
            <Stars rating={product.rating} size="w-4 h-4" />
            <span className="text-xs tracking-wide text-velmora-muted">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-6 font-display text-3xl font-medium text-velmora-gold-light">
            {formatPrice(product.price)}
          </p>

          <p className="hairline-t mt-7 pt-7 text-[15px] leading-relaxed text-velmora-muted">
            {product.short}
          </p>

          <div className="mt-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-velmora-ink">
              Finish — <span className="text-velmora-gold">{variant} Tone</span>
            </span>
            <div className="mt-4 flex gap-3">
              {['Gold', 'Silver'].map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={`flex items-center gap-2.5 border px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] transition-all duration-300 ${
                    variant === v
                      ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-gold-light'
                      : 'border-velmora-line text-velmora-muted hover:border-velmora-muted hover:text-velmora-ink'
                  }`}
                  aria-pressed={variant === v}
                >
                  <span
                    className={`h-3 w-3 rounded-full ${
                      v === 'Gold'
                        ? 'bg-gradient-to-br from-velmora-gold-light to-velmora-gold-deep'
                        : 'bg-gradient-to-br from-zinc-200 to-zinc-500'
                    }`}
                  />
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-stretch gap-4">
            <div className="flex items-center border border-velmora-line">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-velmora-muted transition-colors hover:text-velmora-gold"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <span className="w-10 text-center text-sm font-semibold text-velmora-ink">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => Math.min(9, q + 1))}
                className="px-4 py-3 text-velmora-muted transition-colors hover:text-velmora-gold"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
            <button
              type="button"
              className="flex h-[46px] w-[52px] items-center justify-center border border-velmora-line text-velmora-muted transition-all hover:border-velmora-gold hover:text-velmora-gold"
              aria-label="Add to wishlist"
            >
              <Heart className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="btn-gold mt-5 w-full py-5"
          >
            {added ? (
              <>
                <Check className="h-4 w-4" strokeWidth={2} /> Added to Cart
              </>
            ) : (
              <>Add to Cart — {formatPrice(product.price * qty)}</>
            )}
          </button>

          <div className="mt-7 grid grid-cols-3 gap-3 border-y border-velmora-line py-5">
            {[
              { icon: Truck, label: 'Free Shipping' },
              { icon: RotateCcw, label: '30-Day Returns' },
              { icon: ShieldCheck, label: '2-Year Warranty' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <Icon className="h-4 w-4 text-velmora-gold" strokeWidth={1.5} />
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-velmora-muted">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-2">
            <Accordion title="Description" defaultOpen>
              {product.description}
            </Accordion>
            <Accordion title="Materials & Care">
              {product.materials}
            </Accordion>
            <Accordion title="Shipping & Returns">
              Complimentary worldwide shipping on orders over $75 (otherwise a
              flat $6). Orders leave our atelier within 1–2 business days in
              signature gift packaging. Not the one? Return unworn pieces
              within 30 days for a full refund — no questions, no fuss.
            </Accordion>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-velmora-line bg-velmora-surface/40 py-20 md:py-24">
        <div className="velmora-container">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">Complete the Look</p>
              <h2 className="mt-4 font-display text-3xl font-medium text-velmora-ink md:text-5xl">
                You May Also Like
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-8">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
