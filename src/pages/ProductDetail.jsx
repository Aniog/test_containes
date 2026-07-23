import { Minus, Plus, Star } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { ProductAccordions } from '@/components/product/ProductAccordions'
import { ProductGallery } from '@/components/product/ProductGallery'
import { RelatedProducts } from '@/components/product/RelatedProducts'
import { Button } from '@/components/ui/Button'
import { getProductBySlug, products } from '@/data/storefront'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/format'
import { cn } from '@/lib/utils'

const ProductDetail = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const [selectedTone, setSelectedTone] = useState(product?.tones[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)

  const relatedProducts = useMemo(
    () => products.filter((entry) => entry.id !== product?.id).slice(0, 4),
    [product?.id],
  )

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <div className="bg-brand-parchment pt-28 md:pt-32">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 md:px-8 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        <ProductGallery product={product} />

        <div className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[2rem] border border-brand-line bg-white p-6 shadow-soft md:p-8">
            <div className="space-y-6">
              <div className="space-y-4 border-b border-brand-line pb-6">
                <p className="text-xs font-semibold uppercase tracking-overline text-brand-gold">
                  {product.category}
                </p>
                <h1
                  id={`product-page-${product.id}-title`}
                  className="text-2xl uppercase tracking-product text-brand-ink md:text-3xl"
                >
                  {product.name}
                </h1>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-2xl font-semibold text-brand-ink md:text-3xl">
                    {formatPrice(product.price)}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-brand-cocoa">
                    <div className="flex gap-1 text-brand-gold">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span>
                      {product.rating} ({product.reviewCount})
                    </span>
                  </div>
                </div>
                <p
                  id={`product-page-${product.id}-description`}
                  className="text-sm leading-7 text-brand-cocoa md:text-base"
                >
                  {product.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-overline text-brand-ink">
                    Select tone
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {product.tones.map((tone) => (
                      <button
                        key={tone}
                        type="button"
                        onClick={() => setSelectedTone(tone)}
                        className={cn(
                          'rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-overline transition',
                          selectedTone === tone
                            ? 'border-brand-ink bg-brand-ink text-brand-parchment'
                            : 'border-brand-line bg-brand-mist text-brand-ink hover:bg-brand-sand',
                        )}
                      >
                        {tone}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-overline text-brand-ink">
                    Quantity
                  </p>
                  <div className="flex items-center justify-between rounded-full border border-brand-line bg-brand-mist px-2 py-1">
                    <button
                      type="button"
                      onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                      className="rounded-full p-3 text-brand-ink"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-sm font-semibold text-brand-ink">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((value) => value + 1)}
                      className="rounded-full p-3 text-brand-ink"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <Button
                className="w-full justify-center"
                onClick={() => addItem(product, selectedTone, quantity)}
              >
                Add to Cart
              </Button>
            </div>
          </div>

          <ProductAccordions product={product} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
        <RelatedProducts products={relatedProducts} />
      </section>
    </div>
  )
}

export default ProductDetail
