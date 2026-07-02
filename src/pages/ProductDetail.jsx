import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[#2A2A2A]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm text-[#F5F0EB] hover:text-[#C9A96E] transition-colors uppercase tracking-[0.1em]"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-[#A0988E] leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <p className="font-serif text-2xl text-[#A0988E]">Product not found</p>
        <Link to="/shop" className="mt-4 text-sm text-[#C9A96E] hover:text-[#D4B878] transition-colors uppercase tracking-wider">
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity)
    setQuantity(1)
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#A0988E] mb-8">
          <Link to="/" className="hover:text-[#C9A96E] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#C9A96E] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[#F5F0EB]">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-14">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-[#111111] rounded-sm overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 rounded-sm overflow-hidden border-2 transition-colors ${
                      i === selectedImage ? 'border-[#C9A96E]' : 'border-[#2A2A2A]'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl md:text-3xl text-[#F5F0EB] tracking-[0.15em] uppercase font-light">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-[#C9A96E] fill-[#C9A96E]'
                        : 'text-[#2A2A2A]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-[#A0988E]">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="mt-4 text-2xl text-[#C9A96E] font-serif">${product.price}</p>

            <p className="mt-6 text-sm text-[#A0988E] leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs text-[#F5F0EB] uppercase tracking-[0.1em] mb-3">
                Finish: <span className="text-[#C9A96E]">{product.variants[selectedVariant]}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v, i) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-wider rounded-sm border transition-all duration-200 ${
                      i === selectedVariant
                        ? 'bg-[#C9A96E] text-black border-[#C9A96E]'
                        : 'bg-transparent text-[#A0988E] border-[#2A2A2A] hover:border-[#A0988E]'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs text-[#F5F0EB] uppercase tracking-[0.1em] mb-3">Quantity</p>
              <div className="flex items-center border border-[#2A2A2A] w-fit rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-[#A0988E] hover:text-[#F5F0EB] transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-2 text-sm text-[#F5F0EB] min-w-[48px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-[#A0988E] hover:text-[#F5F0EB] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-[#C9A96E] text-black py-3.5 text-sm font-medium uppercase tracking-[0.15em] hover:bg-[#D4B878] transition-colors rounded-sm"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 hairline">
              <Accordion title="Description">
                <p>{product.description}</p>
                <p className="mt-2">Category: {product.category}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-1 list-disc pl-4">
                  <li>{product.material} over sterling silver</li>
                  <li>Hypoallergenic and nickel-free</li>
                  <li>Polish gently with a soft, dry cloth</li>
                  <li>Avoid contact with water, perfumes, and lotions</li>
                  <li>Store in the provided Velmora pouch</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-1">
                  <li>Free worldwide shipping on all orders</li>
                  <li>Processing time: 1–2 business days</li>
                  <li>Delivery: 5–10 business days</li>
                  <li>30-day return window for unworn items</li>
                  <li>Free exchanges within the US</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <div className="flex justify-center mb-8">
              <div className="gold-divider" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-[#F5F0EB] font-light text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group flex flex-col"
                >
                  <div className="aspect-square bg-[#111111] rounded-sm overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xs md:text-sm text-[#F5F0EB] tracking-[0.15em] uppercase truncate">
                    {p.name}
                  </h3>
                  <p className="text-sm text-[#C9A96E] mt-1">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}