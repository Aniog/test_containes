import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronRight } from 'lucide-react'
import { toast } from 'sonner'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductGallery from '@/components/product/ProductGallery'
import Accordion from '@/components/product/Accordion'
import ProductCard from '@/components/home/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const product = products.find((p) => p.id === id)
  const related = products.filter((p) => p.id !== id).slice(0, 4)

  useEffect(() => {
    setSelectedVariant('gold')
    setQuantity(1)
    setAdded(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-midnight-950 mb-4">Product not found</h2>
          <Link to="/shop" className="btn-primary inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'fill-brand-500 text-brand-500'
            : 'fill-midnight-200 text-midnight-200'
        }`}
      />
    ))
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    toast.success(`${product.name} added to cart`, {
      description: `${selectedVariant === 'gold' ? 'Gold' : 'Silver'} finish · Qty ${quantity}`,
      duration: 2500,
    })
    setTimeout(() => setAdded(false), 2000)
  }

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `${product.materials}\n\n${product.care}`,
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Orders are processed within 1-2 business days. Estimated delivery: 5-8 business days.\n\nWe offer a 30-day return policy for unworn items in original packaging. Full refunds issued within 5-7 business days of receiving your return.',
    },
  ]

  return (
    <main className="pt-8 md:pt-12 pb-16 md:pb-24">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-sans text-midnight-400 mb-6 md:mb-8">
          <Link to="/" className="hover:text-midnight-950 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-midnight-950 transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-midnight-600">{product.name}</span>
        </nav>

        {/* Product layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Details */}
          <div className="flex flex-col">
            <p className="section-subtitle mb-2">
              {product.category === 'sets' ? 'Gift Set' : product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-midnight-950 uppercase tracking-wider font-semibold">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {renderStars(product.rating)}
              </div>
              <span className="text-xs text-midnight-400 font-sans">
                {product.rating.toFixed(1)} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl md:text-3xl text-midnight-950 mt-4 font-semibold">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-sm text-midnight-600 font-sans leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-midnight-600 font-sans mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-2.5 text-xs uppercase tracking-wider font-sans border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-midnight-950 bg-midnight-950 text-white'
                        : 'border-midnight-200 text-midnight-600 hover:border-midnight-400'
                    }`}
                  >
                    {v === 'gold' ? '🌕 18K Gold' : '⚪ Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center border border-midnight-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-midnight-600 hover:text-midnight-950 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-sans text-midnight-950">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="p-3 text-midnight-600 hover:text-midnight-950 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3.5 font-sans text-sm font-medium uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                  added
                    ? 'bg-green-600 text-white'
                    : 'bg-brand-600 text-white hover:bg-brand-700'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {added ? 'Added to Cart!' : 'Add to Cart'}
              </button>
            </div>

            {/* Trust note */}
            <p className="text-xs text-midnight-400 font-sans mt-3">
              Free shipping & 30-day returns
            </p>

            {/* Accordion */}
            <div className="mt-8 hairline pt-2">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-16 md:mt-24">
            <div className="text-center mb-10">
              <p className="section-subtitle">Complete the Look</p>
              <h2 className="section-title mt-2">You May Also Like</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}