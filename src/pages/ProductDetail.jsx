import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BESTSELLERS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';
import { Star, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState('description');
  const containerRef = useRef(null);
  
  const addToCart = useCartStore((state) => state.addToCart);
  
  const product = BESTSELLERS.find(p => p.id === id) || BESTSELLERS[0];
  
  const relatedProducts = BESTSELLERS.filter(p => p.id !== product.id).slice(0, 4);

  useEffect(() => {
    // Scroll to top when product changes
    window.scrollTo(0, 0);
    setExpandedSection('description');
    setQuantity(1);
    setSelectedVariant('Gold');
    
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="pt-24 pb-24 bg-background min-h-screen" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Breadcrumb */}
        <div className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-8">
           <Link to="/" className="hover:text-foreground">Home</Link>
           <span className="mx-2">/</span>
           <Link to="/shop" className="hover:text-foreground">Shop</Link>
           <span className="mx-2">/</span>
           <span className="text-foreground">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
          {/* Image Gallery */}
          <div className="lg:w-1/2 flex gap-4">
            <div className="hidden md:flex flex-col gap-4 w-20 shrink-0">
               {[1, 2, 3].map((idx) => (
                  <div key={idx} className="aspect-[4/5] bg-muted relative overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                     <img
                      alt={`${product.name} view ${idx}`}
                      className="w-full h-full object-cover"
                      data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                      data-strk-img={`[pdp-name] detail view ${idx}`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="100"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     />
                  </div>
               ))}
            </div>
            <div className="flex-1 aspect-[4/5] bg-muted relative overflow-hidden">
               <img
                  alt={product.name}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`pdp-main-${product.id}`}
                  data-strk-img={`[pdp-desc] [pdp-name] hero image`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
               />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            
            <div className="flex justify-start mb-6">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} size={16} className="text-primary fill-primary" />
              ))}
              <span className="text-sm text-muted-foreground ml-2">(128 Reviews)</span>
            </div>

            <h1 id="pdp-name" className="font-serif text-3xl md:text-5xl uppercase tracking-wider text-foreground mb-4">
              {product.name}
            </h1>
            
            <p className="font-sans text-xl text-foreground mb-6 font-medium">
              ${product.price}
            </p>

            <p id="pdp-desc" className="text-muted-foreground font-sans leading-relaxed mb-8">
              {product.description}. Crafted for everyday wear, this piece adds a touch of editorial elegance to any look. Made with 18k gold vermeil over sterling silver for lasting quality.
            </p>

            <div className="mb-8 border-t border-border pt-8">
              <span className="block text-sm font-sans uppercase tracking-widest text-foreground font-medium mb-4">
                Material: {selectedVariant}
              </span>
              <div className="flex gap-4">
                {['Gold', 'Silver'].map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      "px-6 py-2 text-sm font-sans tracking-widest uppercase transition-all duration-300",
                      selectedVariant === variant
                        ? "border border-foreground bg-foreground text-background"
                        : "border border-border text-muted-foreground hover:border-foreground/50"
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
               <div className="flex items-center border border-border h-12 w-32 shrink-0">
                  <button 
                    className="flex-1 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors h-full"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="text-sm font-medium w-8 text-center">{quantity}</span>
                  <button 
                    className="flex-1 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors h-full"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
               </div>
               
               <Button 
                 className="flex-1 h-12 uppercase tracking-[0.2em] font-medium text-xs md:text-sm"
                 onClick={() => {
                   addToCart({...product, quantity, cartImgId: `pdp-main-${product.id}`}, selectedVariant);
                 }}
               >
                 Add to Cart - ${(product.price * quantity).toFixed(2)}
               </Button>
            </div>

            <div className="text-xs text-muted-foreground uppercase tracking-widest flex items-center gap-2 mb-10">
               <span className="w-2 h-2 rounded-full bg-green-700 block"></span> In Stock - Ships within 24 hours
            </div>

            {/* Accordions */}
            <div className="border-t border-border">
              {[
                { id: 'description', title: 'Details & Story', content: 'Our demi-fine jewelry is designed in-house and meticulously crafted by skilled artisans. We focus on creating pieces that look substantial and editorial, yet feel comfortable enough for everyday wear.' },
                { id: 'materials', title: 'Materials & Care', content: 'Crafted in 18k thick gold vermeil over a 925 sterling silver base. Vermeil is much thicker than standard plating, ensuring your pieces last longer. To maintain the shine, avoid contact with water, perfumes, and lotions.' },
                { id: 'shipping', title: 'Shipping & Returns', content: 'We offer free worldwide shipping on orders over $150. If you are not completely satisfied with your purchase, you may return it within 30 days of receiving your order.' }
              ].map(section => (
                <div key={section.id} className="border-b border-border">
                  <button 
                    className="w-full py-4 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => toggleSection(section.id)}
                  >
                    <span className="font-serif text-lg tracking-wide text-foreground">{section.title}</span>
                    {expandedSection === section.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  <div 
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      expandedSection === section.id ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* You May Also Like */}
        <div className="pt-16 border-t border-border">
           <div className="flex justify-between items-end mb-12">
            <div>
              <h2 id="related-heading" className="font-serif text-3xl text-foreground mb-2">You May Also Like</h2>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map((p) => (
              <Link to={`/product/${p.id}`} key={p.id} className="group flex flex-col">
                <div className="relative aspect-[4/5] bg-muted mb-4 overflow-hidden block">
                  <img
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`[related-prod-name-${p.id}] [related-heading]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="flex flex-col flex-1 text-center md:text-left">
                  <h3 id={`related-prod-name-${p.id}`} className="font-sans font-medium text-foreground uppercase tracking-wider text-sm mb-1 line-clamp-1">{p.name}</h3>
                  <p className="font-sans text-foreground font-medium">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}