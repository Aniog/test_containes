import React, { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, ShoppingBag, Check } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import { Button } from '@/components/ui/button'

export default function ProductPage() {
  const { id } = useParams()
  const { addItem, cart } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [addedToCart, setAddedToCart] = useState(false)

  const product = products.find((p) => p.id === Number(id))

  const related = useMemo(() => {
    if (!product) return []
    return products
      .filter((p) => p.id !== product.id && p.category === product.category)
      .slice(0, 4)
  }, [product])

  if (!product) {
    return (
      <main className="pt-24 pb-16 text-center">
        <p className="text-charcoal-light">Product not found.</p>
        <Link to="/shop" className="text-gold text-sm mt-4 inline-block">Back to Shop</Link>
      </main>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: product.variants[selectedVariant],
      quantity,
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: (
      <div className="space-y-3">
        <div>
          <p className="text-xs uppercase tracking-[0.1em] font-medium mb-1">Materials</p>
          <p className="text-sm text-charcoal-light">{product.materials}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.1em] font-medium mb-1">Care Instructions</p>
          <p className="text-sm text-charcoal-light">{product.care}</p>
        </div>
      </div>
    )},
    { id: 'shipping', title: 'Shipping & Returns', content: (
      <div className="space-y-3 text-sm text-charcoal-light">
        <p>Free worldwide shipping on all orders over $50. Orders typically arrive within 5–10 business days.</p>
        <p>30-day return policy. Items must be unworn and in original packaging. We'll provide a prepaid return label.</p>
      </div>
    )},
  ]

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="py-4 md:py-6">
          <Link to="/shop" className="text-xs uppercase tracking-[0.12em] text-charcoal-light hover:text-charcoal transition-colors">
            &larr; Back to Shop
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-14">
          {/* Left: Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-warm-ivory">
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
                  className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-sm border-2 transition-colors ${
                    selectedImage === i ? 'border-gold' : 'border-transparent hover:border-border-medium'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="md:sticky md:top-28 md:self-start">
            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border-medium'}
                  />
                ))}
              </div>
              <span className="text-xs text-charcoal-light">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Title & Price */}
            <h1 className="text-product-name text-lg md:text-xl">{product.name}</h1>
            <p className="text-2xl md:text-3xl font-serif font-medium mt-2">${product.price}</p>

            {/* Short description */}
            <p className="text-sm text-charcoal-light mt-4 leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.12em] font-medium mb-3">
                  Finish: <span className="text-gold">{product.variants[selectedVariant]}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((v, i) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(i)}
                      className={`px-6 py-2.5 text-xs uppercase tracking-[0.12em] font-medium border rounded-sm transition-all duration-300 ${
                        selectedVariant === i
                          ? 'border-charcoal bg-charcoal text-white'
                          : 'border-border-medium text-charcoal hover:border-charcoal'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-[0.12em] font-medium">Quantity</span>
                <div className="flex items-center border border-border-medium rounded-sm">
                  <button
                    className="p-2.5 hover:bg-warm-ivory transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease"
                  >
                    <ChevronDown size={14} />
                  </button>
                  <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                  <button
                    className="p-2.5 hover:bg-warm-ivory transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase"
                  >
                    <ChevronUp size={14} />
                  </button>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={handleAddToCart}
              >
                {addedToCart ? (
                  <span className="flex items-center gap-2">
                    <Check size={16} /> Added to Cart
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <ShoppingBag size={16} /> Add to Cart — ${(product.price * quantity).toFixed(2)}
                  </span>
                )}
              </Button>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-border-light">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-border-light">
                  <button
                    className="w-full flex items-center justify-between py-4 text-sm font-medium text-left hover:opacity-70 transition-opacity"
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                  >
                    <span className="text-xs uppercase tracking-[0.12em]">{acc.title}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        openAccordion === acc.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.id ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <div className="text-sm text-charcoal-light">
                      {acc.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-border-light">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] overflow-hidden bg-warm-ivory">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-product-name truncate">{p.name}</h3>
                    <p className="text-sm font-medium mt-1">${p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}