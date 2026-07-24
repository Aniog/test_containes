import { useState, useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.slug === slug)
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)
  const { addItem } = useCart()

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0])
      setActiveImage(0)
      window.scrollTo(0, 0)
    }
  }, [product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-ink mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs tracking-widest uppercase text-champagne border border-champagne px-6 py-3 hover:bg-champagne hover:text-obsidian transition-all duration-300">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const images = [
    { id: product.imgId, id2: product.imgId2 },
    { id: product.imgId2, id2: product.imgId },
    { id: `${product.imgId}-alt3`, id2: product.imgId },
  ]

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const accordions = [
    { id: 'description', label: 'Description', content: product.description },
    { id: 'materials', label: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { id: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <CartDrawer />

      <main ref={containerRef} className="pt-16 md:pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 border-b border-champagne/10">
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1.5 font-sans text-xs text-warm-gray hover:text-champagne transition-colors duration-200"
            >
              <ArrowLeft size={12} />
              Back
            </button>
            <span className="text-champagne/30">/</span>
            <Link to="/shop" className="font-sans text-xs text-warm-gray hover:text-champagne transition-colors duration-200">
              Shop
            </Link>
            <span className="text-champagne/30">/</span>
            <span className="font-sans text-xs text-ink capitalize">{product.category}</span>
          </div>
        </div>

        {/* Product layout */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
            {/* Gallery */}
            <div className="flex flex-col-reverse md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all duration-200 ${
                      activeImage === i ? 'border-champagne' : 'border-transparent hover:border-champagne/40'
                    }`}
                  >
                    <img
                      data-strk-img-id={`${img.id}-thumb-${i}`}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="flex-1 aspect-[3/4] overflow-hidden bg-ivory-dark relative">
                <img
                  data-strk-img-id={`${images[activeImage].id}-main`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial close-up`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.tags.includes('bestseller') && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-champagne text-obsidian font-sans text-[9px] tracking-widest uppercase px-3 py-1.5">
                      Bestseller
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Product info */}
            <div className="flex flex-col">
              <p className="font-sans text-xs tracking-widest uppercase text-champagne mb-3">
                {product.material}
              </p>

              <h1
                id={product.titleId}
                className="font-serif text-3xl md:text-4xl font-light text-ink tracking-widest uppercase leading-tight mb-3"
              >
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-champagne' : 'text-champagne/30'}`}>★</span>
                  ))}
                </div>
                <span className="font-sans text-xs text-warm-gray">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <div className="w-10 h-px bg-champagne/40 mb-5" />

              <p className="font-sans text-2xl font-light text-ink mb-6">
                ${product.price}
              </p>

              <p id={product.descId} className="font-sans text-sm text-warm-gray leading-relaxed mb-8">
                {product.shortDesc}
              </p>

              {/* Variant selector */}
              <div className="mb-8">
                <p className="font-sans text-xs tracking-widest uppercase text-ink mb-3">
                  Finish: <span className="text-champagne">{selectedVariant}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-sans text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-champagne bg-champagne text-obsidian'
                          : 'border-champagne/30 text-ink hover:border-champagne'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="font-sans text-xs tracking-widest uppercase text-ink mb-3">Quantity</p>
                <div className="flex items-center border border-champagne/30 w-fit">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-warm-gray hover:text-ink transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-12 text-center font-sans text-sm text-ink">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-warm-gray hover:text-ink transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-champagne text-obsidian font-sans text-xs tracking-widest uppercase py-4 hover:bg-champagne-dark transition-all duration-300 font-medium flex items-center justify-center gap-3 mb-4"
              >
                <ShoppingBag size={16} />
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>

              <button className="w-full border border-champagne/30 text-ink font-sans text-xs tracking-widest uppercase py-4 hover:border-champagne transition-all duration-300 mb-8">
                Add to Wishlist
              </button>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 mb-8 py-5 border-y border-champagne/10">
                {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                  <span key={t} className="font-sans text-xs text-warm-gray flex items-center gap-1.5">
                    <span className="text-champagne">✓</span> {t}
                  </span>
                ))}
              </div>

              {/* Accordions */}
              <div className="flex flex-col">
                {accordions.map(acc => (
                  <div key={acc.id} className="border-b border-champagne/10">
                    <button
                      onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className="font-sans text-xs tracking-widest uppercase text-ink">
                        {acc.label}
                      </span>
                      {openAccordion === acc.id
                        ? <ChevronUp size={14} className="text-champagne flex-shrink-0" />
                        : <ChevronDown size={14} className="text-warm-gray flex-shrink-0" />
                      }
                    </button>
                    {openAccordion === acc.id && (
                      <div className="pb-5 animate-fadeIn">
                        <p className="font-sans text-sm text-warm-gray leading-relaxed whitespace-pre-line">
                          {acc.content}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts products={relatedProducts} />
      </main>

      <Footer />
    </div>
  )
}

function RelatedProducts({ products: relatedProducts }) {
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-ivory-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-ink tracking-wide">
            You May Also Like
          </h2>
          <div className="w-10 h-px bg-champagne mx-auto mt-4" />
        </div>

        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.slug}`}>
                <div className="relative overflow-hidden bg-ivory aspect-[3/4] mb-4">
                  <img
                    data-strk-img-id={`related-${product.imgId}`}
                    data-strk-img={`[related-${product.descId}] [related-${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button
                      onClick={(e) => { e.preventDefault(); addItem(product, product.variants[0]) }}
                      className="w-full bg-obsidian/90 text-ivory font-sans text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-champagne hover:text-obsidian transition-colors duration-200"
                    >
                      <ShoppingBag size={12} />
                      Quick Add
                    </button>
                  </div>
                </div>
                <p id={`related-${product.descId}`} className="sr-only">{product.shortDesc}</p>
                <h3 id={`related-${product.titleId}`} className="font-serif text-sm tracking-widest uppercase text-ink hover:text-champagne transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="font-sans text-sm text-warm-gray mt-1">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
