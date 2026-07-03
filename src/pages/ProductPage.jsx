import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/home/ProductCard'
import products from '@/data/products'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addToCart } = useCart()

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [expandedAccordion, setExpandedAccordion] = useState('description')
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center">
        <p className="font-serif text-2xl text-velvet-500">Product not found</p>
        <Link to="/shop" className="btn-outline mt-6 inline-block">Back to Shop</Link>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordions = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: product.materials + '. ' + product.care },
    { key: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <main className="pt-24 md:pt-32 pb-16">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans text-velvet-400 mb-8">
          <Link to="/" className="hover:text-gold-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold-600 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velvet-700">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[4/5] bg-velvet-100 rounded-sm overflow-hidden flex items-center justify-center">
              <span className="font-serif text-6xl md:text-8xl text-velvet-300/40 italic">
                {product.name.charAt(0)}
              </span>
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <div
                  key={img}
                  className={`w-20 h-20 rounded-sm cursor-pointer transition-all duration-200 flex items-center justify-center ${
                    i === 0 ? 'ring-1 ring-gold-400' : 'ring-1 ring-velvet-200 hover:ring-velvet-400'
                  }`}
                  style={{ background: 'linear-gradient(135deg, #f3eeea, #e6ddd4)' }}
                >
                  <span className="text-[10px] text-velvet-400 font-sans">{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-2">
              {product.newArrival && (
                <span className="text-[10px] uppercase tracking-wider bg-velvet-100 text-velvet-700 px-2 py-0.5 font-sans inline-block mb-3">
                  New Arrival
                </span>
              )}
            </div>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-wider text-velvet-950 uppercase font-medium leading-tight mb-3">
              {product.name}
            </h1>
            <p className="font-sans text-xl text-velvet-800 mb-4">${product.price}</p>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold-400 text-gold-400'
                        : 'fill-velvet-200 text-velvet-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velvet-500 font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-sm text-velvet-600 leading-relaxed mb-8">{product.description}</p>

            {/* Variants */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider text-velvet-500 font-sans mb-3">Finish</p>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-6 py-2.5 border text-xs uppercase tracking-wider font-sans transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-velvet-800 bg-velvet-800 text-cream'
                          : 'border-velvet-200 text-velvet-600 hover:border-velvet-400'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-wider text-velvet-500 font-sans mb-3">Quantity</p>
              <div className="flex items-center border border-velvet-200 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velvet-500 hover:text-velvet-800 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-5 text-sm font-sans text-velvet-800">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velvet-500 hover:text-velvet-800 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-2 py-4 text-sm uppercase tracking-wider font-sans transition-all duration-300 ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-velvet-950 text-cream hover:bg-velvet-800'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="mt-10 space-y-px">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-t border-velvet-200">
                  <button
                    onClick={() =>
                      setExpandedAccordion(expandedAccordion === acc.key ? '' : acc.key)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs uppercase tracking-wider font-sans text-velvet-700">
                      {acc.title}
                    </span>
                    {expandedAccordion === acc.key ? (
                      <ChevronUp className="w-3.5 h-3.5 text-velvet-400" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-velvet-400" />
                    )}
                  </button>
                  {expandedAccordion === acc.key && (
                    <div className="pb-4 text-sm text-velvet-600 leading-relaxed">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 md:mt-28">
          <div className="hairline mb-10" />
          <h2 className="section-title text-center mb-2">You May Also Like</h2>
          <p className="text-center text-velvet-500 text-sm mb-10 font-sans">
            Complete your collection
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}