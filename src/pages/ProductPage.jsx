import React, { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/home/ProductCard'

export default function ProductPage() {
  const { id } = useParams()
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [addedToCart, setAddedToCart] = useState(false)

  const product = products.find((p) => p.id === id)

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return products.filter((p) => p.id !== product.id).slice(0, 4)
  }, [product])

  if (!product) {
    return (
      <main className="pt-24 min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-ink-400 font-sans">Product not found</p>
          <Link to="/shop" className="btn-outline mt-4 inline-block text-xs">
            Back to Shop
          </Link>
        </div>
      </main>
    )
  }

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-3 text-sm text-ink-500 font-sans">
          <div>
            <span className="text-ink-700 font-medium">Material: </span>
            {product.details.material}
          </div>
          <div>
            <span className="text-ink-700 font-medium">Dimensions: </span>
            {product.details.dimensions}
          </div>
          <div>
            <span className="text-ink-700 font-medium">Closure: </span>
            {product.details.closure}
          </div>
          <div>
            <span className="text-ink-700 font-medium">Care: </span>
            {product.details.care}
          </div>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3 text-sm text-ink-500 font-sans">
          <p>Free worldwide shipping on all orders over $50. Standard shipping takes 5-10 business days.</p>
          <p>We offer a 30-day return policy on all unworn items in original packaging. Expedited shipping is available at checkout.</p>
        </div>
      ),
    },
  ]

  return (
    <main className="pt-20 md:pt-24 bg-cream-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
        {/* Back link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-ink-400 hover:text-ink-900 transition-colors font-sans mb-6 md:mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-ink-100 rounded-sm overflow-hidden">
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
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-sm overflow-hidden border-2 transition-colors ${
                      selectedImage === i
                        ? 'border-ink-900'
                        : 'border-transparent hover:border-ink-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product details */}
          <div className="flex flex-col">
            <p className="text-gold-500 text-xs tracking-widest uppercase font-sans mb-2">
              {product.category}
            </p>
            <h1 className="product-name text-ink-900 text-lg md:text-xl">
              {product.name}
            </h1>
            <p className="font-serif text-2xl md:text-3xl text-ink-900 mt-2">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold-400 text-gold-400'
                        : 'text-ink-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-ink-400 font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="w-12 h-px bg-ink-200 my-6" />

            <p className="text-sm text-ink-500 font-sans leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase text-ink-600 font-sans mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase font-sans rounded-sm border transition-all ${
                      variant === v
                        ? 'border-ink-900 bg-ink-900 text-cream-50'
                        : 'border-ink-200 text-ink-500 hover:border-ink-400'
                    }`}
                  >
                    {v} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-widest uppercase text-ink-600 font-sans mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-ink-200 w-fit rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-ink-400 hover:text-ink-900 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-6 text-sm font-medium text-ink-900 font-sans min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-ink-400 hover:text-ink-900 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`btn-primary w-full mt-8 text-xs transition-all ${
                addedToCart ? 'bg-gold-600 border-gold-600' : ''
              }`}
            >
              {addedToCart ? 'Added to Cart' : 'Add to Cart — $' + (product.price * quantity).toFixed(2)}
            </button>

            {/* Accordion */}
            <div className="mt-10 border-t border-ink-200">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-ink-100">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === item.id ? null : item.id)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs tracking-widest uppercase text-ink-700 font-sans">
                      {item.title}
                    </span>
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-3.5 h-3.5 text-ink-400" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-ink-400" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.id ? 'max-h-80 pb-4' : 'max-h-0'
                    }`}
                  >
                    <div className="text-sm text-ink-500 font-sans leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-ink-100">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-ink-900 font-light">
                You May Also Love
              </h2>
            </div>
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