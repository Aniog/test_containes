import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '@/data/storeData'
import { useImageLoader } from '@/hooks/useImageLoader'
import ProductGallery from '@/components/product/ProductGallery'
import Button from '@/components/ui/Button'
import StarRating from '@/components/ui/StarRating'
import QuantitySelector from '@/components/ui/QuantitySelector'
import { Accordion } from '@/components/ui/Accordion'
import { useStore } from '@/context/StoreContext'
import { cn } from '@/lib/utils'
import RelatedProducts from '@/components/product/RelatedProducts'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((entry) => entry.slug === slug) || products[0]
  const [activeIndex, setActiveIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { selectedToneByProduct, setToneForProduct, addToCart } = useStore()
  const selectedTone = selectedToneByProduct[product.id] || product.toneOptions[0]
  const relatedProducts = useMemo(() => products.filter((entry) => entry.id !== product.id).slice(0, 4), [product.id])
  const containerRef = useImageLoader([slug, activeIndex])

  return (
    <div ref={containerRef}>
      <section className="page-shell py-28 pb-16 md:pb-24">
        <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-velmora-taupe">
          <Link to="/shop">Shop</Link>
          <span>·</span>
          <span>{product.category}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ProductGallery product={product} activeIndex={activeIndex} onChange={setActiveIndex} />

          <div className="lg:pt-4">
            <p className="text-xs uppercase tracking-[0.3em] text-velmora-taupe">{product.category}</p>
            <h1 className="mt-4 font-display text-4xl uppercase tracking-product text-velmora-ink md:text-5xl">{product.name}</h1>
            <div className="mt-5 flex items-center justify-between gap-4">
              <StarRating value={product.rating} reviews={product.reviews} />
              <p className="text-2xl font-medium text-velmora-ink">${product.price}</p>
            </div>
            <p className="mt-6 max-w-xl text-base leading-8 text-velmora-taupe">{product.description}</p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.28em] text-velmora-taupe">Tone</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.toneOptions.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    className={cn(
                      'rounded-full border px-5 py-3 text-xs uppercase tracking-[0.22em] transition',
                      selectedTone === tone
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-cream'
                        : 'border-velmora-sand bg-velmora-ivory text-velmora-taupe hover:border-velmora-gold hover:text-velmora-gold',
                    )}
                    onClick={() => setToneForProduct(product.id, tone)}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <QuantitySelector quantity={quantity} onChange={(value) => setQuantity(Math.max(1, value))} />
            </div>

            <Button className="mt-8 w-full" onClick={() => addToCart(product, quantity, selectedTone)}>
              Add to Cart
            </Button>

            <div className="mt-10">
              <Accordion
                items={[
                  { id: 'description', label: 'Description', content: product.details },
                  { id: 'care', label: 'Materials & Care', content: `${product.material}. ${product.care}` },
                  { id: 'shipping', label: 'Shipping & Returns', content: product.shipping },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} />
    </div>
  )
}
