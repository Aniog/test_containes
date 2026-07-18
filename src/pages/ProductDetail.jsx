import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-brand-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-serif text-sm tracking-super-wide uppercase text-brand-charcoal">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-brand-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const containerRef = useRef(null)
  const relatedRef = useRef(null)
  const { addItem } = useCart()

  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tone[0])
      setQuantity(1)
      setAdded(false)
      setSelectedImage(0)
    }
  }, [product])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [product, selectedImage])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current)
  }, [product])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="font-serif text-2xl text-brand-muted">Product not found</p>
        <Link to="/shop" className="mt-4 inline-block font-sans text-xs tracking-ultra-wide uppercase text-brand-gold hover:text-brand-gold-dark">
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const galleryImages = [
    { imgId: product.imgId, query: `[${product.descId}] [${product.titleId}] product detail` },
    { imgId: product.imgIdHover, query: `[${product.descId}] [${product.titleId}] worn model` },
    { imgId: `${product.imgId}-alt1`, query: `[${product.descId}] [${product.titleId}] close up detail` },
    { imgId: `${product.imgId}-alt2`, query: `[${product.descId}] [${product.titleId}] lifestyle` },
  ]

  return (
    <>
      <div className="pt-24 md:pt-32 pb-16">
        <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Image gallery */}
            <div>
              <div className="aspect-[3x4] bg-brand-warm overflow-hidden mb-3">
                <img
                  data-strk-img-id={galleryImages[selectedImage].imgId}
                  data-strk-img={galleryImages[selectedImage].query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.displayName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-[3x4] bg-brand-warm overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? 'border-brand-gold' : 'border-transparent'
                    }`}
                  >
                    <img
                      data-strk-img-id={`thumb-${img.imgId}`}
                      data-strk-img={img.query}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.displayName} view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="py-2">
              <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl tracking-super-wide uppercase text-brand-charcoal">
                {product.name}
              </h1>
              <p id={product.descId} className="sr-only">{product.description}</p>

              <div className="flex items-center gap-3 mt-3">
                <span className="font-serif text-xl text-brand-charcoal">${product.price}</span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-brand-muted ml-1">({product.reviews})</span>
                </div>
              </div>

              <p className="font-sans text-sm text-brand-muted leading-relaxed mt-4">
                {product.description}
              </p>

              {/* Tone selector */}
              <div className="mt-6">
                <p className="font-sans text-xs tracking-wider uppercase text-brand-muted mb-3">
                  Tone
                </p>
                <div className="flex gap-3">
                  {product.tone.map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={`px-5 py-2 font-sans text-xs tracking-wider uppercase border transition-all duration-300 ${
                        selectedTone === tone
                          ? 'border-brand-charcoal bg-brand-charcoal text-white'
                          : 'border-brand-sand text-brand-charcoal hover:border-brand-charcoal'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <p className="font-sans text-xs tracking-wider uppercase text-brand-muted mb-3">
                  Quantity
                </p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 border border-brand-sand flex items-center justify-center text-brand-muted hover:border-brand-charcoal transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-sans text-sm w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 border border-brand-sand flex items-center justify-center text-brand-muted hover:border-brand-charcoal transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className={`w-full mt-8 font-sans text-xs tracking-ultra-wide uppercase py-4 flex items-center justify-center gap-2 transition-colors duration-300 ${
                  added
                    ? 'bg-brand-gold text-white'
                    : 'bg-brand-charcoal text-white hover:bg-brand-espresso'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {added ? 'Added to Bag!' : 'Add to Cart'}
              </button>

              {/* Accordions */}
              <div className="mt-10">
                <Accordion title="Description" defaultOpen>
                  <p className="font-sans text-sm text-brand-muted leading-relaxed">
                    {product.longDescription}
                  </p>
                </Accordion>
                <Accordion title="Materials & Care">
                  <div className="font-sans text-sm text-brand-muted leading-relaxed space-y-2">
                    <p>18K gold plated over sterling silver base</p>
                    <p>Hypoallergenic — nickel and lead free</p>
                    <p>Tarnish-resistant coating for lasting shine</p>
                    <p className="pt-2 font-medium text-brand-charcoal">Care Instructions:</p>
                    <p>Remove before swimming, showering, or exercising. Store in the provided pouch when not worn. Gently wipe with a soft cloth after each use.</p>
                  </div>
                </Accordion>
                <Accordion title="Shipping & Returns">
                  <div className="font-sans text-sm text-brand-muted leading-relaxed space-y-2">
                    <p>Free worldwide shipping on all orders</p>
                    <p>Standard delivery: 5–7 business days</p>
                    <p>Express delivery: 2–3 business days (available at checkout)</p>
                    <p className="pt-2 font-medium text-brand-charcoal">Returns:</p>
                    <p>30-day hassle-free returns. Items must be unworn and in original packaging. Gift sets must be returned complete.</p>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section ref={relatedRef} className="py-16 bg-brand-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal tracking-wide text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group block">
                <div className="aspect-[3x4] bg-brand-sand overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.displayName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs tracking-super-wide uppercase text-brand-charcoal">
                  {p.name}
                </h3>
                <p className="font-sans text-sm text-brand-charcoal mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
