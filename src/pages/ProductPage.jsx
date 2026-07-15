import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, Truck } from 'lucide-react'
import ProductCard from '@/components/common/ProductCard.jsx'
import StarRating from '@/components/common/StarRating.jsx'
import { useCart } from '@/context/CartContext.jsx'
import { getProductById, getRelatedProducts } from '@/lib/store-data.js'
import { useStrkImages } from '@/lib/useStrkImages.js'
import { formatCurrency } from '@/lib/utils.js'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-velmora-line/60 py-5">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-xs uppercase tracking-[0.28em] text-velmora-ink">{title}</span>
        <span className="text-lg text-velmora-mist">{open ? '−' : '+'}</span>
      </button>
      {open ? <div className="pt-4 text-sm leading-7 text-velmora-mist">{children}</div> : null}
    </div>
  )
}

function ProductPage() {
  const { productId } = useParams()
  const product = getProductById(productId)
  const [selectedTone, setSelectedTone] = useState(product?.tones[0] ?? 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { addItem } = useCart()

  const relatedProducts = useMemo(
    () => getRelatedProducts(productId),
    [productId],
  )

  useEffect(() => {
    setSelectedTone(product?.tones[0] ?? 'Gold')
    setQuantity(1)
    setSelectedImage(0)
  }, [productId, product])

  const containerRef = useStrkImages([productId, selectedImage])

  if (!product) {
    return (
      <div className="bg-velmora-ivory px-5 pb-20 pt-32 text-center md:px-8">
        <h1 className="font-display text-5xl text-velmora-ink">Product not found.</h1>
        <Link to="/shop" className="mt-6 inline-flex rounded-full bg-velmora-ink px-6 py-3 text-sm uppercase tracking-[0.26em] text-velmora-ivory">
          Return to Shop
        </Link>
      </div>
    )
  }

  const mainImage = product.gallery[selectedImage]

  return (
    <div ref={containerRef} className="bg-velmora-ivory pt-28 md:pt-32">
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="mb-8 text-xs uppercase tracking-[0.28em] text-velmora-mist">
          <Link to="/shop" className="transition hover:text-velmora-ink">Shop</Link>
          <span className="mx-2">/</span>
          <span>{product.category}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <div className="grid gap-4 md:grid-cols-[100px_minmax(0,1fr)]">
              <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
                {product.gallery.map((image, index) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`overflow-hidden rounded-[1.4rem] border transition ${
                      selectedImage === index
                        ? 'border-velmora-gold'
                        : 'border-velmora-line/70'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      alt={image.title}
                      className="h-24 w-24 object-cover md:h-28 md:w-full"
                      data-strk-img-id={`thumb-${image.id}`}
                      data-strk-img={`[${image.descId}] [${image.titleId}]`}
                      data-strk-img-ratio={image.ratio}
                      data-strk-img-width="320"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </button>
                ))}
              </div>
              <div className="order-1 overflow-hidden rounded-[2rem] border border-velmora-line/60 bg-white/70 md:order-2">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    alt={mainImage.title}
                    className="h-full w-full object-cover"
                    data-strk-img-id={`main-${mainImage.id}`}
                    data-strk-img={`[${mainImage.descId}] [${mainImage.titleId}]`}
                    data-strk-img-ratio={mainImage.ratio}
                    data-strk-img-width={mainImage.width}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              </div>
            </div>
            <div className="hidden">
              {product.gallery.map((image) => (
                <div key={image.id}>
                  <p id={image.titleId}>{image.title}</p>
                  <p id={image.descId}>{image.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-velmora-mist">{product.collection}</p>
            <h1 className="mt-4 font-display text-4xl uppercase leading-none tracking-[0.2em] text-velmora-ink md:text-5xl">
              {product.shortName}
            </h1>
            <div className="mt-5 flex items-center justify-between gap-4">
              <StarRating rating={product.rating} reviewCount={product.reviewCount} />
              <p className="text-2xl text-velmora-ink">{formatCurrency(product.price)}</p>
            </div>
            <p className="mt-6 text-base leading-8 text-velmora-mist">{product.description}</p>

            <div className="mt-8 rounded-[1.8rem] border border-velmora-line/60 bg-white/65 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-velmora-mist">Tone</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {product.tones.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.24em] transition ${
                        selectedTone === tone
                          ? 'border-velmora-gold bg-velmora-gold text-velmora-ivory'
                          : 'border-velmora-line bg-velmora-ivory text-velmora-mist hover:text-velmora-ink'
                      }`}
                    >
                      {tone} Tone
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.28em] text-velmora-mist">Quantity</p>
                <div className="mt-4 flex w-fit items-center rounded-full border border-velmora-line bg-velmora-ivory px-4 py-3">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="text-velmora-mist transition hover:text-velmora-ink"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-12 text-center text-sm text-velmora-ink">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="text-velmora-mist transition hover:text-velmora-ink"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => addItem(product, selectedTone, quantity)}
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-velmora-gold px-6 py-4 text-sm uppercase tracking-[0.28em] text-velmora-ivory transition hover:bg-velmora-gold-deep"
              >
                Add to Cart
              </button>

              <div className="mt-5 flex items-center gap-3 rounded-[1.4rem] bg-velmora-sand/30 px-4 py-4 text-sm text-velmora-mist">
                <Truck className="h-4 w-4 text-velmora-gold" />
                Arrives gift-ready with complimentary shipping over $75.
              </div>
            </div>

            <div className="mt-8 rounded-[1.8rem] border border-velmora-line/60 bg-white/65 px-6">
              <Accordion title="Description" defaultOpen>
                {product.details}
              </Accordion>
              <Accordion title="Materials & Care">{product.care}</Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-line/40 bg-velmora-sand/20 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.36em] text-velmora-mist">Related Pieces</p>
              <h2 className="mt-4 font-display text-4xl text-velmora-ink">You may also like</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage
