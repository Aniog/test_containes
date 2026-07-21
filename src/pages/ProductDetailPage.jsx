import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function ProductDetailPage() {
  const { id } = useParams()
  const { addItem } = useCart()
  const product = products.find((p) => p.id === id)

  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-dark-500 mb-4">Product not found</h1>
          <Link to="/shop" className="btn-primary inline-block text-sm">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2 text-sm">
          {Object.entries(product.details).map(([key, value]) => (
            <div key={key} className="col-span-2 flex justify-between py-2 border-b border-dark-100/60">
              <span className="text-dark-500 capitalize">{key.replace(/_/g, ' ')}</span>
              <span className="text-dark-900 font-medium">{value}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-dark-500 mt-4">{product.care}</p>
      </div>
    )},
    { id: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-dark-400 font-sans mb-8">
          <Link to="/" className="hover:text-dark-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-dark-900 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-dark-600">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="aspect-square rounded-sm overflow-hidden bg-dark-50 mb-3">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 rounded-sm overflow-hidden border-2 transition-colors ${
                      i === selectedImage ? 'border-gold' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <p className="section-subtitle text-xs mb-2">{product.category}</p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-dark-900 tracking-wider uppercase mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-dark-200'}
                  />
                ))}
              </div>
              <span className="text-xs text-dark-400 font-sans">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="text-2xl font-serif text-dark-900 mb-6">${product.price}</p>

            <p className="text-dark-500 text-sm leading-relaxed mb-6">{product.description}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase font-sans font-medium text-dark-600 mb-3">Finish</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-3 text-sm font-sans rounded-full border transition-all duration-200 ${
                      variant === v
                        ? 'border-dark-900 bg-dark-900 text-cream'
                        : 'border-dark-200 text-dark-600 hover:border-dark-400'
                    }`}
                  >
                    {v === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-8">
              <p className="text-xs tracking-widest uppercase font-sans font-medium text-dark-600">Qty</p>
              <div className="flex items-center border border-dark-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2.5 text-dark-500 hover:text-dark-900 transition-colors"
                >
                  −
                </button>
                <span className="px-4 py-2.5 text-sm font-medium text-dark-900 min-w-[40px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2.5 text-dark-500 hover:text-dark-900 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-sm font-sans font-medium tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
                added
                  ? 'bg-dark-200 text-dark-600'
                  : 'bg-dark-900 text-cream hover:bg-dark-800'
              }`}
            >
              <ShoppingBag size={16} />
              {added ? 'Added to Cart ✓' : 'Add to Cart — $' + (product.price * quantity)}
            </button>

            {/* Accordions */}
            <div className="mt-8 space-y-0 border-t border-dark-200/40">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-dark-200/40">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs tracking-widest uppercase font-sans font-medium text-dark-900">
                      {acc.title}
                    </span>
                    {openAccordion === acc.id ? (
                      <ChevronUp size={14} className="text-dark-400" />
                    ) : (
                      <ChevronDown size={14} className="text-dark-400" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.id ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <div className="text-sm text-dark-500 leading-relaxed">{acc.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-20 pt-12 border-t border-dark-200/40">
            <h2 className="font-serif text-2xl md:text-3xl text-dark-900 text-center mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-square bg-dark-50 rounded-sm overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name text-xs text-dark-900 text-center">{p.name}</h3>
                  <p className="text-sm text-dark-500 font-sans text-center">${p.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}