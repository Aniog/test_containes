import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const product = products.find(p => p.id === id)

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-ivory pt-20">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-velmora-dark mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-xs uppercase tracking-[0.15em] text-velmora-gold hover:text-velmora-gold-dark transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, quantity, selectedVariant)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: 'Crafted from 18K gold-plated brass with a high-polish finish. Hypoallergenic, nickel-free, and lead-free. Care: Avoid contact with water, perfume, and lotions. Store in the provided pouch. Clean gently with a soft, dry cloth.',
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Delivery within 5–10 business days. 30-day return window for unworn items in original packaging. Free exchanges. For full details, visit our Shipping & Returns page.',
    },
  ]

  return (
    <div className="min-h-screen bg-velmora-ivory pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Breadcrumb */}
        <div className="py-4 md:py-6">
          <nav className="flex items-center gap-2 text-xs text-velmora-taupe font-sans">
            <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-velmora-slate">{product.name}</span>
          </nav>
        </div>

        {/* Product section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 pb-16 md:pb-20">
          {/* Left: Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-velmora-warm-light overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-warm-light'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product info */}
          <div className="md:pl-4">
            <h1 className="font-serif-alt text-lg md:text-xl uppercase tracking-[0.15em] text-velmora-dark mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-warm-light'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-taupe font-sans">{product.reviews} reviews</span>
            </div>

            {/* Price */}
            <p className="text-xl md:text-2xl font-sans text-velmora-dark mb-6">${product.price}</p>

            {/* Short description */}
            <p className="text-sm text-velmora-slate leading-relaxed mb-8 font-sans">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.15em] text-velmora-taupe mb-3 font-sans">Finish</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-[0.1em] border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-warm-light text-velmora-slate hover:border-velmora-taupe'
                    }`}
                  >
                    {variant === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.15em] text-velmora-taupe mb-3 font-sans">Quantity</p>
              <div className="flex items-center gap-4 border border-velmora-warm-light w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-3 py-2.5 hover:bg-velmora-warm-light transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5 text-velmora-slate" />
                </button>
                <span className="text-sm font-sans text-velmora-dark w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-3 py-2.5 hover:bg-velmora-warm-light transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5 text-velmora-slate" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full text-xs uppercase tracking-[0.2em] py-4 transition-all duration-300 ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-velmora-gold hover:bg-velmora-gold-dark text-white'
              }`}
            >
              {added ? 'Added to Bag!' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-warm-light">
              {accordionItems.map(item => (
                <div key={item.id} className="border-b border-velmora-warm-light">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-4 text-sm font-sans text-velmora-slate hover:text-velmora-dark transition-colors"
                  >
                    <span className="text-xs uppercase tracking-[0.15em]">{item.title}</span>
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {openAccordion === item.id && (
                    <div className="pb-4 text-sm text-velmora-taupe leading-relaxed font-sans pr-6">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="pb-16 md:pb-24 border-t border-velmora-warm-light pt-12">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-dark mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[4/5] bg-velmora-warm-light overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif-alt text-xs uppercase tracking-[0.15em] text-velmora-slate group-hover:text-velmora-gold transition-colors text-center">
                    {p.name}
                  </h3>
                  <p className="text-sm font-sans text-velmora-dark text-center mt-1">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}