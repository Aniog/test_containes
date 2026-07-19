import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, Heart, Share2, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { products } from '@/lib/data'
import { useCartStore } from '@/lib/store'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function Product() {
  const { id } = useParams()
  const { addToCart } = useCartStore()
  const containerRef = useRef(null)
  
  const product = products.find(p => p.id === id) || products[0]
  
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  // Use dummy images array for gallery
  const galleryImages = [1, 2, 3, 4]

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [id])

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  return (
    <div className="pt-24 pb-24 min-h-screen bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <Link to={`/collections/${product.category.toLowerCase()}`} className="hover:text-foreground transition-colors">{product.category}</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
          {/* Gallery */}
          <div className="lg:w-1/2 flex flex-col md:flex-row-reverse gap-4">
            {/* Main Image */}
            <div className="flex-1 bg-secondary aspect-[4/5] relative overflow-hidden">
               <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id={`pdp-main-${product.id}-${activeImage}`}
                  data-strk-img={`[pdp-title] detail view ${activeImage}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1200"
                />
            </div>
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 md:w-24 shrink-0 hide-scrollbar">
              {galleryImages.map((_, i) => (
                <button 
                  key={i}
                  className={`relative aspect-[3/4] w-20 md:w-full shrink-0 bg-secondary overflow-hidden border-2 transition-colors ${activeImage === i ? 'border-foreground' : 'border-transparent'}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={`${product.name} thumbnail ${i+1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-title] detail view ${i}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 flex flex-col pt-4 lg:pt-8">
            <h1 id="pdp-title" className="text-4xl md:text-5xl font-serif uppercase tracking-widest mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-medium">${product.price}</span>
              <div className="flex items-center gap-2 text-accent">
                <div className="flex">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-muted-foreground text-sm">({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            <div className="space-y-6 mb-8 border-t border-border pt-8">
              {/* Variants */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="uppercase tracking-widest text-xs font-semibold">Finish</span>
                  <span className="text-sm text-foreground/80">{selectedVariant}</span>
                </div>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button 
                      key={v}
                      className={`h-12 px-6 border transition-all uppercase tracking-widest text-xs font-medium rounded-none ${selectedVariant === v ? 'border-foreground bg-foreground text-background' : 'border-border bg-transparent text-foreground hover:border-foreground/50'}`}
                      onClick={() => setSelectedVariant(v)}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center justify-between border border-border h-14 w-full sm:w-32 px-4 shrink-0">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-muted-foreground hover:text-foreground">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-muted-foreground hover:text-foreground">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button 
                  className="flex-1 h-14 bg-foreground text-background hover:bg-foreground/90 uppercase tracking-widest font-semibold rounded-none"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </div>
              
              {/* Actions */}
              <div className="flex gap-6 mt-4">
                <button className="flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
                  <Heart className="w-4 h-4" />
                  Add to Wishlist
                </button>
                <button className="flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full mt-auto" defaultValue="details">
              <AccordionItem value="details">
                <AccordionTrigger className="uppercase tracking-widest text-xs font-semibold hover:no-underline py-4">Details</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Every Velmora piece is thoughtfully designed for everyday wear. Our {product.name.toLowerCase()} feature a lightweight construction ensuring comfort from day to night.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger className="uppercase tracking-widest text-xs font-semibold hover:no-underline py-4">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p><strong className="text-foreground font-medium">Materials:</strong> {product.materials}</p>
                  <p><strong className="text-foreground font-medium">Care:</strong> {product.care}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="uppercase tracking-widest text-xs font-semibold hover:no-underline py-4">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-4">
                  <p>Free standard shipping on all orders. Express options available at checkout.</p>
                  <p>Read our full return policy for details on our 30-day money-back guarantee.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        <section className="pt-16 border-t border-border">
          <h2 className="text-3xl font-serif mb-8 text-center text-foreground">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group flex flex-col">
                <div className="relative aspect-[3/4] mb-4 bg-secondary overflow-hidden">
                  <Link to={`/products/${p.id}`} className="absolute inset-0 z-10">
                    <span className="sr-only">View {p.name}</span>
                  </Link>
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={`related-${p.id}-img`}
                    data-strk-img={`[related-item-${p.id}-title] jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 md:flex hidden justify-center">
                    <Button 
                      className="w-full bg-background/90 text-foreground hover:bg-accent hover:text-accent-foreground backdrop-blur-sm shadow-sm rounded-none border border-border"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        addToCart(p, p.variants[0])
                      }}
                    >
                      Quick Add
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col flex-1 text-center items-center">
                  <h3 id={`related-item-${p.id}-title`} className="font-serif uppercase tracking-widest text-sm mb-1">{p.name}</h3>
                  <p className="mt-2 font-medium">${p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

