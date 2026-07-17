import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import StarRating from '@/components/common/StarRating'
import AccordionItem from '@/components/store/AccordionItem'
import ProductCard from '@/components/store/ProductCard'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useImageLoader } from '@/hooks/useImageLoader'

const ProductPage = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedTone, setSelectedTone] = useState(product?.tones[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('primary')
  const { addItem } = useCart()
  const containerRef = useImageLoader([activeImage])

  const gallery = useMemo(() => {
    if (!product) {
      return []
    }

    return [
      { key: 'primary', imageId: product.imageIds.primary },
      { key: 'secondary', imageId: product.imageIds.secondary },
      { key: 'detailA', imageId: product.imageIds.detailA },
      { key: 'detailB', imageId: product.imageIds.detailB },
    ]
  }, [product])

  useEffect(() => {
    if (!product) {
      return
    }

    setSelectedTone(product.tones[0])
    setQuantity(1)
    setActiveImage('primary')
  }, [product])

  if (!product) {
    return (
      <div className="bg-velmora-ivory px-5 py-24 text-center text-velmora-ink">
        <h1 className="font-display text-5xl">Product not found</h1>
        <Link to="/shop" className="mt-6 inline-block text-sm uppercase tracking-[0.26em] text-velmora-taupe">
          Return to shop
        </Link>
      </div>
    )
  }

  const relatedProducts = getRelatedProducts(product.id)

  return (
    <div ref={containerRef} className="bg-velmora-ivory pb-16 md:pb-24">
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="relative overflow-hidden rounded-[36px] border border-velmora-line bg-velmora-stone shadow-[0_20px_55px_rgba(61,47,39,0.08)]">
              <img
                data-strk-img-id={product.imageIds.primary}
                data-strk-img={`[${product.contentIds.desc}] [${product.contentIds.title}] [${product.contentIds.category}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className={`aspect-[4/5] h-full w-full object-cover ${activeImage === 'primary' ? 'block' : 'hidden'}`}
              />
              <img
                data-strk-img-id={product.imageIds.secondary}
                data-strk-img={`[${product.contentIds.desc}] [${product.contentIds.title}] [${product.contentIds.category}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} alternate view`}
                className={`aspect-[4/5] h-full w-full object-cover ${activeImage === 'secondary' ? 'block' : 'hidden'}`}
              />
              <img
                data-strk-img-id={product.imageIds.detailA}
                data-strk-img={`[${product.contentIds.desc}] [${product.contentIds.title}] [${product.contentIds.category}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} detail view A`}
                className={`aspect-[4/5] h-full w-full object-cover ${activeImage === 'detailA' ? 'block' : 'hidden'}`}
              />
              <img
                data-strk-img-id={product.imageIds.detailB}
                data-strk-img={`[${product.contentIds.desc}] [${product.contentIds.title}] [${product.contentIds.category}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} detail view B`}
                className={`aspect-[4/5] h-full w-full object-cover ${activeImage === 'detailB' ? 'block' : 'hidden'}`}
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4">
              {gallery.map((image) => (
                <button
                  key={image.key}
                  type="button"
                  onClick={() => setActiveImage(image.key)}
                  className={`overflow-hidden rounded-[24px] border bg-velmora-stone ${
                    activeImage === image.key
                      ? 'border-velmora-espresso'
                      : 'border-velmora-line'
                  }`}
                  aria-label={`View ${product.name} image ${image.key}`}
                >
                  <img
                    data-strk-img-id={image.imageId}
                    data-strk-img={`[${product.contentIds.desc}] [${product.contentIds.title}] [${product.contentIds.category}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="320"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail ${image.key}`}
                    className="aspect-square h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:pt-6">
            <p id={product.contentIds.category} className="text-xs uppercase tracking-[0.34em] text-velmora-taupe">
              {product.category}
            </p>
            <h1
              id={product.contentIds.title}
              className="mt-5 font-display text-5xl uppercase tracking-[0.26em] text-velmora-ink md:text-6xl"
            >
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <span className="text-2xl text-velmora-ink">${product.price}</span>
              <StarRating rating={product.rating} reviews={product.reviews} />
            </div>
            <p id={product.contentIds.desc} className="mt-6 max-w-xl text-base leading-8 text-velmora-muted">
              {product.longDescription}
            </p>

            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.32em] text-velmora-taupe">
                Tone
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.tones.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.28em] transition ${
                      selectedTone === tone
                        ? 'border-velmora-espresso bg-velmora-espresso text-velmora-champagne'
                        : 'border-velmora-line bg-white/80 text-velmora-ink hover:border-velmora-champagne'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="inline-flex h-14 items-center rounded-full border border-velmora-line bg-white/75 px-2">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="inline-flex h-10 w-10 items-center justify-center text-velmora-ink"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center text-sm text-velmora-ink">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="inline-flex h-10 w-10 items-center justify-center text-velmora-ink"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => addItem(product, quantity, selectedTone)}
                className="inline-flex h-14 flex-1 items-center justify-center rounded-full bg-velmora-espresso px-7 text-xs uppercase tracking-[0.34em] text-velmora-champagne transition hover:-translate-y-0.5 hover:bg-velmora-ink"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-10 border-t border-velmora-line">
              <AccordionItem title="Description" content={product.longDescription} defaultOpen />
              <AccordionItem title="Materials & Care" content={product.materials} />
              <AccordionItem title="Shipping & Returns" content={product.shipping} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-velmora-taupe">
              You may also like
            </p>
            <h2 className="mt-3 font-display text-4xl text-velmora-ink">
              More to treasure
            </h2>
          </div>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductPage
