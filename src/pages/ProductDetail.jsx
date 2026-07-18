import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Truck, ShieldCheck, RefreshCw } from 'lucide-react';

const products = {
  'vivid-aura': { id: 'vivid-aura', name: 'Vivid Aura Jewels', price: 42, category: 'Earrings', desc: 'Gold ear cuff with crystal accent. Detailed with micro-pave cubic zirconia for a subtle everyday sparkle.', longDesc: 'An elegant addition to any ear stack, the Vivid Aura ear cuff requires no piercing. Crafted in 18k gold vermeil over sterling silver and hand-set with pristine conflict-free crystals.' },
  'majestic-flora': { id: 'majestic-flora', name: 'Majestic Flora Nectar', price: 68, category: 'Necklaces', desc: 'Multicolor floral crystal necklace', longDesc: 'A delicate statement piece featuring a constellation of multicolored stones in a floral arrangement. Hangs perfectly on the collarbone on a delicate but durable 18k gold vermeil chain.' },
  'golden-sphere': { id: 'golden-sphere', name: 'Golden Sphere Huggies', price: 38, category: 'Huggies', desc: 'Chunky gold dome huggie earrings', longDesc: 'Your new everyday essential. These lightweight but chunky dome huggies offer the perfect amount of volume while remaining incredibly comfortable for all-day wear.' },
  'amber-lace': { id: 'amber-lace', name: 'Amber Lace Earrings', price: 54, category: 'Earrings', desc: 'Textured gold filigree drop earrings', longDesc: 'Vintage-inspired filigree earrings with a modern twist. The textured gold catches the light beautifully, making these perfect for transitioning from day to night.' },
  'royal-heirloom': { id: 'royal-heirloom', name: 'Royal Heirloom Set', price: 95, category: 'Sets', desc: 'Gift-boxed earring + necklace set', longDesc: 'The ultimate gifting piece. This matching set features a delicate pendant necklace and coordinating stud earrings, beautifully presented in our signature velvet box.' },
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = products[id] || products['vivid-aura'];
  
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [tone, setTone] = useState('gold');
  
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id, activeImage]);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
      // Would trigger cart drawer here
      const event = new CustomEvent('open-cart');
      window.dispatchEvent(event);
    }, 600);
  };

  const images = [
    { id: '1', prompt: `[prod-name] product shot focus` },
    { id: '2', prompt: `woman wearing [prod-name] lifestyle` },
    { id: '3', prompt: `[prod-name] detail close-up texture` }
  ];

  const relatedProducts = Object.values(products).filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Breadcrumbs */}
        <nav className="text-xs uppercase tracking-widest text-muted-foreground mb-8 flex gap-2">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-foreground transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-foreground truncate">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row-reverse gap-4">
            {/* Main Image */}
            <div className="basis-full aspect-[4/5] bg-muted relative rounded-sm overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
                data-strk-img-id={`pdp-main-${product.id}-${activeImage}`}
                data-strk-img={images[activeImage].prompt}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1000"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-4 md:w-24 shrink-0 overflow-x-auto no-scrollbar justify-start">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[4/5] w-20 md:w-full shrink-0 rounded-sm overflow-hidden transition-all duration-200 border-2 ${activeImage === idx ? 'border-primary' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={img.prompt}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col pt-2 lg:pt-8">
            <h1 id="prod-name" className="font-serif text-3xl md:text-5xl uppercase tracking-widest mb-4">
              {product.name}
            </h1>
            
            <p id="prod-desc" className="text-muted-foreground font-light mb-4 hidden">{product.desc}</p>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl font-medium">${product.price.toFixed(2)}</span>
              <div className="flex items-center gap-1 text-primary">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                <span className="text-xs text-muted-foreground ml-1">(124 reviews)</span>
              </div>
            </div>

            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              {product.longDesc}
            </p>

            <div className="h-px w-full bg-border mb-8"></div>

            <div className="mb-8">
              <div className="flex justify-between mb-3 text-sm">
                <span className="uppercase tracking-widest font-medium">Metal Tone</span>
                <span className="text-muted-foreground">{tone === 'gold' ? '18K Gold Vermeil' : 'Sterling Silver'}</span>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setTone('gold')}
                  className={`w-12 h-12 rounded-full border-2 p-1 transition-all ${tone === 'gold' ? 'border-primary' : 'border-transparent'}`}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-yellow-500 to-yellow-200"></div>
                </button>
                <button 
                  onClick={() => setTone('silver')}
                  className={`w-12 h-12 rounded-full border-2 p-1 transition-all ${tone === 'silver' ? 'border-primary' : 'border-transparent'}`}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-slate-300 to-slate-100"></div>
                </button>
              </div>
            </div>

            <div className="flex gap-4 mb-8 h-14">
              <div className="flex border border-input rounded-md max-w-[120px]">
                <button 
                  className="w-10 flex items-center justify-center hover:bg-muted transition-colors text-lg"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >-</button>
                <div className="flex-1 flex items-center justify-center font-medium">{quantity}</div>
                <button 
                  className="w-10 flex items-center justify-center hover:bg-muted transition-colors text-lg"
                  onClick={() => setQuantity(quantity + 1)}
                >+</button>
              </div>
              
              <Button 
                onClick={handleAddToCart} 
                disabled={isAdding}
                className="flex-1 h-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm uppercase tracking-widest font-medium rounded-md transition-all"
              >
                {isAdding ? 'Adding...' : 'Add to Cart — $' + (product.price * quantity).toFixed(2)}
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-10 text-sm text-muted-foreground font-light px-2">
              <div className="flex items-center gap-3"><Truck className="w-4 h-4 text-primary" /> Free standard shipping worldwide</div>
              <div className="flex items-center gap-3"><RefreshCw className="w-4 h-4 text-primary" /> Free returns within 30 days</div>
              <div className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-primary" /> 2-year warranty included</div>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full border-t border-border">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm uppercase tracking-widest font-medium hover:text-primary">Description</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  <p className="mb-4">{product.longDesc}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>18k gold vermeil over 925 sterling silver base</li>
                    <li>Ethically sourced cubic zirconia stones</li>
                    <li>Designed in house by our master jewelers</li>
                    <li>Weight: approx 3.2g</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-sm uppercase tracking-widest font-medium hover:text-primary">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  <p className="mb-4"><strong>Gold Vermeil:</strong> A thick layer of 18k solid gold over 925 sterling silver. Vermeil is much more durable than standard plating.</p>
                  <p><strong>Care:</strong> To maintain the luster of your gold vermeil jewelry, we recommend removing it before swimming, bathing, or engaging in strenuous exercise. Avoid contact with perfumes, lotions, and harsh chemicals. Clean gently with the provided polishing cloth.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-sm uppercase tracking-widest font-medium hover:text-primary">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  <p className="mb-4"><strong>Shipping:</strong> Free worldwide shipping on all orders. Standard shipping typically takes 3-7 business days depending on your location. Express options available at checkout.</p>
                  <p><strong>Returns:</strong> We accept returns for unworn items in their original packaging within 30 days of delivery. For hygiene reasons, earrings are non-returnable unless faulty.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* You May Also Like */}
        <section className="pt-16 border-t border-border">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="related-title" className="font-serif text-3xl text-foreground">You May Also Like</h2>
            </div>
            <Link to={`/shop?category=${product.category.toLowerCase()}`} className="text-sm uppercase tracking-widest font-medium border-b border-foreground pb-1 hover:text-primary transition-colors hidden md:block">
              Shop More {product.category}
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="group flex flex-col">
                <div className="relative aspect-[4/5] mb-4 bg-muted overflow-hidden flex-shrink-0">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                    alt={item.name}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={`related-img-${item.id}`}
                    data-strk-img={`[related-name-${item.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                  />
                  
                  {/* Quick Add overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden md:block">
                    <Button variant="secondary" className="w-full bg-white/90 backdrop-blur text-foreground hover:bg-white uppercase tracking-wider text-xs">
                      Quick Add
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 id={`related-name-${item.id}`} className="font-serif text-lg leading-tight uppercase tracking-wider mb-1 line-clamp-2">{item.name}</h3>
                  <p id={`related-desc-${item.id}`} className="text-sm text-muted-foreground font-light mb-2 hidden">{item.desc}</p>
                  <p className="text-sm font-medium mt-auto">${item.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}