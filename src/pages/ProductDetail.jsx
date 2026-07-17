import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronRight, Star } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import { useCartStore } from '../lib/store';
import { seedProducts } from '../lib/data';
import { cn } from '../lib/utils';
import ProductCard from '../components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const addToCart = useCartStore((state) => state.addToCart);
  const containerRef = useRef(null);

  useEffect(() => {
    // In a real app, fetch the product based on ID. 
    // Here we find it from seed data.
    const found = seedProducts.find(p => p.id === id);
    if (found) {
      setProduct(found);
      setQuantity(1);
      window.scrollTo(0,0);
    }
  }, [id]);

  useEffect(() => {
    if (product) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [product]);

  if (!product) return (
    <div className="pt-32 pb-16 min-h-[50vh] flex items-center justify-center">
      <p className="text-muted-foreground uppercase tracking-widest">Product not found.</p>
    </div>
  );

  const relatedProducts = seedProducts.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-24 pb-16" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center text-xs tracking-widest uppercase text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight size={12} className="mx-2" />
          <Link to="/shop" className="hover:text-foreground">Shop</Link>
          <ChevronRight size={12} className="mx-2" />
          <Link to={`/shop/${product.category.toLowerCase()}`} className="hover:text-foreground">{product.category}</Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[4/5] bg-secondary/30 relative overflow-hidden rounded">
              <img 
                data-strk-img-id={product.hoverId}
                data-strk-img={product.hoverQuery}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((thumb, index) => (
                <div key={thumb} className="aspect-square bg-secondary/30 relative overflow-hidden rounded cursor-pointer border hover:border-accent transition-colors">
                  <img 
                    data-strk-img-id={product.thumbIds[index]}
                    data-strk-img={`${product.imageQuery} detail angle ${thumb}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    alt={`${product.name} thumbnail ${thumb}`}
                    className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col pt-4 lg:pt-10">
            <h1 className="font-serif text-3xl md:text-4xl tracking-widest uppercase mb-4 text-foreground">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl">${product.price}</span>
              <div className="flex items-center text-accent">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <span className="text-xs text-muted-foreground ml-2 uppercase tracking-wide">(24)</span>
              </div>
            </div>

            <p className="font-light text-foreground/80 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest mb-3 block">Color: <span className="font-light ml-1">{variant}</span></span>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((color) => (
                  <button
                    key={color}
                    onClick={() => setVariant(color)}
                    className={cn(
                      "px-6 py-2 border text-sm uppercase tracking-wider transition-colors",
                      variant === color 
                        ? "border-foreground bg-foreground text-background" 
                        : "border-border hover:border-foreground/50 text-foreground"
                    )}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 border-t border-b border-border py-8">
              <div className="flex items-center border border-border sm:w-1/3">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-4 hover:bg-secondary/50 transition-colors flex-1 flex justify-center text-muted-foreground hover:text-foreground"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-4 text-center font-medium w-12">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-4 hover:bg-secondary/50 transition-colors flex-1 flex justify-center text-muted-foreground hover:text-foreground"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button 
                onClick={() => addToCart(product, variant, quantity)}
                className="bg-accent hover:bg-accent/90 text-white uppercase tracking-widest text-sm font-semibold sm:w-2/3 py-4 transition-colors"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <Accordion.Root type="single" collapsible className="w-full" defaultValue="details">
              
              <Accordion.Item value="details" className="border-b border-border py-4">
                <Accordion.Header>
                  <Accordion.Trigger className="flex justify-between items-center w-full uppercase tracking-widest text-sm font-semibold group">
                    <span>Details & Materials</span>
                    <Plus size={16} className="text-muted-foreground group-data-[state=open]:rotate-45 transition-transform duration-300" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pt-4 pb-2 text-sm text-foreground/80 font-light leading-relaxed data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Materials: {product.materials}</li>
                    <li>{product.details}</li>
                    <li>Designed in our London studio</li>
                  </ul>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="shipping" className="border-b border-border py-4">
                <Accordion.Header>
                  <Accordion.Trigger className="flex justify-between items-center w-full uppercase tracking-widest text-sm font-semibold group">
                    <span>Shipping & Returns</span>
                    <Plus size={16} className="text-muted-foreground group-data-[state=open]:rotate-45 transition-transform duration-300" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pt-4 pb-2 text-sm text-foreground/80 font-light leading-relaxed data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden">
                  <p className="mb-2">Free standard shipping on all orders worldwide.</p>
                  <p>We offer a 30-day return policy for unworn items in their original packaging. Custom pieces are non-refundable.</p>
                </Accordion.Content>
              </Accordion.Item>

            </Accordion.Root>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-32 border-t border-border pt-16">
          <h2 className="font-serif text-3xl tracking-wide uppercase text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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