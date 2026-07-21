import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, Minus, Plus, ShoppingBag, Check } from 'lucide-react'
import { getProductBySlug, products } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatPrice, cn } from '../lib/utils'
import { Button } from '../components/ui/Button'
import { ProductCard } from '../components/products/ProductCard'

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-warmgray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <span className="font-medium text-charcoal-900">{title}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-warmgray-500 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        )}
      >
        <div className="text-warmgray-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addToCart, isLoading } = useCart()
  
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const [justAdded, setJustAdded] = useState(false)

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0])
      setSelectedImage(0)
      setQuantity(1)
    }
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link to="/shop" className="text-gold-600 hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = async () => {
    setIsAdding(true)
    await addToCart(product.id, quantity, selectedVariant)
    setIsAdding(false)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 2000)
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.isBestseller))
    .slice(0, 4)

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm">
          <Link to="/" className="text-warmgray-500 hover:text-charcoal-900">Home</Link>
          <span className="mx-2 text-warmgray-300">/</span>
          <Link to="/shop" className="text-warmgray-500 hover:text-charcoal-900">Shop</Link>
          <span className="mx-2 text-warmgray-300">/</span>
          <span className="text-charcoal-900">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square rounded-lg overflow-hidden bg-warmgray-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    'w-20 h-20 rounded-lg overflow-hidden border-2 transition-all',
                    selectedImage === index
                      ? 'border-charcoal-900'
                      : 'border-transparent hover:border-warmgray-300'
                  )}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* Title & Price */}
            <div className="mb-6">
              <h1 className="product-name text-charcoal-900 mb-2">{product.name}</h1>
              <p className="text-warmgray-500 mb-3">{product.subtitle}</p>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-2xl text-charcoal-900">
                  {formatPrice(product.price)}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
                  <span className="text-sm text-warmgray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <p className="text-warmgray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-charcoal-900 mb-3">
                  Finish: {selectedVariant}
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={cn(
                        'px-4 py-2 rounded-full border-2 text-sm font-medium transition-all',
                        selectedVariant === variant
                          ? 'border-charcoal-900 bg-charcoal-900 text-cream-50'
                          : 'border-warmgray-300 hover:border-charcoal-900'
                      )}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-charcoal-900 mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-warmgray-300 rounded-lg w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-warmgray-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 font-medium min-w-[48px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-warmgray-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              disabled={isAdding || isLoading}
              loading={isAdding}
              variant="primary"
              size="full"
              className="mb-4"
            >
              {justAdded ? (
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Added to Bag
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Add to Bag · {formatPrice(product.price * quantity)}
                </span>
              )}
            </Button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 py-4 border-t border-warmgray-200 text-xs text-warmgray-500">
              <span className="flex items-center gap-1">
                <span>✓</span> Free Shipping
              </span>
              <span className="flex items-center gap-1">
                <span>✓</span> 30-Day Returns
              </span>
              <span className="flex items-center gap-1">
                <span>✓</span> Hypoallergenic
              </span>
            </div>

            {/* Accordions */}
            <div className="mt-6">
              <Accordion title="Details" defaultOpen>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-gold-500">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">{product.materials}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-3">
                  <strong>Free Worldwide Shipping</strong> on all orders. Delivery typically takes 5-10 business days.
                </p>
                <p>
                  <strong>30-Day Returns:</strong> Not quite right? Return unworn items in original packaging within 30 days for a full refund.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-warmgray-50/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal-900 text-center mb-10">
            You May Also Love
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
