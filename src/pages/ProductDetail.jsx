import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/shop/ProductCard'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-hairline">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs uppercase tracking-[0.12em] text-obsidian">{title}</span>
        {open ? <ChevronUp size={14} strokeWidth={1.5} className="text-taupe" /> : <ChevronDown size={14} strokeWidth={1.5} className="text-taupe" />}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-manrope text-sm text-taupe leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const containerRef = useRef(null)
  const relatedRef = useRef(null)
  const product = products.find(p => p.slug === slug) || products[0]
  const related = products.filter(p => p.id !== product.id).slice(0, 4)

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  useEffect(() => {
    setSelectedVariant(product.variants[0])
    setQuantity(1)
    setActiveImg(0)
    setAdded(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug, product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [slug])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current)
  }, [slug])

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const images = [
    { id: product.imgId, id2: `${product.imgId}-thumb` },
    { id: product.imgId2, id2: `${product.imgId2}-thumb` },
  ]

  return (
    <div className="bg-cream min-h-screen pt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link to="/shop" className="flex items-center gap-1.5 font-manrope text-xs text-taupe hover:text-gold transition-colors duration-300">
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back to Shop
          </Link>
          <span className="text-hairline">/</span>
          <span className="font-manrope text-xs text-taupe capitalize">{product.category}</span>
          <span className="text-hairline">/</span>
          <span className="font-manrope text-xs text-obsidian uppercase tracking-[0.08em]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors duration-300 ${activeImg === i ? 'border-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={img.id2}
                    data-strk-img={`[${product.titleId}] gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-parchment">
              <img
                data-strk-img-id={images[activeImg].id}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags?.includes('bestseller') && (
                <span className="bg-obsidian text-cream font-manrope text-[9px] uppercase tracking-[0.12em] px-2.5 py-1">Bestseller</span>
              )}
              {product.tags?.includes('new') && (
                <span className="bg-gold text-obsidian font-manrope text-[9px] uppercase tracking-[0.12em] px-2.5 py-1">New</span>
              )}
            </div>

            {/* Name */}
            <h1 id={product.titleId} className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.12em] text-obsidian font-medium leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} fill={i < Math.floor(product.rating) ? '#C9A96E' : '#E0D8CE'} stroke="none" />
                ))}
              </div>
              <span className="font-manrope text-xs text-taupe">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl font-light text-obsidian mb-5">${product.price}</p>

            {/* Short description */}
            <p id={product.descId} className="font-manrope text-sm text-taupe leading-relaxed mb-7">
              {product.shortDescription}
            </p>

            <div className="w-full h-px bg-hairline mb-7" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs uppercase tracking-[0.12em] text-obsidian mb-3">
                Finish: <span className="text-taupe font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs uppercase tracking-[0.1em] px-5 py-2.5 border transition-colors duration-300 ${
                      selectedVariant === v
                        ? 'border-obsidian bg-obsidian text-cream'
                        : 'border-hairline text-taupe hover:border-obsidian hover:text-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-7">
              <p className="font-manrope text-xs uppercase tracking-[0.12em] text-obsidian mb-3">Quantity</p>
              <div className="flex items-center border border-hairline w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-obsidian transition-colors"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-manrope text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-obsidian transition-colors"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 font-manrope text-xs uppercase tracking-[0.15em] py-4 transition-colors duration-300 font-medium ${
                added
                  ? 'bg-obsidian/80 text-cream cursor-default'
                  : 'bg-gold text-obsidian hover:bg-goldLight'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-5">
              <span className="font-manrope text-[10px] text-taupe uppercase tracking-[0.1em]">Free Shipping</span>
              <span className="w-px h-3 bg-hairline" />
              <span className="font-manrope text-[10px] text-taupe uppercase tracking-[0.1em]">30-Day Returns</span>
              <span className="w-px h-3 bg-hairline" />
              <span className="font-manrope text-[10px] text-taupe uppercase tracking-[0.1em]">Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials} To care for your piece, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders. Estimated delivery 3–7 business days. Returns accepted within 30 days of delivery for unworn items in original packaging.
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-hairline bg-parchment py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian">You May Also Like</h2>
            <div className="w-10 h-px bg-gold mx-auto mt-4" />
          </div>
          <div ref={relatedRef} className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
