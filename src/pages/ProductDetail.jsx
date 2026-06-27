import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { getProduct, getRelated } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/product/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProduct(id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [added, setAdded] = useState(false)
  const [openAccordion, setOpenAccordion] = useState(0)

  useEffect(() => {
    if (product) setSelectedVariant(product.defaultVariant)
  }, [product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl">Product Not Found</h2>
          <Link to="/shop" className="mt-4 inline-block text-sm underline text-gold">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant)
    }
    setAdded(true)
    setQuantity(1)
    setTimeout(() => setAdded(false), 2000)
  }

  const related = getRelated(product.id)

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials}. ${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping + ' 30-day easy returns for all orders.' },
  ]

  return (
    <div ref={containerRef} className="min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-28 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 bg-soft-sand overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-gold' : 'border-transparent hover:border-taupe/30'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-${product.id}-name] ${img.alt}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-soft-sand overflow-hidden rounded-sm">
              <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-${product.id}-name] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[selectedImage]?.alt || product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span id={`pdp-${product.id}-name`} className="hidden">{product.name}</span>

            <p className="text-[11px] tracking-[0.15em] uppercase text-deep-taupe mb-2">{product.category}</p>
            <h1 className="font-serif text-[26px] md:text-[30px] tracking-[0.08em] uppercase font-semibold text-rich-brown leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'fill-transparent text-taupe/30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-deep-taupe">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="mt-5 font-serif text-2xl font-semibold text-rich-brown">${product.price}</p>

            <div className="w-full h-[1px] bg-soft-sand my-6" />

            {/* Description */}
            <p className="text-sm text-deep-taupe leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div className="mt-6">
              <p className="text-[11px] tracking-[0.1em] uppercase text-rich-brown font-medium mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-[0.08em] uppercase font-medium border transition-all ${
                      selectedVariant === variant
                        ? 'border-espresso bg-espresso text-warm-white'
                        : 'border-soft-sand hover:border-taupe text-rich-brown'
                    }`}
                  >
                    {variant} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-[11px] tracking-[0.1em] uppercase text-rich-brown font-medium mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-soft-sand w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-gold"
                  aria-label="Decrease"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-gold"
                  aria-label="Increase"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              disabled={added}
              className={`mt-8 w-full py-4 text-sm tracking-[0.12em] uppercase font-medium flex items-center justify-center gap-2 transition-all duration-500 ${
                added
                  ? 'bg-gold text-espresso'
                  : 'bg-espresso text-warm-white hover:bg-rich-brown'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-soft-sand">
              {accordions.map((acc, i) => (
                <div key={acc.title} className="border-b border-soft-sand">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? -1 : i)}
                    className="w-full flex items-center justify-between py-5 text-sm tracking-[0.08em] uppercase font-medium text-rich-brown hover:text-gold transition-colors"
                  >
                    {acc.title}
                    {openAccordion === i ? (
                      <ChevronUp className="w-4 h-4 text-deep-taupe" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-deep-taupe" />
                    )}
                  </button>
                  {openAccordion === i && (
                    <div className="pb-5 text-sm text-deep-taupe leading-relaxed animate-[fadeIn_0.3s_ease]">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-24 pt-16 border-t border-soft-sand">
            <h2 className="font-serif text-[24px] tracking-[0.04em] text-rich-brown text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
