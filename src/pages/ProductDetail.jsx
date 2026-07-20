import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ShoppingBag, Plus, Minus, ChevronDown } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../hooks/useCart'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedMaterial, setSelectedMaterial] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <p className="text-muted mb-4">Product not found</p>
        <Link to="/collection" className="btn-primary">Back to Shop</Link>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: 'Crafted from premium brass with 18K gold plating. Features ethically sourced cubic zirconia crystals. To maintain your jewelry\'s luster, avoid contact with water, perfume, and lotions. Store in a cool, dry place and gently clean with a soft cloth.',
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Your piece will arrive in 5–10 business days in elegant Velmora packaging. Not quite right? We offer free 30-day returns on all unworn items in original packaging. Start a return easily through your account.',
    },
  ]

  return (
    <section className="section-padding bg-cream">
      <div className="container-page">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted mb-8">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-ink transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-square bg-warm-100 rounded-sm overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-sm overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-gold'
                      : 'border-transparent hover:border-border'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-2">
              {product.category}
            </p>
            <h1 className="product-name text-xl md:text-2xl mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-muted text-sm leading-relaxed mb-8">{product.description}</p>

            {/* Material variant */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-muted mb-3">Finish</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map(material => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all border ${
                      selectedMaterial === material
                        ? 'border-gold bg-gold-light text-gold-dark'
                        : 'border-border text-muted hover:border-warm-300'
                    }`}
                  >
                    {material === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs tracking-widest uppercase text-muted">Qty</span>
              <div className="flex items-center gap-3 border border-border rounded-full px-4 py-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-6 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, quantity)}
              className="btn-primary w-full text-center flex items-center justify-center gap-3 text-base py-4"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust note */}
            <p className="text-xs text-muted text-center mt-3">
              Free shipping &amp; 30-day returns
            </p>

            {/* Accordion */}
            <div className="mt-10 border-t border-border">
              {accordionItems.map(item => (
                <div key={item.id} className="border-b border-border-light">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-4 text-sm font-medium text-ink hover:text-gold transition-colors"
                  >
                    {item.title}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openAccordion === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div className={`accordion-content ${openAccordion === item.id ? 'open' : ''}`}>
                    <div className="pb-4">
                      <p className="text-sm text-muted leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 md:mt-24">
            <div className="text-center mb-10">
              <h2 className="heading-md">You May Also Like</h2>
              <div className="w-12 h-0.5 bg-gold/30 mx-auto mt-3" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(rp => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                  <div className="aspect-square bg-warm-100 rounded-sm overflow-hidden mb-3">
                    <img
                      src={rp.images[0]}
                      alt={rp.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name text-xs">{rp.name}</h3>
                  <p className="text-sm mt-1">${rp.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  )
}