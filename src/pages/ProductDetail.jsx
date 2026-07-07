import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, ChevronDown, ChevronUp, Heart } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { StarRating } from '@/components/home/Bestsellers'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-velmora-sand">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-[10px] tracking-[0.2em] uppercase text-velmora-ink">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-velmora-muted flex-shrink-0" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-velmora-muted flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-5 font-manrope text-sm text-velmora-muted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null)
  const related = products.filter(p => p.id !== currentId).slice(0, 4)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [currentId])

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-cormorant text-2xl md:text-3xl font-light text-velmora-ink tracking-wide">
            You May Also Like
          </h2>
          <div className="w-8 h-px bg-velmora-gold mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group">
              <div className="relative overflow-hidden bg-velmora-linen aspect-[3/4] mb-3">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.titleId}] [related-${product.descId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3
                id={`related-${product.titleId}`}
                className="font-cormorant text-sm font-medium tracking-[0.1em] uppercase text-velmora-ink group-hover:text-velmora-gold transition-colors duration-200"
              >
                {product.name}
              </h3>
              <p id={`related-${product.descId}`} className="font-manrope text-[10px] text-velmora-muted mt-0.5">
                {product.shortDescription}
              </p>
              <p className="font-cormorant text-base text-velmora-ink mt-1">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug) || products[0]
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const images = [
    { id: product.imgId, id2: `pdp-main-${product.id}` },
    { id: product.imgId2, id2: `pdp-alt-${product.id}` },
  ]

  useEffect(() => {
    setSelectedVariant(product.variants[0])
    setQuantity(1)
    setActiveImg(0)
    setAdded(false)
  }, [slug, product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [slug])

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="bg-velmora-cream min-h-screen pt-16 md:pt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-manrope text-[9px] tracking-[0.15em] uppercase text-velmora-muted hover:text-velmora-gold transition-colors duration-200">Home</Link>
          <span className="text-velmora-sand text-xs">/</span>
          <Link to="/shop" className="font-manrope text-[9px] tracking-[0.15em] uppercase text-velmora-muted hover:text-velmora-gold transition-colors duration-200">Shop</Link>
          <span className="text-velmora-sand text-xs">/</span>
          <span className="font-manrope text-[9px] tracking-[0.15em] uppercase text-velmora-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-200 ${activeImg === i ? 'border-velmora-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id2}`}
                    data-strk-img={`[${product.titleId}] [${product.descId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-velmora-linen aspect-[3/4]">
              {images.map((img, i) => (
                <img
                  key={i}
                  data-strk-img-id={img.id2}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImg === i ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-manrope text-[9px] tracking-[0.25em] uppercase text-velmora-gold mb-3 capitalize">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl font-medium tracking-[0.12em] uppercase text-velmora-ink leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={product.rating} />
              <span className="font-manrope text-[10px] text-velmora-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-velmora-ink mb-5">${product.price}</p>

            {/* Short description */}
            <p
              id={product.descId}
              className="font-manrope text-sm text-velmora-muted leading-relaxed mb-7"
            >
              {product.description}
            </p>

            <div className="h-px bg-velmora-sand mb-7" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-[9px] tracking-[0.2em] uppercase text-velmora-ink mb-3">
                Tone: <span className="text-velmora-gold capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 font-manrope text-[9px] tracking-[0.15em] uppercase border transition-colors duration-200 capitalize ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-sand text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-7">
              <p className="font-manrope text-[9px] tracking-[0.2em] uppercase text-velmora-ink mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-sand w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-ink transition-colors duration-200"
                >
                  <Minus size={12} strokeWidth={2} />
                </button>
                <span className="w-12 text-center font-manrope text-sm text-velmora-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-ink transition-colors duration-200"
                >
                  <Plus size={12} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Add to cart + wishlist */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 font-manrope text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${
                  added
                    ? 'bg-velmora-obsidian text-velmora-cream'
                    : 'bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-light'
                }`}
              >
                {added ? 'Added to Cart ✓' : 'Add to Cart'}
              </button>
              <button className="w-12 h-12 border border-velmora-sand flex items-center justify-center text-velmora-muted hover:text-velmora-gold hover:border-velmora-gold transition-colors duration-200 flex-shrink-0">
                <Heart size={16} strokeWidth={1.5} />
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-manrope text-[9px] tracking-[0.15em] uppercase text-velmora-muted flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-velmora-gold" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="border-t border-velmora-sand">
              <Accordion title="Description">
                <p>{product.description}</p>
                <ul className="mt-3 space-y-1">
                  {product.details.map(d => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="text-velmora-gold mt-1.5">·</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-3">To care for your piece: avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </div>
  )
}
