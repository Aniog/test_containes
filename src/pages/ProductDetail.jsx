import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus } from 'lucide-react'
import { formatPrice, getProductBySlug, products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import ProductImage from '@/components/product/ProductImage'
import Stars from '@/components/product/Stars'
import { useStrkImages } from '@/lib/useStrkImages'

const galleryViews = ['primary', 'secondary', 'primary', 'secondary']
const accordionContent = [
  { title: 'Description', key: 'details' },
  { title: 'Materials & Care', key: 'care' },
  { title: 'Shipping & Returns', key: 'shipping' },
]

export default function ProductDetail({ onAddToCart }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedImage, setSelectedImage] = useState(0)
  const [tone, setTone] = useState(product.tones[0])
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')
  const containerRef = useStrkImages([slug, selectedImage, tone])

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 4),
    [product.id],
  )

  return (
    <main ref={containerRef} className="min-h-screen bg-velmora-porcelain pt-28 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-8 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-28">
        <div className="grid gap-4 lg:grid-cols-[5.5rem_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:block lg:space-y-3 lg:overflow-visible">
            {galleryViews.map((view, index) => (
              <button
                key={`${view}-${index}`}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`aspect-square min-w-20 overflow-hidden rounded-[1rem] border bg-velmora-pearl transition ${
                  selectedImage === index ? 'border-velmora-champagne shadow-velmora-soft' : 'border-velmora-linen opacity-80 hover:opacity-100'
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <ProductImage
                  product={product}
                  imageId={`thumb-${product.id}-${index}`}
                  ratio="1x1"
                  width="220"
                  variant={view}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden rounded-[2.25rem] bg-velmora-pearl shadow-velmora-card lg:order-2">
            <ProductImage
              product={product}
              imageId={`detail-${product.id}-${selectedImage}`}
              ratio="3x4"
              width="1100"
              variant={galleryViews[selectedImage]}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-[2.25rem] border border-velmora-linen bg-velmora-pearl p-6 text-velmora-espresso shadow-velmora-soft sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">{product.category}</p>
            <h1 className="mt-4 font-serif text-4xl uppercase leading-tight tracking-[0.18em] text-velmora-espresso sm:text-5xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-velmora-linen pb-6">
              <p className="font-serif text-4xl text-velmora-espresso">{formatPrice(product.price)}</p>
              <Stars rating={product.rating} reviews={product.reviews} />
            </div>
            <p className="mt-6 text-base leading-8 text-velmora-cocoa">{product.shortDescription}</p>

            <div className="mt-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-cocoa">Tone</p>
              <div className="flex gap-2">
                {product.tones.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTone(option)}
                    className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] transition ${
                      tone === option
                        ? 'border-velmora-espresso bg-velmora-espresso text-velmora-pearl'
                        : 'border-velmora-linen bg-transparent text-velmora-espresso hover:border-velmora-champagne'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-[8.5rem_1fr]">
              <div className="flex items-center justify-between rounded-full border border-velmora-linen bg-velmora-porcelain px-2 text-velmora-espresso">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="rounded-full p-3 hover:bg-velmora-pearl" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="font-semibold">{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} className="rounded-full p-3 hover:bg-velmora-pearl" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => onAddToCart(product, tone, quantity)}
                className="rounded-full bg-velmora-champagne px-7 py-4 text-xs font-black uppercase tracking-[0.24em] text-velmora-espresso shadow-velmora-glow transition hover:bg-velmora-espresso hover:text-velmora-pearl"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-8 divide-y divide-velmora-linen border-y border-velmora-linen">
              {accordionContent.map((item) => {
                const open = openAccordion === item.title
                return (
                  <div key={item.title}>
                    <button
                      type="button"
                      onClick={() => setOpenAccordion(open ? '' : item.title)}
                      className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-[0.2em] text-velmora-espresso"
                    >
                      {item.title}
                      <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
                    </button>
                    {open && <p className="pb-5 text-sm leading-7 text-velmora-cocoa">{product[item.key]}</p>}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between border-b border-velmora-linen pb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Complete the ritual</p>
            <h2 className="mt-3 font-serif text-5xl text-velmora-espresso">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-black uppercase tracking-[0.24em] text-velmora-cocoa transition hover:text-velmora-bronze sm:block">
            View all
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>
    </main>
  )
}
