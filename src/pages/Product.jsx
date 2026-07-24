import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, PRODUCTS } from '@/api/products';
import { useAtom } from 'jotai';
import { addToCartAtom } from '@/lib/store';
import { 
  Star, 
  Minus, 
  Plus, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { toast } from 'sonner';
import ProductCard from '@/components/ProductCard';

const Product = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [quantity, setQuantity] = useState(1);
  const [material, setMaterial] = useState('Gold');
  const [, addToCart] = useAtom(addToCartAtom);

  if (!product) {
    return (
      <div className="pt-40 text-center">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <Link to="/shop" className="text-muted-foreground mt-4 inline-block hover:underline">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, price: product.price });
    toast.success(`${product.name} added to your bag`);
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-20 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground mb-12">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight size={10} />
        <Link to="/shop" className="hover:text-foreground">Shop</Link>
        <ChevronRight size={10} />
        <span className="text-foreground font-bold">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-32">
        {/* Left: Image Gallery */}
        <div className="flex flex-col gap-4">
          <div className="aspect-[4/5] bg-secondary overflow-hidden">
            <img 
              data-strk-img-id={`product-main-${product.id}`}
              data-strk-img={`${product.imageQuery} product shot studio white background`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              className="w-full h-full object-cover"
              alt={product.name}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-secondary overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                <img 
                  data-strk-img-id={`product-thumb-${product.id}-${i}`}
                  data-strk-img={`${product.imageQuery} detail shot gallery ${i}`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  className="w-full h-full object-cover"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <h1 id="product-name" className="font-serif text-3xl md:text-4xl uppercase tracking-[0.2em]">{product.name}</h1>
              <p className="font-sans text-xl font-bold">${product.price}.00</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#BFA181" stroke="#BFA181" />
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground italic">12 Reviews</span>
            </div>
          </div>

          <p id="product-desc" className="text-muted-foreground font-light leading-relaxed">
            {product.description} A timeless addition to your collection, designed to be worn across seasons and styles. Hypoallergenic and sweat-resistant.
          </p>

          <div className="hairline-divider" />

          {/* Variant Selector */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-widest font-bold">Material: {material} Tone</span>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((m) => (
                <button
                  key={m}
                  onClick={() => setMaterial(m)}
                  className={`px-6 py-3 border text-[10px] uppercase tracking-ultra-wide transition-all ${
                    material === m ? 'border-primary bg-primary text-white' : 'border-border hover:border-primary'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="flex items-center border border-border h-14">
                <button 
                  className="px-4 hover:bg-black/5 disabled:opacity-20"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-sans">{quantity}</span>
                <button 
                  className="px-4 hover:bg-black/5"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                className="flex-grow h-14 rounded-none font-serif uppercase tracking-[0.3em] text-xs"
              >
                Add to Bag
              </Button>
            </div>
          </div>

          {/* Accordions */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-sans text-[10px] uppercase tracking-widest py-6">Description</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm font-light leading-relaxed">
                Classic yet contemporary, the {product.name} is meticulously crafted to catch the light from every angle. Part of our core collection, this piece represents the Velmora commitment to quiet luxury and lasting quality.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-sans text-[10px] uppercase tracking-widest py-6">Materials & Care</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm font-light leading-relaxed space-y-4">
                <p>• 18K Gold Plated Brass</p>
                <p>• Premium AAAA Zirconia Crystals</p>
                <p>• Hypoallergenic & Nickel-free</p>
                <p>Care: Avoid contact with water, perfume, and cosmetics. Polish with a soft, dry cloth after use.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-sans text-[10px] uppercase tracking-widest py-6">Shipping & Returns</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm font-light leading-relaxed">
                Free worldwide shipping on all orders over $75. 30-day returns on all jewelry (excluding earrings for hygiene reasons). Delivered in our signature Velmora gift box.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Trust points */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="flex flex-col items-center gap-2 text-center">
              <Truck size={18} className="text-accent" />
              <span className="text-[8px] uppercase tracking-widest">Global Shipping</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <RotateCcw size={18} className="text-accent" />
              <span className="text-[8px] uppercase tracking-widest">30-Day Returns</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <ShieldCheck size={18} className="text-accent" />
              <span className="text-[8px] uppercase tracking-widest">Secure Payments</span>
            </div>
          </div>
        </div>
      </div>

      {/* "You may also like" related products */}
      <section className="pt-32 border-t">
        <h2 className="font-serif text-2xl uppercase tracking-[0.2em] mb-12">You may also like</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
