import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import ProductCard from '../components/storefront/ProductCard'
import { products } from '../data/products'
import { useStrikinglyImages } from '../lib/useStrikinglyImages'

const placeholder = '/velmora-jewelry-fallback.svg'
const accordionItems = [
  ['Description', 'description'],
  ['Materials & Care', 'care'],
  ['Shipping & Returns', 'shipping'],
]

export default function ProductDetail({ onAddToCart }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const [variant, setVariant] = useState('Gold tone')
  const [quantity, setQuantity] = useState(1)
  const [openPanel, setOpenPanel] = useState('description')
  const [activeImage, setActiveImage] = useState(0)
  const containerRef = useStrikinglyImages([product.id, activeImage])

  const related = useMemo(() => products.filter((item) => item.id !== product.id).slice(0, 4), [product.id])
  const galleryContextId = `detail-${product.id}-image-context`
  const gallery = [
    { id: `${product.imgId}-detail-a-v2`, label: `${product.name} main detail`, query: `[${galleryContextId}] [${product.descId}] [${product.titleId}]` },
    { id: `${product.imgId}-detail-b-v2`, label: `${product.name} worn on model`, query: `[${galleryContextId}] [${product.titleId}]` },
    { id: `${product.imgId}-detail-c-v2`, label: `${product.name} packaging detail`, query: `[${galleryContextId}] [${product.titleId}] [${product.descId}]` },
  ]

  const handleAdd = () => {
    for (let index = 0; index < quantity; index += 1) onAddToCart(product, variant)
  }

  return (
    <main ref={containerRef} className="bg-velmora-parchment pt-28 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 md:grid-cols-[1.08fr_0.92fr] md:px-8 lg:pb-24">
        <div className="grid gap-4 md:grid-cols-[90px_1fr]">
          <p id={galleryContextId} className="sr-only">{product.name} {product.category} demi-fine jewelry premium product photography, warm neutral background, elegant model styling. {product.imageHint}</p>
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
            {gallery.map((image, index) => (
              <button key={image.id} type="button" onClick={() => setActiveImage(index)} className={`w-20 flex-none border bg-velmora-ivory transition ${activeImage === index ? 'border-velmora-bronze' : 'border-velmora-sand'}`} aria-label={`View image ${index + 1}`}>
                <img alt={image.label} className="aspect-square w-full object-cover" data-strk-img-id={`${image.id}-thumb`} data-strk-img={image.query} data-strk-img-ratio="1x1" data-strk-img-width="220" src={placeholder} />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden bg-velmora-ivory shadow-[0_24px_70px_rgba(31,23,18,0.1)] md:order-2">
            <img alt={gallery[activeImage].label} className="aspect-[4/5] w-full object-cover" data-strk-img-id={`${gallery[activeImage].id}-main`} data-strk-img={gallery[activeImage].query} data-strk-img-ratio="4x3" data-strk-img-width="1100" src={placeholder} />
          </div>
        </div>

        <aside className="self-start bg-velmora-ivory p-6 shadow-[0_24px_70px_rgba(31,23,18,0.08)] md:sticky md:top-28 lg:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-bronze">{product.category}</p>
          <h1 id={product.titleId} className="mt-4 font-serif text-5xl uppercase leading-none tracking-[0.14em] text-velmora-espresso md:text-6xl">{product.name}</h1>
          <div className="mt-5 flex items-center justify-between gap-5 border-b border-velmora-sand pb-6">
            <p className="text-xl font-semibold text-velmora-espresso">${product.price}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-ink/70"><span className="flex text-velmora-champagne">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</span>{product.rating} ({product.reviews})</div>
          </div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-ink/75">{product.shortDescription}</p>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-espresso">Tone</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {['Gold tone', 'Silver tone'].map((tone) => <button key={tone} type="button" onClick={() => setVariant(tone)} className={`rounded-full border px-5 py-2 text-sm transition ${variant === tone ? 'border-velmora-bronze bg-velmora-bronze text-velmora-ivory' : 'border-velmora-sand text-velmora-espresso hover:border-velmora-bronze'}`}>{tone}</button>)}
            </div>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <div className="inline-flex items-center border border-velmora-sand text-velmora-espresso"><button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-4 transition hover:bg-velmora-sand/40" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button><span className="min-w-10 text-center text-sm font-semibold">{quantity}</span><button type="button" onClick={() => setQuantity(quantity + 1)} className="p-4 transition hover:bg-velmora-sand/40" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button></div>
            <button type="button" onClick={handleAdd} className="min-h-[54px] flex-1 bg-velmora-bronze px-6 text-xs font-bold uppercase tracking-[0.26em] text-velmora-ivory transition hover:bg-velmora-espresso">Add to Cart</button>
          </div>

          <div className="mt-8 border-t border-velmora-sand">
            {accordionItems.map(([label, key]) => <div key={key} className="border-b border-velmora-sand"><button type="button" onClick={() => setOpenPanel(openPanel === key ? '' : key)} className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.25em] text-velmora-espresso"><span>{label}</span><ChevronDown className={`h-4 w-4 transition ${openPanel === key ? 'rotate-180' : ''}`} /></button>{openPanel === key && <p className="pb-5 text-sm leading-7 text-velmora-ink/75">{product[key]}</p>}</div>)}
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 lg:pb-28">
        <div className="mb-8 flex items-end justify-between gap-5"><div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-bronze">You may also like</p><h2 className="mt-3 font-serif text-5xl leading-none text-velmora-espresso">More to Treasure</h2></div><Link to="/shop" className="hidden text-xs font-bold uppercase tracking-[0.25em] text-velmora-espresso hover:text-velmora-bronze sm:block">Shop all</Link></div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{related.map((item) => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />)}</div>
      </section>
    </main>
  )
}
