import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/cart'
import { placeholderSrc } from '@/lib/image-placeholders'
import { useStrkImages } from '@/lib/useStrkImages'

const accordionItems = [
  { id: 'description', title: 'Description' },
  { id: 'care', title: 'Materials & Care' },
  { id: 'shipping', title: 'Shipping & Returns' },
]

export default function ProductDetail({ onAddToCart }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)
  const [activeImage, setActiveImage] = useState(0)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')
  const containerRef = useStrkImages([productId, activeImage])

  const related = useMemo(() => {
    if (!product) return []
    return products.filter((item) => item.id !== product.id).slice(0, 4)
  }, [product])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const galleryLabels = [product.imageQuery, ...product.gallery]
  const activeLabelId = `detail-${product.id}-active-label`

  return (
    <main ref={containerRef} className="bg-velmora-ivory text-velmora-onyx">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-32 md:px-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="grid gap-4 lg:grid-cols-[88px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
            {galleryLabels.map((label, index) => (
              <button
                key={label}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`relative h-20 w-20 shrink-0 overflow-hidden border bg-velmora-champagne transition ${activeImage === index ? 'border-velmora-gold' : 'border-velmora-mist hover:border-velmora-stone'}`}
                aria-label={`View ${product.name} image ${index + 1}`}
              >
                <span id={`detail-${product.id}-thumb-${index}`} className="sr-only">{label}</span>
                <img
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`detail-thumb-${product.id}-${index}`}
                  data-strk-img={`[detail-${product.id}-thumb-${index}] [detail-${product.id}-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="220"
                  src={placeholderSrc}
                />
              </button>
            ))}
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-champagne shadow-velmora-soft lg:order-2">
            <span id={activeLabelId} className="sr-only">{galleryLabels[activeImage]}</span>
            <img
              alt={product.name}
              className="h-full w-full object-cover"
              data-strk-img-id={`detail-main-${product.id}-${activeImage}`}
              data-strk-img={`[${activeLabelId}] [detail-${product.id}-title] [detail-${product.id}-desc]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src={placeholderSrc}
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:h-fit">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-antique transition hover:text-velmora-onyx">Back to shop</Link>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.24em] text-velmora-stone">{product.category} · {product.material}</p>
          <h1 id={`detail-${product.id}-title`} className="mt-4 font-serif text-5xl uppercase leading-none tracking-[0.14em] text-velmora-onyx md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center gap-3">
            <div className="flex text-velmora-gold" aria-label={`${product.rating} star rating`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-sm text-velmora-stone">{product.rating} ({product.reviews} reviews)</span>
          </div>
          <p className="mt-5 text-2xl font-bold text-velmora-onyx">{formatPrice(product.price)}</p>
          <p id={`detail-${product.id}-desc`} className="mt-6 text-base leading-8 text-velmora-stone">{product.description}</p>

          <div className="mt-8 border-t border-velmora-mist pt-7">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-stone">Tone</p>
            <div className="mt-4 flex gap-3">
              {['Gold', 'Silver'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setTone(option)}
                  className={`rounded-full border px-5 py-2 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-velmora-gold ${tone === option ? 'border-velmora-onyx bg-velmora-onyx text-velmora-ivory' : 'border-velmora-mist text-velmora-onyx hover:border-velmora-gold'}`}
                >
                  {option} Tone
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-stretch gap-4">
            <div className="inline-flex border border-velmora-mist text-velmora-onyx">
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-4 transition hover:bg-velmora-mist focus:outline-none focus:ring-2 focus:ring-velmora-gold" aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="flex min-w-12 items-center justify-center text-sm font-bold">{quantity}</span>
              <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-4 transition hover:bg-velmora-mist focus:outline-none focus:ring-2 focus:ring-velmora-gold" aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => onAddToCart(product, quantity)}
              className="flex-1 bg-velmora-gold px-6 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-onyx transition hover:bg-velmora-antique hover:text-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-onyx"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8 border-t border-velmora-mist">
            {accordionItems.map((item) => {
              const isOpen = openAccordion === item.id
              const content = item.id === 'description' ? product.details : item.id === 'care' ? product.care : product.shipping
              return (
                <div key={item.id} className="border-b border-velmora-mist">
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isOpen ? '' : item.id)}
                    className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.22em] text-velmora-onyx"
                    aria-expanded={isOpen}
                  >
                    {item.title}
                    <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && <p className="pb-5 text-sm leading-7 text-velmora-stone">{content}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-mist px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 font-serif text-5xl leading-none text-velmora-onyx">You may also like</h2>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
