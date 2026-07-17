import React from 'react'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '@/components/store/ProductCard'
import { useStore } from '@/components/store/StoreContext'
import {
  formatPrice,
  getProductBySlug,
  getRelatedProducts,
} from '@/data/storefront'

const accordionItems = [
  { key: 'description', label: 'Description' },
  { key: 'materialsCare', label: 'Materials & Care' },
  { key: 'shippingReturns', label: 'Shipping & Returns' },
]

const ProductPage = () => {
  const { slug } = useParams()
  const { addToCart } = useStore()
  const product = getProductBySlug(slug)
  const relatedProducts = React.useMemo(() => getRelatedProducts(slug), [slug])
  const [selectedImage, setSelectedImage] = React.useState(0)
  const [selectedVariant, setSelectedVariant] = React.useState('Gold Tone')
  const [quantity, setQuantity] = React.useState(1)
  const [openSections, setOpenSections] = React.useState({
    description: true,
    materialsCare: false,
    shippingReturns: false,
  })

  React.useEffect(() => {
    setSelectedImage(0)
    setSelectedVariant('Gold Tone')
    setQuantity(1)
  }, [slug])

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-velmora-paper px-4 text-center text-velmora-ink">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">
            Product not found
          </p>
          <h1 className="mt-4 font-display text-5xl text-velmora-ink">This piece is no longer available.</h1>
          <Link
            to="/shop"
            className="mt-6 inline-flex rounded-full bg-velmora-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-velmora-paper"
          >
            Return to Shop
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-velmora-paper pt-28 text-velmora-ink sm:pt-32">
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[2rem] border border-velmora-mist/60 bg-velmora-shell/60 p-4 shadow-soft">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-velmora-shell">
                {product.imageDescriptors.map((descriptor, index) => {
                  const promptId = `product-${product.slug}-image-${index}-prompt`
                  const titleId = `product-${product.slug}-title`
                  const descriptionId = `product-${product.slug}-description`

                  return (
                    <React.Fragment key={promptId}>
                      <span id={promptId} className="sr-only">
                        {descriptor}
                      </span>
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`${product.name} view ${index + 1}`}
                        data-strk-img-id={`product-${product.slug}-gallery-image-${index}`}
                        data-strk-img={`[${promptId}] [${descriptionId}] [${titleId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="1200"
                        className={[
                          'absolute inset-0 h-full w-full object-cover transition duration-300',
                          selectedImage === index ? 'opacity-100' : 'pointer-events-none opacity-0',
                        ].join(' ')}
                      />
                    </React.Fragment>
                  )
                })}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {product.imageDescriptors.map((descriptor, index) => {
                const promptId = `thumb-${product.slug}-${index}-prompt`
                const titleId = `product-${product.slug}-title`
                const descriptionId = `product-${product.slug}-description`

                return (
                  <button
                    key={promptId}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={[
                      'overflow-hidden rounded-[1.35rem] border p-2 transition',
                      selectedImage === index
                        ? 'border-velmora-gold bg-velmora-shell shadow-soft'
                        : 'border-velmora-mist/60 bg-velmora-paper hover:border-velmora-gold/70',
                    ].join(' ')}
                    aria-label={`Select image ${index + 1}`}
                  >
                    <span id={promptId} className="sr-only">
                      {descriptor}
                    </span>
                    <div className="relative aspect-square overflow-hidden rounded-[1rem] bg-velmora-shell">
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`${product.name} thumbnail ${index + 1}`}
                        data-strk-img-id={`product-${product.slug}-thumbnail-image-${index}`}
                        data-strk-img={`[${promptId}] [${descriptionId}] [${titleId}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="300"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">
              {product.category}
            </p>
            <h1
              id={`product-${product.slug}-title`}
              className="mt-4 font-display text-5xl uppercase tracking-[0.18em] text-velmora-ink sm:text-6xl"
            >
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ink">
                {formatPrice(product.price)}
              </p>
              <div className="flex items-center gap-2 text-sm text-velmora-taupe">
                <Star className="h-4 w-4 fill-velmora-gold text-velmora-gold" />
                <span>
                  {product.rating} · {product.reviewCount} reviews
                </span>
              </div>
            </div>
            <p
              id={`product-${product.slug}-description`}
              className="mt-6 max-w-xl text-base leading-8 text-velmora-taupe"
            >
              {product.shortDescription}
            </p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">
                Variant
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={[
                      'rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] transition',
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-paper'
                        : 'border-velmora-mist bg-transparent text-velmora-ink hover:border-velmora-gold/70',
                    ].join(' ')}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">
                Quantity
              </p>
              <div className="mt-3 inline-flex items-center rounded-full border border-velmora-mist bg-velmora-paper text-velmora-ink">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="inline-flex h-12 w-12 items-center justify-center"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center text-sm font-semibold">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="inline-flex h-12 w-12 items-center justify-center"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => addToCart(product, selectedVariant, quantity)}
              className="mt-8 w-full rounded-full bg-velmora-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-velmora-paper transition hover:bg-velmora-gold-deep"
            >
              Add to Cart
            </button>

            <div className="mt-10 divide-y divide-velmora-mist/60 rounded-[2rem] border border-velmora-mist/60 bg-velmora-shell/50">
              {accordionItems.map((item) => (
                <div key={item.key} className="px-5 py-5 text-velmora-ink">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSections((current) => ({
                        ...current,
                        [item.key]: !current[item.key],
                      }))
                    }
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-ink">
                      {item.label}
                    </span>
                    <ChevronDown
                      className={[
                        'h-4 w-4 text-velmora-taupe transition',
                        openSections[item.key] ? 'rotate-180' : '',
                      ].join(' ')}
                    />
                  </button>
                  {openSections[item.key] && (
                    <p className="mt-4 max-w-xl text-sm leading-7 text-velmora-taupe">
                      {product[item.key]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="flex items-end justify-between border-b border-velmora-mist/60 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">
              You may also like
            </p>
            <h2 className="mt-3 font-display text-5xl text-velmora-ink sm:text-6xl">
              Continue the collection
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard
              key={relatedProduct.slug}
              product={relatedProduct}
              sectionId="related-products"
              onQuickAdd={(selectedProduct) => addToCart(selectedProduct, 'Gold Tone', 1)}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProductPage
