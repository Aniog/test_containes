import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

// Reuse the products dataset for the mock detailing
const PRODUCTS = [
  { 
    id: 'vivid-aura', 
    name: 'Vivid Aura Jewels', 
    price: 42, 
    category: 'Earrings', 
    material: '18K Gold Plated', 
    description: 'A striking statement piece that merges classic elegance with modern geometry. These cuffs catch the light from every angle.',
    details: [
      '18K Gold Plated Brass',
      'Hypoallergenic & Nickel-Free',
      'Dimensions: 1.2cm diameter',
      'Sold as a pair'
    ],
    images: ['[vivid-aura-desc] [vivid-aura-title] gold ear cuff', '[vivid-aura-desc] [vivid-aura-title] gold ear cuff lifestyle close up', '[vivid-aura-desc] [vivid-aura-title] gold ear cuff detail macro']
  },
  { 
    id: 'golden-sphere', 
    name: 'Golden Sphere Huggies', 
    price: 38, 
    category: 'Huggies', 
    material: '18K Gold Plated',
    description: 'The foundation of any good ear stack. Our Golden Sphere Huggies are hollowed out to be incredibly lightweight while maintaining a chunky, bold presence.',
    details: [
      '18K Gold Plated over Sterling Silver base',
      'Secure click-hinge closure',
      'Outer diameter: 14mm',
      'Weight: 2.1g per earring'
    ],
    images: ['[golden-sphere-desc] [golden-sphere-title] gold chunk dome huggies', '[golden-sphere-desc] [golden-sphere-title] gold chunky dome huggies on ear'] 
  },
]

import { useCart } from '../context/CartContext'

export const ProductDetail = () => {
  const { id } = useParams()
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0]
  
  const { addItem } = useCart()
  
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTone, setActiveTone] = useState('Gold') // Mock variant selector
  const [activeAccordion, setActiveAccordion] = useState('description')
  
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
        try {
            ImageHelper.loadImages(strkImgConfig, containerRef.current)
        } catch (e) {
            console.log('ImageHelper init skipped')
        }
    }
  }, [activeImage, product])

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 mb-24">
        
        {/* Left: Gallery */}
        <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible shrink-0 md:w-20 lg:w-24">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                className={`relative aspect-[3/4] w-20 md:w-full shrink-0 overflow-hidden bg-secondary border ${activeImage === idx ? 'border-primary' : 'border-transparent'}`}
                onClick={() => setActiveImage(idx)}
              >
                <img 
                  data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                  data-strk-img={img}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="150"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`Thumbnail ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          
          {/* Main Image */}
          <div className="relative aspect-[4/5] w-full bg-secondary grow overflow-hidden">
             <img 
                key={activeImage} // Forces re-render of img tag on change for basic animations
                data-strk-img-id={`pdp-main-${product.id}-${activeImage}`}
                data-strk-img={product.images[activeImage]}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-500"
              />
          </div>
        </div>

        {/* Right: Info */}
        <div className="w-full md:w-1/2 md:py-4">
          <div className="mb-2 text-primary flex gap-1">
             {[...Array(5)].map((_, i) => (
               <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
             ))}
             <span className="font-sans text-xs text-muted-foreground ml-2">(128 Reviews)</span>
          </div>
          
          <h1 id={`pdp-${product.id}-title`} className="font-serif text-3xl md:text-5xl uppercase tracking-widest text-foreground leading-tight mb-2">
            {product.name}
          </h1>
          <p id={`pdp-${product.id}-desc`} className="font-sans text-lg text-muted-foreground mb-8">
            ${product.price}
          </p>

          <p className="font-sans text-foreground/80 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Variants */}
          <div className="mb-8">
            <span className="block font-sans text-sm tracking-wide text-foreground mb-3">Tone: <span className="text-muted-foreground">{activeTone}</span></span>
            <div className="flex gap-4">
              <button 
                onClick={() => setActiveTone('Gold')}
                className={`w-12 h-12 rounded-full border-2 bg-gradient-to-tr from-amber-200 to-yellow-500 ${activeTone === 'Gold' ? 'border-primary ring-2 ring-primary/20 ring-offset-2' : 'border-transparent shadow-sm'}`}
                aria-label="Gold Tone"
              />
              <button 
                onClick={() => setActiveTone('Silver')}
                className={`w-12 h-12 rounded-full border-2 bg-gradient-to-tr from-gray-200 to-gray-400 ${activeTone === 'Silver' ? 'border-primary ring-2 ring-primary/20 ring-offset-2' : 'border-transparent shadow-sm'}`}
                aria-label="Silver Tone"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            {/* Quantity */}
            <div className="flex items-center border border-border h-12">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 font-sans text-foreground hover:bg-secondary transition-colors h-full"
              >
                -
              </button>
              <span className="w-8 text-center font-sans tracking-wide text-sm">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 font-sans text-foreground hover:bg-secondary transition-colors h-full"
              >
                +
              </button>
            </div>
            
            {/* Add to Cart */}
            <button 
              className="flex-1 h-12 bg-primary text-primary-foreground font-serif uppercase tracking-[0.2em] text-sm hover:bg-primary/90 transition-colors"
              onClick={() => addItem(product, quantity, activeTone)}
            >
              Add to Cart - ${product.price * quantity}
            </button>
          </div>
          
          <div className="bg-secondary/50 font-sans text-xs text-foreground py-3 px-4 flex items-center justify-center gap-2 mb-10 border border-border/50">
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
             Free worldwide shipping on orders over $150
          </div>

          {/* Accordions */}
          <div className="border-t border-border border-b">
            {/* Item 1 */}
            <div className="border-b border-border">
              <button 
                onClick={() => setActiveAccordion(activeAccordion === 'details' ? '' : 'details')}
                className="w-full py-4 flex justify-between items-center font-serif text-sm tracking-widest uppercase hover:text-primary transition-colors"
              >
                Materials & Details
                <span className="font-sans font-light text-xl leading-none">{activeAccordion === 'details' ? '-' : '+'}</span>
              </button>
              {activeAccordion === 'details' && (
                <div className="pb-4 font-sans text-sm leading-relaxed text-muted-foreground animate-in slide-in-from-top-2">
                  <ul className="list-disc pl-5 space-y-1">
                    {product.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Item 2 */}
            <div>
              <button 
                onClick={() => setActiveAccordion(activeAccordion === 'shipping' ? '' : 'shipping')}
                className="w-full py-4 flex justify-between items-center font-serif text-sm tracking-widest uppercase hover:text-primary transition-colors"
              >
                Shipping & Returns
                <span className="font-sans font-light text-xl leading-none">{activeAccordion === 'shipping' ? '-' : '+'}</span>
              </button>
              {activeAccordion === 'shipping' && (
                <div className="pb-4 font-sans text-sm leading-relaxed text-muted-foreground animate-in slide-in-from-top-2">
                  <p>Standard worldwide shipping takes 5-8 business days. Express options available at checkout.</p>
                  <p className="mt-2">We offer a 30-day return policy for unworn items in their original packaging. Earrings are non-returnable for hygiene reasons unless faulty.</p>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Related Products */}
      <div className="border-t border-border pt-16">
        <h3 className="font-serif text-2xl text-center mb-10 text-foreground">You May Also Like</h3>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {PRODUCTS.slice(0, 4).map((item) => (
                <div 
                   key={item.id} 
                   className="group cursor-pointer"
                   onClick={() => window.location.href = `/product/${item.id}`} // Force reload or use navigate
                >
                    <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary w-full">
                        <img 
                          data-strk-img-id={`pdp-related-${item.id}`}
                          data-strk-img={item.images[0]}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="400"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={item.name}
                          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="text-center">
                        <h4 id={`pdp-related-${item.id}-title`} className="font-serif text-xs md:text-sm uppercase tracking-widest mb-1">{item.name}</h4>
                        <p id={`pdp-related-${item.id}-desc`} className="font-sans text-sm text-muted-foreground">${item.price}</p>
                    </div>
                </div>
            ))}
         </div>
      </div>
    </div>
  )
}