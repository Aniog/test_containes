import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, Heart, Share2, ChevronDown, ChevronUp } from 'lucide-react';
import { initialProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '../lib/strk-sdk';

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  const containerRef = useRef(null);

  const product = initialProducts.find(p => p.id === id) || initialProducts[0];
  const relatedProducts = initialProducts.filter(p => p.id !== product.id).slice(0, 4);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const config = await import('../strk-img-config.json', { assert: { type: 'json' } }).catch(() => null);
        if (config && ImageHelper) {
          ImageHelper.loadImages(config.default || config, containerRef.current);
        }
      } catch (err) {
        // ignore
      }
    };
    
    const frameId = window.requestAnimationFrame(() => loadImages());
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImage]);

  const handleAddToCart = () => {
    addItem({...product, cartImgId: `pdp-main-${product.id}`}, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex text-xs uppercase tracking-widest text-muted-foreground mb-12">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" state={{ category: product.category }} className="hover:text-primary transition-colors">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
          
          {/* Product Images */}
          <div className="lg:w-1/2 flex flex-col md:flex-row-reverse gap-4 md:gap-6">
            <div className="flex-1 bg-muted aspect-[3/4] relative overflow-hidden group">
               <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="object-cover w-full h-full"
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-title] fine jewelry editorial shot high quality`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
              />
            </div>
            
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 hide-scrollbar w-full md:w-24">
              {[1, 2, 3, 4].map((idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx - 1)}
                  className={`flex-none w-20 md:w-full aspect-[3/4] bg-muted overflow-hidden transition-all ${
                    activeImage === idx - 1 ? 'ring-1 ring-foreground ring-offset-2 opacity-100' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                   <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail ${idx}`}
                    className="object-cover w-full h-full"
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[pdp-title] jewelry detail shot angle ${idx}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 flex flex-col pt-4">
            <h1 id="pdp-title" className="text-3xl md:text-5xl font-serif uppercase tracking-wide mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center space-x-6 mb-6">
              <p className="text-2xl font-light">${product.price}</p>
              <div className="flex items-center space-x-2 text-primary border-l border-border pl-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="text-sm font-medium text-foreground underline underline-offset-2">18 Reviews</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Material Selector */}
            <div className="mb-10">
               <div className="flex justify-between items-center mb-4">
                 <span className="text-sm font-medium uppercase tracking-widest">Material</span>
                 <span className="text-sm text-muted-foreground">18K Gold Plated</span>
               </div>
               <div className="flex space-x-4">
                 <button className="flex-1 py-3 border border-foreground text-foreground hover:bg-muted/30 transition-colors uppercase tracking-widest text-xs font-medium relative overflow-hidden">
                   <div className="absolute inset-0 border-[3px] border-transparent" />
                   18K Gold Plated
                 </button>
                 <button className="flex-1 py-3 border border-border text-muted-foreground hover:border-foreground/50 transition-colors uppercase tracking-widest text-xs font-medium">
                   Sterling Silver
                 </button>
               </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-4 mb-12">
              <div className="flex items-center border border-border w-32 h-14">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex-1 flex items-center justify-center hover:text-primary transition-colors text-muted-foreground"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex-1 flex items-center justify-center hover:text-primary transition-colors text-muted-foreground"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground h-14 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Add to Cart
              </button>

              <button className="w-14 h-14 border border-border flex items-center justify-center hover:border-foreground transition-colors group">
                <Heart className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-2 gap-4 border-t border-b border-border py-6 mb-8 text-sm tracking-wide">
              <div className="flex items-center text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" /> In stock</div>
              <div className="flex items-center text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" /> Ships within 24h</div>
              <div className="flex items-center text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" /> Free returns</div>
              <div className="flex items-center text-muted-foreground"><div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" /> 2-year warranty</div>
            </div>

            {/* Accordions */}
            <div className="space-y-0 border-t border-border -mt-[1px]">
              {[
                { id: 'description', title: 'Details & Story', content: 'Our pieces are designed with intention and crafted responsibly. This piece features a base of jewelers brass thickly plated in 18k gold for enduring wear.' },
                { id: 'materials', title: 'Materials & Care', content: 'Avoid contact with water, perfumes, and lotions to preserve the gold plating. Store in the provided pouch when not in use. Wipe clean with a soft cloth.' },
                { id: 'shipping', title: 'Shipping & Returns', content: 'Free standard shipping on all orders. Expedited shipping available at checkout. We accept returns within 30 days of delivery for a full refund.' }
              ].map((section) => (
                <div key={section.id} className="border-b border-border">
                  <button 
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full py-5 flex justify-between items-center text-left hover:text-primary transition-colors"
                  >
                    <span className="text-sm font-medium uppercase tracking-widest">{section.title}</span>
                    {openAccordion === section.id ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openAccordion === section.id ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>

        {/* Explore More */}
        <section className="border-t border-border pt-24">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif">Explore More</h2>
            <Link to="/shop" className="text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors border-b border-foreground hover:border-primary pb-1 hidden sm:block">
              Shop All
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.map((p) => (
               <div key={p.id} className="group flex flex-col">
                  <Link to={`/product/${p.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-muted block">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      data-strk-img-id={`pdp-related-${p.id}`}
                      data-strk-img={`[related-title-${p.id}] minimalist gold jewelry product shot`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                    />
                     <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                  <div className="flex flex-col mt-2">
                    <h3 id={`related-title-${p.id}`} className="font-serif lg:text-lg tracking-wide uppercase mb-1">
                      <Link to={`/product/${p.id}`} className="hover:text-primary transition-colors">
                        {p.name}
                      </Link>
                    </h3>
                    <p className="font-medium mt-1">${p.price}</p>
                  </div>
                </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
