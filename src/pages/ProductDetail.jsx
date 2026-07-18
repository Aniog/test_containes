import { useState, useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronLeft } from 'lucide-react'
import ProductGallery from '@/components/product/ProductGallery'
import AccordionSection from '@/components/product/AccordionSection'
import ProductCard from '@/components/product/ProductCard'
import { useCartDispatch } from '@/context/CartContext'
import products from '@/data/products'
import Footer from '@/components/home/Footer'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductDetail() {
  const { productId } = useParams()
  const product = products.find((p) => p.id === productId)
  const [selectedColor, setSelectedColor] = useState('gold')
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const dispatch = useCartDispatch()
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [productId])

  useEffect(() => {
    if (!product) return
    setSelectedColor(product.colors[0])
    setQty(1)
    setAdded(false)
  }, [productId, product])

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] pt-24">
        <p className="font-serif text-2xl text-velvet-800 mb-4">Product not found</p>
        <Link to="/shop" className="btn-outline">Browse Collection</Link>
      </div>
    )
  }

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      dispatch({ type: 'ADD', product, color: selectedColor })
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div ref={pageRef}>
      <div className="pt-20 md:pt-24 max-w-[1440px] mx-auto">
        {/* Breadcrumb */}
        <div className="section-pad py-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-1 text-xs text-velvet-500 hover:text-velvet-700 transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Back to Shop
          </Link>
        </div>

        {/* Product layout */}
        <div className="section-pad grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20 pb-16">
          <ProductGallery product={product} />

          {/* Right: Info */}
          <div className="flex flex-col">
            <div>
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-velvet-800 uppercase tracking-widest leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-warm-500 text-warm-500'
                          : 'fill-velvet-200 text-velvet-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-velvet-500">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              <p className="font-serif text-2xl text-velvet-800 mt-4">${product.price}</p>
              <p className="text-sm text-velvet-600 leading-relaxed mt-4">{product.description}</p>
            </div>

            {/* Color variant */}
            <div className="mt-8">
              <p className="text-xs font-sans font-semibold tracking-widest uppercase text-velvet-800 mb-3">
                Tone: {selectedColor}
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`px-6 py-2.5 text-sm font-sans capitalize border transition-all duration-200 ${
                      selectedColor === color
                        ? 'border-velvet-800 bg-velvet-800 text-cream-50'
                        : 'border-velvet-800/20 text-velvet-600 hover:border-velvet-800/50'
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-sans font-semibold tracking-widest uppercase text-velvet-800 mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velvet-800/20 w-fit">
                <button
                  className="p-3 hover:text-warm-600 transition-colors"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  disabled={qty <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 text-sm font-medium tabular-nums">{qty}</span>
                <button
                  className="p-3 hover:text-warm-600 transition-colors"
                  onClick={() => setQty(qty + 1)}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              className={`mt-8 w-full flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 ${
                added
                  ? 'bg-green-700 text-cream-50'
                  : 'bg-velvet-800 text-cream-50 hover:bg-velvet-900'
              }`}
              onClick={handleAdd}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Bag' : 'Add to Bag'}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <AccordionSection title="Description" defaultOpen>
                {product.description}
              </AccordionSection>
              <AccordionSection title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </AccordionSection>
              <AccordionSection title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders over $50.</p>
                <p className="mb-2">Orders ship within 1-2 business days from our London studio.</p>
                <p>30-day hassle-free returns. Items must be unworn and in original packaging.</p>
              </AccordionSection>
            </div>
          </div>
        </div>

        {/* Related products */}
        <hr className="hairline-divider" />
        <div className="section-pad py-16 md:py-20">
          <h2 className="font-serif text-2xl md:text-3xl text-velvet-800 text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
