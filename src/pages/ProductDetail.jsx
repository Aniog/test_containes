import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import products from '@/data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-ink mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  const accordionItems = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: `${product.materials}. ${product.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: `${product.shipping} ${product.returns}` },
  ]

  return (
    <div className="pt-20 md:pt-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="py-4 text-xs text-velmora-stone font-sans">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 pb-20">
          {/* Gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-square bg-velmora-blush flex items-center justify-center">
              <span className="text-velmora-stone/30 font-serif text-lg text-center px-4">
                {product.name}
              </span>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 flex-shrink-0 bg-velmora-blush transition-opacity ${
                    activeImage === i ? 'opacity-100 ring-1 ring-velmora-gold' : 'opacity-50 hover:opacity-75'
                  }`}
                  aria-label={`View ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <p className="text-xs tracking-super uppercase text-velmora-stone mb-2 font-sans">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-velmora-ink mb-4">
              {product.name}
            </h1>
            <p className="font-serif text-2xl text-velmora-gold mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`} />
              ))}
              <span className="text-sm text-velmora-stone ml-2 font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-velmora-charcoal/70 leading-relaxed mb-8 font-sans">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-wider uppercase text-velmora-stone mb-3 font-sans">
                Finish: {selectedVariant} Tone
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-2 text-sm font-sans transition-all border ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-sand text-velmora-charcoal hover:border-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-wider uppercase text-velmora-stone mb-3 font-sans">
                Quantity
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-velmora-sand text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-velmora-charcoal font-sans">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-velmora-sand text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => {
                for (let i = 0; i < quantity; i++) addItem(product, selectedVariant)
              }}
              className="btn-primary w-full mb-8"
            >
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-velmora-sand">
              {accordionItems.map((item) => (
                <div key={item.key} className="border-b border-velmora-sand">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.key ? null : item.key)}
                    className="w-full flex items-center justify-between py-4 text-sm tracking-wider uppercase text-velmora-charcoal font-sans hover:text-velmora-gold transition-colors"
                  >
                    {item.title}
                    {openAccordion === item.key ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {openAccordion === item.key && (
                    <div className="pb-4 text-sm text-velmora-charcoal/70 leading-relaxed font-sans animate-fade-in">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="py-16 border-t border-velmora-sand">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">Complete Your Collection</p>
            <h2 className="section-title">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-square bg-velmora-blush flex items-center justify-center mb-4">
                  <span className="text-velmora-stone/30 font-serif text-sm text-center px-2">
                    {p.name}
                  </span>
                </div>
                <h3 className="font-serif text-sm tracking-wider uppercase text-velmora-ink group-hover:text-velmora-gold transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-velmora-gold mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}