import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import RatingStars from '@/components/shared/RatingStars'
import ProductGallery from '@/components/product/ProductGallery'
import ProductAccordion from '@/components/product/ProductAccordion'
import RelatedProducts from '@/components/product/RelatedProducts'
import { useCart } from '@/components/shared/CartContext'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { formatCurrency } from '@/lib/format'
import { useImageLoader } from '@/lib/useImageLoader'

const ProductPage = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0])
      setQuantity(1)
    }
  }, [product])

  useImageLoader(containerRef, [slug])

  if (!product) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 pt-32 text-center sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.35em] text-velvet-700">Product not found</p>
        <h1 className="mt-4 font-serif text-5xl text-velvet-950">This piece is no longer in the edit.</h1>
        <Link
          to="/shop"
          className="mt-8 rounded-full bg-velvet-950 px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-cream-50 transition hover:bg-velvet-900"
        >
          Return to shop
        </Link>
      </main>
    )
  }

  const accordionSections = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `${product.materials} To preserve shine, avoid water, perfume, and direct storage against harder metals.`,
    },
    {
      title: 'Shipping & Returns',
      content: product.shipping,
    },
  ]

  return (
    <main ref={containerRef} className="pb-20 pt-32">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-xs uppercase tracking-[0.3em] text-velvet-700">
          <Link to="/shop" className="transition hover:text-gold-500">
            Shop
          </Link>{' '}
          / {product.category}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ProductGallery product={product} />

          <div className="space-y-6 lg:pt-8">
            <div className="space-y-4 border-b border-velvet-200/70 pb-6">
              <p className="text-xs uppercase tracking-[0.35em] text-gold-500">{product.categoryLabel}</p>
              <h1
                id={`product-${product.slug}-title`}
                className="font-serif text-5xl uppercase leading-none tracking-[0.22em] text-velvet-950 sm:text-6xl"
              >
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-velvet-950">{formatCurrency(product.price)}</p>
              <RatingStars rating={product.rating} reviews={product.reviews} />
              <p id={`product-${product.slug}-desc`} className="max-w-xl text-base leading-7 text-velvet-700">
                {product.shortDescription} {product.description}
              </p>
            </div>

            <div className="space-y-5 rounded-[2rem] border border-velvet-200/70 bg-cream-100 p-6 shadow-editorial text-velvet-900">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-velvet-700">Finish</p>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.2em] transition ${
                        selectedVariant === variant
                          ? 'border-velvet-950 bg-velvet-950 text-cream-50'
                          : 'border-velvet-200 bg-cream-50 text-velvet-700 hover:border-gold-400 hover:text-gold-500'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-velvet-700">Quantity</p>
                <div className="inline-flex items-center rounded-full border border-velvet-200 bg-cream-50 p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="rounded-full p-3 text-velvet-900 transition hover:bg-cream-100"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                  <span className="min-w-12 text-center text-sm font-medium text-velvet-950">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="rounded-full p-3 text-velvet-900 transition hover:bg-cream-100"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => addItem({ slug: product.slug, variant: selectedVariant, quantity })}
                className="w-full rounded-full bg-gold-400 px-6 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-velvet-950 transition hover:bg-gold-300"
              >
                Add to Cart
              </button>
            </div>

            <ProductAccordion sections={accordionSections} />
          </div>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} />
    </main>
  )
}

export default ProductPage
