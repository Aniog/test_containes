import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, Plus, Minus, Check } from 'lucide-react'
import { products } from '@/data/products.js'
import { useCart } from '@/context/CartContext.jsx'
import ProductCard from '@/components/ProductCard.jsx'

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const product = products.find((p) => p.id === id)

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center bg-velmora-cream min-h-screen">
        <h1 className="font-serif text-3xl text-velmora-charcoal">Product not found</h1>
        <Link to="/shop" className="btn-outline mt-6 inline-block">
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
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
        'Free worldwide shipping on all orders over $50. Standard delivery: 5-10 business days. Express delivery: 2-4 business days.\n\nWe offer 30-day hassle-free returns. Items must be unworn and in original packaging.',
    },
  ]

  return (
    <div className="pt-24 md:pt-28 pb-20 bg-velmora-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-velmora-warmgray font-sans text-xs uppercase tracking-wider">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-ink">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
                data-strk-img-id={`product-main-${product.id}`}
                data-strk-img={`[product-detail-name]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
              />
            </div>
            <span id="product-detail-name" className="sr-only">
              {product.name} gold jewelry
            </span>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-24 bg-velmora-sand overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-stone'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`product-thumb-${product.id}-${i}`}
                    data-strk-img={`[product-detail-name]`}
                    data-strk-img-ratio={img.ratio}
                    data-strk-img-width="200"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2 md:py-6">
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-velmora-charcoal">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <span className="font-sans text-xl text-velmora-ink">
                ${product.price}
              </span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                <span className="font-sans text-sm text-velmora-warmgray">
                  {product.rating}
                </span>
                <span className="font-sans text-sm text-velmora-stone">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-velmora-warmgray mt-5 leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <span className="font-sans text-xs uppercase tracking-widest text-velmora-warmgray">
                Finish
              </span>
              <div className="flex gap-3 mt-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 font-sans text-xs uppercase tracking-widest border transition-all ${
                      selectedVariant === variant
                        ? 'border-velmora-ink bg-velmora-ink text-white'
                        : 'border-velmora-stone text-velmora-ink hover:border-velmora-ink'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="font-sans text-xs uppercase tracking-widest text-velmora-warmgray">
                Quantity
              </span>
              <div className="flex items-center gap-3 mt-3">
                <button
                  className="w-10 h-10 flex items-center justify-center border border-velmora-stone text-velmora-ink hover:border-velmora-ink transition-colors"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm text-velmora-ink w-8 text-center">
                  {quantity}
                </span>
                <button
                  className="w-10 h-10 flex items-center justify-center border border-velmora-stone text-velmora-ink hover:border-velmora-ink transition-colors"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full mt-8 py-4 font-sans text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2 transition-all ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-velmora-gold text-white hover:bg-velmora-golddark'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" strokeWidth={1.5} />
                  Added to Cart
                </>
              ) : (
                'Add to Cart'
              )}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-stone">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-velmora-stone">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === acc.key ? null : acc.key)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-xs uppercase tracking-widest text-velmora-ink">
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-velmora-warmgray transition-transform duration-300 ${
                        openAccordion === acc.key ? 'rotate-180' : ''
                      }`}
                      strokeWidth={1.5}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.key ? 'max-h-60 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="font-sans text-sm text-velmora-warmgray leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}