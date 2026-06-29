import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import AccordionItem from '@/components/ui/Accordion'
import QuantitySelector from '@/components/ui/QuantitySelector'
import RatingStars from '@/components/ui/RatingStars'
import ProductCard from '@/components/shop/ProductCard'
import { products } from '@/data/products'
import { useCart } from '@/hooks/useCart'

const imagePlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const ProductPage = () => {
  const { productId } = useParams()
  const { addItem } = useCart()
  const product = products.find((item) => item.id === productId)

  const [activeImage, setActiveImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState('Gold')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setActiveImage(0)
    setSelectedColor('Gold')
    setQuantity(1)
  }, [productId])

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== productId).slice(0, 3),
    [productId],
  )

  if (!product) {
    return (
      <main className="px-5 pb-24 pt-32 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl border border-[var(--color-border-subtle)] bg-[var(--color-card)] px-6 py-12 text-center shadow-[var(--shadow-soft)]">
          <h1 className="font-serif-display text-4xl text-[var(--color-text-primary)]">Product not found</h1>
          <Link to="/shop" className="mt-6 inline-block text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">
            Return to shop
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="px-5 pb-24 pt-32 md:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl space-y-16">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[var(--color-text-secondary)]">
          <Link to="/shop" className="transition hover:text-[var(--color-text-primary)]">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span>{product.category}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-5 md:grid-cols-[100px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
              {product.gallery.map((image, index) => {
                const thumbId = `${product.id}-thumb-${index}-title`

                return (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`relative min-w-[82px] overflow-hidden border ${activeImage === index ? 'border-[var(--color-accent)]' : 'border-[var(--color-border-subtle)]'}`}
                  >
                    <img
                      src={imagePlaceholder}
                      alt={product.name}
                      className="aspect-[4/5] h-full w-full object-cover"
                      data-strk-img-id={`${image.id}-thumb`}
                      data-strk-img={`[${thumbId}]`}
                      data-strk-img-ratio={image.ratio}
                      data-strk-img-width="240"
                    />
                    <span id={thumbId} className="sr-only">{product.name} thumbnail {index + 1}</span>
                  </button>
                )
              })}
            </div>

            <div className="order-1 overflow-hidden bg-[var(--color-surface-strong)] md:order-2">
              <img
                src={imagePlaceholder}
                alt={product.name}
                className="aspect-[4/5] h-full w-full object-cover"
                data-strk-img-id={`${product.gallery[activeImage].id}-main`}
                data-strk-img={product.gallery[activeImage].query}
                data-strk-img-ratio={product.gallery[activeImage].ratio}
                data-strk-img-width={product.gallery[activeImage].width}
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4 border-b border-[var(--color-border-subtle)] pb-8">
              <p className="text-xs uppercase tracking-[0.38em] text-[var(--color-accent)]">{product.category}</p>
              <h1 className="font-serif-display text-4xl uppercase tracking-[0.24em] text-[var(--color-text-primary)] md:text-5xl">
                {product.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-lg uppercase tracking-[0.26em] text-[var(--color-text-primary)]">
                  ${product.price}
                </span>
                <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
              </div>
              <p className="max-w-xl text-base leading-8 text-[var(--color-text-secondary)]">
                {product.longDescription}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.32em] text-[var(--color-text-secondary)]">
                  Variant
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => {
                    const active = selectedColor === color

                    return (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`px-5 py-3 text-xs uppercase tracking-[0.28em] transition ${active ? 'bg-[var(--color-accent)] text-[var(--color-ink)]' : 'border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)]'}`}
                      >
                        {color} tone
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.32em] text-[var(--color-text-secondary)]">
                  Quantity
                </p>
                <QuantitySelector value={quantity} onChange={setQuantity} />
              </div>

              <button
                type="button"
                onClick={() => addItem(product, { color: selectedColor, quantity })}
                className="w-full bg-[var(--color-accent)] px-6 py-4 text-xs uppercase tracking-[0.36em] text-[var(--color-ink)] transition hover:opacity-90"
              >
                Add to Cart
              </button>
            </div>

            <div className="border-t border-[var(--color-border-subtle)]">
              <AccordionItem title="Description" content={product.longDescription} />
              <AccordionItem title="Materials & Care" content={`${product.materials} ${product.care}`} />
              <AccordionItem title="Shipping & Returns" content={product.shipping} />
            </div>
          </div>
        </div>

        <section className="space-y-8">
          <div className="flex items-end justify-between gap-4 border-t border-[var(--color-border-subtle)] pt-10">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent)]">You may also like</p>
              <h2 className="mt-3 font-serif-display text-4xl text-[var(--color-text-primary)]">
                Continue your stack
              </h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

export default ProductPage
