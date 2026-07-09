import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center">
        <p className="font-serif text-2xl text-cream-500 mb-4">Product not found</p>
        <Button asChild>
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    )
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  const accordionItems = [
    {
      key: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-2 text-sm text-cream-600">
          <p><strong className="text-cream-800">Material:</strong> {product.material}</p>
          <p><strong className="text-cream-800">Care:</strong> {product.care}</p>
          <p className="text-xs text-cream-400 mt-2">Avoid contact with water, perfume, and lotions. Store in a dry place.</p>
        </div>
      ),
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-2 text-sm text-cream-600">
          <p>Free worldwide shipping on all orders.</p>
          <p>30-day return policy for unworn items in original packaging.</p>
          <p>Orders ship within 1-3 business days.</p>
        </div>
      ),
    },
  ]

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-cream-400 uppercase tracking-wider">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-cream-600">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div>
            <div className="aspect-[4/5] bg-cream-100 overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      'w-16 h-20 overflow-hidden border-2 transition-colors',
                      selectedImage === index ? 'border-gold' : 'border-transparent hover:border-cream-300'
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product info */}
          <div className="md:sticky md:top-28 md:self-start">
            <p className="text-[10px] uppercase tracking-[0.15em] text-gold font-medium mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-wide text-cream-900 mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span className="text-sm font-medium text-cream-700">{product.rating}</span>
                <span className="text-xs text-cream-400">({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="font-serif text-3xl text-gold mb-6">${product.price}</p>

            <p className="text-sm text-cream-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-wider text-cream-600 mb-3">Finish</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      'px-5 py-2.5 text-xs uppercase tracking-wider border transition-all duration-200',
                      variant === v
                        ? 'border-gold bg-gold text-white'
                        : 'border-cream-300 text-cream-600 hover:border-cream-400'
                    )}
                  >
                    {v === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex gap-3 mb-8">
              <div className="flex items-center border border-cream-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-12 flex items-center justify-center text-cream-600 hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center text-sm font-medium text-cream-800">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="w-10 h-12 flex items-center justify-center text-cream-600 hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <Button
                size="lg"
                className={cn(
                  'flex-1 transition-all',
                  added ? 'bg-green-700 hover:bg-green-700' : ''
                )}
                onClick={handleAddToCart}
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  {added ? 'Added to Bag!' : 'Add to Cart'}
                </span>
              </Button>
            </div>

            {/* Accordions */}
            <div className="border-t border-cream-200">
              {accordionItems.map((item) => (
                <div key={item.key} className="border-b border-cream-200">
                  <button
                    onClick={() => toggleAccordion(item.key)}
                    className="w-full flex items-center justify-between py-4 text-sm uppercase tracking-wider text-cream-700 hover:text-gold transition-colors"
                  >
                    {item.title}
                    {openAccordion === item.key ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {openAccordion === item.key && (
                    <div className="pb-4 text-sm text-cream-600 leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-cream-200 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-cream-900 text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] bg-cream-100 overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xs uppercase tracking-wider text-cream-800">
                    {p.name}
                  </h3>
                  <p className="text-sm font-medium text-cream-900 mt-1">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}