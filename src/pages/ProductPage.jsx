import { useMemo, useRef, useState } from 'react'
import { Heart, Minus, Plus } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ProductAccordions from '@/components/store/ProductAccordions'
import ProductGallery from '@/components/store/ProductGallery'
import ProductGrid, { StarRating } from '@/components/store/ProductGrid'
import QuantitySelector from '@/components/store/QuantitySelector'
import { useCart } from '@/context/CartContext'
import {
  formatPrice,
  getProductBySlug,
  getRelatedProducts,
} from '@/data/storeData'
import { useImageLoader } from '@/hooks/useImageLoader'

function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])
  const [selectedTone, setSelectedTone] = useState(product?.tones?.[0] ?? 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useImageLoader(containerRef, [slug, selectedTone])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-porcelain px-4 pt-28 text-center">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-luxe text-champagne">Not found</p>
          <h1 className="text-4xl">This piece is no longer in our collection.</h1>
          <Link
            to="/shop"
            className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-ivory transition hover:bg-obsidian"
          >
            Return to shop
          </Link>
        </div>
      </div>
    )
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    {
      title: 'Materials & Care',
      content: `${product.materials} To maintain shine, avoid water, perfume, and harsh cleaners. Store in the Velmora pouch between wears.`,
    },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div ref={containerRef} className="bg-porcelain pt-28">
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ProductGallery product={product} />

          <div className="lg:sticky lg:top-28">
            <div className="space-y-6 rounded-[2rem] border border-mist/70 bg-ivory p-6 shadow-soft sm:p-8">
              <div className="space-y-4 border-b border-mist/70 pb-6">
                <p className="text-xs uppercase tracking-luxe text-champagne">{product.category}</p>
                <h1 id="pdp-title" className="max-w-lg text-4xl uppercase tracking-[0.18em] sm:text-5xl">
                  {product.name}
                </h1>
                <div className="flex items-center justify-between gap-4">
                  <StarRating rating={product.rating} reviewCount={product.reviewCount} />
                  <p className="font-serif text-3xl text-ink">{formatPrice(product.price)}</p>
                </div>
                <p id="pdp-description" className="text-sm leading-7 text-ink/72 sm:text-base">
                  {product.shortDescription}
                </p>
              </div>

              <div className="space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.22em] text-ink/65">Tone</span>
                    <span className="text-sm text-ink/70">{selectedTone}</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.tones.map((tone) => {
                      const isActive = tone === selectedTone

                      return (
                        <button
                          key={tone}
                          type="button"
                          onClick={() => setSelectedTone(tone)}
                          className={`rounded-full border px-4 py-3 text-sm transition ${isActive ? 'border-ink bg-ink text-ivory' : 'border-mist bg-porcelain text-ink hover:border-champagne'}`}
                        >
                          {tone}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.22em] text-ink/65">Quantity</span>
                    <QuantitySelector value={quantity} onChange={setQuantity} />
                  </div>
                  <button
                    type="button"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-mist text-ink transition hover:border-champagne"
                    aria-label="Save to wishlist"
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => addItem(product, selectedTone, quantity)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-medium uppercase tracking-[0.22em] text-ivory transition hover:bg-obsidian"
                >
                  Add to Cart
                </button>

                <div className="grid gap-3 rounded-2xl border border-mist/70 bg-porcelain/70 p-4 text-sm text-ink/72 sm:grid-cols-3">
                  <div className="flex items-center gap-2">
                    <Plus className="h-4 w-4 text-champagne" />
                    Free shipping over $75
                  </div>
                  <div className="flex items-center gap-2">
                    <Minus className="h-4 w-4 text-champagne" />
                    Hypoallergenic finish
                  </div>
                  <div className="flex items-center gap-2">
                    <Plus className="h-4 w-4 text-champagne" />
                    30-day returns
                  </div>
                </div>
              </div>

              <ProductAccordions items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-mist/70 bg-sand/35">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-luxe text-champagne">Related pieces</p>
              <h2 id="related-title" className="text-4xl">
                You may also like
              </h2>
              <p id="related-subtitle" className="max-w-2xl text-sm leading-7 text-ink/70 sm:text-base">
                Style companions chosen to layer seamlessly with {product.shortName.toLowerCase()}.
              </p>
            </div>
            <Link
              to="/shop"
              className="hidden border-b border-champagne pb-1 text-sm uppercase tracking-[0.22em] text-ink transition hover:text-champagne md:inline-flex"
            >
              View collection
            </Link>
          </div>

          <ProductGrid
            products={relatedProducts}
            sectionId="related"
            titleId="related-title"
            descriptionId="related-subtitle"
          />
        </div>
      </section>
    </div>
  )
}

export default ProductPage
