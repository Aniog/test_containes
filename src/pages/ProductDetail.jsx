import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.round(rating) ? 'fill-[#D4A84B] text-[#D4A84B]' : 'text-warm-beige'}`}
          />
        ))}
      </div>
      <span className="text-xs text-warm-gray font-sans">({count})</span>
    </div>
  )
}

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-warm-beige">
      <button
        className="w-full flex items-center justify-between py-4 text-sm font-sans uppercase tracking-[0.12em] text-charcoal hover:text-[#C9A96E] transition-colors"
        onClick={() => setOpen(!open)}
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-warm-gray font-sans leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-warm-gray font-sans mb-4">Product not found</p>
          <Link to="/shop" className="btn-primary text-sm">Continue Shopping</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="pt-20 md:pt-24 pb-16">
      <div className="max-w-content mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-xs text-warm-gray hover:text-charcoal transition-colors font-sans uppercase tracking-[0.1em] mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Shop
        </Link>

        {/* Product */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-warm-beige/20 mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 rounded-sm overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-[#C9A96E]' : 'border-transparent hover:border-warm-beige'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:sticky md:top-28 md:self-start">
            <p className="text-[#C9A96E] text-xs uppercase tracking-[0.2em] font-sans font-medium mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-[0.15em] mb-3">
              {product.name}
            </h1>
            <StarRating rating={product.rating} count={product.reviewCount} />
            <p className="font-serif text-2xl text-charcoal mt-4">${product.price}</p>

            <p className="mt-6 text-sm text-warm-gray font-sans leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.12em] font-sans font-medium text-charcoal mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {['gold', 'silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 text-xs font-sans uppercase tracking-[0.1em] border transition-all duration-300 ${
                      variant === v
                        ? 'border-charcoal bg-charcoal text-white'
                        : 'border-warm-beige text-charcoal hover:border-charcoal'
                    }`}
                  >
                    {v === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.12em] font-sans font-medium text-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-warm-beige flex items-center justify-center hover:bg-warm-beige/30 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center font-sans text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-warm-beige flex items-center justify-center hover:bg-warm-beige/30 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full mt-8 py-4 text-sm font-sans uppercase tracking-[0.12em] font-medium transition-all duration-300 ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-[#C9A96E] text-white hover:bg-[#B8954A]'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart — $' + (product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 hairline">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-charcoal">Materials:</strong> {product.materials}</p>
                <p><strong className="text-charcoal">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders over $50. Standard shipping takes 5-8 business days.</p>
                <p>We offer a 30-day return policy for unworn items in original packaging. Full refund or exchange available.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-sm bg-warm-beige/20">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="product-name">{p.name}</h3>
                  <p className="text-sm font-sans text-warm-gray mt-1">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}