import { ImageHelper } from '@strikingly/sdk'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '@/components/shop/ProductCard'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/format'
import { getStrkImageUrl } from '@/lib/images'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductDetail({ onAdd }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const [activeImage, setActiveImage] = useState('main')
  const [variant, setVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [openPanel, setOpenPanel] = useState('Description')
  const containerRef = useRef(null)

  const gallery = useMemo(() => [
    { id: 'main', label: 'Studio', imgId: `detail-${product.imgId}`, query: `[${product.descId}] [${product.titleId}]` },
    { id: 'worn', label: 'Worn', imgId: `detail-worn-${product.id}`, query: `[${product.descId}] [${product.titleId}]` },
    { id: 'detail', label: 'Detail', imgId: `detail-close-${product.id}`, query: `[${product.descId}] [${product.titleId}]` },
  ], [product])

  const active = gallery.find((item) => item.id === activeImage) || gallery[0]
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [product.id, activeImage])

  useEffect(() => {
    setVariant(product.variants[0])
    setQuantity(1)
    setActiveImage('main')
  }, [product])

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:grid-cols-[1.08fr_0.92fr] md:px-8 md:py-16">
        <div className="grid gap-4 md:grid-cols-[84px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
            {gallery.map((image) => (
              <button key={image.id} type="button" onClick={() => setActiveImage(image.id)} className={`aspect-square w-20 shrink-0 overflow-hidden border bg-velmora-porcelain transition ${activeImage === image.id ? 'border-velmora-gold' : 'border-velmora-espresso/10'}`} aria-label={`Show ${image.label} image`}>
                <img
                  alt={`${product.name} ${image.label}`}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`thumb-${image.imgId}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="220"
                  src={getStrkImageUrl(`thumb-${image.imgId}`)}
                />
              </button>
            ))}
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-champagne/30 shadow-editorial md:order-2">
            <img
              alt={product.name}
              className="h-full w-full object-cover animate-soft-in"
              data-strk-img-id={active.imgId}
              data-strk-img={active.query}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1100"
              src={getStrkImageUrl(active.imgId)}
            />
          </div>
        </div>

        <aside className="text-velmora-espresso md:pl-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">{product.category}</p>
          <h1 id={product.titleId} className="mt-4 font-serif text-5xl uppercase leading-none tracking-[0.14em] md:text-7xl">{product.name}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="font-serif text-4xl text-velmora-espresso">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-walnut">
              <span className="flex text-velmora-gold">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</span>
              {product.rating} · {product.reviews} reviews
            </div>
          </div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-walnut">{product.shortDescription}</p>

          <div className="mt-8 space-y-7 border-y border-velmora-espresso/10 py-7">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-walnut">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((option) => (
                  <button key={option} type="button" onClick={() => setVariant(option)} className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] transition ${variant === option ? 'border-velmora-gold bg-velmora-gold text-velmora-onyx' : 'border-velmora-espresso/15 bg-velmora-porcelain text-velmora-espresso hover:border-velmora-gold'}`}>{option}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-walnut">Quantity</p>
              <div className="inline-flex items-center rounded-full border border-velmora-espresso/15 bg-velmora-porcelain">
                <button type="button" className="p-3 text-velmora-espresso" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                <span className="w-12 text-center font-semibold text-velmora-espresso">{quantity}</span>
                <button type="button" className="p-3 text-velmora-espresso" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
              </div>
            </div>
            <button type="button" onClick={() => onAdd(product, { variant, quantity })} className="w-full rounded-full bg-velmora-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-onyx shadow-velvet transition hover:bg-velmora-champagne">Add to Cart</button>
          </div>

          <div className="divide-y divide-velmora-espresso/10">
            {[
              ['Description', product.description],
              ['Materials & Care', product.care],
              ['Shipping & Returns', product.shipping],
            ].map(([title, content]) => (
              <div key={title}>
                <button type="button" onClick={() => setOpenPanel(openPanel === title ? '' : title)} className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso">
                  {title}<ChevronDown className={`h-4 w-4 transition ${openPanel === title ? 'rotate-180' : ''}`} />
                </button>
                {openPanel === title && <p className="pb-5 text-sm leading-7 text-velmora-walnut">{content}</p>}
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="mb-8 flex items-end justify-between border-b border-velmora-espresso/10 pb-6">
          <h2 id="related-products-title" className="font-serif text-5xl text-velmora-espresso">You may also like</h2>
          <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-[0.22em] text-velmora-walnut transition hover:text-velmora-gold md:block">Shop all</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} onAdd={onAdd} context="related" />)}
        </div>
      </section>
    </main>
  )
}
