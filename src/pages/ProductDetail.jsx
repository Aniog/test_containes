import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronLeft, Minus, Plus, Heart } from 'lucide-react'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/ui/StarRating'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/ui/ProductCard'
import { formatPrice, cn } from '@/lib/utils'
import { toast } from 'sonner'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants.find((v) => v.available)?.id || product?.variants[0]?.id
  )
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl text-velmora-base">Product Not Found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-velmora-accent underline">
          Continue shopping
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.slug)

  const handleAddToCart = () => {
    const variant = product.variants.find((v) => v.id === selectedVariant)
    if (!variant || !variant.available) {
      toast.error('Selected variant is unavailable')
      return
    }
    addItem(product, selectedVariant, quantity)
    toast.success(`Added ${product.name} (${variant.label}) to cart`)
  }

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
        <div className="space-y-4">
          <ul className="list-disc space-y-1 pl-5">
            {product.materials.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <p className="font-medium">Care:</p>
          <ul className="list-disc space-y-1 pl-5">
            {product.care.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders over $50. Orders are processed within 1–2 business days and arrive within 5–10 business days depending on your location. We offer free 30-day returns on unworn items in original packaging.',
    },
  ]

  return (
    <div className="animate-fade-in">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-widest text-velmora-text-secondary transition-colors hover:text-velmora-base"
        >
          <ChevronLeft size={16} />
          Back
        </button>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden bg-stone-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-5 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    'aspect-square overflow-hidden border-2 bg-stone-100 transition-colors',
                    selectedImage === idx
                      ? 'border-velmora-accent'
                      : 'border-transparent hover:border-stone-300'
                  )}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-velmora-accent">
              {product.category}
            </p>
            <h1 className="mt-3 font-serif text-3xl font-medium uppercase tracking-widest-xl text-velmora-base md:text-4xl lg:text-5xl">
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-sm text-velmora-text-secondary">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <p className="mt-5 font-serif text-2xl font-medium text-velmora-base">
              {formatPrice(product.price)}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-velmora-text-secondary">
              {product.description}
            </p>

            <div className="mt-8">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-velmora-base">
                Metal Tone
              </span>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    type="button"
                    disabled={!variant.available}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={cn(
                      'flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all',
                      selectedVariant === variant.id
                        ? 'border-velmora-base bg-velmora-base text-white'
                        : 'border-stone-300 text-velmora-base hover:border-velmora-base',
                      !variant.available && 'cursor-not-allowed opacity-40 line-through'
                    )}
                  >
                    <span
                      className="h-3 w-3 rounded-full border border-stone-300"
                      style={{ backgroundColor: variant.color }}
                    />
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-velmora-base">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-stone-300">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-velmora-text-secondary hover:text-velmora-base"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 text-velmora-text-secondary hover:text-velmora-base"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 bg-velmora-accent py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-velmora-base transition-colors hover:bg-velmora-accent-dark hover:text-white"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="border border-stone-300 px-4 text-velmora-text-secondary transition-colors hover:border-velmora-base hover:text-velmora-base"
                aria-label="Add to wishlist"
              >
                <Heart size={20} />
              </button>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} defaultOpen={['description']} />
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-stone-200 bg-velmora-surface py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center font-serif text-2xl font-medium text-velmora-base md:text-3xl">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 lg:gap-x-6">
              {related.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
