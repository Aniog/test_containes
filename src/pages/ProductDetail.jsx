import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Star, ShoppingBag, ChevronLeft, Plus, Minus } from 'lucide-react'
import { useCart } from '../context/CartContext'
import products from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  
  const product = products.find(p => p.id === parseInt(id))
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeAccordion, setActiveAccordion] = useState(null)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-4xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-amber-600 hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant)
  }

  const accordionItems = [
    {
      title: 'Description',
      content: product.description
    },
    {
      title: 'Materials & Care',
      content: `Material: ${product.material}\n\nCare Instructions: Avoid contact with water, perfume, and cosmetics. Store in a cool, dry place. Clean gently with a soft cloth.`
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day return policy. See our shipping page for more details.'
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-sm text-gray-600 hover:text-amber-600 transition-colors"
        >
          <ChevronLeft size={16} />
          Back
        </button>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-square bg-gray-50 mb-4 overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 bg-gray-50 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-amber-600' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:sticky lg:top-24">
            <h1 className="font-serif text-4xl uppercase tracking-wider mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < Math.floor(product.rating) ? 'text-amber-600 fill-amber-600' : 'text-gray-300'} 
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-sans text-3xl mb-8">${product.price}</p>

            {/* Short Description */}
            <p className="font-sans text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-8">
                <h3 className="font-sans text-sm uppercase tracking-wide mb-4">Tone</h3>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-3 border transition-all duration-300 ${
                        selectedVariant === variant
                          ? 'border-amber-600 bg-amber-600 text-white'
                          : 'border-gray-300 hover:border-amber-600'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-sans text-sm uppercase tracking-wide mb-4">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-amber-600 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="font-sans text-lg w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-amber-600 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 font-sans text-sm uppercase tracking-wide 
                       transition-all duration-300 hover:shadow-lg mb-4"
            >
              <ShoppingBag size={18} className="inline-block mr-2" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-12 space-y-4">
              {accordionItems.map((item, index) => (
                <div key={item.title} className="border-t border-gray-200">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                    className="w-full py-4 flex items-center justify-between font-sans text-sm uppercase tracking-wide"
                  >
                    {item.title}
                    <span className={`transform transition-transform ${activeAccordion === index ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  {activeAccordion === index && (
                    <div className="pb-4">
                      <p className="font-sans text-gray-600 leading-relaxed whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          <h2 className="font-serif text-3xl text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id} 
                  to={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="aspect-square bg-gray-50 mb-4 overflow-hidden">
                    <img 
                      src={relatedProduct.images[0]} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-lg uppercase tracking-wider mb-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="font-sans text-xl">${relatedProduct.price}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
