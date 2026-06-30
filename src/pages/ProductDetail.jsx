import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'
import Button from '@/components/ui/Button'
import TrustBar from '@/components/home/TrustBar'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-cream-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium text-espresso-800">{title}</span>
        {isOpen ? (
          <ChevronUp size={18} className="text-espresso-800/50" />
        ) : (
          <ChevronDown size={18} className="text-espresso-800/50" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-espresso-800/70 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const { addToCart } = useCart()
  
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [activeAccordion, setActiveAccordion] = useState('description')

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-espresso-800 mb-4">Product not found</h1>
          <Link to="/shop" className="text-gold hover:underline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant)
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="text-sm text-espresso-800/50">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-espresso-800">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-cream-200 rounded-lg overflow-hidden">
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
                  className={`w-20 h-20 rounded overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-espresso-800 text-cream-50 text-xs font-medium tracking-wide mb-4">
                {product.badge.toUpperCase()}
              </span>
            )}

            {/* Title */}
            <h1 className="font-serif text-2xl md:text-3xl text-espresso-800 uppercase tracking-wide mb-2">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-2xl font-medium text-espresso-800 mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-cream-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-espresso-800/60">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-espresso-800/70 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-sm font-medium text-espresso-800 mb-3">
                Finish: <span className="font-normal text-espresso-800/60 capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border rounded-full text-sm font-medium transition-all ${
                      selectedVariant === variant
                        ? 'border-espresso-800 bg-espresso-800 text-cream-50'
                        : 'border-cream-300 text-espresso-800 hover:border-espresso-800'
                    }`}
                  >
                    {variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <p className="text-sm font-medium text-espresso-800 mb-3">Quantity</p>
              <div className="flex items-center border border-cream-300 rounded w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-cream-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} className="text-espresso-800" />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-cream-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} className="text-espresso-800" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              variant="gold"
              size="lg"
              fullWidth
              onClick={handleAddToCart}
              className="mb-4"
            >
              Add to Bag
            </Button>

            {/* Product Details Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p className="mb-4">{product.description}</p>
                <p>{product.materials}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-3">
                  <p><strong>Materials:</strong> {product.materials}</p>
                  <p><strong>Care Instructions:</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Store in the provided pouch when not wearing</li>
                    <li>Avoid contact with water, perfume, and chemicals</li>
                    <li>Clean gently with a soft, dry cloth</li>
                    <li>Apply beauty products before putting on jewelry</li>
                  </ul>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <div className="space-y-3">
                  <p><strong>Shipping:</strong> Free worldwide shipping on all orders. Standard delivery takes 5-7 business days.</p>
                  <p><strong>Returns:</strong> We offer a 30-day return policy. Items must be unworn and in original packaging.</p>
                  <p><strong>Exchanges:</strong> Free exchanges within 30 days for different sizes or styles.</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 md:py-28 bg-cream-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-espresso-800 text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
