import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Minus, Plus, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { formatPrice, getProductBySlug, placeholderSrc, products } from '@/data/products'
import { useCart } from '@/cart/CartContext'
import { useStrkImages } from '@/lib/useStrkImages'

const tones = ['Gold', 'Silver']

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const { addToCart } = useCart()
  const containerRef = useStrkImages([slug, activeImage])

  const related = useMemo(
    () => products.filter((item) => item.id !== product?.id).slice(0, 4),
    [product],
  )

  if (!product) return <Navigate to="/shop" replace />

  const gallery = [
    { id: `detail-main-${product.id}`, label: 'Studio detail' },
    { id: `detail-worn-${product.id}`, label: 'Worn editorial' },
    { id: `detail-gift-${product.id}`, label: 'Gift styling' },
  ]

  return (
    <main ref={containerRef} className="bg-velmora-ivory pb-20 pt-24 text-velmora-espresso sm:pt-28">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[5rem_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`shrink-0 overflow-hidden rounded-2xl border bg-velmora-champagne transition ${activeImage === index ? 'border-velmora-gold' : 'border-velmora-line'}`}
                aria-label={`Show ${image.label}`}
              >
                <img
                  alt={`${product.name} ${image.label}`}
                  className="h-20 w-20 object-cover"
                  data-strk-img-id={`${image.id}-thumb-6b2d`}
                  data-strk-img={`[detail-search-${product.id}] [${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="220"
                  src={placeholderSrc}
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-champagne shadow-velvet lg:order-2">
            <img
              alt={product.name}
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id={`${gallery[activeImage].id}-large-91ad`}
              data-strk-img={`[detail-search-${product.id}] [${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              src={placeholderSrc}
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:h-fit">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze transition hover:text-velmora-espresso">
            Back to shop
          </Link>
          <div className="mt-5 border-b border-velmora-line pb-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze">{product.category} · {product.material}</p>
            <h1 id={product.titleId} className="mt-4 font-serif text-4xl font-semibold uppercase leading-tight tracking-[0.16em] text-velmora-espresso sm:text-5xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="font-serif text-3xl font-semibold text-velmora-espresso">{formatPrice(product.price)}</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-velmora-mink">
                <span className="flex text-velmora-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </span>
                {product.rating} ({product.reviews})
              </div>
            </div>
          </div>

          <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-mink">{product.description}</p>
          <span id={`detail-search-${product.id}`} className="sr-only">{product.query}</span>

          <div className="mt-8 space-y-6">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-bronze">Tone</p>
              <div className="flex gap-3">
                {tones.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTone(item)}
                    className={`rounded-full border px-5 py-3 text-sm font-bold transition ${tone === item ? 'border-velmora-gold bg-velmora-gold text-velmora-espresso' : 'border-velmora-line bg-velmora-porcelain text-velmora-mink hover:border-velmora-gold hover:text-velmora-espresso'}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-bronze">Quantity</p>
              <div className="inline-flex items-center rounded-full border border-velmora-line bg-velmora-porcelain">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-4 text-velmora-espresso" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-12 text-center font-bold text-velmora-espresso">{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-4 text-velmora-espresso" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => addToCart(product, quantity, tone)}
              className="w-full rounded-full bg-velmora-espresso px-8 py-4 text-xs font-extrabold uppercase tracking-[0.26em] text-velmora-porcelain shadow-soft transition hover:bg-velmora-gold hover:text-velmora-espresso"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8 divide-y divide-velmora-line rounded-[1.5rem] border border-velmora-line bg-velmora-porcelain text-velmora-espresso">
            <Accordion title="Description">{product.details}</Accordion>
            <Accordion title="Materials & Care">{product.material}. {product.care}</Accordion>
            <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between border-b border-velmora-line pb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Complete the edit</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-[-0.03em] text-velmora-espresso">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-bronze transition hover:text-velmora-espresso sm:block">View all</Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} compact />
          ))}
        </div>
      </section>
    </main>
  )
}

function Accordion({ title, children }) {
  return (
    <details className="group px-5 py-4" open={title === 'Description'}>
      <summary className="cursor-pointer list-none text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso marker:hidden">
        <span className="flex items-center justify-between">
          {title}
          <span className="text-xl font-light text-velmora-bronze transition group-open:rotate-45">+</span>
        </span>
      </summary>
      <p className="mt-4 text-sm leading-7 text-velmora-mink">{children}</p>
    </details>
  )
}
