import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Minus, Plus, Star } from 'lucide-react'
import AccordionItem from '@/components/AccordionItem'
import ProductCard from '@/components/ProductCard'
import { getVelmoraImage } from '@/data/imageAssets'
import { products } from '@/data/products'

const galleryMoments = [
  'editorial product close up on warm stone',
  'jewelry worn on model in soft golden light',
  'gift ready jewelry styling with velvet pouch',
  'macro detail of demi fine gold finish',
]

export default function ProductDetail({ onAddToCart }) {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  const [selectedImage, setSelectedImage] = useState(0)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return products.filter((item) => item.id !== product.id).slice(0, 4)
  }, [product])

  if (!product) return <Navigate to="/shop" replace />

  const nameId = `detail-${product.id}-name`
  const descId = `detail-${product.id}-desc`
  const momentId = `detail-${product.id}-moment-${selectedImage}`

  return (
    <main className="bg-velmora-ivory pt-24 text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 md:grid-cols-[1.08fr_0.92fr] md:py-16">
        <div className="grid gap-4 md:grid-cols-[5.5rem_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
            {galleryMoments.map((moment, index) => {
              const thumbId = `detail-${product.id}-thumb-moment-${index}`
              return (
                <button
                  key={moment}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square min-w-20 overflow-hidden rounded-2xl border bg-velmora-parchment transition-all duration-300 ${
                    selectedImage === index ? 'border-velmora-champagne ring-2 ring-velmora-champagne/25' : 'border-velmora-sand/70 hover:border-velmora-champagne'
                  }`}
                  aria-label={`Show ${product.name} image ${index + 1}`}
                >
                  <span id={thumbId} className="sr-only">{moment}</span>
                  <img
                    src={getVelmoraImage(`detail-${product.id}-thumb-${index}-velmora`)}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              )
            })}
          </div>

          <div className="order-1 overflow-hidden rounded-[2rem] bg-velmora-parchment shadow-[0_30px_90px_rgba(42,31,26,0.12)] md:order-2">
            <span id={momentId} className="sr-only">{galleryMoments[selectedImage]}</span>
            <img
              src={getVelmoraImage(`detail-${product.id}-thumb-${selectedImage}-velmora`)}
              alt={`${product.name} gallery view`}
              className="aspect-[3/4] h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="md:sticky md:top-28 md:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">{product.category}</p>
          <h1 id={nameId} className="mt-4 font-serif text-5xl uppercase leading-none tracking-[0.18em] text-velmora-ink md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="text-2xl font-semibold text-velmora-ink">${product.price}</p>
            <div className="flex items-center gap-1 text-velmora-champagne" aria-label={`${product.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-sm font-semibold text-velmora-espresso/70">{product.rating} ({product.reviewCount})</span>
            </div>
          </div>
          <p id={descId} className="mt-6 text-base leading-8 text-velmora-espresso/75">
            {product.description}
          </p>

          <div className="mt-8 space-y-7 border-y border-velmora-sand/60 py-7">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze">Tone</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTone(option)}
                    className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                      tone === option
                        ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory'
                        : 'border-velmora-sand bg-transparent text-velmora-ink hover:border-velmora-champagne hover:text-velmora-bronze'
                    }`}
                  >
                    {option} Tone
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze">Quantity</p>
              <div className="inline-flex items-center rounded-full border border-velmora-sand bg-white/55 text-velmora-ink">
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-transparent text-velmora-ink hover:text-velmora-bronze"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center text-sm font-semibold">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((value) => value + 1)}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-transparent text-velmora-ink hover:text-velmora-bronze"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onAddToCart(product, quantity)}
              className="w-full rounded-full bg-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-ink shadow-[0_18px_55px_rgba(185,145,91,0.2)] transition-all duration-300 hover:bg-velmora-ink hover:text-velmora-ivory"
            >
              Add to Cart
            </button>
          </div>

          <div>
            <AccordionItem title="Description" defaultOpen>
              <p>{product.longDescription}</p>
              <p className="mt-3 font-semibold text-velmora-bronze">{product.giftNote}</p>
            </AccordionItem>
            <AccordionItem title="Materials & Care">
              <p>{product.material} over a durable demi-fine base. Hypoallergenic and nickel-safe for sensitive skin.</p>
              <p className="mt-3">{product.care}</p>
            </AccordionItem>
            <AccordionItem title="Shipping & Returns">
              <p>Free worldwide shipping on orders over $75. Enjoy easy 30-day returns on unworn pieces in original packaging.</p>
            </AccordionItem>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 md:pb-24">
        <div className="mb-9 flex items-end justify-between gap-5 border-t border-velmora-sand/60 pt-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Complete the ritual</p>
            <h2 id="related-title" className="mt-3 font-serif text-5xl leading-none text-velmora-ink">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-[0.22em] text-velmora-bronze transition-colors hover:text-velmora-ink sm:block">
            View all
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard
              key={relatedProduct.id}
              product={relatedProduct}
              onAddToCart={onAddToCart}
              sectionId="related-title"
              imageContext="related-card"
            />
          ))}
        </div>
      </section>
    </main>
  )
}
