import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { products, getProductBySlug, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'

const ProductDetail = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addToCart } = useCart()
  
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#8A8178] mb-4">Product not found</p>
          <Link to="/shop" className="text-[#A68B5B]">Return to Shop</Link>
        </div>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  return (
    <div className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back link */}
        <Link to="/shop" className="inline-flex items-center text-sm text-[#8A8178] hover:text-[#A68B5B] mb-8">
          <ChevronLeft size={16} className="mr-1" /> BACK TO SHOP
        </Link>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {/* IMAGE GALLERY */}
          <div>
            <div className="aspect-[4/3.5] bg-[#F5F2ED] mb-3 overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 bg-[#F5F2ED] overflow-hidden border-2 transition-colors ${selectedImage === idx ? 'border-[#A68B5B]' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCT INFO */}
          <div className="pt-2">
            <h1 className="product-name text-2xl md:text-3xl tracking-[0.15em] mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-medium">{formatPrice(product.price)}</span>
              <div className="flex items-center gap-1 text-sm text-[#A68B5B]">
                <Star size={14} fill="currentColor" />
                <span>{product.rating}</span>
                <span className="text-[#8A8178]">({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-[#5C5651] leading-relaxed mb-8">{product.description}</p>

            {/* VARIANT SELECTOR */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.15em] text-[#8A8178] mb-3">TONE</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTITY */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] text-[#8A8178] mb-3">QUANTITY</p>
              <div className="flex items-center border border-[#D4C9B9] w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-[#F5F2ED] transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2 text-sm tabular-nums border-x border-[#D4C9B9]">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-[#F5F2ED] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* ADD TO CART */}
            <Button onClick={handleAddToCart} size="lg" className="w-full mb-4">
              ADD TO CART
            </Button>
            <p className="text-center text-xs text-[#8A8178]">Ships in 1-2 business days</p>

            {/* ACCORDIONS */}
            <div className="mt-10">
              <Accordion>
                <AccordionItem>
                  <AccordionTrigger>DESCRIPTION</AccordionTrigger>
                  <AccordionContent>
                    {product.longDescription}
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem>
                  <AccordionTrigger>MATERIALS & CARE</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1.5">
                      <li>• 18K gold-plated brass</li>
                      <li>• Hypoallergenic posts and clasps</li>
                      <li>• Lead and nickel free</li>
                      <li>• Avoid contact with water, perfume, and lotions</li>
                      <li>• Store in a cool, dry place</li>
                      <li>• Clean gently with a soft cloth</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem>
                  <AccordionTrigger>SHIPPING & RETURNS</AccordionTrigger>
                  <AccordionContent>
                    Free worldwide shipping on all orders. Returns accepted within 30 days of delivery. 
                    Items must be unworn and in original packaging. Please contact us for return authorization.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* YOU MAY ALSO LIKE */}
        <div className="mt-20">
          <h3 className="serif text-2xl tracking-[-0.01em] mb-8 text-center">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((item) => (
              <Link key={item.id} to={`/product/${item.slug}`} className="product-card group bg-white block">
                <div className="aspect-[4/3.5] bg-[#F5F2ED] overflow-hidden">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                </div>
                <div className="p-4">
                  <p className="product-name text-sm tracking-[0.15em] mb-1">{item.name}</p>
                  <span className="text-sm text-[#5C5651]">{formatPrice(item.price)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
