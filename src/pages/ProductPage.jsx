import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronLeft } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import products from '@/data/products'
import ProductGallery from '@/components/product/ProductGallery'
import Accordion from '@/components/product/Accordion'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addToCart } = useCart()
  const [variant, setVariant] = useState('Gold')
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <p className="text-velvet-500">Product not found.</p>
          <Link to="/shop" className="mt-4 inline-block text-xs tracking-widest uppercase text-gold-600 hover:text-gold-500">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAdd = () => {
    addToCart(product, variant)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center gap-1 text-[11px] tracking-widest uppercase text-velvet-400 hover:text-deep transition-colors mb-8">
          <ChevronLeft size={12} />
          Back to Shop
        </Link>

        {/* Product */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <ProductGallery />

          <div>
            <h1 className="font-product text-2xl md:text-3xl tracking-widest text-deep leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mt-4 mb-6">
              <p className="text-2xl font-medium text-deep">${product.price}</p>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className={i < Math.round(product.rating) ? 'fill-gold-500 text-gold-500' : 'text-velvet-300'}
                    />
                  ))}
                </div>
                <span className="text-xs text-velvet-400 ml-1">({product.reviewCount} reviews)</span>
              </div>
            </div>

            <p className="text-sm text-velvet-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-[11px] tracking-widest-plus uppercase text-velvet-500 mb-3 font-medium">
                Finish
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2.5 text-xs tracking-widest uppercase transition-all border ${
                      variant === v
                        ? 'border-deep bg-deep text-cream'
                        : 'border-velvet-200 text-velvet-500 hover:border-deep hover:text-deep'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-[11px] tracking-widest-plus uppercase text-velvet-500 mb-3 font-medium">
                Quantity
              </p>
              <div className="flex items-center border border-velvet-200 w-fit">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="p-3 text-deep/60 hover:text-deep transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm font-medium">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="p-3 text-deep/60 hover:text-deep transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`w-full py-4 text-xs tracking-widest-plus uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2.5 ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-deep text-cream hover:bg-velvet-800'
              }`}
            >
              <ShoppingBag size={15} />
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="mt-12">
              <Accordion title="Description">
                <p className="mb-3">{product.description}</p>
                <p>Each Velmora piece is designed in London and hand-finished by master artisans. Subtle variations in finish are a hallmark of true craftsmanship.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-deep">Materials:</strong> {product.materials}</p>
                <p><strong className="text-deep">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <p className="text-[11px] tracking-widest-plus uppercase text-gold-600 mb-2 font-medium">
              Complete the Look
            </p>
            <h2 className="font-serif text-3xl text-deep font-medium mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group block">
                  <div className="aspect-[3/4] bg-velvet-100 mb-3 flex items-center justify-center">
                    <span className="text-xs text-velvet-400 font-serif italic">Product</span>
                  </div>
                  <h3 className="font-product text-[11px] tracking-widest text-deep mb-1">{p.name}</h3>
                  <p className="text-sm font-medium text-deep">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}