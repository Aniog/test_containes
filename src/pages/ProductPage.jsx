import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, Check } from 'lucide-react'
import { products } from '@/data/products'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/useCart'
import ProductCard from '@/components/products/ProductCard'

const ProductPage = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [activeAccordion, setActiveAccordion] = useState('description')
  const { addItem, setCartOpen } = useCart()

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-[#1C1917] mb-4">Product not found</h1>
          <Link to="/shop" className="text-[#C9A96E] hover:underline">Return to shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  const handleAddToCart = () => {
    addItem({ ...product, variant: selectedVariant }, quantity)
    setCartOpen(true)
  }

  const images = [product.images.primary, product.images.secondary]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#78716C] mb-8">
          <Link to="/" className="hover:text-[#C9A96E] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#C9A96E] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[#1C1917]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-[#F5F5F4] rounded-xl overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 bg-[#F5F5F4] rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-[#C9A96E]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <h1 className="font-serif text-2xl md:text-3xl text-[#1C1917] tracking-wide uppercase mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]" />
                <span className="text-sm font-medium text-[#1C1917]">{product.rating}</span>
              </div>
              <span className="text-sm text-[#78716C]">({product.reviewCount} reviews)</span>
            </div>

            <p className="text-2xl font-medium text-[#1C1917] mb-6">${product.price}</p>

            <p className="text-[#57534E] leading-relaxed mb-8">{product.description}</p>

            {/* Variant selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#1C1917] mb-3">Finish</label>
                <div className="flex gap-3">
                  {product.variants.map(variant => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide capitalize transition-all ${
                        selectedVariant === variant
                          ? 'bg-[#1C1917] text-white'
                          : 'bg-[#F5F5F4] text-[#57534E] hover:bg-[#E7E5E4]'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-[#1C1917] mb-3">Quantity</label>
              <div className="inline-flex items-center border border-[#E8E4DF] rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[#F5F5F4] transition-colors rounded-l-full"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4 text-[#57534E]" />
                </button>
                <span className="px-6 text-sm text-[#1C1917] min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[#F5F5F4] transition-colors rounded-r-full"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4 text-[#57534E]" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <Button
              onClick={handleAddToCart}
              className="w-full rounded-full py-4 text-sm tracking-widest uppercase bg-[#C9A96E] hover:bg-[#B8944F] mb-6"
              size="lg"
            >
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </Button>

            {/* Accordions */}
            <div className="border-t border-[#E8E4DF]">
              {[
                { id: 'description', label: 'Description', content: product.description },
                { id: 'materials', label: 'Materials & Care', content: (
                  <div>
                    <p className="mb-2">{product.materials}</p>
                    <p>{product.care}</p>
                  </div>
                )},
                { id: 'shipping', label: 'Shipping & Returns', content: (
                  <div>
                    <p className="mb-2">{product.shipping}</p>
                    <p>{product.returns}</p>
                  </div>
                )}
              ].map(item => (
                <div key={item.id} className="border-b border-[#E8E4DF] last:border-b-0">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === item.id ? '' : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium text-[#1C1917]">{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#78716C] transition-transform duration-300 ${
                        activeAccordion === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === item.id ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-[#57534E] leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl text-[#1C1917] text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductPage
