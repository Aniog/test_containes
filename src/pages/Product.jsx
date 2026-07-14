import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/components/cart/CartContext';
import { Button } from '@/components/ui/button';
import { Star, Minus, Plus, Heart, Share2, Truck, RotateCcw } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const containerRef = useRef(null);
  
  const product = products.find(p => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState('main');
  const [variant, setVariant] = useState('18K Gold');

  useEffect(() => {
    if (!product) {
      navigate('/shop');
      return;
    }
    
    // Reset state on logical product change
    setQuantity(1);
    setActiveImage('main');
    setVariant('18K Gold');
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [id, product, navigate]);

  useEffect(() => {
    if (product) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [id, product, activeImage]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-xs tracking-widest uppercase font-serif text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-foreground transition-colors">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground truncate">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row-reverse gap-4">
            {/* Main Image */}
            <div className="w-full md:w-5/6 aspect-[3/4] bg-secondary relative overflow-hidden flex-shrink-0">
              {activeImage === 'main' ? (
                <img
                  alt={product.name}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`pdp-${product.imgId}`}
                  data-strk-img={`[pdp-product-name] on model front view`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                />
              ) : (
                <img
                  alt={`${product.name} alternate view`}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`pdp-${product.hoverImgId}`}
                  data-strk-img={`[pdp-product-name] close up detail view`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                />
              )}
            </div>
            
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 w-full md:w-1/6 overflow-x-auto md:overflow-visible">
              <button 
                onClick={() => setActiveImage('main')}
                className={`w-20 md:w-full aspect-[3/4] flex-shrink-0 bg-secondary relative overflow-hidden ${activeImage === 'main' ? 'ring-1 ring-primary ring-offset-2 ring-offset-background' : ''}`}
              >
                <img
                  alt={`${product.name} thumbnail 1`}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`pdp-thumb-${product.imgId}`}
                  data-strk-img={`[pdp-product-name] on model front view`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                />
              </button>
              <button 
                onClick={() => setActiveImage('hover')}
                className={`w-20 md:w-full aspect-[3/4] flex-shrink-0 bg-secondary relative overflow-hidden ${activeImage === 'hover' ? 'ring-1 ring-primary ring-offset-2 ring-offset-background' : ''}`}
              >
                <img
                  alt={`${product.name} thumbnail 2`}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`pdp-thumb-${product.hoverImgId}`}
                  data-strk-img={`[pdp-product-name] close up detail view`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col pt-2 lg:pt-8 w-full max-w-xl mx-auto lg:mx-0">
            <h1 id="pdp-product-name" className="text-3xl lg:text-4xl font-serif uppercase tracking-[0.15em] text-foreground mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-xl text-muted-foreground font-light tracking-wide">${product.price.toFixed(2)}</span>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center space-x-2">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-primary' : (i < product.rating ? 'fill-primary/50' : 'fill-transparent')}`} />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground underline underline-offset-4">{product.reviews} Reviews</span>
              </div>
            </div>
            
            <p className="text-foreground/80 font-light leading-relaxed mb-8">
              {product.description}
            </p>
            
            {/* Variants */}
            <div className="mb-8">
              <p className="text-xs font-serif uppercase tracking-widest text-muted-foreground mb-3">Color: <span className="text-foreground">{variant}</span></p>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setVariant('18K Gold')}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${variant === '18K Gold' ? 'ring-1 ring-primary ring-offset-2 ring-offset-background' : 'hover:ring-1 hover:ring-border hover:ring-offset-2 hover:ring-offset-background'}`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#E5C158] border border-[#d4af37]/30"></div>
                </button>
                <button 
                  onClick={() => setVariant('Silver')}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${variant === 'Silver' ? 'ring-1 ring-primary ring-offset-2 ring-offset-background' : 'hover:ring-1 hover:ring-border hover:ring-offset-2 hover:ring-offset-background'}`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#E8E8E8] border border-[#d1d1d1]/30"></div>
                </button>
              </div>
            </div>
            
            {/* Add to Cart Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full">
              <div className="flex items-center border border-border h-14 w-full sm:w-32 bg-background flex-shrink-0">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 flex-1 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-sm font-medium w-8 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 flex-1 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-14 uppercase tracking-widest text-sm font-serif transition-colors w-full"
              >
                Add to Cart • ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>
            
            {/* Value Props */}
            <div className="flex justify-between md:justify-start md:space-x-8 text-xs text-muted-foreground uppercase tracking-widest mb-10 pb-10 border-b border-border">
              <div className="flex items-center">
                <Truck className="w-4 h-4 mr-2 text-primary" strokeWidth={1.5} />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center">
                <RotateCcw className="w-4 h-4 mr-2 text-primary" strokeWidth={1.5} />
                <span>30-Day Returns</span>
              </div>
            </div>
            
            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full" defaultValue="details">
              <AccordionItem value="details" className="border-border">
                <AccordionTrigger className="font-serif text-sm tracking-widest uppercase hover:no-underline hover:text-primary">Details & Materials</AccordionTrigger>
                <AccordionContent className="text-foreground/80 font-light space-y-2">
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    {product.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="care" className="border-border">
                <AccordionTrigger className="font-serif text-sm tracking-widest uppercase hover:no-underline hover:text-primary">Jewelry Care</AccordionTrigger>
                <AccordionContent className="text-foreground/80 font-light space-y-2 mt-2">
                  <p>Our jewelry is crafted to accompany you on life's adventures. To maintain its shine:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Avoid prolonged contact with water, perfumes, and lotions</li>
                    <li>Store in the provided pouch when not in use</li>
                    <li>Gently clean with a soft, dry cloth</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" className="border-border">
                <AccordionTrigger className="font-serif text-sm tracking-widest uppercase hover:no-underline hover:text-primary">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-foreground/80 font-light mt-2">
                  <p className="mb-2"><strong>Free Standard Shipping</strong> on all orders. Expected delivery within 3-5 business days.</p>
                  <p><strong>Returns:</strong> We accept returns in unworn condition with original packaging within 30 days of delivery. A $5 restocking fee applies.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 border-t border-border pt-20">
            <h2 id="related-title" className="text-center font-serif text-2xl font-light tracking-wide mb-12">You May Also Like</h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((relatedProd) => (
                <Link key={relatedProd.id} to={`/product/${relatedProd.id}`} className="group relative flex flex-col cursor-pointer">
                  <div className="aspect-[3/4] relative overflow-hidden bg-secondary mb-4 block">
                    <img
                      alt={relatedProd.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      data-strk-img-id={`related-${relatedProd.imgId}`}
                      data-strk-img={`[related-item-${relatedProd.id}-title] [related-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    />
                  </div>
                  
                  <div className="flex flex-col flex-1 text-center mt-2">
                    <h3 id={`related-item-${relatedProd.id}-title`} className="font-serif uppercase tracking-widest text-xs md:text-sm text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
                      {relatedProd.name}
                    </h3>
                    <p className="text-xs text-muted-foreground font-light">${relatedProd.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}