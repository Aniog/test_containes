import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/home/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const product = products.find((p) => p.id === id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setSelectedImage(0)
    setSelectedVariant('gold')
    setQuantity(1)
    setOpenAccordion(null)
    setAdded(false)
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div className="pt-28 pb-20 text-center">
        <h1 className="font-serif text-3xl text-ink-800">Product not found</h1>
        <Link to="/shop" className="font-sans text-sm tracking-wider uppercase text-gold-600 mt-4 inline-block">
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordionItems = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: (
      <div className="space-y-3">
        <p className="font-sans text-sm text-ink-500 leading-relaxed">{product.details}</p>
        <div className="border-t border-velvet-200 pt-3">
          <p className="font-sans text-xs tracking-widest uppercase text-ink-600 mb-1">Care Instructions</p>
          <p className="font-sans text-sm text-ink-500 leading-relaxed">{product.care}</p>
        </div>
      </div>
    )},
    { id: 'shipping', title: 'Shipping & Returns', content: (
      <div className="space-y-2">
        <p className="font-sans text-sm text-ink-500 leading-relaxed">{product.shipping}</p>
        <p className="font-sans text-sm text-ink-500 leading-relaxed">30-day return window for unworn items in original packaging.</p>
      </div>
    )},
  ]

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <p className="font-sans text-xs tracking-wider uppercase text-ink-400 mb-6">
          <Link to="/" className="hover:text-ink-800 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-ink-800 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink-800">{product.name}</span>
        </p>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          {/* Left - Image Gallery */}
          <div>
            <div className="aspect-square overflow-hidden bg-velvet-100 mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? 'border-ink-800' : 'border-transparent hover:border-velvet-300'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right - Product Info */}
          <div className="md:sticky md:top-28 md:self-start">
            <h1 className="font-serif text-3xl md:text-4xl text-ink-800 font-light tracking-wide">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-gold-400 fill-gold-400'
                        : 'text-velvet-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-ink-400">({product.reviewCount} reviews)</span>
            </div>

            <p className="font-serif text-2xl md:text-3xl text-gold-600 mt-4">
              ${product.price}
            </p>

            <p className="font-sans text-sm text-ink-500 leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="font-sans text-xs tracking-widest uppercase text-ink-600 mb-3">Metal Tone</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedVariant('gold')}
                  className={`px-6 py-2.5 font-sans text-sm rounded-full border transition-all ${
                    selectedVariant === 'gold'
                      ? 'bg-ink-800 text-white border-ink-800'
                      : 'bg-transparent text-ink-600 border-velvet-300 hover:border-ink-400'
                  }`}
                >
                  18K Gold
                </button>
                <button
                  onClick={() => setSelectedVariant('silver')}
                  className={`px-6 py-2.5 font-sans text-sm rounded-full border transition-all ${
                    selectedVariant === 'silver'
                      ? 'bg-ink-800 text-white border-ink-800'
                      : 'bg-transparent text-ink-600 border-velvet-300 hover:border-ink-400'
                  }`}
                >
                  Silver Tone
                </button>
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-sans text-xs tracking-widest uppercase text-ink-600">Qty</span>
                <div className="flex items-center border border-velvet-300">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2.5 text-ink-500 hover:text-ink-800 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-12 text-center font-sans text-sm text-ink-800">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2.5 text-ink-500 hover:text-ink-800 transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-gold-500 text-white py-4 font-sans text-sm tracking-widest uppercase hover:bg-gold-600 transition-colors flex items-center justify-center gap-3"
              >
                <ShoppingBag className="w-4 h-4" />
                {added ? 'Added to Cart!' : 'Add to Cart'}
              </button>
            </div>

            {/* Accordion */}
            <div className="mt-10 border-t border-velvet-200">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-velvet-200">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-5 font-sans text-sm tracking-wider uppercase text-ink-800 hover:text-gold-600 transition-colors"
                  >
                    {item.title}
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-4 h-4 text-ink-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-ink-400" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.id ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}
                  >
                    {typeof item.content === 'string' ? (
                      <p className="font-sans text-sm text-ink-500 leading-relaxed">{item.content}</p>
                    ) : (
                      item.content
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24 pt-16 border-t border-velvet-200">
            <h2 className="font-serif text-2xl md:text-3xl text-ink-800 font-light text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}