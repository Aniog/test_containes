import React, { useState, useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, ShoppingBag, Minus, Plus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-serif text-sm uppercase tracking-product text-charcoal">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-warm-gray" /> : <ChevronDown className="w-4 h-4 text-warm-gray" />}
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  )
}

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedImage])

  if (!product) {
    return (
      <div className="pt-28 pb-20 text-center">
        <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="text-sm text-gold hover:text-gold-dark mt-4 inline-block">Back to Shop</Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-content mx-auto px-5 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 md:mb-8">
          <ol className="flex items-center gap-2 text-xs font-sans text-warm-gray">
            <li><Link to="/" className="hover:text-charcoal transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3x4] overflow-hidden bg-linen mb-3">
              <img
                data-strk-img-id={`pdp-${product.imgId}-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {[0, 1].map(i => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-gold' : 'border-sand'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.imgId}-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl uppercase tracking-product text-charcoal mb-2">
              {product.name}
            </h1>
            <p id={product.descId} className="font-sans text-sm text-warm-gray mb-3">{product.description}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-sand'}`}
                  />
                ))}
              </div>
              <span className="text-xs font-sans text-warm-gray">({product.reviews})</span>
            </div>

            {/* Price */}
            <p className="font-sans text-xl font-medium text-charcoal mb-6">${product.price}</p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs font-sans uppercase tracking-product text-warm-gray mb-2">Tone</p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs font-sans uppercase tracking-wide border transition-colors duration-300 ${
                      selectedVariant === v
                        ? 'border-charcoal bg-charcoal text-white'
                        : 'border-sand text-charcoal hover:border-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs font-sans uppercase tracking-product text-warm-gray mb-2">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-sand flex items-center justify-center text-charcoal hover:border-charcoal transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm font-sans text-charcoal min-w-[1.5rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-sand flex items-center justify-center text-charcoal hover:border-charcoal transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full bg-gold hover:bg-gold-dark text-white font-sans text-xs tracking-product uppercase py-4 flex items-center justify-center gap-2 transition-colors duration-300 mb-8"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <Accordion title="Description" defaultOpen>
              <p className="font-sans text-sm text-warm-gray leading-relaxed">
                The {product.name} is a stunning piece from our demi-fine collection. {product.description}, crafted with meticulous attention to detail. Each piece is finished with 18K gold plating over a durable base, ensuring lasting beauty and wearability.
              </p>
            </Accordion>
            <Accordion title="Materials & Care">
              <div className="font-sans text-sm text-warm-gray leading-relaxed space-y-2">
                <p>18K Gold Plated over brass base</p>
                <p>Hypoallergenic — nickel and lead free</p>
                <p>To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
              </div>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <div className="font-sans text-sm text-warm-gray leading-relaxed space-y-2">
                <p>Free worldwide shipping on all orders</p>
                <p>Standard delivery: 5–7 business days</p>
                <p>Express delivery: 2–3 business days (available at checkout)</p>
                <p>30-day hassle-free returns. Items must be unworn and in original packaging.</p>
              </div>
            </Accordion>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3x4] overflow-hidden bg-linen mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm uppercase tracking-product text-charcoal mb-0.5">{p.name}</h3>
                <p className="text-sm font-sans font-medium text-charcoal">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
