import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft, Plus, Minus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductAccordion from '@/components/product/ProductAccordion'

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const pageRef = useRef(null)

  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id, selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-500">Product not found</h1>
          <Link to="/shop" className="btn-outline mt-6 inline-block">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant,
      quantity,
      image: product.images[0],
    })
  }

  return (
    <main ref={pageRef} className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-sans text-velmora-400 mb-8">
          <Link to="/" className="hover:text-velmora-700 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-700 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-600">{product.name}</span>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left: Image gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] bg-velmora-100 rounded-sm overflow-hidden">
              <div
                className="w-full h-full bg-velmora-200"
                data-strk-bg-id={`pdp-${product.id}-main`}
                data-strk-bg={`[${product.descId}] [${product.titleId}]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-20 bg-velmora-100 rounded-sm overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <div
                    className="w-full h-full bg-velmora-200"
                    data-strk-bg-id={`pdp-${product.id}-thumb-${idx}`}
                    data-strk-bg={`[${product.descId}] [${product.titleId}]`}
                    data-strk-bg-ratio="3x4"
                    data-strk-bg-width="200"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            <Link
              to="/shop"
              className="inline-flex items-center gap-1 text-xs text-velmora-400 hover:text-velmora-700 font-sans mb-4 transition-colors"
            >
              <ChevronLeft className="w-3 h-3" />
              Back to Shop
            </Link>

            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-velmora-900 font-semibold" id={product.titleId}>
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold text-gold'
                        : 'text-velmora-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-500 font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl md:text-3xl text-velmora-900 mt-4">
              ${product.price}
            </p>

            <p className="text-sm text-velmora-600 font-sans leading-relaxed mt-4" id={product.descId}>
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <span className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-700">
                Finish: {variant}
              </span>
              <div className="flex gap-2 mt-2">
                {['Gold', 'Silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 text-xs tracking-wider uppercase font-sans font-medium rounded-sm border transition-all duration-200 ${
                      variant === v
                        ? 'border-velmora-900 bg-velmora-900 text-white'
                        : 'border-velmora-200 text-velmora-600 hover:border-velmora-400'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center border border-velmora-200 rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 hover:bg-velmora-50 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5 text-velmora-600" />
                </button>
                <span className="w-10 text-center text-sm font-sans text-velmora-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 hover:bg-velmora-50 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5 text-velmora-600" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="btn-primary w-full mt-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="mt-2 flex items-center gap-1 justify-center text-xs text-velmora-400 font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              In stock, ready to ship
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <ProductAccordion product={product} />
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24">
            <div className="hairline mb-10" />
            <h2 className="font-serif text-2xl md:text-3xl text-velmora-900 mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] bg-velmora-100 rounded-sm overflow-hidden mb-3">
                    <div
                      className="w-full h-full bg-velmora-200 transition-transform duration-500 group-hover:scale-105"
                      data-strk-bg-id={`related-${p.id}`}
                      data-strk-bg={`[${p.descId}] [${p.titleId}]`}
                      data-strk-bg-ratio="3x4"
                      data-strk-bg-width="600"
                    />
                  </div>
                  <h3 className="product-name text-velmora-800 truncate">{p.name}</h3>
                  <p className="text-sm text-velmora-500 font-sans mt-0.5">${p.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}