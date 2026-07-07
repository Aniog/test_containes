import React, { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { StarRating } from '@/components/ui/StarRating'
import { QuantitySelector } from '@/components/ui/QuantitySelector'
import { Accordion } from '@/components/product/Accordion'
import { ProductCard } from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { productId } = useParams()
  const product = useMemo(() => products.find((p) => p.id === productId), [productId])
  const { addItem } = useCart()

  const [selectedTone, setSelectedTone] = useState(product?.tones?.[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 text-center">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm underline hover:text-velmora-gold">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = useMemo(
    () => products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4),
    [product]
  )

  const handleAddToCart = () => {
    addItem(product, quantity, selectedTone)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { title: 'Shipping & Returns', content: `${product.shipping} ${product.returns}` },
  ]

  return (
    <div className="min-h-screen bg-velmora-ivory pb-20 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="relative aspect-[4/5] overflow-hidden bg-velmora-linen">
              <img
                data-strk-img-id={`product-${product.id}-main-${activeImage}`}
                data-strk-img={`[product-${product.id}-name]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt={product.name}
                className="h-full w-full object-cover animate-fade-in"
                key={activeImage}
              />
              {product.images > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setActiveImage((i) => (i === 0 ? product.images - 1 : i - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-velmora-ivory/80 p-2 hover:bg-velmora-ivory transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveImage((i) => (i === product.images - 1 ? 0 : i + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-velmora-ivory/80 p-2 hover:bg-velmora-ivory transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {Array.from({ length: product.images }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-square overflow-hidden bg-velmora-linen border-2 transition-colors ${
                    activeImage === idx ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    data-strk-img-id={`product-${product.id}-thumb-${idx}`}
                    data-strk-img={`[product-${product.id}-name]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-velmora-gold">{product.category}</p>
            <h1
              id={`product-${product.id}-name`}
              className="mt-3 font-serif text-3xl uppercase tracking-extra-wide md:text-4xl"
            >
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-sm text-velmora-text-muted">{product.reviews} reviews</span>
            </div>
            <p className="mt-5 text-2xl font-medium text-velmora-text-dark">${product.price.toFixed(2)}</p>
            <p className="mt-6 text-base leading-relaxed text-velmora-text-muted">{product.description}</p>

            {product.tones.length > 1 && (
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.12em]">Tone</p>
                <div className="mt-3 flex gap-3">
                  {product.tones.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={`h-11 px-6 text-xs font-semibold uppercase tracking-[0.1em] border transition-colors ${
                        selectedTone === tone
                          ? 'border-velmora-charcoal bg-velmora-charcoal text-velmora-text-light'
                          : 'border-velmora-border bg-transparent text-velmora-text-dark hover:border-velmora-charcoal'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.12em]">Quantity</p>
              <div className="mt-3">
                <QuantitySelector value={quantity} onChange={setQuantity} />
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex-1 py-4 text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                  added
                    ? 'bg-velmora-gold text-velmora-charcoal'
                    : 'bg-velmora-charcoal text-velmora-text-light hover:bg-velmora-gold hover:text-velmora-charcoal'
                }`}
              >
                {added ? 'Added to Bag' : 'Add to Cart'}
              </button>
              <button
                type="button"
                className="flex h-[52px] w-[52px] items-center justify-center border border-velmora-border hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20 md:mt-28">
            <div className="mb-8 text-center">
              <h2 className="font-serif text-2xl md:text-3xl">You May Also Like</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
