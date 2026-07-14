import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronRight, Check } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/products/ProductCard'
import { toast } from 'sonner'

const ProductDetail = () => {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const { addItem, setCartOpen } = useCart()
  
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-stone-900 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-amber-700 hover:text-amber-800">
            Return to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setCartOpen(true)
    toast.success(`${product.name} added to bag`)
  }

  const accordionItems = [
    {
      title: 'Description',
      content: (
        <div className="space-y-4">
          <p>{product.description}</p>
          <p>{product.details}</p>
        </div>
      )
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-4">
          <p>Our jewelry is crafted from 18k gold-plated brass, designed to be durable and tarnish-resistant with proper care.</p>
          <ul className="list-disc list-inside space-y-2 text-stone-600">
            <li>Store in a dry place, away from direct sunlight</li>
            <li>Avoid contact with perfumes, lotions, and harsh chemicals</li>
            <li>Clean with a soft, dry cloth</li>
            <li>Remove before swimming or exercising</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4">
          <p><strong>Free Worldwide Shipping</strong> on all orders over $50. Standard delivery takes 5-7 business days.</p>
          <p>We offer a 30-day return policy for unworn items in original packaging. Contact us at support@velmora.com to initiate a return.</p>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-stone-500 hover:text-stone-700">Home</Link>
          <ChevronRight className="w-4 h-4 text-stone-400" />
          <Link to="/shop" className="text-stone-500 hover:text-stone-700">Shop</Link>
          <ChevronRight className="w-4 h-4 text-stone-400" />
          <span className="text-stone-900">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] bg-stone-100 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.imageAlts[selectedImage]}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 bg-stone-100 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-stone-900' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={product.imageAlts[index]}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-8">
            <h1 className="font-serif text-3xl md:text-4xl text-stone-900 uppercase tracking-wider mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-stone-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-stone-600 text-sm">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl text-stone-900 font-medium mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-stone-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-stone-900 mb-3">
                Tone
              </label>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border text-sm tracking-widest uppercase font-medium transition-colors ${
                      selectedVariant === variant
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-300 text-stone-700 hover:border-stone-400'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-stone-900 mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 border border-stone-300 flex items-center justify-center hover:border-stone-400 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4 text-stone-600" />
                </button>
                <span className="text-stone-900 text-lg w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 border border-stone-300 flex items-center justify-center hover:border-stone-400 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4 text-stone-600" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-stone-900 text-white py-4 text-sm tracking-widest uppercase font-medium hover:bg-stone-800 transition-colors mb-4"
            >
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 text-stone-500 text-sm">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-700" />
                Free Shipping
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-700" />
                30-Day Returns
              </span>
            </div>

            {/* Accordions */}
            <div className="mt-12">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="font-serif text-2xl md:text-3xl text-stone-900 mb-12 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
