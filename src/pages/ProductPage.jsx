import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import ProductAccordion from '../components/storefront/ProductAccordion'
import ProductCard from '../components/storefront/ProductCard'
import ProductGallery from '../components/storefront/ProductGallery'
import QuantitySelector from '../components/storefront/QuantitySelector'
import Stars from '../components/storefront/Stars'
import { formatPrice, getProductBySlug, getRelatedProducts } from '../data/storefront'
import { useCart } from '../context/CartContext'
import strkImgConfig from '../strk-img-config.json'

function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])
  const containerRef = useRef(null)
  const { addItem } = useCart()
  const [activeIndex, setActiveIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] ?? 'Gold Tone')

  useEffect(() => {
    if (!product) {
      return
    }

    setActiveIndex(0)
    setQuantity(1)
    setSelectedVariant(product.variants[0])
  }, [product])

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [slug])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const titleId = `product-${product.slug}-title`
  const descriptionId = `product-${product.slug}-description`
  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materials },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div ref={containerRef} className="bg-ivory px-4 pb-20 pt-28 sm:px-6 lg:px-10 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-xs uppercase tracking-editorial text-truffle">
          <Link to="/shop" className="transition-colors duration-300 ease-editorial hover:text-champagne">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span>{product.category}</span>
        </div>

        <section className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <ProductGallery
            product={product}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            titleId={titleId}
            descriptionId={descriptionId}
          />

          <div className="lg:pt-4">
            <p className="text-xs uppercase tracking-editorial text-truffle">{product.category}</p>
            <h1 id={titleId} className="mt-4 font-display text-4xl uppercase tracking-luxury text-ink sm:text-5xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="text-lg font-medium uppercase tracking-editorial text-ink">
                {formatPrice(product.price)}
              </p>
              <Stars rating={product.rating} />
              <span className="text-xs uppercase tracking-editorial text-truffle">
                {product.reviews} reviews
              </span>
            </div>
            <p id={descriptionId} className="mt-6 max-w-xl text-sm leading-8 text-truffle sm:text-base">
              {product.description}
            </p>

            <div className="mt-10">
              <p className="text-xs uppercase tracking-editorial text-truffle">Finish</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full border px-5 py-3 text-sm uppercase tracking-editorial transition-colors duration-300 ease-editorial ${
                      selectedVariant === variant
                        ? 'border-champagne bg-champagne text-ink'
                        : 'border-mist bg-glow text-ink hover:bg-shell'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <QuantitySelector
                quantity={quantity}
                onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
                onIncrease={() => setQuantity((current) => current + 1)}
              />
              <button
                type="button"
                onClick={() => addItem(product, selectedVariant, quantity)}
                className="min-w-[240px] flex-1 rounded-full bg-champagne px-6 py-4 text-sm uppercase tracking-editorial text-ink transition-colors duration-300 ease-editorial hover:bg-brass hover:text-ivory"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-10">
              <ProductAccordion items={accordionItems} />
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-mist pt-12 lg:mt-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-editorial text-truffle">Complete the look</p>
              <h2 id="related-heading" className="mt-3 font-display text-4xl text-ink">
                You may also like
              </h2>
            </div>
            <Link
              to="/shop"
              className="text-xs uppercase tracking-editorial text-ink transition-colors duration-300 ease-editorial hover:text-champagne"
            >
              View All
            </Link>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard key={item.slug} product={item} sectionTitleId="related-heading" compact />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductPage
