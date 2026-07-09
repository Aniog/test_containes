import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, Minus, Plus } from 'lucide-react'
import { getProductBySlug, getProducts } from '../api/products.js'
import { useCart } from '../contexts/CartContext.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

export default function ProductDetail() {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [mainImage, setMainImage] = useState('')
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    getProductBySlug(slug)
      .then((data) => {
        if (!mounted) return
        if (data) {
          const fields = data.data || data
          setProduct(data)
          setSelectedVariant((fields.variants || [])[0] || 'gold')
          setMainImage(fields.image_url || '')
          setQuantity(1)
          // fetch related
          getProducts().then((all) => {
            if (!mounted) return
            const relatedProds = all
              .filter((p) => p.id !== data.id)
              .slice(0, 4)
            setRelated(relatedProds)
          })
        }
        setLoading(false)
      })
      .catch(() => {
        if (mounted) setLoading(false)
      })
    return () => { mounted = false }
  }, [slug])

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [product, related])

  const handleAddToCart = () => {
    if (!product) return
    const fields = product.data || product
    addItem({
      id: product.id,
      name: fields.name,
      price: fields.price,
      image: fields.image_url,
      variant: selectedVariant,
      quantity,
    })
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-velmora-cream pt-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 animate-pulse">
            <div className="aspect-[3/4] bg-velmora-sand" />
            <div className="space-y-4">
              <div className="h-6 bg-velmora-sand w-1/2" />
              <div className="h-4 bg-velmora-sand w-1/4" />
              <div className="h-32 bg-velmora-sand" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-cream pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-velmora-charcoal">Product not found</h2>
          <Link to="/shop" className="text-sm text-velmora-gold mt-4 inline-block underline">
            Browse our collection
          </Link>
        </div>
      </div>
    )
  }

  const fields = product.data || product
  const thumbnails = [fields.image_url, fields.image_hover_url].filter(Boolean)

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Breadcrumbs */}
        <div className="py-4 text-[11px] uppercase tracking-widest text-velmora-muted">
          <Link to="/" className="hover:text-velmora-charcoal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-charcoal transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-charcoal">{fields.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pb-16 md:pb-24">
          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="aspect-[3/4] bg-velmora-sand overflow-hidden">
              <img
                data-strk-img-id={`product-detail-${product.id}-main`}
                data-strk-img={`[product-detail-name-${product.id}] gold jewelry on neutral background`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1.333'/%3E"
                alt={fields.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="py-2 md:py-6">
            <h1
              id={`product-detail-name-${product.id}`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-velmora-charcoal"
            >
              {fields.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.round(fields.rating || 0)
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-muted">
                {fields.rating} ({fields.review_count} reviews)
              </span>
            </div>

            <p className="font-sans text-xl md:text-2xl text-velmora-charcoal mt-5">
              ${Number(fields.price).toFixed(2)}
            </p>

            <p className="font-sans text-sm text-velmora-muted mt-6 leading-relaxed">
              {fields.description}
            </p>

            {/* Variant Selector */}
            {fields.variants && fields.variants.length > 0 && (
              <div className="mt-8">
                <p className="text-xs uppercase tracking-widest text-velmora-muted mb-3">
                  Color: <span className="text-velmora-charcoal capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {fields.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 text-xs uppercase tracking-widest border transition-colors ${
                        selectedVariant === variant
                          ? 'border-velmora-charcoal text-velmora-charcoal bg-velmora-charcoal/5'
                          : 'border-velmora-border text-velmora-muted hover:border-velmora-charcoal'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-velmora-muted mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-velmora-border flex items-center justify-center hover:border-velmora-charcoal transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-velmora-border flex items-center justify-center hover:border-velmora-charcoal transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-velmora-charcoal text-white py-4 text-xs uppercase tracking-widest hover:bg-velmora-dark transition-colors"
            >
              Add to Cart — ${(Number(fields.price) * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-border">
              {[
                { key: 'description', title: 'Description', content: fields.description },
                { key: 'materials', title: 'Materials & Care', content: fields.materials_care },
                { key: 'shipping', title: 'Shipping & Returns', content: fields.shipping_returns },
              ].map(({ key, title, content }) => (
                <div key={key} className="border-b border-velmora-border">
                  <button
                    onClick={() => toggleAccordion(key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs uppercase tracking-widest text-velmora-charcoal">{title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-velmora-muted transition-transform duration-300 ${
                        openAccordion === key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === key ? 'max-h-96 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-velmora-muted leading-relaxed">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="pb-16 md:pb-24">
            <div className="border-t border-velmora-border pt-14 md:pt-20">
              <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal text-center mb-10 md:mb-14">
                You May Also Like
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}