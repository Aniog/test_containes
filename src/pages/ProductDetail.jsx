import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Heart, Share2 } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import ProductCard from '@/components/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [isWishlisted, setIsWishlisted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setSelectedImage(0)
    setQuantity(1)
    setSelectedVariant('Gold')
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-stone-900 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:text-gold-dark transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const accordions = [
    { id: 'description', title: 'Description', content: product.longDescription },
    { id: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { id: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ]

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  return (
    <main className="bg-ivory pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-stone-400">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-stone-600">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-square bg-stone-100 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 bg-stone-100 overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-gold' : 'border-transparent hover:border-stone-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-900 font-medium uppercase tracking-product">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mt-4">
              <span className="font-serif text-2xl text-stone-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-stone-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-stone-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-stone-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 text-stone-600 leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-sm font-medium text-stone-700 mb-3">
                Tone: <span className="text-stone-500">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-sm font-medium tracking-wider uppercase border transition-colors ${
                      selectedVariant === variant
                        ? 'bg-gold text-white border-gold'
                        : 'bg-transparent text-stone-600 border-stone-300 hover:border-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-sm font-medium text-stone-700 mb-3">Quantity</p>
              <div className="inline-flex items-center border border-stone-300">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-stone-50 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 h-10 flex items-center justify-center text-sm font-medium border-x border-stone-300">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-stone-50 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-gold text-white text-sm font-medium tracking-wider uppercase hover:bg-gold-dark transition-colors"
              >
                Add to Cart — {formatPrice(product.price * quantity)}
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`w-12 h-12 flex items-center justify-center border transition-colors ${
                  isWishlisted ? 'bg-gold/10 border-gold text-gold' : 'border-stone-300 text-stone-400 hover:border-gold hover:text-gold'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
              <button
                className="w-12 h-12 flex items-center justify-center border border-stone-300 text-stone-400 hover:border-gold hover:text-gold transition-colors"
                aria-label="Share product"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-8 pt-6 border-t border-stone-200 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gold">✦</span>
                <span className="text-xs text-stone-500">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gold">✦</span>
                <span className="text-xs text-stone-500">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gold">✦</span>
                <span className="text-xs text-stone-500">Hypoallergenic</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gold">✦</span>
                <span className="text-xs text-stone-500">Gift Wrapping</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-10 space-y-0">
              {accordions.map(accordion => (
                <div key={accordion.id} className="border-t border-stone-200">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-serif text-base font-medium text-stone-900">
                      {accordion.title}
                    </span>
                    {openAccordion === accordion.id ? (
                      <ChevronUp className="w-4 h-4 text-stone-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400" />
                    )}
                  </button>
                  {openAccordion === accordion.id && (
                    <div className="pb-4 text-sm text-stone-600 leading-relaxed whitespace-pre-line">
                      {accordion.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-20 pt-16 border-t border-stone-200">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 font-light">
              You May Also Like
            </h2>
            <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
