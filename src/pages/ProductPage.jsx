import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import AccordionItem from '@/components/common/AccordionItem'
import QuantitySelector from '@/components/common/QuantitySelector'
import RatingStars from '@/components/common/RatingStars'
import ProductCard from '@/components/products/ProductCard'
import { products } from '@/data/products'
import { useStore } from '@/context/StoreContext'
import { useStockImages } from '@/hooks/use-stock-images'

const ProductPage = () => {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)
  const [selectedTone, setSelectedTone] = useState(product?.tones?.[0] ?? 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('primary')
  const { addToCart } = useStore()
  const containerRef = useStockImages([productId, activeImage, selectedTone])

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== productId).slice(0, 3),
    [productId],
  )

  useEffect(() => {
    if (!product) {
      return
    }

    setSelectedTone(product.tones[0] ?? 'Gold')
    setQuantity(1)
    setActiveImage('primary')
  }, [product])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const gallery = [
    {
      key: 'primary',
      id: product.imgIds.primary,
      title: `${product.id}-gallery-primary-title`,
      desc: `${product.id}-gallery-primary-desc`,
      label: 'Front view',
      queryTitle: `${product.name} front view`,
      queryDesc: product.shortDescription,
    },
    {
      key: 'secondary',
      id: product.imgIds.secondary,
      title: `${product.id}-gallery-secondary-title`,
      desc: `${product.id}-gallery-secondary-desc`,
      label: 'Styled view',
      queryTitle: `${product.name} styled view`,
      queryDesc: product.description,
    },
    {
      key: 'detail',
      id: product.imgIds.detail,
      title: `${product.id}-gallery-detail-title`,
      desc: `${product.id}-gallery-detail-desc`,
      label: 'Detail view',
      queryTitle: `${product.name} detail view`,
      queryDesc: product.materials,
    },
    {
      key: 'model',
      id: product.imgIds.model,
      title: `${product.id}-gallery-model-title`,
      desc: `${product.id}-gallery-model-desc`,
      label: 'On model',
      queryTitle: `${product.name} on model`,
      queryDesc: product.shortDescription,
    },
  ]

  const activeGalleryImage = gallery.find((image) => image.key === activeImage) ?? gallery[0]

  return (
    <div ref={containerRef} className="bg-velmora-cream text-velmora-ink">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-velmora-muted">
          <Link to="/" className="hover:text-velmora-ink">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-ink">Shop</Link>
          <span>/</span>
          <span className="text-velmora-ink">{product.name}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5">
            <div className="overflow-hidden rounded-[2.5rem] border border-velmora-line bg-velmora-soft shadow-luxury">
              <img
                alt={product.name}
                className="aspect-[4/5] h-full w-full object-cover"
                data-strk-img-id={activeGalleryImage.id}
                data-strk-img={`[${activeGalleryImage.desc}] [${activeGalleryImage.title}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {gallery.map((image) => (
                <button
                  key={image.key}
                  type="button"
                  onClick={() => setActiveImage(image.key)}
                  className={`overflow-hidden rounded-[1.5rem] border bg-velmora-soft transition ${
                    activeImage === image.key
                      ? 'border-velmora-gold shadow-card'
                      : 'border-velmora-line hover:border-velmora-gold'
                  }`}
                >
                  <img
                    alt={image.label}
                    className="aspect-square h-full w-full object-cover"
                    data-strk-img-id={`${image.id}-thumb`}
                    data-strk-img={`[${image.desc}] [${image.title}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </button>
              ))}
            </div>
            {gallery.map((image) => (
              <div key={`${image.key}-meta`} className="hidden">
                <p id={image.title}>{image.queryTitle}</p>
                <p id={image.desc}>{image.queryDesc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[2.5rem] border border-velmora-line bg-white/70 p-6 shadow-card sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-velmora-gold">{product.category}</p>
            <h1 className="mt-4 font-display text-5xl uppercase leading-none tracking-[0.2em] text-velmora-ink sm:text-6xl">
              {product.name}
            </h1>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-3xl font-medium text-velmora-ink">${product.price}</p>
              <RatingStars rating={product.rating} reviews={product.reviews} />
            </div>
            <p className="mt-6 text-base leading-8 text-velmora-muted">{product.shortDescription}</p>

            <div className="mt-8 border-t border-velmora-line pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-muted">Tone</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.tones.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.22em] transition ${
                      selectedTone === tone
                        ? 'border-velmora-gold bg-velmora-panel text-velmora-cream'
                        : 'border-velmora-line bg-velmora-cream text-velmora-ink hover:border-velmora-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-muted">Quantity</p>
                <div className="mt-4">
                  <QuantitySelector value={quantity} onChange={setQuantity} />
                </div>
              </div>
              <p className="text-sm leading-7 text-velmora-muted">
                Ships in 1–2 business days. Gift-ready presentation included.
              </p>
            </div>

            <button
              type="button"
              onClick={() => addToCart(product.id, selectedTone, quantity)}
              className="mt-8 w-full rounded-full bg-velmora-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-velmora-panel transition duration-300 hover:brightness-95"
            >
              Add to Cart
            </button>

            <div className="mt-10">
              <AccordionItem title="Description" defaultOpen>
                {product.description}
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                {product.materials}
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                {product.shipping}
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-line bg-velmora-soft/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-velmora-gold">You may also like</p>
              <h2 className="mt-3 font-display text-4xl text-velmora-ink">Related pieces to layer in</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage
