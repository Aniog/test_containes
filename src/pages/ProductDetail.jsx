import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '@/data/products'
import { Button } from '@/components/ui/button'
import { useCart } from '@/store/useCart'
import { Star, Minus, Plus, Truck, ArrowRightLeft, ShieldCheck } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id)) || products[0] // fallback for preview
  const { addToCart } = useCart()
  const containerRef = React.useRef(null)
  
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(product.image)

  React.useEffect(() => {
    setActiveImage(product.image)
  }, [product.image])

  React.useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [product.id, activeImage])

  const handleAddToCart = () => {
    addToCart({ ...product, variant: selectedVariant }, quantity)
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div className="pt-24 min-h-screen bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6 py-12">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-foreground">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

            <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
              
              {/* Images */}
              <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
                <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
                  {[product.image, product.hoverImage].map((img, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setActiveImage(img)}
                      className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-secondary ${activeImage === img ? 'ring-1 ring-foreground ring-offset-2' : 'opacity-70 hover:opacity-100'} transition-all`}
                    >
                      <img 
                        data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                        data-strk-img={idx === 0 ? product.imageQuery : product.hoverImageQuery}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="150"
                        src={img} 
                        alt={`${product.name} ${idx + 1}`} 
                        className="w-full h-full object-cover" 
                      />
                    </button>
                  ))}
                </div>
                <div className="flex-1 bg-secondary aspect-[3/4] relative">
                  <img 
                    data-strk-img-id={`pdp-main-${product.id}`}
                    data-strk-img={activeImage === product.image ? product.imageQuery : product.hoverImageQuery}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="800"
                    src={activeImage} 
                    alt={product.name} 
                    className="w-full h-full object-cover absolute inset-0" 
                  />
                </div>
              </div>

          {/* Details */}
          <div className="w-full md:w-1/2 md:py-8">
            <div className="mb-8 border-b border-border pb-8">
              <h1 className="font-serif text-3xl md:text-5xl uppercase tracking-wide mb-4 leading-tight">{product.name}</h1>
              <p className="text-xl md:text-2xl font-light mb-4">${product.price.toFixed(2)}</p>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} className="w-4 h-4" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-medium">{product.rating} ({product.reviews} reviews)</span>
              </div>
              
              <p className="text-muted-foreground font-light leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="uppercase tracking-widest text-xs font-medium">Metal Tone</h3>
                <span className="text-xs text-muted-foreground uppercase">{selectedVariant}</span>
              </div>
              <div className="flex gap-4">
                {product.variants.map((v) => (
                  <button 
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-3 border text-sm uppercase tracking-widest transition-all ${
                      selectedVariant === v 
                        ? 'border-foreground bg-foreground text-background' 
                        : 'border-border text-foreground hover:border-foreground/50'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-border w-32 justify-between px-4 h-14">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-muted-foreground hover:text-foreground">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-medium text-lg">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-muted-foreground hover:text-foreground">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button 
                onClick={handleAddToCart}
                className="flex-1 rounded-none h-14 tracking-[0.2em] uppercase bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 py-6 border-y border-border/50 text-center">
              <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                <Truck className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground border-x border-border/50">
                <ArrowRightLeft className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest">1 Year Warranty</span>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-border">
                <AccordionTrigger className="font-serif text-lg tracking-wide hover:no-underline py-6">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6">
                  {product.material}. Protect your jewelry from scratches, sharp blows, harsh chemicals and extreme temperatures. Store them in the original Velmora box or a specialized jewelry pouch when not wearing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-border">
                <AccordionTrigger className="font-serif text-lg tracking-wide hover:no-underline py-6">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6">
                  Free standard shipping on all orders. We offer a 30-day return policy for unused, unworn items in their original packaging. Custom or engraved pieces are final sale.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="py-24 border-t border-border mt-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-serif text-3xl text-center tracking-wide mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rp) => (
              <div key={rp.id} className="group flex flex-col text-center">
                <Link to={`/product/${rp.id}`} className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4 block">
                  <img 
                    data-strk-img-id={`pdp-related-img-${rp.id}`}
                    data-strk-img={rp.imageQuery}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name} 
                    className="w-full h-full object-cover transition-opacity duration-700 absolute inset-0 z-10 group-hover:opacity-0" 
                  />
                  <img 
                    data-strk-img-id={`pdp-related-hover-${rp.id}`}
                    data-strk-img={rp.hoverImageQuery}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${rp.name} worn`} 
                    className="w-full h-full object-cover absolute inset-0 z-0" 
                  />
                </Link>
                <h3 className="font-serif text-sm tracking-wide uppercase mb-1">
                  <Link to={`/product/${rp.id}`} className="hover:text-primary transition-colors">{rp.name}</Link>
                </h3>
                <p className="font-medium tracking-wide text-sm">${rp.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
