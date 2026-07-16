import { Minus, Plus } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import ProductAccordions from '@/components/product/ProductAccordions'
import ProductGallery from '@/components/product/ProductGallery'
import RelatedProducts from '@/components/product/RelatedProducts'
import Button from '@/components/ui/Button'
import Stars from '@/components/ui/Stars'
import { useCart } from '@/context/CartContext'
import { useStrkImages } from '@/hooks/useStrkImages'
import { formatCurrency } from '@/lib/format'
import { getProductById } from '@/lib/products'
import { cn } from '@/lib/utils'

export default function ProductDetail() {
  const { productId } = useParams()
  const product = useMemo(() => getProductById(productId), [productId])
  const [selectedVariant, setSelectedVariant] = useState(product?.colors?.[0] ?? 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const containerRef = useStrkImages([productId, selectedVariant])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <div ref={containerRef} className="bg-velmora-ivory pt-28">
      <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <ProductGallery product={product} />

          <div className="space-y-7 rounded-[2rem] border border-velmora-sand/50 bg-velmora-ivory p-1 lg:pt-4">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-stone-500">{product.category}</p>
              <h1 id="product-title" className="mt-4 font-heading text-4xl uppercase tracking-luxe text-stone-900 sm:text-5xl">
                {product.name}
              </h1>
              <div className="mt-5 flex items-center justify-between gap-4">
                <Stars rating={product.rating} reviews={product.reviews} />
                <p className="text-xl font-medium text-stone-900">{formatCurrency(product.price)}</p>
              </div>
              <p id="product-short-description" className="mt-5 text-base leading-8 text-stone-600">
                {product.description}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Tone</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedVariant(color)}
                    className={cn(
                      'rounded-full border px-5 py-3 text-xs uppercase tracking-[0.26em] transition',
                      selectedVariant === color
                        ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory'
                        : 'border-velmora-sand/60 bg-white text-stone-600 hover:text-stone-900',
                    )}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Quantity</p>
              <div className="mt-4 flex items-center justify-between gap-4 rounded-full border border-velmora-sand/60 bg-white px-3 py-2 sm:max-w-[180px]">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-stone-600 transition hover:bg-velmora-ivory"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-medium text-stone-900">{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-stone-600 transition hover:bg-velmora-ivory"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-velmora-gold text-velmora-ink hover:bg-amber-300"
              onClick={() => addItem(product, selectedVariant, quantity)}
            >
              Add to Cart
            </Button>

            <ProductAccordions />
          </div>
        </div>
      </section>

      <RelatedProducts productId={product.id} />
    </div>
  )
}
