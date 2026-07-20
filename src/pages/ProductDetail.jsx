import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Minus, Plus, Check } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { formatPrice, cn } from '@/lib/utils'
import Stars from '@/components/ui/Stars'
import ProductCard from '@/components/product/ProductCard'

const TONES = [
  { id: 'gold', label: 'Gold' },
  { id: 'silver', label: 'Silver' },
]

const ACCORDIONS = [
  { key: 'description', label: 'Description' },
  { key: 'materials', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

const SHIPPING_TEXT =
  'Free worldwide shipping on orders over $75. Standard delivery 3–7 business days. Express options available at checkout. Enjoy 30-day hassle-free returns on unworn items in original packaging.'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const ref = useRef(null)

  const [tone, setTone] = useState(product?.tone || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [slug, activeImg])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-5 text-center pt-20">
        <h1 className="font-serif text-4xl">Piece not found</h1>
        <Link to="/shop" className="text-xs tracking-[0.2em] uppercase border-b border-ink pb-1">
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(slug, 4)
  const gallery = [
    { imgId: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { imgId: product.imgIdAlt, query: `[${product.descId}] worn ${product.name}` },
    { imgId: `${product.imgId}-detail`, query: `[${product.descId}] ${product.name} detail closeup gold` },
    { imgId: `${product.imgId}-model`, query: `[${product.descId}] ${product.name} worn on model` },
  ]

  const handleAdd = () => {
    addItem(product, { tone, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordionBody = {
    description: product.description,
    materials: `${product.materials}\n\nCare: ${product.care}`,
    shipping: SHIPPING_TEXT,
  }

  return (
    <div ref={ref} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-5 text-xs tracking-[0.15em] uppercase text-stone">
        <Link to="/" className="hover:text-ink">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-ink">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:w-20">
              {gallery.map((g, i) => (
                <button
                  key={g.imgId}
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    'relative w-16 md:w-20 aspect-square overflow-hidden bg-sand shrink-0 transition-opacity',
                    activeImg === i ? 'opacity-100 ring-1 ring-ink' : 'opacity-60 hover:opacity-100',
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'
                    alt=""
                    data-strk-img-id={`thumb-${g.imgId}`}
                    data-strk-img={g.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            {/* Main image */}
            <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-sand">
              <img
                key={activeImg}
                src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'
                alt={product.name}
                data-strk-img-id={`main-${gallery[activeImg].imgId}`}
                data-strk-img={gallery[activeImg].query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                className="absolute inset-0 w-full h-full object-cover fade-in"
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:py-4">
            {product.badges?.length > 0 && (
              <div className="flex gap-2 mb-4">
                {product.badges.map((b) => (
                  <span key={b} className="text-[10px] tracking-[0.2em] uppercase border border-ink px-2.5 py-1">
                    {b}
                  </span>
                ))}
              </div>
            )}
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl uppercase tracking-[0.1em] leading-tight"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">{product.shortDescription}</p>

            <div className="flex items-center gap-3 mt-3">
              <Stars rating={product.rating} size={15} />
              <span className="text-sm text-stone">{product.rating} · {product.reviews} reviews</span>
            </div>

            <p className="text-2xl font-serif mt-5">{formatPrice(product.price)}</p>

            <p className="text-stone leading-relaxed mt-5 max-w-md">
              {product.shortDescription}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-xs tracking-[0.2em] uppercase text-stone mb-3">
                Tone: <span className="text-ink capitalize">{tone}</span>
              </p>
              <div className="flex gap-3">
                {TONES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTone(t.id)}
                    className={cn(
                      'px-6 py-3 text-xs tracking-[0.2em] uppercase border transition-colors',
                      tone === t.id
                        ? 'border-ink bg-ink text-cream'
                        : 'border-line text-ink hover:border-ink',
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <div className="flex items-center border border-ink">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-sand transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus width={14} height={14} />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-sand transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus width={14} height={14} />
                </button>
              </div>
              <button
                onClick={handleAdd}
                className={cn(
                  'flex-1 text-xs tracking-[0.25em] uppercase py-4 px-8 transition-colors flex items-center justify-center gap-2',
                  added ? 'bg-ink text-cream' : 'bg-champagne text-cream hover:bg-champagne-deep',
                )}
              >
                {added ? (<><Check width={16} height={16} /> Added to Bag</>) : 'Add to Bag'}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-line">
              {ACCORDIONS.map((acc) => {
                const open = openAccordion === acc.key
                return (
                  <div key={acc.key} className="border-b border-line">
                    <button
                      onClick={() => setOpenAccordion(open ? null : acc.key)}
                      className="w-full flex items-center justify-between py-5 text-left"
                    >
                      <span className="text-xs tracking-[0.2em] uppercase">{acc.label}</span>
                      <ChevronDown
                        width={16}
                        height={16}
                        className={cn('transition-transform duration-300', open && 'rotate-180')}
                      />
                    </button>
                    {open && (
                      <div className="pb-5 text-sm text-stone leading-relaxed whitespace-pre-line fade-in">
                        {accordionBody[acc.key]}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-24 md:mt-32">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-stone mb-3">Continue Exploring</p>
            <h2 className="font-serif text-4xl md:text-5xl">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
