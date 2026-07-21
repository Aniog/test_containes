import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductAccordion from '@/components/shop/ProductAccordion'
import RelatedProducts from '@/components/shop/RelatedProducts'

const variants = ['Gold', 'Silver']

export default function ProductPage() {
  const { id } = useParams()
  const { addItem } = useCart()
  const product = products.find((p) => p.id === id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <p className="font-serif text-2xl">Product not found</p>
        <Link to="/shop" className="text-sm underline mt-4 inline-block">
          Back to shop
        </Link>
      </div>
    )
  }

  const handleAdd = () => {
    addItem(product, variant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.1em] text-velvet-500 hover:text-ink transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-square bg-velvet-100 overflow-hidden mb-3">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === i
                      ? 'border-ink'
                      : 'border-transparent hover:border-velvet-300'
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <p className="text-[11px] uppercase tracking-[0.15em] text-velvet-500 mb-2 font-sans">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium uppercase tracking-[0.12em] text-ink">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-gold-500 fill-gold-500'
                      : 'text-velvet-300'
                  }`}
                />
              ))}
              <span className="text-xs text-velvet-500 ml-1">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-xl italic text-ink mt-4">
              ${product.price}
            </p>

            <p className="text-ink/70 text-sm leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.12em] text-ink/60 mb-3">
                Finish
              </p>
              <div className="flex gap-2">
                {variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2.5 text-sm transition-all duration-300 ${
                      variant === v
                        ? 'bg-ink text-cream'
                        : 'bg-transparent text-ink border border-velvet-300 hover:border-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-4">
                <span className="text-[11px] uppercase tracking-[0.12em] text-ink/60">
                  Quantity
                </span>
                <div className="flex items-center border border-velvet-300">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-sm text-ink/60 hover:text-ink transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 text-sm text-ink min-w-[40px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-sm text-ink/60 hover:text-ink transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAdd}
                className={`w-full py-3.5 uppercase tracking-[0.12em] text-sm font-medium transition-all duration-300 ${
                  added
                    ? 'bg-ink/80 text-cream'
                    : 'bg-gold-500 text-cream hover:bg-gold-600'
                }`}
              >
                {added ? '✓ Added to Cart' : 'Add to Cart — $' + (product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordion */}
            <div className="mt-10">
              <ProductAccordion product={product} />
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts currentId={product.id} />
    </main>
  )
}