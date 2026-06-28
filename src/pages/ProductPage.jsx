import { Minus, Plus, ShieldCheck, Star, Truck } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import { getPlaceholderImage } from '@/lib/placeholders'
import { formatCurrency } from '@/lib/utils'

function ProductPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug) || products[0]
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const { addItem } = useCart()

  const relatedProducts = useMemo(
    () =>
      product.related
        .map((relatedId) => products.find((item) => item.id === relatedId))
        .filter(Boolean),
    [product.related],
  )

  useEffect(() => {
    setSelectedVariant(product.variants[0])
    setQuantity(1)
    setActiveImage(0)
  }, [product])

  const activePrompt = product.galleryPrompts[activeImage] || product.galleryPrompts[0]
  const activeTitleId = `${product.slug}-active-title`
  const activePromptId = `${product.slug}-active-prompt`
  const mainImageSrc = getPlaceholderImage({
    title: product.name,
    subtitle: activePrompt,
    ratio: '4x3',
    mood: 'product',
  })

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1360px] space-y-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
          <section className="space-y-4">
            <div className="overflow-hidden rounded-[2rem] border border-sand bg-ivory shadow-card">
              <img
                alt={product.name}
                className="aspect-[4/5] w-full object-cover"
                data-strk-img-id={`${product.slug}-gallery-main-${activeImage}`}
                data-strk-img={`[${activePromptId}] [${activeTitleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src={mainImageSrc}
              />
              <span id={activeTitleId} className="sr-only">
                {product.name}
              </span>
              <span id={activePromptId} className="sr-only">
                {activePrompt}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {product.galleryPrompts.map((prompt, index) => {
                const thumbTitleId = `${product.slug}-thumb-${index}-title`
                const thumbPromptId = `${product.slug}-thumb-${index}-prompt`

                const thumbSrc = getPlaceholderImage({
                  title: product.name,
                  subtitle: prompt,
                  ratio: '3x4',
                  mood: 'product',
                })

                return (
                  <button
                    key={prompt}
                    type="button"
                    className={`overflow-hidden rounded-[1.2rem] border bg-ivory ${
                      activeImage === index ? 'border-gold' : 'border-sand'
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      alt={`${product.name} view ${index + 1}`}
                      className="aspect-[4/5] w-full object-cover"
                      data-strk-img-id={`${product.slug}-thumb-${index}`}
                      data-strk-img={`[${thumbPromptId}] [${thumbTitleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="320"
                      src={thumbSrc}
                    />
                    <span id={thumbTitleId} className="sr-only">
                      {product.name}
                    </span>
                    <span id={thumbPromptId} className="sr-only">
                      {prompt}
                    </span>
                  </button>
                )
              })}
            </div>
          </section>

          <section className="lg:sticky lg:top-24">
            <div className="space-y-8 rounded-[2rem] border border-sand bg-ivory p-6 text-ink shadow-soft sm:p-8 lg:p-10">
              <div className="space-y-3 border-b border-sand pb-6">
                <p
                  id="product-category"
                  className="text-xs uppercase tracking-[0.34em] text-ink/55"
                >
                  {product.category}
                </p>
                <h1
                  id="product-name"
                  className="font-serif text-4xl uppercase tracking-[0.28em] text-ink sm:text-5xl"
                >
                  {product.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-ink/68">
                  <span className="text-xl font-medium text-ink">
                    {formatCurrency(product.price)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star className="h-4 w-4 fill-gold text-gold" />
                    {product.rating} · {product.reviewCount} reviews
                  </span>
                </div>
                <p className="max-w-xl text-base leading-7 text-ink/72">
                  {product.description}
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.34em] text-ink/55">Finish</p>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant) => (
                      <button
                        key={variant}
                        type="button"
                        className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition ${
                          selectedVariant === variant
                            ? 'border-gold bg-gold text-ink'
                            : 'border-sand bg-pearl text-ink/75 hover:border-gold'
                        }`}
                        onClick={() => setSelectedVariant(variant)}
                      >
                        {variant}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.34em] text-ink/55">Quantity</p>
                  <div className="inline-flex items-center rounded-full border border-sand bg-pearl">
                    <button
                      type="button"
                      className="rounded-full p-3 text-ink transition hover:text-gold"
                      onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-10 text-center text-sm text-ink">{quantity}</span>
                    <button
                      type="button"
                      className="rounded-full p-3 text-ink transition hover:text-gold"
                      onClick={() => setQuantity((value) => value + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  className="flex min-h-13 w-full items-center justify-center rounded-full bg-gold px-6 text-sm font-medium text-ink transition hover:bg-gold-deep"
                  onClick={() => addItem(product, selectedVariant, quantity)}
                >
                  Add to Cart
                </button>

                <div className="grid gap-3 rounded-[1.5rem] border border-sand bg-pearl/70 p-4 text-sm text-ink/72 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <Truck className="mt-0.5 h-4 w-4 text-gold" />
                    <p>Free shipping over $75 and easy worldwide delivery.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-gold" />
                    <p>Hypoallergenic materials and 30-day returns.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 border-t border-sand pt-6">
                <details className="group rounded-[1.25rem] border border-sand bg-pearl/70 px-5 py-4" open>
                  <summary className="cursor-pointer list-none text-xs uppercase tracking-[0.34em] text-ink">
                    Description
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-ink/68">{product.description}</p>
                </details>
                <details className="group rounded-[1.25rem] border border-sand bg-pearl/70 px-5 py-4">
                  <summary className="cursor-pointer list-none text-xs uppercase tracking-[0.34em] text-ink">
                    Materials & Care
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-ink/68">
                    {product.materialsCare}
                  </p>
                </details>
                <details className="group rounded-[1.25rem] border border-sand bg-pearl/70 px-5 py-4">
                  <summary className="cursor-pointer list-none text-xs uppercase tracking-[0.34em] text-ink">
                    Shipping & Returns
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-ink/68">
                    {product.shippingReturns}
                  </p>
                </details>
              </div>
            </div>
          </section>
        </div>

        <section className="space-y-8">
          <div className="flex items-end justify-between gap-6 border-b border-sand pb-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.34em] text-ink/55">You may also like</p>
              <h2 className="font-serif text-4xl text-ink sm:text-5xl">More to layer and gift</h2>
            </div>
            <Link
              className="hidden text-xs uppercase tracking-[0.28em] text-ink/55 transition hover:text-gold md:inline"
              to="/shop"
            >
              Back to shop
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductPage
