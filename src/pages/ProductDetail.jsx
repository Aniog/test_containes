import {useState, useRef, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { Plus, Minus, ChevronDown, ShoppingBag } from 'lucide-react'
import { getProduct, getRelated } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { PLACEHOLDER } from '@/components/ui/Button'
import StarRating from '@/components/ui/StarRating'
import ProductCard from '@/components/ProductCard'

const tones = [
  { id: 'gold', label: 'Gold' },
  { id: 'silver', label: 'Silver' },
]

const accordions = [
  { key: 'description', label: 'Description' },
  { key: 'materials', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

const shippingText =
  'Free worldwide shipping on all orders. Orders ship within 1–2 business days and arrive in 5–10 business days internationally. Enjoy 30-day returns on unworn pieces in original packaging — no questions asked.'

function Accordion({ label, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-xs uppercase tracking-widest3 text-ink font-medium">
          {label}
        </span>
        <ChevronDown
          size={16}
          className={`text-ink transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-sand leading-relaxed pr-6">{children}</p>
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const { addItem } = useCart()
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  const [tone, setTone] = useState('gold')
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 px-6">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <Link to="/shop" className="text-gold underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = getRelated(slug, 4)

  const titleId = `pd-${product.id}-title`
  const descId = `pd-${product.id}-desc`

  const gallery = [
    { id: `${product.id}-g1`, query: `[${descId}] [${titleId}] gold jewelry product` },
    { id: `${product.id}-g2`, query: `[${titleId}] gold jewelry worn model close up` },
    { id: `${product.id}-g3`, query: `[${titleId}] gold jewelry detail macro` },
    { id: `${product.id}-g4`, query: `[${titleId}] gold jewelry styled flatlay` },
  ]

  const handleAdd = () => {
    addItem(product, { tone, qty })
  }

  return (
    <div ref={ref} className="bg-ivory pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="max-w-8xl mx-auto px-6 md:px-10 py-5">
        <nav className="text-[11px] uppercase tracking-widest3 text-sand">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-8xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:w-24">
              {gallery.map((g, i) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={`relative shrink-0 w-20 h-20 md:w-full md:h-24 overflow-hidden bg-cream border transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-line'
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    alt=""
                    data-strk-img-id={`${g.id}-thumb`}
                    data-strk-img={g.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src={PLACEHOLDER}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-cream">
              {gallery.map((g, i) => (
                <img
                  key={g.id}
                  alt={product.name}
                  data-strk-img-id={`${g.id}-main`}
                  data-strk-img={g.query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  src={PLACEHOLDER}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:pl-6">
            <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">
              {product.category} · {product.type}
            </p>
            <h1
              id={titleId}
              className="font-serif text-4xl md:text-5xl text-ink uppercase tracking-wider leading-tight"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <StarRating value={product.rating} size={15} />
              <span className="text-sm text-sand">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 font-serif text-3xl text-ink">
              {formatPrice(product.price)}
            </p>

            <p
              id={descId}
              className="mt-6 text-ink/80 leading-relaxed"
            >
              {product.short}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-widest3 text-sand mb-3">
                Tone — <span className="text-ink capitalize">{tone}</span>
              </p>
              <div className="flex gap-3">
                {tones.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTone(t.id)}
                    className={`px-6 py-2.5 text-[11px] uppercase tracking-widest3 border transition-all ${
                      tone === t.id
                        ? 'border-ink bg-ink text-ivory'
                        : 'border-line text-ink hover:border-ink'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-line">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-12 h-12 flex items-center justify-center text-ink hover:bg-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={15} />
                </button>
                <span className="w-12 text-center text-ink">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="w-12 h-12 flex items-center justify-center text-ink hover:bg-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={15} />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gold text-espresso text-[11px] uppercase tracking-widest3 font-medium px-8 py-4 hover:bg-gold-soft transition-colors"
              >
                <ShoppingBag size={16} strokeWidth={1.5} />
                Add to Cart — {formatPrice(product.price * qty)}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-line">
              <Accordion label="Description" defaultOpen>
                {product.description}
              </Accordion>
              <Accordion label="Materials & Care">
                {product.materials}
              </Accordion>
              <Accordion label="Shipping & Returns">{shippingText}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-cream py-20 md:py-24">
        <div className="max-w-8xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-ink text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
