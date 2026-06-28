import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { getProductBySlug, placeholderSvg, products } from '@/data/products'

const accordionContent = [
  { title: 'Description', body: 'An editorial demi-fine piece made for frequent wear, easy layering, and polished gifting. Designed to feel refined without feeling too precious.' },
  { title: 'Materials & Care', body: '18K gold-plated finish over a durable base with hypoallergenic posts or closures. Keep dry, store separately, and polish gently with a soft cloth.' },
  { title: 'Shipping & Returns', body: 'Free worldwide shipping on every order. Returns are accepted within 30 days when pieces are unworn and returned with original packaging.' },
]

export default function ProductDetail({ onAddToCart }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug) || products[0]
  const [activeImage, setActiveImage] = useState(0)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')
  const gallery = useMemo(() => [
    { id: product.imageIds.primary, label: 'Editorial view' },
    { id: product.imageIds.hover, label: 'Styled detail' },
    { id: product.imageIds.detailOne, label: 'Close detail' },
    { id: product.imageIds.detailTwo, label: 'Packaging view' },
  ], [product])
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <main className="bg-[var(--color-ivory)] pb-20 pt-28 text-[var(--color-espresso)] lg:pt-32">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[96px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((image, index) => <button key={image.id} type="button" onClick={() => setActiveImage(index)} className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border bg-[var(--color-alabaster)] transition ${activeImage === index ? 'border-[var(--color-gold)]' : 'border-[color:var(--color-hairline)] hover:border-[var(--color-gold)]'}`} aria-label={`Show ${image.label}`}><img alt={`${product.name} ${image.label}`} className="h-full w-full object-cover" src={placeholderSvg} /></button>)}
          </div>
          <div className="order-1 overflow-hidden rounded-[2rem] bg-[var(--color-espresso)] shadow-[0_28px_80px_rgba(33,24,18,0.14)] lg:order-2"><img key={gallery[activeImage].id} alt={`${product.name} ${gallery[activeImage].label}`} className="aspect-[4/5] h-full w-full object-cover" src={placeholderSvg} /></div>
        </div>
        <div className="lg:pl-8">
          <p id="product-detail-kicker" className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-gold-dark)]">{product.category} · {product.material}</p>
          <h1 id={product.titleId} className="mt-4 font-[var(--font-heading)] text-5xl uppercase leading-tight tracking-[0.08em] text-[var(--color-espresso)] sm:text-6xl">{product.name}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-4"><p className="font-[var(--font-heading)] text-4xl">${product.price}</p><div className="flex items-center gap-1 text-sm text-[var(--color-gold-dark)]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}<span className="ml-2 text-[var(--color-muted)]">{product.rating} · {product.reviews} reviews</span></div></div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-[var(--color-muted)]">{product.summary} {product.story}</p>
          <div className="mt-8 border-y border-[color:var(--color-hairline)] py-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">Tone</p>
            <div className="flex flex-wrap gap-3">{['Gold', 'Silver'].map((option) => <button key={option} type="button" onClick={() => setTone(option)} className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition ${tone === option ? 'border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-espresso)]' : 'border-[color:var(--color-hairline)] bg-transparent text-[var(--color-espresso)] hover:border-[var(--color-gold)]'}`}>{option} tone</button>)}</div>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center"><div className="inline-flex w-fit items-center rounded-full border border-[color:var(--color-hairline)] bg-[var(--color-alabaster)]"><button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="rounded-full bg-transparent p-4 text-[var(--color-espresso)] hover:text-[var(--color-gold-dark)]" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button><span className="min-w-10 text-center font-semibold">{quantity}</span><button type="button" onClick={() => setQuantity((value) => value + 1)} className="rounded-full bg-transparent p-4 text-[var(--color-espresso)] hover:text-[var(--color-gold-dark)]" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button></div><button type="button" onClick={() => onAddToCart(product, { tone, quantity })} className="min-h-14 flex-1 rounded-full bg-[var(--color-gold)] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-espresso)] shadow-[0_20px_50px_rgba(197,154,82,0.25)] transition hover:-translate-y-0.5 hover:bg-[var(--color-gold-dark)]">Add to Cart</button></div>
          </div>
          <div className="divide-y divide-[color:var(--color-hairline)]">{accordionContent.map((item) => { const isOpen = openAccordion === item.title; return <div key={item.title}><button type="button" onClick={() => setOpenAccordion(isOpen ? '' : item.title)} className="flex w-full items-center justify-between bg-transparent py-5 text-left font-[var(--font-heading)] text-2xl text-[var(--color-espresso)]">{item.title}<ChevronDown className={`h-5 w-5 transition ${isOpen ? 'rotate-180' : ''}`} /></button>{isOpen && <p className="pb-5 text-sm leading-7 text-[var(--color-muted)]">{item.body}</p>}</div> })}</div>
        </div>
      </section>
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-8 flex items-end justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-gold-dark)]">Complete the ritual</p><h2 className="mt-3 font-[var(--font-heading)] text-4xl tracking-[-0.03em]">You may also like</h2></div><Link to="/shop" className="hidden text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-espresso)] hover:text-[var(--color-gold-dark)] sm:inline-flex">View all</Link></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{related.map((item) => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />)}</div></section>
    </main>
  )
}
