import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const { addToCart } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || '')
  const [quantity, setQuantity] = useState(1)
  const [expandedAccordion, setExpandedAccordion] = useState(null)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-velmora-gold hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addToCart({ ...product, selectedVariant }, quantity)
  }

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section)
  }

  return (
    <div className="bg-velmora-ivory">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="font-sans text-sm text-gray-500">
          <Link to="/" className="hover:text-velmora-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-square bg-velmora-cream mb-4 overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop`}
                alt={product.images[selectedImage].alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 bg-velmora-cream overflow-hidden border-2 ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    src={`https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop`}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col justify-start">
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-wider mb-4">
              {product.name}
            </h1>

            <p className="font-serif text-2xl mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-velmora-gold fill-velmora-gold'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-gray-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-sans text-base text-gray-600 mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="mb-8">
                <label className="font-sans text-sm uppercase tracking-wider mb-3 block">
                  Material
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 font-sans text-sm uppercase tracking-wider border ${
                        selectedVariant === variant
                          ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                          : 'border-velmora-taupe hover:border-velmora-charcoal'
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
              <label className="font-sans text-sm uppercase tracking-wider mb-3 block">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-velmora-taupe hover:border-velmora-charcoal"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-lg w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-velmora-taupe hover:border-velmora-charcoal"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary mb-4"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-12 space-y-4">
              {[
                { title: 'Description', content: product.description },
                { title: 'Materials & Care', content: '18K Gold Plated over brass. Hypoallergenic and nickel-free. To maintain plating, avoid contact with water, perfumes, and lotions. Store in provided pouch.' },
                { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day return policy. Items must be unworn and in original packaging.' },
              ].map((section) => (
                <div key={section.title} className="accordion-item">
                  <button
                    onClick={() => toggleAccordion(section.title)}
                    className="accordion-trigger w-full"
                  >
                    <span>{section.title}</span>
                    {expandedAccordion === section.title ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {expandedAccordion === section.title && (
                    <div className="pb-4 font-sans text-sm text-gray-600 leading-relaxed">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">You May Also Like</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((related) => (
            <Link key={related.id} to={`/product/${related.id}`} className="group">
              <div className="aspect-square bg-velmora-cream mb-4 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop`}
                  alt={related.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
              </div>
              <h3 className="font-serif text-sm uppercase tracking-wider mb-2">{related.name}</h3>
              <p className="font-serif text-lg">${related.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
