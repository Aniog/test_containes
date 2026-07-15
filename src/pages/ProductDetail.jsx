import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '@/components/shared/ProductCard'
import Stars from '@/components/shared/Stars'
import ProductGallery from '@/components/product/ProductGallery'
import ProductAccordion from '@/components/product/ProductAccordion'
import { findProductBySlug, formatPrice, getRelatedProducts } from '@/data/store'
import { useCart } from '@/context/CartContext'
import useStrkImages from '@/hooks/useStrkImages'

const ProductDetail = () => {
  const { slug } = useParams()
  const product = findProductBySlug(slug)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] ?? 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [openSection, setOpenSection] = useState('description')
  const { addItem } = useCart()
  const containerRef = useStrkImages([
    slug,
    selectedVariant,
    quantity,
    activeImageIndex,
    openSection,
  ])

  const relatedProducts = useMemo(
    () => (product ? getRelatedProducts(product.id) : []),
    [product],
  )

  useEffect(() => {
    if (!product) {
      return
    }

    setSelectedVariant(product.variants[0])
    setQuantity(1)
    setActiveImageIndex(0)
    setOpenSection('description')
  }, [product])

  if (!product) {
    return (
      <main className="bg-stone-50 px-4 pb-24 pt-32 text-center sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.32em] text-stone-500">
          Product not found
        </p>
        <h1 className="mt-4 font-['Cormorant_Garamond'] text-5xl text-stone-950">
          This piece is no longer available.
        </h1>
        <Link
          className="mt-8 inline-flex rounded-full bg-stone-950 px-6 py-3 text-sm uppercase tracking-[0.24em] text-amber-200"
          to="/shop"
        >
          Return to shop
        </Link>
      </main>
    )
  }

  const accordionSections = [
    { id: 'description', label: 'Description', content: product.description },
    {
      id: 'materials',
      label: 'Materials & Care',
      content: product.materialsCare,
    },
    {
      id: 'shipping',
      label: 'Shipping & Returns',
      content: product.shippingReturns,
    },
  ]

  return (
    <main className="bg-stone-50 pt-28 sm:pt-32" ref={containerRef}>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <ProductGallery
            activeImageIndex={activeImageIndex}
            product={product}
            setActiveImageIndex={setActiveImageIndex}
          />

          <div className="lg:pt-6">
            <p className="text-xs uppercase tracking-[0.34em] text-stone-500">
              {product.category}
            </p>
            <h1
              className="mt-3 font-['Cormorant_Garamond'] text-4xl uppercase tracking-[0.22em] text-stone-950 sm:text-5xl"
              id="product-title"
            >
              {product.name}
            </h1>
            <div className="mt-5 flex items-center gap-3">
              <Stars value={product.rating} />
              <span className="text-sm text-stone-600">
                {product.rating} · {product.reviewCount} reviews
              </span>
            </div>
            <p className="mt-5 text-2xl font-medium text-stone-950">
              {formatPrice(product.price)}
            </p>
            <p className="mt-5 max-w-xl text-sm leading-8 text-stone-600 sm:text-base" id="product-short-description">
              {product.shortDescription}
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.32em] text-stone-500">
                Finish
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.2em] transition duration-300 ${
                      selectedVariant === variant
                        ? 'border-stone-950 bg-stone-950 text-amber-200'
                        : 'border-stone-300 bg-white text-stone-800 hover:border-stone-950'
                    }`}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="inline-flex items-center rounded-full border border-stone-300 bg-white px-2 py-1">
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-transparent p-0 text-stone-700"
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                >
                  −
                </button>
                <span className="w-8 text-center text-sm font-medium text-stone-900">
                  {quantity}
                </span>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-transparent p-0 text-stone-700"
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="flex-1 rounded-full bg-stone-950 px-6 py-4 text-sm uppercase tracking-[0.24em] text-amber-200 transition duration-300 hover:bg-stone-900"
                type="button"
                onClick={() => addItem(product, selectedVariant, quantity)}
              >
                Add to Cart
              </button>
            </div>

            <ProductAccordion
              openSection={openSection}
              sections={accordionSections}
              setOpenSection={setOpenSection}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-stone-500">
                You may also like
              </p>
              <h2 className="mt-3 font-['Cormorant_Garamond'] text-4xl text-stone-950">
                Pair it with another favorite.
              </h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                instanceId={`related-${relatedProduct.slug}`}
                product={relatedProduct}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductDetail
