import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { seedProducts } from '../data/products';
import { Button } from '../components/ui/button';
import { Star, Minus, Plus, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);
  
  const product = seedProducts.find(p => p.id === id) || seedProducts[0];
  const relatedProducts = seedProducts.filter(p => p.id !== product.id).slice(0, 4);

  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');

  useEffect(() => {
    // Reset state when product changes
    setQuantity(1);
    setVariant('gold');
    window.scrollTo(0, 0);

    const frameId = window.requestAnimationFrame(() => {
        if (containerRef.current) {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product.id]);

  const handleAddToCart = () => {
    addItem({ ...product, quantity, variant });
  };

  return (
    <div ref={containerRef} className="pt-24 pb-24 min-h-screen bg-background text-foreground max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center text-xs tracking-widest uppercase text-muted-foreground mb-8">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2" />
        <Link to={`/collection?category=${product.category}`} className="hover:text-primary transition-colors">{product.category}</Link>
        <ChevronRight className="w-3 h-3 mx-2" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
        
        {/* Left: Image Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="aspect-[3/4] w-full bg-accent relative overflow-hidden">
            <img
               alt={product.name}
               data-strk-img-id={`pdp-main-${product.id}`}
               data-strk-img={`[pdp-desc] [pdp-title] ${variant} tone product standalone`}
               data-strk-img-ratio="3x4"
               data-strk-img-width="1200"
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
               className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
             {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-accent relative cursor-pointer opacity-70 hover:opacity-100 transition-opacity overflow-hidden">
                    <img
                       alt={`${product.name} detail ${i}`}
                       data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                       data-strk-img={`[pdp-title] detail shot ${i} macro`}
                       data-strk-img-ratio="1x1"
                       data-strk-img-width="300"
                       src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                       className="w-full h-full object-cover"
                    />
                </div>
             ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="w-full lg:w-1/2">
           <div className="sticky top-32">
             <div className="mb-2 flex items-center gap-2 text-primary">
                 <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className={`w-4 h-4 ${star <= Math.floor(product.rating) ? 'fill-current' : 'fill-none border-current'}`} />
                    ))}
                 </div>
                 <span className="text-sm font-medium text-foreground tracking-wide">{product.rating} (124 reviews)</span>
             </div>
             
             <h1 id="pdp-title" className="text-4xl md:text-5xl font-serif uppercase tracking-widest mb-4">{product.name}</h1>
             <p className="text-2xl font-serif mb-6">${product.price}</p>
             <p id="pdp-desc" className="text-muted-foreground leading-relaxed text-sm mb-10">{product.description}</p>

             <div className="space-y-8 mb-10">
                {/* Variant Selector */}
                <div>
                   <p className="text-sm uppercase tracking-widest font-medium mb-3">Tone: <span className="text-muted-foreground capitalize">{variant}</span></p>
                   <div className="flex gap-4">
                      <button 
                         className={`w-12 h-12 rounded-full border-2 flex items-center justify-center p-1 transition-colors ${variant === 'gold' ? 'border-primary' : 'border-transparent hover:border-border'}`}
                         onClick={() => setVariant('gold')}
                         aria-label="Select Gold Tone"
                      >
                         <span className="block w-full h-full rounded-full bg-[#E5B869]" />
                      </button>
                      <button 
                         className={`w-12 h-12 rounded-full border-2 flex items-center justify-center p-1 transition-colors ${variant === 'silver' ? 'border-primary' : 'border-transparent hover:border-border'}`}
                         onClick={() => setVariant('silver')}
                         aria-label="Select Silver Tone"
                      >
                         <span className="block w-full h-full rounded-full bg-[#E0E0E0]" />
                      </button>
                   </div>
                </div>

                {/* Quantity */}
                <div>
                   <p className="text-sm uppercase tracking-widest font-medium mb-3">Quantity</p>
                   <div className="flex items-center border border-border w-fit">
                      <button 
                         className="p-3 hover:bg-accent text-muted-foreground transition-colors"
                         onClick={() => setQuantity(Math.max(1, quantity - 1))}
                         aria-label="Decrease quantity"
                      >
                         <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                      <button 
                         className="p-3 hover:bg-accent text-muted-foreground transition-colors"
                         onClick={() => setQuantity(quantity + 1)}
                         aria-label="Increase quantity"
                      >
                         <Plus className="w-4 h-4" />
                      </button>
                   </div>
                </div>
             </div>

             <Button 
                onClick={handleAddToCart}
                className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 text-sm uppercase tracking-widest rounded-none mb-12 shadow-md hover:-translate-y-0.5 transition-transform"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
             </Button>

             {/* Accordions */}
             <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-border/50 border-t">
                  <AccordionTrigger className="uppercase tracking-widest text-xs font-medium hover:no-underline py-5">materials & care</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                     Crafted in {product.material}. Our vermeil is a thick layer of 18k solid gold on sterling silver meaning it will last longer. 
                     <br/><br/>
                     To maintain its luster, avoid wearing it in the shower, ocean, or pool. Store in a cool, dry place when not wearing.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-border/50">
                  <AccordionTrigger className="uppercase tracking-widest text-xs font-medium hover:no-underline py-5">shipping & returns</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                     Free worldwide shipping on all orders. Standard delivery takes 3-5 business days. 
                     <br/><br/>
                     We accept returns within 30 days of standard purchase. Pieces must be unworn and in original packaging. Custom pieces are non-refundable.
                  </AccordionContent>
                </AccordionItem>
             </Accordion>
           </div>
        </div>
      </div>

       {/* Related Products */}
      <section className="py-12 border-t border-border/50">
        <h2 id="related-title" className="text-2xl md:text-3xl font-serif uppercase tracking-widest text-foreground text-center mb-12">You May Also Like</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
          {relatedProducts.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              <Link to={`/product/${p.id}`} className="block relative aspect-[3/4] overflow-hidden bg-accent mb-4">
                <img
                  alt={p.name}
                  data-strk-img-id={`related-img-${p.id}`}
                  data-strk-img={`[related-prod-${p.id}-desc] [related-prod-${p.id}-name]`}
                  data-strk-img-ratio="2x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </Link>
              <div className="text-center">
                <h3 id={`related-prod-${p.id}-name`} className="font-serif text-sm sm:text-base tracking-widest uppercase mb-1">
                  <Link to={`/product/${p.id}`} className="hover:text-primary transition-colors">
                    {p.name}
                  </Link>
                </h3>
                <p id={`related-prod-${p.id}-desc`} className="hidden">{p.description}</p>
                <p className="text-muted-foreground text-sm">${p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}