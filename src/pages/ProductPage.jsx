import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ShoppingBag, Heart } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setAdded(false)
  }, [variant, quantity])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-ivory">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link to="/shop" className="text-velmora-gold text-sm tracking-widest uppercase underline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAdd = () => {
    addItem(product, quantity, variant)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
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
      content: `${product.materials}\n\nCare: ${product.care}`,
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders over $50. Orders are processed within 1-2 business days and delivered within 5-10 business days depending on your location.\n\nWe offer 30-day hassle-free returns. Items must be unused and in original packaging.',
    },
  ]

  return (
    <div className="min-h-screen bg-velmora-ivory pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-velmora-warm-gray mb-8">
          <Link to="/" className="hover:text-velmora-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible hide-scrollbar">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-velmora-charcoal' : 'border-transparent'
                  }`}
                >
                  <img
                    src={`https://images.unsplash.com/${img.query}?w=${img.width}&h=${Math.round(img.width * 4 / 3)}&fit=crop&q=80`}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[3/4] bg-velmora-cream overflow-hidden">
              <img
                src={`https://images.unsplash.com/${product.images[selectedImage].query}?w=800&h=${Math.round(800 * 4 / 3)}&fit=crop&q=80`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase text-velmora-charcoal mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.round(product.rating)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'fill-velmora-border text-velmora-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl md:text-3xl text-velmora-charcoal mb-6">
              ${product.price}
            </p>

            <p className="text-sm text-velmora-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-velmora-warm-gray mb-3">
                Metal Tone
              </p>
              <div className="flex items-center gap-3">
                {['gold', 'silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2.5 text-xs tracking-widest uppercase border transition-all duration-300 ${
                      variant === v
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                        : 'border-velmora-border text-velmora-charcoal hover:border-velmora-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase text-velmora-warm-gray mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-border w-fit">
                <button
                  className="w-10 h-10 flex items-center justify-center text-velmora-warm-gray hover:text-velmora-charcoal"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  className="w-10 h-10 flex items-center justify-center text-velmora-warm-gray hover:text-velmora-charcoal"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="flex items-center gap-3 mb-10">
              <button
                onClick={handleAdd}
                className={`flex-1 py-4 text-xs tracking-widest uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  added
                    ? 'bg-green-700 text-white'
                    : 'bg-velmora-charcoal text-white hover:bg-velmora-gold'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>
              <button
                className="w-14 h-14 border border-velmora-border flex items-center justify-center hover:border-velmora-charcoal transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-velmora-border">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-velmora-border">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === acc.key ? null : acc.key)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs tracking-widest uppercase font-sans text-velmora-charcoal">
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-velmora-warm-gray transition-transform duration-300 ${
                        openAccordion === acc.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.key ? 'max-h-60 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-velmora-muted leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group"
              >
                <div className="aspect-[3/4] bg-velmora-cream overflow-hidden mb-3">
                  <img
                    src={`https://images.unsplash.com/${p.images[0].query}?w=${p.images[0].width}&h=${Math.round(p.images[0].width * 4 / 3)}&fit=crop&q=80`}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm tracking-widest uppercase text-velmora-charcoal mb-1 truncate">
                  {p.name}
                </h3>
                <p className="text-xs text-velmora-warm-gray font-sans">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
