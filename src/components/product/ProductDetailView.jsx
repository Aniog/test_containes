import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Minus, Plus, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { formatPrice } from '@/lib/cart'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E'

const accordions = [
  { title: 'Description', body: 'Designed for daily wear with an editorial finish. Each Velmora piece brings a quiet glow to simple layers, tailoring, silk, and occasion dressing.' },
  { title: 'Materials & Care', body: 'Demi-fine gold plating over a durable base with hypoallergenic posts where applicable. Keep dry, store separately, and polish gently with a soft cloth.' },
  { title: 'Shipping & Returns', body: 'Complimentary worldwide shipping on every order. Returns are accepted within 30 days in original condition and packaging.' },
]

export default function ProductDetailView({ product, onAddToCart }) {
  const detailRef = useRef(null)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openPanel, setOpenPanel] = useState('Description')
  const gallery = [product.image, product.hoverImage]
  const [activeImage, setActiveImage] = useState(gallery[0])
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <div className="bg-velmora-cream pt-28 text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:px-12">
        <div className="grid gap-4 lg:grid-cols-[5rem_1fr]">
          <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
            {gallery.map((image, index) => (
              <button key={image.id} type="button" onClick={() => setActiveImage(image)} className={`overflow-hidden border ${activeImage.id === image.id ? 'border-velmora-champagne' : 'border-velmora-linen'}`} aria-label={`View product image ${index + 1}`}>
                <img alt={`${product.name} thumbnail ${index + 1}`} className="aspect-square w-20 object-cover" data-strk-img-id={`thumb-${image.id}`} data-strk-img={image.query} data-strk-img-ratio="1x1" data-strk-img-width="180" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden bg-velmora-porcelain lg:order-2">
            <img alt={`${product.name} large gallery view`} className="aspect-[4/5] w-full object-cover" data-strk-img-id={`detail-${activeImage.id}`} data-strk-img={activeImage.query} data-strk-img-ratio="4x3" data-strk-img-width="1000" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
          </div>
        </div>
        <div className="lg:pl-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-sage">{product.category}</p>
          <h1 id={product.ids.name} className="mt-4 font-serifDisplay text-5xl font-semibold uppercase leading-none tracking-[0.16em] text-velmora-ink sm:text-6xl">{product.name}</h1>
          <div className="mt-5 flex items-center gap-4">
            <p className="font-serifDisplay text-3xl text-velmora-ink">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-1 text-velmora-champagne">
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              <span className="ml-2 text-sm font-semibold text-velmora-espresso/70">{product.rating} ({product.reviews})</span>
            </div>
          </div>
          <p id={product.ids.desc} className="mt-6 text-base leading-8 text-velmora-espresso/75">{product.detail}</p>
          <p id={product.ids.material} className="mt-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-sage">{product.material}</p>
          <div className="mt-8 border-t border-velmora-linen pt-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink">Tone</p>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((option) => (
                <button key={option} type="button" onClick={() => setTone(option)} className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${tone === option ? 'border-velmora-ink bg-velmora-ink text-velmora-cream' : 'border-velmora-linen bg-velmora-porcelain text-velmora-ink hover:border-velmora-champagne'}`}>{option}</button>
              ))}
            </div>
          </div>
          <div className="mt-7 flex items-center gap-4">
            <div className="flex items-center border border-velmora-linen bg-velmora-porcelain text-velmora-ink">
              <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-4 hover:bg-velmora-linen/45" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
              <span className="min-w-10 text-center font-semibold">{quantity}</span>
              <button type="button" onClick={() => setQuantity(quantity + 1)} className="p-4 hover:bg-velmora-linen/45" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
            </div>
          </div>
          <button type="button" onClick={() => onAddToCart(product, tone, quantity)} className="mt-5 w-full bg-velmora-champagne px-6 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-ink transition hover:bg-velmora-antique hover:text-velmora-cream">Add to Cart</button>
          <div className="mt-8 divide-y divide-velmora-linen border-y border-velmora-linen">
            {accordions.map((item) => (
              <div key={item.title}>
                <button type="button" onClick={() => setOpenPanel(openPanel === item.title ? '' : item.title)} className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-[0.22em] text-velmora-ink"><span>{item.title}</span><span>{openPanel === item.title ? '−' : '+'}</span></button>
                {openPanel === item.title && <p className="pb-5 text-sm leading-7 text-velmora-espresso/75">{item.body}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl border-t border-velmora-linen px-5 py-16 sm:px-8 lg:px-12">
        <h2 className="mb-8 font-serifDisplay text-4xl font-light text-velmora-ink">You may also like</h2>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />)}
        </div>
      </section>
    </div>
  )
}
