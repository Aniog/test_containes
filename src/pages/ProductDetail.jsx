import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '@/api/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Star, Minus, Plus, ChevronRight, Truck, ShieldCheck, Heart } from 'lucide-react';
import { toast } from 'sonner';
import ProductCard from '@/components/shop/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductDetail = () => {
  const containerRef = useRef(null);
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);

  if (!product) {
    return (
      <div className="pt-40 pb-24 px-6 text-center">
        <h2 className="font-serif text-2xl mb-4">Piece not found</h2>
        <Link to="/shop" className="text-xs uppercase tracking-widest underline">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedVariant);
    }
    toast.success(`${product.name} added to your bag`);
  };

  const relatedProducts = PRODUCTS.filter(p => p.id !== id).slice(0, 4);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white" ref={containerRef}>
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-velmora-muted mb-12">
        <Link to="/" className="hover:text-velmora-fg transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/shop" className="hover:text-velmora-fg transition-colors">Shop</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-velmora-fg font-medium">{product.category}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-32">
        {/* Left: Gallery */}
        <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-1 gap-6">
          <div className="aspect-[3/4] bg-velmora-bg overflow-hidden relative group">
            <img 
              data-strk-img-id={`pdp-main-${product.imgId}`}
              data-strk-img={`[pdp-desc] [pdp-name] jewelry gold high-end editorial`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
              className="w-full h-full object-cover"
              alt={product.name}
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-[3/4] bg-velmora-bg overflow-hidden">
               <img 
                data-strk-img-id={`pdp-extra-1-${product.imgId}`}
                data-strk-img={`[pdp-name] jewelry gold close-up detail`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="w-full h-full object-cover"
                alt="Detail view 1"
              />
            </div>
            <div className="aspect-[3/4] bg-velmora-bg overflow-hidden">
               <img 
                data-strk-img-id={`pdp-extra-2-${product.imgId}`}
                data-strk-img={`[pdp-name] worn by model jewelry gold lifestyle`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="w-full h-full object-cover"
                alt="lifestyle view"
              />
            </div>
          </div>
        </div>

        {/* Right: Info */}
        <div className="md:col-span-5 flex flex-col pt-4">
          <div className="mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-velmora-muted mb-4 block">{product.category}</span>
            <h1 id="pdp-name" className="text-3xl lg:text-4xl font-serif uppercase tracking-widest mb-4 leading-tight">
              {product.name}
            </h1>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-xl font-light text-velmora-fg">${product.price.toFixed(2)}</span>
              <div className="flex items-center space-x-1 border-l border-velmora-border pl-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-velmora-muted">({product.reviews} Reviews)</span>
              </div>
            </div>
            <p id="pdp-desc" className="text-sm text-velmora-muted leading-relaxed font-light mb-8">
              {product.description}
            </p>
          </div>

          <Separator className="mb-8" />

          {/* Variant Selector */}
          <div className="mb-8">
            <h3 className="text-[10px] uppercase tracking-widest font-bold mb-4">Finish: {selectedVariant}</h3>
            <div className="flex space-x-3">
              {['Gold', 'Silver'].map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={cn(
                    "px-6 py-2 border text-[10px] uppercase tracking-widest transition-all duration-300",
                    selectedVariant === variant 
                      ? "border-velmora-fg bg-velmora-fg text-white" 
                      : "border-velmora-border text-velmora-muted hover:border-velmora-fg"
                  )}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and CTA */}
          <div className="flex flex-col space-y-4 mb-12">
            <div className="flex items-center border border-velmora-border w-max">
              <button 
                className="px-4 py-3 hover:text-velmora-gold transition-colors"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center text-xs font-medium">{quantity}</span>
              <button 
                className="px-4 py-3 hover:text-velmora-gold transition-colors"
                onClick={() => setQuantity(q => q + 1)}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex space-x-4">
              <Button 
                onClick={handleAddToCart}
                className="flex-1 bg-velmora-fg text-white hover:bg-velmora-gold rounded-none uppercase tracking-[0.3em] text-xs h-14 transition-all duration-500"
              >
                Add to Bag
              </Button>
              <Button variant="outline" className="w-14 h-14 rounded-none border-velmora-border">
                <Heart className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Trust points simple */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest text-velmora-muted">
              <Truck className="w-4 h-4" />
              <span>Express Delivery</span>
            </div>
            <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest text-velmora-muted">
              <ShieldCheck className="w-4 h-4" />
              <span>Two-Year Warranty</span>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="details" className="border-t border-velmora-border">
              <AccordionTrigger className="text-[10px] uppercase tracking-[0.3em] font-bold py-6 hover:no-underline">
                Details & Dimensions
              </AccordionTrigger>
              <AccordionContent className="text-sm text-velmora-muted leading-loose font-light pb-6">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Hand-finished demi-fine jewelry</li>
                  <li>{product.materials}</li>
                  <li>Nickel-free and lead-free</li>
                  <li>Designed in our London studio</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping" className="border-velmora-border">
              <AccordionTrigger className="text-[10px] uppercase tracking-[0.3em] font-bold py-6 hover:no-underline">
                Shipping & Returns
              </AccordionTrigger>
              <AccordionContent className="text-sm text-velmora-muted leading-loose font-light pb-6">
                Complimentary worldwide shipping on all orders. Returns and exchanges are accepted within 30 days of delivery. All pieces must be in their original, unworn condition with tags attached.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="care" className="border-velmora-border">
              <AccordionTrigger className="text-[10px] uppercase tracking-[0.3em] font-bold py-6 hover:no-underline">
                Materials & Care
              </AccordionTrigger>
              <AccordionContent className="text-sm text-velmora-muted leading-loose font-light pb-6">
                To maintain the shine of your pieces, avoid contact with perfumes, lotions, and harsh chemicals. We recommend removing your jewelry before swimming, bathing, or exercising. Store in your Velmora pouch when not in use.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Related Products */}
      <section className="pt-24 border-t border-velmora-border">
        <h2 className="text-3xl font-serif mb-12 text-center">Complete the Look</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/shop">
            <Button variant="outline" className="border-velmora-fg text-velmora-fg hover:bg-velmora-fg hover:text-white rounded-none uppercase tracking-[0.3em] text-[10px] px-12 py-7 transition-all duration-500">
              Shop All Jewelry
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
