import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-brand-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs uppercase tracking-[0.12em] font-medium text-brand-text-dark">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-brand-muted" /> : <ChevronDown className="w-4 h-4 text-brand-muted" />}
      </button>
      {open && <div className="pb-4 text-sm text-brand-muted font-light leading-relaxed">{children}</div>}
    </div>
  )
}

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [selectedImage])

  if (!product) {
    return (
      <div className="pt-24 pb-16 text-center">
        <h1 className="font-serif text-2xl text-brand-text-dark">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-brand-accent text-sm underline">Back to shop</Link>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[4/3] overflow-hidden bg-brand-card mb-3">
              <img
                data-strk-img-id={product.images[selectedImage].imgId}
                data-strk-img={`[${product.images[selectedImage].descId}] [${product.images[selectedImage].titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[selectedImage].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-16 overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-brand-accent' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={`[${img.descId}] [${img.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1
              id={product.images[0].titleId}
              className="font-serif text-2xl md:text-3xl uppercase tracking-[0.12em] text-brand-text-dark font-light"
            >
              {product.name}
            </h1>
            <p className="mt-2 text-lg font-serif text-brand-text-dark">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'text-brand-accent fill-brand-accent' : 'text-brand-border'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-muted font-light">{product.reviews} reviews</span>
            </div>

            <p
              id={product.images[0].descId}
              className="mt-4 text-sm text-brand-muted font-light leading-relaxed"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <span className="text-xs uppercase tracking-[0.12em] font-medium text-brand-text-dark block mb-3">
                Tone
              </span>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-wider border transition-colors ${
                      selectedVariant === v
                        ? 'border-brand-accent text-brand-accent'
                        : 'border-brand-border text-brand-muted hover:border-brand-accent'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs uppercase tracking-[0.12em] font-medium text-brand-text-dark block mb-3">
                Quantity
              </span>
              <div className="flex items-center border border-brand-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-text-dark transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium text-brand-text-dark">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-text-dark transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full bg-brand-accent text-white uppercase tracking-[0.15em] text-xs font-medium py-3.5 hover:bg-brand-accent-hover transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                {product.details}
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2">{product.materials}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Standard delivery takes 5–10 business days. Express shipping available at checkout.</p>
                <p>We offer a 30-day return policy. Items must be unworn and in original packaging. Contact us at hello@velmora.com to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-brand-border">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-brand-text-dark font-light text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="overflow-hidden bg-brand-card aspect-[4/3]">
                  <img
                    data-strk-img-id={`${p.images[0].imgId}-related`}
                    data-strk-img={`[${p.images[0].descId}] [${p.images[0].titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.images[0].alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-2 font-serif text-xs uppercase tracking-[0.1em] text-brand-text-dark group-hover:text-brand-accent transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm font-medium text-brand-text-dark mt-0.5">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
