import React, { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, Minus, Plus, ChevronDown, Check } from "lucide-react"
import { products } from "@/data/products"
import { useCart } from "@/context/CartContext"
import ProductCard from "@/components/home/ProductCard"

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem, toggleCart } = useCart()
  const [selectedTone, setSelectedTone] = useState("gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState("description")

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-sm underline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedTone)
    }
    toggleCart()
  }

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8 text-xs text-stone-500">
          <Link to="/" className="hover:text-stone-900">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-stone-900">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden bg-stone-100">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`h-20 w-20 flex-shrink-0 overflow-hidden border-2 transition-colors ${
                    activeImage === index ? "border-stone-900" : "border-transparent"
                  }`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:py-4">
            <h1 className="font-serif text-2xl md:text-3xl tracking-wide uppercase">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-stone-500">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 text-2xl font-light">${product.price}</p>
            <p className="mt-6 text-stone-600 leading-relaxed">{product.description}</p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.12em] text-stone-500 mb-3">Tone</p>
              <div className="flex gap-3">
                {product.tones.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2.5 border text-xs uppercase tracking-[0.12em] transition-colors ${
                      selectedTone === tone
                        ? "border-stone-900 bg-stone-900 text-white"
                        : "border-stone-300 text-stone-600 hover:border-stone-900"
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.12em] text-stone-500 mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-stone-300 hover:border-stone-900 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-stone-300 hover:border-stone-900 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-8 w-full py-4 bg-stone-900 text-white text-xs uppercase tracking-[0.15em] hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
            >
              <Check className="h-4 w-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="mt-8 space-y-0 border-t border-stone-200">
              {[
                { key: "description", label: "Description", content: product.description },
                { key: "materials", label: "Materials & Care", content: product.materials },
                { key: "shipping", label: "Shipping & Returns", content: product.shipping },
              ].map((item) => (
                <div key={item.key} className="border-b border-stone-200">
                  <button
                    onClick={() => toggleAccordion(item.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm uppercase tracking-[0.12em]">{item.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        openAccordion === item.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openAccordion === item.key && (
                    <div className="pb-4 text-sm text-stone-600 leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="font-serif text-2xl md:text-3xl text-center tracking-wide mb-12">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
