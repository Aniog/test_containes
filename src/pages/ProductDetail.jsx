import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import productsData from '../data.json';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { ChevronDown, ChevronUp, Star, ShieldCheck, Truck } from 'lucide-react';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left uppercase tracking-widest text-sm font-medium"
      >
        {title}
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div className={`mt-4 text-muted-foreground font-light text-sm leading-relaxed overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        {children}
      </div>
    </div>
  );
};

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  
  const product = productsData.products.find(p => p.id === id);
  const relatedProducts = productsData.products.filter(p => p.id !== id).slice(0, 4);

  const [quantity, setQuantity] = useState(1);
  const [tone, setTone] = useState('gold');

  useEffect(() => {
    // Reset state on ID change
    setQuantity(1);
    const frameId = window.requestAnimationFrame(() => {
        if (containerRef.current) {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
    })
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return <div className="pt-32 text-center h-screen">Product not found.</div>;
  }

  return (
    <div className="pt-20" ref={containerRef}>
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 lg:px-8 py-6 text-xs uppercase tracking-widest text-muted-foreground flex gap-2">
         <Link to="/" className="hover:text-foreground">Home</Link>
         <span>/</span>
         <Link to="/shop" className="hover:text-foreground">Shop</Link>
         <span>/</span>
         <span className="text-foreground">{product.name}</span>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Images */}
          <div className="lg:w-1/2 flex flex-col-reverse lg:flex-row gap-4">
             {/* Thumbnails (vertical on desktop, horizontal on mobile) */}
             <div className="flex lg:flex-col gap-4 lg:w-20 overflow-auto hide-scrollbar">
                {[1, 2, 3].map((i) => (
                  <button key={i} className="w-20 lg:w-full aspect-[3/4] bg-muted relative border border-transparent focus:border-foreground flex-shrink-0">
                     <img 
                        src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                        data-strk-img-id={product[`imageThumb${i}`] || product.image}
                        data-strk-img={`${product.imageQuery} ${i}`}
                        data-strk-img-ratio="2x3"
                        data-strk-img-width="150"
                        alt={`Thumbnail ${i}`}
                        className="absolute inset-0 w-full h-full object-cover"
                     />
                  </button>
                ))}
             </div>
             
             {/* Main Image */}
             <div className="flex-1 bg-muted relative aspect-[3/4] lg:aspect-auto lg:h-[800px]">
                <img 
                   src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                   data-strk-img-id={product.image}
                   data-strk-img={product.imageQuery}
                   data-strk-img-ratio="2x3"
                   data-strk-img-width="1200"
                   alt={product.name}
                   className="absolute inset-0 w-full h-full object-cover"
                />
             </div>
          </div>

          {/* Details */}
          <div className="lg:w-1/2 lg:py-10 flex flex-col max-w-lg">
             
             <h1 id={`pdp-title-${product.id}`} className="text-3xl lg:text-4xl font-serif uppercase tracking-widest mb-4">
               {product.name}
             </h1>
             
             <div className="flex items-center gap-4 mb-6">
                <p className="text-xl text-muted-foreground">${product.price}</p>
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-muted-foreground text-sm ml-2">(12)</span>
                </div>
             </div>

             <p className="text-muted-foreground font-light leading-relaxed mb-8" id={`pdp-desc-${product.id}`}>
               {product.description}
             </p>

             {/* Tone Selector */}
             <div className="mb-8">
               <span className="block text-sm uppercase tracking-widest font-medium mb-3">Tone: {tone}</span>
               <div className="flex gap-3">
                  <button 
                    onClick={() => setTone('gold')}
                    className={`w-8 h-8 rounded-full bg-[#D4AF37] border-2 transition-all ${tone === 'gold' ? 'border-foreground ring-2 ring-transparent ring-offset-2' : 'border-transparent'}`}
                    aria-label="Gold Tone"
                  />
                  <button 
                    onClick={() => setTone('silver')}
                    className={`w-8 h-8 rounded-full bg-[#E3E4E5] border-2 transition-all ${tone === 'silver' ? 'border-foreground ring-2 ring-transparent ring-offset-2' : 'border-transparent'}`}
                    aria-label="Silver Tone"
                  />
               </div>
             </div>

             {/* Quantity & Add to Cart */}
             <div className="flex gap-4 mb-10">
                <div className="border border-border flex items-center px-4 w-32">
                   <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:text-muted-foreground">-</button>
                   <span className="flex-1 text-center font-medium text-sm">{quantity}</span>
                   <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:text-muted-foreground">+</button>
                </div>
                
                <button 
                  onClick={() => addToCart({...product, name: `${product.name} (${tone})`}, quantity)}
                  className="flex-1 bg-accent text-accent-foreground uppercase tracking-widest text-sm font-medium hover:bg-accent/90 transition-colors"
                >
                  Add to Cart — ${(product.price * quantity).toFixed(2)}
                </button>
             </div>

             {/* Quick Badges */}
             <div className="grid grid-cols-2 gap-4 mb-12 py-6 border-y border-border">
                <div className="flex items-center gap-3 text-sm font-light text-muted-foreground">
                  <ShieldCheck className="w-5 h-5 text-primary" /> Hypoallergenic
                </div>
                <div className="flex items-center gap-3 text-sm font-light text-muted-foreground">
                  <Truck className="w-5 h-5 text-primary" /> Ships in 24 hrs
                </div>
             </div>

             {/* Accordions */}
             <Accordion title="Description" defaultOpen={true}>
                {product.description} Crafted with recycled materials and thick 18k gold vermeil to ensure long-lasting wear without tarnishing.
             </Accordion>
             <Accordion title="Materials & Care">
                Our vermeil is a thick layer of 18k solid gold on sterling silver. To maintain its shine, avoid contact with water, perfumes, and lotions. Store in the provided pouch when not in use.
             </Accordion>
             <Accordion title="Shipping & Returns">
                Free standard shipping on all orders. We accept returns within 30 days of delivery in their original, unused condition.
             </Accordion>

          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="bg-secondary py-20 mt-12">
         <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-serif mb-10 text-center">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
               {relatedProducts.map((p) => (
                 <div key={p.id} className="group">
                    <Link to={`/product/${p.id}`} className="block relative aspect-[3/4] bg-muted mb-4 overflow-hidden">
                       <img 
                          src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                          data-strk-img-id={p.imageRelated || p.image}
                          data-strk-img={p.imageQuery}
                          data-strk-img-ratio="2x3"
                          data-strk-img-width="400"
                          alt={p.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                       />
                    </Link>
                    <Link to={`/product/${p.id}`} className="block text-center">
                       <h3 className="text-sm font-serif uppercase tracking-wide mb-1" id={`rel-title-${p.id}`}>{p.name}</h3>
                       <p className="text-sm text-muted-foreground font-light">${p.price}</p>
                    </Link>
                 </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
}