import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { PRODUCTS } from '@/lib/data'
import { useCartStore } from '@/lib/store'
import { toast } from 'sonner'
import { Plus, Minus, Truck, ShieldCheck, Heart } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCartStore()
  const [quantity, setQuantity] = useState(1)
  
  const product = PRODUCTS.find(p => p.id === id)
  const relatedProducts = PRODUCTS.filter(p => p.id !== id && p.category === product?.category).slice(0, 3)

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-serif mb-4">Product Not Found</h1>
        <Button asChild variant="outline" className="uppercase tracking-widest text-xs rounded-none border-foreground text-foreground">
          <Link to="/shop">Return to Shop</Link>
        </Button>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
        addItem(product)
    }
    toast.success(`Added ${quantity} ${product.name} to cart`)
    setQuantity(1)
  }

  return (
    <div className="pt-24 pb-24">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 mb-8 text-xs uppercase tracking-widest text-muted-foreground flex gap-2">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to={`/shop?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Image Gallery */}
          <div className="w-full lg:w-[55%] flex flex-col-reverse md:flex-row gap-4 h-fit sticky top-24">
            {/* Thumbnails */}
             <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible w-full md:w-20 flex-shrink-0">
               <div className="aspect-[3/4] w-20 md:w-full border border-foreground/20 cursor-pointer bg-secondary relative">
                 <img 
                    alt="Thumbnail 1"
                    className="object-cover w-full h-full absolute inset-0 opacity-80"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    dangerouslySetInnerHTML={{ __html: '' }}
                    {...{[product.image.split('="')[0]]: product.image.split('="')[1].replace('"', '')}}
                    data-strk-img-id={`pdp-thumb-1-${product.id}`}
                    data-strk-img-ratio="3x4"
                  />
               </div>
               <div className="aspect-[3/4] w-20 md:w-full border border-border cursor-pointer bg-secondary relative opacity-60 hover:opacity-100 transition-opacity">
                 <img 
                    alt="Thumbnail 2"
                    className="object-cover w-full h-full absolute inset-0 opacity-80"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    {...{[product.altImage.split('="')[0]]: product.altImage.split('="')[1].replace('"', '')}}
                    data-strk-img-id={`pdp-thumb-2-${product.id}`}
                    data-strk-img-ratio="3x4"
                  />
               </div>
             </div>
             
             {/* Main Image */}
             <div className="flex-1 aspect-[3/4] bg-secondary relative border border-border">
                <img 
                  alt={product.imageAlt}
                  className="object-cover w-full h-full absolute inset-0 opacity-90"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  dangerouslySetInnerHTML={{ __html: '' }}
                  {...{[product.image.split('="')[0]]: product.image.split('="')[1].replace('"', '')}}
                  data-strk-img-id={`pdp-main-${product.id}`}
                  data-strk-img-ratio="3x4"
                />
             </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <h1 className="text-3xl lg:text-4xl font-serif uppercase tracking-widest mb-4">{product.name}</h1>
            <p className="text-xl font-light mb-6">${product.price}</p>
            
            {/* Reviews summary mock */}
            <div className="flex items-center gap-2 mb-8 text-sm">
              <div className="flex text-[#B89A6A]">
                {[1,2,3,4,5].map(i => (
                   <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <span className="text-muted-foreground underline underline-offset-4 decoration-border">24 Reviews</span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Variant Mock */}
            <div className="mb-8">
              <span className="block text-sm uppercase tracking-widest mb-3">Color: <span className="text-foreground">Gold</span></span>
              <div className="flex gap-3">
                 <button className="w-8 h-8 rounded-full bg-[#D4AF37] border-2 border-background ring-1 ring-foreground transition-all" aria-label="Gold variant" />
                 <button className="w-8 h-8 rounded-full bg-[#E0E0E0] border-2 border-background ring-1 ring-transparent hover:ring-border transition-all opacity-50 cursor-not-allowed hidden" aria-label="Silver variant" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-border">
                <button 
                  className="px-4 py-3 hover:bg-muted text-foreground transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-3 min-w-[3rem] text-center font-medium">{quantity}</span>
                <button 
                  className="px-4 py-3 hover:bg-muted text-foreground transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              
              <Button size="lg" className="flex-1 rounded-none text-base tracking-widest shadow-sm bg-accent hover:bg-accent/90" onClick={handleAddToCart}>
                ADD TO CART - ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            {/* Value props */}
            <div className="grid grid-cols-1 gap-4 mb-10 text-sm text-foreground/80 py-6 border-y border-border">
               <div className="flex items-center justify-between"><span className="flex items-center gap-3"><Truck className="w-5 h-5 text-primary"/> Free shipping & returns</span></div>
               <div className="flex items-center justify-between"><span className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-primary"/> 18K Gold Plated Vermeil</span></div>
               <div className="flex items-center justify-between"><span className="flex items-center gap-3"><Heart className="w-5 h-5 text-primary"/> 2 Year Warranty</span></div>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm font-serif uppercase tracking-widest py-4">Description</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Every Velmora piece is thoughtfully designed in-house. The {product.name} is crafted from a thick layer of 18K solid gold over a sterling silver base (vermeil), ensuring longevity and a premium, weighty feel. Perfect for stacking or wearing alone as a quiet statement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-sm font-serif uppercase tracking-widest py-4">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>18K Gold Plated Vermeil</li>
                    <li>Base: 925 Sterling Silver</li>
                    <li>Hypoallergenic & Nickel-Free</li>
                  </ul>
                  To keep your jewelry looking its best, avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided Velmora pouch when not in use.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-sm font-serif uppercase tracking-widest py-4">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Free standard shipping on all orders. Express shipping available at checkout. 
                  We accept returns within 30 days of delivery. Items must be unworn and in original packaging. Refunds are processed to the original payment method.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24 container mx-auto px-6 mt-12 border-t border-border">
          <h2 className="text-3xl font-serif mb-12 text-center text-foreground">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12">
            {relatedProducts.map(rel => (
              <Link key={rel.id} to={`/product/${rel.id}`} className="group block group/card text-foreground">
                <div className="relative aspect-[3/4] mb-4 bg-secondary/30 overflow-hidden border border-border">
                  <img 
                    alt={rel.imageAlt}
                    className="object-cover w-full h-full transition-opacity duration-500 ease-in-out group-hover/card:opacity-0 absolute inset-0 z-10"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    dangerouslySetInnerHTML={{ __html: '' }}
                    {...{[rel.image.split('="')[0]]: rel.image.split('="')[1].replace('"', '')}}
                    data-strk-img-id={`rel-${rel.id}-1`}
                    data-strk-img-ratio="2x3"
                  />
                  <img 
                  alt={`${rel.name} worn`}
                  className="object-cover w-full h-full absolute inset-0 z-0"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  {...{[rel.altImage.split('="')[0]]: rel.altImage.split('="')[1].replace('"', '')}}
                  data-strk-img-id={`rel-${rel.id}-2`}
                  data-strk-img-ratio="2x3"
                />
                </div>
                <div className="text-center">
                  <h3 className="font-serif uppercase tracking-wider text-sm mb-1">{rel.name}</h3>
                  <p className="text-muted-foreground text-sm font-light">${rel.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}