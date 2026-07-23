import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Plus, Minus, ShoppingBag, ChevronRight } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import Stars from '@/components/ui/Stars'
import Accordion from '@/components/ui/Accordion'
import ProductGallery from '@/components/product/ProductGallery'
import ProductCard from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem, openCart } = useCart()
  const [tone, setTone] = useState(product?.tones?.[0] || 'Gold')
  const [qty, setQty] = useState(1)

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="font-serif text-4xl mb-4">Piece not found</h1>
        <Link to="/shop" className="text-gold underline tracking-wide">
          Back to shop
        </Link>
      </div>
    )
  }

  const handleAdd = () => {
    addItem({
      lineId: `${product.id}-${tone}`,
      id: product.id,
      name: product.name,
      price: product.price,
      tone,
      qty,
      imgId: product.imgId,
      shortDesc: product.shortDesc,
    })
    openCart()
  }

  const related = getRelatedProducts(product.id, 4)

  return (
    <div className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5">
        <nav className="flex items-center gap-2 text-xs text-muted">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight width={12} height={12} />
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <ChevronRight width={12} height={12} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 pb-20">
        {/* Gallery */}
        <ProductGallery product={product} />

        {/* Info */}
        <div className="md:py-4">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-3">
            {product.type}
          </p>
          <h1
            id={product.titleId}
            className="font-serif text-4xl md:text-5xl uppercase tracking-[0.1em] leading-tight"
          >
            {product.name}
          </h1>

          <div className="flex items-center gap-3 mt-4">
            <Stars rating={product.rating} size={15} />
            <span className="text-sm text-muted">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="text-2xl font-medium mt-5">{formatPrice(product.price)}</p>

          <p id={product.descId} className="mt-5 text-muted leading-relaxed">
            {product.shortDesc}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink mb-3">
              Tone: <span className="text-muted">{tone}</span>
            </p>
            <div className="flex gap-3">
              {product.tones.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className={`px-6 py-3 text-[11px] uppercase tracking-[0.2em] border transition-colors ${
                    tone === t
                      ? 'border-gold bg-gold text-cream'
                      : 'border-ink/20 text-ink hover:border-ink'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center border border-ink/20">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-4 py-4 hover:bg-sand transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus width={14} height={14} />
              </button>
              <span className="px-5 text-sm tabular-nums w-12 text-center">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="px-4 py-4 hover:bg-sand transition-colors"
                aria-label="Increase quantity"
              >
                <Plus width={14} height={14} />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 bg-gold text-cream text-[11px] uppercase tracking-[0.25em] py-4 hover:bg-gold-deep transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag width={15} height={15} strokeWidth={1.5} />
              Add to Cart — {formatPrice(product.price * qty)}
            </button>
          </div>

          <p className="mt-4 text-xs text-muted">
            Free worldwide shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion
              items={[
                { title: 'Description', content: product.description },
                { title: 'Materials & Care', content: product.materials },
                { title: 'Shipping & Returns', content: product.shipping },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="py-20 md:py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
