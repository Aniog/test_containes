import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useStore } from '@/store';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ProductCard from '@/components/products/ProductCard';
import { Star, Minus, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0]; // fallback to first product
  
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const { addToCart } = useStore();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
  };

  return (
    <div ref={containerRef} className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-8 flex gap-2">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to={`/collection?category=${product.category}`} className="hover:text-foreground">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-24">
          
          {/* Image Gallery */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="aspect-[4/5] bg-muted relative">
              <img 
                data-strk-img-id={product.imgId + '-main'}
                data-strk-img={`[${product.descId}] [${product.titleId}] fine gold jewelry editorial`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] bg-muted relative">
                <img 
                  data-strk-img-id={product.hoverImgId + '-detail'}
                  data-strk-img={`[${product.descId}] [${product.titleId}] fine gold jewelry worn on model`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] bg-muted relative border border-border flex items-center justify-center">
                 <p className="text-xs uppercase tracking-widest text-muted-foreground">Velmora</p>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 lg:pl-12 flex flex-col pt-4 md:pt-12 sticky top-24 h-fit">
            <h1 id={product.titleId} className="text-3xl md:text-4xl font-serif uppercase tracking-widest mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl">${product.price}</span>
              <div className="flex items-center text-primary gap-1 text-xs">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-muted-foreground ml-2">(124)</span>
              </div>
            </div>

            <p id={product.descId} className="text-muted-foreground leading-relaxed mb-8">
              {product.description}. Designed for everyday wear, this piece adds a touch of quiet luxury to any look. Layer it with your favorites or let it shine on its own.
            </p>

            <div className="mb-8">
              <p className="text-sm font-medium mb-3 uppercase tracking-widest">Select Tone</p>
              <div className="flex gap-3">
                <button 
                  className={`px-6 py-2 border text-sm transition-colors ${variant === 'Gold' ? 'border-foreground bg-foreground text-background' : 'border-border hover:border-foreground/50'}`}
                  onClick={() => setVariant('Gold')}
                >
                  18K Gold
                </button>
                <button 
                  className={`px-6 py-2 border text-sm transition-colors ${variant === 'Silver' ? 'border-foreground bg-foreground text-background' : 'border-border hover:border-foreground/50'}`}
                  onClick={() => setVariant('Silver')}
                >
                  Sterling Silver
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center justify-between border border-border sm:w-32 h-14 px-4">
                <button 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus size={16} />
                </button>
                <span className="text-sm font-medium">{quantity}</span>
                <button 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>
              <Button 
                size="lg" 
                className="flex-1 h-14 uppercase tracking-widest"
                onClick={handleAddToCart}
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-border">
                <AccordionTrigger className="font-serif text-lg py-4">Description</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Impeccably crafted, this demi-fine piece embodies the Velmora aesthetic—effortlessly chic and meant to be lived in. Each piece comes in our signature gift box, making it the perfect present for yourself or someone special.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-border">
                <AccordionTrigger className="font-serif text-lg py-4">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Crafted from 18K gold vermeil or sterling silver. Hypoallergenic and nickel-free. To maintain its shine, avoid contact with lotions, perfumes, and excessive water. Store in the provided pouch when not in use.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-border">
                <AccordionTrigger className="font-serif text-lg py-4">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Free standard shipping on all orders. Express shipping available at checkout. We accept returns within 30 days of delivery for unworn items in their original packaging.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* You May Also Like */}
        <div>
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}