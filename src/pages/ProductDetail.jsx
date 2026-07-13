import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="text-sm text-gold mt-4 inline-block">Back to Shop</Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: `${product.materials}\n\nCare: Store in the included pouch. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.`,
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 5-7 business days. Express delivery 2-3 business days ($12). 30-day returns — unworn items in original packaging.',
    },
  ]

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-taupe">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 md:w-20">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-gold' : 'border-transparent hover:border-warm-gray'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-stone">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="py-4">
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-ultra-wide text-charcoal">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-warm-gray'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-taupe">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="mt-4 text-xl font-serif text-charcoal">${product.price}</p>

            {/* Description */}
            <p className="mt-4 text-sm text-taupe leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-ultra-wide text-charcoal font-medium mb-3">
                Tone: <span className="text-taupe capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-xs uppercase tracking-wide border transition-colors ${
                      selectedVariant === variant
                        ? 'border-gold text-gold bg-gold/5'
                        : 'border-warm-gray text-charcoal hover:border-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-ultra-wide text-charcoal font-medium mb-3">Quantity</p>
              <div className="flex items-center border border-warm-gray w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm text-charcoal border-x border-warm-gray">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-gold text-cream py-4 text-xs uppercase tracking-ultra-wide font-medium hover:bg-gold-dark transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-warm-gray">
              {accordions.map(acc => (
                <div key={acc.key} className="border-b border-warm-gray">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs uppercase tracking-ultra-wide text-charcoal font-medium">
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-taupe transition-transform ${
                        openAccordion === acc.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4 text-sm text-taupe leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-warm-gray">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
