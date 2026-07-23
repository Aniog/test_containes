import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import RatingStars from '@/components/store/RatingStars.jsx'
import QuantitySelector from '@/components/store/QuantitySelector.jsx'
import ProductAccordion from '@/components/store/ProductAccordion.jsx'
import ProductGrid from '@/components/store/ProductGrid.jsx'
import { getProductById, relatedProducts } from '@/data/storeData.js'
import { useCart } from '@/context/CartContext.jsx'

const ProductPage = () => {
  const { productId } = useParams()
  const product = getProductById(productId)
  const [selectedTone, setSelectedTone] = useState(product?.toneOptions?.[0] ?? 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    if (!product) {
      return undefined
    }

    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [productId, activeImage])

  useEffect(() => {
    if (!product) return
    setSelectedTone(product.toneOptions[0])
    setQuantity(1)
    setActiveImage(0)
  }, [product])

  const accordionItems = useMemo(() => {
    if (!product) return []

    return [
      { id: 'description', title: 'Description', content: product.description },
      {
        id: 'materials',
        title: 'Materials & Care',
        content: `${product.materials} ${product.care}`,
      },
      {
        id: 'shipping',
        title: 'Shipping & Returns',
        content: product.shipping,
      },
    ]
  }, [product])

  if (!product) {
    return (
      <main className="page-shell pt-32 pb-20">
        <div className="rounded-[28px] border border-velmora-sand/70 bg-white/70 px-6 py-14 text-center shadow-velmora-soft">
          <h1 className="text-4xl text-velmora-ink">Product not found</h1>
          <p className="mt-4 text-sm leading-7 text-velmora-mocha">
            The piece you requested is no longer available.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex rounded-full bg-velmora-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-velmora-ivory transition duration-300 hover:bg-velmora-gold-deep"
          >
            Return to shop
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main ref={containerRef} className="page-shell pt-28 pb-20 sm:pt-32 sm:pb-24">
      <Link
        to="/shop"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.24em] text-velmora-mocha transition duration-300 hover:text-velmora-gold"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={1.8} />
        Back to shop
      </Link>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[30px] border border-velmora-sand/70 bg-white/60 shadow-velmora-soft">
            <img
              alt={product.gallery[activeImage]?.title || product.name}
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id={product.gallery[activeImage]?.id || `${product.imageId}-hero`}
              data-strk-img={`[product-${product.id}-description] [product-${product.id}-title]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {product.gallery.map((image, index) => {
              const titleId = `product-${product.id}-gallery-${index}-title`
              return (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`overflow-hidden rounded-[20px] border transition duration-300 ${
                    activeImage === index
                      ? 'border-velmora-gold shadow-velmora-soft'
                      : 'border-velmora-sand/70'
                  }`}
                >
                  <img
                    alt={image.title}
                    className="aspect-[4/5] w-full object-cover"
                    data-strk-img-id={`${image.id}-thumb`}
                    data-strk-img={`[${titleId}] [product-${product.id}-title]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="300"
                  />
                  <span id={titleId} className="sr-only">
                    {image.title}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="space-y-8 lg:pt-6">
          <div>
            <p className="eyebrow-label mb-3">{product.category}</p>
            <h1 id={`product-${product.id}-title`} className="product-wordmark text-3xl leading-tight text-velmora-ink sm:text-4xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="text-3xl font-medium text-velmora-ink">${product.price}</p>
              <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
            </div>
            <p
              id={`product-${product.id}-description`}
              className="mt-5 max-w-xl text-base leading-8 text-velmora-mocha"
            >
              {product.shortDescription}
            </p>
          </div>

          <div className="rounded-[28px] border border-velmora-sand/70 bg-white/70 p-6 shadow-velmora-soft">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-velmora-ink">
                Tone
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.toneOptions.map((tone) => {
                  const selected = selectedTone === tone
                  return (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={`rounded-full border px-5 py-2.5 text-sm transition duration-300 ${
                        selected
                          ? 'border-velmora-gold bg-velmora-gold text-velmora-ivory'
                          : 'border-velmora-sand bg-velmora-ivory text-velmora-ink hover:border-velmora-gold hover:text-velmora-gold'
                      }`}
                    >
                      {tone}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 border-t border-velmora-sand/70 pt-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-velmora-ink">
                  Quantity
                </p>
                <p className="mt-2 text-sm text-velmora-mocha">Adjust your selection before adding to cart.</p>
              </div>
              <QuantitySelector
                quantity={quantity}
                onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
                onIncrease={() => setQuantity((current) => current + 1)}
              />
            </div>

            <button
              type="button"
              onClick={() => addItem(product, selectedTone, quantity)}
              className="mt-6 w-full rounded-full bg-velmora-gold px-6 py-4 text-sm font-medium uppercase tracking-[0.24em] text-velmora-ivory transition duration-300 hover:bg-velmora-gold-deep"
            >
              Add to Cart
            </button>
          </div>

          <ProductAccordion items={accordionItems} />
        </div>
      </section>

      <section className="pt-16 sm:pt-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow-label mb-3">You may also like</p>
            <h2 className="text-4xl leading-none text-velmora-ink">Pair it with another favorite</h2>
          </div>
        </div>
        <ProductGrid products={relatedProducts(product.id)} titleId="related-products-title" />
      </section>
    </main>
  )
}

export default ProductPage
