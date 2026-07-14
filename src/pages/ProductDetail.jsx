import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { Button } from '../components/ui/button';
import { useCart } from '../lib/cart-context';
import { toast } from 'sonner';
import { Star, Minus, Plus, ChevronRight, ChevronLeft } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { addItem, setIsOpen } = useCart();
  
  const product = products.find(p => p.id === id);
  
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold'); // default variant

  useEffect(() => {
    // Reset state when product changes
    setActiveImage(0);
    setQuantity(1);
    setVariant('gold');
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (ImageHelper && ImageHelper.loadImages && strkImgConfig && containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <p className="mb-8 text-muted-foreground">The product you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/shop')} variant="outline">
          Back to Shop
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, variant);
    toast.success(`${quantity}x ${product.title} added to cart`);
    setIsOpen(true);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  // If we don't have enough in the same category, fill with others
  if (relatedProducts.length < 4) {
    const additional = products.filter(p => p.id !== product.id && !relatedProducts.includes(p));
    relatedProducts.push(...additional.slice(0, 4 - relatedProducts.length));
  }

  return (
    <div ref={containerRef} className="bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to={`/shop?category=${product.category}`} className="hover:text-foreground capitalize">{product.category}</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-foreground">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:w-20 lg:w-24 shrink-0 hide-scrollbar">
              {[1, 2, 3].map((idx, i) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(i)}
                  className={`relative aspect-[3/4] w-20 md:w-full shrink-0 overflow-hidden bg-secondary border transition-colors ${activeImage === i ? 'border-foreground' : 'border-transparent hover:border-border'}`}
                >
                  <img 
                    alt={`${product.title} thumbnail ${idx}`}
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[pdp-title] fine jewelry view ${idx}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  {activeImage === i && <div className="absolute inset-0 bg-black/5"></div>}
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="relative aspect-[3/4] flex-1 bg-secondary overflow-hidden">
              <img 
                alt={product.title}
                data-strk-img-id={`pdp-main-${product.id}-${activeImage}`}
                data-strk-img={`[pdp-title] fine jewelry view ${activeImage + 1}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col pt-2 md:pt-4">
            <h1 id="pdp-title" className="font-serif text-3xl md:text-4xl tracking-wide uppercase mb-4">{product.title}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl font-medium">${product.price.toFixed(2)}</span>
              <div className="flex items-center gap-1 text-accent">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm text-muted-foreground ml-1">{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <span className="block text-sm font-medium uppercase tracking-wider mb-4">Color Tone: <span className="text-muted-foreground capitalize font-normal">{variant}</span></span>
              <div className="flex gap-4">
                <button 
                  onClick={() => setVariant('gold')}
                  className={`w-12 h-12 rounded-full border-2 p-1 transition-all ${variant === 'gold' ? 'border-accent' : 'border-transparent hover:border-border'}`}
                  aria-label="Gold tone"
                >
                  <span className="block w-full h-full rounded-full bg-gradient-to-tr from-yellow-500 to-yellow-200 shadow-sm" />
                </button>
                <button 
                  onClick={() => setVariant('silver')}
                  className={`w-12 h-12 rounded-full border-2 p-1 transition-all ${variant === 'silver' ? 'border-accent' : 'border-transparent hover:border-border'}`}
                  aria-label="Silver tone"
                >
                  <span className="block w-full h-full rounded-full bg-gradient-to-tr from-gray-300 to-gray-100 shadow-sm" />
                </button>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-border h-14 shrink-0">
                <button 
                  type="button"
                  className="w-14 h-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button 
                  type="button"
                  className="w-14 h-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                className="flex-1 h-14 bg-accent text-accent-foreground hover:bg-accent/90 uppercase tracking-widest text-sm font-semibold"
              >
                Add to Cart
              </Button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border pt-4">
              <Accordion type="single" collapsible defaultValue="description">
                <AccordionItem value="description" className="border-border">
                  <AccordionTrigger className="text-sm uppercase tracking-wider hover:no-underline font-medium">Description</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-6">
                    {product.details}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="materials" className="border-border">
                  <AccordionTrigger className="text-sm uppercase tracking-wider hover:no-underline font-medium">Materials & Care</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-6">
                    <p className="mb-4">Crafted with {product.material}.</p>
                    <p>To preserve the shine and longevity of your pieces, we recommend removing jewelry before showering, swimming, or exercising. Avoid contact with perfumes, lotions, and cosmetics. Store in the provided pouch when not in use.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping" className="border-border">
                  <AccordionTrigger className="text-sm uppercase tracking-wider hover:no-underline font-medium">Shipping & Returns</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-6">
                    <p className="mb-4">Free worldwide shipping on all orders. Standard shipping takes 3-5 business days for US domestic orders, and 7-14 business days internationally.</p>
                    <p>We accept returns of unworn items in their original packaging within 30 days of delivery. Custom or engraved pieces are final sale.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You may also like */}
        <div>
          <h2 className="font-serif text-3xl mb-8 border-b border-border pb-4" id="related-title">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(relProduct => (
              <div key={relProduct.id} className="group flex flex-col">
                <Link to={`/product/${relProduct.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary block">
                  <img 
                    alt={relProduct.title}
                    data-strk-img-id={`related-${relProduct.id}-img1`}
                    data-strk-img={`[related-title] [related-${relProduct.id}-title] editorial flatlay`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </Link>
                <Link to={`/product/${relProduct.id}`}>
                  <h3 className="font-serif text-base leading-tight mb-1" id={`related-${relProduct.id}-title`}>{relProduct.title}</h3>
                  <p className="text-muted-foreground text-sm">${relProduct.price.toFixed(2)}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}