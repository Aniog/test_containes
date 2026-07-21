import { useState, useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronDown, ChevronLeft, Minus, Plus, ShoppingBag, Heart } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductBySlug, getRelatedProducts } from '../data/products'
import { useCart } from '../context/CartContext'
import StarRating from '../components/ui/StarRating'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-mist">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-espresso">{title}</span>
        <ChevronDown
          size={16}
          className={`text-stone transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 font-sans text-sm text-stone leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

function RelatedCard({ product }) {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="group">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-parchment aspect-[3/4]">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="mt-3 space-y-1">
        <p id={`related-title-${product.id}`} className="product-name text-xs text-espresso">{product.name}</p>
        <p id={`related-desc-${product.id}`} className="font-sans text-xs text-stone">{product.shortDesc}</p>
        <p className="font-serif text-base text-espresso">${product.price}</p>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = getProductBySlug(slug)
  const related = product ? getRelatedProducts(product, 4) : []

  const [selectedVariant, setSelectedVariant] = useState(null)
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [wishlist, setWishlist] = useState(false)
  const { addItem } = useCart()

  const containerRef = useRef(null)

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0])
      setActiveImg(0)
    }
  }, [product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [slug])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="font-serif text-2xl text-espresso">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const images = [
    { id: product.imgId, query: `[pdp-desc] [pdp-name] gold jewelry product` },
    { id: product.img2Id, query: `[pdp-name] gold jewelry worn model` },
    { id: `${product.imgId}-detail`, query: `[pdp-desc] gold jewelry detail close up` },
    { id: `${product.img2Id}-lifestyle`, query: `[pdp-name] gold jewelry lifestyle flat lay` },
  ]

  const handleAddToCart = () => {
    addItem(product, selectedVariant, qty)
  }

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 font-sans text-xs text-stone">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-espresso">{product.name}</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative overflow-hidden bg-parchment aspect-square lg:aspect-[4/5]">
              <img
                data-strk-img-id={images[activeImg].id}
                data-strk-img={images[activeImg].query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setWishlist(v => !v)}
                className={`absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-ivory/80 backdrop-blur-sm transition-colors ${wishlist ? 'text-gold' : 'text-stone hover:text-gold'}`}
                aria-label="Add to wishlist"
              >
                <Heart size={16} style={wishlist ? { fill: '#C9A96E', color: '#C9A96E' } : {}} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`relative overflow-hidden bg-parchment aspect-square border-2 transition-colors ${activeImg === i ? 'border-gold' : 'border-transparent hover:border-mist'}`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="space-y-6 lg:pt-4">
            {/* Category */}
            <p className="font-sans text-xs tracking-widest uppercase text-gold">{product.category}</p>

            {/* Name */}
            <h1 id="pdp-name" className="font-serif text-3xl md:text-4xl font-light text-espresso uppercase tracking-widest2 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} size={13} />

            {/* Price */}
            <p className="font-serif text-3xl text-espresso">${product.price}</p>

            {/* Short description */}
            <p id="pdp-desc" className="font-sans text-sm text-stone leading-relaxed">{product.description}</p>

            <div className="w-full h-px bg-mist" />

            {/* Variant selector */}
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-espresso mb-3">
                Finish: <span className="text-stone normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-wider px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-espresso bg-espresso text-ivory'
                        : 'border-mist text-stone hover:border-stone'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-espresso mb-3">Quantity</p>
              <div className="flex items-center border border-mist w-fit">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center font-sans text-sm text-espresso">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-espresso text-ivory font-sans text-xs tracking-widest uppercase py-5 flex items-center justify-center gap-3 hover:bg-bark transition-colors duration-300"
            >
              <ShoppingBag size={16} />
              Add to Cart — ${(product.price * qty).toFixed(2)}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 pt-2">
              {['Free Worldwide Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                <span key={t} className="font-sans text-[10px] tracking-wider text-stone uppercase flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            <div className="w-full h-px bg-mist" />

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-espresso">Materials:</strong> {product.materials}</p>
                <p><strong className="text-espresso">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-24 md:mt-32">
            <div className="text-center mb-12">
              <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">Discover More</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-espresso">You May Also Like</h2>
              <div className="w-10 h-px bg-gold mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {related.map(p => <RelatedCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
