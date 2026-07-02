import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, Shield, Heart } from 'lucide-react'
import { getProductById, getRelatedProducts } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ui/ProductCard'
import StarRating from '../components/ui/StarRating'

const ProductDetailPage = () => {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <main className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </main>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const relatedProducts = getRelatedProducts(id, 4)

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description + ' Each piece is carefully crafted using traditional techniques combined with modern design sensibility. The 18K gold plating ensures a luxurious finish that resists tarnishing.',
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: 'Base: Recycled brass with 18K gold plating. Hypoallergenic and nickel-free. To maintain the luster, store in the provided pouch when not wearing. Avoid contact with water, perfume, and lotions. Clean gently with a soft, dry cloth.',
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery: 5-7 business days. Express delivery: 2-3 business days ($12). 30-day hassle-free returns. Items must be unworn and in original packaging. Gift sets include complimentary gift wrapping.',
    },
  ]

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-xs text-[var(--velmora-text-muted)] flex items-center gap-2">
          <Link to="/" className="hover:text-[var(--velmora-text)] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[var(--velmora-text)] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[var(--velmora-text)]">{product.name}</span>
        </nav>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] bg-[var(--velmora-bg-secondary)] mb-4 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-[var(--velmora-accent)]'
                      : 'border-transparent hover:border-[var(--velmora-border)]'
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

          {/* Product info */}
          <div className="lg:py-8">
            {product.badge && (
              <span className="inline-block bg-[var(--velmora-accent-light)] text-[var(--velmora-dark)] text-[10px] tracking-wider-luxury uppercase px-3 py-1.5 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-2xl md:text-3xl tracking-wide-luxury uppercase mb-3">
              {product.name}
            </h1>

            <StarRating rating={product.rating} reviews={product.reviews} />

            <p className="font-serif text-2xl mt-4 mb-6">${product.price}</p>

            <p className="text-[var(--velmora-text-secondary)] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-wider-luxury uppercase mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-wider-luxury uppercase border transition-colors ${
                      selectedVariant === variant
                        ? 'border-[var(--velmora-accent)] bg-[var(--velmora-accent-light)] text-[var(--velmora-dark)]'
                        : 'border-[var(--velmora-border)] text-[var(--velmora-text-secondary)] hover:border-[var(--velmora-text)]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-wider-luxury uppercase mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-[var(--velmora-border)] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[var(--velmora-bg-secondary)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[var(--velmora-bg-secondary)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-sm tracking-wider-luxury uppercase transition-all duration-300 ${
                addedToCart
                  ? 'bg-[var(--velmora-success)] text-white'
                  : 'btn-dark'
              }`}
            >
              {addedToCart ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust badges */}
            <div className="mt-8 pt-8 border-t border-[var(--velmora-border-light)] grid grid-cols-3 gap-4">
              {[
                { icon: Truck, text: 'Free Shipping' },
                { icon: Shield, text: '18K Gold' },
                { icon: Heart, text: 'Hypoallergenic' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="text-center">
                  <Icon className="w-5 h-5 mx-auto mb-2 text-[var(--velmora-accent)]" />
                  <p className="text-[10px] tracking-wider-luxury uppercase text-[var(--velmora-text-muted)]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 max-w-3xl">
          {accordions.map((acc) => (
            <div key={acc.id} className="border-b border-[var(--velmora-border-light)]">
              <button
                onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="text-sm tracking-wider-luxury uppercase">
                  {acc.title}
                </span>
                {openAccordion === acc.id ? (
                  <ChevronUp className="w-4 h-4 text-[var(--velmora-text-muted)]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[var(--velmora-text-muted)]" />
                )}
              </button>
              {openAccordion === acc.id && (
                <div className="pb-6">
                  <p className="text-sm text-[var(--velmora-text-secondary)] leading-relaxed">
                    {acc.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="section-title">You May Also Like</h2>
          <p className="section-subtitle">Complete the look</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductDetailPage
