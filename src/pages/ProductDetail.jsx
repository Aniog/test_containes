import { Minus, Plus, Star } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '@/components/storefront/ProductCard'
import { formatPrice, getProductById, products } from '@/data/products'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'
const accordionItems = [
  ['Description', 'A refined demi-fine piece designed for everyday shine and meaningful gifting.'],
  ['Materials & Care', 'Demi-fine gold plating, skin-friendly finishing, and crystal accents where noted.'],
  ['Shipping & Returns', 'Free worldwide shipping on every order. Returns are accepted within 30 days.'],
]

export default function ProductDetail({ onAddToCart }) {
  const { productId } = useParams()
  const product = getProductById(productId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')
  const gallery = useMemo(() => [{ id: `${product.imgId}-gallery-main`, label: product.name }, { id: `${product.hoverImgId}-gallery-model`, label: `${product.name} worn close-up` }, { id: `${product.id}-detail-texture-6a8c2p`, label: `${product.name} detailed gold texture` }], [product])
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <main className="min-h-screen bg-velmora-pearl pt-24 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-16">
        <div className="grid gap-4 md:grid-cols-[92px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
            {gallery.map((image, index) => <button key={image.id} type="button" onClick={() => setSelectedImage(index)} className={`aspect-square w-20 shrink-0 overflow-hidden border bg-velmora-blush transition md:w-full ${selectedImage === index ? 'border-velmora-espresso' : 'border-velmora-line hover:border-velmora-bronze'}`} aria-label={`View ${image.label}`}><img alt={image.label} className="h-full w-full object-cover" data-strk-img-id={`${image.id}-thumb`} data-strk-img={`[${product.descId}] [${product.titleId}]`} data-strk-img-ratio="1x1" data-strk-img-width="180" src={placeholder} /></button>)}
          </div>
          <div className="order-1 overflow-hidden bg-velmora-blush shadow-editorial md:order-2"><img alt={gallery[selectedImage].label} className="aspect-[4/5] h-full w-full object-cover lg:aspect-[5/6]" data-strk-img-id={gallery[selectedImage].id} data-strk-img={`[${product.descId}] [${product.titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="1100" src={placeholder} /></div>
        </div>

        <div className="lg:sticky lg:top-28 lg:h-fit">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze transition hover:text-velmora-espresso">Shop / {product.category}</Link>
          <h1 id={product.titleId} className="mt-5 font-serif text-4xl font-semibold uppercase leading-tight tracking-[0.16em] text-velmora-espresso md:text-6xl">{product.name}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-4"><p className="text-2xl font-semibold text-velmora-espresso">{formatPrice(product.price)}</p><div className="flex items-center gap-2 text-sm text-velmora-taupe"><span className="flex text-velmora-gold" aria-label={`${product.rating} star rating`}>{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</span>{product.rating.toFixed(1)} · {product.reviews} reviews</div></div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-taupe md:text-lg">{product.longDescription}</p>
          <div className="mt-8 border-y border-velmora-line py-6"><p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze">Tone</p><div className="mt-4 flex gap-3">{['Gold', 'Silver'].map((item) => <button key={item} type="button" onClick={() => setTone(item)} className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${tone === item ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-line bg-velmora-ivory text-velmora-espresso hover:border-velmora-bronze'}`}>{item} Tone</button>)}</div></div>
          <div className="mt-6 flex gap-4"><div className="flex items-center border border-velmora-line bg-velmora-ivory text-velmora-espresso"><button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="p-4 hover:bg-velmora-line" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button><span className="w-12 text-center font-semibold">{quantity}</span><button type="button" onClick={() => setQuantity((current) => current + 1)} className="p-4 hover:bg-velmora-line" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button></div><button type="button" onClick={() => onAddToCart(product, quantity)} className="flex-1 bg-velmora-gold px-6 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-bronze hover:text-velmora-ivory">Add to Cart</button></div>
          <div className="mt-8 border-t border-velmora-line">{accordionItems.map(([title, content]) => <div key={title} className="border-b border-velmora-line"><button type="button" onClick={() => setOpenAccordion((current) => (current === title ? '' : title))} className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-[0.22em] text-velmora-espresso">{title}<span className="text-xl text-velmora-bronze">{openAccordion === title ? '−' : '+'}</span></button>{openAccordion === title && <p className="pb-5 text-sm leading-7 text-velmora-taupe">{title === 'Description' ? product.longDescription : title === 'Materials & Care' ? product.care : content}</p>}</div>)}</div>
        </div>
      </section>
      <section className="border-t border-velmora-line px-5 py-16 lg:px-10"><div className="mx-auto max-w-7xl"><h2 className="font-serif text-4xl font-semibold text-velmora-espresso">You may also like</h2><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{related.map((item) => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />)}</div></div></section>
    </main>
  )
}
