import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard'
import Accordion from '@/components/shared/Accordion'
import QuantitySelector from '@/components/shared/QuantitySelector'
import StarRating from '@/components/shared/StarRating'
import { useStore } from '@/context/StoreContext'
import { getProductGallery } from '@/data/imagePlaceholders'
import { getProductById, getRelatedProducts } from '@/data/products'

const ProductPage = () => {
  const { productId } = useParams()
  const product = getProductById(productId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] ?? 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useStore()

  useEffect(() => {
    setSelectedImage(0)
    setSelectedVariant(product?.variants[0] ?? 'Gold Tone')
    setQuantity(1)
  }, [productId, product])

  const gallery = useMemo(() => getProductGallery(productId), [productId])
  const relatedProducts = useMemo(() => getRelatedProducts(productId), [productId])

  if (!product) {
    return (
      <div className="bg-velmora-surface px-5 py-32 text-center text-velmora-ink sm:px-6 lg:px-10">
        <h1 className="font-display text-5xl">Product not found</h1>
        <Link
          to="/shop"
          className="mt-6 inline-flex rounded-full bg-velmora-ink px-6 py-3 text-sm uppercase tracking-[0.25em] text-velmora-ivory"
        >
          Return to Shop
        </Link>
      </div>
    )
  }

  const accordionItems = [
    { title: 'Description', content: product.details },
    { title: 'Materials & Care', content: product.care },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div className="bg-velmora-surface text-velmora-ink">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-6 lg:px-10 lg:pb-24 lg:pt-40">
        <div className="mb-8 text-xs uppercase tracking-[0.3em] text-velmora-taupe">
          <Link to="/shop" className="transition hover:text-velmora-gold">
            Shop
          </Link>
          <span className="mx-3">/</span>
          <span>{product.category}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <div>
            <div className="grid gap-4 md:grid-cols-[90px,1fr]">
              <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
                {gallery.map((image, index) => (
                  <button
                    key={`${product.id}-gallery-${index}`}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`overflow-hidden rounded-[18px] border bg-velmora-ivory ${
                      selectedImage === index
                        ? 'border-velmora-gold shadow-soft'
                        : 'border-velmora-line'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      alt={`${product.shortName} thumbnail ${index + 1}`}
                      className="aspect-[4/5] h-full w-full min-w-[78px] object-cover"
                      src={image}
                    />
                  </button>
                ))}
              </div>

              <div className="order-1 overflow-hidden rounded-[34px] border border-velmora-line bg-velmora-ivory shadow-card md:order-2">
                {gallery[selectedImage] ? (
                  <img
                    alt={product.shortName}
                    className="aspect-[4/5] h-full w-full object-cover"
                    src={gallery[selectedImage]}
                  />
                ) : null}
              </div>
            </div>
          </div>

          <div className="lg:pl-6">
            <p className="text-xs uppercase tracking-[0.34em] text-velmora-taupe">
              {product.category}
            </p>
            <h1
              id={`${product.id}-name`}
              className="mt-4 font-display text-4xl uppercase tracking-[0.22em] text-velmora-ink md:text-5xl"
            >
              {product.name}
            </h1>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-2xl text-velmora-ink">${product.price}</span>
              <StarRating rating={product.rating} reviewCount={product.reviewCount} />
            </div>
            <p id={`${product.id}-desc`} className="mt-6 max-w-xl text-base leading-8 text-velmora-muted">
              {product.description}
            </p>

            <div className="mt-8 border-t border-velmora-line pt-8">
              <p className="text-xs uppercase tracking-[0.32em] text-velmora-taupe">
                Tone
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.18em] transition ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                        : 'border-velmora-line bg-velmora-ivory text-velmora-ink hover:border-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-5 border-t border-velmora-line pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.32em] text-velmora-taupe">
                  Quantity
                </p>
                <QuantitySelector
                  value={quantity}
                  onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
                  onIncrease={() => setQuantity((current) => current + 1)}
                />
              </div>
              <button
                type="button"
                onClick={() => addToCart(product, quantity, selectedVariant)}
                className="w-full rounded-full bg-velmora-ink px-6 py-4 text-sm uppercase tracking-[0.25em] text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-ink sm:max-w-[320px]"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-line bg-velmora-ivory py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.34em] text-velmora-taupe">
              Related Styles
            </p>
            <h2 className="mt-3 font-display text-4xl text-velmora-ink">You may also like</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                priorityLabel="Pair With"
              />
            ))}
          </div>
        </div>
      </section>

      <div className="hidden">
        <p id={`${product.id}-details`}>{product.details}</p>
        <p id={`${product.id}-care`}>{product.care}</p>
        <p id={`${product.id}-shipping`}>{product.shipping}</p>
      </div>
    </div>
  )
}

export default ProductPage
