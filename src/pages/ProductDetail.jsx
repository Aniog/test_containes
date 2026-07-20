import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { Plus, Minus, Star, ChevronDown, Check } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [added, setAdded] = useState(false);

  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== id).slice(0, 4);

  // Force scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    // Schedule image load for detail page images
    const frameId = window.requestAnimationFrame(() => {
       if (containerRef.current) {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
       }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh]">
        <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
        <Link to="/collection" className="text-primary hover:underline">Back to Shop</Link>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, 'Gold', quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-24 pb-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-24">
        {/* Gallery Area */}
        <div className="flex flex-col-reverse md:flex-row gap-4 h-fit sticky top-24">
          <div className="flex md:flex-col gap-4 overflow-x-auto md:w-20 shrink-0 hide-scrollbar">
             {[1, 2, 3].map(i => (
               <div key={i} className="aspect-[3/4] w-20 bg-muted cursor-pointer hover:opacity-80 transition-opacity">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`${product.title} detail angle ${i} gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.title} thumbnail ${i}`}
                    className="w-full h-full object-cover"
                  />
               </div>
             ))}
          </div>
          <div className="flex-1 aspect-[3/4] bg-muted relative">
             <img
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-title] worn on model editorial lighting gold`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
          </div>
        </div>

        {/* Info Area */}
        <div className="flex flex-col pt-4">
           <div className="mb-8 border-b border-border pb-8">
              <nav className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
                 <Link to="/" className="hover:text-foreground">Home</Link>
                 <span className="mx-2">/</span>
                 <Link to={`/collection?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
              </nav>
              
              <h1 id="pdp-title" className="text-3xl md:text-4xl font-serif uppercase tracking-widest mb-3">{product.title}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                 <p className="text-xl font-medium">${product.price}</p>
                 <div className="flex items-center gap-1 text-primary">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                 </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-balance">
                 {product.description}
              </p>
           </div>

           <div className="mb-8">
              <span className="text-sm font-medium uppercase tracking-widest block mb-3">Color</span>
              <div className="flex gap-3">
                 <button className="h-10 px-6 rounded-full border border-primary bg-primary/5 text-primary text-sm">
                    Gold
                 </button>
                 <button className="h-10 px-6 rounded-full border border-border text-muted-foreground hover:border-muted-foreground text-sm transition-colors">
                    Silver
                 </button>
              </div>
           </div>

           <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-border rounded-sm h-12 w-32 shrink-0">
                 <button 
                   className="flex-1 flex justify-center text-muted-foreground hover:text-foreground transition-colors"
                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
                 >
                   <Minus className="w-4 h-4" />
                 </button>
                 <span className="w-8 text-center">{quantity}</span>
                 <button 
                   className="flex-1 flex justify-center text-muted-foreground hover:text-foreground transition-colors"
                   onClick={() => setQuantity(quantity + 1)}
                 >
                   <Plus className="w-4 h-4" />
                 </button>
              </div>
              <Button size="lg" className="flex-1 w-full relative overflow-hidden group" onClick={handleAdd}>
                 <span className={`absolute inset-0 flex items-center justify-center bg-primary transition-transform duration-300 ${added ? 'translate-y-0' : '-translate-y-full'}`}>
                    <Check className="w-5 h-5 mr-2" /> Added to Cart
                 </span>
                 <span className={`transition-transform duration-300 ${added ? 'translate-y-full inline-block' : ''}`}>
                    Add to Cart
                 </span>
              </Button>
           </div>
           
           {/* Accordions */}
           <div className="border-t border-border">
              {['description', 'materials', 'shipping'].map((tab) => (
                 <div key={tab} className="border-b border-border">
                    <button 
                       onClick={() => setActiveTab(activeTab === tab ? '' : tab)}
                       className="w-full py-4 flex justify-between items-center hover:text-primary transition-colors text-sm uppercase tracking-widest"
                    >
                       {tab === 'description' ? 'Description' : tab === 'materials' ? 'Materials & Care' : 'Shipping & Returns'}
                       <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeTab === tab ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${activeTab === tab ? 'max-h-40 pb-4' : 'max-h-0'}`}>
                       <p className="text-muted-foreground text-sm leading-relaxed">
                          {tab === 'description' && product.description}
                          {tab === 'materials' && 'Crafted from a thick layer of 18K solid gold on jeweler\'s brass. Hypoallergenic, nickel-free, and designed to resist tarnishing. Wipe gently with a soft cloth after wear.'}
                          {tab === 'shipping' && 'Free worldwide shipping on orders over $50. Enjoy an extended 30-day return policy. Excludes custom and sale items.'}
                       </p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 border-t border-border pt-24">
           <h2 className="text-2xl font-serif text-center mb-12">You May Also Like</h2>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
           </div>
        </div>
      )}
    </div>
  );
}