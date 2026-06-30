import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, ShoppingBag } from 'lucide-react'
import ProductCard from './ProductCard.jsx'
import ProductImage from './ProductImage.jsx'
import StarRating from './StarRating.jsx'
import { products } from '@/data/products.js'
import { formatPrice } from '@/lib/format.js'

const accordionItems = [
  { key: 'description', title: 'Description' },
  { key: 'care', title: 'Materials & Care' },
  { key: 'shipping', title: 'Shipping & Returns' },
]

export default function ProductDetailPage({ onAddToCart }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const [activeImage, setActiveImage] = useState(product.imageId)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')

  const gallery = useMemo(() => [
    { id: product.imageId, label: 'Editorial front', src: product.artwork },
    { id: product.hoverImageId, label: 'Worn detail', src: product.artwork },
  ], [product])

  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  const content = {
    description: product.details,
    care: product.care,
    shipping: product.shipping,
  }

  return (
    <main className="bg-velmora-ivory pt-24 text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[96px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveImage(image.id)}
                className={`shrink-0 overflow-hidden rounded-2xl border bg-velmora-champagne transition ${activeImage === image.id ? 'border-velmora-gold shadow-glow' : 'border-velmora-espresso/10 hover:border-velmora-gold/60'}`}
                aria-label={`Show ${image.label}`}
              >
                <ProductImage
                  imageId={image.id}
                  titleId={product.titleId}
                  descId={product.descId}
                  alt={`${product.name} ${image.label}`}
                  ratio="1x1"
                  width="260"
                  src={image.src}
                  className="h-24 w-24 object-cover"
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden rounded-[2.5rem] bg-velmora-champagne shadow-soft lg:order-2">
            <ProductImage
              imageId={activeImage}
              titleId={product.titleId}
              descId={product.descId}
              alt={product.name}
              ratio="4x3"
              width="1300"
              src={product.artwork}
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/6] lg:aspect-[4/5]"
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-burnished">{product.category}</p>
          <h1 id={product.titleId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-tight tracking-[0.16em] text-velmora-espresso sm:text-6xl">
            {product.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <p className="font-serif text-4xl font-semibold text-velmora-espresso">{formatPrice(product.price)}</p>
            <StarRating rating={product.rating} reviews={product.reviews} />
          </div>
          <p id={product.descId} className="mt-6 text-lg leading-8 text-velmora-taupe">{product.description}</p>

          <div className="mt-8 border-y border-velmora-espresso/10 py-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-burnished">Tone</p>
            <div className="flex flex-wrap gap-3">
              {['Gold', 'Silver'].map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setVariant(tone)}
                  className={`rounded-full border px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] transition ${variant === tone ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-espresso/15 bg-velmora-ivory text-velmora-espresso hover:border-velmora-gold hover:text-velmora-burnished'}`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <div className="flex w-fit items-center rounded-full border border-velmora-espresso/15 bg-white/45 text-velmora-espresso">
              <button type="button" className="p-4 transition hover:text-velmora-gold" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-12 text-center font-bold">{quantity}</span>
              <button type="button" className="p-4 transition hover:text-velmora-gold" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => onAddToCart(product, quantity, variant)}
              className="inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-velmora-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ivory shadow-glow transition hover:bg-velmora-burnished"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>

          <div className="mt-8 divide-y divide-velmora-espresso/10 rounded-[2rem] border border-velmora-espresso/10 bg-white/45 text-velmora-ink">
            {accordionItems.map((item) => {
              const isOpen = openAccordion === item.key
              return (
                <div key={item.key}>
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isOpen ? '' : item.key)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left font-serif text-2xl font-semibold text-velmora-espresso"
                    aria-expanded={isOpen}
                  >
                    {item.title}
                    <ChevronDown className={`h-5 w-5 text-velmora-burnished transition ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-52' : 'max-h-0'}`}>
                    <p className="px-6 pb-6 text-sm leading-7 text-velmora-taupe">{content[item.key]}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-burnished">Complete the ritual</p>
            <h2 className="font-serif text-5xl font-semibold text-velmora-espresso">You may also like</h2>
          </div>
          <Link to="/shop" className="text-sm font-bold uppercase tracking-[0.22em] text-velmora-burnished transition hover:text-velmora-espresso">Shop all</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>
    </main>
  )
}
