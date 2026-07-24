import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronRight, ChevronDown, Minus, Plus, Heart, ShoppingBag, ArrowLeft } from 'lucide-react'
import { products, getProduct, getRelatedProducts, getBestsellers } from './lib-products'
import { useCart } from './context-CartContext'

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-warm-muted">
        <div className="text-center">
          <p className="text-lg font-serif mb-4">Product not found</p>
          <Link to="/shop" className="text-xs tracking-wider uppercase text-gold no-underline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const related = getRelatedProducts(product)
  const bestsellers = getBestsellers().filter(p => p.id !== product.id).slice(0, 4)
  const suggested = related.length >= 3 ? related : bestsellers

  const accordionItems = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: `${product.details}\n\n${product.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[10px] tracking-wider text-warm-muted mb-8">
        <Link to="/shop" className="hover:text-espresso transition-colors no-underline">Shop</Link>
        <ChevronRight size={12} />
        <span className="text-espresso/60">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Image gallery */}
        <div>
          <div className="aspect-[3/4] bg-stone mb-4 relative overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gold/10 mb-3" />
              <span className="text-xs tracking-wider uppercase text-warm-muted/40">{product.category}</span>
            </div>
          </div>

          <div className="flex gap-3">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-16 h-16 bg-stone flex items-center justify-center border transition-colors ${
                  activeImage === i ? 'border-gold' : 'border-transparent hover:border-warm-border'
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-gold/5" />
              </button>
            ))}
          </div>
        </div>

        {/* Product info */}
        <div>
          <h1 className="text-xl md:text-2xl font-serif tracking-wider text-espresso leading-tight mb-2">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < Math.floor(product.rating) ? '#b8863a' : 'none'} stroke="#b8863a" />
              ))}
            </div>
            <span className="text-xs text-warm-muted">{product.rating} ({product.reviewCount} reviews)</span>
          </div>

          <p className="text-2xl font-medium text-espresso mb-6">${product.price}</p>

          <p className="text-sm text-warm-gray leading-relaxed mb-8">{product.description}</p>

          {/* Variant selector */}
          {product.variants.length > 1 && (
            <div className="mb-6">
              <p className="text-[11px] tracking-wider text-espresso font-medium mb-3">FINISH</p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase border transition-all ${
                      selectedVariant === v
                        ? 'border-gold bg-gold/5 text-gold'
                        : 'border-warm-border text-warm-gray hover:border-gold/50'
                    }`}
                  >
                    {v} Tone
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-8">
            <p className="text-[11px] tracking-wider text-espresso font-medium mb-3">QUANTITY</p>
            <div className="flex items-center border border-warm-border w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:text-gold transition-colors"
              >
                <Minus size={14} />
              </button>
              <span className="w-12 text-center text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:text-gold transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex gap-3 mb-10">
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="flex-1 bg-gold hover:bg-gold-dark text-cream py-3.5 text-xs tracking-wider uppercase font-medium transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag size={15} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>
            <button className="p-3.5 border border-warm-border hover:border-gold hover:text-gold transition-colors">
              <Heart size={18} />
            </button>
          </div>

          {/* Accordions */}
          <div className="border-t border-warm-border/50">
            {accordionItems.map((item) => (
              <div key={item.key} className="border-b border-warm-border/50">
                <button
                  onClick={() => setOpenAccordion(openAccordion === item.key ? null : item.key)}
                  className="w-full flex items-center justify-between py-4 text-xs tracking-wider uppercase text-espresso font-medium"
                >
                  {item.title}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${openAccordion === item.key ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === item.key ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm text-warm-gray leading-relaxed whitespace-pre-line">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {suggested.length > 0 && (
        <section className="mt-20 md:mt-28">
          <h2 className="text-xl md:text-2xl font-serif text-espresso mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {suggested.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group no-underline">
                <div className="aspect-[3/4] bg-stone mb-4 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-gold/10" />
                </div>
                <p className="text-[11px] tracking-wider font-medium text-espresso leading-tight mb-1">{p.name}</p>
                <p className="text-sm text-espresso">${p.price}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
