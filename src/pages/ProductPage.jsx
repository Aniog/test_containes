import { useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Minus, Plus, ShoppingBag } from 'lucide-react'
import { formatPrice, products } from '@/data/products'
import Accordion from '@/components/products/Accordion'
import ProductCard from '@/components/products/ProductCard'
import StarRating from '@/components/products/StarRating'
import { useImageLoader } from '@/hooks/useImageLoader'

const galleryLabels = ['Editorial close-up', 'Styled on model', 'Gift-ready detail']

export default function ProductPage({ onAddToCart }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)
  const [activeImage, setActiveImage] = useState(0)
  const [variant, setVariant] = useState('Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const containerRef = useRef(null)

  const related = useMemo(() => {
    if (!product) return []
    return products.filter((item) => item.id !== product.id).slice(0, 4)
  }, [product])

  useImageLoader(containerRef, [productId, activeImage])

  if (!product) return <Navigate to="/shop" replace />

  const galleryId = `pdp-${product.id}-gallery-${activeImage}`
  const activeLabelId = `pdp-${product.id}-gallery-label-${activeImage}`

  const accordions = [
    { title: 'Description', content: product.details },
    { title: 'Materials & Care', content: product.care },
    { title: 'Shipping & Returns', content: 'Free worldwide shipping on every order. If it is not love, return unworn pieces within 30 days in original packaging.' },
  ]

  return (
    <main ref={containerRef} className="bg-velmora-ivory pb-20 pt-28 text-velmora-ink lg:pt-32">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[5rem_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {galleryLabels.map((label, index) => (
              <button
                key={label}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`aspect-square w-20 shrink-0 overflow-hidden border transition ${activeImage === index ? 'border-velmora-gold' : 'border-velmora-ink/10'}`}
                aria-label={`View ${label}`}
              >
                <img
                  alt={`${product.name} ${label}`}
                  data-strk-img-id={`pdp-thumb-${product.id}-${index}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [pdp-${product.id}-gallery-label-${index}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="180"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
                <span id={`pdp-${product.id}-gallery-label-${index}`} className="sr-only">{label}</span>
              </button>
            ))}
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-sand shadow-editorial lg:order-2">
            <img
              key={galleryId}
              alt={`${product.name} ${galleryLabels[activeImage]}`}
              data-strk-img-id={galleryId}
              data-strk-img={`[${product.descId}] [${product.titleId}] [${activeLabelId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:pl-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-bronze">{product.category}</p>
          <h1 id={product.titleId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-none tracking-[0.16em] text-velmora-ink md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center justify-between gap-5">
            <p className="font-serif text-4xl font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
            <StarRating rating={product.rating} reviews={product.reviews} />
          </div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-cocoa">{product.description}</p>

          <div className="mt-8 border-y border-velmora-ink/10 py-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink">Tone</p>
            <div className="flex flex-wrap gap-3">
              {['Gold Tone', 'Silver Tone'].map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setVariant(tone)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${variant === tone ? 'border-velmora-ink bg-velmora-ink text-velmora-pearl' : 'border-velmora-ink/15 bg-velmora-pearl text-velmora-ink hover:border-velmora-gold'}`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <div className="flex h-14 w-36 items-center justify-between border border-velmora-ink/15 bg-velmora-pearl text-velmora-ink">
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="px-4 py-4" aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-bold">{quantity}</span>
              <button type="button" onClick={() => setQuantity((value) => value + 1)} className="px-4 py-4" aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => onAddToCart(product, { variant, quantity })}
              className="flex h-14 flex-1 items-center justify-center gap-3 bg-velmora-gold px-7 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-ink transition hover:bg-velmora-ink hover:text-velmora-pearl"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>

          <div className="mt-8">
            <Accordion items={accordions} />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-5">
          <h2 className="font-serif text-4xl font-semibold text-velmora-ink">You may also like</h2>
          <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze underline underline-offset-8">Shop all</Link>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} context="related" />
          ))}
        </div>
      </section>
    </main>
  )
}
