import { Minus, Plus, Star } from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useMemo, useState } from 'react'
import Accordion from '../components/storefront/Accordion'
import ProductCard from '../components/storefront/ProductCard'
import ProductVisual from '../components/storefront/ProductVisual'
import { AccentButton, OutlineButton } from '../components/storefront/StoreButtons'
import { useStrkImages } from '../components/storefront/useStrkImages'
import { products } from '../data'


export default function ProductDetail({ onAdd }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((item) => item.id === id) || products[0]
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const ref = useStrkImages([product.id, activeImage])

  const gallery = useMemo(() => [
    {
      id: `detail-${product.id}-primary-34d1`,
      alt: product.name,
      query: `[${product.descId}] [${product.titleId}]`,
    },
    {
      id: `detail-${product.id}-model-78ac`,
      alt: `${product.name} worn on model`,
      query: `[${product.descId}] [${product.titleId}]`,
    },
    {
      id: `detail-${product.id}-gift-19bf`,
      alt: `${product.name} packaging detail`,
      query: `[${product.titleId}] [detail-gifting-note]`,
    },
  ], [product])

  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  const accordions = [
    { title: 'Description', content: product.details },
    { title: 'Materials & Care', content: `${product.material}. ${product.care}` },
    { title: 'Shipping & Returns', content: 'Complimentary worldwide shipping on every order. Returns are accepted within 30 days in original condition and packaging.' },
  ]

  return (
    <main className="bg-velmora-ivory pb-20 pt-28 text-velmora-cocoa lg:pb-28">
      <section ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-antique transition hover:text-velmora-cocoa">Back to shop</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="grid gap-4 lg:grid-cols-[88px_1fr]">
            <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
              {gallery.map((image, index) => (
                <button key={image.id} type="button" onClick={() => setActiveImage(index)} className={`aspect-square w-20 overflow-hidden rounded-2xl border bg-velmora-porcelain ${activeImage === index ? 'border-velmora-antique' : 'border-velmora-champagne/20'}`}>
                  <ProductVisual product={product} variant={index === 1 ? 'alternate' : 'primary'} />
                </button>
              ))}
            </div>
            <div className="order-1 overflow-hidden rounded-[2rem] bg-velmora-espresso shadow-glow lg:order-2">
              <ProductVisual product={product} variant={activeImage === 1 ? 'alternate' : 'primary'} className="aspect-product" />
            </div>
          </div>

          <div className="lg:pt-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-antique">{product.category}</p>
            <h1 id={product.titleId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-none tracking-[0.12em] text-velmora-cocoa md:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center gap-4">
              <p className="text-2xl font-semibold text-velmora-cocoa">${product.price}</p>
              <div className="flex items-center gap-1 text-velmora-champagne" aria-label="Rated 5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                <span className="ml-2 text-sm font-medium text-velmora-taupe">128 reviews</span>
              </div>
            </div>
            <p id={product.descId} className="mt-6 max-w-xl text-base leading-8 text-velmora-taupe">{product.description}</p>
            <p id="detail-gifting-note" className="mt-3 text-sm leading-7 text-velmora-taupe">Ships in a signature Velmora gift box with a keepsake pouch.</p>

            <div className="mt-8 border-t border-velmora-champagne/25 pt-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-cocoa">Tone</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((option) => (
                  <button key={option} type="button" onClick={() => setTone(option)} className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${tone === option ? 'border-velmora-antique bg-velmora-champagne/25 text-velmora-cocoa' : 'border-velmora-champagne/35 text-velmora-taupe hover:border-velmora-antique hover:text-velmora-cocoa'}`}>
                    {option} tone
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-[140px_1fr]">
              <div className="flex h-14 items-center justify-between rounded-full border border-velmora-champagne/35 bg-velmora-porcelain px-3">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="rounded-full p-2 text-velmora-cocoa hover:bg-velmora-champagne/15">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="font-semibold">{quantity}</span>
                <button type="button" aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)} className="rounded-full p-2 text-velmora-cocoa hover:bg-velmora-champagne/15">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <AccentButton className="h-14 w-full" onClick={() => onAdd(product, quantity, tone)}>Add to Cart</AccentButton>
            </div>

            <div className="mt-8">
              <Accordion items={accordions} />
            </div>
          </div>
        </div>

        <section className="mt-20 border-t border-velmora-champagne/25 pt-12 lg:mt-28">
          <div className="mb-9 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-antique">Complete the edit</p>
              <h2 className="mt-3 font-serif text-5xl font-semibold tracking-[-0.03em] text-velmora-cocoa">You may also like</h2>
            </div>
            <OutlineButton className="hidden md:inline-flex" onClick={() => navigate('/shop')}>View all</OutlineButton>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => <ProductCard key={item.id} product={item} onAdd={onAdd} />)}
          </div>
        </section>
      </section>
    </main>
  )
}
