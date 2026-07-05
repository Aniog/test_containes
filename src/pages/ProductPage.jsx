import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronLeft } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductGallery from '../components/product/ProductGallery'
import ProductAccordion from '../components/product/ProductAccordion'
import RelatedProducts from '../components/product/RelatedProducts'

export default function ProductPage() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || '')
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velvet-900">Product not found</h1>
          <Link to="/shop" className="text-gold text-sm uppercase tracking-wider mt-4 inline-block hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      variant: selectedVariant,
      image: product.images[0],
      quantity,
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  // Format rating stars
  const fullStars = Math.floor(product.rating)
  const hasHalf = product.rating % 1 >= 0.5

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-velvet-500 text-xs uppercase tracking-wider hover:text-gold transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Details */}
          <div className="flex flex-col">
            {/* Category tag */}
            <p className="text-gold text-xs uppercase tracking-[0.15em] font-medium mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="font-serif text-3xl md:text-4xl text-velvet-900 font-light">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < fullStars
                        ? 'fill-gold text-gold'
                        : i === fullStars && hasHalf
                        ? 'fill-gold/50 text-gold'
                        : 'text-velvet-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-velvet-500 text-xs">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mt-5">
              <span className="font-serif text-2xl text-gold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-velvet-400 text-base line-through">${product.originalPrice}</span>
              )}
            </div>

            {/* Description */}
            <p className="text-velvet-600 text-sm leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.12em] text-velvet-900 font-medium mb-3">
                Finish: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-3 text-xs uppercase tracking-[0.12em] border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'bg-velvet-900 text-white border-velvet-900'
                        : 'bg-transparent text-velvet-700 border-velvet-300 hover:border-velvet-900'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.12em] text-velvet-900 font-medium mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velvet-300 w-fit">
                <button
                  className="px-4 py-3 text-velvet-600 hover:text-velvet-900 transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 text-sm text-velvet-900 min-w-[48px] text-center font-medium">
                  {quantity}
                </span>
                <button
                  className="px-4 py-3 text-velvet-600 hover:text-velvet-900 transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full mt-8 py-5 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 flex items-center justify-center gap-3 ${
                addedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-gold text-white hover:bg-gold-dark'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {addedToCart ? 'Added to Cart!' : 'Add to Cart — $' + (product.price * quantity).toFixed(0)}
            </button>

            {/* Trust markers */}
            <div className="flex items-center gap-6 mt-5 text-velvet-500 text-[11px] uppercase tracking-wider">
              <span>Free Shipping</span>
              <span className="w-px h-3 bg-velvet-300" />
              <span>30-Day Returns</span>
              <span className="w-px h-3 bg-velvet-300" />
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className="max-w-2xl mt-12 md:mt-16">
          <ProductAccordion
            description={product.description}
            material={product.material}
            care={product.care}
          />
        </div>

        {/* Related */}
        <RelatedProducts currentProduct={product} />
      </div>
    </div>
  )
}