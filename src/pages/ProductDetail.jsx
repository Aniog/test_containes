import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft } from 'lucide-react'
import { products } from '../data/products'
import ProductAccordion from '../components/products/ProductAccordion'
import { useCartDispatch } from '../context/CartContext'

const variants = ['Gold', 'Silver']

function RelatedProduct({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block bg-white"
    >
      <div className="aspect-square overflow-hidden bg-ivory">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="pt-3 pb-2">
        <h3 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#1a1a1a]">
          {product.name}
        </h3>
        <p className="text-sm text-taupe mt-0.5">${product.price}</p>
      </div>
    </Link>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const dispatch = useCartDispatch()

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-[#1a1a1a]">Product not found</h1>
          <Link to="/shop" className="text-gold mt-4 inline-block text-sm underline">
            Back to shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { product, variant: selectedVariant, quantity },
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div className="min-h-screen bg-ivory">
      {/* Back link */}
      <div className="max-w-7xl mx-auto px-6 pt-24 md:pt-28">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-[11px] tracking-wider uppercase text-taupe hover:text-[#1a1a1a] transition-colors duration-300"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>
      </div>

      {/* Product section */}
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden bg-white">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 overflow-hidden bg-white border-2 transition-colors duration-300 ${
                      selectedImage === i
                        ? 'border-gold'
                        : 'border-transparent hover:border-warm-border'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="md:pt-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold text-gold'
                        : 'text-warm-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-taupe">
                {product.reviewCount} reviews
              </span>
            </div>

            <h1 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] font-semibold mt-3">
              {product.name}
            </h1>
            <p className="font-serif text-xl md:text-2xl text-gold mt-3 font-medium">
              ${product.price}
            </p>

            <p className="text-sm text-taupe mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <label className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#1a1a1a]">
                Finish: <span className="text-taupe normal-case tracking-normal font-sans">{selectedVariant}</span>
              </label>
              <div className="flex gap-3 mt-2">
                {variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-2.5 text-sm border transition-colors duration-300 ${
                      selectedVariant === v
                        ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white'
                        : 'border-warm-border text-[#1a1a1a] hover:border-[#1a1a1a]'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#1a1a1a]">
                  Quantity
                </label>
                <div className="flex items-center border border-warm-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-sm hover:bg-ivory transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 text-sm font-medium min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    className="px-3 py-2 text-sm hover:bg-ivory transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full py-4 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
                  added
                    ? 'bg-[#1a1a1a] text-white'
                    : 'bg-gold text-white hover:bg-gold-hover'
                }`}
              >
                {added ? 'Added to Cart ✓' : 'Add to Cart'}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <ProductAccordion details={{ ...product.details, description: product.description }} />
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="border-t border-warm-border py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] font-semibold text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <RelatedProduct key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}