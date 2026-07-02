import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ShoppingBag, Shield, Truck, RefreshCw, ArrowLeft } from 'lucide-react'
import { getProduct, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'

function ProductThumb({ product, activeIdx, onSelect }) {
  return (
    <div className="flex flex-col gap-3">
      {product.images.map((img, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(idx)}
          className={`w-16 h-16 md:w-20 md:h-20 rounded-sm overflow-hidden transition-all duration-300 border-2 ${
            idx === activeIdx
              ? 'border-velmora-accent'
              : 'border-transparent hover:border-velmora-border'
          }`}
        >
          <div className={`w-full h-full bg-gradient-to-br ${img.bg}`} />
        </button>
      ))}
    </div>
  )
}

function AccordionSection({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="hairline-t">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-[0.15em] uppercase font-medium text-velmora-text">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-velmora-text-secondary transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="pb-5 text-sm text-velmora-text-secondary leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

function RelatedProductCard({ product }) {
  const { addItem } = useCart()
  return (
    <div className="group">
      <Link
        to={`/product/${product.id}`}
        className="block relative overflow-hidden rounded-sm aspect-[3/4] mb-3"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${product.images[0].bg} transition-transform duration-500 group-hover:scale-105`}
        />
      </Link>
      <Link to={`/product/${product.id}`} className="block">
        <h4 className="product-name text-[11px] text-velmora-text mb-1">
          {product.name}
        </h4>
        <p className="text-sm font-medium">${product.price}</p>
      </Link>
    </div>
  )
}

export default function ProductPage() {
  const { id } = useParams()
  const product = useMemo(() => getProduct(id), [id])

  const [activeImg, setActiveImg] = useState(0)
  const [selectedColor, setSelectedColor] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const related = useMemo(() => (product ? getRelatedProducts(product) : []), [product])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-outline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAdd = () => {
    addItem(product, selectedColor, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const fullStars = Math.floor(product.rating)
  const hasHalf = product.rating - fullStars >= 0.5

  return (
    <div className="pt-20 md:pt-24">
      <div className="page-container section-padding">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-velmora-text-muted mb-8">
          <Link to="/" className="hover:text-velmora-text transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-text transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-text">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div className="flex gap-4">
            <ProductThumb
              product={product}
              activeIdx={activeImg}
              onSelect={setActiveImg}
            />
            <div className="flex-1 aspect-[3/4] rounded-sm overflow-hidden bg-velmora-ivory">
              <div
                className={`w-full h-full bg-gradient-to-br ${product.images[activeImg].bg} transition-all duration-500`}
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <h1 className="product-name text-xl md:text-2xl text-velmora-text mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < fullStars
                        ? 'fill-velmora-gold text-velmora-gold'
                        : hasHalf && i === fullStars
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-text-secondary">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-2xl font-medium text-velmora-text mb-5">
              ${product.price}
            </p>

            <p className="text-sm text-velmora-text-secondary leading-relaxed mb-7">
              {product.description}
            </p>

            {/* Color selector */}
            <div className="mb-7">
              <p className="text-xs tracking-[0.1em] uppercase font-medium text-velmora-text mb-3">
                Finish: {selectedColor}
              </p>
              <div className="flex gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`px-6 py-2.5 text-xs tracking-[0.1em] uppercase rounded-sm border transition-all duration-300 ${
                      selectedColor === c
                        ? 'border-velmora-accent bg-velmora-accent/5 text-velmora-accent font-medium'
                        : 'border-velmora-border text-velmora-text-secondary hover:border-velmora-text'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-velmora-border rounded-sm">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:text-velmora-accent transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-5 text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:text-velmora-accent transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <button
                onClick={handleAdd}
                className="btn-accent flex-1"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                {added ? 'Added!' : `Add to Cart — $${product.price * quantity}`}
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                [Truck, 'Free Shipping'],
                [RefreshCw, '30-Day Returns'],
                [Shield, '1-Year Warranty'],
              ].map(([Icon, label]) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center gap-1.5 p-3"
                >
                  <Icon className="w-4 h-4 text-velmora-accent" strokeWidth={1.5} />
                  <span className="text-[10px] tracking-wider uppercase text-velmora-text-secondary">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <AccordionSection title="Description" defaultOpen={true}>
                {product.description}
              </AccordionSection>
              <AccordionSection title="Materials & Care">
                <p className="mb-3">{product.details}</p>
                <p>{product.care}</p>
              </AccordionSection>
              <AccordionSection title="Shipping & Returns">
                <p className="mb-3">
                  Free worldwide shipping on all orders. Orders are processed within
                  1–2 business days and delivered within 5–10 business days
                  depending on your location.
                </p>
                <p>
                  Not satisfied? Return any unworn item within 30 days for a
                  full refund. Visit our Returns page for details.
                </p>
              </AccordionSection>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-24 mb-16">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.2em] uppercase text-velmora-text-muted mb-3">
                Complete the Look
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-velmora-text">
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
              {related.map((p) => (
                <RelatedProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}