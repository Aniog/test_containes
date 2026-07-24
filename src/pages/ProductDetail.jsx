import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { Star, ShoppingBag, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const product = products.find(p => p.id === id)
  const containerRef = useRef(null)

  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)

  useEffect(() => {
    if (product) {
      setSelectedImage(0)
      setSelectedTone('gold')
      setQuantity(1)
      setOpenAccordion(null)
    }
  }, [id])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-warm-black">Product not found</h2>
          <Link to="/shop" className="inline-block mt-4 bg-gold text-warm-black font-sans text-sm tracking-wide-15 uppercase px-8 py-3">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
  }

  const accordions = [
    { key: 'description', title: 'Description', content: product.details },
    { key: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Standard delivery takes 5–10 business days. Express shipping available at checkout for $12.\n\nWe offer a 30-day return policy. Items must be unworn and in original packaging. Contact us at hello@velmora.com to initiate a return.' },
  ]

  return (
    <section ref={containerRef} className="pt-24 md:pt-32 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 font-sans text-xs text-stone-500">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-warm-black">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Images */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-stone-100 overflow-hidden mb-4">
              <img
                data-strk-img-id={product.images[selectedImage].imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img.imgId}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 bg-stone-100 overflow-hidden border-2 transition-colors duration-300 ${
                    selectedImage === i ? 'border-gold' : 'border-transparent hover:border-stone-300'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.imgId}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="py-0 md:py-4">
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl tracking-wide-15 uppercase text-warm-black">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-stone-300'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-stone-500">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-sans text-xl font-medium text-warm-black mt-4">${product.price}</p>

            {/* Description */}
            <p id={product.descId} className="font-sans text-sm text-stone-500 mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-wide-15 text-warm-black mb-3">Tone</p>
              <div className="flex gap-3">
                {product.tone.map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full px-5 py-2 font-sans text-sm tracking-wide-15 uppercase transition-all duration-300 ${
                      selectedTone === tone
                        ? 'bg-gold text-warm-black'
                        : 'border border-stone-300 text-warm-black hover:border-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-wide-15 text-warm-black mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-stone-300 text-warm-black hover:border-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm font-medium text-warm-black w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-stone-300 text-warm-black hover:border-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-gold text-warm-black font-sans text-sm tracking-wide-15 uppercase py-4 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Trust */}
            <div className="mt-6 flex items-center gap-4 font-sans text-xs text-stone-500">
              <span>Free Shipping</span>
              <span>·</span>
              <span>30-Day Returns</span>
              <span>·</span>
              <span>Hypoallergenic</span>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 md:mt-20 border-t border-stone-300">
          {accordions.map(acc => (
            <div key={acc.key} className="border-b border-stone-300">
              <button
                onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                className="w-full flex items-center justify-between py-5 font-serif text-base tracking-wide-15 uppercase text-warm-black hover:text-gold transition-colors duration-300"
              >
                {acc.title}
                {openAccordion === acc.key ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openAccordion === acc.key && (
                <p className="font-sans text-sm text-stone-500 leading-relaxed pb-5 whitespace-pre-line">
                  {acc.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-20">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide-15 uppercase text-warm-black text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] bg-stone-100 overflow-hidden mb-4">
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
                <h3 className="font-serif text-sm tracking-wide-15 uppercase text-warm-black group-hover:text-gold transition-colors duration-300">
                  {p.name}
                </h3>
                <p className="font-sans text-sm font-medium text-warm-black mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
