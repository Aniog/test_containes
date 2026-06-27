import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import { Minus, Plus, ChevronRight, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const strkImgConfig = {};

const PRODUCTS = [
  { id: 1, name: "Vivid Aura Jewels", price: 42, category: "Earrings", variant: "Gold", collection: "bestsellers", imageQuery: "gold ear cuff with crystal accent close up jewelry editorial warm light", description: "A stunning gold ear cuff featuring a delicate crystal accent. Designed to comfortably hug the ear without piercing, it adds an instant touch of modern elegance to any stack." },
  { id: 2, name: "Majestic Flora Nectar", price: 68, category: "Necklaces", variant: "Gold", collection: "bestsellers", imageQuery: "multicolor floral crystal necklace gold editorial warm light close up", description: "An intricate floral necklace featuring multicolor crystals meticulously set on an 18K gold-plated chain. A true statement piece inspired by vintage botanical motifs." },
  { id: 3, name: "Golden Sphere Huggies", price: 38, category: "Huggies", variant: "Gold", collection: "bestsellers", imageQuery: "chunky gold dome huggie earrings warm light editorial", description: "Chunky, bold, and incredibly lightweight gold dome huggies. The perfect everyday earring that looks substantial but feels like nothing." },
  { id: 4, name: "Amber Lace Earrings", price: 54, category: "Earrings", variant: "Gold", collection: "bestsellers", imageQuery: "textured gold filigree drop earrings warm light close up", description: "Vintage-inspired textured gold filigree drop earrings. Intricate lacework in metal catches the light beautifully with every movement." },
  { id: 5, name: "Royal Heirloom Set", price: 95, category: "Sets", variant: "Gold", collection: "bestsellers", imageQuery: "elegant gold earring and necklace set in premium gift box warm light overlay", description: "The ultimate gift. A matching necklace and earring set presented in our signature box. Timeless, classic, and ready to be cherished." },
  { id: 6, name: "Lumina Chain", price: 48, category: "Necklaces", variant: "Gold", collection: "essentials", imageQuery: "dainty gold chain necklace on neck close up lifestyle", description: "A delicate, everyday gold chain perfect for layering or wearing beautifully bare." },
  { id: 7, name: "Petite Pearl Drops", price: 62, category: "Earrings", variant: "Gold", collection: "essentials", imageQuery: "small pearl drop earrings gold hoops editorial", description: "Classic pearl drops suspended from 14K gold-filled hoops. Organic pearls ensure every pair is unique." },
  { id: 8, name: "Stella Solitaire Ring", price: 45, category: "Rings", variant: "Gold", collection: "essentials", imageQuery: "minimalist gold ring with small diamond on hand", description: "A minimalist gold band featuring a single, brilliant-cut cubic zirconia. Perfect alone or stacked." }
];

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [activeVariant, setActiveVariant] = useState('Gold');
  
  const product = PRODUCTS.find((p) => p.id === parseInt(id));

  // Dummy related products
  const relatedProducts = PRODUCTS.filter((p) => p.id !== parseInt(id)).slice(0, 4);

  useEffect(() => {
    // Reset state on ID change
    setQuantity(1);
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
    window.scrollTo(0, 0);
  }, [id, activeVariant]);

  if (!product) {
    return <div className="py-32 text-center text-xl font-serif">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addItem({ ...product, variant: activeVariant }, quantity);
  };

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen" ref={containerRef}>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center text-xs uppercase tracking-widest text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3 mx-2 shrink-0" />
          <Link to={`/products?category=${product.category.toLowerCase()}`} className="hover:text-foreground transition-colors">{product.category}</Link>
          <ChevronRight className="h-3 w-3 mx-2 shrink-0" />
          <span className="text-foreground border-b border-foreground/30 truncate">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Image Gallery */}
          <div className="flex-1 w-full flex flex-col-reverse md:flex-row gap-4 h-full sticky top-32">
             <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible shrink-0 pb-2 md:pb-0 hide-scrollbar">
                {[1, 2, 3].map((num) => (
                  <button key={num} className="w-16 h-20 md:w-24 md:h-32 shrink-0 bg-muted border border-transparent focus:border-primary opacity-70 hover:opacity-100 transition-opacity">
                    <img
                      data-strk-img-id={`pdp-thumb-${product.id}-${num}`}
                      data-strk-img={`${product.imageQuery} alternative angle ${num}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="150"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} thumb ${num}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
             </div>
             <div className="flex-1 aspect-[3/4] bg-muted w-full">
               <img
                  data-strk-img-id={`pdp-main-${product.id}`}
                  data-strk-img={product.imageQuery}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
             </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 max-w-md w-full mx-auto md:mx-0">
            <h1 className="font-serif text-3xl lg:text-4xl tracking-wide uppercase mb-4 leading-tight">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl tracking-wider text-muted-foreground">${product.price}</span>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                ))}
                <span className="text-xs text-muted-foreground ml-2 tracking-widest">(24)</span>
              </div>
            </div>

            <p className="text-foreground/80 leading-relaxed font-light mb-8">
              {product.description}
            </p>

            <div className="space-y-6 mb-10">
              {/* Variant selector */}
              <div>
                <span className="text-xs uppercase tracking-widest font-medium mb-3 block">Color · <span className="text-muted-foreground">{activeVariant}</span></span>
                <div className="flex gap-3">
                  {['Gold', 'Silver'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setActiveVariant(color)}
                      className={`h-10 px-6 uppercase tracking-widest text-xs border transition-all ${
                        activeVariant === color 
                          ? 'border-primary bg-primary text-primary-foreground' 
                          : 'border-border bg-transparent text-foreground hover:border-primary/50'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Desktop */}
              <div>
                 <span className="text-xs uppercase tracking-widest font-medium mb-3 block">Quantity</span>
                 <div className="flex items-center border border-border w-max h-12">
                   <button 
                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
                     className="px-4 h-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                   >
                     <Minus className="h-4 w-4" />
                   </button>
                   <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                   <button 
                     onClick={() => setQuantity(quantity + 1)}
                     className="px-4 h-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                   >
                     <Plus className="h-4 w-4" />
                   </button>
                 </div>
              </div>
            </div>

            <Button 
              onClick={handleAddToCart}
              className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none uppercase tracking-[0.2em] text-sm font-medium mb-12"
            >
              Add to Cart · ${(product.price * quantity).toFixed(2)}
            </Button>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full border-t border-border">
              <AccordionItem value="item-1">
                <AccordionTrigger className="uppercase font-serif tracking-widest hover:no-underline">Description</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  {product.description} Pair it with minimal chains to let it shine, or stack it for a bolder look. Designed in-house and crafted to the highest standards.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="uppercase font-serif tracking-widest hover:no-underline">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  <ul className="list-disc pl-4 space-y-2">
                    <li>18K Gold Plated over brass core</li>
                    <li>Hypoallergenic and nickel-free</li>
                    <li>To maintain shine, avoid contact with water, perfumes, and lotions.</li>
                    <li>Store in the provided Velmora pouch when not in use.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="uppercase font-serif tracking-widest hover:no-underline">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  <p className="mb-2">Free worldwide shipping on all orders.</p>
                  <p>We accept returns within 30 days of delivery. Items must be in original unworn condition with tags attached. Earrings cannot be returned for hygiene reasons unless faulty.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="container mx-auto px-4 mt-32 pt-16 border-t border-border">
         <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-3xl tracking-wide uppercase">You May Also Like</h2>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.map((item) => (
              <div key={item.id} className="group flex flex-col">
                <Link to={`/product/${item.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                  <img
                    data-strk-img-id={`pdp-related-${item.id}`}
                    data-strk-img={item.imageQuery}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Quick Add Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20">
                    <Button 
                      className="w-full bg-white/95 backdrop-blur-sm text-primary hover:bg-white rounded-none uppercase tracking-widest text-xs h-10 shadow-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(item);
                      }}
                    >
                      Quick Add
                    </Button>
                  </div>
                </Link>
                <div className="flex flex-col gap-1 text-center md:text-left flex-1 justify-between">
                  <Link to={`/product/${item.id}`} className="font-serif tracking-wide hover:opacity-70 uppercase text-sm leading-tight">
                    {item.name}
                  </Link>
                  <p className="text-muted-foreground text-sm">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
      </div>

    </div>
  );
}