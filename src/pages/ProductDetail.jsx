import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, Star } from 'lucide-react'
import AccordionItem from '@/components/store/AccordionItem'
import ProductCard from '@/components/store/ProductCard'
import { currency, getProductBySlug, getRelatedProducts } from '@/data/storeData'
import { useCart } from '@/context/CartContext'
import { useImageLoader } from '@/hooks/useImageLoader'

const ProductDetail = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedVariant, setSelectedVariant] = useState('Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const { addItem } = useCart()
  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])
  const containerRef = useImageLoader([slug, activeImage])

  if (!product) {
    return (
      <div className="bg-velmora-bg px-4 py-40 text-center text-velmora-ivory sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
          Product not found
        </p>
        <h1 className="mt-4 font-display text-5xl">This piece is no longer available</h1>
        <Link
          to="/shop"
          className="mt-6 inline-flex rounded-full border border-velmora-gold px-5 py-3 text-xs uppercase tracking-[0.3em] text-velmora-gold"
        >
          Return to shop
        </Link>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="bg-velmora-bg text-velmora-ivory">
      <section className="px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4 lg:grid-cols-[96px_1fr]">
            <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
              {product.gallery.map((item, index) => {
                const titleId = `thumb-${product.slug}-${index}-title`
                const descId = `thumb-${product.slug}-${index}-desc`

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`overflow-hidden rounded-[1.25rem] border ${
                      activeImage === index
                        ? 'border-velmora-gold'
                        : 'border-velmora-line'
                    }`}
                  >
                    <img
                      alt={item}
                      className="h-24 w-20 object-cover sm:h-28 sm:w-24"
                      data-strk-img-id={`thumb-${product.slug}-${index}-aa4f`}
                      data-strk-img={`[${descId}] [${titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="300"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <span id={titleId} className="sr-only">
                      {product.name} {item}
                    </span>
                    <span id={descId} className="sr-only">
                      Editorial thumbnail of {product.name} with warm gold styling.
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="order-1 overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-panel lg:order-2">
              <img
                alt={product.name}
                className="aspect-[4/5] w-full object-cover"
                data-strk-img-id={`pdp-${product.slug}-${activeImage}-f7c1`}
                data-strk-img={`[pdp-desc-${product.slug}] [pdp-title-${product.slug}] [pdp-gallery-${product.slug}-${activeImage}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <span id={`pdp-gallery-${product.slug}-${activeImage}`} className="sr-only">
                {product.gallery[activeImage]}
              </span>
            </div>
          </div>

          <div className="lg:pt-6">
            <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
              {product.category}
            </p>
            <h1
              id={`pdp-title-${product.slug}`}
              className="mt-4 font-display text-5xl uppercase tracking-[0.24em] text-velmora-ivory sm:text-6xl"
            >
              {product.name}
            </h1>
            <div className="mt-5 flex items-center gap-4">
              <p className="text-sm uppercase tracking-[0.28em] text-velmora-gold">
                {currency.format(product.price)}
              </p>
              <div className="flex items-center gap-2 text-sm text-velmora-taupe">
                <Star className="h-4 w-4 fill-velmora-gold text-velmora-gold" />
                <span>
                  {product.rating} · {product.reviews} reviews
                </span>
              </div>
            </div>
            <p
              id={`pdp-desc-${product.slug}`}
              className="mt-6 max-w-xl text-base leading-8 text-velmora-taupe"
            >
              {product.shortDescription}
            </p>

            <div className="mt-8 border-t border-velmora-line pt-8">
              <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
                Tone
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.28em] transition ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                        : 'border-velmora-line text-velmora-taupe hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-velmora-line pt-8">
              <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
                Quantity
              </p>
              <div className="mt-4 flex w-fit items-center gap-3 rounded-full border border-velmora-line px-3 py-2">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="rounded-full p-2 text-velmora-ivory transition hover:text-velmora-gold"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-6 text-center text-sm text-velmora-ivory">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="rounded-full p-2 text-velmora-ivory transition hover:text-velmora-gold"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full rounded-full bg-velmora-gold px-6 py-4 text-xs uppercase tracking-[0.34em] text-velmora-ink transition hover:bg-velmora-goldDeep"
            >
              Add to Cart
            </button>

            <div className="mt-10 border-t border-velmora-line">
              <AccordionItem title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-4">{product.care}</p>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                <p>{product.shipping}</p>
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-line px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
                Related pieces
              </p>
              <h2 className="mt-3 font-display text-4xl text-velmora-ivory sm:text-5xl">
                You may also like
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden text-xs uppercase tracking-[0.35em] text-velmora-gold transition hover:text-velmora-ivory sm:block"
            >
              Shop all
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.slug} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
