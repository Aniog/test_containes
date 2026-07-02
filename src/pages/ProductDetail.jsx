import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { seedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, ChevronUp, Star, Truck, ShieldCheck, Gem } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  
  const product = seedProducts.find(p => p.id === id);
  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState('main'); // 'main' or 'hover'

  const relatedProducts = seedProducts.filter(p => p.id !== id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset state on navigation
    setSelectedTone('gold');
    setQuantity(1);
    setActiveImage('main');
  }, [id]);

  useEffect(() => {
    if (product) {
       const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl mb-4">Product not found.</h2>
        <Link to="/shop" className="uppercase tracking-widest text-sm font-medium border-b border-primary pb-1">Return to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedTone);
  };

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500 container mx-auto px-4 md:px-8" ref={containerRef}>
      
      {/* Breadcrumbs */}
      <nav className="text-xs tracking-widest uppercase font-medium text-muted-foreground mb-8 flex gap-2">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link to={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-foreground transition-colors">{product.category}</Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mb-24">
        
        {/* Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4 sticky top-28">
           {/* Thumbnails */}
           <div className="flex md:flex-col gap-4 overflow-x-auto md:w-20 shrink-0 no-scrollbar">
              <button 
                className={`flex-none w-20 aspect-[3/4] border-2 transition-colors overflow-hidden ${activeImage === 'main' ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                onClick={() => setActiveImage('main')}
              >
                  <img 
                      data-strk-img-id={`pdp-thumb-${product.id}-main`}
                      data-strk-img={`[pdp-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} thumbnail`}
                      className="object-cover w-full h-full pointer-events-none"
                  />
              </button>
              <button 
                className={`flex-none w-20 aspect-[3/4] border-2 transition-colors overflow-hidden ${activeImage === 'hover' ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                onClick={() => setActiveImage('hover')}
              >
                  <img 
                      data-strk-img-id={`pdp-thumb-${product.id}-hover`}
                      data-strk-img={`[pdp-title] worn top down lifestyle`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} lifestyle thumbnail`}
                      className="object-cover w-full h-full pointer-events-none"
                  />
              </button>
           </div>
           
           {/* Main Image */}
           <div className="flex-1 aspect-[3/4] bg-secondary relative overflow-hidden">
               <img 
                  data-strk-img-id={`pdp-main-${product.id}`}
                  data-strk-img={`[pdp-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ${activeImage === 'main' ? 'opacity-100' : 'opacity-0'}`}
                />
                <img 
                  data-strk-img-id={`pdp-hover-${product.id}`}
                  data-strk-img={`[pdp-title] worn top down lifestyle`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} lifestyle`}
                  className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ${activeImage === 'hover' ? 'opacity-100' : 'opacity-0'}`}
                />
           </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 flex flex-col py-2 lg:py-6">
          <div className="flex items-center gap-1 text-primary mb-3">
             <Star className="w-4 h-4 fill-current" />
             <Star className="w-4 h-4 fill-current" />
             <Star className="w-4 h-4 fill-current" />
             <Star className="w-4 h-4 fill-current" />
             <Star className="w-4 h-4 fill-current" />
             <span className="text-xs text-muted-foreground ml-2 font-medium tracking-widest uppercase">98 Reviews</span>
          </div>
          
          <h1 id="pdp-title" className="text-3xl md:text-5xl font-serif mb-4 uppercase tracking-widest leading-tight">{product.name}</h1>
          <p className="text-2xl font-serif mb-6">${product.price}</p>
          
          <p className="text-muted-foreground font-light leading-relaxed mb-8 max-w-lg">
            {product.description}
          </p>

          <hr className="border-t border-border mb-8 max-w-md" />

          {/* Configuration */}
          <div className="space-y-8 mb-10 max-w-md">
            
            {/* Tone */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest">Metal Tone</span>
                <span className="text-xs font-light text-muted-foreground capitalize">{selectedTone}</span>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setSelectedTone('gold')}
                  className={`flex-1 py-3 border text-sm font-medium uppercase tracking-widest transition-colors ${selectedTone === 'gold' ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:border-primary/50'}`}
                >
                  Gold
                </button>
                <button 
                  onClick={() => setSelectedTone('silver')}
                  className={`flex-1 py-3 border text-sm font-medium uppercase tracking-widest transition-colors ${selectedTone === 'silver' ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:border-primary/50'}`}
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest block mb-3">Quantity</span>
              <div className="flex items-center border border-border w-32 rounded-sm">
                <button 
                  className="flex-1 py-3 text-muted-foreground hover:text-foreground flex justify-center items-center"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-medium">{quantity}</span>
                <button 
                  className="flex-1 py-3 text-muted-foreground hover:text-foreground flex justify-center items-center"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <button 
              onClick={handleAddToCart}
              className="w-full bg-primary text-primary-foreground py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
            >
              Add to Cart &mdash; ${(product.price * quantity).toFixed(2)}
            </button>
            <p className="text-center text-xs text-muted-foreground font-light">Free shipping on orders over $150.</p>
          </div>

          {/* Accordions */}
           <div className="w-full border-t border-border -mt-[1px]">
             <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              <AccordionItem value="item-1" className="border-b-[0.5px] border-border">
                <AccordionTrigger className="hover:no-underline py-5 text-sm uppercase tracking-widest font-medium">Description</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6">
                  {product.description} Designed to transition seamlessly from day to night, this piece is an essential addition to any curated jewelry uniform. Pair it with complementary textures for an editorial layered look.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b-[0.5px] border-border">
                <AccordionTrigger className="hover:no-underline py-5 text-sm uppercase tracking-widest font-medium">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Gem className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p><strong>{product.material}:</strong> We use a thick layer of 18k gold over a solid sterling silver base, ensuring long-lasting wear and a premium finish.</p>
                  </div>
                   <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p><strong>Care:</strong> To maintain the luster, avoid contact with water, perfumes, and lotions. Store in the provided Velmora pouch when not in use.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b-[0.5px] border-border">
                <AccordionTrigger className="hover:no-underline py-5 text-sm uppercase tracking-widest font-medium">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p>Complimentary standard shipping on all domestic orders. Express options available at checkout.</p>
                  </div>
                   <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p>We accept returns in unworn condition within 30 days of delivery. Custom or engraved pieces are final sale.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
           </div>

        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
         <section className="pt-16 border-t border-border">
           <h2 className="text-3xl font-serif mb-10 text-center">You May Also Like</h2>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.map(related => (
              <div key={related.id} className="group cursor-pointer">
                <Link to={`/product/${related.id}`} className="block relative aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                  <img 
                    data-strk-img-id={`related-${related.id}-main`}
                    data-strk-img={`[related-title-${related.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={related.name}
                    className="object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img 
                    data-strk-img-id={`related-${related.id}-hover`}
                    data-strk-img={`[related-title-${related.id}] close up worn`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${related.name} worn`}
                    className="absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </Link>
                <div className="text-center">
                  <h3 id={`related-title-${related.id}`} className="product-title mb-2"><Link to={`/product/${related.id}`}>{related.name}</Link></h3>
                  <p className="font-serif text-lg">${related.price}</p>
                </div>
              </div>
            ))}
          </div>
         </section>
      )}

    </div>
  );
};

export default ProductDetail;