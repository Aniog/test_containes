import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef(null);
  const addItem = useCart((state) => state.addItem);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const { data: response } = await client
          .from('Products')
          .select('*')
          .eq('slug', slug)
          .single();
        
        if (response?.success) {
          setProduct(response.data);
          setSelectedVariant(response.data.data.variants?.[0] || 'Gold');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);

  useEffect(() => {
    if (product) {
      window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
    }
  }, [product]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
    toast.success(`${product.data.name} added to cart`);
  };

  if (loading) return (
    <div className="pt-32 min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  );

  if (!product) return (
    <div className="pt-32 min-h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-serif">Product Not Found</h1>
      <Button asChild>
        <Link to="/shop">Back to Shop</Link>
      </Button>
    </div>
  );

  const { name, price, description, materials, shipping, variants, images } = product.data;

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6" ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left: Image Gallery */}
        <div className="space-y-6">
          <div className="aspect-[4/5] bg-secondary overflow-hidden relative">
            <img
              data-strk-img-id={`pdp-main-img-${product.id}`}
              data-strk-img={`[pdp-name] jewelry ${activeImage === 0 ? 'single product' : 'on model detail'}`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt={name}
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="flex space-x-4">
            {[0, 1].map((idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`w-20 aspect-square bg-secondary overflow-hidden border ${activeImage === idx ? 'border-primary' : 'border-transparent'}`}
              >
                <img
                  data-strk-img-id={`pdp-thumb-${idx}-${product.id}`}
                  data-strk-img={`[pdp-name] jewelry ${idx === 0 ? 'product' : 'lifestyle'}`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`Thumbnail ${idx}`}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 id="pdp-name" className="text-4xl md:text-5xl font-serif leading-tight">{name}</h1>
            <div className="flex items-center space-x-6">
              <span className="text-2xl font-light">${price}</span>
              <div className="flex items-center space-x-1 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                <span className="text-[10px] tracking-widest text-muted-foreground ml-2">(24 Reviews)</span>
              </div>
            </div>
            <p className="text-muted-foreground font-light leading-relaxed leading-relaxed">
              {description}
            </p>
          </div>

          <div className="space-y-6">
            {variants && variants.length > 0 && (
              <div className="space-y-3">
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase">Tone: {selectedVariant}</span>
                <div className="flex space-x-3">
                  {variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-6 py-2 text-[10px] tracking-widest uppercase font-bold border transition-all ${
                        selectedVariant === v ? 'bg-primary text-white border-primary' : 'bg-transparent text-primary border-border hover:border-accent'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center space-x-6">
              <div className="flex items-center border border-border h-14">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 hover:text-accent"
                >
                  -
                </button>
                <span className="w-8 text-center text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 hover:text-accent"
                >
                  +
                </button>
              </div>
              <Button 
                onClick={handleAddToCart}
                className="flex-1 h-14 rounded-none bg-primary hover:bg-black text-white text-xs tracking-[0.2em] uppercase transition-all"
              >
                Add to Cart
              </Button>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full border-t border-border mt-12">
            <AccordionItem value="description" className="border-b border-border">
              <AccordionTrigger className="font-serif text-lg py-6 hover:no-underline hover:text-accent">Description</AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6">
                {description}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="materials" className="border-b border-border">
              <AccordionTrigger className="font-serif text-lg py-6 hover:no-underline hover:text-accent">Materials & Care</AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6 text-sm">
                {materials}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping" className="border-b border-border">
              <AccordionTrigger className="font-serif text-lg py-6 hover:no-underline hover:text-accent">Shipping & Returns</AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6 text-sm">
                {shipping}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
