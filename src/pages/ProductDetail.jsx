import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import { useCart } from '../context/CartContext';
import { Plus, Minus, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find(p => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [activeAccordion, setActiveAccordion] = useState('description');

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="uppercase tracking-widest text-sm border-b border-foreground pb-1 hover:text-primary transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== id && p.category === product.category).slice(0, 4);
  if (relatedProducts.length === 0) {
    relatedProducts.push(...products.filter(p => p.id !== id).slice(0, 4 - relatedProducts.length));
  }

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const handleAddToCart = () => {
    addItem({ ...product, variant }, quantity);
  };

  return (
    <div className="bg-background pt-10 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-10">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
          {/* Image Gallery */}
          <div className="flex-1 lg:w-3/5 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails (desktop left, mobile bottom) */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible w-full md:w-24 flex-shrink-0">
               {[1, 2, 3].map(num => (
                 <div key={num} className="aspect-[4/5] bg-muted w-20 md:w-full flex-shrink-0 cursor-pointer overflow-hidden border border-transparent hover:border-border transition-colors">
                     <img 
                       data-strk-img-id={`product-${product.id}-thumb-${num}`}
                       data-strk-img={`[pd-name] view ${num}`}
                       data-strk-img-ratio="4x5"
                       src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                       className="w-full h-full object-cover"
                       alt={`${product.name} thumbnail ${num}`}
                     />
                 </div>
               ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 bg-muted relative aspect-[4/5] overflow-hidden">
               <img 
                 data-strk-img-id={`product-${product.id}-main`}
                 data-strk-img={`[pd-name]`}
                 data-strk-img-ratio="4x5"
                 data-strk-img-width="1200"
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                 className="w-full h-full object-cover"
                 alt={product.name}
               />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 lg:w-2/5 flex flex-col justify-start pt-4">
            <h1 id="pd-name" className="font-serif text-4xl lg:text-5xl uppercase tracking-wider mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl">${product.price}</span>
              <div className="flex gap-1 text-primary items-center">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                <span className="text-muted-foreground text-sm ml-2">(42)</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <span className="block uppercase tracking-widest text-xs font-medium mb-3">Metal: <span className="text-muted-foreground font-normal capitalize">{variant}</span></span>
              <div className="flex gap-3">
                <button 
                  onClick={() => setVariant('gold')}
                  className={cn(
                    "relative w-10 h-10 rounded-full bg-[#E5C989] flex items-center justify-center transition-all",
                    variant === 'gold' ? "ring-1 ring-offset-2 ring-foreground" : "hover:scale-110"
                  )}
                  aria-label="Select Gold Variant"
                />
                <button 
                  onClick={() => setVariant('silver')}
                  className={cn(
                    "relative w-10 h-10 rounded-full bg-[#E8E8E8] flex items-center justify-center transition-all",
                    variant === 'silver' ? "ring-1 ring-offset-2 ring-foreground" : "hover:scale-110"
                  )}
                  aria-label="Select Silver Variant"
                />
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-10">
              <span className="block uppercase tracking-widest text-xs font-medium mb-3">Quantity</span>
              <div className="inline-flex items-center border border-border">
                <button 
                  className="px-4 py-3 hover:bg-muted transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button 
                  className="px-4 py-3 hover:bg-muted transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="w-full bg-primary text-primary-foreground py-5 uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors mb-12"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-border">
              {/* Description */}
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="w-full py-6 flex justify-between items-center uppercase tracking-widest text-sm font-medium hover:text-primary transition-colors"
                >
                  Description
                  {activeAccordion === 'description' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <div className={cn("overflow-hidden transition-all duration-300", activeAccordion === 'description' ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0")}>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Meticulously crafted to catch the light, this piece represents everyday luxury. Whether worn alone as a subtle statement or layered for high impact, it perfectly adapts to your personal style.
                  </p>
                </div>
              </div>
              
              {/* Materials */}
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="w-full py-6 flex justify-between items-center uppercase tracking-widest text-sm font-medium hover:text-primary transition-colors"
                >
                  Materials & Care
                  {activeAccordion === 'materials' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <div className={cn("overflow-hidden transition-all duration-300", activeAccordion === 'materials' ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0")}>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                    <strong className="text-foreground font-medium">Material:</strong> {product.material}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To maintain the brilliance of your jewelry, wipe gently with a soft cloth after each wear. Avoid direct contact with perfumes, lotions, and harsh chemicals.
                  </p>
                </div>
              </div>

              {/* Shipping */}
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full py-6 flex justify-between items-center uppercase tracking-widest text-sm font-medium hover:text-primary transition-colors"
                >
                  Shipping & Returns
                  {activeAccordion === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <div className={cn("overflow-hidden transition-all duration-300", activeAccordion === 'shipping' ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0")}>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Enjoy complimentary express shipping globally. We gladly accept returns within 30 days of receipt in unworn condition. View our full return policy for more details.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* You May Also Like */}
        <section className="pt-16 border-t border-border">
          <h2 className="text-center font-serif text-3xl uppercase tracking-wider mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group flex flex-col">
                <Link to={`/product/${p.id}`} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                  <img 
                      data-strk-img-id={`related-${p.id}`}
                      data-strk-img={`[related-name-${p.id}]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addItem({...p, variant: 'gold'}, 1);
                    }}
                    className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xs text-black py-3 uppercase tracking-widest text-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white"
                  >
                    Quick Add
                  </button>
                </Link>
                <Link to={`/product/${p.id}`} className="flex flex-col flex-1">
                  <h3 id={`related-name-${p.id}`} className="font-serif text-lg tracking-wide uppercase mb-1">{p.name}</h3>
                  <p className="text-muted-foreground text-sm flex-1">${p.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}