import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#e8e2d9]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-widest uppercase">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-[#b8956a]" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      {isOpen && <div className="pb-4 text-[#6b6560] text-sm leading-relaxed">{children}</div>}
    </div>
  )
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addToCart } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="serif-heading text-4xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  return (
    <main className="pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-[#6b6560] mb-8">
          <Link to="/" className="hover:text-[#b8956a] transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[#b8956a] transition-colors">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#1a1a1a]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-[#f5f2ed] mb-4 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === i
                      ? 'border-[#b8956a]'
                      : 'border-transparent hover:border-[#e8e2d9]'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-8">
            <h1 className="product-name text-2xl md:text-3xl mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-[#b8956a] fill-[#b8956a]'
                        : 'text-[#e8e2d9]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6b6560]">
                {product.reviews} reviews
              </span>
            </div>

            <p className="serif-heading text-3xl mb-6">${product.price}</p>

            <p className="text-[#6b6560] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="text-sm tracking-widest uppercase mb-3 block">
                Color
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm tracking-wider capitalize border transition-all ${
                      selectedVariant === variant
                        ? 'border-[#b8956a] bg-[#b8956a] text-white'
                        : 'border-[#e8e2d9] hover:border-[#b8956a]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-sm tracking-widest uppercase mb-3 block">
                Quantity
              </label>
              <div className="flex items-center border border-[#e8e2d9] w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-[#b8956a] transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-[#b8956a] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product, selectedVariant, quantity)}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-12">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() =>
                  setOpenAccordion(
                    openAccordion === 'description' ? null : 'description'
                  )
                }
              >
                <p>{product.description}</p>
                <p className="mt-2">
                  Each piece is carefully crafted and quality-checked before
                  shipping. Designed to be worn and loved every day.
                </p>
              </Accordion>

              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() =>
                  setOpenAccordion(
                    openAccordion === 'materials' ? null : 'materials'
                  )
                }
              >
                <p className="mb-2">
                  <strong>Material:</strong> {product.material}
                </p>
                <p className="mb-2">
                  <strong>Care:</strong> Store in a dry place. Avoid contact with
                  water, perfume, and lotions. Clean gently with a soft cloth.
                </p>
                <p>
                  <strong>Hypoallergenic:</strong> All our pieces are nickel-free
                  and safe for sensitive skin.
                </p>
              </Accordion>

              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() =>
                  setOpenAccordion(
                    openAccordion === 'shipping' ? null : 'shipping'
                  )
                }
              >
                <p className="mb-2">
                  <strong>Shipping:</strong> Free worldwide shipping on all
                  orders. Orders ship within 1-2 business days.
                </p>
                <p className="mb-2">
                  <strong>Returns:</strong> 30-day hassle-free returns. Items
                  must be unworn and in original packaging.
                </p>
                <p>
                  <strong>Gift wrapping:</strong> Complimentary gift wrapping
                  available at checkout.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <h2 className="serif-heading text-4xl text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] overflow-hidden bg-[#f5f2ed] mb-3">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name text-sm mb-1">{product.name}</h3>
                  <p className="text-sm font-medium">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
