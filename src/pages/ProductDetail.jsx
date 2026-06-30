import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { useCart } from '@/components/CartProvider';
import { Minus, Plus, Star } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');

  const product = products.find(p => p.id === id) || products[0]; // fallback to first product if not found

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when loading new product
  }, [id]);

  useEffect(() => {
    // Schedule image scanning slightly later to ensure DOM is ready.
    const timer = setTimeout(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [id]);

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity, variant);
  };

  return (
    <div ref={containerRef} className="w-full flex-1 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24">
        
        {/* Left: Gallery */}
        <div className="flex flex-col-reverse lg:flex-row gap-4">
           {/* Thumbnails */}
           <div className="flex lg:flex-col gap-4 overflow-x-auto hide-scrollbar shrink-0 h-24 lg:h-auto lg:w-24">
             {[1,2,3].map(i => (
               <div key={i} className="aspect-[3/4] bg-secondary border border-border cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                 <img
                    alt={`${product.name} angle ${i}`}
                    data-strk-img-id={`prod-thumb-${product.id}-${i}`}
                    data-strk-img={`[product-title] angle ${i}`}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                 />
               </div>
             ))}
           </div>
           
           {/* Main Image */}
           <div className="flex-1 aspect-[3/4] bg-secondary relative">
             <img
                alt={product.name}
                data-strk-img-id={`prod-main-${product.id}`}
                data-strk-img={`[product-title]`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
             />
           </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col">
          <nav className="text-xs text-muted-foreground mb-6 uppercase tracking-widest flex gap-2">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-foreground">Shop</Link>
            <span>/</span>
            <span>{product.name}</span>
          </nav>
          
          <h1 id="product-title" className="text-3xl lg:text-4xl font-serif tracking-widest uppercase mb-4">{product.name}</h1>
          <p className="text-xl mb-6">${product.price}</p>
          
          <div className="flex items-center gap-2 mb-8">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-transparent'}`} />
              ))}
            </div>
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
          </div>
          
          <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>
          
          {/* Variants */}
          <div className="mb-8">
            <span className="block text-sm uppercase tracking-widest font-medium mb-4">Metal: <span className="text-muted-foreground">{variant}</span></span>
            <div className="flex gap-4">
               {['Gold', 'Silver'].map(v => (
                 <button
                   key={v}
                   onClick={() => setVariant(v)}
                   className={`px-6 py-3 border text-xs tracking-widest uppercase transition-colors ${
                     variant === v ? 'border-foreground bg-foreground text-background' : 'border-border hover:border-foreground/50'
                   }`}
                 >
                   {v}
                 </button>
               ))}
            </div>
          </div>
          
          {/* Quantity & CTA */}
          <div className="flex gap-4 mb-12">
            <div className="flex items-center border border-border">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-secondary transition-colors">
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-secondary transition-colors">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <Button onClick={handleAddToCart} className="flex-1 h-auto rounded-none text-sm tracking-widest">
              ADD TO CART - ${(product.price * quantity).toFixed(2)}
            </Button>
          </div>
          
          {/* Accordions */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="description">
              <AccordionTrigger className="uppercase tracking-widest text-xs font-medium">Description</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {product.description} All our pieces are designed in-house and crafted with the utmost attention to detail.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="materials">
              <AccordionTrigger className="uppercase tracking-widest text-xs font-medium">Materials & Care</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed space-y-2">
                <p><strong>Material:</strong> {product.material}</p>
                <p>To ensure your jewelry remains beautiful, avoid exposure to water, perfumes, and harsh chemicals. Store in the provided pouch when not in use.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger className="uppercase tracking-widest text-xs font-medium">Shipping & Returns</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Free worldwide shipping on all orders over $100. We accept returns within 30 days of purchase, provided the item is unworn and in its original packaging.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      
      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 border-t border-border pt-16 mt-16">
        <h2 id="related-heading" className="text-2xl font-serif mb-10 text-center">You May Also Like</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
           {related.map(prod => (
             <Link key={prod.id} to={`/product/${prod.id}`} className="group block">
               <div className="relative aspect-[3/4] bg-secondary mb-4 overflow-hidden border border-border/50">
                 <img
                    alt={prod.name}
                    data-strk-img-id={`related-${prod.id}`}
                    data-strk-img={`[related-title-${prod.id}] [related-heading]`}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
               </div>
               <div className="text-center">
                 <h3 id={`related-title-${prod.id}`} className="font-serif uppercase tracking-widest text-xs mb-1">{prod.name}</h3>
                 <p className="text-muted-foreground text-xs">${prod.price}</p>
               </div>
             </Link>
           ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;