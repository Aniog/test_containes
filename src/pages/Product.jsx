import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { getProductById, getProducts } from '../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus, Star, ShieldCheck, Truck } from 'lucide-react';

export function Product() {
  const { id } = useParams();
  const product = getProductById(id);
  const containerRef = useRef(null);
  const { addItem } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('18K Gold Plated');
  const [activeImage, setActiveImage] = useState(0);

  // Fallback to first if not found (for dev)
  const p = product || getProducts()[0]; 
  const relatedList = getProducts().filter((item) => item.id !== p.id).slice(0, 4);

  useEffect(() => {
    // Reset state on navigation
    setQuantity(1);
    setVariant('18K Gold Plated');
    setActiveImage(0);
    window.scrollTo(0,0);
  }, [id, p.id]);

  useEffect(() => {
    if (ImageHelper && strkImgConfig && containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        try {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        } catch (e) {}
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [id, activeImage]); // Re-run when image tab changes? Actually not needed if we pre-render both

  const images = [
    { src: p.image, id: `main-${p.id}`, query: `[prod-${p.id}-name-detail] luxury product photography` },
    { src: p.hoverImage, id: `life-${p.id}`, query: `[prod-${p.id}-name-detail] worn by model editorial` },
    { src: p.image, id: `det-${p.id}`, query: `[prod-${p.id}-name-detail] exquisite details close-up macro` }
  ];

  const handleAdd = () => {
    addItem({ ...p, quantity, variant, image: images[0].src });
    // quantity stays same, or reset?
  };

  return (
    <div ref={containerRef} className="pt-[104px] pb-24 min-h-screen bg-background text-foreground">
       <div className="container mx-auto px-4 md:px-6 w-full max-w-[1400px]">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-32">
             
             {/* Left: Images */}
             <div className="w-full lg:w-3/5 flex flex-col-reverse md:flex-row gap-4">
                
                {/* Thumbnails */}
                <div className="flex md:flex-col gap-4 md:w-24 flex-shrink-0 overflow-x-auto scrollbar-hide">
                   {images.map((img, idx) => (
                      <button 
                         key={img.id}
                         onClick={() => setActiveImage(idx)}
                         className={`relative aspect-[3/4] w-20 md:w-full flex-shrink-0 bg-secondary/30 transition-all ${activeImage === idx ? 'opacity-100 ring-1 ring-border ring-offset-2' : 'opacity-60 hover:opacity-100'}`}
                      >
                         <img
                           alt={`Thumbnail ${idx}`}
                           src={img.src}
                           data-strk-img-id={`thumb-${img.id}`}
                           data-strk-img={img.query}
                           data-strk-img-ratio="3x4"
                           data-strk-img-width="150"
                           className="object-cover w-full h-full"
                         />
                      </button>
                   ))}
                </div>

                {/* Main Image */}
                <div className="flex-1 bg-secondary/20 aspect-[4/5] relative">
                   {images.map((img, idx) => (
                      <div 
                         key={`main-view-${img.id}`} 
                         className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${activeImage === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                      >
                         <img
                           alt={`Main ${idx}`}
                           src={img.src}
                           data-strk-img-id={`huge-${img.id}`}
                           data-strk-img={img.query}
                           data-strk-img-ratio="4x5"
                           data-strk-img-width="1200"
                           className="object-cover w-full h-full"
                         />
                      </div>
                   ))}
                </div>
             </div>


             {/* Right: Info */}
             <div className="w-full lg:w-2/5 flex flex-col pt-4 md:pt-10">
                <nav className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
                   <Link to="/" className="hover:text-foreground">Home</Link> &nbsp;/&nbsp; <Link to="/shop" className="hover:text-foreground">Shop</Link> &nbsp;/&nbsp; {p.name}
                </nav>

                <h1 id={`prod-${p.id}-name-detail`} className="text-3xl md:text-4xl font-serif text-foreground uppercase tracking-widest leading-tight mb-4">
                   {p.name}
                </h1>
                
                <div className="flex items-center gap-4 mb-6">
                   <p className="text-xl font-light">${p.price}</p>
                   <div className="flex items-center gap-1 text-accent">
                      {[1, 2, 3, 4, 5].map((s) => <Star fill="currentColor" key={s} className="w-3 h-3" />)}
                      <span className="text-muted-foreground text-xs ml-1">(42)</span>
                   </div>
                </div>

                <p className="text-foreground/80 font-light leading-relaxed mb-10">
                   Elevate your everyday ensemble with this exquisite piece. Designed for those who appreciate quiet luxury, combining timeless elegance with modern wearability. Perfect for layering or letting it shine on its own.
                </p>

                {/* Variants */}
                <div className="mb-8">
                   <div className="flex justify-between items-center mb-3">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">Material</span>
                      <span className="text-xs text-foreground font-medium">{variant}</span>
                   </div>
                   <div className="flex gap-3">
                      {['18K Gold Plated', 'Sterling Silver'].map(v => (
                         <button 
                            key={v}
                            onClick={() => setVariant(v)}
                            className={`px-6 py-3 text-xs tracking-widest border transition-all duration-300 ${variant === v ? 'border-foreground text-foreground bg-secondary/10' : 'border-border text-muted-foreground hover:border-foreground/50'}`}
                         >
                            {v.split(' ')[0]}
                         </button>
                      ))}
                   </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                   <div className="flex items-center justify-between border border-border px-4 py-4 sm:w-32">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-muted-foreground hover:text-foreground"><Minus className="w-4 h-4" /></button>
                      <span className="text-sm w-8 text-center font-light">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="text-muted-foreground hover:text-foreground"><Plus className="w-4 h-4" /></button>
                   </div>
                   <Button 
                      onClick={handleAdd}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-none shadow-none text-sm uppercase tracking-widest py-7 transition-colors duration-300"
                   >
                      Add to Cart — ${(p.price * quantity).toFixed(2)}
                   </Button>
                </div>

                {/* Promises */}
                <div className="bg-secondary/20 p-6 flex flex-col gap-4 mb-12 border border-border/50">
                    <div className="flex items-center gap-4">
                       <Truck className="w-5 h-5 text-accent" />
                       <span className="text-sm font-light">Free worldwide shipping & returns</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <ShieldCheck className="w-5 h-5 text-accent" />
                       <span className="text-sm font-light">Hypoallergenic & water-resistant</span>
                    </div>
                </div>

                {/* Accordions */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="description" className="border-border/60">
                    <AccordionTrigger className="font-serif tracking-wide text-lg hover:no-underline py-5 text-foreground/90">Details</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                      Crafted from a premium brass base and thickly enveloped in 18k solid gold. Designed to be lightweight and comfortable for all-day wear without weighing you down. Nickel and lead-free.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="shipping" className="border-border/60">
                    <AccordionTrigger className="font-serif tracking-wide text-lg hover:no-underline py-5 text-foreground/90">Shipping & Returns</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-4">
                      Complimentary worldwide shipping on all orders. We accept returns in original condition within 30 days of receiving your order. Each piece is shipped in our signature recyclable gift box.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

             </div>

          </div>

          {/* Related Products */}
          <div className="pt-16 border-t border-border/50">
             <h2 className="text-2xl font-serif mb-10 text-center">You May Also Like</h2>
             
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
               {relatedList.map((product) => (
                 <div key={product.id} className="group cursor-pointer flex flex-col items-center">
                   <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-secondary/30 mb-4 block w-full">
                     <img
                       alt={product.name}
                       src={product.image}
                       data-strk-img-id={`rel-${product.id}`}
                       data-strk-img={`[prod-${product.id}-name-rel] elegant gold jewelry dark background`}
                       data-strk-img-ratio="3x4"
                       data-strk-img-width="400"
                       className="object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-0"
                     />
                     <img
                       alt={`${product.name} lifestyle`}
                       src={product.hoverImage}
                       data-strk-img-id={`rel-hover-${product.id}`}
                       data-strk-img={`[prod-${product.id}-name-rel] lifestyle worn on model`}
                       data-strk-img-ratio="3x4"
                       data-strk-img-width="400"
                       className="absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-normal"
                     />
                   </Link>
                   <div className="flex flex-col items-center w-full text-center">
                     <h3 id={`prod-${product.id}-name-rel`} className="font-serif uppercase tracking-widest text-xs text-foreground mb-2 leading-tight">
                       <Link to={`/product/${product.id}`}>{product.name}</Link>
                     </h3>
                     <p className="text-muted-foreground text-sm font-light">${product.price}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>

       </div>
    </div>
  );
}