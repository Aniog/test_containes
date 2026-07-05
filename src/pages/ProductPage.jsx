import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/StarRating'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-vborder">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-xs font-medium tracking-widest uppercase text-vtext"
      >
        {title}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open && (
        <div className="pb-5 font-sans text-sm text-vmuted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductPage({ products }) {
  const { slug } = useParams()
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const product = products.find((p) => {
    const d = p.data || p
    return d.slug === slug
  })

  const [selectedVariant, setSelectedVariant] = useState(
    product?.data?.variants?.[0] || product?.variants?.[0] || 'gold'
  )
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  useEffect(() => {
    if (containerRef.current) {
      const frame = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frame)
    }
  }, [slug])

  if (!product) {
    return (
      <div className="section-padding pt-32 pb-20 text-center">
        <p className="font-serif text-2xl text-vtext">Product not found.</p>
        <Link to="/shop" className="font-sans text-sm text-vgold mt-4 inline-block">
          Back to Shop
        </Link>
      </div>
    )
  }

  const p = product.data || product
  const related = products
    .filter((rp) => {
      const rd = rp.data || rp
      return rd.slug !== p.slug && rd.category === p.category
    })
    .slice(0, 4)

  const handleAdd = () => {
    addItem(p, quantity, selectedVariant)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div ref={containerRef}>
      <div className="section-padding pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image gallery */}
          <div className="flex gap-4">
            <div className="hidden md:flex flex-col gap-3 w-16">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  className={`w-16 h-16 bg-vborder/40 rounded-sm overflow-hidden border transition-colors ${
                    i === 0 ? 'border-vtext' : 'border-transparent'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${p.name} thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-square bg-vborder/30 rounded-sm overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <StarRating rating={p.rating || 0} size={13} />
              <span className="font-sans text-xs text-vmuted">
                ({p.review_count || 0} reviews)
              </span>
            </div>
            <h1 className="font-serif text-2xl md:text-3xl font-light uppercase tracking-widest-xl text-vtext">
              {p.name}
            </h1>
            <p className="font-sans text-lg text-vtext mt-3">
              ${p.price.toFixed(2)}
            </p>
            <p className="font-sans text-sm text-vmuted leading-relaxed mt-5">
              {p.description}
            </p>

            {/* Variant selector */}
            {p.variants && p.variants.length > 0 && (
              <div className="mt-6">
                <p className="font-sans text-[11px] tracking-widest uppercase text-vmuted mb-2">
                  Finish
                </p>
                <div className="flex gap-2">
                  {p.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 font-sans text-xs font-medium tracking-wider uppercase rounded-full border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'bg-vtext text-white border-vtext'
                          : 'bg-transparent text-vtext border-vborder hover:border-vtext'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-[11px] tracking-widest uppercase text-vmuted mb-2">
                Quantity
              </p>
              <div className="flex items-center border border-vborder rounded-sm w-fit">
                <button
                  className="w-10 h-10 flex items-center justify-center text-vmuted hover:text-vtext"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center font-sans text-sm">
                  {quantity}
                </span>
                <button
                  className="w-10 h-10 flex items-center justify-center text-vmuted hover:text-vtext"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`mt-8 w-full btn-primary transition-all duration-300 ${
                added ? 'bg-vtext' : ''
              }`}
            >
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen={true}>
                {p.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {p.materials ||
                  '18K gold-plated brass. Nickel-free and hypoallergenic. To preserve the finish, avoid contact with perfumes, lotions, and water. Store in the provided pouch when not in use.'}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {p.shipping_info ||
                  'Free worldwide shipping on orders over $50. Standard delivery 5–10 business days. Express delivery 2–4 business days. Returns accepted within 30 days of delivery.'}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="hairline bg-vbg">
          <div className="section-padding py-14 md:py-20">
            <h2 className="font-serif text-xl md:text-2xl font-light text-vtext mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((rp) => {
                const rd = rp.data || rp
                return (
                  <Link key={rd.id} to={`/product/${rd.slug}`} className="group">
                    <div className="aspect-[3/4] bg-vborder/40 rounded-sm overflow-hidden mb-3">
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={rd.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-sans text-xs font-medium uppercase tracking-widest text-vtext">
                      {rd.name}
                    </h3>
                    <p className="font-sans text-sm text-vmuted mt-1">
                      ${rd.price.toFixed(2)}
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
