import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ArrowLeft } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import ProductGallery from '@/components/product/ProductGallery'
import ProductAccordion from '@/components/product/ProductAccordion'
import ProductCard from '@/components/ui/ProductCard'

export default function ProductDetail() {
  const { slug } = useParams()
  const { addItem } = useCart()
  const product = useMemo(() => products.find((p) => p.slug === slug), [slug])

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]?.value || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-velvet-800 mb-4">Product Not Found</p>
          <Link to="/shop" className="text-xs tracking-[0.1em] uppercase text-gold-600 underline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-5 py-8 md:py-12">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs text-velvet-500 hover:text-velvet-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Info */}
          <div>
            {/* Name */}
            <h1 className="font-serif text-xl md:text-2xl tracking-[0.15em] uppercase text-velvet-950 leading-snug">
              {product.name}
            </h1>

            {/* Price */}
            <p className="mt-3 text-xl font-semibold text-velvet-900 tabular-nums">
              {formatPrice(product.price)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.round(product.rating)
                        ? 'fill-gold-500 text-gold-500'
                        : 'text-velvet-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velvet-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Short description */}
            <p className="mt-6 text-sm text-velvet-600 leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs tracking-[0.12em] uppercase font-semibold text-velvet-800 mb-3">
                Tone: <span className="text-velvet-500 capitalize font-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v.value}
                    onClick={() => setSelectedVariant(v.value)}
                    className={`px-5 py-2.5 border text-xs tracking-[0.08em] uppercase font-medium rounded-sm transition-all ${
                      selectedVariant === v.value
                        ? 'border-velvet-900 bg-velvet-900 text-white'
                        : 'border-velvet-200 text-velvet-700 hover:border-velvet-400'
                    }`}
                  >
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full mr-2"
                      style={{ backgroundColor: v.color }}
                    />
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-[0.12em] uppercase font-semibold text-velvet-800 mb-3">Quantity</p>
              <div className="flex items-center border border-velvet-200 rounded-sm w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-velvet-50 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-5 text-sm font-medium tabular-nums min-w-[48px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-velvet-50 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className={`mt-8 w-full py-3.5 text-sm tracking-[0.12em] uppercase font-semibold rounded-sm transition-all duration-300 ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-velvet-900 text-white hover:bg-velvet-800'
              }`}
            >
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Accordion */}
            <div className="mt-10">
              <ProductAccordion product={product} />
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20 md:mt-28">
          <h2 className="font-serif text-xl md:text-2xl text-velvet-950 tracking-wide mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
          </div>
        </section>
      </div>
    </div>
  )
}
