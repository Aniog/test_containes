import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getProductBySlug, getRelatedProducts, products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import Button from '@/components/ui/Button'
import StarRating from '@/components/ui/StarRating'
import ProductCard from '@/components/ui/ProductCard'
import { Accordion } from '@/components/ui/Accordion'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { addToCart } = useCart()

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#8B8178] mb-4">Product not found</p>
          <Link to="/shop" className="text-[#A67C52]">Return to Shop</Link>
        </div>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  const accordionItems = [
    {
      title: "Description",
      content: product.description + " Each piece is hand-finished in our atelier and inspected for quality before being carefully packaged and shipped to you."
    },
    {
      title: "Materials & Care",
      content: `Crafted from ${product.material}. To maintain the beauty of your jewelry, avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch when not wearing. Clean gently with a soft, dry cloth.`
    },
    {
      title: "Shipping & Returns",
      content: "Complimentary worldwide shipping on all orders. Ships within 1-2 business days. Returns accepted within 30 days of delivery for unworn items in original packaging. Please contact us for return authorization."
    }
  ]

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Back Link */}
        <Link to="/shop" className="inline-flex items-center text-sm tracking-[1px] text-[#8B8178] hover:text-[#1A1816] mb-8 group">
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-0.5 transition-transform" />
          BACK TO SHOP
        </Link>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/3] bg-[#E5E0D8] overflow-hidden mb-4">
              <img 
                src={product.images?.[selectedImage] || product.images?.[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 bg-[#E5E0D8] overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-[#A67C52]' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="pt-2">
            <h1 className="font-serif text-3xl md:text-4xl tracking-[2px] mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl text-[#4A4640]">{formatPrice(product.price)}</span>
              <div className="flex items-center gap-2">
                <StarRating rating={product.rating} />
                <span className="text-xs text-[#8B8178]">({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-[#4A4640] leading-relaxed mb-8 pr-4">
              {product.shortDescription}. {product.description.split('.')[0]}.
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[2px] text-[#8B8178] mb-3">TONE</p>
              <div className="flex gap-3">
                {product.variants?.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 text-sm tracking-[1.5px] border transition-all ${
                      selectedVariant === variant 
                        ? 'border-[#A67C52] bg-[#A67C52] text-white' 
                        : 'border-[#E5E0D8] hover:border-[#A67C52] text-[#4A4640]'
                    }`}
                  >
                    {variant.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[2px] text-[#8B8178] mb-3">QUANTITY</p>
              <div className="flex items-center border border-[#E5E0D8] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-[#8B8178] hover:text-[#1A1816] transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 tabular-nums border-x border-[#E5E0D8]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-[#8B8178] hover:text-[#1A1816] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button onClick={handleAddToCart} className="w-full mb-4" size="lg">
              ADD TO CART
            </Button>
            <p className="text-center text-xs text-[#8B8178] tracking-wide">Free shipping • 30-day returns</p>

            {/* Accordions */}
            <div className="mt-12">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20 pt-12 border-t border-[#E5E0D8]">
          <h3 className="font-serif text-2xl tracking-wide mb-8">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
