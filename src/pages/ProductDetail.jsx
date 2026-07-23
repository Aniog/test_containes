import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, Heart, Share2 } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'
import Button from '@/components/ui/Button'
import ProductCard from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  
  const [selectedVariant, setSelectedVariant] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [expandedAccordion, setExpandedAccordion] = useState('description')
  const [isWishlisted, setIsWishlisted] = useState(false)

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0])
      setActiveImage(0)
      setQuantity(1)
      setExpandedAccordion('description')
    }
  }, [product])

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [slug])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-charcoal-800 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold-500 hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  const handleAddToCart = () => {
    if (selectedVariant) {
      addItem(product, selectedVariant, quantity)
    }
  }

  const accordions = [
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
          <div>
            <h4 className="font-medium text-charcoal-800 mb-2">Materials</h4>
            <p className="text-charcoal-600">{product.materials}</p>
          </div>
          <div>
            <h4 className="font-medium text-charcoal-800 mb-2">Care Instructions</h4>
            <p className="text-charcoal-600">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-charcoal-800 mb-2">Shipping</h4>
            <p className="text-charcoal-600">{product.shipping}</p>
          </div>
          <div>
            <h4 className="font-medium text-charcoal-800 mb-2">Returns</h4>
            <p className="text-charcoal-600">{product.returns}</p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-charcoal-400">
          <Link to="/" className="hover:text-gold-500">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold-500">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal-700">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[4/5] bg-cream-100 overflow-hidden">
              <img
                data-strk-img-id="pdp-main-image"
                data-strk-img="[pdp-title] [pdp-desc] jewelry detail"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[activeImage].alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    'aspect-square bg-cream-100 overflow-hidden border-2 transition-colors',
                    activeImage === index
                      ? 'border-gold-500'
                      : 'border-transparent hover:border-cream-300'
                  )}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${index}`}
                    data-strk-img="[pdp-title] jewelry thumbnail"
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Hidden text for image interpolation */}
            <span id="pdp-title" className="hidden">{product.name}</span>
            <span id="pdp-desc" className="hidden">{product.description}</span>

            <h1 className="font-serif text-3xl md:text-4xl tracking-widest-xl uppercase text-charcoal-800 mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="font-serif text-2xl text-charcoal-800">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-charcoal-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <StarRating
              rating={product.rating}
              count={product.reviewCount}
              size="md"
              className="mb-6"
            />

            <p className="text-charcoal-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-charcoal-700 mb-3">
                Color: {selectedVariant?.name}
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'w-10 h-10 rounded-full border-2 transition-all',
                      selectedVariant?.id === variant.id
                        ? 'border-gold-500 ring-2 ring-gold-500 ring-offset-2'
                        : 'border-cream-300 hover:border-gold-400'
                    )}
                    style={{ backgroundColor: variant.color }}
                    aria-label={variant.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-charcoal-700 mb-3">
                Quantity
              </label>
              <div className="inline-flex items-center border border-cream-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-cream-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-cream-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              onClick={handleAddToCart}
              size="full"
              className="mb-4"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Add to Cart — {formatPrice(product.price * quantity)}
            </Button>

            {/* Action buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="flex-1 flex items-center justify-center gap-2 py-3 border border-cream-300 hover:border-gold-400 transition-colors"
              >
                <Heart
                  className={cn(
                    'w-5 h-5',
                    isWishlisted ? 'fill-red-500 text-red-500' : 'text-charcoal-600'
                  )}
                />
                <span className="text-sm font-medium">Wishlist</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-cream-300 hover:border-gold-400 transition-colors">
                <Share2 className="w-5 h-5 text-charcoal-600" />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>

            {/* Accordion */}
            <div className="mt-10 border-t border-cream-200">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-cream-200">
                  <button
                    onClick={() => setExpandedAccordion(
                      expandedAccordion === accordion.id ? null : accordion.id
                    )}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-medium text-charcoal-800 tracking-wide">
                      {accordion.title}
                    </span>
                    {expandedAccordion === accordion.id ? (
                      <ChevronUp className="w-5 h-5 text-charcoal-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-charcoal-400" />
                    )}
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      expandedAccordion === accordion.id
                        ? 'max-h-96 pb-4'
                        : 'max-h-0'
                    )}
                  >
                    <div className="text-charcoal-600 leading-relaxed">
                      {accordion.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl tracking-wider uppercase text-charcoal-800 text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
