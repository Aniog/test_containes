import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'
import ProductMedia from '@/components/products/ProductMedia'
import Rating from '@/components/products/Rating'
import { formatPrice, getProductBySlug, products } from '@/data/products'

const variants = ['Gold', 'Silver']
const accordions = ['Description', 'Materials & Care', 'Shipping & Returns']

export default function ProductDetail({ onAddToCart }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeAccordion, setActiveAccordion] = useState('Description')

  const related = useMemo(() => products.filter((item) => item.id !== product.id).slice(0, 4), [product.id])
  const titleId = `detail-${product.id}-title`
  const descId = `detail-${product.id}-desc`
  const gallery = [
    { id: product.imageIds.hero, label: 'Hero', query: `[${descId}] [${titleId}]`, ratio: '4x3' },
    { id: product.imageIds.hover, label: 'Styled', query: `[${titleId}] [${descId}]`, ratio: '4x3' },
    { id: product.imageIds.detail1, label: 'Detail', query: `[${descId}] [${titleId}]`, ratio: '1x1' },
    { id: product.imageIds.detail2, label: 'Packaging', query: `[${titleId}] [${descId}]`, ratio: '4x3' },
  ]

  const handleAdd = () => {
    onAddToCart(product, { variant, quantity })
  }

  return (
    <main className="bg-velmora-ivory pb-20 pt-28 text-velmora-ink sm:pb-28">
      <section className="section-shell">
        <Link to="/shop" className="text-xs font-semibold uppercase tracking-luxury text-velmora-taupe transition hover:text-velmora-ink">← Back to shop</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="grid gap-4 sm:grid-cols-[88px_1fr]">
            <div className="order-2 grid grid-cols-4 gap-3 sm:order-1 sm:grid-cols-1">
              {gallery.map((image) => (
                <div key={image.id} className="overflow-hidden rounded-t-full border hairline bg-velmora-sand">
                  <ProductMedia
                    alt={`${product.name} ${image.label}`}
                    className="aspect-square h-full w-full object-cover"
                    imgId={`${image.id}-thumb`}
                    query={image.query}
                    ratio="1x1"
                    width="220"
                  />
                </div>
              ))}
            </div>
            <div className="order-1 grid gap-4 sm:order-2">
              {gallery.slice(0, 2).map((image, index) => (
                <div key={image.id} className={`overflow-hidden bg-velmora-sand shadow-soft ${index === 0 ? 'rounded-t-full' : 'rounded-[2rem]'}`}>
                  <ProductMedia
                    alt={`${product.name} ${image.label}`}
                    className="aspect-[4/5] h-full w-full object-cover"
                    imgId={`${image.id}-detail-main`}
                    query={image.query}
                    ratio={image.ratio}
                    width="1000"
                  />
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit lg:sticky lg:top-28">
            <p id={descId} className="eyebrow">{product.category} · {product.material}</p>
            <h1 id={titleId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-none tracking-luxury text-velmora-ink sm:text-6xl">{product.name}</h1>
            <div className="mt-5 flex flex-col gap-3 border-b hairline pb-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-2xl font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
              <Rating rating={product.rating} reviews={product.reviews} />
            </div>
            <p className="mt-6 text-base leading-8 text-velmora-taupe">{product.shortDescription}</p>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-luxury text-velmora-taupe">Tone</p>
              <div className="mt-3 flex gap-3">
                {variants.map((item) => (
                  <button key={item} type="button" onClick={() => setVariant(item)} className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${variant === item ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory' : 'border-velmora-stone bg-velmora-ivory text-velmora-ink hover:border-velmora-champagne'}`}>
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 flex items-center gap-4">
              <div className="flex items-center rounded-full border hairline bg-velmora-ivory">
                <button type="button" className="p-3 text-velmora-ink" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                <span className="min-w-10 text-center font-semibold text-velmora-ink">{quantity}</span>
                <button type="button" className="p-3 text-velmora-ink" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
              </div>
              <button type="button" onClick={handleAdd} className="premium-button flex-1">Add to Cart</button>
            </div>

            <div className="mt-8 divide-y divide-velmora-stone/70 border-y hairline">
              {accordions.map((item) => (
                <div key={item}>
                  <button type="button" onClick={() => setActiveAccordion(activeAccordion === item ? '' : item)} className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-luxury text-velmora-ink">
                    {item}
                    <span>{activeAccordion === item ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === item && <p className="pb-5 text-sm leading-7 text-velmora-taupe">{getAccordionCopy(item, product)}</p>}
                </div>
              ))}
            </div>
          </aside>
        </div>

        <section className="mt-20 border-t hairline pt-14">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Complete the ritual</p>
              <h2 className="serif-title mt-3 text-4xl sm:text-5xl">You may also like</h2>
            </div>
            <Link to="/shop" className="hidden text-xs font-semibold uppercase tracking-luxury text-velmora-taupe transition hover:text-velmora-ink sm:block">View all</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

function getAccordionCopy(title, product) {
  if (title === 'Description') return product.story
  if (title === 'Materials & Care') return `${product.material} over a durable jewelry base. ${product.care}`
  return 'Free worldwide shipping on every order. Returns are accepted within 30 days when pieces are unworn and returned in original packaging.'
}
