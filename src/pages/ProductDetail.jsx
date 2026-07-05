import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { findProduct, formatPrice, products } from '@/data/products'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'
const accordionContent = {
  Description: 'A refined demi-fine piece made to layer, gift, and wear often. Each silhouette is designed with soft shine, flattering proportions, and a quietly luxurious finish.',
  'Materials & Care': '18K gold plating or gold vermeil over a durable base, finished with hypoallergenic posts where applicable. Store dry, polish gently, and avoid direct contact with perfume or water.',
  'Shipping & Returns': 'Enjoy free worldwide shipping and 30-day returns on unworn pieces in original packaging. Gift-ready presentation is included with every order.',
}

export default function ProductDetail({ onAddToCart }) {
  const { productId } = useParams()
  const product = findProduct(productId)
  const [selectedImage, setSelectedImage] = useState('main')
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 4),
    [product.id],
  )

  const gallery = [
    { key: 'main', label: 'Main view', ratio: '4x3' },
    { key: 'worn', label: 'Worn on model', ratio: '4x3' },
    { key: 'detail', label: 'Detail closeup', ratio: '4x3' },
  ]

  return (
    <main className="bg-velmora-cream pb-20 pt-28 text-velmora-cocoa">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-14">
        <div className="grid gap-4 lg:grid-cols-[96px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto scrollbar-hide lg:order-1 lg:flex-col">
            {gallery.map((image) => (
              <button
                key={image.key}
                type="button"
                onClick={() => setSelectedImage(image.key)}
                className={`relative h-24 w-24 shrink-0 overflow-hidden border transition velmora-image ${selectedImage === image.key ? 'border-velmora-champagne' : 'border-velmora-mist hover:border-velmora-champagne'}`}
                aria-label={`Show ${image.label}`}
              >
                <img
                  alt={`${product.name} ${image.label}`}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`detail-thumb-${product.id}-${image.key}`}
                  data-strk-img={`[detail-${product.id}-desc] [detail-${product.id}-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="220"
                  src={placeholder}
                />
              </button>
            ))}
          </div>
          <div className="order-1 relative aspect-[4/5] overflow-hidden bg-velmora-espresso velmora-image lg:order-2">
            {gallery.map((image) => (
              <img
                key={image.key}
                alt={`${product.name} ${image.label}`}
                className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${selectedImage === image.key ? 'opacity-100' : 'opacity-0'}`}
                data-strk-img-id={`detail-main-${product.id}-${image.key}`}
                data-strk-img={`[detail-${product.id}-desc] [detail-${product.id}-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1100"
                src={placeholder}
              />
            ))}
          </div>
        </div>

        <div className="lg:pl-8">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-antique transition hover:text-velmora-ink">Back to shop</Link>
          <div className="mt-6 border-b border-velmora-mist pb-7">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-antique">{product.category}</p>
            <h1 id={`detail-${product.id}-title`} className="mt-3 font-serif text-5xl font-semibold uppercase leading-none tracking-[0.16em] text-velmora-ink sm:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="font-serif text-4xl font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
              <div className="flex items-center gap-1 text-sm font-semibold text-velmora-cocoa">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-velmora-champagne text-velmora-champagne" />)}
                <span className="ml-2">{product.rating} · {product.reviews} reviews</span>
              </div>
            </div>
            <p id={`detail-${product.id}-desc`} className="mt-6 text-base leading-8 text-velmora-cocoa/82">{product.detail}</p>
          </div>

          <div className="space-y-7 border-b border-velmora-mist py-7">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink">Tone</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTone(option)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${tone === option ? 'border-velmora-champagne bg-velmora-champagne text-velmora-ink' : 'border-velmora-mist bg-velmora-pearl text-velmora-cocoa hover:border-velmora-champagne'}`}
                  >
                    {option} tone
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink">Quantity</p>
              <div className="inline-flex items-center border border-velmora-mist bg-velmora-pearl">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-4 text-velmora-ink" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-12 text-center font-bold text-velmora-ink">{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-4 text-velmora-ink" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onAddToCart(product, quantity)}
              className="w-full border border-velmora-ink bg-velmora-ink px-7 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-pearl transition hover:border-velmora-champagne hover:bg-velmora-champagne hover:text-velmora-ink"
            >
              Add to Cart · {formatPrice(product.price * quantity)}
            </button>
          </div>

          <div className="divide-y divide-velmora-mist">
            {Object.entries(accordionContent).map(([title, content]) => (
              <div key={title}>
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === title ? '' : title)}
                  className="flex w-full items-center justify-between py-5 text-left text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-ink"
                >
                  {title}
                  <ChevronDown className={`h-4 w-4 transition ${openAccordion === title ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openAccordion === title ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                  <p className="text-sm leading-7 text-velmora-cocoa/78">{content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4 border-t border-velmora-mist pt-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-antique">Complete the ritual</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold leading-none text-velmora-ink">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-ink transition hover:text-velmora-antique sm:block">View all</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} onAdd={onAddToCart} context="related" compact />
          ))}
        </div>
      </section>
    </main>
  )
}
