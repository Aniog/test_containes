import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, ChevronDown, ShoppingBag, Check } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/contexts/CartContext'
import { Button } from '@/components/ui/Button'
import { StarRating } from '@/components/ui/StarRating'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const related = getRelatedProducts(id, 4)
  const { addToCart, openCart } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.find((v) => v.inStock)?.id || ''
  )
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-sm underline hover:text-velmora-gold">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    const variant = product.variants.find((v) => v.id === selectedVariant)
    if (!variant || !variant.inStock) {
      toast.error('Please select an available option.')
      return
    }
    addToCart(product, selectedVariant, quantity)
    toast.success(`${product.name} added to cart`, {
      action: { label: 'View Cart', onClick: openCart },
    })
  }

  const accordions = [
    {
      id: 'desc',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'care',
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <ul className="list-disc pl-4 space-y-1 text-sm">
            {product.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
          <p className="text-sm text-velmora-muted">{product.care}</p>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders over $50. Standard delivery takes 5–8 business days. Express shipping available at checkout. We accept returns within 30 days of delivery — items must be unworn and in original packaging.',
    },
  ]

  return (
    <main className="pt-20 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-velmora-cream rounded-sm overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    'w-20 h-20 md:w-24 md:h-24 rounded-sm overflow-hidden border-2 transition-colors',
                    selectedImage === idx
                      ? 'border-velmora-gold'
                      : 'border-transparent hover:border-velmora-border-dark'
                  )}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-velmora-muted mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl tracking-wide uppercase">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-velmora-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="mt-5 font-serif text-2xl md:text-3xl text-velmora-charcoal">
              ${product.price}
            </p>
            <p className="mt-4 text-sm text-velmora-muted leading-relaxed">
              {product.tagline}
            </p>

            {/* Variants */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-wider font-medium mb-3">
                Finish
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => variant.inStock && setSelectedVariant(variant.id)}
                    disabled={!variant.inStock}
                    className={cn(
                      'px-5 py-2.5 text-xs uppercase tracking-wider font-medium border rounded-full transition-all',
                      selectedVariant === variant.id
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : variant.inStock
                        ? 'border-velmora-border-dark text-velmora-charcoal hover:border-velmora-charcoal'
                        : 'border-velmora-border text-velmora-muted/50 cursor-not-allowed line-through'
                    )}
                  >
                    {variant.label}
                    {!variant.inStock && (
                      <span className="ml-1 text-[10px] normal-case">
                        (Out of Stock)
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-wider font-medium mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-border rounded">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 hover:bg-velmora-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-sm font-medium min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 hover:bg-velmora-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-8">
              <Button
                onClick={handleAddToCart}
                className="w-full py-4 text-xs uppercase tracking-[0.2em]"
              >
                <ShoppingBag size={16} className="mr-2" />
                Add to Cart
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                'Free Shipping Over $50',
                '30-Day Returns',
                'Hypoallergenic',
                'Gift Box Included',
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-xs text-velmora-muted">
                  <Check size={14} className="text-velmora-gold shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-border">
              {accordions.map((item) => (
                <div key={item.id} className="border-b border-velmora-border">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === item.id ? null : item.id)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium uppercase tracking-wider">
                      {item.title}
                    </span>
                    <ChevronDown
                      size={16}
                      className={cn(
                        'transition-transform duration-300',
                        openAccordion === item.id && 'rotate-180'
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      openAccordion === item.id ? 'max-h-96 pb-4' : 'max-h-0'
                    )}
                  >
                    <div className="text-sm text-velmora-muted leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="border-t border-velmora-border bg-velmora-bg py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group"
              >
                <div className="aspect-[3/4] bg-velmora-cream rounded-sm overflow-hidden">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-serif text-sm tracking-wider uppercase">
                    {p.name}
                  </h3>
                  <p className="text-sm font-medium mt-1">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
