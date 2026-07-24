import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-midnight-600">Product not found</h2>
          <Link to="/shop" className="btn-primary mt-6 inline-block text-xs">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const images = [product.images.primary, product.images.hover]

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const accordions = [
    {
      id: 'description',
      label: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      label: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-midnight-600 leading-relaxed">
            <strong className="text-midnight-800">Materials:</strong>{' '}
            {product.materials}
          </p>
          <p className="text-sm text-midnight-600 leading-relaxed">
            <strong className="text-midnight-800">Care:</strong>{' '}
            {product.care}
          </p>
        </div>
      ),
    },
    {
      id: 'shipping',
      label: 'Shipping & Returns',
      content: (
        <div className="space-y-2 text-sm text-midnight-600 leading-relaxed">
          <p>Free worldwide shipping on all orders over $50.</p>
          <p>Orders are processed within 1–2 business days.</p>
          <p>
            30-day return policy. Pieces must be returned in original condition
            with packaging.
          </p>
        </div>
      ),
    },
  ]

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div className="min-h-screen bg-cream pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6 lg:py-8">
        {/* Back link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-[11px] tracking-widest uppercase text-midnight-500 hover:text-midnight-900 transition-colors mb-6"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Gallery */}
          <div>
            <div className="aspect-[4/5] rounded-sm overflow-hidden bg-ivory mb-3">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-16 rounded-sm overflow-hidden border-2 transition-colors ${
                    activeImage === i
                      ? 'border-gold-500'
                      : 'border-transparent hover:border-midnight-900/20'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-[10px] tracking-[0.2em] uppercase text-gold-600">
              {product.category}
            </span>
            <h1 className="font-serif text-3xl lg:text-4xl text-midnight-900 mt-2 font-light tracking-wider uppercase">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold-400 text-gold-400'
                        : 'text-midnight-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[11px] text-midnight-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-serif font-medium text-midnight-900 mt-4">
              ${product.price}
            </p>

            <p className="text-sm text-midnight-600 leading-relaxed mt-4">
              {product.description}
            </p>

            <div className="hairline my-6" />

            {/* Variant selector */}
            <div>
              <span className="text-[11px] tracking-widest uppercase text-midnight-500">
                Finish: <strong className="text-midnight-900">{selectedVariant}</strong>
              </span>
              <div className="flex gap-2 mt-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase rounded-sm border transition-all ${
                      selectedVariant === v
                        ? 'border-midnight-900 bg-midnight-900 text-cream'
                        : 'border-midnight-900/15 text-midnight-600 hover:border-midnight-900/40'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="hairline my-6" />

            {/* Quantity + Add to Cart */}
            <div className="flex gap-3 items-center">
              <div className="flex items-center border border-midnight-900/15 rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-midnight-900/5 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center text-sm font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-midnight-900/5 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`btn-primary flex-1 text-xs ${
                  addedToCart ? 'bg-green-700 hover:bg-green-700' : ''
                }`}
              >
                {addedToCart ? 'Added to Bag!' : 'Add to Cart'}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-8 space-y-0">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-t border-midnight-900/10">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === acc.id ? null : acc.id)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-[11px] tracking-widest uppercase text-midnight-700">
                      {acc.label}
                    </span>
                    {openAccordion === acc.id ? (
                      <ChevronUp className="w-3.5 h-3.5 text-midnight-400" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-midnight-400" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.id
                        ? 'max-h-96 pb-4'
                        : 'max-h-0'
                    }`}
                  >
                    <div className="text-sm text-midnight-600 leading-relaxed">
                      {acc.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 lg:mt-24">
            <div className="hairline mb-10" />
            <h2 className="font-serif text-2xl lg:text-3xl text-midnight-900 font-light mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.slug}`}
                  className="group"
                >
                  <div className="aspect-[4/5] rounded-sm overflow-hidden bg-ivory">
                    <img
                      src={p.images.primary}
                      alt={p.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-[11px] tracking-widest uppercase font-medium text-midnight-900">
                      {p.name}
                    </h3>
                    <p className="text-xs text-midnight-500 mt-0.5">
                      ${p.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}