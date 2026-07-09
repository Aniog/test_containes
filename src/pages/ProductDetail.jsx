import { Minus, Plus } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import RelatedProducts from '@/components/products/RelatedProducts'
import ProductGallery from '@/components/products/ProductGallery'
import Accordion from '@/components/ui/Accordion'
import Button from '@/components/ui/Button'
import Stars from '@/components/ui/Stars'
import { seedProducts, getProductBySlug } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/formatters'
import { useImageLoader } from '@/hooks/useImageLoader'

const ProductDetail = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const [variant, setVariant] = useState(product?.variants?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const containerRef = useImageLoader(`product-page-${slug}-${variant}`)

  const relatedProducts = useMemo(
    () => seedProducts.filter((item) => item.slug !== slug).slice(0, 4),
    [slug],
  )

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materialsCare },
    { title: 'Shipping & Returns', content: product.shippingReturns },
  ]

  return (
    <div ref={containerRef} className="bg-velmora-ivory">
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16 lg:px-8">
          <ProductGallery product={product} />

          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-velmora-mist">
              {product.category}
            </p>
            <h1 className="mt-4 font-display text-5xl uppercase tracking-product text-velmora-ink sm:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center gap-4">
              <p className="text-2xl font-medium text-velmora-ink">{formatPrice(product.price)}</p>
              <Stars value={product.rating} />
            </div>
            <p className="mt-6 text-sm leading-8 text-velmora-mist sm:text-base">
              {product.shortDescription}
            </p>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-ink">
                Tone
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.variants.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setVariant(option)}
                    className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.24em] transition ${
                      variant === option
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-noir'
                        : 'border-velmora-line bg-velmora-pearl text-velmora-mist hover:border-velmora-gold hover:text-velmora-ink'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-ink">
                Quantity
              </p>
              <div className="mt-4 inline-flex items-center gap-4 rounded-full border border-velmora-line bg-velmora-pearl px-4 py-3">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-5 text-center text-sm text-velmora-ink">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button className="mt-8 w-full" onClick={() => addItem(product, variant, quantity)}>
              Add to Cart
            </Button>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} />
    </div>
  )
}

export default ProductDetail
