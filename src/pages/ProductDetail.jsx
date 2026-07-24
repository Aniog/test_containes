import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Shield, Truck, RefreshCw, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { ImageHelper, DataClient } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import ProductCard from '../components/ProductCard';
import { useCart } from '../components/CartContext';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ProductDetail = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product, activeImage, related]);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const { data: response, error } = await client
          .from('Product')
          .select('*')
          .eq('id', id)
          .single();
        
        if (error) throw error;
        setProduct(response?.data);

        // Fetch related products
        const { data: relResponse } = await client
          .from('Product')
          .select('*')
          .neq('id', id)
          .limit(4);
        setRelated(relResponse?.data?.list || []);
      } catch (err) {
        console.error('Failed to fetch product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return (
    <div className="pt-32 px-6 container mx-auto flex flex-col items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 animate-pulse">
        <div className="aspect-[3/4] bg-stone-100" />
        <div className="flex flex-col gap-8">
           <div className="h-8 bg-stone-100 w-3/4" />
           <div className="h-6 bg-stone-100 w-1/4" />
           <div className="h-32 bg-stone-100 w-full" />
        </div>
      </div>
    </div>
  );

  if (!product) return (
    <div className="pt-48 pb-48 text-center">
      <h2 className="text-2xl font-serif italic mb-4">Piece not found.</h2>
      <Button asChild variant="link" className="uppercase tracking-widest text-xs">
        <Link to="/shop">Back to Shop</Link>
      </Button>
    </div>
  );

  const data = product.data;
  const images = [
    data.image,
    data.image_hover || data.image,
    'jewelry gold aesthetic',
    'worn on model mockup'
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 container mx-auto max-w-7xl">
      <div className="flex items-center gap-2 mb-12 text-[10px] uppercase tracking-[0.2em] text-muted">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/shop" className="hover:text-primary transition-colors">Jewelry</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-primary truncate">{data.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left: Gallery */}
        <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-6">
          <div className="flex md:flex-col gap-4 overflow-x-auto no-scrollbar md:overflow-y-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`flex-shrink-0 w-20 aspect-[3/4] border transition-all duration-300 ${
                  activeImage === idx ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img 
                  className="w-full h-full object-cover"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  data-strk-img-id={`velmora-detail-thumb-${id}-${idx}`}
                  data-strk-img={`[detail-title-${id}] product thumb ${idx + 1}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  alt={`Thumbnail ${idx + 1}`}
                />
              </button>
            ))}
          </div>
          
          <div className="flex-1 aspect-[3/4] bg-stone-100 relative group overflow-hidden">
             <img 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                data-strk-img-id={`velmora-detail-main-${id}`}
                data-strk-img={`[detail-title-${id}] [detail-desc-${id}] Gold jewelry professional studio photography`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                alt={data.name}
              />
              <button 
                onClick={() => setActiveImage(prev => (prev === 0 ? images.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setActiveImage(prev => (prev === images.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
          </div>
        </div>

        {/* Right: Info */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="mb-8">
            <div className="flex items-center gap-1 mb-4 text-accent">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
              <span className="ml-2 text-[10px] uppercase tracking-widest text-muted">24 Reviews</span>
            </div>
            <h1 id={`detail-title-${id}`} className="text-3xl font-serif uppercase tracking-[0.2em] mb-4">{data.name}</h1>
            <p id={`detail-price-${id}`} className="text-xl font-sans tracking-widest text-primary mb-6">${data.price}</p>
            <p id={`detail-desc-${id}`} className="text-sm text-muted leading-relaxed font-sans tracking-wide mb-8">
              Inspired by the delicate structures found in nature, the {data.name} is a testament to understated elegance. Meticulously crafted from high-quality 18K gold plated brass, it features intricate details that catch the light beautifully.
            </p>
          </div>

          <div className="mb-10">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold block mb-4">Metal Finish</span>
            <div className="flex gap-4">
              {['gold', 'silver'].map(finish => (
                <button
                  key={finish}
                  onClick={() => setSelectedVariant(finish)}
                  className={`px-8 py-2 text-[10px] uppercase tracking-widest border transition-all ${
                    selectedVariant === finish ? 'border-primary bg-primary text-white shadow-md' : 'border-stone-200 text-muted hover:border-primary'
                  }`}
                >
                  {finish}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center border border-stone-200 h-14">
              <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))} className="px-6 py-1 hover:bg-stone-50 font-medium">-</button>
              <span className="text-sm w-12 text-center font-medium">{quantity}</span>
              <button onClick={() => setQuantity(prev => prev + 1)} className="px-6 py-1 hover:bg-stone-50 font-medium">+</button>
            </div>
            <Button 
              onClick={() => addToCart({ ...data, id: product.id, quantity })}
              className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-none h-14 uppercase tracking-[0.25em] text-xs"
            >
              Add to Bag
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { icon: Truck, text: 'Fast Delivery' },
              { icon: RefreshCw, text: 'Easy Returns' },
              { icon: Shield, text: '2 Year Warranty' }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 bg-stone-50/50 gap-2">
                <feature.icon className="w-4 h-4 text-muted/60" />
                <span className="text-[9px] uppercase tracking-widest text-muted">{feature.text}</span>
              </div>
            ))}
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="description" className="border-stone-100">
              <AccordionTrigger className="text-[10px] uppercase tracking-[0.2em] font-bold hover:no-underline">Details</AccordionTrigger>
              <AccordionContent className="text-sm text-muted font-sans leading-relaxed tracking-wide pt-2">
                • 18K Gold Plated Brass base<br />
                • Hand-finished detailing<br />
                • Hypoallergenic and nickel-free<br />
                • Signature Velmora branding
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="care" className="border-stone-100">
              <AccordionTrigger className="text-[10px] uppercase tracking-[0.2em] font-bold hover:no-underline">Care Guide</AccordionTrigger>
              <AccordionContent className="text-sm text-muted font-sans leading-relaxed tracking-wide pt-2">
                To keep your jewelry looking its best, avoid contact with perfumes, lotions, and water. Store in the provided pouch when not in wear.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping" className="border-stone-100">
              <AccordionTrigger className="text-[10px] uppercase tracking-[0.2em] font-bold hover:no-underline">Shipping & Returns</AccordionTrigger>
              <AccordionContent className="text-sm text-muted font-sans leading-relaxed tracking-wide pt-2">
                Complimentary shipping on all orders over $75. We offer 30-day hassle-free returns for all unused items in their original packaging.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-32">
        <h2 className="text-2xl font-serif uppercase tracking-[0.2em] text-center mb-16">Complete the Look</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {related.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
