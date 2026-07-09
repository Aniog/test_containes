import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductAccordion from '@/components/product/ProductAccordion.jsx'
import ProductCard from '@/components/product/ProductCard.jsx'
import QuantitySelector from '@/components/shared/QuantitySelector.jsx'
import RatingStars from '@/components/shared/RatingStars.jsx'
import ButtonLink from '@/components/shared/ButtonLink.jsx'
import { useCart } from '@/context/CartContext.jsx'
import { findProductBySlug, formatPrice, products } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const ProductDetail = () => {
  const { slug } = useParams()
  const product = findProductBySlug(slug)
  const [activeImage, setActiveImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const containerRef = useStrkImages([activeImage, selectedVariant, slug])

  useEffect(() => {
    setActiveImage(0)
    setQuantity(1)
    setSelectedVariant(product?.variants?.[0] || 'Gold Tone')
  }, [product, slug])

  const relatedProducts = useMemo(
    () => products.filter((item) => item.slug !== slug).slice(0, 3),
    [slug],
  )

  if (!product) {
    return (
      <div className="page-shell py-16 md:py-24">
        <div className="rounded-[2rem] border border-truffle/10 bg-white px-8 py-16 text-center shadow-card">
          <p className="text-xs uppercase tracking-[0.24em] text-champagne">Product unavailable</p>
          <h1 className="mt-4 font-editorial text-5xl text-velvet">This piece is no longer in the current edit</h1>
          <p className="mt-3 text-sm leading-7 text-truffle">
            Browse the latest collection to discover Velmora favorites still in stock.
          </p>
          <ButtonLink className="mt-6" to="/shop">
            Back to Shop
          </ButtonLink>
        </div>
      </div>
    )
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materialsCare },
    { title: 'Shipping & Returns', content: product.shippingReturns },
  ]

  const activeTitleId = `${product.slug}-gallery-title-${activeImage}`
  const activeDescId = `${product.slug}-gallery-desc-${activeImage}`

  return (
    <div className="page-shell py-10 md:py-14 lg:py-16">
      <div className="mb-6 text-xs uppercase tracking-[0.22em] text-truffle">
        <Link className="transition-colors duration-300 hover:text-champagne" to="/shop">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span className="text-champagne">{product.category}</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <section ref={containerRef} className="space-y-4">
          <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-soft">
            <img
              alt={product.name}
              className="h-[540px] w-full object-cover sm:h-[700px]"
              data-strk-img={`[${activeDescId}] [${activeTitleId}]`}
              data-strk-img-id={`${product.slug}-gallery-main`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {product.galleryPrompts.map((prompt, index) => {
              const titleId = `${product.slug}-gallery-title-${index}`
              const descId = `${product.slug}-gallery-desc-${index}`

              return (
                <button
                  key={titleId}
                  type="button"
                  className={`overflow-hidden rounded-[1.5rem] border bg-white p-1 transition-all duration-300 ${
                    activeImage === index
                      ? 'border-champagne shadow-card'
                      : 'border-truffle/10 hover:border-champagne/40'
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img
                    alt={`${product.name} view ${index + 1}`}
                    className="h-32 w-full rounded-[1.2rem] object-cover sm:h-40"
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-id={`${product.slug}-thumb-${index}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <p className="sr-only" id={titleId}>
                    {product.name} view {index + 1}
                  </p>
                  <p className="sr-only" id={descId}>
                    {prompt}
                  </p>
                </button>
              )
            })}
          </div>
        </section>

        <section className="lg:sticky lg:top-28 lg:self-start">
          <div className="space-y-6 rounded-[2.5rem] bg-white p-6 shadow-soft sm:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-champagne">{product.category}</p>
              <h1 className="mt-3 font-editorial text-5xl uppercase tracking-[0.18em] text-velvet sm:text-6xl">
                {product.name}
              </h1>
            </div>
            <div className="flex items-center justify-between gap-4">
              <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
              <p className="text-xl font-medium text-velvet">{formatPrice(product.price)}</p>
            </div>
            <p className="text-base leading-8 text-truffle">{product.shortDescription}</p>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.24em] text-champagne">Tone</p>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.18em] transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-champagne bg-champagne text-ivory'
                        : 'border-truffle/15 bg-ivory text-velvet hover:border-champagne hover:text-champagne'
                    }`}
                    onClick={() => setSelectedVariant(variant)}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <QuantitySelector
                quantity={quantity}
                onDecrease={() => setQuantity((value) => Math.max(1, value - 1))}
                onIncrease={() => setQuantity((value) => value + 1)}
              />
              <button
                type="button"
                className="btn-primary w-full justify-center sm:flex-1"
                onClick={() => addItem(product, quantity, selectedVariant)}
              >
                Add to Cart
              </button>
            </div>
          </div>

          <div className="mt-6">
            <ProductAccordion items={accordionItems} />
          </div>
        </section>
      </div>

      <section className="pt-16 md:pt-24">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-champagne">You may also like</p>
            <h2 className="mt-3 font-editorial text-5xl text-velvet">Related pieces</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
