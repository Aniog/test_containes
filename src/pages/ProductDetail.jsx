import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/product/ProductCard'
import { formatPrice, getProductById, products } from '@/data/products'

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
const getImageSrc = (imageId) => strkImgConfig?.[imageId]?.results?.[0]?.url ?? placeholder

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-taupe/60">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso"
        aria-expanded={open}
      >
        {title}
        <ChevronDown className={`h-4 w-4 text-velmora-gold transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="pb-6 text-sm leading-7 text-velmora-cocoa">{children}</div>}
    </div>
  )
}

export default function ProductDetail({ onAddToCart }) {
  const { id } = useParams()
  const product = getProductById(id)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const containerRef = useRef(null)

  const gallery = useMemo(
    () => [
      {
        id: `${product.id}-gallery-primary`,
        imgId: product.imgId,
        label: `${product.name} studio view`,
      },
      {
        id: `${product.id}-gallery-worn`,
        imgId: product.hoverImgId,
        label: `${product.name} worn detail`,
      },
      {
        id: `${product.id}-gallery-packaging`,
        imgId: product.imgId,
        label: `${product.name} Velmora packaging`,
      },
    ],
    [product],
  )

  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  useEffect(() => {
    setVariant('Gold')
    setQuantity(1)
    setActiveImage(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [product.id])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [product.id, activeImage])

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-8 sm:px-8 md:pb-24 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="grid gap-4 md:grid-cols-[92px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
            {gallery.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`aspect-square w-20 shrink-0 overflow-hidden border bg-velmora-blush transition md:w-full ${activeImage === index ? 'border-velmora-gold' : 'border-velmora-taupe/60'}`}
                aria-label={`View ${image.label}`}
              >
                <img
                  alt={image.label}
                  className="h-full w-full object-cover"
                  src={getImageSrc(image.imgId)}
                />
              </button>
            ))}
          </div>

          <div className="order-1 relative overflow-hidden bg-velmora-blush shadow-soft md:order-2">
            <img
              alt={gallery[activeImage].label}
              className="aspect-[4/5] h-full w-full object-cover"
              src={getImageSrc(gallery[activeImage].imgId)}
            />
          </div>
        </div>

        <section className="lg:pl-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">{product.category}</p>
          <h1 id={product.titleId} className="mt-4 font-serif text-5xl uppercase leading-tight tracking-[0.18em] text-velmora-espresso md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="text-2xl font-semibold text-velmora-espresso">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-cocoa">
              <span className="flex text-velmora-gold" aria-label={`${product.rating} star rating`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </span>
              {product.rating} ({product.reviews} reviews)
            </div>
          </div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-cocoa">
            {product.description}
          </p>

          <div className="mt-8 border-y border-velmora-taupe/60 py-7">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso">Tone</p>
            <div className="mt-4 flex gap-3">
              {['Gold', 'Silver'].map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setVariant(tone)}
                  className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] transition ${
                    variant === tone
                      ? 'border-velmora-espresso bg-velmora-espresso text-velmora-pearl'
                      : 'border-velmora-taupe bg-velmora-pearl text-velmora-espresso hover:border-velmora-gold'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso">Quantity</p>
                <div className="mt-3 flex items-center rounded-full border border-velmora-taupe bg-velmora-pearl text-velmora-espresso">
                  <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-3 text-velmora-cocoa hover:text-velmora-gold" aria-label="Decrease quantity">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-12 text-center text-sm font-semibold">{quantity}</span>
                  <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-3 text-velmora-cocoa hover:text-velmora-gold" aria-label="Increase quantity">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onAddToCart(product, quantity, variant)}
            className="mt-7 w-full rounded-full bg-velmora-champagne px-8 py-5 text-sm font-extrabold uppercase tracking-[0.24em] text-velmora-espresso shadow-glow transition hover:bg-velmora-espresso hover:text-velmora-pearl"
          >
            Add to Cart
          </button>

          <div className="mt-7">
            <Accordion title="Description" defaultOpen>
              {product.details}
            </Accordion>
            <Accordion title="Materials & Care">
              {product.care}
            </Accordion>
            <Accordion title="Shipping & Returns">
              Free worldwide shipping on orders over $75. Enjoy 30-day returns on unworn pieces in original packaging.
            </Accordion>
          </div>
        </section>
      </section>

      <section className="bg-velmora-pearl py-16 text-velmora-espresso md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-9 flex items-end justify-between gap-5 border-b border-velmora-taupe/60 pb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Complete the ritual</p>
              <h2 className="mt-3 font-serif text-5xl">You may also like</h2>
            </div>
            <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso hover:text-velmora-gold md:block">
              Shop all
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
