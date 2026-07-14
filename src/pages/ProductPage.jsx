import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '@/components/Footer'
import ImageLoader from '@/components/ImageLoader'
import ProductCard from '@/components/ProductCard'
import { formatPrice, getProductById, products } from '@/data/products'

const accordionItems = [
  { key: 'description', label: 'Description' },
  { key: 'care', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

export default function ProductPage({ onAddToCart }) {
  const { id } = useParams()
  const product = getProductById(id)
  const [selectedTone, setSelectedTone] = useState(product.tone[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('primary')
  const [openAccordion, setOpenAccordion] = useState('description')

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 4),
    [product.id],
  )

  const imageTextId = activeImage === 'primary' ? product.descId : product.hoverId

  const handleAdd = () => {
    onAddToCart(product, selectedTone, quantity)
  }

  return (
    <ImageLoader className="bg-velmora-cream text-velmora-ink" refreshKey={`${product.id}-${activeImage}`}>
      <main className="pt-24">
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-16">
          <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
            <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
              {[
                { key: 'primary', id: product.imgId, label: product.name, textId: product.descId },
                { key: 'worn', id: product.hoverImgId, label: `${product.name} worn`, textId: product.hoverId },
              ].map((image) => (
                <button
                  key={image.key}
                  type="button"
                  onClick={() => setActiveImage(image.key)}
                  className={`overflow-hidden border bg-velmora-parchment transition ${activeImage === image.key ? 'border-velmora-champagne' : 'border-velmora-mist hover:border-velmora-bronze'}`}
                  aria-label={`Show ${image.label}`}
                >
                  <img
                    alt={image.label}
                    className="aspect-square w-20 object-cover sm:w-24 lg:w-full"
                    data-strk-img-id={`thumb-${image.id}`}
                    data-strk-img={`[${image.textId}] [${product.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="220"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </button>
              ))}
            </div>
            <div className="order-1 overflow-hidden bg-velmora-parchment shadow-editorial lg:order-2">
              <img
                alt={product.name}
                className="aspect-[4/5] w-full object-cover"
                data-strk-img-id={`gallery-${activeImage}-${product.imgId}`}
                data-strk-img={`[${imageTextId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1100"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>

          <div className="lg:pl-8">
            <Link to="/shop" className="text-xs font-bold uppercase tracking-luxury text-velmora-bronze transition hover:text-velmora-ink">Back to shop</Link>
            <p id={product.hoverId} className="sr-only">{product.hoverText}</p>
            <h1 id={product.titleId} className="mt-5 font-serif text-5xl uppercase leading-tight tracking-luxury text-velmora-ink sm:text-6xl">{product.name}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <p className="font-serif text-4xl text-velmora-ink">{formatPrice(product.price)}</p>
              <div className="flex items-center gap-1 text-velmora-champagne">
                {[0, 1, 2, 3, 4].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}
                <span className="ml-2 text-sm text-velmora-ink/68">{product.rating} · {product.reviews} reviews</span>
              </div>
            </div>
            <p id={product.descId} className="mt-6 max-w-xl text-base leading-8 text-velmora-ink/76">{product.short}</p>

            <div className="mt-8 border-y border-velmora-mist py-7">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-ink">Tone</p>
                <div className="flex flex-wrap gap-3">
                  {product.tone.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition ${selectedTone === tone ? 'border-velmora-ink bg-velmora-ink text-velmora-cream' : 'border-velmora-mist text-velmora-ink hover:border-velmora-champagne hover:bg-velmora-parchment'}`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <p className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-ink">Quantity</p>
                <div className="inline-flex items-center border border-velmora-mist bg-velmora-cream">
                  <button type="button" className="p-4 text-velmora-ink transition hover:bg-velmora-parchment" onClick={() => setQuantity((current) => Math.max(1, current - 1))} aria-label="Decrease quantity">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-12 text-center text-sm font-semibold text-velmora-ink">{quantity}</span>
                  <button type="button" className="p-4 text-velmora-ink transition hover:bg-velmora-parchment" onClick={() => setQuantity((current) => current + 1)} aria-label="Increase quantity">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button type="button" onClick={handleAdd} className="mt-7 w-full bg-velmora-champagne px-8 py-5 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ink shadow-soft transition hover:bg-velmora-bronze hover:text-velmora-cream">
                Add to Cart
              </button>
            </div>

            <div className="divide-y divide-velmora-mist">
              {accordionItems.map((item) => (
                <div key={item.key}>
                  <button type="button" onClick={() => setOpenAccordion(openAccordion === item.key ? '' : item.key)} className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-[0.18em] text-velmora-ink">
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition ${openAccordion === item.key ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openAccordion === item.key ? 'max-h-48 pb-5' : 'max-h-0'}`}>
                    <p className="text-sm leading-7 text-velmora-ink/74">{product[item.key]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-t border-velmora-mist px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-9 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-luxury text-velmora-bronze">Complete the ritual</p>
              <h2 className="mt-3 font-serif text-5xl text-velmora-ink">You may also like</h2>
            </div>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </ImageLoader>
  )
}
