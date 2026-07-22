import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronRight, Check } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

const Product = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem, setCartOpen } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-['Cormorant_Garamond'] text-3xl text-[#1a1814] mb-4">Product Not Found</h1>
          <Link to="/shop">
            <Button variant="outline">Return to Shop</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant)
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
    setCartOpen(true)
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-[#78716c]">
          <Link to="/" className="hover:text-[#1a1814] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/shop" className="hover:text-[#1a1814] transition-colors">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#1a1814]">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-[#f7f4ef] rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-sm text-[#a8a29e]">Product Image</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((image, index) => (
                <div key={image.id} className="aspect-square bg-[#f7f4ef] rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-xs text-[#a8a29e]">Thumbnail {index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-8">
            <h1 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-medium text-[#1a1814] tracking-wide uppercase mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-[#c9a96e] text-[#c9a96e]" />
                <span className="text-sm font-medium text-[#1a1814]">{product.rating}</span>
              </div>
              <span className="text-sm text-[#78716c]">({product.reviewCount} reviews)</span>
            </div>

            <p className="text-2xl font-medium text-[#1a1814] mb-6">${product.price}</p>

            <p className="text-[#57534e] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <label className="text-sm font-medium text-[#1a1814] mb-3 block">
                Tone: <span className="capitalize">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 rounded-full text-sm tracking-wide transition-all ${
                      selectedVariant === variant
                        ? 'bg-[#1a1814] text-white'
                        : 'bg-[#f7f4ef] text-[#57534e] hover:bg-[#e7e5e4]'
                    }`}
                  >
                    {variant === 'gold' ? 'Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-sm font-medium text-[#1a1814] mb-3 block">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-[#e7e5e4] rounded-full hover:border-[#c9a96e] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg font-medium text-[#1a1814] w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-[#e7e5e4] rounded-full hover:border-[#c9a96e] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              variant="accent" 
              size="lg" 
              className="w-full mb-4"
              onClick={handleAddToCart}
            >
              {added ? (
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Added to Bag
                </span>
              ) : (
                'Add to Cart'
              )}
            </Button>

            <p className="text-xs text-[#78716c] text-center">
              Free shipping on orders over $75
            </p>

            {/* Accordions */}
            <div className="mt-12">
              <Accordion type="single" collapsible defaultValue="description">
                <AccordionItem value="description">
                  <AccordionTrigger>Description</AccordionTrigger>
                  <AccordionContent>
                    {product.description}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="materials">
                  <AccordionTrigger>Materials & Care</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                    <p>{product.care}</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Free worldwide shipping on all orders over $75.</p>
                    <p className="mb-2">Standard delivery: 5-7 business days.</p>
                    <p>30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-medium text-[#1a1814] tracking-wide mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`} className="group">
                  <div className="aspect-[3/4] bg-[#f7f4ef] rounded-lg overflow-hidden mb-3">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-xs text-[#a8a29e]">Product Image</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-medium text-[#1a1814] tracking-wide uppercase mb-1">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-sm text-[#57534e]">${relatedProduct.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Product
