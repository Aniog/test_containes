import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'

const accordionItems = [
  { key: 'description', label: 'Description' },
  { key: 'materials', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!product) {
    return (
      <main className="pt-24 pb-16">
        <div className="max-w-[1400px] mx-auto section-padding text-center">
          <h1 className="font-serif text-heading-lg text-charcoal-800 mb-4">
            Product Not Found
          </h1>
          <p className="text-charcoal-500 mb-8">
            The piece you&apos;re looking for seems to have wandered off.
          </p>
          <Link to="/shop" className="btn-primary text-xs">
            Back to Shop
          </Link>
        </div>
      </main>
    )
  }

  const images = [product.image, product.imageHover || product.image]

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  const getAccordionContent = (key) => {
    switch (key) {
      case 'description':
        return product.description
      case 'materials':
        return product.materials + '\n\nCare Instructions: ' + product.care
      case 'shipping':
        return product.shipping
      default:
        return ''
    }
  }

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto section-padding py-4">
        <nav className="flex items-center gap-2 text-xs text-charcoal-400">
          <Link to="/" className="hover:text-gold-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold-500 transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-charcoal-600">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-[1400px] mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 border-2 overflow-hidden transition-colors ${
                    selectedImage === idx
                      ? 'border-gold-500'
                      : 'border-charcoal-100 hover:border-charcoal-300'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[4/5] bg-charcoal-50 overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-gold-50 text-gold-600 text-[10px] font-medium tracking-[0.15em] uppercase border border-gold-200 mb-4">
                {product.badge}
              </span>
            )}

            {/* Name */}
            <h1 className="font-serif text-2xl md:text-heading-lg tracking-[0.12em] uppercase text-charcoal-800 mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold-400 text-gold-400'
                        : 'text-charcoal-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal-400">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-charcoal-800 mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Short description */}
            <p className="text-sm text-charcoal-500 leading-relaxed mb-8 max-w-md">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.15em] uppercase text-charcoal-500 mb-3">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 text-xs tracking-[0.1em] uppercase border transition-all ${
                      selectedVariant === variant
                        ? 'border-charcoal-800 bg-charcoal-800 text-ivory-50'
                        : 'border-charcoal-200 text-charcoal-600 hover:border-charcoal-400'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] uppercase text-charcoal-500 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-charcoal-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal-400 hover:text-charcoal-800 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium text-charcoal-700">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal-400 hover:text-charcoal-800 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full text-xs mb-4"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 py-4 border-t border-charcoal-100 mt-6">
              <div className="flex items-center gap-1.5 text-charcoal-400">
                <Truck className="w-4 h-4" />
                <span className="text-[11px]">Free Shipping</span>
              </div>
              <div className="flex items-center gap-1.5 text-charcoal-400">
                <RotateCcw className="w-4 h-4" />
                <span className="text-[11px]">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-1.5 text-charcoal-400">
                <Shield className="w-4 h-4" />
                <span className="text-[11px]">Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-charcoal-100">
              {accordionItems.map((item) => (
                <div key={item.key} className="border-b border-charcoal-100">
                  <button
                    onClick={() => toggleAccordion(item.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs tracking-[0.15em] uppercase text-charcoal-600">
                      {item.label}
                    </span>
                    {openAccordion === item.key ? (
                      <ChevronUp className="w-4 h-4 text-charcoal-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-charcoal-400" />
                    )}
                  </button>
                  {openAccordion === item.key && (
                    <div className="pb-4 text-sm text-charcoal-500 leading-relaxed whitespace-pre-line">
                      {getAccordionContent(item.key)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16 md:mt-24 pt-16 border-t border-charcoal-100">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-500 mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-2xl md:text-heading-md text-charcoal-800">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
