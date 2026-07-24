import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../lib/CartContext';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import ProductCard from '../components/ui/ProductCard';

const PDP = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0]; // fallback
  
  const [activeImage, setActiveImage] = useState(0);
  const [tone, setTone] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('description');
  
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset state on product change
    setActiveImage(0);
    setQuantity(1);
    
    // We need to request animation frame to ensure DOM is updated before parsing for images
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, product]);

  const handleAddToCart = () => {
    addToCart(product, quantity, tone);
  };

  const toggleAccordion = (name) => {
    setActiveAccordion(activeAccordion === name ? '' : name);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs uppercase tracking-widest text-muted-foreground font-sans mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-foreground transition-colors">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
          
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails (vertical on md+) */}
            <div className="flex md:flex-col gap-4 w-full md:w-20 overflow-x-auto md:overflow-visible flex-none">
              {product.images.map((img, idx) => (
                <button 
                  key={`thumb-${img.id}`}
                  className={cn(
                    "flex-none w-20 h-24 bg-muted relative",
                    activeImage === idx ? "opacity-100 ring-1 ring-offset-2 ring-foreground" : "opacity-60 hover:opacity-100 transition-opacity"
                  )}
                  onClick={() => setActiveImage(idx)}
                >
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img={img.query}
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="150"
                    alt={`Thumbnail view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="w-full aspect-[3/4] bg-muted relative">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img={product.images[activeImage].query}
                data-strk-img-id={`main-${product.images[activeImage].id}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="w-full lg:w-1/2 lg:py-10">
            <h1 id="pdp-title" className="font-heading text-3xl md:text-4xl tracking-widest uppercase mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="font-sans text-xl">${product.price.toFixed(2)}</span>
              <div className="flex items-center text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                <span className="text-muted-foreground text-xs font-sans tracking-wide uppercase ml-2 text-foreground">(12 Reviews)</span>
              </div>
            </div>

            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <span className="block text-xs uppercase tracking-widest font-medium mb-3">
                Metal Tone: <span className="text-muted-foreground capitalize">{tone}</span>
              </span>
              <div className="flex gap-4">
                <button 
                  onClick={() => setTone('gold')}
                  className={cn(
                    "w-10 h-10 rounded-full bg-[#E5C158] ring-offset-2 transition-all",
                    tone === 'gold' ? "ring-1 ring-foreground" : "hover:ring-1 hover:ring-border opacity-80"
                  )}
                  aria-label="Gold tone"
                />
                <button 
                  onClick={() => setTone('silver')}
                  className={cn(
                    "w-10 h-10 rounded-full bg-[#D1D1D1] ring-offset-2 transition-all",
                    tone === 'silver' ? "ring-1 ring-foreground" : "hover:ring-1 hover:ring-border opacity-80"
                  )}
                  aria-label="Silver tone"
                />
              </div>
            </div>

            <div className="hairline mb-8"></div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-border h-14 w-full sm:w-32">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex-1 flex justify-center hover:bg-muted transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-sans">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex-1 flex justify-center hover:bg-muted transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground h-14 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border font-sans text-sm">
              {[
                { id: 'description', title: 'Details', content: `Type: ${product.type}\nMaterial: ${product.material}` },
                { id: 'care', title: 'Materials & Care', content: product.care },
                { id: 'shipping', title: 'Shipping & Returns', content: 'Free standard shipping on all US orders. Returns accepted within 30 days of delivery in unworn condition.' }
              ].map((acc) => (
                <div key={acc.id} className="border-b border-border">
                  <button 
                    onClick={() => toggleAccordion(acc.id)}
                    className="w-full flex justify-between items-center py-4 uppercase tracking-widest font-medium hover:text-accent transition-colors"
                  >
                    <span>{acc.title}</span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", activeAccordion === acc.id && "rotate-180")} />
                  </button>
                  <div 
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      activeAccordion === acc.id ? "max-h-40 pb-4" : "max-h-0"
                    )}
                  >
                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{acc.content}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* You May Also Like */}
        <div className="border-t border-border pt-16 mt-16">
          <h2 className="font-heading text-3xl uppercase tracking-widest text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {relatedProducts.map(rp => (
              <ProductCard key={rp.id} product={rp} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PDP;
