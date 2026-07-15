import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCartStore } from '@/store/useCartStore';
import { seedProducts } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCartStore();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold'); // gold or silver
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    // Find the product
    const foundProduct = seedProducts.find(p => p.id === id);
    // If not found, realistically we'd just use a fallback or show 404
    setProduct(foundProduct || seedProducts[0]);
    // Reset state
    setQuantity(1);
    setVariant('gold');
    setActiveImage(0);
  }, [id]);

  useEffect(() => {
    // When the product data changes, React might reuse DOM elements for the main image.
    // Give it a tiny delay to ensure the DOM tree is updated so ImageHelper triggers.
     if (product) {
       const frameId = window.requestAnimationFrame(() => {
         ImageHelper.loadImages(strkImgConfig, containerRef.current);
       });
       return () => window.cancelAnimationFrame(frameId);
     }
  }, [product, activeImage]);

  if (!product) return null;

  const handleAddToCart = () => {
    addItem({ ...product, quantity, variant });
  };

  const images = [
    { id: `${product?.id || 'default'}-main`, string: `[pdp-title] ${product?.category} on woman model editorial portrait` },
    { id: `${product?.id || 'default'}-detail`, string: `[pdp-title] ${product?.category} close up detail macro photography` },
    { id: `${product?.id || 'default'}-packaging`, string: `velmora jewelry box premium packaging flat lay` }
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-20 bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <nav className="flex text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors max-w-[100px] truncate sm:max-w-none">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors max-w-[100px] truncate sm:max-w-none">Shop</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-foreground transition-colors max-w-[100px] truncate sm:max-w-none capitalize">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground truncate max-w-[120px] sm:max-w-none">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4 h-full relative">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible md:w-20 lg:w-24 shrink-0 no-scrollbar snap-x">
              {images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "relative aspect-[3/4] flex-shrink-0 w-20 md:w-full overflow-hidden transition-all snap-center", 
                    activeImage === idx ? "ring-1 ring-foreground opacity-100" : "opacity-60 hover:opacity-100"
                  )}
                >
                  <img
                    data-strk-img-id={img.id + '-thumb'}
                    data-strk-img={img.string}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative aspect-[3/4] w-full bg-secondary overflow-hidden">
               <img
                  key={activeImage} // Force re-render of img tag when activeImage changes so data-strk-img interpreter can do its thing
                  data-strk-img-id={images[activeImage].id}
                  data-strk-img={images[activeImage].string}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover animate-in fade-in duration-500"
                />
               
               {/* Mobile pagination arrows (optional) */}
               <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between md:hidden pb-10">
                  <button 
                    onClick={() => setActiveImage(prev => prev === 0 ? images.length - 1 : prev - 1)}
                    className="w-8 h-8 rounded-full bg-white/50 backdrop-blur flex items-center justify-center text-black"
                  >
                     <ChevronLeft className="w-5 h-5"/>
                  </button>
                  <button 
                    onClick={() => setActiveImage(prev => prev === images.length - 1 ? 0 : prev + 1)}
                    className="w-8 h-8 rounded-full bg-white/50 backdrop-blur flex items-center justify-center text-black"
                  >
                     <ChevronRight className="w-5 h-5"/>
                  </button>
               </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col justify-start md:pt-4">
            <h1 id="pdp-title" className="font-serif text-3xl lg:text-4xl uppercase tracking-[0.15em] mb-4">{product.title}</h1>
            
            <div className="flex items-center gap-4 mb-6">
               <span className="text-xl">${product.price.toFixed(2)}</span>
               <div className="flex items-center text-accent">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-4 h-4 fill-current" />
                 ))}
                 <span className="text-muted-foreground text-xs ml-2 uppercase tracking-widest">(128)</span>
               </div>
            </div>

            <p id="pdp-desc" className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
               <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">Metal: <span className="text-foreground">{variant}</span></span>
               <div className="flex gap-4">
                  {['gold', 'silver'].map((v) => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={cn(
                        "w-12 h-12 rounded-full border-2 transition-all p-1",
                        variant === v ? "border-foreground" : "border-transparent hover:border-border"
                      )}
                    >
                      <div className={cn(
                        "w-full h-full rounded-full border border-border shadow-sm",
                        v === 'gold' ? "bg-[#D4AF37]" : "bg-[#C0C0C0]"
                      )} />
                    </button>
                  ))}
               </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
               {/* Quantity */}
               <div className="flex items-center justify-between border border-foreground p-2 sm:w-32 h-[52px]">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-secondary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-medium w-8 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-secondary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
               </div>
               
               {/* Add to Cart */}
               <Button 
                 onClick={handleAddToCart}
                 className="flex-1 rounded-none bg-accent hover:bg-accent/90 text-accent-foreground border-none text-sm tracking-[0.2em] uppercase h-[52px]"
               >
                 Add to Cart — ${(product.price * quantity).toFixed(2)}
               </Button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="description" className="border-border">
                  <AccordionTrigger className="font-serif text-lg tracking-wide hover:no-underline">
                    Description
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {product.description} All of our demi-fine pieces are designed in-house to capture a quiet luxury aesthetic. Perfect for daily wear or elegant layering.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="materials" className="border-border">
                  <AccordionTrigger className="font-serif text-lg tracking-wide hover:no-underline">
                    Materials & Care
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                    <p>To preserve the beauty of your Velmora jewelry, avoid exposure to water, perfumes, and lotions. Store in the provided pouch when not in use. Clean gently with a soft, dry cloth.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping" className="border-border border-b">
                  <AccordionTrigger className="font-serif text-lg tracking-wide hover:no-underline">
                    Shipping & Returns
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    <p className="mb-2">Complimentary worldwide shipping on all orders.</p>
                    <p>Standard delivery takes 3-7 business days. We gladly accept returns of unworn items in their original packaging within 30 days of delivery.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32">
           <h2 id="related-products" className="font-serif text-3xl text-center mb-12">You May Also Like</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
             {seedProducts.filter(p => p.id !== product.id).slice(0, 4).map((related) => (
                <Link key={related.id} to={`/product/${related.id}`} className="group relative">
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                  <img
                    data-strk-img-id={`related-${related.id}`}
                    data-strk-img={`[related-products] [related-product-title-${related.id}] on dark background gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={related.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                     <Button 
                        className="w-full rounded-none tracking-widest uppercase bg-white text-black hover:bg-neutral-100 hidden md:flex"
                        onClick={(e) => {
                          e.preventDefault();
                          addItem({ ...related, quantity: 1, variant: 'gold' });
                        }}
                     >
                        Quick Add
                     </Button>
                  </div>
                </div>
                <div className="flex flex-col text-center">
                  <h3 id={`related-product-title-${related.id}`} className="font-serif tracking-widest uppercase text-xs md:text-sm mb-1">{related.title}</h3>
                  <span className="text-muted-foreground text-sm">${related.price}</span>
                </div>
              </Link>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
}