import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, getBestsellers } from '@/lib/data';
import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Star, Minus, Plus, ChevronRight, ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Product() {
  const { id } = useParams();
  const product = getProductById(id) || getBestsellers()[0];
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTone, setSelectedTone] = useState(product.tones[0]);
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, selectedImage]);
  
  const { addItem } = useCartStore();
  
  const relatedProducts = getBestsellers().filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem({ ...product, quantity, tone: selectedTone });
  };

  return (
    <div className="flex flex-col w-full bg-white pt-20" ref={containerRef}>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6 py-6 border-b border-border text-xs md:text-sm text-muted-foreground flex items-center">
        <Link to="/" className="hover:text-brand transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3 mx-2" />
        <Link to="/shop" className="hover:text-brand transition-colors">Shop</Link>
        <ChevronRight className="w-3 h-3 mx-2" />
        <Link to="/shop" className="hover:text-brand transition-colors">{product.category}</Link>
        <ChevronRight className="w-3 h-3 mx-2" />
        <span className="text-foreground truncate">{product.name}</span>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Image Gallery */}
          <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible w-full md:w-24 flex-shrink-0 hide-scrollbar pt-1 md:pt-0">
              {product.images.gallery.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-[3/4] w-20 md:w-full flex-shrink-0 overflow-hidden ${selectedImage === idx ? 'ring-1 ring-brand-dark ring-offset-2' : 'opacity-70 hover:opacity-100'} transition-all`}
                >
                  <img 
                    src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                    data-strk-img={`[product-title] thumbnail ${idx + 1}`}
                    data-strk-img-id={product.images.gallery[idx] || `gallery-thumb-${product.id}-${idx}-fallback`}
                    data-strk-img-ratio="3x4"
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            <div className="w-full bg-neutral-50 aspect-[3/4] relative overflow-hidden">
               <img 
                 key={selectedImage}
                 src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                 data-strk-img={`[product-title] main detail`}
                 data-strk-img-id={product.images.gallery[selectedImage] || `gallery-main-${product.id}-${selectedImage}-fallback`}
                 data-strk-img-ratio="3x4"
                 alt={`${product.name} main image`}
                 className="absolute inset-0 w-full h-full object-cover"
               />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 flex flex-col max-w-lg pt-4 md:pt-10">
            <h1 id="product-title" className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest text-brand-dark mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl md:text-2xl text-brand-dark">${product.price}</span>
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-none border-amber-400'}`} />
                ))}
                <span className="text-sm text-brand-dark/70 ml-2">({product.reviews} reviews)</span>
              </div>
            </div>

            <p id="product-desc" className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Tone Selector */}
            <div className="mb-8">
              <p className="text-sm font-medium tracking-wider mb-3">FINISH: <span className="font-normal text-muted-foreground">{selectedTone}</span></p>
              <div className="flex gap-3">
                {product.tones.map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`py-2 px-6 border ${selectedTone === tone ? 'border-brand-dark border-2' : 'border-border text-muted-foreground hover:border-brand-dark/50'} text-xs uppercase tracking-wider transition-colors bg-white`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Group */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-border bg-white h-14">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-2 hover:bg-neutral-50 h-full transition-colors flex items-center justify-center text-muted-foreground"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-2 hover:bg-neutral-50 h-full transition-colors flex items-center justify-center text-muted-foreground"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                className="flex-1 bg-brand text-white hover:bg-brand-dark h-14 rounded-none text-sm uppercase tracking-widest font-medium transition-colors"
              >
                Add To Cart — ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full border-t border-border">
              <AccordionItem value="description" className="border-border">
                <AccordionTrigger className="font-serif text-lg tracking-wide hover:no-underline py-5 text-brand-dark">Description</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {product.description} It's designed to be versatile enough for daytime wear while carrying enough presence for evening occasions. Each piece is thoughtfully inspected before packaging.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials" className="border-border">
                <AccordionTrigger className="font-serif text-lg tracking-wide hover:no-underline py-5 text-brand-dark">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>18K Gold Plated over recycled brass</li>
                    <li>Hypoallergenic, nickel-free</li>
                    <li>Protective e-coating strictly applied to prevent tarnishing</li>
                  </ul>
                  <p>To keep your jewelry looking its best, gently wipe with a soft cloth after wear. Avoid direct contact with perfume, lotions, and water.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" className="border-border border-b-0">
                <AccordionTrigger className="font-serif text-lg tracking-wide hover:no-underline py-5 text-brand-dark">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  <p className="mb-2"><strong>Free Worldwide Shipping</strong> on all orders. Standard delivery takes 3-5 business days domestically, and 7-14 days internationally.</p>
                  <p><strong>Returns:</strong> We happily accept returns in original condition within 30 days of delivery for a full refund.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <section className="py-24 bg-neutral-50 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 id="related-title" className="font-serif text-3xl text-brand-dark mx-auto w-max max-w-sm text-center">You May Also Like</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group flex flex-col cursor-pointer">
                <Link to={`/product/${p.id}`} className="aspect-[3/4] relative overflow-hidden bg-neutral-100 mb-4 block">
                  <img 
                    src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                    data-strk-img={`[related-product-${p.id}-title]`}
                    data-strk-img-id={p.images.primary || `related-${p.id}-fallback`}
                    data-strk-img-ratio="3x4"
                    alt={p.name}
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-col text-center items-center">
                  <Link to={`/product/${p.id}`} id={`related-product-${p.id}-title`} className="font-serif uppercase tracking-widest text-xs font-semibold mb-1 group-hover:text-brand transition-colors text-brand-dark">
                    {p.name}
                  </Link>
                  <p className="text-sm text-brand-dark/80">${p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}