import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/product/ProductCard'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [tone, setTone] = useState(product?.tones?.[0] || 'Gold')
  const [qty, setQty] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    setTone(product?.tones?.[0] || 'Gold')
    setQty(1)
    setActiveImage(0)
  }, [id, product])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 pt-24 text-center">
        <h1 className="font-serif text-3xl text-velmora-ink">Piece not found</h1>
        <Link
          to="/shop"
          className="mt-6 bg-velmora-gold px-8 py-3.5 text-[11px] uppercase tracking-[0.18em] text-white"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const gallery = [
    { imgId: product.imgId, ratio: '3x4' },
    { imgId: product.imgIdAlt, ratio: '3x4' },
  ]
  // Stable thumbnail IDs that the image plugin can statically resolve per product.
  const thumbIds = [product.imgId, product.imgIdAlt]

  const handleAddToCart = () => {
    addItem(product, { tone, qty })
  }

  const accordions = [
    {
      title: 'Description',
      content: (
        <div className="space-y-3">
          <p>{product.description}</p>
          <ul className="space-y-1.5">
            {product.details.map((d) => (
              <li key={d} className="flex gap-2">
                <span className="text-velmora-gold">—</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <p>
            <span className="text-velmora-ink">Material:</span> {product.material}. Hypoallergenic and nickel-free.
          </p>
          <p>{product.care}</p>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <p>Free worldwide shipping on all orders. Orders ship within 1–2 business days.</p>
          <p>Enjoy 30-day returns on unworn pieces in original packaging.</p>
        </div>
      ),
    },
  ]

  return (
    <div ref={containerRef} className="pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 py-5 md:px-8">
        <nav className="text-[11px] uppercase tracking-[0.15em] text-velmora-stone">
          <Link to="/" className="hover:text-velmora-ink">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-ink">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse gap-4 md:flex-row">
            <div className="flex gap-3 md:flex-col">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    'h-20 w-16 shrink-0 overflow-hidden border bg-velmora-sand transition-colors md:h-24 md:w-20',
                    activeImage === i ? 'border-velmora-gold' : 'border-transparent',
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    data-strk-img-id={thumbIds[i]}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src={PLACEHOLDER}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="relative aspect-[3/4] flex-1 overflow-hidden bg-velmora-sand">
              <img
                data-strk-img-id={gallery[activeImage].imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src={PLACEHOLDER}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-velmora-gold">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="mt-3 font-serif text-3xl uppercase tracking-[0.1em] text-velmora-ink md:text-4xl"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">
              {product.tagline}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <StarRating value={product.rating} size={15} />
              <span className="text-xs text-velmora-stone">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 font-serif text-3xl text-velmora-gold">
              {formatPrice(product.price)}
            </p>

            <p className="mt-5 text-sm leading-relaxed text-velmora-stone">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-velmora-ink">
                Tone: <span className="text-velmora-stone">{tone}</span>
              </p>
              <div className="flex gap-3">
                {product.tones.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={cn(
                      'min-w-24 border px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] transition-colors',
                      tone === t
                        ? 'border-velmora-ink bg-velmora-ink text-velmora-cream'
                        : 'border-velmora-line text-velmora-ink hover:border-velmora-ink',
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-velmora-ink">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-line">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-velmora-stone transition-colors hover:text-velmora-ink"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="min-w-10 text-center text-sm text-velmora-ink">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-3 text-velmora-stone transition-colors hover:text-velmora-ink"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-8 w-full bg-velmora-gold py-4 text-[11px] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-velmora-gold-deep"
            >
              Add to Cart — {formatPrice(product.price * qty)}
            </button>

            <p className="mt-4 text-center text-[11px] uppercase tracking-[0.12em] text-velmora-stone">
              Free shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordions} defaultOpen={0} />
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-24">
          <div className="mb-10 text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-velmora-gold">
              Complete the Look
            </p>
            <h2 className="mt-3 font-serif text-3xl text-velmora-ink md:text-4xl">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
