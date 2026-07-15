import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Star, Heart, Share2, Check } from 'lucide-react';
import { products } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');

  const product = products.find(p => p.id === id) || products[0];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
    setSelectedImage(0);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to your bag`, {
      description: `${quantity} ${quantity > 1 ? 'items' : 'item'} total.`,
    });
  };

  const incrementQty = () => setQuantity(prev => prev + 1);
  const decrementQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="pt-32 pb-24" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-muted-foreground mb-12">
          <Link to="/" className="hover:text-velmora-gold">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold">All Jewelry</Link>
          <span>/</span>
          <span className="text-foreground font-semibold">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
          {/* Image Gallery */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-visible no-scrollbar">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    "w-20 h-20 md:w-24 md:h-24 shrink-0 bg-muted overflow-hidden border-2 transition-all",
                    selectedImage === idx ? "border-velmora-gold" : "border-transparent"
                  )}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1 aspect-[4/5] bg-muted overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest leading-tight text-foreground">
                  {product.name}
                </h1>
                <button className="p-2 hover:text-velmora-gold transition-colors">
                  <Heart className="w-6 h-6 stroke-[1px]" />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-serif text-2xl">${product.price}</p>
                <div className="flex items-center gap-1 text-velmora-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                  <span className="text-[10px] text-muted-foreground ml-1 uppercase tracking-widest">(12 Reviews)</span>
                </div>
              </div>
              <p className="text-secondary leading-relaxed text-sm">
                {product.description}
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-border">
              {/* Variant Selector */}
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-widest font-bold">Finish: {selectedVariant}</h4>
                <div className="flex gap-3">
                  {['Gold', 'Silver'].map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={cn(
                        "px-6 py-2 border text-[10px] uppercase tracking-widest transition-all",
                        selectedVariant === variant
                          ? "border-velmora-onyx bg-velmora-onyx text-white"
                          : "border-border hover:border-velmora-gold"
                      )}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and CTA */}
              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-widest font-bold">Quantity</h4>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border h-12">
                    <button onClick={decrementQty} className="w-12 h-full flex items-center justify-center hover:bg-muted transition-colors">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                    <button onClick={incrementQty} className="w-12 h-full flex items-center justify-center hover:bg-muted transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <Button 
                    onClick={handleAddToCart}
                    className="flex-1 h-12 bg-velmora-onyx hover:bg-velmora-gold text-white uppercase tracking-widest text-xs transition-colors rounded-none"
                  >
                    Add to Bag
                  </Button>
                </div>
              </div>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full pt-8">
              <AccordionItem value="description">
                <AccordionTrigger className="text-[10px] uppercase tracking-widest font-bold py-4">Details</AccordionTrigger>
                <AccordionContent className="text-secondary text-sm leading-relaxed pb-6">
                  Experience the pinnacle of demi-fine jewelry. This piece is meticulously hand-finished and designed to be a permanent fixture in your collection.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger className="text-[10px] uppercase tracking-widest font-bold py-4">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-secondary text-sm leading-relaxed pb-6 space-y-4">
                  <p>• 18K Gold Plated or Silver Tone finish</p>
                  <p>• Hypoallergenic and nickel-free</p>
                  <p>• Avoid contact with water, perfumes, and lotions. Store in a cool, dry place when not wearing.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-[10px] uppercase tracking-widest font-bold py-4">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-secondary text-sm leading-relaxed pb-6">
                  We offer free worldwide shipping on all orders. Returns are accepted within 30 days of delivery for a full refund or exchange.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div className="text-center space-y-2">
                <div className="w-10 h-10 mx-auto rounded-full bg-velmora-gold/10 flex items-center justify-center text-velmora-gold">
                  <Check className="w-5 h-5" />
                </div>
                <p className="text-[8px] uppercase tracking-widest font-bold">18K Gold</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-10 h-10 mx-auto rounded-full bg-velmora-gold/10 flex items-center justify-center text-velmora-gold">
                  <Share2 className="w-5 h-5" />
                </div>
                <p className="text-[8px] uppercase tracking-widest font-bold">Eco Packaging</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-10 h-10 mx-auto rounded-full bg-velmora-gold/10 flex items-center justify-center text-velmora-gold">
                  <Star className="w-5 h-5" />
                </div>
                <p className="text-[8px] uppercase tracking-widest font-bold">Quality Assured</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl">You May Also Like</h2>
            <div className="w-24 h-px bg-velmora-gold mx-auto" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
