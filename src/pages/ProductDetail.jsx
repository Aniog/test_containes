import { useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Plus, Minus, ChevronDown, Check, ArrowRight } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { useStrkImages, PLACEHOLDER } from '@/lib/strk'
import Stars from '@/components/Stars'
import ProductCard from '@/components/ProductCard'

const accordions = [
  { key: 'description', label: 'Description' },
  { key: 'materials', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

const shippingText =
  'Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days and delivered in 3–7 business days. Enjoy 30-day returns on unworn pieces in their original packaging — no questions asked.'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [activeImg, setActiveImg] = useState(0)
  const [variant, setVariant] = useState(product?.variants?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAcc, setOpenAcc] = useState('description')
  const [added, setAdded] = useState(false)

  useStrkImages(containerRef, [id])

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-32 text-center">
        <h1 className="font-serif text-4xl mb-4">Piece not found</h1>
        <Link to="/shop" className="text-gold underline">Return to shop</Link>
      </div>
    )
  }

  const related = getRelatedProducts(id, 4)

  const handleAdd = () => {
    addItem(product, { variant, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const accBody = {
    description: product.description,
    materials: `${product.materials}\n\nCare: ${product.care}`,
    shipping: shippingText,
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 text-xs text-ink-soft">
        <Link to="/" className="hover:text-gold">Home</Link>
        <span className="mx-2 text-stone">/</span>
        <Link to="/shop" className="hover:text-gold">Shop</Link>
        <span className="mx-2 text-stone">/</span>
        <span className="text-ink">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-14 pb-20">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-3 md:max-h-[600px] overflow-x-auto md:overflow-y-auto no-scrollbar">
            {product.images.map((img, i) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setActiveImg(i)}
                className={cn(
                  'shrink-0 w-20 h-20 md:w-20 md:h-20 overflow-hidden border transition-colors',
                  activeImg === i ? 'border-gold' : 'border-line hover:border-stone'
                )}
              >
                <img
                  src={PLACEHOLDER}
                  alt={img.alt}
                  data-strk-img-id={img.id}
                  data-strk-img={product.name}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="flex-1 aspect-[4/5] bg-sand overflow-hidden relative">
            {product.images.map((img, i) => (
              <img
                key={img.id}
                src={PLACEHOLDER}
                alt={img.alt}
                data-strk-img-id={img.id}
                data-strk-img={product.name}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                className={cn(
                  'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
                  activeImg === i ? 'opacity-100' : 'opacity-0'
                )}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="text-[0.7rem] uppercase tracking-[0.25em] text-gold mb-3">
            {product.category}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-[0.1em] leading-tight">
            {product.name}
          </h1>
          <div className="flex items-center gap-3 mt-4">
            <Stars rating={product.rating} />
            <span className="text-sm text-ink-soft">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>
          <p className="text-2xl font-serif mt-5">{formatPrice(product.price)}</p>
          <p className="mt-5 text-ink-soft leading-relaxed">{product.shortDesc}</p>

          {/* Variants */}
          <div className="mt-8">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft mb-3">
              Tone
            </p>
            <div className="flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={cn(
                    'px-6 py-2.5 text-xs uppercase tracking-[0.15em] font-medium border transition-colors',
                    variant === v
                      ? 'border-gold bg-gold/10 text-ink'
                      : 'border-line text-ink-soft hover:border-stone'
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft mb-3">
              Quantity
            </p>
            <div className="inline-flex items-center border border-line">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2.5 hover:bg-sand transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="px-5 text-sm tabular-nums">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2.5 hover:bg-sand transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={handleAdd}
            className={cn(
              'w-full mt-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] font-semibold transition-colors flex items-center justify-center gap-2',
              added ? 'bg-ink-soft text-cream' : 'bg-gold text-cream hover:bg-gold-deep'
            )}
          >
            {added ? (
              <><Check className="w-4 h-4" /> Added to Bag</>
            ) : (
              'Add to Bag'
            )}
          </button>

          <p className="mt-4 text-xs text-stone text-center">
            Free shipping · 30-day returns · Ships in 1–2 business days
          </p>

          {/* Accordions */}
          <div className="mt-10 border-t border-line">
            {accordions.map((acc) => {
              const open = openAcc === acc.key
              return (
                <div key={acc.key} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpenAcc(open ? null : acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-[0.75rem] uppercase tracking-[0.2em] font-semibold text-ink">
                      {acc.label}
                    </span>
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 text-ink-soft transition-transform',
                        open && 'rotate-180'
                      )}
                    />
                  </button>
                  {open && (
                    <p className="pb-5 text-sm text-ink-soft leading-relaxed whitespace-pre-line animate-fade">
                      {accBody[acc.key]}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-sand/50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-serif text-3xl md:text-4xl">You may also like</h2>
            <Link
              to="/shop"
              className="hidden md:inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-ink hover:text-gold transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
