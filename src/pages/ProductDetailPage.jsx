import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-warm-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-[0.15em] uppercase font-medium text-charcoal">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-warm-gray" /> : <ChevronDown className="w-4 h-4 text-warm-gray" />}
      </button>
      {open && <div className="pb-4 text-sm text-warm-gray leading-relaxed">{children}</div>}
    </div>
  )
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-gold text-sm underline">Back to shop</Link>
      </div>
    )
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 md:w-20 md:h-24 flex-shrink-0 overflow-hidden border-2 transition-colors ${activeImage === i ? 'border-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-desc] [pdp-name]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-ivory">
              <img
                data-strk-img-id={`pdp-main-${product.id}-${activeImage}`}
                data-strk-img={`[pdp-desc] [pdp-name] gold jewelry detail`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="py-2 md:py-0">
            <h1
              id="pdp-name"
              className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-charcoal"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-warm-border'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-gray">({product.reviews})</span>
            </div>

            <p className="font-serif text-2xl mt-4">${product.price}</p>

            <p id="pdp-desc" className="text-sm text-warm-gray leading-relaxed mt-4">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs tracking-[0.1em] uppercase text-warm-gray mb-2">Tone</p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs tracking-[0.1em] uppercase border transition-colors ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-white'
                        : 'border-warm-border text-charcoal hover:border-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-[0.1em] uppercase text-warm-gray mb-2">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center border border-warm-border text-warm-gray hover:text-charcoal transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center border border-warm-border text-warm-gray hover:text-charcoal transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full mt-8 bg-gold text-white text-xs tracking-[0.2em] uppercase font-medium py-4 flex items-center justify-center gap-2 hover:bg-gold-dark transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>18K Gold Plated over brass base. Hypoallergenic — nickel and lead free.</p>
                <p className="mt-2">To keep your jewelry looking its best, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery 5–10 business days.</p>
                <p className="mt-2">30-day hassle-free returns. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl tracking-[0.05em] text-charcoal text-center">You May Also Like</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-3 mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-ivory">
                  <img
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`[related-name-${p.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 id={`related-name-${p.id}`} className="font-serif text-xs md:text-sm tracking-[0.15em] uppercase text-charcoal mt-2">{p.name}</h3>
                <p className="text-sm mt-0.5">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
