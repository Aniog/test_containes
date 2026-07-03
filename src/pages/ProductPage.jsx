import { Link, useParams } from 'react-router-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import { products, getProductBySlug } from '../data/products'
import ProductGallery from '../components/store/ProductGallery'
import RatingStars from '../components/store/RatingStars'
import QuantitySelector from '../components/ui/QuantitySelector'
import Button from '../components/ui/Button'
import Accordion from '../components/ui/Accordion'
import ProductCard from '../components/store/ProductCard'
import { useCart } from '../components/store/CartContext'
import { formatPrice } from '../lib/utils'
import { useStrkImages } from '../lib/useStrkImages'

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [selectedTone, setSelectedTone] = useState(product?.tones[0] ?? 'Gold Tone')
  const [quantity, setQuantity] = useState(1)

  useStrkImages(containerRef, [slug])

  useEffect(() => {
    setSelectedTone(product?.tones[0] ?? 'Gold Tone')
    setQuantity(1)
  }, [product])

  const relatedProducts = useMemo(
    () => products.filter((item) => item.slug !== slug).slice(0, 4),
    [slug],
  )

  if (!product) {
    return (
      <div className="bg-shell px-4 pb-20 pt-36 text-center md:px-8">
        <h1 className="font-serif text-5xl text-ink">Product not found</h1>
        <Link to="/shop" className="mt-6 inline-flex text-xs uppercase tracking-[0.24em] text-bronze">
          Return to shop
        </Link>
      </div>
    )
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materials },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div ref={containerRef} className="bg-shell px-4 pb-20 pt-32 text-ink md:px-8 md:pb-28">
      <div className="mx-auto max-w-7xl space-y-20">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <ProductGallery product={product} />

          <div className="space-y-8">
            <div className="space-y-4 border-b border-parchment pb-8">
              <p className="text-xs uppercase tracking-[0.24em] text-bronze">{product.category}</p>
              <h1 className="font-serif text-5xl uppercase tracking-luxe text-ink md:text-6xl">
                {product.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-2xl text-ink">{formatPrice(product.price)}</p>
                <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
              </div>
              <p className="max-w-xl text-base leading-8 text-stone">{product.shortDescription}</p>
            </div>

            <div className="space-y-5">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.24em] text-stone">Tone</p>
                <div className="flex flex-wrap gap-3">
                  {product.tones.map((tone) => {
                    const active = tone === selectedTone

                    return (
                      <button
                        key={tone}
                        type="button"
                        onClick={() => setSelectedTone(tone)}
                        className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.18em] transition ${
                          active
                            ? 'border-ink bg-obsidian text-shell'
                            : 'border-parchment bg-mist text-stone hover:border-champagne hover:text-ink'
                        }`}
                      >
                        {tone}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <QuantitySelector
                  quantity={quantity}
                  onDecrease={() => setQuantity((current) => Math.max(current - 1, 1))}
                  onIncrease={() => setQuantity((current) => current + 1)}
                />
                <Button
                  className="min-h-14 flex-1"
                  size="lg"
                  onClick={() => addItem(product, selectedTone, quantity)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>

            <Accordion items={accordionItems} />
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-bronze">You May Also Like</p>
              <h2 className="font-serif text-4xl text-ink md:text-5xl">Complete the edit</h2>
            </div>
            <Link to="/shop" className="hidden text-xs uppercase tracking-[0.24em] text-ink md:inline-flex">
              View All
            </Link>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onAddToCart={(entry) => addItem(entry, entry.tones[0], 1)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
