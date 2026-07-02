import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useMemo, useState } from 'react'
import { placeholderSvg, products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const gallerySlots = [
  { id: 'studio', label: 'Studio portrait', ratio: '4x3', width: '900' },
  { id: 'worn', label: 'Worn detail', ratio: '4x3', width: '900' },
  { id: 'gift', label: 'Gift packaging', ratio: '4x3', width: '900' },
]

const accordions = [
  { id: 'description', title: 'Description' },
  { id: 'care', title: 'Materials & Care' },
  { id: 'shipping', title: 'Shipping & Returns' },
]

export default function ProductDetailPage({ product, onAddToCart, onProductSelect }) {
  const [activeImage, setActiveImage] = useState(gallerySlots[0].id)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')

  const selectedSlot = gallerySlots.find((slot) => slot.id === activeImage) || gallerySlots[0]
  const relatedProducts = useMemo(
    () => products.filter((entry) => entry.id !== product.id).slice(0, 4),
    [product.id],
  )

  const accordionCopy = {
    description: product.description,
    care: `${product.material}. ${product.care}`,
    shipping: product.shipping,
  }

  return (
    <section id="product-detail" className="bg-velmora-ivory pt-28 text-velmora-espresso md:pt-32">
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
        <button type="button" onClick={() => window.location.assign('#shop')} className="mb-8 text-xs font-bold uppercase tracking-[0.24em] text-velmora-mink transition hover:text-velmora-champagne">
          Back to collection
        </button>

        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="grid gap-4 sm:grid-cols-[88px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:flex-col sm:overflow-visible">
              {gallerySlots.map((slot) => (
                <button key={slot.id} type="button" onClick={() => setActiveImage(slot.id)} className={`shrink-0 overflow-hidden rounded-t-full border bg-velmora-parchment transition ${activeImage === slot.id ? 'border-velmora-champagne' : 'border-velmora-espresso/10 hover:border-velmora-champagne/60'}`} aria-label={`View ${slot.label}`}>
                  <img
                    alt={`${product.name} ${slot.label}`}
                    className="h-24 w-20 object-cover sm:h-28 sm:w-full"
                    data-strk-img-id={`detail-thumb-${slot.id}`}
                    data-strk-img={`[detail-image-context-${slot.id}] [detail-generic-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="220"
                    src={placeholderSvg}
                  />
                </button>
              ))}
            </div>
            <div className="order-1 overflow-hidden rounded-t-full bg-velmora-parchment shadow-[0_30px_80px_rgba(32,24,20,0.08)] sm:order-2">
              <img
                alt={`${product.name} ${selectedSlot.label}`}
                className="aspect-[4/5] w-full object-cover"
                data-strk-img-id={`detail-main-${selectedSlot.id}`}
                data-strk-img={`[detail-image-context-${selectedSlot.id}] [detail-generic-desc] [detail-generic-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                src={placeholderSvg}
              />
            </div>
          </div>

          <div className="self-start text-velmora-espresso lg:sticky lg:top-28">
            <p id={`detail-category-${product.id}`} className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">{product.category}</p>
            <h1 id={`detail-name-${product.id}`} className="mt-4 font-serif text-5xl font-semibold uppercase leading-tight tracking-[0.16em] text-velmora-espresso md:text-6xl">{product.name}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="text-2xl font-semibold text-velmora-espresso">${product.price}</p>
              <div className="flex items-center gap-1 text-velmora-champagne">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" strokeWidth={1.2} />)}
                <span className="ml-2 text-sm text-velmora-mink">{product.rating} · {product.reviews} reviews</span>
              </div>
            </div>
            <p id={`detail-desc-${product.id}`} className="mt-6 text-base leading-8 text-velmora-mink">{product.description}</p>

            <div className="mt-8 border-y border-velmora-espresso/10 py-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso">Tone</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {['Gold', 'Silver'].map((tone) => (
                  <button key={tone} type="button" onClick={() => setVariant(tone)} className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] transition ${variant === tone ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-espresso/15 text-velmora-espresso hover:border-velmora-champagne hover:text-velmora-champagne'}`}>
                    {tone}
                  </button>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso">Quantity</p>
                <div className="flex items-center rounded-full border border-velmora-espresso/15 text-velmora-espresso">
                  <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-3 transition hover:text-velmora-champagne">
                    <Minus className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                  <span className="min-w-10 text-center text-sm font-semibold">{quantity}</span>
                  <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)} className="p-3 transition hover:text-velmora-champagne">
                    <Plus className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>

            <button type="button" onClick={() => onAddToCart(product, quantity, variant)} className="mt-7 w-full rounded-full bg-velmora-champagne px-8 py-5 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso shadow-[0_18px_45px_rgba(199,154,85,0.22)] transition hover:bg-velmora-softgold">
              Add to cart
            </button>

            <div className="mt-8 divide-y divide-velmora-espresso/10 border-y border-velmora-espresso/10">
              {accordions.map((accordion) => (
                <div key={accordion.id}>
                  <button type="button" onClick={() => setOpenAccordion((current) => current === accordion.id ? '' : accordion.id)} className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso">
                    {accordion.title}
                    <ChevronDown className={`h-4 w-4 transition ${openAccordion === accordion.id ? 'rotate-180' : ''}`} strokeWidth={1.5} />
                  </button>
                  {openAccordion === accordion.id && (
                    <p className="pb-5 text-sm leading-7 text-velmora-mink">{accordionCopy[accordion.id]}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Complete the ritual</p>
              <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-espresso">You may also like</h2>
            </div>
          </div>
          <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((entry) => (
              <ProductCard key={entry.id} product={entry} onAddToCart={onAddToCart} onSelect={onProductSelect} compact imageContext="related" />
            ))}
          </div>
        </div>
      </div>

      <span id="detail-generic-title" className="sr-only">Velmora warm gold demi-fine jewelry</span>
      <span id="detail-generic-desc" className="sr-only">gold earrings necklaces and huggies in warm editorial light</span>
      {gallerySlots.map((slot) => (
        <span key={slot.id} id={`detail-image-context-${slot.id}`} className="sr-only">
          {slot.id === 'studio' ? 'warm gold jewelry on neutral editorial background' : slot.id === 'worn' ? 'gold jewelry worn by woman close up' : 'gift boxed jewelry packaging'}
        </span>
      ))}
    </section>
  )
}
