import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Plus, Minus, ChevronDown, Check, ArrowRight } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'
import ProductCard from '@/components/ProductCard'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'

const galleryShots = (p) => [
  { id: `${p.imgId}-g1`, query: `[${p.descId}] [${p.titleId}]`, ratio: '4x5' },
  { id: `${p.imgId2}-g2`, query: `[${p.descId}] ${p.name} worn on model`, ratio: '4x5' },
  { id: `${p.imgId}-g3`, query: `${p.name} gold jewelry detail close up`, ratio: '4x5' },
  { id: `${p.imgId2}-g4`, query: `${p.name} jewelry on neutral background`, ratio: '4x5' },
]

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-gold/15">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-widest2 text-ink">{title}</span>
        <ChevronDown
          size={16}
          className={cn('text-ink transition-transform duration-300', open && 'rotate-180')}
        />
      </button>
      <div className={cn('overflow-hidden transition-all duration-300', open ? 'max-h-96 pb-6' : 'max-h-0')}>
        <p className="text-sm text-muted leading-relaxed">{children}</p>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()

  const [tone, setTone] = useState(product?.tones[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-ink mb-4">Piece not found</h1>
          <Link to="/shop" className="text-xs uppercase tracking-widest2 text-gold hover:text-ink">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const shots = galleryShots(product)
  const related = getRelatedProducts(product.id, 4)

  const handleAdd = () => {
    addItem(product, tone, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-5">
        <nav className="text-xs uppercase tracking-widest2 text-muted flex items-center gap-2">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pb-20">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 md:w-20">
            {shots.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveImg(i)}
                className={cn(
                  'w-16 md:w-20 aspect-[4/5] bg-sand overflow-hidden border transition-colors',
                  activeImg === i ? 'border-gold' : 'border-transparent hover:border-gold/40'
                )}
              >
                <img
                  data-strk-img-id={`${s.id}-thumb`}
                  data-strk-img={s.query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src={PLACEHOLDER}
                  alt={`${product.name} view ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
          {/* Main image */}
          <div className="flex-1 aspect-[4/5] bg-sand overflow-hidden">
            <img
              data-strk-img-id={`${shots[activeImg].id}-main`}
              data-strk-img={shots[activeImg].query}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src={PLACEHOLDER}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="lg:py-4">
          <p className="text-xs uppercase tracking-widest2 text-gold mb-3">{product.category}</p>
          <h1
            id={product.titleId}
            className="font-serif text-3xl md:text-4xl uppercase tracking-wider text-ink mb-4"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.shortDesc}
          </p>

          <div className="flex items-center gap-3 mb-5">
            <StarRating rating={product.rating} size={15} />
            <span className="text-xs text-muted">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="font-serif text-3xl text-ink mb-6">{formatPrice(product.price)}</p>

          <p className="text-muted leading-relaxed mb-8">{product.shortDesc}</p>

          {/* Tone selector */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest2 text-ink mb-3">
              Tone: <span className="text-muted">{tone}</span>
            </p>
            <div className="flex gap-3">
              {product.tones.map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={cn(
                    'px-6 py-2.5 text-xs uppercase tracking-widest2 border transition-all',
                    tone === t
                      ? 'border-gold bg-gold text-cream'
                      : 'border-gold/40 text-ink hover:border-gold'
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest2 text-ink mb-3">Quantity</p>
            <div className="inline-flex items-center border border-gold/30">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-ink hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="px-6 text-sm text-ink">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-ink hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAdd}
            className={cn(
              'w-full py-4 text-xs uppercase tracking-widest2 transition-colors flex items-center justify-center gap-2',
              added ? 'bg-ink text-cream' : 'bg-gold text-cream hover:bg-gold-soft'
            )}
          >
            {added ? (
              <>
                <Check size={16} /> Added to Bag
              </>
            ) : (
              `Add to Bag — ${formatPrice(product.price * quantity)}`
            )}
          </button>

          <p className="text-xs text-muted text-center mt-4">
            Free worldwide shipping · 30-day returns · Lifetime plating warranty
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion title="Description" defaultOpen>
              {product.description}
            </Accordion>
            <Accordion title="Materials & Care">{product.materials}</Accordion>
            <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="py-16 md:py-20 bg-sand/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-ink">You may also like</h2>
            <Link
              to="/shop"
              className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink hover:text-gold transition-colors"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
