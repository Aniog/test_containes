import { useEffect, useRef, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Minus, Plus, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import ProductGallery from '@/components/product/ProductGallery'
import ProductCard from '@/components/product/ProductCard'
import Accordion from '@/components/product/Accordion'
import StarRating from '@/components/ui/StarRating'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const related = getRelatedProducts(id, 4)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id])

  const [tone, setTone] = useState(product?.tones[0] || 'Gold')
  const [qty, setQty] = useState(1)
  const { addItem } = useCart()

  if (!product) return <Navigate to="/shop" replace />

  const handleAdd = () => addItem(product, tone, qty)

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materialsCare },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-8xl px-6 md:px-10 py-5">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-stone">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <section className="mx-auto max-w-8xl px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <ProductGallery product={product} />

          <div className="md:py-4">
            {product.badge && (
              <span className="inline-block bg-sand text-ink text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 mb-5">
                {product.badge}
              </span>
            )}
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl uppercase tracking-[0.12em] text-ink leading-tight"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">
              {product.short}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <StarRating value={product.rating} size={15} />
              <span className="text-xs text-stone">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="font-serif text-2xl text-gold mt-5">{formatPrice(product.price)}</p>

            <p className="mt-5 text-stone leading-relaxed">{product.short}</p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-charcoal mb-3">
                Tone: <span className="text-stone">{tone}</span>
              </p>
              <div className="flex gap-3">
                {product.tones.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={cn(
                      'px-6 py-3 text-xs uppercase tracking-[0.15em] border transition-all duration-300',
                      tone === t
                        ? 'border-gold bg-gold text-cream'
                        : 'border-hairline text-charcoal hover:border-gold'
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-hairline">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-4 text-charcoal hover:text-gold transition-colors"
                >
                  <Minus size={15} strokeWidth={1.5} />
                </button>
                <span className="px-5 text-sm text-charcoal min-w-[3ch] text-center">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-4 text-charcoal hover:text-gold transition-colors"
                >
                  <Plus size={15} strokeWidth={1.5} />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.18em] bg-gold text-cream hover:bg-[#9a763f] transition-colors duration-300"
              >
                Add to Cart — {formatPrice(product.price * qty)}
              </button>
            </div>

            <p className="mt-5 text-xs text-stone">
              Free worldwide shipping · 30-day returns · Ships within 24 hours
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordions} />
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-sand py-20 md:py-24">
        <div className="mx-auto max-w-8xl px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-ink text-center mb-12">
            You May Also Like
          </h2>
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
