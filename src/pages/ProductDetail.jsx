import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star, Minus, Plus } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCartStore();
  const containerRef = useRef(null);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('gold');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product]);

  if (!product) {
    return (
      <div className="pt-32 min-h-screen text-center flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl mb-4">Product not found.</h1>
        <Link to="/shop">
          <Button className="bg-brand-charcoal text-white rounded-none uppercase tracking-widest text-xs px-8">Return to Shop</Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({ ...product, variant: selectedVariant, quantity });
    // Reset quantity after adding
    setQuantity(1);
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  // If not enough in same category, just take some others
  if (relatedProducts.length < 4) {
      const more = products.filter(p => p.id !== product.id && !relatedProducts.includes(p)).slice(0, 4 - relatedProducts.length);
      relatedProducts.push(...more);
  }

  return (
    <div className="pt-20 bg-background min-h-screen" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8 py-12 lg:py-16">
        
        {/* Breadcrumb */}
        <div className="flex text-xs uppercase tracking-widest text-brand-muted mb-8 space-x-2">
          <Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-brand-charcoal transition-colors">{product.category}</Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
          
          {/* Image Gallery */}
          <div className="flex-1 flex flex-col md:flex-row-reverse gap-4 md:gap-6">
            <div className="flex-1 bg-stone-100 aspect-[3/4] relative overflow-hidden">
               <img 
                  data-strk-img-id={`pdp-${product.id}-main`}
                  data-strk-img={`[pdp-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  style={{backgroundColor: '#e5e5e5'}}
                />
            </div>
            
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 md:w-24 overflow-x-auto md:overflow-x-visible items-start">
              {[1, 2, 3].map((num) => (
                <button key={num} className={`w-20 md:w-full aspect-[3/4] bg-stone-100 flex-shrink-0 border-b-2 ${num === 1 ? 'border-brand-charcoal' : 'border-transparent opacity-60 hover:opacity-100'} transition-all`}>
                  <img 
                    data-strk-img-id={`pdp-${product.id}-thumb-${num}`}
                    data-strk-img={`[pdp-title] detail ${num}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E`}
                    alt={`${product.name} detail ${num}`}
                    className="w-full h-full object-cover"
                    style={{backgroundColor: '#d5d5d5'}}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 max-w-lg lg:py-8">
            <h1 id="pdp-title" className="font-serif text-3xl md:text-4xl uppercase tracking-[0.1em] mb-4 text-brand-charcoal">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl font-medium">${product.price}</span>
              <div className="flex items-center gap-1">
                <div className="flex text-brand-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <span className="text-xs text-brand-muted underline underline-offset-2 ml-1">(24 Reviews)</span>
              </div>
            </div>

            <p className="text-brand-muted font-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-brand-charcoal font-semibold mb-3 block">Color Tone: {selectedVariant === 'gold' ? '18K Gold' : 'Sterling Silver'}</span>
              <div className="flex gap-3">
                <button 
                  onClick={() => setSelectedVariant('gold')}
                  className={`w-8 h-8 rounded-full border-2 ${selectedVariant === 'gold' ? 'border-brand-charcoal p-0.5' : 'border-transparent'}`}
                >
                  <span className="block w-full h-full rounded-full bg-[#E5C37A]"></span>
                </button>
                <button 
                  onClick={() => setSelectedVariant('silver')}
                  className={`w-8 h-8 rounded-full border-2 ${selectedVariant === 'silver' ? 'border-brand-charcoal p-0.5' : 'border-transparent'}`}
                >
                  <span className="block w-full h-full rounded-full bg-[#D4D4D4]"></span>
                </button>
              </div>
            </div>

            {/* Add to Cart Actions */}
            <div className="flex gap-4 mb-12">
              <div className="flex items-center border border-brand-border h-14">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 text-brand-muted hover:text-brand-charcoal transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 text-brand-muted hover:text-brand-charcoal transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button 
                onClick={handleAddToCart}
                className="flex-1 h-14 bg-brand-charcoal text-white hover:bg-brand-black rounded-none uppercase tracking-[0.2em] text-xs font-semibold"
              >
                Add to Cart
              </Button>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-brand-border">
                <AccordionTrigger className="text-xs uppercase tracking-widest hover:no-underline hover:text-brand-gold">
                  Description
                </AccordionTrigger>
                <AccordionContent className="text-brand-muted leading-relaxed font-light">
                  {product.description} A true staple piece designed to elevate your everyday look. Each piece is carefully inspected to ensure it meets our strict quality standards.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-brand-border">
                <AccordionTrigger className="text-xs uppercase tracking-widest hover:no-underline hover:text-brand-gold">
                  Materials & Care
                </AccordionTrigger>
                <AccordionContent className="text-brand-muted leading-relaxed font-light">
                  <p className="mb-2"><strong className="text-brand-charcoal font-medium">Materials:</strong> {product.materials}</p>
                  <p>Our jewelry is crafted to be water-resistant and hypoallergenic. However, to maintain its pristine shine, we recommend removing your pieces before swimming, showering, or applying lotions and perfumes. Periodically clean with a soft cloth.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-brand-border">
                <AccordionTrigger className="text-xs uppercase tracking-widest hover:no-underline hover:text-brand-gold">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent className="text-brand-muted leading-relaxed font-light">
                  Free standard shipping on all global orders over $50. Domestic orders typically arrive within 3-5 business days. We gladly accept returns of unworn, undamaged merchandise within 30 days of delivery.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        <section className="py-12 border-t border-brand-border">
          <h2 className="font-serif text-2xl text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.map((p) => (
               <Link key={p.id} to={`/product/${p.id}`} className="group group/card cursor-pointer flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
                  <img 
                    data-strk-img-id={`related-${p.id}-img`}
                    data-strk-img={`[related-${p.id}-name]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E`}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    style={{backgroundColor: '#e5e5e5'}}
                  />
                   <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/5 transition-colors duration-300" />
                </div>
                
                <div className="flex flex-col flex-1 items-center text-center">
                  <h3 id={`related-${p.id}-name`} className="font-serif uppercase tracking-widest text-xs lg:text-sm mb-1 line-clamp-1">{p.name}</h3>
                  <span className="text-brand-charcoal font-medium text-xs lg:text-sm mt-auto">${p.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProductDetail;