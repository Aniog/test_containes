import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { findProductById, products } from '@/data/products'

const accordionItems = [
  {
    title: 'Description',
    body: 'Velmora pieces are selected for daily comfort, warm shine, and a refined silhouette that layers beautifully with pieces you already love.',
  },
  {
    title: 'Materials & Care',
    body: 'Made with demi-fine gold finishes and skin-conscious materials. Keep jewelry dry, avoid direct fragrance, and store each piece in its pouch.',
  },
  {
    title: 'Shipping & Returns',
    body: 'Enjoy free worldwide shipping and 30-day returns. Gift orders arrive in a Velmora keepsake box ready for the moment.',
  },
]

export default function ProductDetail({ onAddToCart }) {
  const { productId } = useParams()
  const product = findProductById(productId)
  const [selectedImage, setSelectedImage] = useState('main')
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 4),
    [product.id],
  )

  const gallery = [
    {
      id: 'main',
      label: 'Studio',
      image: product.image,
    },
    {
      id: 'worn',
      label: 'Worn',
      image: product.hoverImage,
    },
    {
      id: 'box',
      label: 'Gift Box',
      image: product.image,
    },
  ]
  const activeImage = gallery.find((item) => item.id === selectedImage) ?? gallery[0]

  return (
    <main className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pb-24">
        <div className="grid gap-4 lg:grid-cols-[88px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto no-scrollbar lg:order-1 lg:flex-col">
            {gallery.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedImage(item.id)}
                className={`relative h-24 w-20 shrink-0 overflow-hidden rounded-t-full border bg-velmora-sand text-velmora-espresso transition ${
                  selectedImage === item.id ? 'border-velmora-champagne' : 'border-velmora-sand'
                }`}
                aria-label={`Show ${item.label} image`}
              >
                <img
                  alt={`${product.name} ${item.label}`}
                  src={item.image}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="order-1 overflow-hidden rounded-t-[18rem] bg-velmora-sand shadow-editorial lg:order-2">
            <div className="aspect-[4/5]">
              <img
                alt={product.name}
                src={activeImage.image}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p id="product-detail-heading" className="text-xs font-semibold uppercase tracking-[0.34em] text-velmora-champagne">Velmora signature</p>
          <h1 id={product.titleId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-none tracking-[0.16em] text-velmora-espresso md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center gap-4">
            <p className="font-serif text-4xl text-velmora-espresso">${product.price}</p>
            <div className="flex items-center gap-1 text-velmora-champagne" aria-label={`${product.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-1 text-xs text-velmora-cocoa/70">{product.reviewCount} reviews</span>
            </div>
          </div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-cocoa/78">
            {product.description}
          </p>
          <p id="product-detail-subhead" className="mt-3 text-sm leading-7 text-velmora-cocoa/70">
            {product.details}
          </p>

          <div className="mt-8 border-t border-velmora-sand pt-7">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-cocoa">Tone</p>
            <div className="mt-3 flex gap-3">
              {['Gold', 'Silver'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setTone(option)}
                  className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
                    tone === option
                      ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory'
                      : 'border-velmora-sand bg-velmora-porcelain text-velmora-espresso hover:border-velmora-champagne'
                  }`}
                >
                  {option} tone
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <div className="inline-flex w-fit items-center rounded-full border border-velmora-sand bg-velmora-porcelain text-velmora-espresso">
              <button type="button" className="grid h-12 w-12 place-items-center" onClick={() => setQuantity((current) => Math.max(1, current - 1))} aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-8 text-center text-sm font-semibold">{quantity}</span>
              <button type="button" className="grid h-12 w-12 place-items-center" onClick={() => setQuantity((current) => current + 1)} aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => onAddToCart(product, quantity, tone)}
              className="min-h-12 flex-1 rounded-full bg-velmora-champagne px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition-colors hover:bg-velmora-espresso hover:text-velmora-ivory"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8 divide-y divide-velmora-sand border-y border-velmora-sand">
            {accordionItems.map((item) => (
              <div key={item.title}>
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === item.title ? '' : item.title)}
                  className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-[0.22em] text-velmora-espresso"
                  aria-expanded={openAccordion === item.title}
                >
                  {item.title}
                  <ChevronDown className={`h-4 w-4 transition ${openAccordion === item.title ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === item.title && (
                  <p className="pb-5 text-sm leading-7 text-velmora-cocoa/76">
                    {item.title === 'Description' ? `${product.details} ${item.body}` : item.title === 'Materials & Care' ? `${product.care} ${item.body}` : item.body}
                  </p>
                )}
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="bg-velmora-porcelain py-16 text-velmora-espresso md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-9 flex items-end justify-between gap-5 border-b border-velmora-sand pb-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-velmora-champagne">Complete the ritual</p>
              <h2 className="mt-3 font-serif text-5xl font-medium leading-none text-velmora-espresso">You may also like</h2>
            </div>
            <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-[0.24em] text-velmora-cocoa transition-colors hover:text-velmora-champagne sm:block">View all</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
