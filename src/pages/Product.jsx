import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react'
import ProductGallery from '@/components/product/ProductGallery'
import Accordion from '@/components/product/Accordion'
import StarRating from '@/components/ui/StarRating'
import ProductCard from '@/components/ui/ProductCard'
import { useCart } from '@/context/CartContext'
import {
  PRODUCTS,
  getProductBySlug,
  getRelatedProducts,
  formatPrice,
} from '@/data/products'

const TONES = ['gold', 'silver']

export default function Product() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addToCart } = useCart()
  const [tone, setTone] = useState(product?.tone || 'gold')
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const related = getRelatedProducts(product.slug)
  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materialsCare },
    { title: 'Shipping & Returns', content: product.shippingReturns },
  ]

  const handleAddToCart = () => {
    addToCart(product, { quantity, tone })
  }

  return (
    <div className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-12">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-sans text-charcoal/70 hover:text-gold transition-colors duration-300 mb-6 md:mb-8"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery product={product} />

          <div className="lg:pl-6">
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.18em] text-espresso">
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-4">
              <p className="font-serif text-2xl text-gold">
                {formatPrice(product.price)}
              </p>
              <StarRating
                rating={product.rating}
                reviewsCount={product.reviewsCount}
                size={14}
              />
            </div>
            <p className="mt-5 text-sm text-charcoal/80 font-sans font-light leading-relaxed">
              {product.shortDescription}
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.14em] font-sans text-espresso mb-3">
                Metal Tone
              </p>
              <div className="flex items-center gap-3">
                {TONES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-[0.14em] font-sans border transition-colors duration-300 ${
                      tone === t
                        ? 'bg-espresso text-cream border-espresso'
                        : 'bg-transparent text-espresso border-espresso/30 hover:border-espresso'
                    }`}
                    aria-pressed={tone === t}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.14em] font-sans text-espresso mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-espresso/20">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="w-11 h-11 flex items-center justify-center text-espresso hover:text-gold transition-colors duration-300"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm font-sans">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="w-11 h-11 flex items-center justify-center text-espresso hover:text-gold transition-colors duration-300"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-8 w-full bg-gold text-espresso py-4 text-xs uppercase tracking-[0.18em] font-sans hover:bg-soft-gold transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              Add to Cart
            </button>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="py-16 md:py-20 border-t border-espresso/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-espresso text-center mb-10 md:mb-14">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
