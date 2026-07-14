import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/lib/data';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addToCart } = useStore();
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id) || products[0];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  return (
    <div ref={containerRef} className="pt-20 pb-24">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-8 text-sm text-muted-foreground flex items-center space-x-2">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24">
          
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-secondary relative overflow-hidden">
              <img
                data-strk-img-id={`${product.imageId}-main`}
                data-strk-img={product.image}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-secondary relative overflow-hidden">
                <img
                  data-strk-img-id={`${product.imageId}-alt1`}
                  data-strk-img={`${product.image} worn on model lifestyle`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} worn`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-secondary relative overflow-hidden">
                <img
                  data-strk-img-id={`${product.imageId}-alt2`}
                  data-strk-img={`${product.image} detail close up macro`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col pt-4 md:pt-12">
            <h1 id={`detail-name-${product.id}`} className="font-heading text-3xl md:text-4xl uppercase tracking-widest mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-xl font-medium">${product.price}</span>
              <div className="flex items-center space-x-2">
                <div className="flex text-[#d4af37]">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} className={`w-4 h-4 ${star <= Math.round(product.rating) ? 'fill-current' : 'fill-transparent border-current stroke-current stroke-1'}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>
            </div>

            <p id={`detail-desc-${product.id}`} className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-widest font-medium mb-3">Metal</h3>
              <div className="flex space-x-3">
                {['Gold', 'Silver'].map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border text-sm uppercase tracking-wider transition-colors ${
                      selectedVariant === variant 
                        ? 'border-primary bg-primary text-primary-foreground' 
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-12">
              <div className="flex items-center border border-border h-[50px]">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-secondary transition-colors"
                >
                  -
                </button>
                <span className="w-12 flex items-center justify-center font-medium">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-secondary transition-colors"
                >
                  +
                </button>
              </div>
              <Button 
                className="flex-1 rounded-none uppercase tracking-widest h-[50px] text-xs sm:text-sm"
                onClick={() => addToCart(product, selectedVariant, quantity)}
              >
                Add to Cart
              </Button>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger className="text-sm uppercase tracking-widest hover:no-underline font-medium">Description</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {product.description}
                  <ul className="list-disc pl-5 mt-4 space-y-1">
                    <li>Designed to be lightweight for everyday wear</li>
                    <li>Secured with our custom safety closure</li>
                    <li>Comes in our signature velvet gift box</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger className="text-sm uppercase tracking-widest hover:no-underline font-medium">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                  <p><strong className="text-foreground font-medium">Material:</strong> {product.material}</p>
                  <p>Our demi-fine jewelry is crafted with a thick layer of 18k gold over a solid sterling silver or brass core. This ensures long-lasting wear while keeping our pieces accessible.</p>
                  <p>To preserve the finish, avoid contact with water, perfumes, and lotions. Store in the provided pouch when not in wear.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-sm uppercase tracking-widest hover:no-underline font-medium">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                  <p>Free standard shipping on all orders over $50.</p>
                  <p>Standard delivery takes 3-5 business days. Expedited options available at checkout.</p>
                  <p>We accept returns within 30 days of delivery for unworn items in their original packaging. Earrings and pierced items are final sale for hygiene reasons.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 id="related-title" className="font-heading text-2xl mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group flex flex-col">
                <Link to={`/product/${p.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary w-full block">
                  <img
                    data-strk-img-id={`${p.imageId}-related`}
                    data-strk-img={p.image}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Button 
                      className="w-full bg-white/90 text-black hover:bg-white text-xs uppercase tracking-widest py-3 h-auto relative z-10"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(p, 'Gold', 1);
                      }}
                    >
                      Quick Add
                    </Button>
                  </div>
                </Link>
                <div className="text-center space-y-1">
                  <h3 id={`related-name-${p.id}`} className="font-heading text-xs tracking-widest uppercase">
                    <Link to={`/product/${p.id}`} className="hover:text-primary transition-colors">
                      {p.name}
                    </Link>
                  </h3>
                  <p id={`related-desc-${p.id}`} className="sr-only">{p.description}</p>
                  <p className="text-muted-foreground text-sm">${p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}