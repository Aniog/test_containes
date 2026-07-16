import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Star } from 'lucide-react'
import ProductGallery from '@/components/store/ProductGallery'
import AccordionGroup from '@/components/store/AccordionGroup'
import ProductCard from '@/components/store/ProductCard'
import { useCart } from '@/components/store/CartProvider'
import { formatPrice } from '@/lib/format'
import { getProductBySlug, products } from '@/lib/store-data'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const [selectedTone, setSelectedTone] = useState(product?.tones[0] ?? 'Gold Tone')
  const [quantity, setQuantity] = useState(1)

  const relatedProducts = useMemo(
    () => products.filter((item) => item.slug !== slug).slice(0, 3),
    [slug],
  )

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <main className="bg-velmora-ivory pt-28 sm:pt-32">
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link to="/shop" className="text-xs uppercase tracking-editorial text-velmora-muted transition hover:text-velmora-accent">
            Back to shop
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <ProductGallery product={product} />

            <div className="space-y-6 rounded-[2rem] border border-velmora-line/70 bg-velmora-paper p-6 text-velmora-ink shadow-velmora-card sm:p-8">
              <div>
                <p className="text-xs uppercase tracking-editorial text-velmora-muted">{product.category}</p>
                <h1 className="mt-3 font-serif text-4xl uppercase tracking-product text-velmora-ink sm:text-5xl">
                  {product.name}
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <p className="text-2xl font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
                  <div className="flex items-center gap-1 text-velmora-accent">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-velmora-muted">
                      {product.rating.toFixed(1)} · {product.reviews} reviews
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-base leading-8 text-velmora-muted">{product.description}</p>

              <div>
                <p className="text-xs uppercase tracking-editorial text-velmora-ink">Tone</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.tones.map((tone) => {
                    const isActive = selectedTone === tone
                    return (
                      <button
                        key={tone}
                        type="button"
                        onClick={() => setSelectedTone(tone)}
                        className={`rounded-full border px-4 py-2 text-sm transition ${
                          isActive
                            ? 'border-velmora-accent bg-velmora-accent text-velmora-ink'
                            : 'border-velmora-line/70 bg-velmora-ivory text-velmora-ink hover:border-velmora-accent'
                        }`}
                      >
                        {tone}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-editorial text-velmora-ink">Quantity</p>
                <div className="mt-3 inline-flex items-center rounded-full border border-velmora-line/70 bg-velmora-ivory p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="rounded-full px-3 py-2 text-velmora-ink transition hover:bg-velmora-sand"
                  >
                    −
                  </button>
                  <span className="min-w-10 text-center text-sm font-medium text-velmora-ink">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="rounded-full px-3 py-2 text-velmora-ink transition hover:bg-velmora-sand"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => addItem(product, selectedTone, quantity)}
                className="w-full rounded-full bg-velmora-accent px-6 py-4 text-sm font-semibold text-velmora-ink transition hover:bg-velmora-accent-deep"
              >
                Add to Cart
              </button>

              <AccordionGroup
                items={[
                  {
                    title: 'Description',
                    content: product.description,
                  },
                  {
                    title: 'Materials & Care',
                    content: product.materials,
                  },
                  {
                    title: 'Shipping & Returns',
                    content: product.shipping,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-editorial text-velmora-muted">You may also like</p>
            <h2 className="mt-3 font-serif text-4xl text-velmora-ink">Complete the edit</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard
                key={item.slug}
                product={item}
                context="related"
                sectionId="related-products-title"
                onAddToCart={addItem}
              />
            ))}
          </div>
          <span id="related-products-title" className="sr-only">
            Related products for {product.name}
          </span>
        </div>
      </section>
    </main>
  )
}
