import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Minus, Plus, ChevronLeft } from 'lucide-react';
import { toast } from 'sonner';
import ProductCard from '@/components/products/ProductCard';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const p = PRODUCTS.find(item => item.id === id);
    if (p) {
      setProduct(p);
      setQuantity(1);
      setActiveImage(0);
    }
  }, [id]);

  if (!product) return <div className="pt-40 text-center font-serif text-2xl h-screen">Loading our treasures...</div>;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to your collection.`);
  };

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <Link to="/shop" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] mb-12 text-stone-400 hover:text-stone-900 transition-colors">
        <ChevronLeft className="w-4 h-4" />
        Back to Collection
      </Link>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
        {/* Images */}
        <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-6">
          {/* Thumbnails */}
          <div className="hidden md:flex flex-col gap-4 w-20 order-1">
            {[0, 1, 2].map((i) => (
              <button 
                key={i}
                onClick={() => setActiveImage(i)}
                className={cn(
                  "aspect-[3/4] overflow-hidden bg-stone-100 border transition-all duration-300",
                  activeImage === i ? "border-stone-900" : "border-stone-100"
                )}
              >
                <img
                  data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                  data-strk-img={`[pdp-title] jewelry gold view ${i + 1}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="100"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-grow aspect-[3/4] overflow-hidden bg-stone-100 order-2">
            <img
              data-strk-img-id={`pdp-main-${product.id}`}
              data-strk-img={`[pdp-title] [pdp-category] jewelry gold model close-up`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="w-full lg:w-2/5 flex flex-col pt-4">
          <p id="pdp-category" className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-4">
            {product.category}
          </p>
          <h1 id="pdp-title" className="text-3xl md:text-5xl font-serif text-stone-900 mb-6 uppercase tracking-wider leading-tight">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-6 mb-8">
            <p className="text-2xl font-sans font-medium text-stone-800">${product.price.toFixed(2)}</p>
            <div className="flex items-center gap-1 border-l border-stone-200 pl-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-stone-900 text-stone-900" />
              ))}
              <span className="text-[10px] text-stone-400 font-bold ml-2">24 REVIEWS</span>
            </div>
          </div>

          <p className="text-stone-600 leading-relaxed font-sans text-lg mb-10">
            A piece designed to capture light and attention. Our {product.name} features refined craftsmanship and the signature Velmora glow, perfect for stacking or wearing as a standalone statement.
          </p>

          <div className="space-y-8 mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Finish: <span className="text-stone-400 font-medium">{selectedVariant}</span></p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={cn(
                      "px-8 py-3 text-[10px] uppercase tracking-widest font-bold border transition-all duration-300",
                      selectedVariant === v 
                        ? "border-stone-900 bg-stone-900 text-white" 
                        : "border-stone-200 text-stone-500 hover:border-stone-400"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Quantity</p>
              <div className="flex items-center w-32 border border-stone-200 h-12">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex-1 flex items-center justify-center hover:bg-stone-50"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="flex-1 flex items-center justify-center font-sans font-medium text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex-1 flex items-center justify-center hover:bg-stone-50"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          <Button 
            onClick={handleAddToCart}
            className="w-full h-16 rounded-none bg-accent hover:bg-accent/90 text-white tracking-[0.3em] font-bold uppercase text-xs shadow-xl transition-all duration-500"
          >
            Add to Bag
          </Button>

          {/* Details Accordion */}
          <div className="mt-16">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description" className="border-t border-stone-100">
                <AccordionTrigger className="uppercase text-[10px] tracking-[0.3em] font-bold py-6 hover:no-underline">Description</AccordionTrigger>
                <AccordionContent className="text-stone-500 font-sans leading-relaxed pt-0 pb-6">
                  Experience true demi-fine luxury. Each piece is meticulously hand-finished in our studio, ensuring every curve and detail meets our rigorous standards for quality and aesthetic excellence. Designed to be lightweight and comfortable for all-day wear.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials" className="border-stone-100">
                <AccordionTrigger className="uppercase text-[10px] tracking-[0.3em] font-bold py-6 hover:no-underline">Materials & Care</AccordionTrigger>
                <AccordionContent className="text-stone-500 font-sans leading-relaxed pt-0 pb-6">
                  <ul className="space-y-3 list-disc pl-4">
                    <li>18K Gold Plated Brass or Recycled 925 Sterling Silver</li>
                    <li>Hypoallergenic, nickel-free, and lead-free</li>
                    <li>To maintain the shine, avoid contact with heavy perfumes, lotions, and chlorinated water. Gently wipe with a soft cloth.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" className="border-stone-100">
                <AccordionTrigger className="uppercase text-[10px] tracking-[0.3em] font-bold py-6 hover:no-underline">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-stone-500 font-sans leading-relaxed pt-0 pb-6 uppercase text-[10px] tracking-widest">
                  <p className="mb-4">Free standard shipping on all orders worldwide.</p>
                  <p>30-day returns on unworn pieces. Earrings are non-returnable due to hygiene reasons.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="pt-24 border-t border-stone-100">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-16 italic">Complete the Look</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
