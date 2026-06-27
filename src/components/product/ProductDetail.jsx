import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, ShoppingBag, Minus, Plus } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-serif text-base uppercase tracking-[0.1em] text-velmora-text">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-velmora-muted" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velmora-muted" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-velmora-muted leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()

  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-velmora-muted mb-4">Product not found</p>
          <Link to="/shop" className="text-velmora-gold text-sm uppercase tracking-wider hover:text-velmora-gold-light">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
  }

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-velmora-dim uppercase tracking-wider">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-muted">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3x4] overflow-hidden bg-velmora-elevated mb-4">
              <img
                data-strk-img-id={selectedImage === 0 ? product.imgId : product.imgIdHover}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {[product.imgId, product.imgIdHover].map((imgId, i) => (
                <button
                  key={imgId}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-24 overflow-hidden bg-velmora-elevated border-2 transition-colors ${
                    selectedImage === i ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${imgId}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl uppercase tracking-[0.15em] text-velmora-text"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-muted">({product.reviews})</span>
            </div>

            <p className="text-2xl font-serif text-velmora-gold mt-4">${product.price}</p>

            <p
              id={product.descId}
              className="text-sm text-velmora-muted leading-relaxed mt-5"
            >
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-xs font-sans font-medium uppercase tracking-[0.15em] text-velmora-text mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
                      selectedTone === tone
                        ? 'bg-velmora-gold text-velmora-black'
                        : 'border border-velmora-border text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-sans font-medium uppercase tracking-[0.15em] text-velmora-text mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2.5 text-velmora-muted hover:text-velmora-text transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2.5 text-sm text-velmora-text min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2.5 text-velmora-muted hover:text-velmora-text transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-velmora-gold text-velmora-black py-4 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-velmora-gold-light transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-border">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">
                  Each piece is carefully crafted with attention to detail, ensuring a finish that
                  rivals fine jewelry at a fraction of the cost.
                </p>
              </Accordion>

              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  <li>• 18K Gold Plated over brass base</li>
                  <li>• Hypoallergenic — nickel and lead free</li>
                  <li>• Tarnish-resistant coating</li>
                  <li>• Store in the provided pouch when not wearing</li>
                  <li>• Avoid contact with water, perfume, and lotions</li>
                  <li>• Gently wipe with a soft cloth after each wear</li>
                </ul>
              </Accordion>

              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>• Free worldwide shipping on all orders</li>
                  <li>• Standard delivery: 5–10 business days</li>
                  <li>• Express delivery available at checkout</li>
                  <li>• 30-day hassle-free returns</li>
                  <li>• Items must be unworn and in original packaging</li>
                  <li>• Gift wrapping available for all orders</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28 border-t border-velmora-border pt-16">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-text tracking-wide text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3x4] overflow-hidden bg-velmora-elevated">
                  <img
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3
                  id={p.titleId}
                  className="font-serif text-xs md:text-sm uppercase tracking-[0.12em] text-velmora-text mt-3 group-hover:text-velmora-gold transition-colors"
                >
                  {p.name}
                </h3>
                <p className="text-sm text-velmora-gold mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
