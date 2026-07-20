import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '@/components/common/ProductCard.jsx'
import StrkImage from '@/components/common/StrkImage.jsx'
import { products } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const accordions = [
  {
    title: 'Description',
    content:
      'Designed for luminous everyday wear with refined proportions, soft shine, and an elevated finish that moves easily from morning coffee to evening plans.',
  },
  {
    title: 'Materials & Care',
    content:
      'Demi-fine gold-tone finish with skin-friendly materials. Keep dry, avoid direct fragrance, and store separately in the Velmora pouch between wears.',
  },
  {
    title: 'Shipping & Returns',
    content:
      'Free worldwide shipping is included. If the piece is not quite right, return it within 30 days in original condition for a simple refund.',
  },
]

export default function ProductPage({ onAddToCart }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('primary')
  const [openAccordion, setOpenAccordion] = useState('Description')
  const containerRef = useRef(null)
  useStrkImages(containerRef, [product.id, activeImage])

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 4),
    [product.id],
  )

  const titleId = `${product.titleId}-detail`
  const descId = `${product.descId}-detail`
  const galleryLabelId = `${product.id}-gallery-label`

  const addSelection = () => {
    onAddToCart(product, quantity, variant)
  }

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-ink">
      <section className="px-5 py-10 md:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="grid gap-4 md:grid-cols-[5rem_1fr]">
            <div className="order-2 flex gap-3 md:order-1 md:flex-col">
              {['primary', 'styled', 'detail'].map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className={`aspect-square flex-1 overflow-hidden border bg-velmora-sand transition md:flex-none ${
                    activeImage === image ? 'border-velmora-gold' : 'border-velmora-mist'
                  }`}
                  aria-label={`View ${image} image`}
                >
                  <StrkImage
                    id={`${product.imgId}-${image}-thumb`}
                    query={`[${descId}] [${titleId}] [${galleryLabelId}]`}
                    ratio="1x1"
                    width="220"
                    alt={`${product.name} ${image}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-sand shadow-soft md:order-2">
              <StrkImage
                id={`${product.imgId}-${activeImage}-detail-main`}
                query={`[${descId}] [${titleId}] [${galleryLabelId}]`}
                ratio="3x4"
                width="1100"
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="text-xs font-semibold uppercase tracking-widestLuxury text-velmora-gold">
              {product.category}
            </p>
            <h1 id={titleId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-tight tracking-widest text-velmora-ink md:text-6xl">
              {product.name}
            </h1>
            <p className="mt-5 font-serif text-3xl text-velmora-ink">${product.price}</p>
            <div className="mt-5 flex items-center gap-3 text-velmora-ink">
              <div className="flex text-velmora-gold" aria-label={`${product.rating} star rating`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-velmora-taupe">
                {product.rating.toFixed(1)} · {product.reviewCount} reviews
              </span>
            </div>
            <p id={descId} className="mt-7 text-base leading-8 text-velmora-taupe md:text-lg">
              {product.description}
            </p>
            <p id={galleryLabelId} className="sr-only">
              Velmora product gallery warm gold jewelry editorial close up
            </p>

            <div className="mt-8 border-y border-velmora-mist py-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widestLuxury text-velmora-gold">
                Tone
              </p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setVariant(tone)}
                    className={`rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-widest transition ${
                      variant === tone
                        ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory'
                        : 'border-velmora-mist bg-velmora-pearl text-velmora-ink hover:border-velmora-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <div className="inline-flex h-14 items-center border border-velmora-mist bg-velmora-pearl text-velmora-ink">
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  className="h-full px-4 transition hover:bg-velmora-sand"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-12 text-center font-semibold">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((value) => value + 1)}
                  className="h-full px-4 transition hover:bg-velmora-sand"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={addSelection}
                className="min-h-14 flex-1 bg-velmora-ink px-8 text-sm font-bold uppercase tracking-widest text-velmora-ivory transition hover:bg-velmora-cocoa"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-8 divide-y divide-velmora-mist border-y border-velmora-mist">
              {accordions.map((item) => (
                <div key={item.title}>
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(openAccordion === item.title ? '' : item.title)}
                    className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold uppercase tracking-widest text-velmora-ink"
                  >
                    {item.title}
                    <ChevronDown
                      className={`h-4 w-4 transition ${openAccordion === item.title ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openAccordion === item.title && (
                    <p className="pb-5 text-sm leading-7 text-velmora-taupe">
                      {item.title === 'Materials & Care' ? product.care : item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-mist bg-velmora-pearl px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widestLuxury text-velmora-gold">
                You may also like
              </p>
              <h2 id="related-products-title" className="mt-3 font-serif text-4xl text-velmora-ink md:text-5xl">
                Finish the stack
              </h2>
            </div>
            <Link to="/shop" className="hidden text-sm font-semibold uppercase tracking-widest text-velmora-ink underline decoration-velmora-gold underline-offset-8 transition hover:text-velmora-gold md:block">
              Shop all
            </Link>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onAddToCart={onAddToCart}
                compact
                imageContext={`related-${product.id}`}
                contextTitleId="related-products-title"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
