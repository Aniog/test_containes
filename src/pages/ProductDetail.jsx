import React, { useMemo, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronLeft, Minus, Plus, ShoppingBag, Truck, RefreshCcw } from 'lucide-react'
import { getProductBySlug, getRelatedProducts, formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { StrkImage } from '@/components/ui/StrkImage'
import { Button } from '@/components/ui/Button'
import { StarRating } from '@/components/ui/StarRating'
import { Accordion } from '@/components/ui/Accordion'
import { ProductCard } from '@/components/product/ProductCard'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = useMemo(() => getProductBySlug(slug), [slug])
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]?.id || '')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  const ref = useImageLoader([slug])

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-cream-50 pt-24 text-center">
        <h1 className="font-serif text-4xl text-espresso-900">Product Not Found</h1>
        <p className="mt-3 text-sm text-espresso-600">This piece is no longer available.</p>
        <Button variant="primary" size="md" className="mt-6" onClick={() => navigate('/shop')}>
          Back to Shop
        </Button>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <>
          <ul className="mb-3 list-disc space-y-1 pl-5">
            {product.materialsList.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <p>{product.care}</p>
        </>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: product.shipping,
    },
  ]

  const selectedVariantObj = product.variants.find((v) => v.id === selectedVariant)

  const handleAddToCart = () => {
    if (!selectedVariantObj?.inStock) return
    addItem(product, selectedVariant, quantity)
  }

  const titleId = `product-title-${product.id}`

  return (
    <main ref={ref} className="min-h-screen bg-cream-50 pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.12em] text-espresso-600 transition-colors hover:text-gold"
        >
          <ChevronLeft size={16} />
          Back
        </button>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden bg-cream-200">
              <StrkImage
                id={`product-gallery-${product.id}-${activeImage}`}
                query={`[${titleId}] ${product.images.gallery[activeImage].query}`}
                ratio="1x1"
                width={900}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-square overflow-hidden bg-cream-200 ${
                    activeImage === idx ? 'ring-2 ring-gold' : ''
                  }`}
                >
                  <StrkImage
                    id={`product-gallery-${product.id}-${idx}`}
                    query={`[${titleId}] ${img.query}`}
                    ratio="1x1"
                    width={300}
                    alt={`${product.name} view ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center lg:py-8">
            {product.badge && (
              <span className="w-fit bg-gold/10 px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-widest text-gold-dark">
                {product.badge}
              </span>
            )}
            <h1
              id={titleId}
              className="product-name mt-3 text-3xl text-espresso-900 md:text-4xl"
            >
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <StarRating rating={product.rating} />
              <span className="text-xs text-espresso-600">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 font-serif text-3xl text-espresso-900">
              {formatPrice(product.price)}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-espresso-600">
              {product.description}
            </p>

            <div className="mt-8">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-espresso-900">
                Finish
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    disabled={!variant.inStock}
                    className={`rounded-full border px-5 py-2 font-sans text-xs font-medium uppercase tracking-wide transition-all ${
                      selectedVariant === variant.id
                        ? 'border-espresso-900 bg-espresso-900 text-cream-50'
                        : 'border-cream-300 text-espresso-900 hover:border-gold'
                    } ${!variant.inStock ? 'cursor-not-allowed opacity-40 line-through' : ''}`}
                  >
                    {variant.name}
                    {!variant.inStock && ' — Sold Out'}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-espresso-900">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-cream-300">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-11 w-11 items-center justify-center text-espresso-900 transition-colors hover:bg-cream-200"
                >
                  <Minus size={14} />
                </button>
                <span className="flex h-11 w-12 items-center justify-center font-sans text-sm tabular-nums text-espresso-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-11 w-11 items-center justify-center text-espresso-900 transition-colors hover:bg-cream-200"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="mt-8 w-full gap-2"
              onClick={handleAddToCart}
              disabled={!selectedVariantObj?.inStock}
            >
              <ShoppingBag size={18} />
              {selectedVariantObj?.inStock ? 'Add to Cart' : 'Sold Out'}
            </Button>

            <div className="mt-6 flex flex-wrap gap-4 text-xs text-espresso-600">
              <span className="flex items-center gap-1.5">
                <Truck size={14} className="text-gold" /> Free shipping over $75
              </span>
              <span className="flex items-center gap-1.5">
                <RefreshCcw size={14} className="text-gold" /> 30-day returns
              </span>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-24 border-t border-cream-300 pt-16">
            <h2 className="text-center font-serif text-3xl text-espresso-900 md:text-4xl">
              You May Also Like
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4">
              {related.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
