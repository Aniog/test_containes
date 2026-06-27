import { ChevronLeft, Minus, Plus, Star } from 'lucide-react'
import { useMemo, useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { formatPrice, products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E'
const getImageUrl = (imageId) => strkImgConfig?.[imageId]?.results?.[0]?.url || placeholder
const accordionItems = ['Description', 'Materials & Care', 'Shipping & Returns']

export default function ProductDetailPage({ product, onAdd, onViewProduct, onBack }) {
  const [activeImage, setActiveImage] = useState(0)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openPanel, setOpenPanel] = useState('Description')

  const gallery = useMemo(() => [
    { id: 'main', label: `${product.name} product image`, imageId: `product-main-${product.id}` },
    { id: 'worn', label: `${product.name} worn`, imageId: `product-hover-${product.id}` },
    { id: 'detail', label: `${product.name} detail`, imageId: `product-main-${product.id}` },
  ], [product])

  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <main className="bg-ivory pt-28 text-noir">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <button type="button" onClick={onBack} className="mb-8 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.22em] text-taupe transition hover:text-champagne">
          <ChevronLeft className="h-4 w-4" /> Back to shop
        </button>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="grid gap-4 lg:grid-cols-[5.5rem_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
              {gallery.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`h-20 w-20 shrink-0 overflow-hidden border bg-porcelain transition ${activeImage === index ? 'border-champagne' : 'border-sand hover:border-champagne'}`}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    src={getImageUrl(image.imageId)}
                    alt={image.label}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="order-1 overflow-hidden bg-porcelain lg:order-2">
              <img
                src={getImageUrl(gallery[activeImage].imageId)}
                alt={gallery[activeImage].label}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-champagne">{product.category}</p>
            <h1 id={`detail-title-${product.id}`} className="mt-4 font-serif text-5xl font-semibold uppercase leading-tight tracking-[0.14em] text-noir md:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center justify-between gap-6 border-b border-sand pb-6">
              <p className="font-sans text-2xl font-semibold text-noir">{formatPrice(product.price)}</p>
              <div className="flex items-center gap-1 text-champagne">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" strokeWidth={1.5} />
                ))}
                <span className="ml-2 font-sans text-sm font-medium text-taupe">{product.reviews} reviews</span>
              </div>
            </div>

            <p id={`detail-desc-${product.id}`} className="mt-6 font-sans text-base leading-8 text-taupe">{product.description}</p>

            <div className="mt-8">
              <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.22em] text-noir">Tone</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTone(option)}
                    className={`rounded-full border px-5 py-3 font-sans text-sm font-bold uppercase tracking-[0.16em] transition ${tone === option ? 'border-champagne bg-champagne text-noir shadow-sm' : 'border-sand bg-porcelain text-noir hover:border-champagne'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="inline-flex items-center rounded-full border border-sand bg-porcelain text-noir">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-4 hover:text-champagne" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center font-sans text-sm font-bold">{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-4 hover:text-champagne" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => onAdd(product, quantity)}
                className="min-h-14 flex-1 rounded-full bg-champagne px-7 py-4 font-sans text-sm font-bold uppercase tracking-[0.22em] text-noir transition hover:bg-bronze hover:text-ivory focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-ivory"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-8 border-y border-sand">
              {accordionItems.map((item) => (
                <div key={item} className="border-b border-sand last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenPanel(openPanel === item ? '' : item)}
                    className="flex w-full items-center justify-between py-5 text-left font-sans text-xs font-bold uppercase tracking-[0.22em] text-noir"
                  >
                    {item}
                    <span className="text-xl text-champagne">{openPanel === item ? '−' : '+'}</span>
                  </button>
                  <div className={`grid transition-all duration-300 ${openPanel === item ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="pb-5 font-sans text-sm leading-7 text-taupe">
                        {item === 'Description' && product.details}
                        {item === 'Materials & Care' && product.care}
                        {item === 'Shipping & Returns' && 'Free worldwide shipping on all orders, with 30-day returns in original condition. Each piece ships in a signature Velmora pouch or gift box.'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-8 border-b border-sand pb-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-champagne">Complete the ritual</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold text-noir">You may also like</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} onAdd={onAdd} onView={onViewProduct} compact />
          ))}
        </div>
      </section>
    </main>
  )
}
