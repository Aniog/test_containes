import { useState, useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, ArrowLeft, Share2 } from 'lucide-react'
import { getProductBySlug, getRelatedProducts, products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { StarRating } from '@/components/ui/StarRating'
import { Accordion } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = getProductBySlug(slug)
  const related = product ? getRelatedProducts(product) : []
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold')
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants?.[0] || 'Gold')
      setQty(1)
      setActiveImg(0)
    }
  }, [slug, product])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [slug])

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-20">
        <p className="font-serif text-2xl text-obsidian-400">Product not found</p>
        <Button variant="outline" onClick={() => navigate('/shop')}>Back to Shop</Button>
      </div>
    )
  }

  const images = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { id: product.imgId2, query: `[${product.titleId}] gold jewelry detail close up` },
    { id: `${product.imgId}-3`, query: `[${product.titleId}] jewelry worn on model` },
  ]

  const handleAddToCart = () => {
    addItem(product, selectedVariant, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 text-xs font-sans text-obsidian-400 uppercase tracking-widest">
          <Link to="/" className="hover:text-velvet-500 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velvet-500 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-obsidian-600">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="aspect-square bg-velvet-100 overflow-hidden">
              <img
                data-strk-img-id={images[activeImg].id}
                data-strk-img={images[activeImg].query}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square bg-velvet-100 overflow-hidden border-2 transition-colors ${activeImg === i ? 'border-velvet-500' : 'border-transparent hover:border-velvet-300'}`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            {/* Category */}
            <p className="font-sans text-xs uppercase tracking-widest text-velvet-500">
              {product.category}
            </p>

            {/* Name */}
            <h1 id={product.titleId} className="font-serif text-3xl md:text-4xl text-obsidian-800 uppercase tracking-widest2 font-light leading-tight">
              {product.name}
            </h1>

            {/* Price + Rating */}
            <div className="flex items-center gap-5">
              <span className="font-serif text-2xl text-obsidian-800">${product.price}</span>
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            {/* Short desc */}
            <p id={product.descId} className="font-sans text-sm text-obsidian-500 leading-relaxed border-t border-velvet-200 pt-5">
              {product.shortDesc}
            </p>

            {/* Variant selector */}
            <div className="space-y-3">
              <p className="font-sans text-xs uppercase tracking-widest text-obsidian-600">
                Finish: <span className="text-obsidian-800 font-medium">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 font-sans text-xs uppercase tracking-widest border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'bg-obsidian-800 text-cream border-obsidian-800'
                        : 'bg-transparent text-obsidian-600 border-obsidian-300 hover:border-obsidian-600'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <p className="font-sans text-xs uppercase tracking-widest text-obsidian-600">Quantity</p>
              <div className="flex items-center border border-velvet-200 w-fit">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="px-4 py-3 text-obsidian-500 hover:text-velvet-500 transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-5 py-3 font-sans text-sm text-obsidian-700 min-w-[3rem] text-center border-x border-velvet-200">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="px-4 py-3 text-obsidian-500 hover:text-velvet-500 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3 pt-2">
              <Button
                variant="dark"
                size="xl"
                className="w-full gap-3"
                onClick={handleAddToCart}
              >
                <ShoppingBag size={16} />
                {added ? 'Added to Cart!' : 'Add to Cart'}
              </Button>
              <Button variant="outline" size="xl" className="w-full">
                Add to Wishlist
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 pt-2 border-t border-velvet-200">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                <span key={t} className="font-sans text-[11px] text-obsidian-400 uppercase tracking-widest">
                  ✓ {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="pt-4 space-y-0">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">{product.materials}</p>
                <p>To keep your Velmora jewelry looking its best: avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Polish gently with a soft cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Estimated delivery: 3–7 business days.</p>
                <p>Not in love? Return within 30 days for a full refund. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <RelatedProducts products={related} />
        )}
      </div>
    </div>
  )
}

function RelatedProducts({ products: relatedProducts }) {
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [relatedProducts])

  return (
    <div className="mt-20 pt-12 border-t border-velvet-200">
      <div className="text-center mb-10">
        <p className="font-sans text-xs uppercase tracking-widest text-velvet-500 mb-2">Complete the Look</p>
        <h2 className="font-serif text-3xl text-obsidian-800 font-light">You May Also Like</h2>
      </div>
      <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {relatedProducts.map(p => (
          <Link key={p.id} to={`/product/${p.slug}`} className="group block">
            <div className="aspect-[3/4] bg-velvet-100 overflow-hidden mb-3">
              <img
                data-strk-img-id={`related-${p.imgId}`}
                data-strk-img={`[related-desc-${p.id}] [related-title-${p.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p id={`related-title-${p.id}`} className="font-serif text-sm text-obsidian-800 uppercase tracking-widest leading-tight group-hover:text-velvet-600 transition-colors">
              {p.name}
            </p>
            <p id={`related-desc-${p.id}`} className="sr-only">{p.shortDesc}</p>
            <p className="font-sans text-sm text-obsidian-500 mt-1">${p.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
