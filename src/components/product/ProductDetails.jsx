import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { StarRating } from '@/components/ui/StarRating'
import { Button } from '@/components/ui/Button'
import { Accordion } from '@/components/ui/Accordion'
import { cn } from '@/lib/utils'

export default function ProductDetails({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <div>
            <p className="font-medium text-velmora-charcoal mb-1">Materials</p>
            <p>{product.materials}</p>
          </div>
          <div>
            <p className="font-medium text-velmora-charcoal mb-1">Care Instructions</p>
            <p>{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <p>Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout.</p>
          <p>We offer hassle-free 30-day returns. Items must be unworn and in original packaging. Refunds are processed within 5 business days of receiving your return.</p>
        </div>
      ),
    },
  ]

  return (
    <div className="md:pl-8 lg:pl-12">
      {/* Product name */}
      <h1 className="font-serif text-2xl md:text-3xl tracking-wider uppercase">
        {product.name}
      </h1>
      <p className="text-sm text-velmora-gray mt-1">{product.subtitle}</p>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-3">
        <StarRating rating={product.rating} size="md" />
        <span className="text-sm text-velmora-gray">{product.rating}</span>
        <span className="text-xs text-velmora-stone">({product.reviews} reviews)</span>
      </div>

      {/* Price */}
      <p className="font-serif text-2xl mt-4">${product.price}</p>

      {/* Variant selector */}
      <div className="mt-6">
        <p className="text-xs tracking-widest uppercase text-velmora-gray mb-3">Finish</p>
        <div className="flex gap-2">
          {product.variants.map((variant) => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={cn(
                'px-5 py-2 text-xs tracking-wider uppercase border transition-all duration-200',
                selectedVariant === variant
                  ? 'border-velmora-charcoal bg-velmora-charcoal text-velmora-cream'
                  : 'border-velmora-light text-velmora-gray hover:border-velmora-charcoal'
              )}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mt-6">
        <p className="text-xs tracking-widest uppercase text-velmora-gray mb-3">Quantity</p>
        <div className="inline-flex items-center border border-velmora-light">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 text-velmora-gray hover:text-velmora-charcoal transition-colors"
          >
            −
          </button>
          <span className="px-4 py-2 text-sm w-12 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 text-velmora-gray hover:text-velmora-charcoal transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <div className="mt-8">
        <Button
          variant={added ? 'accent' : 'primary'}
          size="lg"
          onClick={handleAddToCart}
          className="w-full"
        >
          {added ? 'Added to Cart' : 'Add to Cart'}
        </Button>
      </div>

      {/* Trust badges */}
      <div className="mt-6 flex items-center gap-4 text-xs text-velmora-gray">
        <span>Free Shipping</span>
        <span className="w-px h-3 bg-velmora-light" />
        <span>30-Day Returns</span>
        <span className="w-px h-3 bg-velmora-light" />
        <span>Hypoallergenic</span>
      </div>

      {/* Accordions */}
      <div className="mt-8">
        <Accordion items={accordionItems} />
      </div>
    </div>
  )
}
