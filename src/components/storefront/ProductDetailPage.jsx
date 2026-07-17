import { useEffect, useState } from 'react'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import ProductCard from './ProductCard.jsx'
import { products } from '../../data/products.js'
import { getStrkImageUrl } from '../../lib/image-url.js'

export default function ProductDetailPage({ product, onAddToCart, onOpenProduct, onBackToShop }) {
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  const mainImage = getStrkImageUrl(product.imageId)
  const closeImage = getStrkImageUrl(product.hoverImageId) || mainImage
  const wornImage = getStrkImageUrl(product.hoverImageId) || mainImage

  useEffect(() => {
    setTone('Gold')
    setQuantity(1)
    setActiveImage(0)
  }, [product.id])

  return (
    <main className="bg-velmora-ivory pb-20 pt-28 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <button type="button" onClick={onBackToShop} className="mb-7 border-b border-velmora-gold bg-transparent p-0 pb-1 text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold transition hover:text-velmora-ink">
          Back to Shop
        </button>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="grid gap-4 sm:grid-cols-[92px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:flex-col sm:overflow-visible">
              <button type="button" onClick={() => setActiveImage(0)} className={`aspect-square min-w-20 overflow-hidden rounded-2xl border bg-velmora-mist p-0 transition ${activeImage === 0 ? 'border-velmora-gold' : 'border-velmora-sand'}`} aria-label="View gallery image 1">
                <img alt={`${product.name} thumbnail 1`} className="h-full w-full object-cover" src={getStrkImageUrl(product.imageId)} />
              </button>
              <button type="button" onClick={() => setActiveImage(1)} className={`aspect-square min-w-20 overflow-hidden rounded-2xl border bg-velmora-mist p-0 transition ${activeImage === 1 ? 'border-velmora-gold' : 'border-velmora-sand'}`} aria-label="View gallery image 2">
                <img alt={`${product.name} thumbnail 2`} className="h-full w-full object-cover" src={getStrkImageUrl(product.hoverImageId, product.imageId)} />
              </button>
              <button type="button" onClick={() => setActiveImage(2)} className={`aspect-square min-w-20 overflow-hidden rounded-2xl border bg-velmora-mist p-0 transition ${activeImage === 2 ? 'border-velmora-gold' : 'border-velmora-sand'}`} aria-label="View gallery image 3">
                <img alt={`${product.name} thumbnail 3`} className="h-full w-full object-cover" src={getStrkImageUrl(product.hoverImageId, product.imageId)} />
              </button>
            </div>
            <div className="order-1 overflow-hidden rounded-t-full bg-velmora-mist sm:order-2">
              {activeImage === 0 && <img alt={product.name} className="aspect-[3/4] w-full object-cover" src={getStrkImageUrl(product.imageId)} />}
              {activeImage === 1 && <img alt={product.name} className="aspect-[3/4] w-full object-cover" src={getStrkImageUrl(product.hoverImageId, product.imageId)} />}
              {activeImage === 2 && <img alt={product.name} className="aspect-[3/4] w-full object-cover" src={getStrkImageUrl(product.hoverImageId, product.imageId)} />}
            </div>
          </div>

          <div className="lg:pt-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-clay">{product.category} · {product.material}</p>
            <h1 id={product.titleId} className="mt-4 font-serif text-5xl uppercase leading-tight tracking-[0.13em] text-velmora-ink md:text-6xl">{product.name}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="text-2xl font-semibold text-velmora-ink">${product.price}</p>
              <div className="flex items-center gap-1 text-sm font-semibold text-velmora-clay">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-velmora-champagne text-velmora-champagne" />)}
                <span className="ml-2">{product.rating} · {product.reviews} reviews</span>
              </div>
            </div>
            <p id={product.descId} className="mt-6 max-w-xl text-base leading-8 text-velmora-clay">{product.description}</p>

            <div className="mt-8 border-y border-velmora-sand py-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-clay">Tone</p>
              <div className="flex gap-3">
                {product.tones.map((item) => (
                  <button key={item} type="button" onClick={() => setTone(item)} className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${tone === item ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory' : 'border-velmora-sand bg-velmora-mist text-velmora-ink hover:border-velmora-champagne'}`}>
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <div className="flex w-full items-center justify-between rounded-full border border-velmora-sand bg-velmora-mist px-3 py-2 text-velmora-ink sm:w-36">
                <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="rounded-full bg-transparent p-2 text-velmora-ink hover:text-velmora-gold" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                <span className="font-semibold">{quantity}</span>
                <button type="button" onClick={() => setQuantity((current) => current + 1)} className="rounded-full bg-transparent p-2 text-velmora-ink hover:text-velmora-gold" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
              </div>
              <button type="button" onClick={() => onAddToCart(product, quantity, tone)} className="min-h-14 flex-1 rounded-full bg-velmora-champagne px-8 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-ink transition hover:bg-velmora-gold hover:text-velmora-ivory focus:outline-none focus:ring-2 focus:ring-velmora-ink focus:ring-offset-2">
                Add to Cart
              </button>
            </div>

            <div className="mt-8 divide-y divide-velmora-sand border-y border-velmora-sand">
              <AccordionItem title="Description">{product.details}</AccordionItem>
              <AccordionItem title="Materials & Care">{product.care}</AccordionItem>
              <AccordionItem title="Shipping & Returns">{product.shipping}</AccordionItem>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-clay">Complete the ritual</p>
            <h2 className="mt-3 font-serif text-5xl leading-tight text-velmora-ink md:text-6xl">You May Also Like</h2>
            <p className="mt-4 text-base leading-8 text-velmora-clay">Pieces selected to layer beautifully with your current favorite.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => <ProductCard key={item.id} product={item} onOpenProduct={onOpenProduct} onAddToCart={onAddToCart} compact />)}
          </div>
        </div>
      </section>
      <span id="detail-gallery-close" className="sr-only">close-up demi-fine gold jewelry detail</span>
      <span id="detail-gallery-worn" className="sr-only">gold jewelry worn on model warm editorial styling</span>
    </main>
  )
}

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button type="button" onClick={() => setOpen((value) => !value)} className="flex w-full items-center justify-between bg-transparent px-0 py-5 text-left text-velmora-ink">
        <span className="text-sm font-bold uppercase tracking-[0.22em]">{title}</span>
        <ChevronDown className={`h-5 w-5 text-velmora-gold transition ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
        <p className="overflow-hidden text-sm leading-7 text-velmora-clay">{children}</p>
      </div>
    </div>
  )
}
