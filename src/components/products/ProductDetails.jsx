import { useState } from 'react'
import { Star, Minus, Plus, ShoppingBag, Truck, RotateCcw, ShieldCheck } from 'lucide-react'
import { getProductImageFallback } from '@/lib/productImages'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'

export default function ProductDetails({ product, relatedProducts = [] }) {
  const fields = product?.data ?? product ?? {}
  const { addItem } = useCart()

  const name = fields.name || 'Untitled'
  const price = fields.price ?? 0
  const category = (fields.category || 'Jewelry').replace(/^\w/, (c) => c.toUpperCase())
  const description =
    fields.description ||
    'A refined demi-fine piece designed to elevate everyday moments with quiet luxury.'
  const rating = fields.rating || 4.8
  const reviews = fields.reviewCount || 12
  const materialsCare = fields.materialsCare || '18K gold-plated brass, hypoallergenic. Clean gently with a soft cloth and store in a dry pouch.'
  const shippingReturns = fields.shippingReturns || 'Free worldwide shipping on orders over $50. Returns accepted within 30 days for unworn items in original packaging.'
  const fallbackImage = fields.imageUrl || getProductImageFallback(fields.slug)

  const [variant, setVariant] = useState(fields.variants?.[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const variants = fields.variants || ['gold', 'silver']

  const handleAddToCart = () => {
    addItem(
      {
        id: product.id,
        name,
        slug: fields.slug,
        price,
        imageQuery: fields.imageQuery,
        imageUrl: fallbackImage,
      },
      variant,
      quantity
    )
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-velmora-gold">
          {category}
        </p>
        <h1
          id={`product-${product.id}-name`}
          className="font-serif text-3xl font-medium uppercase tracking-[0.12em] text-velmora-espresso md:text-4xl"
        >
          {name}
        </h1>

        <div className="mt-3 flex items-center gap-3">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? 'fill-velmora-gold text-velmora-gold'
                    : 'text-velmora-taupe/40'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-velmora-taupe">
            {rating} ({reviews} reviews)
          </span>
        </div>

        <p className="mt-4 font-serif text-3xl text-velmora-espresso md:text-4xl">
          ${price.toFixed(2)}
        </p>
      </div>

      <p className="text-base leading-relaxed text-velmora-taupe">{description}</p>

      <div className="space-y-4">
        <div>
          <span className="mb-2 block text-sm font-medium text-velmora-espresso">Tone</span>
          <div className="flex flex-wrap gap-3">
            {variants.map((v) => (
              <button
                key={v}
                onClick={() => setVariant(v)}
                className={`rounded-full px-5 py-2 text-sm font-medium uppercase tracking-wider transition-all ${
                  variant === v
                    ? 'bg-velmora-espresso text-velmora-cream'
                    : 'border border-velmora-taupe/30 text-velmora-espresso hover:border-velmora-espresso'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="mb-2 block text-sm font-medium text-velmora-espresso">Quantity</span>
          <div className="inline-flex items-center rounded-md border border-velmora-taupe/30">
            <button
              className="px-4 py-2.5 text-velmora-taupe hover:text-velmora-espresso disabled:opacity-40"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-12 text-center text-sm font-medium text-velmora-espresso">
              {quantity}
            </span>
            <button
              className="px-4 py-2.5 text-velmora-taupe hover:text-velmora-espresso"
              onClick={() => setQuantity((q) => q + 1)}
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <Button
        onClick={handleAddToCart}
        className="h-14 w-full rounded-md bg-velmora-espresso text-sm font-semibold uppercase tracking-[0.15em] text-velmora-cream hover:bg-velmora-espresso-light transition-all"
      >
        {added ? (
          'Added to Cart'
        ) : (
          <span className="flex items-center justify-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            Add to Cart — ${(price * quantity).toFixed(2)}
          </span>
        )}
      </Button>

      <div className="grid grid-cols-3 gap-4 border-t border-velmora-taupe/15 pt-6">
        <div className="text-center">
          <Truck className="mx-auto h-5 w-5 text-velmora-gold" />
          <p className="mt-2 text-[11px] uppercase tracking-wider text-velmora-taupe">Free Shipping</p>
        </div>
        <div className="text-center">
          <RotateCcw className="mx-auto h-5 w-5 text-velmora-gold" />
          <p className="mt-2 text-[11px] uppercase tracking-wider text-velmora-taupe">30-Day Returns</p>
        </div>
        <div className="text-center">
          <ShieldCheck className="mx-auto h-5 w-5 text-velmora-gold" />
          <p className="mt-2 text-[11px] uppercase tracking-wider text-velmora-taupe">1-Year Warranty</p>
        </div>
      </div>

      <Accordion type="single" collapsible defaultValue="description" className="w-full">
        <AccordionItem value="description">
          <AccordionTrigger className="text-sm font-medium uppercase tracking-wider text-velmora-espresso">
            Description
          </AccordionTrigger>
          <AccordionContent>{description}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="materials">
          <AccordionTrigger className="text-sm font-medium uppercase tracking-wider text-velmora-espresso">
            Materials & Care
          </AccordionTrigger>
          <AccordionContent>{materialsCare}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="shipping">
          <AccordionTrigger className="text-sm font-medium uppercase tracking-wider text-velmora-espresso">
            Shipping & Returns
          </AccordionTrigger>
          <AccordionContent>{shippingReturns}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
