import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Minus, Plus, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ProductCard } from '@/components/product/ProductCard';

export const Product = () => {
  const { id } = useParams();
  const product = products.find(p => p.slug === id);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    // Reset state on unmount/remount for new product
    setQuantity(1);
    setVariant('gold');
    const frameId = window.requestAnimationFrame(() => {
      const config = strkImgConfig || {};
      ImageHelper.loadImages(config, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Button asChild variant="outline">
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({ ...product, quantity, variant });
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-20 bg-background" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-8 py-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-foreground">Shop</Link>
        <span className="mx-2">/</span>
        <Link to={`/shop?category=${product.category}`} className="hover:text-foreground capitalize">{product.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="container mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-secondary relative">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
                data-strk-img={`[pd-name]`}
                data-strk-img-id={`pd-main-${product.id}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
              />
            </div>
            {/* Thumbnails placeholder */}
            <div className="flex gap-4">
              {[1,2,3].map(i => (
                <div key={i} className="aspect-square w-20 md:w-24 bg-secondary relative cursor-pointer border-2 border-transparent hover:border-primary transition-colors">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${i}`}
                    className="w-full h-full object-cover"
                    data-strk-img={`[pd-name]`}
                    data-strk-img-id={`pd-thumb-${product.id}-${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col py-4 md:py-8 lg:pr-12">
            <h1 id="pd-name" className="font-serif text-3xl md:text-4xl tracking-widest uppercase mb-4">{product.name}</h1>
            <p className="text-xl mb-4">${product.price}</p>
            
            <div className="flex items-center gap-4 mb-8 text-sm">
              <div className="flex text-primary">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                 ))}
              </div>
              <span className="text-muted-foreground">{product.reviews} reviews</span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <span className="block text-sm uppercase tracking-wider font-semibold mb-4">Metal: {variant}</span>
              <div className="flex gap-4">
                <button 
                  className={`w-12 h-12 rounded-full border-2 focus:outline-none transition-all ${variant === 'gold' ? 'border-foreground p-1' : 'border-transparent hover:border-muted p-1'}`}
                  onClick={() => setVariant('gold')}
                  title="18K Gold"
                >
                  <div className="w-full h-full rounded-full bg-[#E5C158]" />
                </button>
                <button 
                  className={`w-12 h-12 rounded-full border-2 focus:outline-none transition-all ${variant === 'silver' ? 'border-foreground p-1' : 'border-transparent hover:border-muted p-1'}`}
                  onClick={() => setVariant('silver')}
                  title="Sterling Silver"
                >
                  <div className="w-full h-full rounded-full bg-[#E0E0E0]" />
                </button>
              </div>
            </div>

            {/* Add to Cart Line */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-input h-12 w-32 shrink-0">
                <button 
                  className="px-4 h-full flex items-center justify-center hover:bg-secondary transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center font-medium">{quantity}</span>
                <button 
                  className="px-4 h-full flex items-center justify-center hover:bg-secondary transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button 
                onClick={handleAddToCart}
                className="flex-1 h-12 text-sm tracking-widest uppercase"
              >
                Add to Cart
              </Button>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="uppercase tracking-wider">Description</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {product.description} Carefully crafted to endure daily wear while maintaining its brilliant finish.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="uppercase tracking-wider">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                  <p>Our jewelry is crafted from high-quality materials carefully selected for their durability and beauty. To maintain the shine, avoid contact with water, perfumes, and lotions. Store in the custom Velmora pouch when not in use.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="uppercase tracking-wider">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-2">Free worldwide shipping on all orders.</p>
                  <p>We accept returns within 30 days of delivery for unworn items in their original packaging. Custom or engraved pieces are final sale.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="py-20 border-t border-secondary bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-serif text-3xl mb-12 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
