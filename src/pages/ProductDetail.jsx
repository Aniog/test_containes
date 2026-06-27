import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import products from '../data/products'
import { useCart } from '../context/CartContext'

const variants = [
  { id: 'gold', label: 'Gold Tone', color: 'bg-amber-200' },
  { id: 'silver', label: 'Silver Tone', color: 'bg-gray-200' },
]

const accordions = [
  {
    id: 'description',
    title: 'Description',
    content: (product) => <p className="text-sm text-velmora-600 leading-relaxed">{product.description}</p>,
  },
  {
    id: 'materials',
    title: 'Materials & Care',
    content: (product) => (
      <div className="text-sm text-velmora-600 space-y-3">
        <p><strong className="text-velmora-900">Material:</strong> {product.material}</p>
        <p><strong className="text-velmora-900">Care:</strong> {product.care}</p>
      </div>
    ),
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    content: () => (
      <div className="text-sm text-velmora-600 space-y-3">
        <p>Free worldwide shipping on all orders. Estimated delivery: 5–10 business days.</p>
        <p>30-day return policy. Items must be unworn and in original packaging. Full refund to original payment method.</p>
      </div>
    ),
  },
]

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()

  const product = products.find((p) => p.id === Number(id))
  const related = products.filter((p) => p.category === product?.category && p.id !== product?.id).slice(0, 4)

  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-5 py-20 text-center">
        <h2 className="section-title">Product not found</h2>
        <Link to="/shop" className="btn-primary inline-block mt-6">Back to Shop</Link>
      </div>
    )
  }

  const handleAdd = () => {
    addItem(product, variant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main className="pb-16 md:pb-24">
      {/* Product section */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-6 md:pt-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14">
          {/* Image gallery */}
          <div>
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-velmora-100 mb-3">
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
                  className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-sm border-2 transition-colors ${
                    selectedImage === i ? 'border-velmora-900' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:sticky md:top-24 md:self-start">
            <h1 className="product-name text-2xl md:text-3xl text-velmora-900">{product.name}</h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold-500 text-gold-500' : 'fill-velmora-200 text-velmora-200'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-500">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-xl md:text-2xl font-medium text-velmora-900 mt-4">${product.price}</p>

            <div className="hairline my-6" />

            <p className="text-sm text-velmora-600 leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs tracking-[0.08em] uppercase text-velmora-600 mb-3 font-medium">Finish</p>
              <div className="flex gap-3">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVariant(v.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm border transition-all duration-200 ${
                      variant === v.id
                        ? 'border-velmora-900 bg-velmora-900 text-white'
                        : 'border-velmora-200 text-velmora-700 hover:border-velmora-400'
                    }`}
                  >
                    <span className={`w-3 h-3 rounded-full ${v.color}`} />
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-6 flex gap-4">
              <div className="flex items-center border border-velmora-200">
                <button
                  className="px-3 py-3 hover:bg-velmora-50 transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-medium">{quantity}</span>
                <button
                  className="px-3 py-3 hover:bg-velmora-50 transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button onClick={handleAdd} className="flex-1 btn-primary text-sm">
                {added ? 'Added to Bag!' : 'Add to Cart'}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-8 space-y-0.5">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-velmora-200">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-sm font-medium text-velmora-900 hover:text-gold-600 transition-colors"
                  >
                    {acc.title}
                    {openAccordion === acc.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4 animate-fadeIn">
                      {acc.content(product)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 md:px-8 mt-16 md:mt-24">
          <div className="text-center mb-10">
            <h2 className="section-title">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-velmora-100 rounded-sm">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="product-name text-xs md:text-sm text-velmora-900 truncate">{p.name}</h3>
                  <p className="text-xs md:text-sm text-velmora-600 mt-0.5 font-medium">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}