import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { products } from '@/data/products.js'
import ProductCard from '@/components/product/ProductCard.jsx'
import ProductImage from '@/components/product/ProductImage.jsx'

const accordions = [
  ['Description', 'detail'],
  ['Materials & Care', 'care'],
  ['Shipping & Returns', 'Free worldwide shipping on orders over $75. Returns are accepted within 30 days in original condition. Each piece arrives in gift-ready Velmora packaging.'],
]

export default function ProductDetail({ onAddToCart }) {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug) || products[0]
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  const [tone, setTone] = React.useState('Gold')
  const [quantity, setQuantity] = React.useState(1)
  const [openPanel, setOpenPanel] = React.useState('Description')

  return (
    <main className="bg-porcelain pt-24 text-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[88px_1fr]"><div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">{[product.imgId, product.hoverImgId, `${product.imgId}-detail-3`].map((imageId, index) => <div key={imageId} className="h-20 w-20 shrink-0 overflow-hidden border border-sand bg-pearl"><ProductImage product={product} imageId={imageId} className="h-full w-full object-cover" ratio="1x1" width="180" mode={index === 0 ? 'product' : 'worn'} /></div>)}</div><div className="order-1 overflow-hidden bg-sand/40 lg:order-2"><ProductImage product={product} imageId={`${product.imgId}-gallery-main`} className="aspect-[4/5] h-full w-full object-cover" ratio="3x4" width="1100" /></div></div>
        <aside className="self-start bg-pearl p-6 text-ink shadow-[0_18px_60px_rgba(42,33,27,0.07)] sm:p-8 lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-antique">{product.category}</p>
          <h1 id={product.titleId} className="mt-4 font-serif text-4xl uppercase leading-tight tracking-[0.16em] text-ink sm:text-5xl">{product.name}</h1>
          <div className="mt-5 flex items-center justify-between border-b border-sand pb-5"><p className="font-serif text-3xl text-ink">${product.price}</p><div className="flex items-center gap-2 text-sm text-stone"><span className="flex text-champagne" aria-label={`${product.rating} stars`}>{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</span>{product.rating} ({product.reviews})</div></div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-stone">{product.description}</p>
          <div className="mt-8"><p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-stone">Tone</p><div className="flex gap-3">{['Gold', 'Silver'].map((option) => <button key={option} type="button" onClick={() => setTone(option)} className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${tone === option ? 'border-champagne bg-champagne text-ink' : 'border-sand bg-porcelain text-ink hover:border-champagne'}`}>{option} tone</button>)}</div></div>
          <div className="mt-7"><p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-stone">Quantity</p><div className="inline-flex border border-sand bg-porcelain text-ink"><button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-3 transition hover:bg-sand" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button><span className="min-w-12 py-3 text-center text-sm font-semibold">{quantity}</span><button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-3 transition hover:bg-sand" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button></div></div>
          <button type="button" onClick={() => onAddToCart(product, quantity)} className="mt-8 w-full bg-champagne px-6 py-4 text-sm font-bold uppercase tracking-[0.24em] text-ink transition hover:bg-antique hover:text-porcelain">Add to Cart</button>
          <div className="mt-8 border-t border-sand">{accordions.map(([label, content]) => { const isOpen = openPanel === label; const panelContent = content === 'detail' || content === 'care' ? product[content] : content; return <div key={label} className="border-b border-sand"><button type="button" onClick={() => setOpenPanel(isOpen ? '' : label)} className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-[0.22em] text-ink">{label}<ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} /></button><div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}><p className="overflow-hidden text-sm leading-7 text-stone">{panelContent}</p></div></div> })}</div>
        </aside>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"><div className="mb-9 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.3em] text-antique">Complete the edit</p><h2 className="mt-3 font-serif text-5xl text-ink">You may also like</h2></div><Link to="/shop" className="hidden text-sm font-bold uppercase tracking-[0.22em] text-antique underline decoration-sand underline-offset-8 md:block">Shop all</Link></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{related.map((item) => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />)}</div></section>
    </main>
  )
}
