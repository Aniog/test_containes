import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, ChevronRight } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Stars from '@/components/ui/Stars'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/product/ProductCard'
import { PLACEHOLDER_SRC } from '@/components/ui/StrkImage'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem, openCart } = useCart()

  const [tone, setTone] = useState(product?.tones?.[0] || 'Gold')
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setTone(product?.tones?.[0] || 'Gold')
    setQty(1)
    setActiveImg(0)
  }, [id, product])

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id, activeImg])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <Link to="/shop" className="mt-6 text-[11px] uppercase tracking-widest3 text-gold">
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const gallery = product.gallery || []

  const handleAdd = () => {
    addItem(product, { tone, qty })
    openCart()
  }

  return (
    <div ref={ref} className="bg-cream pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest3 text-muted">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-2 md:gap-16 md:px-10 md:py-14">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex gap-3 md:flex-col">
            {gallery.map((g, i) => (
              <button
                key={g.imgId}
                type="button"
                onClick={() => setActiveImg(i)}
                className={`relative aspect-[4/5] w-16 shrink-0 overflow-hidden border md:w-20 ${
                  activeImg === i ? 'border-gold' : 'border-line'
                }`}
              >
                <img
                  alt=""
                  data-strk-img-id={`${g.imgId}-thumb`}
                  data-strk-img={`[${g.descId}] [${g.titleId}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="160"
                  src={PLACEHOLDER_SRC}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-sand">
            <img
              alt={product.name}
              data-strk-img-id={`${gallery[activeImg]?.imgId || product.imgId}-main`}
              data-strk-img={`[${gallery[activeImg]?.descId || product.descId}] [${gallery[activeImg]?.titleId || product.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src={PLACEHOLDER_SRC}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">{product.category}</p>
          <h1
            id={product.titleId}
            className="mt-3 font-serif text-3xl uppercase tracking-widest3 text-ink md:text-4xl"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.short}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <Stars rating={product.rating} size={15} />
            <span className="text-xs text-muted">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-3xl text-ink">${product.price}</p>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-charcoal">{product.short}</p>

          {/* Tone selector */}
          {product.tones.length > 1 && (
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-widest2 text-muted">
                Tone: <span className="text-charcoal">{tone}</span>
              </p>
              <div className="mt-3 flex gap-3">
                {product.tones.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={`rounded-full border px-6 py-2 text-[11px] uppercase tracking-widest3 transition-colors ${
                      tone === t
                        ? 'border-ink bg-ink text-cream'
                        : 'border-line text-charcoal hover:border-ink'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity + Add */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-line">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="px-3 py-3 text-ink hover:text-gold"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center text-sm text-charcoal">{qty}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="px-3 py-3 text-ink hover:text-gold"
                onClick={() => setQty((q) => q + 1)}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="flex flex-1 items-center justify-center gap-2 bg-gold px-8 py-4 text-[11px] uppercase tracking-widest3 text-ink transition-colors hover:bg-gold-deep hover:text-cream"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>

          <p className="mt-4 text-xs text-muted">
            Free worldwide shipping · 30-day returns · {product.material}
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion
              items={[
                { title: 'Description', content: product.description },
                { title: 'Materials & Care', content: product.materials },
                { title: 'Shipping & Returns', content: product.shipping },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-line bg-sand/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12 text-center">
            <p className="text-[11px] uppercase tracking-widest2 text-gold">Complete the Look</p>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
