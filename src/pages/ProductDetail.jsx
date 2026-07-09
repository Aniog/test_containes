import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Minus, Plus, Star } from 'lucide-react';
import { toast } from 'sonner';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { addItem } = useCart();
  
  const product = products.find(p => p.id === id);
  
  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  useEffect(() => {
    if (containerRef.current && product) {
      const timer = setTimeout(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Button asChild variant="outline" className="rounded-none uppercase tracking-widest px-8">
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  if (relatedProducts.length === 0) {
    relatedProducts.push(...products.filter(p => p.id !== product.id).slice(0, 4 - relatedProducts.length));
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedVariant);
    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <div className="bg-background min-h-screen py-12 md:py-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-muted-foreground uppercase tracking-wider flex items-center space-x-2">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-foreground">{product.category}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible w-full md:w-20 lg:w-24 shrink-0 scrollbar-hide">
              {product.images.map((imgQuery, idx) => (
                <button 
                  key={idx} 
                  className={`relative aspect-[4/5] bg-muted flex-shrink-0 w-20 md:w-full border-2 transition-colors ${activeImage === idx ? 'border-primary' : 'border-transparent'}`}
                  onClick={() => setActiveImage(idx)}
                >
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`${imgQuery}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="200"
                    alt={`Thumbnail ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 relative aspect-[4/5] bg-muted">
              {product.images.map((imgQuery, idx) => (
                <img 
                  key={idx}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id={`pdp-main-${product.id}-${idx}`}
                  data-strk-img={`${imgQuery}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  alt={`${product.name} view ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${activeImage === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col">
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-foreground mb-4" id={`pdp-title-${product.id}`}>
              {product.name}
            </h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-xl text-foreground font-medium">${product.price}</span>
              <div className="flex gap-0.5 text-primary">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm text-muted-foreground uppercase tracking-widest border-b border-muted-foreground leading-none pb-0.5 cursor-pointer">5 Reviews</span>
            </div>

            <p className="text-muted-foreground font-light text-base leading-relaxed mb-8" id={`pdp-desc-${product.id}`}>
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-medium uppercase tracking-widest text-foreground mb-4">Material: {selectedVariant}</h3>
              <div className="flex flex-wrap gap-4">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 text-sm uppercase tracking-widest border transition-colors ${
                      selectedVariant === variant 
                        ? 'border-primary bg-primary text-primary-foreground' 
                        : 'border-border bg-transparent text-foreground hover:border-primary'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-medium uppercase tracking-widest text-foreground mb-4">Quantity</h3>
              <div className="flex items-center border border-border w-max">
                <button 
                  className="px-4 py-3 hover:bg-muted text-foreground transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button 
                  className="px-4 py-3 hover:bg-muted text-foreground transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button 
              className="w-full rounded-none h-14 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-sm mb-12"
              onClick={handleAddToCart}
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </Button>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full border-t border-border">
              <AccordionItem value="description" className="border-border">
                <AccordionTrigger className="text-sm uppercase tracking-widest hover:no-underline font-medium">Description</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  {product.description} A perfect balance of classic luxury and contemporary sensibility. Every detail is thoughtfully refined.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials" className="border-border">
                <AccordionTrigger className="text-sm uppercase tracking-widest hover:no-underline font-medium">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  <p className="mb-2"><strong>Material:</strong> {product.material}</p>
                  <p>To extend the life of your jewelry, avoid swimming, showering, or exercising in your pieces. Keep away from perfumes, lotions, and cosmetics. Store in a cool, dry place.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" className="border-border">
                <AccordionTrigger className="text-sm uppercase tracking-widest hover:no-underline font-medium">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed">
                  <p className="mb-2">Enjoy free worldwide shipping on all orders. Standard delivery takes 3-7 business days.</p>
                  <p>We accept returns within 30 days of purchase for a full refund. Items must be unworn and in their original packaging.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        <section className="pt-16 border-t border-border">
          <h2 className="font-serif text-3xl mb-12 text-center text-foreground">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(rp => (
              <div key={rp.id} className="group cursor-pointer">
                <Link to={`/product/${rp.id}`} onClick={() => window.scrollTo(0,0)} className="block relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`related-img-${rp.id}`}
                    data-strk-img={`[related-desc-${rp.id}] [related-name-${rp.id}]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    alt={rp.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button 
                      className="w-full rounded-none bg-background/90 text-foreground hover:bg-background hover:text-primary backdrop-blur uppercase tracking-widest text-xs"
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(rp, 1, rp.variants[0]);
                        toast.success(`Added ${rp.name} to cart`);
                      }}
                    >
                      Quick Add
                    </Button>
                  </div>
                </Link>
                <div className="text-center">
                  <Link to={`/product/${rp.id}`} onClick={() => window.scrollTo(0,0)}>
                    <h3 id={`related-name-${rp.id}`} className="font-serif uppercase tracking-widest text-sm mb-1 text-foreground">{rp.name}</h3>
                    <p className="text-muted-foreground text-sm">${rp.price}</p>
                    <span id={`related-desc-${rp.id}`} className="sr-only">{rp.description}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}