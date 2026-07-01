import { useState, useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react'
import { CartContext } from '@/context/CartContext'
import products from '@/data/products'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useContext(CartContext)

  const product = products.find((p) => p.id === parseInt(id))
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [expandedAccordion, setExpandedAccordion] = useState(null)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4">Product not found</h2>
          <Link to="/shop" className="text-amber-700 hover:underline">
            Return to shop
          </Link>
        </div>
      </div>
    )
  }

  const images = [product.image, product.hoverImage]
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: '18K gold plated over high-quality brass. Hypoallergenic and nickel-free. To care for your Velmora pieces, avoid contact with water, perfume, and lotions. Store in the provided pouch when not worn.',
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day return policy. Returns are accepted for unused items in original packaging.',
    },
  ]

  const handleAddToCart = () => {
    addToCart({ ...product, quantity })
    // Could show a toast notification here
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm font-light text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gray-900">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 bg-gray-100 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-amber-700' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-light tracking-[0.15em] uppercase font-serif text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-2xl font-light text-gray-900">${product.price}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-amber-700 fill-amber-700'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 font-light">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-gray-600 font-light leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div>
              <label className="text-sm font-light tracking-wide uppercase text-gray-900 mb-3 block">
                Material
              </label>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm font-light border transition-colors ${
                      selectedVariant === variant
                        ? 'border-amber-700 bg-amber-700 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-gray-900'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="text-sm font-light tracking-wide uppercase text-gray-900 mb-3 block">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-gray-300 hover:border-gray-900 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-light">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-gray-300 hover:border-gray-900 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-amber-800 text-white py-4 text-sm tracking-[0.2em] uppercase font-light hover:bg-amber-900 transition-colors"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="space-y-4 pt-6 border-t border-gray-100">
              {accordionItems.map((item, index) => (
                <div key={item.title} className="border-b border-gray-100 pb-4">
                  <button
                    onClick={() =>
                      setExpandedAccordion(expandedAccordion === index ? null : index)
                    }
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="text-sm font-light tracking-wide uppercase text-gray-900">
                      {item.title}
                    </span>
                    {expandedAccordion === index ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {expandedAccordion === index && (
                    <p className="mt-3 text-sm font-light text-gray-600 leading-relaxed">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-light tracking-wide font-serif text-gray-900 mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {relatedProducts.map((related) => (
              <Link
                key={related.id}
                to={`/product/${related.id}`}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-gray-100 overflow-hidden mb-3">
                  <img
                    src={related.image}
                    alt={related.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-sm font-light tracking-[0.1em] uppercase text-gray-900">
                  {related.name}
                </h3>
                <p className="text-sm font-light text-gray-600">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
