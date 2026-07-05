import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, products } from '@/data/products';
import { useState, useEffect, useRef } from 'react';
import { useCartStore } from '@/store/cartStore';
import { Star, Minus, Plus, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(parseInt(id));
  const containerRef = useRef(null);
  
  const [selectedTone, setSelectedTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const addItem = useCartStore(state => state.addItem);
  const setIsOpen = useCartStore(state => state.setIsOpen);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    // Re-run image loading whenever activeImage or product changes
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id, activeImage]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Button onClick={() => navigate('/shop')} variant="outline" className="uppercase tracking-widest text-xs">
          Return to Shop
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedTone);
    toast.success(`${product.name} added to cart!`);
    setIsOpen(true);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 pb-20">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6 mb-8 text-xs text-muted-foreground uppercase tracking-widest flex items-center">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2" />
        <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
        <ChevronRight className="w-3 h-3 mx-2" />
        <span className="text-foreground truncate max-w-[200px]">{product.name}</span>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: Gallery */}
          <div className="w-full lg:w-[55%] flex flex-col md:flex-row-reverse gap-4">
            {/* Main Image */}
            <div className="w-full bg-secondary aspect-[4/5] overflow-hidden relative">
              <img
                alt={product.name}
                data-strk-img-id={`pdp-main-${product.id}-${activeImage}`}
                data-strk-img={`[pdp-title] ${activeImage === 0 ? 'front view' : 'model wearing'} jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 w-full md:w-24 flex-shrink-0">
              {[0, 1, 2].map((idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-20 md:w-full aspect-[4/5] bg-secondary flex-shrink-0 border-2 transition-colors ${activeImage === idx ? 'border-foreground' : 'border-transparent hover:border-foreground/30'}`}
                >
                  <img
                    alt={`${product.name} view ${idx + 1}`}
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[pdp-title] ${idx === 0 ? 'front view' : 'model wearing'} jewelry thumbnail`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <h1 id="pdp-title" className="font-serif text-3xl md:text-4xl uppercase tracking-wider leading-tight mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <p className="text-xl font-medium">${product.price.toFixed(2)}</p>
              <div className="flex items-center text-primary">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                <span className="text-xs text-muted-foreground ml-2">(124 Reviews)</span>
              </div>
            </div>

            <p className="text-muted-foreground font-light leading-relaxed mb-8 text-sm">
              An elegant staple for your collection. {product.name} features refined detailing and a versatile design that easily transitions from day to night. Sustainably crafted in 18k gold vermeil.
            </p>

            {/* Variants */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest mb-3">Tone: <span className="font-medium text-foreground capitalize ml-1">{selectedTone}</span></p>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setSelectedTone('gold')}
                  className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${selectedTone === 'gold' ? 'border-foreground' : 'border-border hover:border-foreground/50'}`}
                >
                  <span className="block w-10 h-10 rounded-full bg-[#d4af37]" />
                </button>
                <button 
                  onClick={() => setSelectedTone('silver')}
                  className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${selectedTone === 'silver' ? 'border-foreground' : 'border-border hover:border-foreground/50'}`}
                >
                  <span className="block w-10 h-10 rounded-full bg-[#c0c0c0]" />
                </button>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest mb-3">Quantity</p>
              <div className="flex items-center border border-border w-32">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-3 hover:bg-secondary transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="flex-1 text-center font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-3 hover:bg-secondary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button 
              size="lg" 
              onClick={handleAddToCart}
              className="w-full py-6 uppercase tracking-widest text-sm mb-12"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </Button>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger className="uppercase tracking-widest text-xs hover:no-underline">Description</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed text-sm">
                  {product.name} is designed with everyday elegance in mind. Its quiet luxury aesthetic ensures it pairs perfectly with both casual wear and evening attire. Designed in our studio and crafted by expert artisans.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger className="uppercase tracking-widest text-xs hover:no-underline">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed text-sm">
                  Crafted in 18k Gold Vermeil over a 925 Sterling Silver base for lasting durability. Hypoallergenic and nickel-free. 
                  <br/><br/>
                  To maintain the shine, avoid contact with perfumes, lotions, and water. Store in the provided Velmora pouch when not in use.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="uppercase tracking-widest text-xs hover:no-underline">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed text-sm">
                  Enjoy free worldwide shipping on all orders. Standard delivery takes 3-5 business days. 
                  <br/><br/>
                  Not perfectly in love? We accept returns within 30 days of purchase. Items must be unworn and in their original packaging.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="container mx-auto px-4 md:px-6 mt-32 border-t pt-20 border-border">
        <h2 id="related-title" className="font-serif text-2xl md:text-3xl text-center mb-12">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((p) => (
            <div key={p.id} className="group flex flex-col">
              <Link to={`/product/${p.id}`} className="relative aspect-[4/5] bg-secondary mb-4 overflow-hidden block">
                <img
                  alt={p.name}
                  data-strk-img-id={`related-${p.id}`}
                  data-strk-img={`[related-item-${p.id}-title] [related-title]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="text-center flex flex-col flex-1">
                <h3 id={`related-item-${p.id}-title`} className="font-serif uppercase tracking-wider text-xs md:text-sm mb-2">{p.name}</h3>
                <p className="text-muted-foreground text-xs md:text-sm font-light">${p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;