import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Truck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { getProductById, products } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import ProductImage from '../components/product/ProductImage.jsx'
import ProductCard from '../components/product/ProductCard.jsx'
import Rating from '../components/product/Rating.jsx'

const accordionItems = [
  { title: 'Description', content: 'Designed with a refined demi-fine finish, this piece brings luminous warmth to everyday styling while remaining polished enough for special occasions.' },
  { title: 'Materials & Care', content: '18K gold plated over a durable base with hypoallergenic, nickel-safe finishing. Store in the Velmora pouch and avoid perfume, water, and lotions for longest wear.' },
  { title: 'Shipping & Returns', content: 'Enjoy free worldwide shipping and 30-day returns. Gift-ready packaging is included with every order.' },
]

export default function ProductDetail() {
  const containerRef = useRef(null)
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('main')
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  const imageId = activeImage === 'main' ? product.imgId : product.hoverImgId

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

  return (
    <div ref={containerRef} className="bg-parchment pt-20 text-cocoa">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-20">
        <div className="grid gap-4 md:grid-cols-[96px_1fr]">
          <div className="order-2 flex gap-3 md:order-1 md:flex-col">
            {['main', 'detail'].map((view) => (
              <button key={view} type="button" onClick={() => setActiveImage(view)} className={`aspect-square overflow-hidden border bg-linen transition ${activeImage === view ? 'border-champagne' : 'border-mist'}`} aria-label={`Show ${view} image`}>
                <ProductImage product={product} imageId={`thumb-${product.id}-${view}`} contextId={product.titleId} ratio="1x1" width="180" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden bg-linen shadow-soft md:order-2">
            <ProductImage product={product} imageId={`gallery-${imageId}`} contextId={product.titleId} ratio="3x4" width="1100" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-luxe text-antique">{product.category}</p>
          <h1 id={product.titleId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-tight tracking-product text-cocoa md:text-7xl">{product.name}</h1>
          <div className="mt-5 flex items-center justify-between gap-6 border-b border-mist pb-6">
            <span className="font-serif text-4xl text-cocoa">${product.price}</span>
            <Rating rating={product.rating} count={product.reviewCount} />
          </div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-stone">{product.details}</p>

          <div className="mt-8 space-y-7">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-luxe text-cocoa">Tone</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((option) => (
                  <button key={option} type="button" onClick={() => setTone(option)} className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-luxe transition ${tone === option ? 'border-cocoa bg-cocoa text-ivory' : 'border-mist bg-ivory text-cocoa hover:border-champagne'}`}>{option}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-luxe text-cocoa">Quantity</p>
              <div className="inline-flex items-center border border-mist bg-ivory">
                <button type="button" className="grid h-12 w-12 place-items-center text-cocoa hover:bg-linen" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                <span className="grid h-12 w-12 place-items-center text-cocoa">{quantity}</span>
                <button type="button" className="grid h-12 w-12 place-items-center text-cocoa hover:bg-linen" onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
              </div>
            </div>
            <button type="button" className="w-full bg-cocoa px-8 py-5 text-xs font-bold uppercase tracking-luxe text-ivory shadow-soft transition hover:bg-antique" onClick={() => addItem(product, quantity, tone)}>Add to Cart</button>
            <div className="flex items-center gap-3 bg-ivory p-4 text-sm text-stone"><Truck className="h-5 w-5 text-antique" /> Free worldwide shipping and 30-day returns.</div>
          </div>

          <div className="mt-8 border-y border-mist">
            {accordionItems.map((item, index) => <Accordion key={item.title} item={item} defaultOpen={index === 0} />)}
          </div>
        </div>
      </section>

      <section className="border-t border-mist bg-ivory px-5 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div><p className="text-xs font-semibold uppercase tracking-luxe text-antique">Complete the edit</p><h2 id="related-title" className="mt-3 font-serif text-5xl font-semibold text-cocoa">You may also like</h2></div>
            <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-luxe text-cocoa underline-offset-4 hover:text-antique hover:underline md:block">View all</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{related.map((item) => <ProductCard key={item.id} product={item} contextId="related-title" />)}</div>
        </div>
      </section>
    </div>
  )
}

function Accordion({ item, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-mist last:border-b-0">
      <button type="button" className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-luxe text-cocoa" onClick={() => setOpen((value) => !value)}>
        {item.title}<ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-5 text-sm leading-7 text-stone">{item.content}</p>}
    </div>
  )
}
