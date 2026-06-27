import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Plus, Minus, ChevronRight } from 'lucide-react'
import { getProduct, getRelated, formatPrice, PRODUCTS } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useStrkImages } from '@/components/StrkImage'
import Accordion from '@/components/Accordion'
import ProductCard from '@/components/ProductCard'
import ProductGallery from '@/components/ProductGallery'
import { cn } from '@/lib/utils'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProduct(id)
  const { addItem } = useCart()
  const ref = useStrkImages([id])

  const [tone, setTone] = useState(product?.tones?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setTone(product?.tones?.[0] || 'Gold')
    setQuantity(1)
    setActiveImg(0)
    setAdded(false)
  }, [id, product])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 pt-24">
        <p className="font-serif text-3xl text-ink">Piece not found</p>
        <Link to="/shop" className="text-[11px] uppercase tracking-[0.22em] text-gold hover:text-gold-deep">
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelated(product, 4)

  const handleAdd = () => {
    addItem(product, { tone, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 2200)
  }

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on orders over $75. Standard delivery 5–8 business days; express available at checkout. Enjoy 30-day hassle-free returns on unworn pieces in original packaging.',
    },
  ]

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink-soft">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery — render via a static PRODUCTS.map() so the image
              plugin resolves every gallery image ID (props pattern). */}
          {PRODUCTS.filter((p) => p.id === product.id).map((p) => (
            <ProductGallery
              key={p.id}
              product={p}
              activeImg={activeImg}
              setActiveImg={setActiveImg}
            />
          ))}

          {/* Info */}
          <div className="md:py-4">
            {product.badge && (
              <span className="inline-block bg-cream text-ink text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 mb-5">
                {product.badge}
              </span>
            )}
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl text-ink uppercase tracking-[0.12em] leading-tight"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">
              {product.shortDesc}
            </p>

            <div className="flex items-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < Math.round(product.rating)
                        ? 'fill-gold text-gold'
                        : 'text-sand'
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-ink-soft">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 font-serif text-3xl text-ink">{formatPrice(product.price)}</p>

            <p className="mt-5 text-ink-soft leading-relaxed">{product.shortDesc}</p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink-soft mb-3">
                Finish — {tone}
              </p>
              <div className="flex gap-3">
                {product.tones.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={cn(
                      'px-6 py-3 text-[11px] uppercase tracking-[0.2em] border transition-all duration-300',
                      tone === t
                        ? 'border-ink bg-ink text-ivory'
                        : 'border-sand text-ink-soft hover:border-ink hover:text-ink'
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink-soft mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-sand">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="px-4 py-3 text-ink-soft hover:text-ink transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-5 text-sm text-ink min-w-[3ch] text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="px-4 py-3 text-ink-soft hover:text-ink transition-colors"
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
                'mt-8 w-full text-[11px] uppercase tracking-[0.25em] font-medium py-4 transition-colors duration-300',
                added ? 'bg-gold-deep text-ivory' : 'bg-gold text-ivory hover:bg-gold-deep'
              )}
            >
              {added ? 'Added to Bag ✓' : 'Add to Cart'}
            </button>

            <p className="mt-4 text-xs text-ink-soft text-center">
              Free shipping over $75 · 30-day returns · Ships in 1–2 business days
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordions} />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">You May Also Like</h2>
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
