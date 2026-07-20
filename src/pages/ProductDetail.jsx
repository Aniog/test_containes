import { Link, useParams } from 'react-router-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronDown, Minus, Plus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '@/components/product/ProductCard.jsx'
import StarRating from '@/components/product/StarRating.jsx'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'

const tones = ['Gold', 'Silver']
const accordions = [
  { title: 'Description', key: 'detail' },
  { title: 'Materials & Care', key: 'care' },
  { title: 'Shipping & Returns', key: 'shipping' },
]

export default function ProductDetail({ onAddToCart }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const [activeImage, setActiveImage] = useState(0)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [product.id, activeImage])

  const related = useMemo(() => products.filter((item) => item.id !== product.id).slice(0, 4), [product.id])
  const gallery = [
    { id: `${product.id}-gallery-main`, label: 'Editorial product detail' },
    { id: `${product.id}-gallery-worn`, label: 'Jewelry worn close up' },
    { id: `${product.id}-gallery-styled`, label: 'Warm styling detail' },
    { id: `${product.id}-gallery-gift`, label: 'Velmora gift packaging' },
  ]

  const getAccordionCopy = (key) => {
    if (key === 'detail') return product.detail
    if (key === 'care') return product.care
    return 'Enjoy free worldwide shipping, gift-ready packaging, and 30-day returns on unworn pieces in their original condition.'
  }

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        <div className="grid gap-4 md:grid-cols-[92px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
            {gallery.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`w-20 flex-none overflow-hidden rounded-t-2xl border bg-velmora-champagne transition ${activeImage === index ? 'border-velmora-gold' : 'border-velmora-stone'}`}
                aria-label={`View ${image.label}`}
              >
                <img
                  alt={`${product.name} ${image.label}`}
                  className="aspect-square w-full object-cover"
                  data-strk-img-id={`thumb-${image.id}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="240"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden rounded-t-[3rem] bg-velmora-champagne shadow-soft md:order-2">
            <img
              alt={`${product.name} ${gallery[activeImage].label}`}
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id={`main-${gallery[activeImage].id}`}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1100"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>

        <div className="lg:pl-6">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">{product.category}</p>
          <h1 id={product.titleId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-tight tracking-[0.18em] md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-5">
            <p className="text-2xl font-semibold text-velmora-espresso">${product.price}</p>
            <StarRating rating={product.rating} reviews={product.reviews} />
          </div>
          <p id={product.descId} className="mt-6 max-w-xl text-base leading-8 text-velmora-taupe">
            {product.description}
          </p>

          <div className="mt-8 border-y border-velmora-stone py-7">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-taupe">Tone</p>
            <div className="mt-3 flex gap-3">
              {tones.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setTone(option)}
                  className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${tone === option ? 'border-velmora-espresso bg-velmora-espresso text-velmora-pearl' : 'border-velmora-stone bg-velmora-pearl text-velmora-espresso hover:border-velmora-gold'}`}
                >
                  {option} Tone
                </button>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-taupe">Quantity</p>
              <div className="flex items-center rounded-full border border-velmora-stone bg-velmora-pearl">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-3 text-velmora-espresso" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center text-sm font-bold">{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-3 text-velmora-espresso" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onAddToCart(product, { quantity, variant: `${tone} Tone` })}
            className="mt-7 w-full rounded-full bg-velmora-gold px-8 py-5 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso shadow-soft transition hover:bg-velmora-espresso hover:text-velmora-pearl"
          >
            Add to Cart
          </button>

          <div className="mt-8 divide-y divide-velmora-stone border-y border-velmora-stone">
            {accordions.map((item) => (
              <div key={item.title}>
                <button type="button" onClick={() => setOpenAccordion(openAccordion === item.title ? '' : item.title)} className="flex w-full items-center justify-between py-5 text-left text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-espresso">
                  {item.title}
                  <ChevronDown className={`h-4 w-4 transition ${openAccordion === item.title ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {openAccordion === item.title && (
                  <p className="pb-6 text-sm leading-7 text-velmora-taupe">{getAccordionCopy(item.key)}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-stone bg-velmora-pearl py-16 text-velmora-espresso md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Complete the ritual</p>
              <h2 className="mt-3 font-serif text-5xl font-semibold">You may also like</h2>
            </div>
            <Link to="/shop" className="hidden text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso hover:text-velmora-gold md:block">Shop all</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />)}
          </div>
        </div>
      </section>
    </main>
  )
}
