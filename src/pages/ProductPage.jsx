import { Minus, Plus } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProductAccordion from '@/components/products/ProductAccordion'
import ProductCard from '@/components/products/ProductCard'
import StarRating from '@/components/shared/StarRating'
import { getProductBySlug, getRelatedProducts } from '@/data/store'
import { getStrkImageUrl } from '@/lib/strkImages'
import { formatCurrency } from '@/lib/utils'

const ProductPage = ({ onAddToCart }) => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedTone, setSelectedTone] = useState(product?.tones?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])

  useEffect(() => {
    if (!product) {
      return
    }

    setSelectedTone(product.tones?.[0] || 'Gold Tone')
    setQuantity(1)
    setSelectedImage(0)
  }, [product])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <main className="bg-brand-canvas px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <section className="grid gap-4 lg:grid-cols-[110px_minmax(0,1fr)]">
            <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
              {product.gallery.map((caption, index) => {
                const titleId = `${product.slug}-gallery-${index}-title`
                const descId = `${product.slug}-gallery-${index}-desc`
                const imageId = `${product.slug}-thumb-${index}-9b${index}`

                return (
                  <button
                    key={caption}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`overflow-hidden rounded-[1.5rem] border p-1 transition ${
                      selectedImage === index
                        ? 'border-brand-gold bg-white'
                        : 'border-stone-200/80 bg-white/70'
                    }`}
                  >
                    <span id={titleId} className="sr-only">
                      {product.name} image {index + 1}
                    </span>
                    <span id={descId} className="sr-only">
                      {caption}
                    </span>
                    <img
                      src={getStrkImageUrl(imageId)}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="aspect-square w-20 object-cover sm:w-24"
                      data-strk-img-id={imageId}
                      data-strk-img={`[${descId}] [${titleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="320"
                    />
                  </button>
                )
              })}
            </div>

            <div className="order-1 overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white/80 shadow-card lg:order-2">
              {product.gallery.map((caption, index) => {
                const titleId = `${product.slug}-main-${index}-title`
                const descId = `${product.slug}-main-${index}-desc`
                const imageId = `${product.slug}-main-${index}-4ad${index}`

                return (
                  <div key={caption} className={selectedImage === index ? 'block' : 'hidden'}>
                    <span id={titleId} className="sr-only">
                      {product.name}
                    </span>
                    <span id={descId} className="sr-only">
                      {caption}
                    </span>
                    <img
                      src={getStrkImageUrl(imageId)}
                      alt={`${product.name} image ${index + 1}`}
                      className="aspect-[4/5] w-full object-cover"
                      data-strk-img-id={imageId}
                      data-strk-img={`[${descId}] [${titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="1200"
                    />
                  </div>
                )
              })}
            </div>
          </section>

          <section className="rounded-[2.5rem] border border-stone-200/80 bg-white/75 p-6 shadow-card backdrop-blur-sm sm:p-8">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-brand-gold">{product.category}</p>
                <h1 className="mt-4 font-serif text-4xl uppercase tracking-luxe text-brand-text sm:text-5xl">
                  {product.name}
                </h1>
              </div>

              <div className="space-y-4">
                <span className="text-2xl font-medium text-brand-text">
                  {formatCurrency(product.price)}
                </span>
                <StarRating rating={product.rating} reviewCount={product.reviewCount} />
                <p className="max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
                  {product.shortDescription}
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.32em] text-stone-500">Tone</p>
                <div className="flex flex-wrap gap-3">
                  {product.tones.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={`rounded-full border px-5 py-3 text-sm transition ${
                        selectedTone === tone
                          ? 'border-brand-gold bg-brand-gold text-brand-ink'
                          : 'border-stone-200 bg-brand-canvas text-brand-text hover:border-brand-gold'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.32em] text-stone-500">Quantity</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center rounded-full border border-stone-200 bg-brand-canvas px-2 py-1">
                    <button
                      type="button"
                      onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                      className="rounded-full p-2 text-brand-text transition hover:bg-white"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-10 text-center text-sm font-medium text-brand-text">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((current) => current + 1)}
                      className="rounded-full p-2 text-brand-text transition hover:bg-white"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onAddToCart(product, selectedTone, quantity)}
                className="w-full rounded-full bg-brand-gold px-6 py-4 text-sm font-medium uppercase tracking-[0.24em] text-brand-ink transition hover:bg-brand-mist"
              >
                Add to Cart
              </button>

              <ProductAccordion items={accordionItems} />
            </div>
          </section>
        </div>

        <section className="space-y-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-brand-gold">Related pieces</p>
              <h2 className="mt-3 font-serif text-4xl text-brand-text">You may also like</h2>
            </div>
            <Link
              to="/shop"
              className="text-xs font-medium uppercase tracking-[0.28em] text-brand-text transition hover:text-brand-gold"
            >
              View all
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default ProductPage
