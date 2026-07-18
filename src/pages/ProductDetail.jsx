import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronDown, ChevronUp, Minus, Plus, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { getProductBySlug, products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const accordionItems = [
  { title: 'Description', key: 'details' },
  { title: 'Materials & Care', key: 'care' },
  { title: 'Shipping & Returns', key: 'shipping' },
]

export default function ProductDetail({ onAddToCart }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [open, setOpen] = useState('Description')
  const [activeImage, setActiveImage] = useState(0)
  const pageRef = useRef(null)

  const related = useMemo(() => products.filter((item) => item.id !== product?.id).slice(0, 4), [product])

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [slug, activeImage])

  if (!product) return <Navigate to="/shop" replace />

  const gallery = [
    { id: `${product.id}-gallery-1`, imgId: `${product.id}-gallery-primary-918c`, label: 'Main view' },
    { id: `${product.id}-gallery-2`, imgId: `${product.id}-gallery-worn-4a21`, label: 'Worn view' },
    { id: `${product.id}-gallery-3`, imgId: `${product.id}-gallery-detail-6fe0`, label: 'Detail view' },
  ]

  const handleAdd = () => {
    onAddToCart(product, quantity, tone)
  }

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-24 text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
          <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
            {gallery.map((image, index) => (
              <button key={image.id} type="button" onClick={() => setActiveImage(index)} className={`aspect-square flex-1 overflow-hidden border bg-velmora-champagne lg:flex-none ${activeImage === index ? 'border-velmora-gold' : 'border-velmora-line'}`} aria-label={image.label}>
                <span
                  aria-hidden="true"
                  className="block h-full w-full bg-cover bg-center"
                  data-strk-bg-id={`${image.imgId}-thumb`}
                  data-strk-bg={`[${product.descId}] [${product.titleId}]`}
                  data-strk-bg-ratio="1x1"
                  data-strk-bg-width="220"
                />
              </button>
            ))}
          </div>
          <div
            key={gallery[activeImage].imgId}
            aria-label={`${product.name} ${gallery[activeImage].label}`}
            className="order-1 aspect-[4/5] overflow-hidden bg-velmora-champagne bg-cover bg-center shadow-editorial lg:order-2"
            role="img"
            data-strk-bg-id={gallery[activeImage].imgId}
            data-strk-bg={`[${product.descId}] [${product.titleId}]`}
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="1000"
          />
        </div>

        <aside className="text-velmora-ink lg:pl-8">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-luxe text-velmora-bronze transition hover:text-velmora-ink">Back to shop</Link>
          <h1 id={product.titleId} className="mt-5 font-serif text-5xl uppercase leading-none tracking-luxe text-velmora-ink md:text-6xl">{product.name}</h1>
          <div className="mt-5 flex items-center gap-4">
            <p className="text-xl font-semibold text-velmora-ink">${product.price}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-taupe">
              <span className="flex text-velmora-gold" aria-label="5 star rating">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</span>
              <span>128 reviews</span>
            </div>
          </div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-taupe">{product.description}</p>

          <div className="mt-8 border-t border-velmora-line pt-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-luxe text-velmora-taupe">Tone</p>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((option) => (
                <button key={option} type="button" onClick={() => setTone(option)} className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${tone === option ? 'border-velmora-gold bg-velmora-gold text-velmora-ink' : 'border-velmora-line bg-velmora-porcelain text-velmora-ink hover:border-velmora-gold'}`}>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-luxe text-velmora-taupe">Quantity</p>
            <div className="inline-flex items-center border border-velmora-line bg-velmora-porcelain text-velmora-ink">
              <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="p-4 transition hover:bg-velmora-champagne" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
              <span className="min-w-12 text-center font-semibold">{quantity}</span>
              <button type="button" onClick={() => setQuantity((current) => current + 1)} className="p-4 transition hover:bg-velmora-champagne" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
            </div>
          </div>

          <button type="button" onClick={handleAdd} className="mt-8 w-full bg-velmora-gold px-8 py-4 text-sm font-bold uppercase tracking-luxe text-velmora-ink transition hover:bg-velmora-bronze hover:text-velmora-ivory">Add to Cart</button>

          <div className="mt-8 border-t border-velmora-line">
            {accordionItems.map((item) => {
              const isOpen = open === item.title
              const content = item.key === 'shipping'
                ? 'Free worldwide shipping on every order. Unworn pieces may be returned within 30 days in original packaging.'
                : product[item.key]
              return (
                <div key={item.title} className="border-b border-velmora-line py-5">
                  <button type="button" onClick={() => setOpen(isOpen ? '' : item.title)} className="flex w-full items-center justify-between text-left text-sm font-bold uppercase tracking-luxe text-velmora-ink">
                    {item.title}
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr]'}`}>
                    <p className="overflow-hidden text-sm leading-7 text-velmora-taupe">{content}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl border-t border-velmora-line px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mb-9 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-widerluxe text-velmora-bronze">Complete the look</p>
            <h2 className="mt-3 font-serif text-5xl text-velmora-ink">You may also like</h2>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />)}
        </div>
      </section>
    </main>
  )
}
