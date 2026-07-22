import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react'
import products from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductGallery from '@/components/product/ProductGallery'
import Accordion from '@/components/product/Accordion'

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const product = products.find((p) => p.id === id)

  const [selectedVariant, setSelectedVariant] = useState(product?.variant || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-velvet-muted mb-4">Product not found</p>
          <Link to="/shop" className="btn-outline text-sm">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials}. ${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const discount = product.id === 'royal-heirloom-set' ? true : false

  return (
    <main className="pt-28 pb-16">
      <div className="container-wide">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-velvet-muted hover:text-velvet-gold transition-colors font-sans"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Shop
          </Link>
        </div>

        {/* Product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Info */}
          <div className="flex flex-col">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-velvet-gold mb-3">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-velvet-text mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-velvet-gold text-velvet-gold'
                        : 'text-velvet-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-velvet-dim font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-3xl text-velvet-gold">${product.price}</span>
              {discount && (
                <span className="text-sm text-velvet-dim line-through font-sans">$128</span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-velvet-muted font-sans leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="hairline mb-6" />

            {/* Variant selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-xs uppercase tracking-wider text-velvet-dim mb-3">
                  Finish
                </p>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-6 py-3 text-sm font-sans rounded-sm border transition-all ${
                        selectedVariant === v
                          ? 'border-velvet-gold text-velvet-gold bg-velvet-gold/10'
                          : 'border-velvet-border text-velvet-muted hover:border-velvet-text'
                      }`}
                    >
                      {v.charAt(0).toUpperCase() + v.slice(1)} Tone
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-velvet-border rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velvet-muted hover:text-velvet-text transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm text-velvet-text font-sans min-w-[32px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velvet-muted hover:text-velvet-text transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 btn-primary inline-flex items-center justify-center gap-2 ${
                  added ? 'bg-green-600 hover:bg-green-600' : ''
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {added ? 'Added!' : 'Add to Cart'}
              </button>
            </div>

            {/* Accordion */}
            <Accordion items={accordionItems} />
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 hairline">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-velvet-text mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] bg-velvet-surface rounded-sm overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name text-velvet-text mb-1">{p.name}</h3>
                  <p className="font-serif text-sm text-velvet-gold">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}