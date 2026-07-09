import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import AccentButton from '@/components/common/AccentButton'
import ProductCard from '@/components/product/ProductCard'
import StrkImage from '@/components/common/StrkImage'
import { formatPrice, products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useImageLoader } from '@/hooks/useImageLoader'

const tones = ['Gold', 'Silver']
const accordions = [
  { title: 'Description', key: 'details' },
  { title: 'Materials & Care', key: 'care' },
  { title: 'Shipping & Returns', key: 'shipping' },
]

export default function ProductPage() {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const { addToCart } = useCart()
  const productRef = useImageLoader([productId, activeImage])

  const related = useMemo(() => products.filter((item) => item.id !== productId).slice(0, 4), [productId])

  if (!product) return <Navigate to="/shop" replace />

  const gallery = [
    { label: 'Editorial product view', query: `[detail-${product.descId}] [detail-${product.titleId}]`, ratio: '4x3' },
    { label: 'Worn close-up', query: `[detail-${product.descId}] [detail-${product.titleId}]`, ratio: '4x3' },
    { label: 'Gift detail', query: `[detail-${product.descId}] [detail-${product.titleId}]`, ratio: '4x3' },
  ]

  return (
    <main ref={productRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <p id="gallery-worn-note" className="sr-only">Jewelry worn close-up on model</p>
        <p id="gallery-gift-note" className="sr-only">Luxury jewelry gift box detail</p>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:block lg:space-y-3 lg:overflow-visible">
              {gallery.map((image, index) => (
                <button key={image.label} type="button" onClick={() => setActiveImage(index)} className={`shrink-0 overflow-hidden rounded-2xl border bg-velmora-mist transition ${activeImage === index ? 'border-velmora-champagne ring-2 ring-velmora-champagne/40' : 'border-velmora-sand hover:border-velmora-champagne'}`} aria-label={`Show ${image.label}`}>
                  <StrkImage id={`product-${product.id}-thumb-${index}`} query={image.query} ratio="1x1" width="220" alt={image.label} className="h-20 w-20 object-cover" />
                </button>
              ))}
            </div>
            <div className="order-1 overflow-hidden rounded-[2.4rem] border border-velmora-sand bg-velmora-mist shadow-velvet lg:order-2">
              <StrkImage id={`product-${product.id}-main-${activeImage}`} query={gallery[activeImage].query} ratio={gallery[activeImage].ratio} width="1300" alt={gallery[activeImage].label} className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-umber transition hover:text-velmora-espresso">Back to shop</Link>
            <h1 id={`detail-${product.titleId}`} className="mt-5 font-serif text-4xl font-semibold uppercase leading-tight tracking-[0.14em] text-velmora-espresso md:text-6xl">{product.name}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="text-2xl font-bold text-velmora-espresso">{formatPrice(product.price)}</p>
              <div className="flex items-center gap-2 text-sm text-velmora-umber">
                <span className="flex text-velmora-champagne" aria-label={`${product.rating} stars`}>
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                </span>
                {product.rating} · {product.reviews} reviews
              </div>
            </div>
            <p id={`detail-${product.descId}`} className="mt-6 text-lg leading-8 text-velmora-umber">{product.shortDescription}</p>

            <div className="mt-8 border-y border-velmora-sand py-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-umber">Tone</p>
              <div className="flex gap-3">
                {tones.map((item) => (
                  <button key={item} type="button" onClick={() => setTone(item)} className={`rounded-full border px-5 py-3 text-sm font-bold transition ${tone === item ? 'border-velmora-champagne bg-velmora-champagne text-velmora-espresso' : 'border-velmora-sand bg-velmora-porcelain text-velmora-umber hover:border-velmora-champagne hover:text-velmora-espresso'}`}>{item}</button>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <div className="flex h-14 w-36 items-center justify-between rounded-full border border-velmora-sand bg-velmora-porcelain px-3 text-velmora-espresso">
                  <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="rounded-full p-2 hover:bg-velmora-mist"><Minus className="h-4 w-4" /></button>
                  <span className="font-bold">{quantity}</span>
                  <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)} className="rounded-full p-2 hover:bg-velmora-mist"><Plus className="h-4 w-4" /></button>
                </div>
                <AccentButton className="min-h-14 flex-1" onClick={() => addToCart(product, quantity, tone)}>Add to Cart</AccentButton>
              </div>
            </div>

            <div className="divide-y divide-velmora-sand">
              {accordions.map((item, index) => (
                <details key={item.title} className="group py-5" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-bold uppercase tracking-[0.22em] text-velmora-espresso">
                    {item.title}
                    <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-velmora-umber">{item.key === 'shipping' ? 'Free worldwide shipping on every order. If it is not quite right, return unworn pieces in original packaging within 30 days.' : product[item.key]}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl border-t border-velmora-sand pt-14">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.28em] text-velmora-umber">You may also like</p>
              <h2 className="font-serif text-4xl font-medium text-velmora-espresso md:text-5xl">Complete the edit</h2>
            </div>
            <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso transition hover:text-velmora-champagne sm:inline">Shop all</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => <ProductCard key={item.id} product={item} compact />)}
          </div>
        </div>
      </section>
    </main>
  )
}
