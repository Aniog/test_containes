import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronRight } from 'lucide-react'
import { products } from '@/data/products'
import { formatPrice, cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import ProductGallery from '@/components/products/ProductGallery'
import ProductAccordion from '@/components/products/ProductAccordion'
import RelatedProducts from '@/components/products/RelatedProducts'
import Button from '@/components/ui/Button'

export default function ProductPage() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-brand-charcoal mb-4">
            Product Not Found
          </h1>
          <Link to="/shop" className="text-brand-gold hover:underline text-sm">
            Return to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  return (
    <div className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-brand-muted-light">
          <Link to="/" className="hover:text-brand-gold transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-brand-gold transition-colors">
            Shop
          </Link>
          <ChevronRight size={12} />
          <span className="text-brand-charcoal capitalize">{product.category}</span>
        </nav>
      </div>

      {/* Product layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Gallery */}
          <div>
            <ProductGallery product={product} />
          </div>

          {/* Right: Product info */}
          <div className="lg:py-4">
            {/* Tag */}
            {product.tag && (
              <span className="inline-block bg-brand-gold/10 text-brand-gold text-[10px] tracking-widest-xl uppercase py-1.5 px-3 mb-4">
                {product.tag}
              </span>
            )}

            {/* Name */}
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-wider uppercase text-brand-charcoal mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.floor(product.rating)
                        ? 'fill-brand-gold text-brand-gold'
                        : 'text-brand-divider-light'
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-brand-muted-light">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium text-brand-charcoal mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p className="text-sm text-brand-muted-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-8">
              <p className="text-xs tracking-widest-xl uppercase text-brand-charcoal mb-3 font-medium">
                Tone: <span className="text-brand-muted-light capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={cn(
                      'w-10 h-10 rounded-full border-2 transition-all duration-300',
                      selectedVariant === variant.id
                        ? 'border-brand-gold scale-110'
                        : 'border-brand-divider-light hover:border-brand-gold/50'
                    )}
                    style={{ backgroundColor: variant.color }}
                    aria-label={`Select ${variant.name} variant`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest-xl uppercase text-brand-charcoal mb-3 font-medium">
                Quantity
              </p>
              <div className="inline-flex items-center border border-brand-divider-light">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-brand-charcoal hover:bg-brand-cream transition-colors"
                >
                  -
                </button>
                <span className="w-12 h-10 flex items-center justify-center text-sm font-medium border-x border-brand-divider-light">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-brand-charcoal hover:bg-brand-cream transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart button */}
            <Button
              variant="primary"
              size="full"
              onClick={handleAddToCart}
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </Button>

            {/* Accordions */}
            <div className="mt-10">
              <ProductAccordion product={product} />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentProductId={product.id} />
    </div>
  )
}
