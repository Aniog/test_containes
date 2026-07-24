import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Minus, Plus, ChevronDown, Truck, RotateCcw, ShieldCheck, Leaf } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import StrkImg from '@/components/ui/StrkImg'
import StarRating from '@/components/ui/StarRating'
import Reveal from '@/components/ui/Reveal'
import ProductCard from '@/components/product/ProductCard'
import { useCart } from '@/context/CartContext'
import { PRODUCTS, getProduct, formatPrice } from '@/data/products'
import { cn } from '@/lib/utils'

const ACCORDIONS = [
  { id: 'description', title: 'Description' },
  { id: 'materials', title: 'Materials & Care' },
  { id: 'shipping', title: 'Shipping & Returns' },
]

const SHIPPING_TEXT =
  'Complimentary worldwide shipping on every order, beautifully packaged in our signature gift box. Orders ship within 1–2 business days. Not the perfect piece? Return or exchange within 30 days, no questions asked — return shipping is on us.'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProduct(id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [variant, setVariant] = useState('Gold')
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')

  const gallery = useMemo(() => {
    if (!product) return []
    const query = `[${product.descId}] [${product.titleId}]`
    return [
      { imgId: product.imgId, query, label: 'Product view' },
      { imgId: product.hoverImgId, query: `${query} lifestyle on model`, label: 'Worn' },
      { imgId: product.detailIds[0], query: `${query} macro detail close up`, label: 'Detail' },
      { imgId: product.detailIds[1], query: `${query} styled flat lay`, label: 'Styled' },
    ]
  }, [product])

  const related = useMemo(() => {
    if (!product) return []
    const others = PRODUCTS.filter((p) => p.id !== product.id)
    const sameCat = others.filter((p) => p.category === product.category)
    return [...sameCat, ...others.filter((p) => p.category !== product.category)].slice(0, 4)
  }, [product])

  useEffect(() => {
    setVariant('Gold')
    setQty(1)
    setActiveImg(0)
    setOpenAccordion('description')
    window.scrollTo({ top: 0 })
  }, [id])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [id, activeImg])

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 pt-20">
        <p className="font-display text-3xl text-espresso">This piece has sold out</p>
        <Link to="/shop" className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-deep underline underline-offset-8">
          Back to the Collection
        </Link>
      </div>
    )
  }

  const query = `[${product.descId}] [${product.titleId}]`

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <div className="mx-auto max-w-7xl px-5 py-6 md:px-10">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-taupe" aria-label="Breadcrumb">
          <Link to="/" className="transition-colors hover:text-espresso">Home</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="transition-colors hover:text-espresso">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-espresso">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 md:grid-cols-2 md:gap-14 md:px-10 md:pb-24">
        <div>
          <div className="relative aspect-[3/4] overflow-hidden bg-sand">
            {gallery.map((img, i) => (
              <StrkImg
                key={img.imgId}
                imgId={img.imgId}
                query={img.query}
                ratio="3x4"
                width={1000}
                alt={`${product.name} — ${img.label}`}
                className={cn(
                  'absolute inset-0 transition-opacity duration-700',
                  i === activeImg ? 'opacity-100' : 'pointer-events-none opacity-0',
                )}
              />
            ))}
            {product.badge && (
              <span className="absolute left-5 top-5 z-10 bg-ivory/95 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-espresso">
                {product.badge}
              </span>
            )}
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {gallery.map((img, i) => (
              <button
                key={img.imgId}
                type="button"
                onClick={() => setActiveImg(i)}
                aria-label={`View ${img.label}`}
                className={cn(
                  'relative aspect-square overflow-hidden bg-sand outline-offset-2 transition-all duration-300',
                  i === activeImg ? 'outline outline-1 outline-gold' : 'opacity-60 hover:opacity-100',
                )}
              >
                <StrkImg imgId={`${img.imgId}-thumb`} query={img.query} ratio="1x1" width={200} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <Reveal>
            <StarRating rating={product.rating} size="w-4 h-4" />
            <span className="ml-2 text-xs text-mocha">{product.rating} · {product.reviews} reviews</span>

            <h1
              id={product.titleId}
              className="mt-4 font-display text-4xl font-light uppercase leading-tight tracking-[0.06em] text-espresso md:text-5xl"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="mt-2 text-sm text-mocha">
              {product.tagline}
            </p>

            <div className="mt-5 flex items-baseline gap-3">
              <p className="font-display text-3xl font-medium text-espresso">{formatPrice(product.price)}</p>
              {product.compareAt && (
                <p className="text-sm text-taupe line-through">{formatPrice(product.compareAt)}</p>
              )}
            </div>

            <p className="mt-6 border-t border-line pt-6 text-sm leading-relaxed text-mocha">
              {product.description}
            </p>

            <div className="mt-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
                Finish — <span className="font-normal text-mocha">{variant} Tone</span>
              </p>
              <div className="mt-3 flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={cn(
                      'rounded-full border px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-300',
                      variant === v
                        ? 'border-espresso bg-espresso text-ivory'
                        : 'border-espresso/25 text-mocha hover:border-espresso hover:text-espresso',
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 flex gap-3">
              <div className="flex items-center border border-espresso/25">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex h-14 w-11 items-center justify-center text-mocha transition-colors hover:text-espresso"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-8 text-center text-sm font-medium text-espresso">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="flex h-14 w-11 items-center justify-center text-mocha transition-colors hover:text-espresso"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => addItem(product, { variant, qty })}
                className="h-14 flex-1 bg-gold text-[11px] font-semibold uppercase tracking-[0.26em] text-ivory transition-colors duration-300 hover:bg-gold-deep"
              >
                Add to Cart — {formatPrice(product.price * qty)}
              </button>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 text-xs text-mocha">
              <span className="flex items-center gap-2"><Truck className="h-4 w-4 text-gold" /> Free worldwide shipping</span>
              <span className="flex items-center gap-2"><RotateCcw className="h-4 w-4 text-gold" /> 30-day returns</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Hypoallergenic</span>
              <span className="flex items-center gap-2"><Leaf className="h-4 w-4 text-gold" /> Recycled brass core</span>
            </div>

            <div className="mt-8 border-t border-line">
              {ACCORDIONS.map((acc) => {
                const open = openAccordion === acc.id
                const text =
                  acc.id === 'description'
                    ? product.description
                    : acc.id === 'materials'
                      ? product.materials
                      : SHIPPING_TEXT
                return (
                  <div key={acc.id} className="border-b border-line">
                    <button
                      type="button"
                      onClick={() => setOpenAccordion(open ? null : acc.id)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between py-5 text-left"
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
                        {acc.title}
                      </span>
                      <ChevronDown
                        className={cn('h-4 w-4 text-mocha transition-transform duration-300', open && 'rotate-180')}
                      />
                    </button>
                    <div
                      className={cn(
                        'grid transition-all duration-500 ease-out',
                        open ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0',
                      )}
                    >
                      <p className="overflow-hidden text-sm leading-relaxed text-mocha">{text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>

      <section className="border-t border-line bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="mb-10 text-center md:mb-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">Complete the Look</p>
            <h2 className="mt-3 font-display text-3xl font-light text-espresso md:text-4xl">You May Also Like</h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
