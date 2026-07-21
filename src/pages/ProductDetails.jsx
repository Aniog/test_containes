import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS } from '@/config';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star, Minus, Plus, Share2 } from 'lucide-react';
import ProductCard from '@/components/shop/ProductCard';
import { cn } from '@/lib/utils';

const ProductDetails = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImage]);

  if (!product) return <div className="pt-32 text-center font-serif py-40">Product not found</div>;

  const images = [product.imageSearch, product.imageSearch2 || product.imageSearch, product.imageSearch, product.imageSearch2 || product.imageSearch];

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-32 pb-24 bg-background px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-6">
             <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-28">
                {images.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      "aspect-[3/4] shrink-0 border transition-all duration-500 relative bg-secondary",
                      activeImage === i ? "border-accent scale-[0.98]" : "border-hairline opacity-60 hover:opacity-100"
                    )}
                  >
                    <img 
                      data-strk-img-id={"pdp-thumb-" + i}
                      data-strk-img={img}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="300"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      alt={`Thumbnail ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
             </div>
             <div className="flex-1 aspect-[3/4] relative overflow-hidden bg-secondary border hairline">
                <img 
                  data-strk-img-id="pdp-main-image"
                  data-strk-img={images[activeImage]}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-luxury duration-1000"
                />
             </div>
          </div>

          {/* Details */}
          <div className="space-y-12">
            <header className="space-y-6">
               <div className="flex justify-between items-center">
                  <p className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold">{product.category}</p>
                  <button className="text-muted-foreground hover:text-accent transition-colors"><Share2 size={18} /></button>
               </div>
               <h1 id="product-title" className="text-4xl md:text-5xl font-serif uppercase tracking-[0.1em] leading-tight text-velmora-charcoal">{product.name}</h1>
               <div className="flex items-center space-x-6">
                  <span className="text-3xl font-sans text-velmora-charcoal">${product.price}</span>
                  <div className="flex items-center pl-6 border-l hairline">
                    <div className="flex text-velmora-gold">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground ml-4">24 Verified Reviews</span>
                  </div>
               </div>
            </header>

            <div className="prose prose-velmora">
              <p className="text-muted-foreground leading-relaxed text-[16px]">
                 A timeless expression of elegance. Crafted with the finest materials and finished in warm 18k gold plating, this piece is designed to be cherished for a lifetime. Inspired by architectural symmetry and organic forms.
              </p>
            </div>

            <div className="space-y-8">
               <div>
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-5 flex items-center">
                    Select Tone
                    <span className="ml-3 h-[1px] flex-1 bg-hairline" />
                  </h4>
                  <div className="flex space-x-4">
                     <button className="px-10 py-4 bg-velmora-gold text-white text-[10px] uppercase tracking-[0.3em] font-bold shadow-lg transition-luxury hover:bg-velmora-charcoal">18K Gold</button>
                     <button className="px-10 py-4 border border-hairline text-muted-foreground text-[10px] uppercase tracking-[0.3em] hover:border-accent hover:text-accent transition-luxury">Silver</button>
                  </div>
               </div>

               <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-4">
                  <div className="flex items-center border border-hairline h-16 bg-white min-w-[140px]">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-14 h-full flex items-center justify-center hover:bg-velmora-cream transition-colors border-r hairline"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="flex-1 text-center text-sm font-medium">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-14 h-full flex items-center justify-center hover:bg-velmora-cream transition-colors border-l hairline"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  
                  <Button 
                    onClick={() => {
                      for(let i=0; i<quantity; i++) addToCart(product);
                    }}
                    className="flex-1 rounded-none h-16 bg-velmora-charcoal text-white hover:bg-velmora-gold uppercase tracking-[0.4em] text-[11px] font-bold transition-luxury shadow-2xl"
                  >
                    Add to Bag
                  </Button>
               </div>
            </div>

            <Accordion type="single" collapsible className="w-full pt-10 border-t hairline mt-12">
               <AccordionItem value="description" className="border-b hairline">
                  <AccordionTrigger className="text-[10px] uppercase tracking-[0.3em] font-bold py-7 hover:text-accent no-underline">Description</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[14px] leading-relaxed pb-8 font-sans">
                     The {product.name} embodies the essence of quiet luxury. The intricate gold detailing catches the light with every movement, making it a perfect statement piece for both day and night. Designed in our studio, each piece is hand-finished for unparalleled quality.
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="materials" className="border-b hairline">
                  <AccordionTrigger className="text-[10px] uppercase tracking-[0.3em] font-bold py-7 hover:text-accent no-underline">Materials & Care</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[14px] leading-relaxed pb-8 space-y-4">
                     <ul className="list-disc pl-5 space-y-3 font-sans">
                       <li>Base Material: Sustainable High-Quality Brass</li>
                       <li>Plating: 18K Gold Plated (Luxury 2.5 microns)</li>
                       <li>Stones: Grade AAAA Hand-cut Zirconia</li>
                       <li>Hypoallergenic: Always Nickel, Lead, and Cadmium free</li>
                     </ul>
                     <p className="mt-4 italic">To maintain the brilliance, avoid contact with perfumes and water. Clean gently with a soft Velmora polishing cloth.</p>
                  </AccordionContent>
               </AccordionItem>
               <AccordionItem value="shipping" className="border-none">
                  <AccordionTrigger className="text-[10px] uppercase tracking-[0.3em] font-bold py-7 hover:text-accent no-underline">Shipping & Returns</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[14px] leading-relaxed pb-8 font-sans">
                     We offer complimentary carbon-neutral worldwide shipping on all orders over $100.
                     <br /><br />
                     Returns are accepted within 30 days of delivery. Pieces must be unworn, in original condition and packaging. Sale items are final sale.
                  </AccordionContent>
               </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        <section className="pt-24 border-t hairline">
          <div className="text-center mb-20">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-4">Complete Your Look</p>
            <h2 className="text-4xl font-serif">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;

