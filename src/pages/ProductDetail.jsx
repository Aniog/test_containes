import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronLeft } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductGallery from '../components/product/ProductGallery'
import AccordionSection from '../components/product/AccordionSection'
import RelatedProducts from '../components/product/RelatedProducts'

const variants = [
  { id: 'gold', label: '18K Gold' },
  { id: 'silver', label: 'Silver Tone' },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()

  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
        <p className="font-serif text-2xl text-brand-500 mb-4">Product not found</p>
        <Link
          to="/shop"
          className="text-xs tracking-widest uppercase font-sans text-brand-800 border-b border-brand-400 pb-0.5"
        >
          Back to Shop
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
    <main className="bg-cream-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/shop"
            className="inline-flex items-center gap-1 text-xs text-brand-400 hover:text-brand-700 transition-colors font-sans tracking-wider uppercase"
          >
            <ChevronLeft className="w-3 h-3" />
            Back to Shop
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Product info */}
          <div className="flex flex-col">
            <p className="text-[10px] tracking-[0.15em] uppercase text-brand-400 font-sans mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl text-brand-900 tracking-wider uppercase">
              {product.name}
            </h1>
            <p className="text-sm text-brand-500 mt-2 font-sans">{product.tagline}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'text-gold-500 fill-gold-500'
                        : 'text-brand-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-400 font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-6">
              <span className="font-sans text-2xl font-medium text-gold-700">
                ${product.price}
              </span>
            </div>

            <div className="w-full h-px bg-brand-200/60 my-6" />

            {/* Description */}
            <p className="text-sm text-brand-600 leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Variant */}
            <div className="mt-6">
              <p className="text-xs tracking-wider uppercase text-brand-600 font-sans mb-2">
                Finish
              </p>
              <div className="flex gap-2">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVariant(v.id)}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase font-sans rounded-sm border transition-all duration-200 ${
                      variant === v.id
                        ? 'border-brand-900 bg-brand-900 text-cream-50'
                        : 'border-brand-200 text-brand-600 hover:border-brand-400 bg-white'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs tracking-wider uppercase text-brand-600 font-sans">
                  Qty
                </span>
                <div className="flex items-center border border-brand-200 rounded-sm bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-brand-500 hover:text-brand-900 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-sm font-sans text-brand-900 min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-brand-500 hover:text-brand-900 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAdd}
                className={`w-full py-4 text-xs tracking-[0.15em] uppercase font-sans font-medium rounded-sm transition-all duration-300 ${
                  added
                    ? 'bg-green-700 text-white'
                    : 'bg-gold-500 text-brand-950 hover:bg-gold-400'
                }`}
              >
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <AccordionSection title="Description">
                <ul className="space-y-1.5 list-disc list-inside">
                  {product.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </AccordionSection>
              <AccordionSection title="Materials & Care">
                <div className="space-y-3">
                  <div>
                    <p className="text-brand-600 font-medium mb-1">Materials</p>
                    <ul className="space-y-1 list-disc list-inside">
                      {product.details.slice(0, 2).map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-brand-600 font-medium mb-1">Care Instructions</p>
                    <ul className="space-y-1 list-disc list-inside">
                      {product.care.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionSection>
              <AccordionSection title="Shipping & Returns">
                <p>{product.shipping}</p>
                <p className="mt-2">
                  We offer a 30-day return policy on all unworn items in original packaging. 
                  Free return shipping on all domestic orders.
                </p>
              </AccordionSection>
            </div>
          </div>
        </div>

        {/* Related */}
        <RelatedProducts currentId={product.id} />
      </div>
    </main>
  )
}