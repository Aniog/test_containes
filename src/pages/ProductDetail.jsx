import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../lib/data';
import { useCartStore } from '../store/cartStore';
import { Star, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductDetail() {
  const { handle } = useParams();
  const product = products.find(p => p.handle === handle) || products[0];
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  const containerRef = useRef(null);
  const { addItem } = useCartStore();

  useEffect(() => {
    // Reset state on navigation
    setQuantity(1);
    setActiveAccordion('description');
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [handle]);

  const handleAddToCart = () => {
    // Add multiple if quantity > 1
    for (let i = 0; i < quantity; i++) {
        addItem(product, 'gold');
    }
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-24 min-h-screen" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6 py-12">
        
        {/* Breadcrumb */}
        <nav className="flex text-xs text-muted-foreground tracking-widest uppercase mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Product Inner */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
          
          {/* Gallery */}
          <div className="lg:w-1/2 flex flex-col-reverse md:flex-row gap-4">
             <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 flex-shrink-0 scrollbar-hide">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`aspect-[3/4] bg-secondary cursor-pointer ${i === 1 ? 'ring-1 ring-foreground' : 'opacity-70 hover:opacity-100'}`}>
                     <img 
                        alt={`${product.name} detail ${i}`}
                        data-strk-img-id={`${product.imgId}-thumb-${i}`}
                        data-strk-img={`${product.imgQuery} detail ${i}`}
                        data-strk-img-ratio="2x3"
                        data-strk-img-width="200"
                        src={product.image}
                        className="w-full h-full object-cover"
                      />
                  </div>
                ))}
             </div>
             <div className="flex-1 aspect-[3/4] bg-secondary relative">
                <img 
                  alt={product.name}
                  data-strk-img-id={`${product.imgId}-main`}
                  data-strk-img={product.imgQuery}
                  data-strk-img-ratio="2x3"
                  data-strk-img-width="1200"
                  src={product.image}
                  className="w-full h-full object-cover"
                />
             </div>
          </div>

          {/* Details */}
          <div className="lg:w-1/2 lg:py-8">
            <h1 id={product.nameId + '-pdp'} className="font-serif text-3xl md:text-5xl uppercase tracking-wider mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="font-medium text-xl">${product.price.toFixed(2)}</span>
              <div className="flex items-center text-accent">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                <span className="text-xs text-muted-foreground ml-2">(42)</span>
              </div>
            </div>

            <p id={product.descId + '-pdp'} className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Variants */}
            <div className="mb-8">
              <span className="text-xs font-medium tracking-widest uppercase mb-3 block">Material</span>
              <div className="flex gap-4">
                <button className="border border-foreground bg-background px-6 py-2 text-sm uppercase tracking-wider">
                  Gold Vermeil
                </button>
                <button className="border border-border bg-background text-muted-foreground px-6 py-2 text-sm uppercase tracking-wider opacity-50 cursor-not-allowed">
                  Sterling Silver (Sold Out)
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
               <div className="flex items-center border border-border h-14">
                  <button 
                    className="px-6 h-full hover:bg-secondary transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="flex-1 text-center w-8 text-sm">{quantity}</span>
                  <button 
                    className="px-6 h-full hover:bg-secondary transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary text-primary-foreground h-14 font-medium tracking-widest uppercase hover:bg-primary/90 transition-colors"
                >
                  Add to Cart
                </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border">
              {['description', 'materials & care', 'shipping & returns'].map((acc) => (
                <div key={acc} className="border-b border-border">
                  <button 
                    className="w-full py-6 flex justify-between items-center text-sm font-medium tracking-widest uppercase"
                    onClick={() => setActiveAccordion(activeAccordion === acc ? null : acc)}
                  >
                    {acc}
                    {activeAccordion === acc ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {activeAccordion === acc && (
                    <div className="pb-6 text-sm text-muted-foreground leading-relaxed">
                      {acc === 'description' && <p>{product.description} Handcrafted by artisans to ensure the highest quality. Perfect for stacking or wearing solo.</p>}
                      {acc === 'materials & care' && <p>Our pieces are made from 18k gold vermeil—a thick layer of solid gold over sterling silver. To keep it shining, avoid contact with water, perfumes, and lotions. Store in the provided pouch.</p>}
                      {acc === 'shipping & returns' && <p>Free worldwide shipping on orders over $100. We accept returns within 30 days of delivery in unworn condition with original packaging.</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Related Products */}
        <div className="py-12 border-t border-border/50">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-3xl text-foreground">You May Also Like</h2>
            <Link to="/shop" className="hidden md:flex items-center text-sm border-b border-foreground pb-1 hover:text-primary transition-colors">
              Shop All <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link to={`/product/${p.handle}`} key={p.id} className="group block">
                <div className="relative aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                  <img 
                    alt={p.name}
                    data-strk-img-id={`${p.imgId}-related`}
                    data-strk-img={p.imgQuery}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="600"
                    src={p.image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
                </div>
                <div className="flex justify-between items-start">
                  <h3 id={`${p.nameId}-related`} className="font-serif text-lg leading-tight uppercase tracking-wider pr-4">{p.name}</h3>
                  <span className="font-medium text-muted-foreground">${p.price.toFixed(2)}</span>
                </div>
                <p id={`${p.descId}-related`} className="hidden">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
