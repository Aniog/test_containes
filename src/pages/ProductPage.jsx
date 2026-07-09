import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { products, formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductVisual from '@/components/product/ProductVisual'
import RelatedProducts from '@/components/product/RelatedProducts'

const accordions = [
  {
    title: 'Description',
    key: 'description',
  },
  {
    title: 'Materials & Care',
    key: 'care',
  },
  {
    title: 'Shipping & Returns',
    key: 'shipping',
    content:
      'Free worldwide shipping on every Velmora order. Returns are accepted within 30 days when pieces are unworn and returned with original packaging.',
  },
]

export default function ProductPage() {
  const { slug } = useParams()
  const product = products.find((entry) => entry.slug === slug)
  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('product')
  const [openAccordion, setOpenAccordion] = useState('description')
  const { addToCart } = useCart()

  const gallery = useMemo(
    () => [
      { id: 'product', label: 'Studio', mode: 'product' },
      { id: 'worn', label: 'Worn', mode: 'worn' },
      { id: 'detail', label: 'Detail', mode: 'detail' },
    ],
    [],
  )

  if (!product) return <Navigate to="/shop" replace />

  const activeGalleryItem = gallery.find((item) => item.id === activeImage) || gallery[0]

  return (
    <main className="bg-velmora-ivory pt-24 text-velmora-espresso sm:pt-28">
      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="grid gap-4 lg:grid-cols-[104px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
              {gallery.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveImage(item.id)}
                  className={`group relative aspect-square w-24 shrink-0 overflow-hidden border bg-velmora-stone transition ${
                    activeImage === item.id ? 'border-velmora-gold' : 'border-velmora-stone hover:border-velmora-gold'
                  }`}
                  aria-label={`View ${item.label} image`}
                >
                  <ProductVisual
                    product={product}
                    imageId={`thumb-${product.id}-${item.id}`}
                    ratio="1x1"
                    width="220"
                    className="absolute inset-0"
                    mode={item.mode}
                  />
                </button>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <ProductVisual
                product={product}
                imageId={`pdp-main-${product.id}-${activeGalleryItem.id}`}
                ratio="3x4"
                width="1100"
                className="aspect-[3/4] bg-velmora-stone shadow-soft image-gold-glow"
                mode={activeGalleryItem.mode}
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:h-fit">
            <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-goldDark hover:text-velmora-espresso">
              Back to collection
            </Link>
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.32em] text-velmora-goldDark">
              {product.category} · {product.material}
            </p>
            <h1 className="mt-3 font-serif text-5xl font-semibold uppercase leading-none tracking-[0.14em] text-velmora-espresso md:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="text-2xl font-semibold text-velmora-espresso">
                {formatPrice(product.price)}
              </p>
              <div className="flex items-center gap-2 text-sm text-velmora-ink">
                <span className="flex text-velmora-gold" aria-label={`${product.rating} star rating`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </span>
                {product.rating.toFixed(1)} ({product.reviewCount} reviews)
              </div>
            </div>
            <p className="mt-6 max-w-xl text-base leading-8 text-velmora-ink">
              {product.description}
            </p>

            <div className="mt-8 border-y border-velmora-stone py-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-velmora-espresso">
                  Tone
                </p>
                <div className="mt-3 flex gap-3">
                  {['Gold', 'Silver'].map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                        selectedTone === tone
                          ? 'border-velmora-gold bg-velmora-gold text-velmora-cream'
                          : 'border-velmora-stone bg-velmora-cream text-velmora-espresso hover:border-velmora-gold'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-velmora-espresso">
                  Quantity
                </p>
                <div className="mt-3 inline-flex items-center border border-velmora-stone bg-velmora-cream">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="p-3 text-velmora-espresso hover:text-velmora-goldDark"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-12 text-center font-semibold">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="p-3 text-velmora-espresso hover:text-velmora-goldDark"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => addToCart(product, quantity, selectedTone)}
              className="mt-6 w-full bg-velmora-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.32em] text-velmora-cream shadow-card transition hover:bg-velmora-goldDark"
            >
              Add to Cart
            </button>

            <div className="mt-8 divide-y divide-velmora-stone border-y border-velmora-stone">
              {accordions.map((accordion) => {
                const isOpen = openAccordion === accordion.key
                const content = accordion.content || (accordion.key === 'description' ? product.details : product.care)
                return (
                  <div key={accordion.key}>
                    <button
                      type="button"
                      onClick={() => setOpenAccordion(isOpen ? '' : accordion.key)}
                      className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-[0.22em] text-velmora-espresso"
                    >
                      {accordion.title}
                      <ChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <p className="pb-5 text-sm leading-7 text-velmora-ink">
                        {content}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <RelatedProducts currentId={product.id} />
    </main>
  )
}
