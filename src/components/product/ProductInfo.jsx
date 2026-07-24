import React, { useState } from 'react';
import { Star, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import { toast } from 'sonner';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [tone, setTone] = useState('gold');
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ 
      ...product, 
      quantity,
      material: tone === 'gold' ? '18K Gold Plated' : '925 Sterling Silver Plated'
    });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="flex flex-col h-full sticky top-24 pt-8 md:pt-0">
      <div className="mb-8">
        <h1 id="pdp-title" className="text-3xl md:text-4xl font-serif tracking-widest uppercase mb-4">
          {product.name}
        </h1>
        
        <div className="flex items-center justify-between mb-6">
          <span className="text-xl font-medium">${product.price}</span>
          <div className="flex items-center gap-2">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground underline underline-offset-4 cursor-pointer">
              {product.reviews} Reviews
            </span>
          </div>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {product.description}
        </p>
      </div>

      <div className="space-y-6 mb-8">
        {/* Variant Selector */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm tracking-widest uppercase font-medium">Metal Tone</span>
            <span className="text-sm text-muted-foreground">{tone === 'gold' ? '18K Gold Plated' : 'Silver Plated'}</span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setTone('gold')}
              className={`w-12 h-12 rounded-full border-2 focus:outline-none transition-all ${
                tone === 'gold' 
                  ? 'border-primary shadow-sm scale-110' 
                  : 'border-transparent hover:scale-105'
              } flex items-center justify-center`}
              aria-label="Select Gold Tone"
            >
              <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] block shadow-inner"></span>
            </button>
            <button
              onClick={() => setTone('silver')}
              className={`w-12 h-12 rounded-full border-2 focus:outline-none transition-all ${
                tone === 'silver' 
                  ? 'border-foreground/30 shadow-sm scale-110' 
                  : 'border-transparent hover:scale-105'
              } flex items-center justify-center`}
              aria-label="Select Silver Tone"
            >
              <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C0C0C0] to-[#E5E4E2] block shadow-inner"></span>
            </button>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <div className="flex items-center border border-border h-14">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-4 hover:bg-secondary transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-12 text-center text-lg">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="p-4 hover:bg-secondary transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          
          <Button 
            onClick={handleAddToCart}
            className="flex-1 h-14 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-widest uppercase font-medium shadow-none hover:shadow-md transition-all"
          >
            Add to Cart - ${product.price * quantity}
          </Button>
        </div>
        
        <p className="text-center text-xs text-muted-foreground uppercase tracking-wider mt-4">
          Free shipping on all orders over $75
        </p>
      </div>

      {/* Accordions */}
      <div className="mt-8 border-t border-border/60">
        <Accordion type="single" collapsible defaultValue="description" className="w-full">
          <AccordionItem value="description" className="border-border/60">
            <AccordionTrigger className="text-sm tracking-widest uppercase hover:no-underline py-5">
              Description
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
              {product.description} Designed for everyday wear, this piece adds a touch of understated elegance to any outfit. Layer it or wear it solo—it's versatile enough to become your new signature.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="materials" className="border-border/60">
            <AccordionTrigger className="text-sm tracking-widest uppercase hover:no-underline py-5">
              Materials & Care
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6 space-y-4">
              <p>Crafted with a premium brass base and generously coated in thick 18K gold or 925 sterling silver for long-lasting color and shine.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Hypoallergenic & nickel-free</li>
                <li>Tarnish-resistant coating</li>
                <li>Keep away from harsh chemicals and perfumes</li>
                <li>Store in the provided pouch when not worn</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="shipping" className="border-border/60">
            <AccordionTrigger className="text-sm tracking-widest uppercase hover:no-underline py-5">
              Shipping & Returns
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6 space-y-3">
              <p className="font-medium text-foreground text-sm uppercase tracking-wider">Free Worldwide Shipping</p>
              <p>Standard delivery takes 3-7 business days depending on your location. Expedited options available at checkout.</p>
              <p className="font-medium text-foreground text-sm uppercase tracking-wider mt-4">30-Day Returns</p>
              <p>We accept returns for unworn items in their original packaging within 30 days of delivery. Excludes customized or sale items.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductInfo;
