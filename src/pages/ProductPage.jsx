import { useState, useEffect, useRef } from 'react'
import { Star, Plus, Minus, ChevronDown, ShoppingBag } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { formatPrice } from '@/lib/utils'
import ProductCard from '@/components/product/ProductCard'

const ACCORDIONS = [
  { key: 'description', label: 'Description', field: 'description' },
  { key: 'materials', label: 'Materials & Care', field: 'materials' },
  { key: 'shipping', label: 'Shipping & Returns', field: 'shipping' },
]

const SHIPPING_TEXT =
  'Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days and arrive in signature Velmora packaging. Enjoy 30-day returns on unworn pieces — no questions asked.'

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [slug])

  const [tone, setTone] = useState(product?.tones?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-24">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <p className="mt-3 text-stone">The jewelry you are looking for may have moved.</p>
        <Link
          to="/shop"
          className="mt-8 px-8 py-3.5 text-xs uppercase tracking-widest2 bg-ink text-cream hover:bg-champagne-deep transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product, 4)
  const gallery = [
    { id: `${product.id}-g1`, query: `${product.shortDescription} ${product.name} gold jewelry editorial product` },
    { id: `${product.id}-g2`, query: `${product.name} ${product.category.toLowerCase()} worn on model gold jewelry` },
    { id: `${product.id}-g3`, query: `${product.name} gold jewelry detail close up macro` },
    { id: `${product.id}-g4`, query: `${product.name} gold jewelry on neutral background studio` },
  ]

  const handleAdd = () => {
    addItem(product, { tone, quantity })
  }

  const accordionContent = (key) => {
    if (key === 'shipping') return SHIPPING_TEXT
    return product[key] || ''
  }

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-6">
        <nav className="text-xs uppercase tracking-widest3 text-stone">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-3 md:max-h-[600px] overflow-x-auto md:overflow-y-auto no-scrollbar">
            {gallery.map((img, i) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setActiveImage(i)}
                className="relative flex-shrink-0 w-20 h-24 md:w-20 md:h-24 overflow-hidden bg-sand border transition-colors"
                style={{ borderColor: activeImage === i ? '#1A1714' : 'transparent' }}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  alt=""
                  data-strk-img-id={`${img.id}-thumb`}
                  data-strk-img={`[pdp-title] ${img.query}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-sand">
            <img
              alt={product.name}
              data-strk-img-id={`${gallery[activeImage].id}-main`}
              data-strk-img={`[pdp-title] ${gallery[activeImage].query}`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          {product.badge && (
            <p className="text-xs uppercase tracking-widest2 text-champagne-deep mb-3">
              {product.badge}
            </p>
          )}
          <h1
            id="pdp-title"
            className="font-serif text-3xl md:text-4xl text-ink uppercase tracking-wider leading-tight"
          >
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-champagne text-champagne"
                />
              ))}
            </div>
            <span className="text-xs text-stone">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <p className="font-serif text-2xl text-ink mt-5">{formatPrice(product.price)}</p>

          <p className="mt-5 text-stone leading-relaxed">{product.shortDescription}</p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest3 text-stone mb-3">
              Tone: <span className="text-ink">{tone}</span>
            </p>
            <div className="flex gap-3">
              {product.tones.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className="px-6 py-2.5 rounded-full text-xs uppercase tracking-widest3 border transition-colors duration-300"
                  style={
                    tone === t
                      ? { backgroundColor: '#1A1714', color: '#F7F3EC', borderColor: '#1A1714' }
                      : { backgroundColor: 'transparent', color: '#1A1714', borderColor: '#E2D9CC' }
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center border border-line">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3.5 text-ink hover:text-champagne-deep transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-5 text-sm text-ink min-w-[3ch] text-center">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3.5 text-ink hover:text-champagne-deep transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 py-4 bg-ink text-cream text-xs uppercase tracking-widest2 hover:bg-champagne-deep transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" /> Add to Bag
            </button>
          </div>

          {/* Accordions */}
          <div className="mt-10 border-t border-line">
            {ACCORDIONS.map((acc) => {
              const isOpen = openAccordion === acc.key
              return (
                <div key={acc.key} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isOpen ? null : acc.key)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-xs uppercase tracking-widest2 text-ink">
                      {acc.label}
                    </span>
                    <ChevronDown
                      className="w-4 h-4 text-stone transition-transform duration-300"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-6 text-sm text-stone leading-relaxed animate-overlay-in">
                      {accordionContent(acc.field)}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-ink">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
