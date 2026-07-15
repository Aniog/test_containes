import { Minus, Plus } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductAccordionList from '@/components/product/ProductAccordionList.jsx'
import ProductGallery from '@/components/product/ProductGallery.jsx'
import RelatedProducts from '@/components/product/RelatedProducts.jsx'
import Button from '@/components/ui/Button.jsx'
import RatingStars from '@/components/ui/RatingStars.jsx'
import { useCart } from '@/context/CartContext.jsx'
import { getProductById, getRelatedProducts } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'
import { formatCurrency } from '@/lib/formatters'
import NotFound from '@/pages/NotFound.jsx'

export default function ProductDetail() {
  const { productId } = useParams()
  const product = getProductById(productId)
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedTone, setSelectedTone] = useState(product?.tones?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const containerRef = useStrkImages([activeIndex])
  const relatedProducts = useMemo(() => getRelatedProducts(productId), [productId])

  if (!product) {
    return <NotFound />
  }

  return (
    <div className="bg-velmora-ivory" ref={containerRef}>
      <section className="px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <ProductGallery activeIndex={activeIndex} onChange={setActiveIndex} product={product} />

          <div className="space-y-8">
            <div className="space-y-5 border-b border-velmora-mist pb-8">
              <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">
                {product.category}
              </p>
              <h1
                className="font-serif text-5xl uppercase leading-none tracking-product text-velmora-ink sm:text-6xl"
                id={`pdp-${product.id}-title`}
              >
                {product.name}
              </h1>
              <p className="text-sm uppercase tracking-product text-velmora-taupe">
                {formatCurrency(product.price)}
              </p>
              <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
              <p
                className="max-w-xl text-base leading-8 text-velmora-taupe"
                id={`pdp-${product.id}-desc`}
              >
                {product.description}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">Tone</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.tones.map((tone) => (
                    <button
                      className={`rounded-full border px-5 py-3 text-xs uppercase tracking-product transition ${
                        tone === selectedTone
                          ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                          : 'border-velmora-mist bg-velmora-porcelain text-velmora-taupe hover:border-velmora-gold hover:text-velmora-gold'
                      }`}
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      type="button"
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">Quantity</p>
                <div className="mt-3 inline-flex items-center rounded-full border border-velmora-mist bg-velmora-porcelain">
                  <button
                    aria-label="Decrease quantity"
                    className="p-4 text-velmora-taupe transition hover:text-velmora-gold"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    type="button"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-10 text-center text-sm text-velmora-ink">{quantity}</span>
                  <button
                    aria-label="Increase quantity"
                    className="p-4 text-velmora-taupe transition hover:text-velmora-gold"
                    onClick={() => setQuantity((current) => current + 1)}
                    type="button"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <Button
                className="w-full"
                onClick={() => addItem(product, selectedTone, quantity)}
                type="button"
              >
                Add to Cart
              </Button>
            </div>

            <ProductAccordionList product={product} />
          </div>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} />
    </div>
  )
}
