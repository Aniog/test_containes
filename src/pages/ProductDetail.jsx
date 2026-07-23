import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-velmora-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-serif text-sm tracking-product uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && (
        <div className="pb-4 font-sans text-sm text-velmora-muted leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-velmora-charcoal">Product not found</h2>
          <Link to="/shop" className="mt-4 inline-block font-sans text-sm tracking-product text-velmora-gold hover:text-velmora-gold-dark transition-colors">
            BACK TO SHOP
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const images = [
    { imgId: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { imgId: product.imgId2, query: `[${product.descId}] [${product.titleId}] worn on model` },
  ]

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="aspect-[4x3] rounded-sm overflow-hidden bg-velmora-warm mb-4">
              <img
                data-strk-img-id={images[selectedImage].imgId}
                data-strk-img={images[selectedImage].query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-sm overflow-hidden bg-velmora-warm border-2 transition-colors ${
                    selectedImage === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-sand'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="4x3"
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
          <div>
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl tracking-product uppercase text-velmora-charcoal">
              {product.name}
            </h1>
            <p id={product.descId} className="font-sans text-sm text-velmora-muted mt-2">{product.shortDescription}</p>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`} />
                ))}
              </div>
              <span className="font-sans text-xs text-velmora-muted">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="font-serif text-xl text-velmora-charcoal mt-4">${product.price}</p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-product text-velmora-muted mb-2">TONE</p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 rounded-full font-sans text-xs tracking-product transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'bg-velmora-gold text-white'
                        : 'bg-velmora-warm text-velmora-charcoal hover:bg-velmora-sand'
                    }`}
                  >
                    {variant === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-product text-velmora-muted mb-2">QUANTITY</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-velmora-sand rounded-sm flex items-center justify-center text-velmora-charcoal hover:border-velmora-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-velmora-sand rounded-sm flex items-center justify-center text-velmora-charcoal hover:border-velmora-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-velmora-gold text-white font-sans text-sm tracking-product py-3 rounded hover:bg-velmora-gold-light transition-colors duration-200"
            >
              ADD TO CART
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-velmora-sand">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Standard delivery takes 5-7 business days.</p>
                <p>30-day hassle-free returns. If you are not completely satisfied, return your piece in its original condition for a full refund.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 border-t border-velmora-sand pt-10">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal tracking-wide text-center mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
