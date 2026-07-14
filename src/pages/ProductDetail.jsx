import { Minus, Plus } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Accordion from '@/components/common/Accordion.jsx'
import EditorialImage from '@/components/common/EditorialImage.jsx'
import LuxuryButton from '@/components/common/LuxuryButton.jsx'
import ProductCard from '@/components/common/ProductCard.jsx'
import Rating from '@/components/common/Rating.jsx'
import { useCart } from '@/components/common/CartContext.jsx'
import { formatPrice, getProductById, getRelatedProducts, products } from '@/data/products.js'
import { useImageLoader } from '@/hooks/useImageLoader.js'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id) || products[0]
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const { addToCart } = useCart()
  const containerRef = useImageLoader([product.id, activeImage])
  const related = useMemo(() => getRelatedProducts(product), [product])
  const titleId = `detail-${product.id}-title`
  const descId = `detail-${product.id}-desc`
  const gallery = [
    { label: 'On model', ratio: '3x4' },
    { label: 'Detail', ratio: '1x1' },
    { label: 'Styled', ratio: '4x3' },
  ]

  return (
    <main ref={containerRef} className="bg-velmora-cream px-4 pb-20 pt-28 text-velmora-ink sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl py-8">
        <Link to="/shop" className="text-xs font-bold uppercase tracking-luxury text-velmora-antique hover:text-velmora-ink">
          ← Back to shop
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="grid gap-4 md:grid-cols-[88px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
              {gallery.map((image, index) => (
                <button
                  key={image.label}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square min-w-20 overflow-hidden border bg-velmora-parchment transition-colors ${
                    activeImage === index ? 'border-velmora-antique' : 'border-velmora-champagne/25'
                  }`}
                  aria-label={`View ${image.label} image`}
                >
                  <EditorialImage
                    id={`detail-thumb-${product.id}-${index}-f5`}
                    query={`[${descId}] [${titleId}]`}
                    ratio="1x1"
                    width="200"
                    alt={`${product.name} ${image.label}`}
                  />
                </button>
              ))}
            </div>
            <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-parchment shadow-soft md:order-2">
              <EditorialImage
                id={`detail-main-${product.id}-${activeImage}-g6`}
                query={`[${descId}] [${titleId}]`}
                ratio={gallery[activeImage].ratio}
                width="1100"
                alt={product.name}
                className="hover:scale-105"
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-antique">{product.category}</p>
            <h1 id={titleId} className="mt-3 font-serif text-5xl font-semibold uppercase leading-tight tracking-product text-velmora-ink sm:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-velmora-champagne/30 pb-5">
              <p className="text-2xl font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
              <Rating rating={product.rating} reviews={product.reviews} />
            </div>
            <p id={descId} className="mt-6 text-base leading-8 text-velmora-stone">
              {product.description} {product.detail}
            </p>

            <div className="mt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-stone">Tone</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setVariant(tone)}
                    className={`rounded-full border px-5 py-2 text-sm font-bold uppercase tracking-luxury transition-colors ${
                      variant === tone
                        ? 'border-velmora-ink bg-velmora-ink text-velmora-cream'
                        : 'border-velmora-champagne/40 bg-velmora-cream text-velmora-ink hover:border-velmora-antique'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-stone">Quantity</p>
              <div className="inline-flex items-center border border-velmora-champagne/40 bg-velmora-cream text-velmora-ink">
                <button
                  type="button"
                  className="p-3 hover:bg-velmora-parchment"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-12 px-4 text-center font-semibold">{quantity}</span>
                <button
                  type="button"
                  className="p-3 hover:bg-velmora-parchment"
                  onClick={() => setQuantity((current) => current + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <LuxuryButton
              type="button"
              className="mt-8 w-full"
              onClick={() => addToCart(product, quantity, variant)}
            >
              Add to Cart · {formatPrice(product.price * quantity)}
            </LuxuryButton>

            <div className="mt-8">
              <Accordion
                items={[
                  { title: 'Description', content: product.detail },
                  { title: 'Materials & Care', content: `${product.material}. ${product.care}` },
                  {
                    title: 'Shipping & Returns',
                    content: 'Free worldwide shipping on every order. If it is not the perfect fit, return unworn pieces within 30 days in original packaging.',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-velmora-champagne/30 py-16">
        <div className="mb-9 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-antique">Complete the ritual</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold">You may also like</h2>
          </div>
          <LuxuryButton to="/shop" variant="outline" className="hidden text-velmora-ink sm:inline-flex">
            Shop All
          </LuxuryButton>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} priority="-related" />
          ))}
        </div>
      </section>
    </main>
  )
}
