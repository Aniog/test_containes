import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ShoppingBag, Minus, Plus } from 'lucide-react'
import { products } from '@/lib/data'
import { useCart } from '@/components/shared/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="pt-28 pb-20 text-center section-padding">
        <h1 className="font-serif text-2xl text-brand-charcoal">Product not found</h1>
        <Link to="/shop" className="btn-outline mt-6 inline-block">Back to Shop</Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden rounded-sm bg-brand-sand/20 mb-3">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-24 rounded-sm overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2 md:py-4">
            <h1 className="font-serif text-2xl md:text-3xl tracking-wide uppercase text-brand-charcoal">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.round(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-warm-gray">({product.reviews})</span>
            </div>

            <p className="text-2xl font-light text-brand-charcoal mt-4">${product.price}</p>

            <p className="text-sm text-brand-warm-gray mt-4 leading-relaxed">
              {product.description}. Crafted with {product.material} materials for lasting shine and comfort. Hypoallergenic and suitable for sensitive skin.
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <p className="text-xs tracking-wide uppercase font-semibold text-brand-charcoal mb-3">Tone</p>
              <div className="flex gap-3">
                {product.tones.map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2.5 text-xs tracking-wide uppercase border rounded-full transition-all ${
                      selectedTone === tone
                        ? 'border-brand-gold bg-brand-gold text-white'
                        : 'border-brand-sand text-brand-charcoal hover:border-brand-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-wide uppercase font-semibold text-brand-charcoal mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-brand-sand rounded flex items-center justify-center text-brand-muted hover:border-brand-gold transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="text-sm font-medium text-brand-charcoal w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-brand-sand rounded flex items-center justify-center text-brand-muted hover:border-brand-gold transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="btn-accent w-full mt-8"
            >
              <ShoppingBag size={16} className="mr-2" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-brand-sand/50">
              {[
                { key: 'description', title: 'Description', content: `${product.name} — ${product.description}. Each piece is meticulously crafted with attention to detail, ensuring a finish that rivals fine jewelry at a fraction of the cost. Perfect for everyday wear or special occasions.` },
                { key: 'materials', title: 'Materials & Care', content: '18K Gold Plated over 925 Sterling Silver. Hypoallergenic, nickel-free, and lead-free. To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.' },
                { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Standard delivery 5-7 business days. Express 2-3 business days available at checkout. 30-day hassle-free returns — no questions asked.' },
              ].map(acc => (
                <div key={acc.key} className="border-b border-brand-sand/50">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs tracking-wide uppercase font-semibold text-brand-charcoal">{acc.title}</span>
                    <ChevronDown
                      size={16}
                      className={`text-brand-muted transition-transform duration-300 ${openAccordion === acc.key ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openAccordion === acc.key && (
                    <p className="pb-4 text-sm text-brand-warm-gray leading-relaxed">
                      {acc.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal tracking-wide text-center">You May Also Like</h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4 mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-sm bg-brand-sand/20 mb-3">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm tracking-wide uppercase text-brand-charcoal">{p.name}</h3>
                <p className="text-sm font-medium text-brand-charcoal mt-0.5">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
