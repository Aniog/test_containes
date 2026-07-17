import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/product/ProductCard'

const accordionData = [
  {
    title: 'Description',
    content: (p) => p.description,
  },
  {
    title: 'Materials & Care',
    content: (p) =>
      `${p.materials}\n\nCare: ${p.care}`,
  },
  {
    title: 'Shipping & Returns',
    content: () =>
      'Free worldwide shipping on all orders. Delivery within 5-10 business days. If you\'re not completely satisfied, return within 30 days for a full refund — no questions asked.',
  },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const containerRef = useRef(null)
  const { addItem, openCart } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(0)

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0])
      setActiveImage(0)
      setQuantity(1)
      setOpenAccordion(0)
    }
  }, [id, product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [activeImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-velmora-text mb-4">
            Product Not Found
          </p>
          <Link to="/shop" className="btn-outline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant)
    }
    openCart()
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Breadcrumb */}
        <nav className="mb-8 font-sans text-xs text-velmora-muted tracking-wider">
          <Link to="/" className="hover:text-velmora-text transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            to="/shop"
            className="hover:text-velmora-text transition-colors"
          >
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-text">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-velmora-sand overflow-hidden rounded-sm mb-3">
              <img
                alt={product.name}
                data-strk-img-id={`detail-${product.id}-${activeImage}`}
                data-strk-img={`${product.name} gold jewelry ${activeImage > 0 ? 'detail' : 'product'}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 bg-velmora-sand rounded-sm overflow-hidden transition-all duration-300 ${
                    i === activeImage
                      ? 'ring-1 ring-velmora-gold'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    alt={`${product.name} view ${i + 1}`}
                    data-strk-img-id={`thumb-${product.id}-${i}`}
                    data-strk-img={`${product.name} gold jewelry view ${i + 1}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl tracking-[0.15em] uppercase text-velmora-text leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.floor(product.rating)
                        ? 'text-velmora-gold fill-velmora-gold'
                        : 'text-velmora-border'
                    }
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-velmora-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-medium text-velmora-text mt-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p className="font-sans text-sm text-velmora-muted leading-relaxed mt-4 max-w-md">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-8">
                <p className="font-sans text-xs tracking-widest uppercase text-velmora-text mb-3">
                  Finish
                </p>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-6 py-2.5 rounded-full font-sans text-xs tracking-widest uppercase transition-all duration-300 ${
                        selectedVariant === v
                          ? 'bg-velmora-gold text-velmora-white'
                          : 'border border-velmora-border text-velmora-text hover:border-velmora-gold'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add to Cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-velmora-border w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:text-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center font-sans text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:text-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button onClick={handleAddToCart} className="btn-accent flex-1">
                Add to Bag
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-border">
              {accordionData.map((section, i) => (
                <div key={section.title} className="border-b border-velmora-border">
                  <button
                    onClick={() =>
                      setOpenAccordion((prev) => (prev === i ? -1 : i))
                    }
                    className="w-full flex items-center justify-between py-4 font-sans text-xs tracking-widest uppercase text-velmora-text hover:text-velmora-gold transition-colors"
                  >
                    {section.title}
                    {openAccordion === i ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === i ? 'max-h-60 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="font-sans text-sm text-velmora-muted leading-relaxed whitespace-pre-line">
                      {section.content(product)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-24 md:mt-32">
            <h2 className="font-serif text-2xl text-center text-velmora-text mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
