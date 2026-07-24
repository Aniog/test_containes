import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Minus, Plus, ChevronDown, Check, ArrowRight, Truck, RotateCcw, ShieldCheck } from 'lucide-react'
import StrkImage from '@/components/StrkImage'
import StarRating from '@/components/StarRating'
import ProductCard from '@/components/ProductCard'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

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
  'Free worldwide shipping on orders over $75. Standard delivery 5–8 business days; express 2–4 business days. All orders ship in signature Velmora packaging. 30-day returns on unworn items — no questions asked.'

function Accordion({ label, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-sand">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-widest2 text-ink">{label}</span>
        <ChevronDown
          className={`w-4 h-4 text-ink transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-muted leading-relaxed pr-6">{children}</p>
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()

  const [tone, setTone] = useState('gold')
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-24">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <p className="mt-3 text-muted">The piece you are looking for may have moved.</p>
        <Link
          to="/shop"
          className="mt-8 bg-gold text-ivory text-xs uppercase tracking-widest2 px-8 py-3 hover:bg-gold-soft transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(slug, 4)
  const gallery = [
    { imgId: product.imgId, label: 'Primary' },
    { imgId: product.imgIdAlt, label: 'Worn' },
    { imgId: `${product.imgId}-detail`, label: 'Detail' },
    { imgId: `${product.imgIdAlt}-detail`, label: 'Detail 2' },
  ]

  const handleAdd = () => {
    addItem(product, { tone, qty })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="pt-28 md:pt-32">
      {/* Breadcrumb */}
      <div className="max-w-8xl mx-auto px-6 md:px-10 pb-6">
        <nav className="text-xs uppercase tracking-widest2 text-muted flex items-center gap-2">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="max-w-8xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 md:w-20">
            {gallery.map((g, i) => (
              <button
                key={g.imgId}
                type="button"
                onClick={() => setActiveImg(i)}
                className={`relative w-16 md:w-20 aspect-square overflow-hidden bg-cream border-2 transition-colors ${
                  activeImg === i ? 'border-gold' : 'border-transparent hover:border-sand'
                }`}
              >
                <StrkImage
                  imgId={`thumb-${g.imgId}`}
                  query={`[${product.descId}] [${product.titleId}] gold jewelry`}
                  ratio="1x1"
                  width={160}
                  alt={`${product.name} ${g.label}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          {/* Main image */}
          <div className="flex-1 aspect-[4/5] bg-cream overflow-hidden">
            <StrkImage
              imgId={gallery[activeImg].imgId}
              query={`[${product.descId}] [${product.titleId}] gold jewelry editorial`}
              ratio="4x5"
              width={900}
              alt={`${product.name} ${gallery[activeImg].label}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="lg:py-4">
          {product.badges && product.badges.length > 0 && (
            <div className="flex gap-2 mb-4">
              {product.badges.map((b) => (
                <span
                  key={b}
                  className="text-[10px] uppercase tracking-widest2 text-gold border border-gold px-2.5 py-1"
                >
                  {b}
                </span>
              ))}
            </div>
          )}
          <h1
            id={product.titleId}
            className="font-serif text-3xl md:text-4xl text-ink uppercase tracking-[0.12em]"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.shortDesc}
          </p>

          <div className="mt-3 flex items-center gap-3">
            <StarRating rating={product.rating} size="md" />
            <span className="text-sm text-muted">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-3xl text-ink">{formatPrice(product.price)}</p>

          <p className="mt-5 text-base text-muted leading-relaxed">{product.shortDesc}</p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest2 text-ink mb-3">
              Tone: <span className="text-muted capitalize">{tone}</span>
            </p>
            <div className="flex gap-3">
              {TONES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTone(t.id)}
                  className={`px-6 py-3 text-xs uppercase tracking-widest2 border transition-colors ${
                    tone === t.id
                      ? 'border-ink bg-ink text-ivory'
                      : 'border-sand text-ink hover:border-ink'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center border border-sand">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-4 py-4 text-ink hover:text-gold transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-5 text-sm text-ink min-w-[3rem] text-center">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="px-4 py-4 text-ink hover:text-gold transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 bg-gold text-ivory text-xs uppercase tracking-widest2 py-4 hover:bg-gold-soft transition-colors flex items-center justify-center gap-2"
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" /> Added to Bag
                </>
              ) : (
                `Add to Bag — ${formatPrice(product.price * qty)}`
              )}
            </button>
          </div>

          {/* Mini trust */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { icon: Truck, label: 'Free Shipping over $75' },
              { icon: RotateCcw, label: '30-Day Returns' },
              { icon: ShieldCheck, label: 'Hypoallergenic' },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-2">
                <t.icon className="w-5 h-5 text-gold" />
                <span className="text-[10px] uppercase tracking-widest2 text-muted leading-tight">
                  {t.label}
                </span>
              </div>
            ))}
          </div>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion label="Description" defaultOpen>
              {product.description}
            </Accordion>
            <Accordion label="Materials & Care">
              {product.materials}
              <br />
              <br />
              {product.care}
            </Accordion>
            <Accordion label="Shipping & Returns">{SHIPPING_TEXT}</Accordion>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="py-20 md:py-28 mt-16 md:mt-24 bg-cream">
        <div className="max-w-8xl mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-ink">You May Also Like</h2>
            <Link
              to="/shop"
              className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink hover:text-gold transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
