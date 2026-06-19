import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductGallery from '@/components/product/ProductGallery'
import Accordion from '@/components/product/Accordion'

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const product = products.find((p) => p.id === id)

  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-brand-charcoal mb-4">Product not found</p>
          <Link to="/shop" className="text-xs tracking-widest uppercase text-brand-gold underline underline-offset-4">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials}\n\nCare: ${product.care}` },
    { title: 'Shipping & Returns', content: `${product.shipping}\n\n${product.returns}` },
  ]

  const renderStars = (rating) => {
    const full = Math.floor(rating)
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < full ? 'text-brand-gold fill-brand-gold' : 'text-brand-border'}`}
      />
    ))
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-brand-stone">
          <Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Product main */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Info */}
          <div className="md:sticky md:top-24 md:self-start">
            <h1 className="font-serif text-2xl md:text-3xl text-brand-charcoal tracking-widest uppercase font-semibold">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">{renderStars(product.rating)}</div>
              <span className="text-sm text-brand-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-brand-charcoal mt-4">${product.price}</p>

            {/* Short desc */}
            <p className="text-sm text-brand-stone mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <label className="text-xs tracking-widest uppercase text-brand-stone block mb-3">
                Finish
              </label>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-3 text-xs tracking-widest uppercase border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-brand-charcoal bg-brand-charcoal text-white'
                        : 'border-brand-border text-brand-charcoal hover:border-brand-charcoal'
                    }`}
                  >
                    {v === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <label className="text-xs tracking-widest uppercase text-brand-stone block mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-brand-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-sm hover:bg-brand-warm transition-colors"
                >
                  -
                </button>
                <span className="px-6 py-3 text-sm font-medium border-x border-brand-border min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-sm hover:bg-brand-warm transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs tracking-widest uppercase transition-all duration-300 mt-8 ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-brand-gold text-white hover:bg-brand-gold-dark'
              }`}
            >
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-brand-border">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-16 md:mt-24 pt-16 border-t border-brand-border">
            <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal mb-8 font-semibold text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] bg-brand-warm overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-xs tracking-widest uppercase font-medium text-brand-charcoal">
                    {p.name}
                  </h3>
                  <span className="text-sm text-brand-charcoal">${p.price}</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}