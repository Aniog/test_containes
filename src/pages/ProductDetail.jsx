import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, Heart, Share2, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import { Button } from '../components/ui/button';
import { useCart } from '../context/CartContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const ProductDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id) || products[0];
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    { src: product.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E", id: product.imgId },
    { src: product.image2 || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E", id: product.img2Id },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id, activeImage]);

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/collections" className="hover:text-foreground transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
          {/* Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible lg:w-20 shrink-0">
              {images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[3/4] w-20 shrink-0 bg-secondary overflow-hidden ${activeImage === idx ? 'ring-1 ring-foreground ring-offset-2' : 'opacity-70 hover:opacity-100'}`}
                >
                  <img 
                    src={img.src} 
                    alt={`${product.name} view ${idx + 1}`} 
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={`[prod-title] alternate view ${idx + 1}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="150"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="relative aspect-[3/4] w-full bg-secondary overflow-hidden shrink-0">
              <img 
                src={images[activeImage].src} 
                alt={product.name} 
                data-strk-img-id={`main-${images[activeImage].id}`}
                data-strk-img={`[prod-desc] [prod-title] ${activeImage === 1 ? 'lifestyle alternate' : ''}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col max-w-xl">
            <h1 id="prod-title" className="font-serif text-3xl md:text-4xl uppercase tracking-widest mb-4 text-foreground">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <p className="text-xl font-medium">${product.price}</p>
              <div className="flex gap-1 text-accent items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-xs text-muted-foreground ml-2 uppercase tracking-widest">(24 Reviews)</span>
              </div>
            </div>

            <p id="prod-desc" className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-foreground font-medium mb-3">
                Metal: <span className="text-muted-foreground">{selectedVariant} Tone</span>
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedVariant('Gold')}
                  className={`w-10 h-10 rounded-full border-2 bg-[#D4AF37] ${selectedVariant === 'Gold' ? 'border-foreground p-1' : 'border-transparent'}`}
                  aria-label="Gold Tone"
                >
                  <span className={`block w-full h-full rounded-full ${selectedVariant === 'Gold' ? 'border border-white/50' : ''}`}></span>
                </button>
                <button 
                  onClick={() => setSelectedVariant('Silver')}
                  className={`w-10 h-10 rounded-full border-2 bg-[#C0C0C0] ${selectedVariant === 'Silver' ? 'border-foreground p-1' : 'border-transparent'}`}
                  aria-label="Silver Tone"
                >
                  <span className={`block w-full h-full rounded-full ${selectedVariant === 'Silver' ? 'border border-white/50' : ''}`}></span>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center border border-border w-max">
                <button 
                  className="p-4 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-4 text-sm font-medium min-w-[3rem] text-center">{quantity}</span>
                <button 
                  className="p-4 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <Button 
                onClick={() => addToCart(product, quantity, selectedVariant)}
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground rounded-none uppercase tracking-widest py-7 sm:py-0"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            {/* Utility links */}
            <div className="flex items-center gap-6 mb-12 text-sm text-muted-foreground">
              <button className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Heart className="w-4 h-4" /> Add to Wishlist
              </button>
              <button className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full border-t border-border">
              <AccordionItem value="details">
                <AccordionTrigger className="uppercase tracking-widest text-sm hover:no-underline py-5">
                  Details
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <ul className="list-disc pl-5 space-y-2">
                    {product.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger className="uppercase tracking-widest text-sm hover:no-underline py-5">
                  Materials & Care
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                  <p>Our demi-fine jewelry is crafted with a thick layer of 18K solid gold over a sterling silver or brass base, ensuring superior durability and shine.</p>
                  <p>To maintain your pieces:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Remove before swimming, showering, or exercising</li>
                    <li>Avoid direct contact with perfumes, lotions, and cosmetics</li>
                    <li>Store in the provided pouch when not in use</li>
                    <li>Gently wipe with a soft cloth to clean</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="uppercase tracking-widest text-sm hover:no-underline py-5">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                  <p><strong>Free Standard Shipping</strong> on all domestic orders over $50. Arrives in 3-5 business days.</p>
                  <p><strong>Express Shipping</strong> available for $15. Arrives in 1-2 business days.</p>
                  <p>We accept returns of unworn, perfect condition items with original packaging within 30 days of delivery. Custom or engraved items are final sale.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="border-t border-border/50 pt-20">
          <div className="flex justify-center mb-12">
            <h2 id="related-title" className="font-serif text-3xl md:text-4xl text-foreground text-center">You May Also Like</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group relative group/card flex flex-col">
                <Link to={`/products/${p.id}`} className="block relative aspect-[3/4] mb-4 bg-secondary overflow-hidden">
                  <img 
                    src={p.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                    alt={p.name}
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`[related-name-${p.id}] [related-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover/card:opacity-0 absolute inset-0 z-10"
                  />
                  <img 
                    src={p.image2 || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                    alt={`${p.name} alternate`}
                    data-strk-img-id={`related-alt-${p.id}`}
                    data-strk-img={`alternate lifestyle view [related-name-${p.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover absolute inset-0 z-0"
                  />
                </Link>
                <div className="text-center mt-auto flex flex-col">
                  <h3 id={`related-name-${p.id}`} className="font-serif text-sm uppercase tracking-widest mb-2 line-clamp-1">{p.name}</h3>
                  <p className="text-muted-foreground text-sm font-medium">${p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
