import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import ProductCard from '@/components/storefront/ProductCard'
import ProductImage from '@/components/storefront/ProductImage'
import { formatPrice, getProductById, getRelatedProducts } from '@/data/products'

const accordions = [
  { title: 'Description', key: 'detail' },
  { title: 'Materials & Care', key: 'care' },
  { title: 'Shipping & Returns', key: 'shipping', content: 'Enjoy free worldwide shipping, elegant gift-ready packaging, and 30-day returns on unworn pieces.' },
]

export default function ProductPage({ onAddToCart }) {
  const { productId } = useParams()
  const product = getProductById(productId)
  const related = useMemo(() => getRelatedProducts(product.id), [product.id])
  const [selectedTone, setSelectedTone] = useState(product.tone[0])
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState('primary')
  const [openAccordion, setOpenAccordion] = useState('Description')
  const gallery = [
    { id: 'primary', imgId: product.detailImgId, label: 'Studio view' },
    { id: 'styled', imgId: product.wornImgId, label: 'Worn view' },
    { id: 'macro', imgId: product.macroImgId, label: 'Detail view' },
  ]
  const activeGalleryItem = gallery.find((item) => item.id === selectedImage) ?? gallery[0]

  return (
    <main className="bg-ivory pt-24 text-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[90px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((item) => <button key={item.id} type="button" onClick={() => setSelectedImage(item.id)} className={`aspect-square w-20 shrink-0 overflow-hidden border bg-rose-beige transition focus:outline-none focus:ring-2 focus:ring-champagne lg:w-full ${selectedImage === item.id ? 'border-champagne' : 'border-taupe hover:border-champagne'}`} aria-label={`Show ${item.label}`}><ProductImage imageId={item.imgId} alt={`${product.name} ${item.label}`} className="h-full w-full object-cover" /></button>)}
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden bg-rose-beige lg:order-2"><ProductImage imageId={activeGalleryItem.imgId} alt={product.name} className="h-full w-full object-cover" /></div>
        </div>
        <section className="text-espresso lg:pl-6">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.22em] text-sable/70 transition hover:text-champagne">← Back to shop</Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.26em] text-champagne">{product.category}</p>
          <h1 id={product.titleId} className="mt-3 font-serif text-4xl uppercase leading-tight tracking-[0.14em] text-espresso sm:text-5xl">{product.name}</h1>
          <div className="mt-4 flex items-center gap-4"><p className="text-xl font-semibold tracking-[0.1em] text-espresso">{formatPrice(product.price)}</p><div className="flex items-center gap-1 text-champagne" aria-label="Rated 5 out of 5 stars">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />)}<span className="ml-2 text-xs font-semibold uppercase tracking-[0.18em] text-sable/70">42 reviews</span></div></div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-sable">{product.description}</p>
          <div className="mt-8 border-y border-taupe py-6"><p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-sable/75">Tone</p><div className="flex flex-wrap gap-3">{product.tone.map((tone) => <button key={tone} type="button" onClick={() => setSelectedTone(tone)} className={`rounded-full border px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-champagne ${selectedTone === tone ? 'border-espresso bg-espresso text-ivory' : 'border-taupe bg-porcelain text-espresso hover:border-champagne'}`}>{tone}</button>)}</div></div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row"><div className="flex w-full items-center justify-between rounded-full border border-taupe bg-porcelain px-3 py-2 text-espresso sm:w-36"><button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="rounded-full bg-transparent p-2 text-espresso hover:text-champagne" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button><span className="font-semibold">{quantity}</span><button type="button" onClick={() => setQuantity((current) => current + 1)} className="rounded-full bg-transparent p-2 text-espresso hover:text-champagne" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button></div><button type="button" onClick={() => onAddToCart(product, quantity)} className="flex-1 rounded-full bg-champagne px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] text-espresso transition hover:bg-espresso hover:text-ivory focus:outline-none focus:ring-2 focus:ring-champagne">Add to Cart</button></div>
          <div className="mt-8 divide-y divide-taupe border-y border-taupe">{accordions.map((accordion) => { const isOpen = openAccordion === accordion.title; const body = accordion.content ?? product[accordion.key]; return <div key={accordion.title}><button type="button" onClick={() => setOpenAccordion(isOpen ? '' : accordion.title)} className="flex w-full items-center justify-between bg-transparent py-5 text-left text-sm font-bold uppercase tracking-[0.2em] text-espresso focus:outline-none focus:text-champagne">{accordion.title}<ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" /></button><div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}><div className="overflow-hidden"><p className="pb-5 text-sm leading-7 text-sable">{body}</p></div></div></div> })}</div>
        </section>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24"><div className="mb-8"><p className="text-xs font-semibold uppercase tracking-[0.26em] text-champagne">Complete the ritual</p><h2 className="mt-3 font-serif text-4xl text-espresso">You may also like</h2></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{related.map((item) => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />)}</div></section>
    </main>
  )
}
