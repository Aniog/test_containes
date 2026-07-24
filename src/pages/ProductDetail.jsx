import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductBySlug, fetchProducts } from '@/api/product';
import { useCart } from '@/context/CartContext';
import { ChevronRight, Minus, Plus, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const Accordion = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-border">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center py-6 text-left"
    >
      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">{title}</span>
      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
    </button>
    <div className={cn(
      "overflow-hidden transition-all duration-300 ease-in-out",
      isOpen ? "max-h-[500px] pb-6" : "max-h-0"
    )}>
      <div className="text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedTone, setSelectedTone] = useState('gold');
  const [activeAccordion, setActiveAccordion] = useState('description');
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const p = await fetchProductBySlug(slug);
        setProduct(p);
        
        if (p) {
          const rel = await fetchProducts({ category: p.data.category });
          setRelated(rel.filter(item => item.id !== p.id).slice(0, 4));
        }
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    loadData();
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!loading && product) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, product, related]);

  if (loading) return (
    <div className="pt-32 min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  );

  if (!product) return (
    <div className="pt-32 min-h-screen text-center py-20 px-6">
      <h2 className="text-2xl font-serif">Product Not Found</h2>
      <Link to="/shop" className="underline mt-4 block">Back to Shop</Link>
    </div>
  );

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto" ref={containerRef}>
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground mb-12">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/shop" className="hover:text-foreground">Shop</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground font-semibold">{product.data.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left: Gallery */}
        <div className="lg:col-span-7 grid grid-cols-1 gap-6">
          <div className="aspect-[3/4] bg-muted overflow-hidden relative">
             <img
              data-strk-img-id={product.data.pdpMainImgId}
              data-strk-img={`[pdp-name] [pdp-category] gold jewelry worn models close-up`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.data.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
             <div className="aspect-square bg-muted overflow-hidden relative">
               <img
                data-strk-img-id={product.data.pdpSub1ImgId}
                data-strk-img={`detailed view of [pdp-name] jewelry`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
             <div className="aspect-square bg-muted overflow-hidden relative">
               <img
                data-strk-img-id={product.data.pdpSub2ImgId}
                data-strk-img={`[pdp-name] packaging gift box velvet`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right: Info */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-4">
            <p id="pdp-category" className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">{product.data.category}</p>
            <h1 id="pdp-name" className="text-3xl md:text-4xl font-serif uppercase tracking-widest leading-tight">{product.data.name}</h1>
            <div className="flex items-center justify-between">
               <p className="text-2xl font-medium">${product.data.price}</p>
               <div className="flex items-center gap-1 text-primary">
                 {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                 <span className="text-xs text-muted-foreground ml-2">(12 reviews)</span>
               </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {product.data.description}
          </p>

          <div className="space-y-6 pt-6 border-t border-border">
            {/* Tone Selector */}
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-widest font-bold">Select Finish: {selectedTone}</span>
              <div className="flex gap-4">
                {['gold', 'silver'].map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      "px-6 py-2 text-[10px] uppercase tracking-widest font-semibold border transition-all",
                      selectedTone === tone ? "border-foreground bg-stone-50" : "border-border text-muted-foreground hover:border-muted-foreground"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-widest font-bold">Quantity</span>
              <div className="flex items-center border border-border w-max py-2 px-4 gap-6">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="w-4 h-4" /></button>
                <span className="w-4 text-center text-sm font-semibold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}><Plus className="w-4 h-4" /></button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product, quantity)}
              className="w-full py-5 bg-primary text-primary-foreground uppercase tracking-[0.2em] text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/10"
            >
              Add to Cart
            </button>
          </div>

          {/* Accordions */}
          <div className="pt-10">
            <Accordion
              title="Description"
              isOpen={activeAccordion === 'description'}
              onClick={() => setActiveAccordion(activeAccordion === 'description' ? null : 'description')}
            >
              <p>Elevate your everyday with the {product.data.name}. This masterfully crafted piece embodies our commitment to quiet luxury and timeless design.</p>
              <ul className="mt-4 space-y-2 list-disc pl-4">
                <li>High-polish finish</li>
                <li>Secure closure</li>
                <li>Exclusive Velmora design</li>
              </ul>
            </Accordion>
            <Accordion
              title="Materials & Care"
              isOpen={activeAccordion === 'materials'}
              onClick={() => setActiveAccordion(activeAccordion === 'materials' ? null : 'materials')}
            >
              <p>Crafted using premium 18K Gold PVD plating over 316L Stainless Steel. This ensures a piece that is not only beautiful but also:</p>
              <ul className="mt-4 space-y-2 list-disc pl-4">
                <li>100% Hypoallergenic (Nickel-free)</li>
                <li>Waterproof & Tarnish-resistant</li>
                <li>Sustainably sourced metals</li>
              </ul>
              <p className="mt-4 italic">To maintain its luster, gently wipe with a soft cloth after wear.</p>
            </Accordion>
            <Accordion
              title="Shipping & Returns"
              isOpen={activeAccordion === 'shipping'}
              onClick={() => setActiveAccordion(activeAccordion === 'shipping' ? null : 'shipping')}
            >
              <ul className="space-y-4">
                <li><strong>Free Shipping</strong> on all orders over $50.</li>
                <li><strong>30-Day Returns:</strong> If you're not completely in love, send it back within 30 days for a full refund.</li>
                <li><strong>Gift Ready:</strong> Every order arrives in our signature eco-friendly linen jewelry box.</li>
              </ul>
            </Accordion>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {related.length > 0 && (
        <section className="mt-32 pt-20 border-t border-border">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-serif">Complete the Look</h2>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Pairs Exceptionally Well</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {related.map(item => (
              <div key={item.id} className="group flex flex-col items-center">
                <Link to={`/product/${item.data.slug}`} className="w-full aspect-[3/4] bg-muted mb-6 overflow-hidden relative">
                   <img
                    data-strk-img-id={item.data.imgId}
                    data-strk-img={`[rel-name-${item.data.slug}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.data.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <h3 id={`rel-name-${item.data.slug}`} className="text-[10px] uppercase tracking-widest font-bold text-center">{item.data.name}</h3>
                <p className="text-xs mt-2">${item.data.price}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
