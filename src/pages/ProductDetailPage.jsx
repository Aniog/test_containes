import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus, Heart, Share2, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import products from '@/data/products'
import ProductCard from '@/components/home/ProductCard'

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem, openCart } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || '')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0])
      setQuantity(1)
      setActiveImage(0)
    }
  }, [product])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-warm-dark">Product not found</h2>
          <Link to="/shop" className="btn-outline mt-6">Return to Shop</Link>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  const accordions = [
    { key: 'description', label: 'Description', content: product.description },
    { key: 'materials', label: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ]

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({ id: product.id, name: product.name, price: product.price, variant: selectedVariant })
    }
    openCart()
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 bg-cream">
      <div className="container-narrow py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="text-xs tracking-wider uppercase text-muted font-sans mb-6">
          <Link to="/" className="hover:text-warm-dark transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-warm-dark transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-warm-dark">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-[3/4] bg-[#E8E0D5]/30 overflow-hidden mb-4">
              <img
                data-strk-img-id={`pdp-${product.id}-main`}
                data-strk-img={`[pdp-name-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 bg-[#E8E0D5]/30 overflow-hidden border-2 transition-colors ${
                    i === activeImage ? 'border-warm-dark' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-${product.id}-thumb-${i}`}
                    data-strk-img={`[pdp-name-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <span id={`pdp-name-${product.id}`} className="hidden">{product.name} gold jewelry</span>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex-1">
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-super-wide uppercase text-warm-dark leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} className={i >= Math.floor(product.rating) ? 'text-warm-dark/15' : ''} />
                  ))}
                </div>
                <span className="text-xs text-muted font-sans">{product.rating} ({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <p className="text-xl font-sans text-warm-dark mt-4">${product.price}</p>

              {/* Short description */}
              <p className="mt-5 text-warm-gray text-sm leading-relaxed font-sans">{product.description}</p>

              {/* Variant selector */}
              <div className="mt-8">
                <p className="text-xs tracking-wider uppercase text-warm-dark font-sans mb-3">Finish</p>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2.5 text-xs tracking-wider uppercase font-sans border transition-all ${
                        selectedVariant === v
                          ? 'border-warm-dark bg-warm-dark text-cream'
                          : 'border-warm-dark/20 text-warm-dark hover:border-warm-dark/50'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <p className="text-xs tracking-wider uppercase text-warm-dark font-sans mb-3">Quantity</p>
                <div className="flex items-center border border-warm-dark/20 w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-warm-dark/60 hover:text-warm-dark transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-12 text-center text-sm font-sans">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-warm-dark/60 hover:text-warm-dark transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="btn-primary w-full mt-8 flex items-center justify-center gap-2"
              >
                <ShoppingBag size={17} />
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>

              {/* Wishlist + Share */}
              <div className="flex gap-6 mt-6">
                <button className="flex items-center gap-2 text-xs tracking-wider uppercase text-muted hover:text-rose transition-colors font-sans">
                  <Heart size={14} />
                  Wishlist
                </button>
                <button className="flex items-center gap-2 text-xs tracking-wider uppercase text-muted hover:text-warm-dark transition-colors font-sans">
                  <Share2 size={14} />
                  Share
                </button>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-warm-dark/10">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-warm-dark/10">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? '' : acc.key)}
                    className="w-full flex items-center justify-between py-4 text-xs tracking-wider uppercase text-warm-dark font-sans"
                  >
                    {acc.label}
                    {openAccordion === acc.key ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.key ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-warm-gray leading-relaxed font-sans whitespace-pre-line">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl md:text-3xl text-warm-dark tracking-wider text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((rp) => (
              <ProductCard key={rp.id} product={rp} />
            ))}
          </div>
        </div>
      </section>

      <span id={`pdp-related-${product.id}`} className="hidden">{product.name} gold jewelry</span>
    </div>
  )
}