import { Heart, Minus, Plus } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import RatingStars from '@/components/products/RatingStars.jsx'
import RelatedProducts from '@/components/products/RelatedProducts.jsx'
import AccordionItem from '@/components/ui/AccordionItem.jsx'
import { useCart } from '@/context/CartContext.jsx'
import { getProductBySlug } from '@/data/store.js'
import { cn, formatPrice } from '@/lib/utils.js'

const variants = ['Gold Tone', 'Silver Tone']

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [variant, setVariant] = useState('Gold Tone')
  const [quantity, setQuantity] = useState(1)

  const gallery = useMemo(() => {
    if (!product) return []

    return product.galleryPrompts.map((prompt, index) => ({
      id: `${product.id}-gallery-${index}`,
      prompt,
    }))
  }, [product])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <div className="bg-stone-950 pt-28 text-stone-100">
      <section className="section-shell pb-8 pt-6 text-xs uppercase tracking-[0.22em] text-stone-400">
        <Link to="/shop" className="transition hover:text-amber-200">
          Shop
        </Link>
        <span className="mx-3 text-stone-600">/</span>
        <span>{product.category}</span>
      </section>
      <section className="section-shell grid gap-10 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70">
            <img
              key={`product-${product.id}-image-${activeImageIndex}`}
              alt={product.name}
              className="aspect-[4/5] h-full w-full object-cover"
              data-strk-img-id={`product-${product.id}-image-${activeImageIndex}`}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {gallery.map((image, index) => (
              <button key={image.id} type="button" onClick={() => setActiveImageIndex(index)} className={cn('overflow-hidden rounded-[1.4rem] border bg-stone-900/60', activeImageIndex === index ? 'border-amber-200/60' : 'border-white/10')}>
                <img
                  alt={`${product.name} ${index + 1}`}
                  className="aspect-square h-full w-full object-cover"
                  data-strk-img-id={`product-${product.id}-image-${index}`}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-amber-200">{product.category}</p>
            <div className="space-y-4">
              <h1 id="product-title" className="font-display text-5xl tracking-luxe text-stone-100 sm:text-6xl">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <p className="text-lg uppercase tracking-[0.22em] text-stone-100">{formatPrice(product.price)}</p>
                <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
              </div>
            </div>
            <p id="product-description" className="max-w-xl text-base leading-8 text-stone-300">
              {product.description}
            </p>
          </div>

          <div className="space-y-5 rounded-[2rem] border border-white/10 bg-stone-900/70 p-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-100">Variant</p>
              <div className="flex flex-wrap gap-3">
                {variants.map((option) => (
                  <button key={option} type="button" className={cn('rounded-full border px-5 py-3 text-xs uppercase tracking-[0.24em]', variant === option ? 'border-amber-200/40 bg-amber-200 text-stone-950' : 'border-white/10 text-stone-300 hover:border-amber-200/30 hover:text-amber-200')} onClick={() => setVariant(option)}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-100">Quantity</p>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-stone-950/80 text-stone-100">
                <button type="button" aria-label="Decrease quantity" className="flex h-12 w-12 items-center justify-center text-stone-300 hover:text-stone-100" onClick={() => setQuantity((currentValue) => Math.max(1, currentValue - 1))}>
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center text-sm font-medium">{quantity}</span>
                <button type="button" aria-label="Increase quantity" className="flex h-12 w-12 items-center justify-center text-stone-300 hover:text-stone-100" onClick={() => setQuantity((currentValue) => currentValue + 1)}>
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="space-y-3">
              <button type="button" className="w-full rounded-full bg-amber-200 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-950 shadow-lg shadow-amber-200/20 transition hover:bg-amber-100" onClick={() => addItem(product, variant, quantity)}>
                Add to Cart
              </button>
              <button type="button" className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-4 text-sm uppercase tracking-[0.22em] text-stone-200 transition hover:border-white/20 hover:text-stone-100">
                <Heart className="h-4 w-4" />
                Save for Later
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-stone-900/70 px-6">
            <AccordionItem title="Description" content={product.details} defaultOpen />
            <AccordionItem title="Materials & Care" content={product.materialsCare} />
            <AccordionItem title="Shipping & Returns" content={product.shippingReturns} />
          </div>
        </div>
      </section>
      <RelatedProducts slug={product.slug} />
    </div>
  )
}
