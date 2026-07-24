import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import products from '@/data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const product = products.find((p) => p.id === id)
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    setSelectedImage(0)
    setQuantity(1)
    setVariant('gold')
    setOpenAccordion(null)
  }, [id])

  if (!product) {
    return (
      <div className="section-padding min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-charcoal">Product not found</h2>
          <Link to="/shop" className="btn-primary inline-block mt-6">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
  }

  const accordionData = [
    { id: 'details', title: 'Description', content: product.details },
    { id: 'care', title: 'Materials & Care', content: product.care },
    { id: 'shipping', title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Breadcrumb */}
        <div className="py-6">
          <Link to="/shop" className="text-xs uppercase tracking-widest text-taupe hover:text-gold transition-colors">
            Shop
          </Link>
          <span className="text-xs text-taupe mx-2">/</span>
          <span className="text-xs uppercase tracking-widest text-charcoal">{product.name}</span>
        </div>

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Images */}
          <div>
            <div className="aspect-[3/4] bg-warm-light overflow-hidden">
              <img
                data-strk-img-id={`${product.imgId}-display`}
                data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setSelectedImage(0)}
                className={`w-16 h-20 bg-warm-light overflow-hidden border-2 transition-colors ${
                  selectedImage === 0 ? 'border-gold' : 'border-transparent'
                }`}
              >
                <img
                  data-strk-img-id={`${product.imgId}-thumb-0`}
                  data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setSelectedImage(1)}
                className={`w-16 h-20 bg-warm-light overflow-hidden border-2 transition-colors ${
                  selectedImage === 1 ? 'border-gold' : 'border-transparent'
                }`}
              >
                <img
                  data-strk-img-id={`${product.imgId}-thumb-1`}
                  data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Right: Info */}
          <div className="md:pt-8">
            <h1
              id={`product-name-${product.id}`}
              className="font-serif text-2xl md:text-3xl text-charcoal font-light uppercase tracking-wide-lg"
            >
              {product.name}
            </h1>

            <p className="mt-2 text-xl text-charcoal font-medium">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-beige'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-taupe">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p
              id={`product-desc-${product.id}`}
              className="mt-6 text-sm text-taupe leading-relaxed"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-charcoal mb-3">Finish</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setVariant('gold')}
                  className={`px-6 py-2.5 text-xs uppercase tracking-wider border transition-all duration-200 ${
                    variant === 'gold'
                      ? 'border-gold bg-gold text-white'
                      : 'border-beige text-taupe hover:border-gold'
                  }`}
                >
                  18K Gold
                </button>
                <button
                  onClick={() => setVariant('silver')}
                  className={`px-6 py-2.5 text-xs uppercase tracking-wider border transition-all duration-200 ${
                    variant === 'silver'
                      ? 'border-gold bg-gold text-white'
                      : 'border-beige text-taupe hover:border-gold'
                  }`}
                >
                  Silver Tone
                </button>
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-widest text-charcoal">Qty</span>
                <div className="flex items-center border border-beige">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2.5 hover:bg-warm-light transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-5 text-sm font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2.5 hover:bg-warm-light transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <button onClick={handleAddToCart} className="btn-primary w-full">
                Add to Cart — ${(product.price * quantity).toFixed(0)}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 space-y-0.5">
              {accordionData.map((item) => (
                <div key={item.id} className="border-t border-beige">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs uppercase tracking-widest text-charcoal">{item.title}</span>
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-4 h-4 text-taupe" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-taupe" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      openAccordion === item.id ? 'max-h-48 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-taupe leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
              <div className="border-t border-beige" />
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 mb-20">
            <h2 className="font-serif text-2xl text-charcoal font-light mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                  <div className="aspect-[3/4] bg-warm-light overflow-hidden">
                    <img
                      data-strk-img-id={`related-${rp.imgId}`}
                      data-strk-img={`[product-desc-${rp.id}] [product-name-${rp.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={rp.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="mt-3 text-xs uppercase tracking-wide-lg text-charcoal font-medium">{rp.name}</h3>
                  <p className="text-sm text-charcoal mt-1">${rp.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}