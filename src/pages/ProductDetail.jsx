import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/lib/data'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/product/ProductCard'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-divider-light">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm uppercase tracking-wider text-warm-charcoal">{title}</span>
        <ChevronDown className={`w-4 h-4 text-warm-gray transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-warm-gray leading-relaxed font-sans">
          {children}
        </div>
      </div>
    </div>
  )
}

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    if (product) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [product, selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <p className="font-serif text-2xl text-warm-charcoal">Product not found</p>
          <Link to="/shop" className="btn-primary inline-block mt-6">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen pt-20 md:pt-24">
      <div className="max-w-container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 md:mb-8">
          <ol className="flex items-center gap-2 text-xs font-sans text-warm-gray">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-warm-charcoal">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3x4] overflow-hidden bg-warm-cream/50 mb-3">
              <img
                data-strk-img-id={`pdp-${product.images[selectedImage].imgId}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio={product.images[selectedImage].ratio}
                data-strk-img-width={product.images[selectedImage].width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={img.imgId}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 md:w-20 md:h-24 overflow-hidden bg-warm-cream/50 border-2 transition-colors duration-300 ${selectedImage === i ? 'border-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${img.imgId}`}
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

          {/* Product info */}
          <div className="py-2">
            <h1 id={product.titleId} className="product-name text-2xl md:text-3xl text-warm-charcoal">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-warm-gray-light'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-gray font-sans">({product.reviews})</span>
            </div>

            <p className="text-2xl font-serif text-warm-charcoal mt-4">${product.price}</p>

            <p id={product.descId} className="text-sm text-warm-gray font-sans leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <span className="text-xs font-sans uppercase tracking-wider text-warm-charcoal block mb-2">
                Tone: {selectedTone}
              </span>
              <div className="flex gap-2">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 text-xs font-sans uppercase tracking-wider border transition-all duration-300 ${
                      selectedTone === tone
                        ? 'border-gold bg-gold text-warm-black'
                        : 'border-warm-gray-light text-warm-charcoal hover:border-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs font-sans uppercase tracking-wider text-warm-charcoal block mb-2">Quantity</span>
              <div className="flex items-center border border-warm-gray-light w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-warm-charcoal hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 text-sm font-sans text-warm-charcoal min-w-[40px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-warm-charcoal hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedTone, quantity)}
              className="btn-primary w-full mt-8 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-2">Each piece is carefully crafted with attention to detail, ensuring a finish that rivals fine jewelry at a fraction of the cost.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>• 18K Gold Plated over 925 Sterling Silver</p>
                <p>• Hypoallergenic — nickel and lead free</p>
                <p>• To maintain shine, avoid contact with water, perfume, and lotions</p>
                <p>• Store in the provided Velmora pouch when not wearing</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>• Free worldwide shipping on orders over $75</p>
                <p>• Standard shipping: 5–7 business days</p>
                <p>• Express shipping available at checkout</p>
                <p>• 30-day hassle-free returns — no questions asked</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-divider-light">
          <h2 className="font-serif text-2xl md:text-3xl text-warm-charcoal tracking-wide text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} light />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
