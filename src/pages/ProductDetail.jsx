import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Star, Plus, Minus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'

const accordionItems = [
  {
    title: 'Description',
    content: 'Each Velmora piece is designed in-house and crafted with meticulous attention to detail. Our demi-fine jewelry bridges the gap between fashion and fine — using premium materials that stand the test of time, at a price that lets you build a collection you love.',
  },
  {
    title: 'Materials & Care',
    content: '18K Gold Plated over brass base. Hypoallergenic — nickel and lead free. To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Gently wipe with a soft cloth after each use.',
  },
  {
    title: 'Shipping & Returns',
    content: 'Free worldwide shipping on all orders. Standard delivery 5–10 business days. Express shipping available at checkout. 30-day hassle-free returns — unworn items in original packaging. Gift wrapping available for all orders.',
  },
]

export default function ProductPage() {
  const { id } = useParams()
  const containerRef = useRef(null)
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()

  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tone[0])
    }
  }, [product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory pt-20">
        <div className="text-center">
          <p className="text-warm-gray text-sm">Product not found</p>
          <Link to="/shop" className="text-muted-gold text-xs uppercase tracking-wider mt-4 inline-block hover:text-bright-gold transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
  }

  const images = [
    { imgId: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { imgId: product.imgIdHover, query: `[${product.descId}] [${product.titleId}] worn model` },
    { imgId: `${product.imgId}-detail`, query: `[${product.descId}] [${product.titleId}] detail closeup` },
  ]

  return (
    <div ref={containerRef} className="bg-ivory pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-6 md:mb-8">
          <ol className="flex items-center gap-2 text-xs text-warm-gray">
            <li><Link to="/" className="hover:text-muted-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-muted-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-warm-black">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3x4] overflow-hidden bg-cream mb-3">
              <img
                data-strk-img-id={images[selectedImage].imgId}
                data-strk-img={images[selectedImage].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-24 overflow-hidden bg-cream border-2 transition-colors duration-300 ${selectedImage === i ? 'border-muted-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2 md:py-4">
            <h1
              id={product.titleId}
              className="font-serif text-warm-black text-2xl md:text-3xl uppercase tracking-[0.12em] font-light"
            >
              {product.name}
            </h1>
            <p
              id={product.descId}
              className="hidden"
            >
              {product.description}
            </p>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-muted-gold fill-muted-gold' : 'text-warm-charcoal'}`}
                  />
                ))}
              </div>
              <span className="text-warm-gray text-xs">({product.reviews})</span>
            </div>

            <p className="text-warm-black text-2xl font-serif mt-4">${product.price}</p>

            <p className="text-warm-gray text-sm leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <p className="text-warm-black text-xs uppercase tracking-[0.2em] mb-3">Tone</p>
              <div className="flex gap-2">
                {product.tone.map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 text-xs uppercase tracking-wider border transition-all duration-300 ${
                      selectedTone === tone
                        ? 'border-muted-gold bg-muted-gold text-warm-black'
                        : 'border-warm-charcoal/30 text-warm-gray hover:border-muted-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-warm-black text-xs uppercase tracking-[0.2em] mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-warm-charcoal/20 flex items-center justify-center text-warm-gray hover:text-warm-black transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-warm-black text-sm min-w-[24px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-warm-charcoal/20 flex items-center justify-center text-warm-gray hover:text-warm-black transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-muted-gold text-warm-black py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-bright-gold transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-warm-charcoal/10">
              {accordionItems.map((item, i) => (
                <div key={item.title} className="border-b border-warm-charcoal/10">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 text-warm-black text-sm uppercase tracking-wider"
                  >
                    {item.title}
                    {openAccordion === i ? (
                      <ChevronUp className="w-4 h-4 text-warm-gray" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-warm-gray" />
                    )}
                  </button>
                  {openAccordion === i && (
                    <p className="pb-4 text-warm-gray text-sm leading-relaxed">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-32">
          <h2 className="font-serif text-warm-black text-2xl md:text-3xl font-light uppercase tracking-[0.15em] text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group block">
                <div className="aspect-[3x4] overflow-hidden bg-cream">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <h3 className="mt-3 font-serif text-warm-black text-sm uppercase tracking-[0.1em] group-hover:text-muted-gold transition-colors">
                  {p.name}
                </h3>
                <p className="text-warm-black text-sm mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
