import { Minus, Plus, Star } from 'lucide-react'
import { Navigate, Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import ProductAccordion from '@/components/product/ProductAccordion'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { getStrkImageUrl } from '@/lib/strkImages'

export default function ProductPage({ onAddToCart }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) return <Navigate to="/shop" replace />

  const gallery = [
    { label: 'Primary detail', query: product.detailQuery, ratio: '3x2' },
    { label: 'Styled close up', query: `${product.imageQuery} worn on model`, ratio: '3x2' },
    { label: 'Gift packaging', query: `${product.imageQuery} Velmora gift box`, ratio: '3x2' },
  ]

  const titleId = `detail-${product.id}-title`
  const descId = `detail-${product.id}-desc`
  const active = gallery[activeImage]
  const activeImageId = `detail-${product.id}-${activeImage}-velmora`
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  const handleAdd = () => {
    onAddToCart(product, { tone, quantity })
  }

  return (
    <main className="bg-velmora-ivory text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:pb-24">
        <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:block lg:space-y-3 lg:overflow-visible">
            {gallery.map((image, index) => {
              const thumbnailId = `thumb-${product.id}-${index}-velmora`
              return (
                <button
                  key={image.label}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show ${image.label}`}
                  className={`h-20 w-20 shrink-0 overflow-hidden rounded-2xl border bg-velmora-oat transition ${activeImage === index ? 'border-velmora-gold ring-2 ring-velmora-gold/25' : 'border-velmora-oat hover:border-velmora-gold'}`}
                >
                  <img
                    alt={`${product.name} ${image.label}`}
                    className="h-full w-full object-cover"
                    data-strk-img-id={thumbnailId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="220"
                    src={getStrkImageUrl(thumbnailId)}
                  />
                </button>
              )
            })}
          </div>
          <div className="order-1 overflow-hidden rounded-[2.25rem] bg-velmora-oat shadow-editorial lg:order-2">
            <img
              key={activeImage}
              alt={`${product.name} ${active.label}`}
              className="aspect-[4/5] h-full w-full object-cover animate-fade-up"
              data-strk-img-id={activeImageId}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio={active.ratio}
              data-strk-img-width="1100"
              src={getStrkImageUrl(activeImageId)}
            />
            <p className="sr-only">{active.query}</p>
          </div>
        </div>

        <div className="lg:pl-8">
          <div className="sticky top-28 rounded-[2rem] border border-velmora-oat bg-velmora-pearl p-6 text-velmora-cocoa shadow-sm sm:p-8">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-velmora-gold">{product.category}</p>
            <h1 id={titleId} className="mt-4 font-serifDisplay text-4xl uppercase leading-tight tracking-[0.18em] text-velmora-cocoa sm:text-5xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="font-sans text-2xl font-semibold text-velmora-cocoa">${product.price}</p>
              <div className="flex items-center gap-1 text-velmora-gold">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                <span className="ml-2 font-sans text-sm text-velmora-taupe">{product.rating} ({product.reviews})</span>
              </div>
            </div>
            <p id={descId} className="mt-6 font-sans text-base leading-8 text-velmora-taupe">{product.shortDescription}</p>

            <div className="mt-8">
              <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-cocoa">Tone</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((option) => (
                  <button key={option} type="button" onClick={() => setTone(option)} className={`rounded-full border px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.2em] transition ${tone === option ? 'border-velmora-gold bg-velmora-gold text-velmora-ink' : 'border-velmora-oat text-velmora-cocoa hover:border-velmora-gold'}`}>
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-cocoa">Quantity</p>
              <div className="flex w-36 items-center justify-between rounded-full border border-velmora-oat bg-velmora-ivory text-velmora-cocoa">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-3 transition hover:text-velmora-gold" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                <span className="font-sans text-sm font-semibold">{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-3 transition hover:text-velmora-gold" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
              </div>
            </div>

            <button type="button" onClick={handleAdd} className="mt-8 w-full rounded-full bg-velmora-gold px-7 py-4 font-sans text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink shadow-glow transition hover:bg-velmora-champagne">
              Add to Cart
            </button>

            <div className="mt-8">
              <ProductAccordion title="Description" defaultOpen>{product.description}</ProductAccordion>
              <ProductAccordion title="Materials & Care">{product.care}</ProductAccordion>
              <ProductAccordion title="Shipping & Returns">{product.shipping}</ProductAccordion>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-velmora-oat px-5 py-16 sm:px-8 lg:px-12">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-velmora-gold">Complete the ritual</p>
            <h2 className="mt-3 font-serifDisplay text-5xl text-velmora-cocoa">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden font-sans text-xs font-bold uppercase tracking-[0.24em] text-velmora-cocoa transition hover:text-velmora-gold sm:block">Shop all</Link>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} contextLabel="Velmora related demi-fine gold jewelry" />)}
        </div>
      </section>
    </main>
  )
}
