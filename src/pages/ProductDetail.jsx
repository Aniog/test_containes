import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react'
import { products } from '../data/products'
import { useCartStore } from '../lib/store'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const SVG_PLACEHOLDER = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxIDEnLz4=";

const Accordion = ({ title, defaultOpen = false, children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  
  return (
    <div className="border-b border-border py-4">
      <button 
        className="w-full flex justify-between items-center bg-transparent border-none text-foreground hover:text-primary transition-colors text-sm tracking-widest uppercase font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <div className="mt-4 text-muted-foreground text-sm leading-relaxed pb-2">
          {children}
        </div>
      )}
    </div>
  )
}

export const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === id) || products[0]
  const addItem = useCartStore(state => state.addItem)
  
  const [variant, setVariant] = useState("Gold")
  const [quantity, setQuantity] = useState(1)
  const containerRef = useRef(null)
  
  useEffect(() => {
    // Re-run image loading when product changes
    return window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
  }, [id])
  
  // Find related products (same category, different id)
  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)
    
  if (related.length < 4) {
    const more = products.filter(p => p.category !== product.category && p.id !== product.id)
    related.push(...more.slice(0, 4 - related.length))
  }

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
  }

  return (
    <div ref={containerRef} className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-muted-foreground tracking-widest uppercase mb-8 flex gap-2">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-32">
          {/* Gallery (Left) */}
          <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:w-20 lg:w-24 shrink-0 scrollbar-hide py-1">
              {[0, 1, 2, 3].map(i => (
                <div key={i} className="aspect-square bg-muted cursor-pointer shrink-0 min-w-[70px] ring-1 ring-border opacity-70 hover:opacity-100 transition-opacity">
                  <img 
                    data-strk-img={`[${product.descId}] [${product.titleId}] detail thumbnail ${i+1}`}
                    data-strk-img-id={`${product.imgId}-thumb-${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src={SVG_PLACEHOLDER}
                    alt={`${product.name} thumbnail ${i+1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="aspect-[4/5] bg-muted flex-grow relative">
              <img 
                data-strk-img={`[${product.descId}] [${product.titleId}] main product photo`}
                data-strk-img-id={`${product.imgId}-main`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1000"
                src={SVG_PLACEHOLDER}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Details (Right) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center max-w-lg">
            <h1 id={product.titleId} className="font-serif text-3xl md:text-5xl tracking-wide uppercase mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl">${product.price}</span>
              <div className="flex items-center gap-1 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                <span className="text-xs text-muted-foreground ml-2">(34 reviews)</span>
              </div>
            </div>
            
            <p id={product.descId} className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>
            
            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase mb-3">Tone: {variant}</p>
              <div className="flex gap-3">
                <button 
                  className={`w-10 h-10 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${variant === 'Gold' ? 'border-primary' : 'border-transparent'}`}
                  style={{ backgroundColor: '#D4AF37' }}
                  onClick={() => setVariant('Gold')}
                  aria-label="Select Gold Tone"
                />
                <button 
                  className={`w-10 h-10 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${variant === 'Silver' ? 'border-primary' : 'border-transparent'}`}
                  style={{ backgroundColor: '#C0C0C0' }}
                  onClick={() => setVariant('Silver')}
                  aria-label="Select Silver Tone"
                />
              </div>
            </div>
            
            {/* Action Row */}
            <div className="flex gap-4 mb-12">
              <div className="flex items-center border border-border px-4 py-3 shrink-0">
                <button className="text-muted-foreground hover:text-foreground" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button className="text-muted-foreground hover:text-foreground" onClick={() => setQuantity(quantity + 1)}>
                  <Plus size={16} />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="w-full bg-primary text-white text-sm tracking-widest uppercase py-4 hover:bg-primary/90 transition-colors"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>
            
            {/* Accordions */}
            <div className="border-t border-border">
              <Accordion title="Description" defaultOpen={true}>
                {product.description}
                <br /><br />
                Each piece is carefully crafted to be hypoallergenic and water-resistant. We design jewelry meant to be lived in, from your morning routine to your evening plans.
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Base metal: Responsibly sourced brass or sterling silver</li>
                  <li>Plating: 2.5 microns of 18K solid gold (Vermeil standard)</li>
                  <li>Hypoallergenic, nickel-free and lead-free</li>
                </ul>
                <p className="mt-4">To preserve the integrity of your pieces, remove before showering, swimming or exercising. Avoid contact with perfumes, lotions and cosmetics.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Free global shipping on orders over $150</li>
                  <li>Express shipping options available at checkout</li>
                  <li>Orders dispatch within 1-2 business days</li>
                  <li>30-day money-back guarantee for unworn items</li>
                  <li>Earrings cannot be returned for hygiene reasons unless faulty</li>
                </ul>
              </Accordion>
            </div>
            
          </div>
        </div>
        
        {/* Related Products */}
        <div className="pt-16 border-t border-border">
          <h2 id="related-title" className="font-serif text-3xl text-center mb-12 tracking-wide">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {related.map(p => (
              <Link to={`/product/${p.id}`} key={p.id} className="group block">
                <div className="aspect-[3/4] bg-muted mb-4 overflow-hidden">
                  <img 
                    data-strk-img={`[${p.descId}] [${p.titleId}] [related-title]`}
                    data-strk-img-id={`${p.imgId}-related`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src={SVG_PLACEHOLDER}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 id={`${p.titleId}-related`} className="font-serif text-lg tracking-wide uppercase">{p.name}</h3>
                <p className="mt-1 text-muted-foreground">${p.price}</p>
                <p id={`${p.descId}-related`} className="hidden">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}