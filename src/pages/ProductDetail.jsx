import { ChevronDown, Minus, Plus } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PremiumButton from '@/components/common/PremiumButton'
import ProductCard from '@/components/common/ProductCard'
import Stars from '@/components/common/Stars'
import { placeholderSvg, products } from '@/data/products'
import { useVelmoraImages } from '@/lib/useVelmoraImages'

const accordionItems = [
  { title: 'Description', body: 'Designed to feel polished without trying too hard, each Velmora piece is scaled for everyday wear and finished with warm, skin-flattering shine.' },
  { title: 'Materials & Care', body: 'Made with demi-fine gold plating or vermeil finishes. Keep away from perfume, lotions, and water; store in the included pouch between wears.' },
  { title: 'Shipping & Returns', body: 'Enjoy free worldwide shipping and easy 30-day returns on unworn pieces in original packaging.' },
]

export default function ProductDetail({ onAddToCart }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const [selectedTone, setSelectedTone] = useState(product.tone[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('main')
  const [openAccordion, setOpenAccordion] = useState('Description')
  const containerRef = useVelmoraImages([product.id, activeImage])

  const related = useMemo(() => products.filter((item) => item.id !== product.id).slice(0, 4), [product.id])
  const activeImgId = activeImage === 'main' ? product.imgId : product.hoverImgId
  const activeAlt = activeImage === 'main' ? product.name : `${product.name} on model`

  return (
    <main ref={containerRef} className="bg-velmora-pearl pt-28 text-velmora-ink">
      <section className="velmora-container grid gap-10 pb-16 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
        <div className="grid gap-4 lg:grid-cols-[96px_1fr]">
          <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
            {['main', 'hover'].map((imageKey) => (
              <button key={imageKey} type="button" onClick={() => setActiveImage(imageKey)} className={`aspect-square w-20 overflow-hidden border bg-velmora-linen transition-colors lg:w-full ${activeImage === imageKey ? 'border-velmora-gold' : 'border-velmora-linen'}`} aria-label={`View ${imageKey} product image`}>
                <img
                  alt={`${product.name} ${imageKey}`}
                  className="image-fill"
                  data-strk-img-id={`${imageKey === 'main' ? product.imgId : product.hoverImgId}-thumb`}
                  data-strk-img="[detail-desc] [detail-title]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src={placeholderSvg}
                />
              </button>
            ))}
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-linen shadow-velmora lg:order-2">
            <img
              alt={activeAlt}
              className="image-fill"
              data-strk-img-id={`${activeImgId}-detail`}
              data-strk-img={`[detail-desc] [detail-title]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              src={placeholderSvg}
            />
          </div>
        </div>
        <div className="lg:pl-8">
          <p className="text-xs font-semibold uppercase tracking-nav text-velmora-gold">{product.category}</p>
          <h1 id="detail-title" className="mt-3 font-serif text-5xl uppercase leading-tight tracking-product text-velmora-ink sm:text-6xl">{product.name}</h1>
          <div className="mt-4 flex items-center justify-between gap-4 border-b border-velmora-linen pb-5">
            <p className="font-serif text-3xl text-velmora-ink">${product.price}</p>
            <Stars rating={product.rating} reviews={product.reviews} />
          </div>
          <p id="detail-desc" className="mt-6 text-base leading-8 text-velmora-clay">{product.description}</p>
          <div className="mt-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-nav text-velmora-clay">Tone</p>
            <div className="flex flex-wrap gap-3">
              {product.tone.map((tone) => (
                <button key={tone} type="button" onClick={() => setSelectedTone(tone)} className={`rounded-full border px-5 py-2 text-sm transition-colors ${selectedTone === tone ? 'border-velmora-gold bg-velmora-gold text-velmora-ivory' : 'border-velmora-linen bg-velmora-ivory text-velmora-ink hover:border-velmora-gold'}`}>
                  {tone}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-nav text-velmora-clay">Quantity</p>
            <div className="inline-flex items-center border border-velmora-linen bg-velmora-ivory">
              <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 text-velmora-ink" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
              <span className="min-w-12 text-center text-sm text-velmora-ink">{quantity}</span>
              <button type="button" onClick={() => setQuantity(quantity + 1)} className="p-3 text-velmora-ink" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
            </div>
          </div>
          <PremiumButton className="mt-8 w-full py-4" onClick={() => onAddToCart(product, quantity, selectedTone)}>Add to Cart</PremiumButton>
          <div className="mt-8 divide-y divide-velmora-linen border-y border-velmora-linen">
            {accordionItems.map((item) => (
              <div key={item.title}>
                <button type="button" onClick={() => setOpenAccordion(openAccordion === item.title ? '' : item.title)} className="flex w-full items-center justify-between py-5 text-left text-xs font-semibold uppercase tracking-nav text-velmora-ink">
                  {item.title}<ChevronDown className={`h-4 w-4 transition-transform ${openAccordion === item.title ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === item.title ? <p className="pb-5 text-sm leading-7 text-velmora-clay">{item.body}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="velmora-container border-t border-velmora-linen py-16 lg:py-24">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-nav text-velmora-gold">Complete the ritual</p>
            <h2 className="mt-3 font-serif text-4xl text-velmora-ink sm:text-5xl">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-semibold uppercase tracking-nav text-velmora-clay hover:text-velmora-gold sm:block">View all</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />)}
        </div>
      </section>
    </main>
  )
}
