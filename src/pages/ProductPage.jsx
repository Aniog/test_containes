import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProductGrid from '@/components/product/ProductGrid'
import ProductAccordion from '@/components/product/ProductAccordion'
import QuantitySelector from '@/components/product/QuantitySelector'
import RatingStars from '@/components/product/RatingStars'
import { formatPrice, getProductBySlug, getRelatedProducts, imagePlaceholder } from '@/data/storefront'
import { useCart } from '@/hooks/useCart'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const containerRef = useRef(null)
  const [selectedTone, setSelectedTone] = useState(product?.tones[0] || '')
  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const { addItem } = useCart()

  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])

  useEffect(() => {
    if (!product) {
      return
    }

    setSelectedTone(product.tones[0])
    setQuantity(1)
    setSelectedImageIndex(0)
  }, [product])

  useStrkImages(containerRef, [slug, selectedImageIndex])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <main ref={containerRef} className="velmora-shell space-y-12 py-10 md:space-y-16 md:py-14">
      <div className="text-xs uppercase tracking-[0.3em] text-velmora-cocoa/60">
        <Link to="/shop" className="transition hover:text-velmora-bronze">
          Shop
        </Link>
        <span className="px-2">/</span>
        <span>{product.category}</span>
      </div>

      <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[2rem] border border-velmora-sand/60 bg-velmora-cream shadow-velmora">
            <span id={`pdp-${product.slug}-selected-scene`} className="sr-only">
              {product.images[selectedImageIndex].scene}
            </span>
            <img
              alt={product.images[selectedImageIndex].alt}
              className="aspect-[4/5] h-full w-full object-cover"
              data-strk-img-id={`pdp-${product.slug}-selected`}
              data-strk-img={`[pdp-${product.slug}-selected-scene] [pdp-${product.slug}-title] [pdp-${product.slug}-desc]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src={imagePlaceholder}
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {product.images.map((image, index) => {
              const sceneId = `pdp-${product.slug}-thumb-${index}-scene`

              return (
                <button
                  key={sceneId}
                  type="button"
                  className={`overflow-hidden rounded-[1.2rem] border transition ${
                    selectedImageIndex === index
                      ? 'border-velmora-bronze shadow-velmora'
                      : 'border-velmora-sand/60'
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <span id={sceneId} className="sr-only">
                    {image.scene}
                  </span>
                  <img
                    alt={image.alt}
                    className="aspect-square h-full w-full object-cover"
                    data-strk-img-id={`pdp-${product.slug}-thumb-${index}`}
                    data-strk-img={`[${sceneId}] [pdp-${product.slug}-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src={imagePlaceholder}
                  />
                </button>
              )
            })}
          </div>
        </div>

        <div className="space-y-6 rounded-[2rem] border border-velmora-sand/60 bg-velmora-cream p-6 shadow-velmora md:p-8 lg:sticky lg:top-24">
          <div className="space-y-4">
            <p className="velmora-kicker">{product.collection}</p>
            <h1 id={`pdp-${product.slug}-title`} className="font-display text-5xl uppercase tracking-[0.2em] text-velmora-ink md:text-6xl">
              {product.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-xl font-medium text-velmora-ink">{formatPrice(product.price)}</p>
              <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
            </div>
            <p id={`pdp-${product.slug}-desc`} className="text-base leading-8 text-velmora-cocoa/80">
              {product.shortDescription}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-velmora-cocoa/60">Tone</p>
              <div className="flex flex-wrap gap-3">
                {product.tones.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    className={`rounded-full border px-4 py-3 text-xs uppercase tracking-[0.24em] transition ${
                      selectedTone === tone
                        ? 'border-velmora-bronze bg-velmora-bronze/10 text-velmora-ink'
                        : 'border-velmora-sand text-velmora-cocoa hover:border-velmora-bronze'
                    }`}
                    onClick={() => setSelectedTone(tone)}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-velmora-cocoa/60">Quantity</p>
              <QuantitySelector quantity={quantity} onChange={setQuantity} />
            </div>
          </div>

          <button
            type="button"
            className="w-full rounded-full bg-velmora-bronze px-6 py-4 text-xs font-semibold uppercase tracking-[0.32em] text-velmora-ink transition hover:bg-velmora-gold"
            onClick={() => addItem(product, selectedTone, quantity)}
          >
            Add to Cart
          </button>

          <div className="flex flex-wrap gap-2">
            {product.materialTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-velmora-sand bg-white/70 px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-velmora-cocoa/70"
              >
                {tag}
              </span>
            ))}
          </div>

          <ProductAccordion
            items={[
              {
                title: 'Description',
                content: product.description,
              },
              {
                title: 'Materials & Care',
                content: product.materialsCare,
              },
              {
                title: 'Shipping & Returns',
                content: product.shippingReturns,
              },
            ]}
          />
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="velmora-kicker">You may also like</p>
            <h2 className="font-display text-4xl text-velmora-ink md:text-5xl">More pieces with the same warm finish.</h2>
          </div>
        </div>
        <ProductGrid products={relatedProducts} />
      </section>
    </main>
  )
}
