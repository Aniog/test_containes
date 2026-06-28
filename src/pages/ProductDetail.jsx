import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Plus, Minus, Star, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import ProductCard from '@/components/products/ProductCard';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [activeVariant, setActiveVariant] = useState('gold');
  const [openAccordion, setOpenAccordion] = useState('description');
  
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) return (
    <div className="pt-32 pb-24 text-center min-h-screen">
      <h2 className="text-2xl font-serif mb-6">Product not found.</h2>
      <Link to="/shop" className="underline font-sans text-xs uppercase tracking-widest">Return to Shop</Link>
    </div>
  );

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.nameRaw} added to bag`);
  };

  const AccordionItem = ({ title, value, children }) => (
    <div className="border-b border-brand-sand">
      <button 
        onClick={() => setOpenAccordion(openAccordion === value ? '' : value)}
        className="w-full flex justify-between items-center py-5 group"
      >
        <span className="text-xs font-sans uppercase tracking-[0.2em] font-bold group-hover:text-brand-gold transition-colors">{title}</span>
        {openAccordion === value ? <ChevronUp className="w-4 h-4 text-muted" /> : <ChevronDown className="w-4 h-4 text-muted" />}
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-500",
        openAccordion === value ? "max-h-96 pb-6" : "max-h-0"
      )}>
        <p className="text-sm font-sans text-muted leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <Link to="/shop" className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-muted hover:text-brand-charcoal mb-8 transition-colors">
          <ArrowLeft className="w-3 h-3" />
          <span>Back to Collection</span>
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-32">
          {/* Gallery */}
          <div className="lg:w-1/2 flex flex-col md:flex-row gap-4">
            <div className="order-2 md:order-1 flex md:flex-col gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-20 aspect-[3/4] bg-brand-sand shrink-0 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                  <img
                    data-strk-img-id={`prod-thumb-${id}-${i}`}
                    data-strk-img={`[prod-title] [prod-cat] detail view ${i}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3C/svg%3E"
                  />
                </div>
              ))}
            </div>
            <div className="order-1 md:order-2 flex-grow aspect-[3/4] bg-brand-sand overflow-hidden">
              <img
                data-strk-img-id={`prod-main-${id}`}
                data-strk-img={`[prod-title] [prod-cat] fine jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3C/svg%3E"
                alt={product.nameRaw}
              />
            </div>
          </div>

          {/* Details */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <span id="prod-cat" className="text-[10px] font-sans uppercase tracking-[0.3em] text-brand-gold font-bold">{product.category}</span>
              <h1 id="prod-title" className="text-4xl md:text-5xl font-serif uppercase tracking-widest">{product.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted">12 Reviews</span>
              </div>
              <p className="text-2xl font-sans font-light">${product.price}</p>
            </div>

            <p className="text-brand-charcoal font-sans leading-relaxed text-sm max-w-lg">
              {product.description}
            </p>

            {/* Variants */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-sans uppercase tracking-widest font-bold">Finish</h3>
              <div className="flex space-x-3">
                {['gold', 'silver'].map(variant => (
                  <button
                    key={variant}
                    onClick={() => setActiveVariant(variant)}
                    className={cn(
                      "px-6 py-2 text-[10px] font-sans uppercase tracking-widest border transition-all duration-300",
                      activeVariant === variant 
                        ? "bg-brand-charcoal text-white border-brand-charcoal" 
                        : "bg-transparent text-brand-charcoal border-brand-sand hover:border-brand-charcoal"
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and CTA */}
            <div className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border border-brand-sand px-4 py-3 h-14">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-sans">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="p-2">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  className="flex-grow bg-brand-charcoal text-brand-sand h-14 font-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-500"
                >
                  Add to Bag
                </button>
              </div>
              
              <div className="flex items-center justify-center space-x-6 pt-2 grayscale opacity-40">
                 {/* Payment Icons */}
                 <span className="text-[8px] font-bold italic">VISA</span>
                 <span className="text-[8px] font-bold italic">MASTERCARD</span>
                 <span className="text-[8px] font-bold italic">AMEX</span>
                 <span className="text-[8px] font-bold italic">PAYPAL</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="pt-8">
              <AccordionItem title="Description" value="description">
                {product.description}
              </AccordionItem>
              <AccordionItem title="Materials & Care" value="materials">
                {product.materials}. {product.care}
              </AccordionItem>
              <AccordionItem title="Shipping & Returns" value="shipping">
                Free worldwide shipping on orders over $100. 30-day returns on all unworked items in original packaging. Earrings are non-returnable due to hygiene reasons.
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-sm font-sans uppercase tracking-[0.3em] text-brand-gold font-bold">Curated for You</h2>
            <h3 className="text-4xl font-serif">Complete the Look</h3>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;