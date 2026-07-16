import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products.js'
import StarRating from '@/components/common/StarRating.jsx'
import QuantitySelector from '@/components/common/QuantitySelector.jsx'
import ProductAccordion from '@/components/product/ProductAccordion.jsx'
import ProductGallery from '@/components/product/ProductGallery.jsx'
import ProductCard from '@/components/common/ProductCard.jsx'
import { useCart } from '@/context/CartContext.jsx'

const formatPrice = (price) => `$${price}`

const ProductDetail = () => {
  const { productId } = useParams()
  const containerRef = useRef(null)
  const product = products.find((item) => item.id === productId) ?? products[0]
  const [selectedTone, setSelectedTone] = useState(product.tones[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(product.imageId)
  const { addToCart } = useCart()

  useEffect(() => {
    setSelectedTone(product.tones[0])
    setQuantity(1)
    setActiveImage(product.imageId)
  }, [product])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [product, activeImage])

  const accordionSections = useMemo(
    () => [
      { title: 'Description', content: product.description },
      { title: 'Materials & Care', content: product.care },
      { title: 'Shipping & Returns', content: product.shipping },
    ],
    [product],
  )

  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3)

  return (
    <main ref={containerRef} className="bg-ivory pb-16 pt-32 md:pb-24 md:pt-40">
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 text-xs uppercase tracking-[0.28em] text-muted">
          <Link to="/shop" className="transition hover:text-ink">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <ProductGallery
            product={product}
            activeImage={activeImage}
            onSelectImage={setActiveImage}
          />
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.32em] text-bronze">Velmora Signature</p>
                <h1 id={product.detailTitleId} className="font-display text-5xl uppercase tracking-[0.18em] text-ink md:text-6xl">
                  {product.name}
                </h1>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm uppercase tracking-[0.24em] text-ink">{formatPrice(product.price)}</p>
                <StarRating rating={product.rating} reviews={product.reviews} />
              </div>
              <p id={product.detailDescriptionId} className="text-base leading-8 text-muted">
                {product.shortDescription}
              </p>
            </div>

            <div className="space-y-4 rounded-[1.75rem] border border-line bg-white p-5 shadow-soft md:p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-muted">Tone</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.tones.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.22em] transition ${
                        selectedTone === tone
                          ? 'border-ink bg-ink text-ivory'
                          : 'border-line bg-ivory text-ink hover:bg-sand'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.28em] text-muted">Quantity</p>
                  <QuantitySelector
                    value={quantity}
                    onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
                    onIncrease={() => setQuantity((current) => current + 1)}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => addToCart(product, quantity, selectedTone)}
                  className="h-12 w-full rounded-full border border-ink bg-ink px-6 text-xs font-medium uppercase tracking-[0.24em] text-ivory transition hover:bg-bronze hover:text-ink sm:w-auto sm:min-w-[260px]"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <ProductAccordion sections={accordionSections} />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-5 md:mt-24 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-bronze">Related pieces</p>
            <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">You may also like</h2>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProductDetail
