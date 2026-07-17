import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react'
import { SEED_PRODUCTS } from '../lib/data'
import { useStore } from '../store'
import { cn } from '../lib/utils'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  
  return (
    <div className="border-t border-border">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors"
      >
        {title}
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        )}
      >
        <div className="text-sm text-foreground/80 leading-relaxed font-light">
          {children}
        </div>
      </div>
    </div>
  )
}

export const ProductDetailUrlBase = "/product/"

export const ProductDetail = () => {
  const { id } = useParams()
  const product = SEED_PRODUCTS.find(p => p.id === id) || SEED_PRODUCTS[0]
  const { addToCart } = useStore()
  
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Mock related products
  const relatedProducts = SEED_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4)

  if (!product) return <div className="pt-32 text-center">Product not found</div>

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  return (
    <div className="pt-20 pb-24">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-xs uppercase tracking-widest text-foreground/50">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-primary">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Images */}
          <div className="lg:w-3/5 flex flex-col md:flex-row-reverse gap-4">
            {/* Main Image */}
            <div className="flex-1 aspect-[4/5] bg-muted relative overflow-hidden">
               <img 
                  data-strk-img-id={`pdp-main-${product.id}-${activeImageIndex}`}
                  data-strk-img={`[pdp-title-${product.id}] jewelry ${activeImageIndex === 0 ? 'product' : 'on model'}`}
                  data-strk-img-ratio="4x5"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                />
            </div>
            
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 flex-shrink-0">
               {[0, 1].map((idx) => (
                 <button 
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={cn(
                    "relative w-20 md:w-full aspect-[4/5] bg-muted border border-transparent transition-colors",
                    activeImageIndex === idx && "border-primary"
                  )}
                 >
                   <img 
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[pdp-title-${product.id}] jewelry ${idx === 0 ? 'product' : 'on model'}`}
                    data-strk-img-ratio="4x5"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                 </button>
               ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:w-2/5 md:py-10">
            <h1 id={`pdp-title-${product.id}`} className="text-3xl md:text-4xl font-serif uppercase tracking-widest mb-4">
              {product.name}
            </h1>
            <p className="text-xl mb-6">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-8">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={cn("w-4 h-4", i < Math.floor(product.rating) ? "fill-primary" : "fill-transparent")} />
                ))}
              </div>
              <span className="text-xs uppercase tracking-widest opacity-60">({product.reviews} Reviews)</span>
            </div>

            <p className="text-foreground/80 font-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest font-medium mb-3">Metal: {selectedVariant}</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(metal => (
                  <button
                    key={metal}
                    onClick={() => setSelectedVariant(metal)}
                    className={cn(
                      "px-6 py-3 text-sm uppercase tracking-widest border transition-all",
                      selectedVariant === metal 
                        ? "border-foreground bg-foreground text-background" 
                        : "border-border hover:border-foreground/50 bg-transparent text-foreground"
                    )}
                  >
                    {metal}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & CTA */}
            <div className="flex gap-4 mb-12">
               <div className="flex items-center border border-border">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-4 hover:text-primary hover:bg-muted/50 transition-colors"
                  >
                    <Minus className="w-4 h-4 stroke-[1.5]" />
                  </button>
                  <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-4 hover:text-primary hover:bg-muted/50 transition-colors"
                  >
                    <Plus className="w-4 h-4 stroke-[1.5]" />
                  </button>
               </div>
               
               <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground text-sm uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors"
               >
                 Add to Cart - ${(product.price * quantity).toFixed(2)}
               </button>
            </div>

            {/* Accordions */}
            <div className="border-b border-border">
              <Accordion title="Materials & Care" defaultOpen>
                <p className="mb-4">Crafted with {product.materials}.</p>
                <p>To preserve your piece, avoid contact with water, perfumes, and lotions. Store in the provided Velmora pouch when not in use.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-4">Free standard shipping on all domestic orders over $75. International shipping available.</p>
                <p>We accept returns within 30 days of delivery in unworn, original condition.</p>
              </Accordion>
            </div>
            
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="container mx-auto px-4 md:px-6 pt-32">
         <h2 className="text-2xl md:text-3xl font-serif text-center mb-12 border-b border-border pb-6 overflow-hidden">
           <span className="bg-background px-6 relative top-6">You May Also Like</span>
         </h2>
         
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-6">
            {relatedProducts.map(prod => (
              <div key={prod.id} className="group cursor-pointer text-center">
                <Link to={`/product/${prod.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                  <img 
                    data-strk-img-id={`related-primary-${prod.id}`}
                    data-strk-img={`[related-name-${prod.id}] jewelry light background`}
                    data-strk-img-ratio="4x5"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={prod.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img 
                    data-strk-img-id={`related-hover-${prod.id}`}
                    data-strk-img={`[related-name-${prod.id}] jewelry model worn`}
                    data-strk-img-ratio="4x5"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={prod.hoverImageAlt}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </Link>
                <div className="space-y-1">
                  <h3 id={`related-name-${prod.id}`} className="font-serif text-lg">{prod.name}</h3>
                  <p className="text-sm opacity-70">${prod.price}</p>
                </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  )
}