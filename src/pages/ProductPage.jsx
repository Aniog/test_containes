import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import JewelryVisual from '@/components/product/JewelryVisual'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { formatPrice } from '@/lib/format'

const variants = ['Gold', 'Silver']
const accordionItems = [
  { title: 'Description', key: 'details' },
  { title: 'Materials & Care', key: 'care' },
  { title: 'Shipping & Returns', key: 'shipping' },
]

export default function ProductPage({ onAddToCart }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const related = useMemo(() => getRelatedProducts(product.id), [product.id])
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')

  const gallery = [
    { id: `${product.id}-main`, label: product.name, variant: 'primary' },
    { id: `${product.id}-worn`, label: `${product.name} worn`, variant: 'worn' },
    { id: `${product.id}-detail-one`, label: `${product.name} detail 1`, variant: 'primary' },
    { id: `${product.id}-detail-two`, label: `${product.name} detail 2`, variant: 'worn' },
  ]

  const titleId = `detail-${product.id}-title`
  const descId = `detail-${product.id}-desc`

  return (
    <main className="bg-velmora-cream pt-24 text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[6rem_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`min-w-20 overflow-hidden rounded-2xl border bg-velmora-stone transition ${selectedImage === index ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-champagne'}`}
                aria-label={`Show ${image.label}`}
              >
                <JewelryVisual
                  product={product}
                  label={image.label}
                  variant={image.variant}
                  className="aspect-square w-full"
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden rounded-[2rem] bg-velmora-stone shadow-[0_28px_80px_rgba(48,35,26,0.10)] lg:order-2">
            <JewelryVisual
              product={product}
              label={gallery[selectedImage].label}
              variant={gallery[selectedImage].variant}
              className="aspect-[4/5] w-full"
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:h-fit">
          <nav className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-muted" aria-label="Breadcrumb">
            <Link to="/shop" className="transition hover:text-velmora-gold">Shop</Link>
            <span className="mx-2">/</span>
            <span>{product.category}</span>
          </nav>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">{product.category}</p>
          <h1 id={titleId} className="mt-3 font-serif text-5xl uppercase leading-none tracking-[0.14em] text-velmora-ink md:text-6xl">
            {product.name}
          </h1>
          <p className="mt-5 text-2xl font-semibold tracking-[0.08em] text-velmora-ink">{formatPrice(product.price)}</p>
          <div className="mt-4 flex items-center gap-3 text-sm text-velmora-muted">
            <span className="flex gap-1 text-velmora-gold" aria-label={`${product.rating} stars`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </span>
            <span>{product.rating.toFixed(1)} · {product.reviews} reviews</span>
          </div>
          <p id={descId} className="mt-6 text-base leading-8 text-velmora-muted">{product.description}</p>

          <div className="mt-8 border-y border-velmora-stone py-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink">Tone</p>
            <div className="flex gap-3">
              {variants.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setVariant(item)}
                  className={`rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] transition ${variant === item ? 'border-velmora-ink bg-velmora-ink text-velmora-cream' : 'border-velmora-stone bg-white/35 text-velmora-ink hover:border-velmora-champagne'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <div className="inline-flex items-center rounded-full border border-velmora-stone bg-white/45 text-velmora-ink">
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-4 text-velmora-ink transition hover:text-velmora-gold" aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center text-sm font-bold">{quantity}</span>
              <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-4 text-velmora-ink transition hover:text-velmora-gold" aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button type="button" onClick={() => onAddToCart(product, variant, quantity)} className="flex-1 rounded-full bg-velmora-champagne px-7 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink shadow-[0_18px_45px_rgba(199,164,107,0.22)] transition hover:bg-velmora-ink hover:text-velmora-cream">
              Add to Cart
            </button>
          </div>

          <div className="mt-8 divide-y divide-velmora-stone border-y border-velmora-stone">
            {accordionItems.map((item) => {
              const isOpen = openAccordion === item.title
              return (
                <div key={item.title}>
                  <button type="button" onClick={() => setOpenAccordion(isOpen ? '' : item.title)} className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink">
                    {item.title}
                    <span className="text-lg text-velmora-gold">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && <p className="pb-5 text-sm leading-7 text-velmora-muted">{product[item.key]}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-velmora-stone px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mb-9 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Complete the stack</p>
            <h2 className="mt-3 font-serif text-5xl leading-none tracking-[-0.03em] text-velmora-ink">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:text-velmora-gold sm:block">Shop all</Link>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} onAdd={onAddToCart} context="related" />
          ))}
        </div>
      </section>
    </main>
  )
}
