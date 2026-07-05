import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ChevronDown, Minus, Plus, ShoppingBag, Star } from 'lucide-react'
import { cn, formatPrice } from '@/lib/utils'
import { getProductById, getRelatedProducts, PLACEHOLDER_SVG } from '@/data/products'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/StarRating'
import ProductCard from '@/components/ProductCard'

const accordionSections = [
  { key: 'description', label: 'Description' },
  { key: 'materials', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = useMemo(() => getProductById(id), [id])
  const related = useMemo(() => getRelatedProducts(id, 4), [id])
  const { addToCart } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setSelectedImage(0)
    setQuantity(1)
  }, [id])

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 text-center md:px-6">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, variant, quantity)
  }

  return (
    <div className="pt-20 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <Link
          to="/shop"
          className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} /> Back to shop
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted">
              <img
                data-strk-img-id={product.images[selectedImage]}
                data-strk-img={`[${product.titleId}] [${product.descId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src={PLACEHOLDER_SVG}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3 md:grid-cols-5">
              {product.images.map((imgId, idx) => (
                <button
                  key={imgId}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    'relative aspect-square overflow-hidden rounded-md border bg-muted transition-all',
                    selectedImage === idx
                      ? 'border-foreground'
                      : 'border-border hover:border-muted-foreground'
                  )}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${product.titleId}] [${product.descId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src={PLACEHOLDER_SVG}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <h1
              id={product.titleId}
              className="product-name text-2xl font-medium md:text-3xl"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">
              {product.description}
            </p>
            <div className="mt-3 flex items-center gap-3">
              <StarRating rating={product.rating} />
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="mt-4 text-2xl font-light text-foreground">
              {formatPrice(product.price)}
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {/* Variant */}
            <div className="mt-8">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Metal Tone
              </span>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      'rounded-full border px-5 py-2 text-sm font-medium capitalize transition-all',
                      variant === v
                        ? 'border-foreground bg-foreground text-primary-foreground'
                        : 'border-border bg-card text-foreground hover:border-foreground'
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Quantity
              </span>
              <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card">
                <button
                  className="p-3"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-4 text-center text-sm">{quantity}</span>
                <button
                  className="p-3"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-md bg-accent py-4 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <ShoppingBag size={18} />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              {accordionSections.map((section) => (
                <div key={section.key} className="border-b border-border">
                  <button
                    onClick={() =>
                      setOpenAccordion((open) =>
                        open === section.key ? '' : section.key
                      )
                    }
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-semibold uppercase tracking-widest">
                      {section.label}
                    </span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        'text-muted-foreground transition-transform',
                        openAccordion === section.key && 'rotate-180'
                      )}
                    />
                  </button>
                  {openAccordion === section.key && (
                    <div className="pb-5 text-sm leading-relaxed text-muted-foreground">
                      {section.key === 'description' && product.description}
                      {section.key === 'materials' && product.materialsCare}
                      {section.key === 'shipping' && product.shippingReturns}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <h2 className="mb-8 font-serif text-2xl font-light md:text-3xl">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
