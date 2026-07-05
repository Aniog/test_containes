import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Minus, Plus, Star } from 'lucide-react'
import AccordionGroup from '@/components/store/AccordionGroup'
import ProductCard from '@/components/store/ProductCard'
import { useStore } from '@/context/StoreContext'
import { formatPrice, getProductBySlug, products } from '@/data/storeData'
import { useStockImages } from '@/hooks/useStockImages'

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [activeImage, setActiveImage] = useState(0)
  const [selectedTone, setSelectedTone] = useState(product?.tones?.[0] ?? 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useStore()
  const containerRef = useStockImages([slug, activeImage, selectedTone])

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== product?.id).slice(0, 4),
    [product?.id],
  )

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const galleryImages = [
    {
      id: 'front',
      title: `${product.name} hero view`,
      description: `${product.shortDescription} Front editorial crop.`,
    },
    {
      id: 'detail',
      title: `${product.name} detail`,
      description: `${product.shortDescription} Close detail of texture and shine.`,
    },
    {
      id: 'styled',
      title: `${product.name} styled on model`,
      description: `${product.shortDescription} Styled on model in warm light.`,
    },
  ]

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materialsCare },
    { title: 'Shipping & Returns', content: product.shippingReturns },
  ]

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-32 sm:pt-36">
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 text-sm text-velmora-muted">
            <Link to="/shop" className="transition hover:text-velmora-ink">
              Shop
            </Link>{' '}
            / <span className="text-velmora-ink">{product.name}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="grid gap-4 md:grid-cols-[112px_minmax(0,1fr)]">
              <div className="order-2 flex gap-3 md:order-1 md:flex-col">
                {galleryImages.map((image, index) => {
                  const titleId = `gallery-${product.id}-${image.id}-title`
                  const descId = `gallery-${product.id}-${image.id}-desc`

                  return (
                    <button
                      key={image.id}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      className={`overflow-hidden rounded-[1.5rem] border bg-white/80 transition ${
                        activeImage === index
                          ? 'border-velmora-gold shadow-soft'
                          : 'border-velmora-mist/70'
                      }`}
                    >
                      <img
                        data-strk-img-id={`velmora-gallery-${product.id}-${image.id}`}
                        data-strk-img={`[${descId}] [${titleId}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="300"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={image.title}
                        className="aspect-square w-full object-cover"
                      />
                      <span id={titleId} className="sr-only">
                        {image.title}
                      </span>
                      <span id={descId} className="sr-only">
                        {image.description}
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="order-1 overflow-hidden rounded-[2.5rem] bg-white/80 shadow-velmora md:order-2">
                {galleryImages.map((image, index) => {
                  const titleId = `gallery-main-${product.id}-${image.id}-title`
                  const descId = `gallery-main-${product.id}-${image.id}-desc`

                  return (
                    <img
                      key={image.id}
                      data-strk-img-id={`velmora-gallery-main-${product.id}-${image.id}`}
                      data-strk-img={`[${descId}] [${titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="1200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={image.title}
                      className={`${
                        activeImage === index ? 'block' : 'hidden'
                      } aspect-[4/5] w-full object-cover`}
                    />
                  )
                })}
                {galleryImages.map((image) => (
                  <div key={`text-${image.id}`} className="sr-only">
                    <span id={`gallery-main-${product.id}-${image.id}-title`}>
                      {image.title}
                    </span>
                    <span id={`gallery-main-${product.id}-${image.id}-desc`}>
                      {image.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-velmora-mist/70 bg-white/80 p-7 text-velmora-ink shadow-soft sm:p-8 lg:sticky lg:top-28">
              <p className="text-xs uppercase tracking-velmora text-velmora-muted">
                {product.category}
              </p>
              <h1 className="mt-4 font-display text-4xl uppercase tracking-velmora text-velmora-ink sm:text-5xl">
                {product.name}
              </h1>
              <div className="mt-5 flex items-center gap-4">
                <p className="text-xl font-semibold text-velmora-ink">
                  {formatPrice(product.price)}
                </p>
                <div className="flex items-center gap-2 text-sm text-velmora-muted">
                  <Star className="h-4 w-4 fill-velmora-gold text-velmora-gold" />
                  <span>{product.rating}</span>
                  <span>({product.reviews} reviews)</span>
                </div>
              </div>
              <p className="mt-6 text-base leading-8 text-velmora-muted">
                {product.shortDescription}
              </p>

              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-velmora-ink">
                  Tone
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {product.tones.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={`rounded-full border px-5 py-3 text-sm font-medium transition ${
                        selectedTone === tone
                          ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                          : 'border-velmora-mist bg-velmora-ivory text-velmora-muted'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-velmora-ink">
                  Quantity
                </p>
                <div className="mt-4 inline-flex items-center rounded-full border border-velmora-mist bg-velmora-ivory px-2 py-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-velmora-ink"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-[2.5rem] text-center text-sm font-semibold text-velmora-ink">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-velmora-ink"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => addToCart(product, quantity, selectedTone)}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-velmora-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-velmora-ink transition hover:-translate-y-0.5 hover:shadow-velmora"
              >
                Add to Cart
              </button>

              <div className="mt-8">
                <AccordionGroup items={accordionItems} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-mist/70 bg-velmora-panel/35 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-velmora text-velmora-muted">
                You may also like
              </p>
              <h2 className="mt-3 font-display text-3xl text-velmora-ink sm:text-4xl">
                Continue your Velmora edit
              </h2>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
