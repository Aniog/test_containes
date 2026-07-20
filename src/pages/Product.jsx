import React, { useState, useRef, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Star, Minus, Plus, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useCart } from '@/context/CartContext'
import { PRODUCTS } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Product() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = PRODUCTS.find(p => p.id === id)
  const relatedProducts = PRODUCTS.filter(p => p.id !== id && p.category === product?.category).slice(0, 4)
  
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState('gold')
  const { addItem, setIsCartOpen } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    // Reset state when product changes
    setQuantity(1)
    setVariant('gold')
    window.scrollTo(0, 0)
    
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id])

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Button onClick={() => navigate('/shop')} variant="outline" className="rounded-none">
          Back to Shop
        </Button>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({ ...product, variant }, quantity)
    setIsCartOpen(true)
  }

  return (
    <div className="pt-24 pb-20 bg-background" ref={containerRef}>
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8 font-medium text-xs tracking-widest uppercase text-muted-foreground flex items-center">
          <Link to="/shop" className="hover:text-foreground transition-colors flex items-center">
            <ArrowLeft className="w-3 h-3 mr-2" /> Shop
          </Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-foreground transition-colors">
            {product.category}
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Gallery (Left) */}
          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-[3/4] bg-secondary relative overflow-hidden md:col-span-2">
              <img 
                alt={`${product.name} primary view`}
                data-strk-img-id={`pdp-${product.id}-img1`}
                data-strk-img={`[pdp-title] ${product.imageQueries?.[0] || 'beautiful gold jewelry'}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] bg-secondary relative overflow-hidden hidden md:block">
              <img 
                alt={`${product.name} detail view`}
                data-strk-img-id={`pdp-${product.id}-img2`}
                data-strk-img={`[pdp-title] ${product.imageQueries?.[1] || 'gold jewelry macro details'}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] bg-secondary relative overflow-hidden hidden md:block">
              <img 
                alt={`${product.name} lifestyle view`}
                data-strk-img-id={`pdp-${product.id}-img3`}
                data-strk-img={`[pdp-title] woman wearing gold jewelry lifestyle`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details (Right) */}
          <div className="lg:w-2/5 flex flex-col pt-4">
            <h1 id="pdp-title" className="font-serif text-3xl md:text-4xl text-foreground mb-4 uppercase tracking-widest">
              {product.name}
            </h1>
            
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
              <span className="text-xl text-foreground font-medium">${product.price.toFixed(2)}</span>
              <div className="flex items-center text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-xs text-muted-foreground ml-2 font-medium tracking-widest uppercase">(12)</span>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <span className="block text-xs font-semibold tracking-widest uppercase mb-4">
                Metal: {variant === 'gold' ? '18K Gold Plated' : 'Sterling Silver'}
              </span>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setVariant('gold')}
                  className={`w-12 h-12 rounded-full border-2 focus:outline-none transition-all ${
                    variant === 'gold' ? 'border-primary p-1' : 'border-transparent'
                  }`}
                  aria-label="Select Gold Variant"
                >
                  <span className="block w-full h-full rounded-full bg-[#E5C158]" />
                </button>
                <button 
                  onClick={() => setVariant('silver')}
                  className={`w-12 h-12 rounded-full border-2 focus:outline-none transition-all ${
                    variant === 'silver' ? 'border-primary p-1' : 'border-transparent'
                  }`}
                  aria-label="Select Silver Variant"
                >
                  <span className="block w-full h-full rounded-full bg-[#E0E0E0]" />
                </button>
              </div>
            </div>

            {/* Add to Cart area */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center border border-input h-14 w-full sm:w-32 justify-between px-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-medium text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button 
                onClick={handleAddToCart}
                className="flex-1 rounded-none h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-widest uppercase text-xs"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger className="font-serif text-base uppercase tracking-widest">
                  Description
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                  {product.description} A verified classic that transitions seamlessly from day to night. 
                  Handcrafted with care for exceptional quality and durability.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger className="font-serif text-base uppercase tracking-widest">
                  Materials & Care
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                  {product.material}
                  <br/><br/>
                  To maintain the shine, avoid contact with water, perfumes, and harsh chemicals. 
                  Store in the provided pouch when not in use.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" className="border-b-0">
                <AccordionTrigger className="font-serif text-base uppercase tracking-widest">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                  Free standard worldwide shipping on all orders. <br/><br/>
                  We accept returns in unworn condition within 30 days of delivery. 
                  Earrings are non-returnable for hygiene reasons unless faulty.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 pt-16 border-t border-border">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-12">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(item => (
                <Link key={item.id} to={`/product/${item.id}`} className="group block text-center">
                  <div className="relative aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                    <img 
                      alt={item.name}
                      data-strk-img-id={`pdp-related-${item.id}`}
                      data-strk-img={`[pdp-related-title-${item.id}] [pdp-title] related`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 id={`pdp-related-title-${item.id}`} className="font-serif uppercase tracking-widest text-xs font-semibold mb-2">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-xs">${item.price.toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
