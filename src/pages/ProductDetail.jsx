import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star, Minus, Plus, Heart, Truck, ShieldCheck, RefreshCcw } from 'lucide-react';
import useCartStore from '@/lib/store';
import { cn } from '@/lib/utils';
import { Toaster, toast } from 'sonner';

// Simplified mock data matching the seeds
const PRODUCT_DATA = {
  '1': { id: '1', name: 'VIVID AURA JEWELS', price: 42, category: 'earrings', imageQuery: '[p-name] gold ear cuff with crystal accent jewelry on model' },
  '2': { id: '2', name: 'MAJESTIC FLORA NECTAR', price: 68, category: 'necklaces', imageQuery: '[p-name] multicolor floral crystal gold necklace' },
  '3': { id: '3', name: 'GOLDEN SPHERE HUGGIES', price: 38, category: 'huggies', imageQuery: '[p-name] chunky gold dome huggie earrings on model' },
  '4': { id: '4', name: 'AMBER LACE EARRINGS', price: 54, category: 'earrings', imageQuery: '[p-name] textured gold filigree drop earrings' },
  '5': { id: '5', name: 'ROYAL HEIRLOOM SET', price: 95, category: 'sets', imageQuery: '[p-name] gift-boxed gold earring and necklace set elegant' }
};

export function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [activeImage, setActiveImage] = useState(0);
  
  const { addItem } = useCartStore();
  
  // Default to product 1 if not found
  const product = PRODUCT_DATA[id] || PRODUCT_DATA['1'];

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    // Only load images when the product changes
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product.id]);

  const handleAddToCart = () => {
    addItem({
      ...product,
      quantity,
      variant: selectedVariant,
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`
    });
    
    toast.success('Added to cart', {
      description: `${quantity}x ${product.name} (${selectedVariant})`,
      action: {
        label: 'View Cart',
        onClick: () => useCartStore.getState().openCart()
      }
    });
  };

  const images = [
    { id: 'main', ratio: '4x5', query: product.imageQuery },
    { id: 'detail', ratio: '1x1', query: `${product.imageQuery} close up macro detail` },
    { id: 'worn', ratio: '4x5', query: `${product.imageQuery} worn on model lifestyle` }
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-20 px-6 max-w-7xl mx-auto w-full">
      {/* Breadcrumbs */}
      <nav className="text-xs uppercase tracking-widest text-muted-foreground mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link to={`/shop?category=${product.category}`} className="hover:text-foreground transition-colors">{product.category}</Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Left: Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4 lg:sticky lg:top-32 h-max">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-auto md:w-20 md:flex-shrink-0 hide-scrollbar scroll-smooth">
            {images.map((img, idx) => (
              <button 
                key={img.id}
                onClick={() => setActiveImage(idx)}
                className={cn(
                  "relative aspect-square w-20 flex-shrink-0 overflow-hidden bg-secondary/30",
                  activeImage === idx ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : "opacity-70 hover:opacity-100 transition-opacity"
                )}
              >
                <img
                  data-strk-img-id={`prod-thumb-${product.id}-${img.id}`}
                  data-strk-img={img.query}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          
          {/* Main Image */}
          <div className="relative aspect-[4/5] w-full flex-grow bg-secondary/20 overflow-hidden cursor-zoom-in">
            {images.map((img, idx) => (
              <div 
                key={img.id} 
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  activeImage === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                )}
              >
                <img
                  data-strk-img-id={`prod-main-${product.id}-${img.id}`}
                  data-strk-img={img.query}
                  data-strk-img-ratio={img.ratio}
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col pt-2 lg:pt-8">
          <div className="mb-6 flex justify-between items-start">
            <div>
              <h1 id="p-name" className="text-3xl lg:text-4xl font-serif tracking-widest uppercase text-foreground mb-4 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 text-sm mb-4">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-muted-foreground underline underline-offset-4 cursor-pointer hover:text-primary transition-colors">74 Reviews</span>
              </div>
            </div>
            <p className="text-2xl font-serif">${product.price}</p>
          </div>

          <p className="text-muted-foreground leading-relaxed font-light mb-8 pt-6 border-t border-border">
            A masterclass in quiet luxury. This meticulously crafted piece features intricate detailing on a brilliant 18K gold-plated vermeil base. Designed to catch the light perfectly from every angle, it's substantial enough to wear alone, yet delicate enough for stacking. 
          </p>

          <form className="mb-8 space-y-8" onSubmit={e => e.preventDefault()}>
            {/* Tone Selector */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs uppercase tracking-widest font-medium">Tone</span>
                <span className="text-xs text-muted-foreground capitalize">{selectedVariant}</span>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedVariant('gold')}
                  className={cn(
                    "h-12 flex-1 rounded-sm border flex items-center justify-center gap-2 transition-all",
                    selectedVariant === 'gold' 
                      ? "border-primary bg-primary/5 text-primary" 
                      : "border-input bg-background hover:bg-accent/50 text-muted-foreground"
                  )}
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 shadow-sm" />
                  <span className="text-sm font-medium tracking-wide uppercase">18K Gold</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedVariant('silver')}
                  className={cn(
                    "h-12 flex-1 rounded-sm border flex items-center justify-center gap-2 transition-all",
                    selectedVariant === 'silver' 
                      ? "border-primary bg-primary/5 text-primary" 
                      : "border-input bg-background hover:bg-accent/50 text-muted-foreground"
                  )}
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 shadow-sm" />
                  <span className="text-sm font-medium tracking-wide uppercase">Silver</span>
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-input rounded-sm h-12 w-32">
                <button 
                  type="button"
                  className="flex-1 h-full flex items-center justify-center hover:bg-muted transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button 
                  type="button"
                  className="flex-1 h-full flex items-center justify-center hover:bg-muted transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                className="flex-1 h-12 uppercase tracking-widest text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>
            
          </form>

          {/* Value Props */}
          <div className="grid grid-cols-3 gap-2 py-6 mb-8 border-y border-border">
            <div className="flex flex-col items-center justify-center text-center gap-2">
               <Truck className="w-5 h-5 text-primary/70" />
               <span className="text-[10px] uppercase tracking-widest leading-tight text-muted-foreground">Free Global<br/>Shipping</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-px border-x border-border/50">
               <ShieldCheck className="w-5 h-5 text-primary/70 mb-2" />
               <span className="text-[10px] uppercase tracking-widest leading-tight text-muted-foreground">2 Year<br/>Warranty</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-2">
               <RefreshCcw className="w-5 h-5 text-primary/70" />
               <span className="text-[10px] uppercase tracking-widest leading-tight text-muted-foreground">30 Day<br/>Returns</span>
            </div>
          </div>

          {/* Accordions */}
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm uppercase tracking-widest hover:no-underline hover:text-primary">Details & Care</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed font-light space-y-4 pt-2 pb-6">
                <p>Crafted to stand the test of time, this piece is made with a thick layer of 18K solid gold on sterling silver (Vermeil).</p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Base metal: 925 Sterling Silver</li>
                  <li>Plating: 2.5 microns of 18k gold</li>
                  <li>Stone: AAA-grade cubic zirconia</li>
                  <li>100% hypoallergenic, nickel, and lead-free</li>
                </ul>
                <p className="mt-4">To maintain the shine, avoid contact with liquids, perfumes, or harsh chemicals. Store in the provided pouch when not worn.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-sm uppercase tracking-widest hover:no-underline hover:text-primary">Shipping & Returns</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed font-light space-y-4 pt-2 pb-6">
                <p><strong>Shipping:</strong> We offer complimentary express shipping on all orders worldwide. Orders are typically processed within 24 hours.</p>
                <p><strong>Returns:</strong> Not perfectly matched? We accept returns within 30 days of delivery for a full refund. The item must be unworn and in original packaging.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </div>
      </div>
    </div>
  );
}