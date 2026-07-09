import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById, fetchProducts } from '@/api/products';
import { useCart } from '@/lib/CartContext';
import { ProductCard } from '@/components/ProductCard';
import { cn } from '@/lib/utils';
import { Star, ChevronDown, ChevronRight, Minus, Plus, Heart } from 'lucide-react';
import { toast } from 'sonner';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeVariant, setActiveVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  useEffect(() => {
    if (product) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, document.body);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [product]);


  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        
        const all = await fetchProducts({ category: data.data.category });
        setRelated(all.filter(p => p.id !== id).slice(0, 4));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading || !product) return (
    <div className="pt-40 h-screen text-center animate-pulse">
      <p className="font-serif italic text-2xl">Elevating the experience...</p>
    </div>
  );

  const fields = product.data;

  const handleAddToCart = () => {
    addToCart(fields, activeVariant);
    toast.success(`${fields.name} added to bag`);
  };

  const Accordion = ({ id, title, children }) => (
    <div className="border-b border-border">
      <button 
        onClick={() => setOpenAccordion(openAccordion === id ? '' : id)}
        className="w-full py-6 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] font-bold text-left hover:text-accent transition-colors"
      >
        {title}
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", openAccordion === id ? "rotate-180" : "")} />
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-500 font-sans text-sm text-muted-foreground leading-relaxed",
        openAccordion === id ? "max-h-[300px] pb-6" : "max-h-0"
      )}>
        {children}
      </div>
    </div>
  );

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-white selection:bg-accent/20">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground mb-12 font-bold">
           <Link to="/" className="hover:text-black transition-colors">Home</Link>
           <ChevronRight className="w-3 h-3" />
           <Link to="/shop" className="hover:text-black transition-colors">Shop</Link>
           <ChevronRight className="w-3 h-3" />
           <span className="text-black">{fields.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-32">
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-[3/4] bg-muted relative overflow-hidden group">
               <img
                alt={fields.name}
                data-strk-img-id={`pdp-main-${id}`}
                data-strk-img={`[pdp-title] close-up gold jewelry macro editorial showcase`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="/placeholder.svg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-[3/4] bg-muted cursor-pointer hover:opacity-80 transition-opacity">
                   <img
                    alt={`Gallery ${i}`}
                    data-strk-img-id={`pdp-thumb-${id}-${i}`}
                    data-strk-img={`[pdp-title] jewelry detail angle ${i} model wearing`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="300"
                    src="/placeholder.svg"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <div className="mb-10 space-y-4">
               <h1 id="pdp-title" className="text-4xl md:text-5xl lg:text-6xl font-serif uppercase tracking-[0.1em] leading-tight">
                 {fields.name}
               </h1>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold ml-2">(24 Reviews)</span>
                  </div>
                  <p className="text-2xl font-serif">${fields.price}</p>
               </div>
            </div>

            <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-10 font-light">
              {fields.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-10 space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold">Finish: <span className="text-accent">{activeVariant}</span></h3>
              <div className="flex gap-3">
                {fields.variants?.map((v) => (
                  <button 
                    key={v}
                    onClick={() => setActiveVariant(v)}
                    className={cn(
                      "px-8 py-2.5 text-[10px] uppercase tracking-widest font-bold transition-all border",
                      activeVariant === v ? "bg-black text-white border-black" : "bg-transparent text-black border-border hover:border-black"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and CTA */}
            <div className="flex flex-col space-y-4 mb-12">
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-border">
                   <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-4 hover:bg-muted"><Minus className="w-4 h-4"/></button>
                   <span className="px-6 font-sans font-medium">{quantity}</span>
                   <button onClick={() => setQuantity(quantity + 1)} className="p-4 hover:bg-muted"><Plus className="w-4 h-4"/></button>
                </div>
                <button className="flex-grow p-4 bg-transparent border border-black hover:bg-black hover:text-white transition-all uppercase tracking-widest text-[10px] font-bold flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4" /> Wishlist
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="w-full py-5 bg-black text-white uppercase tracking-[0.3em] text-xs font-bold hover:bg-black/90 transition-all shadow-2xl"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border">
              <Accordion id="description" title="Description">
                <p>Designed with understated elegance in mind, the {fields.name} features our signature 18K gold plating. Each piece is unique in its own way, designed to catch the light and add a warm, refined accent to your every day. Meticulously tested for weight and comfort.</p>
              </Accordion>
              <Accordion id="materials" title="Materials & Care">
                <p>{fields.materials}</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li>Avoid contact with perfumes and lotions.</li>
                  <li>Store in your Velmora pouch when not in use.</li>
                  <li>Clean gently with a dry microfibre cloth.</li>
                </ul>
              </Accordion>
              <Accordion id="shipping" title="Shipping & Returns">
                <p>Enjoy free worldwide standard shipping on all orders over $75. Orders are processed within 24-48 hours. Returns are accepted within 30 days of purchase in original, unworn condition.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="py-24 border-t border-border">
            <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {related.map(prod => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
