import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '@/store';
import { seedProducts } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button 
        className="w-full py-4 flex justify-between items-center text-left hover:text-accent transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="uppercase tracking-widest text-sm font-medium">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-muted-foreground text-sm leading-relaxed font-light">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useStore();
  const containerRef = useRef(null);
  
  const product = seedProducts.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('18K Gold Plated');
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    try {
      const frameId = window.requestAnimationFrame(() => {
        if (containerRef.current) {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
      });
      return () => window.cancelAnimationFrame(frameId);
    } catch(e) {
      console.log('Image helper not loaded properly yet', e);
    }
  }, [id, activeImage]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl font-serif mb-4">Product Not Found</h1>
        <Link to="/shop" className="border-b border-primary hover:text-accent border-accent transition-colors uppercase tracking-widest text-sm">
          Return to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = seedProducts.filter(p => p.id !== id).slice(0, 4);
  const variants = ['18K Gold Plated', 'White Gold Plated'];
  const galleryImages = [
    { id: 1, prompt: `[pdp-title]` },
    { id: 2, prompt: `detail macro shot thick jewelry [pdp-title]` },
    { id: 3, prompt: `woman wearing fine jewelry outdoor editorial portrait [pdp-title]` },
  ];

  return (
    <div className="pt-24 min-h-screen bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 lg:px-8 py-8 md:py-16">
        
        {/* Breadcrumb */}
        <div className="flex gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-foreground">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-24">
          
          {/* Left: Gallery */}
          <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4 lg:gap-6">
            {/* Thumbnails */}
            <div className="flex xl:w-20 md:flex-col gap-4 overflow-x-auto md:overflow-visible">
        {galleryImages.map((img, idx) => (
                <button 
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-20 aspect-square md:w-full md:aspect-[4/5] bg-secondary flex-shrink-0 transition-opacity ${activeImage === idx ? 'ring-1 ring-primary ring-offset-2' : 'opacity-70 hover:opacity-100'}`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    data-strk-img={img.prompt}
                    data-strk-img-id={`pdp-thumb-${product.id}-${img.id}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="150"
                  />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 bg-secondary relative aspect-[4/5]">
               <img
                  key={activeImage} // Force re-render for image helper if needed
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                  data-strk-img={galleryImages[activeImage].prompt}
                  data-strk-img-id={`pdp-main-${product.id}-${galleryImages[activeImage].id}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1000"
                />
            </div>
          </div>

          {/* Right: Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            
            <div className="flex gap-1 mb-4 text-accent">
               {[1,2,3,4,5].map(i => <Star key={i} className="fill-current w-4 h-4" />)}
               <span className="text-muted-foreground text-xs ml-2 tracking-widest">+124 Reviews</span>
            </div>

            <h1 id="pdp-title" className="text-3xl lg:text-4xl font-serif uppercase tracking-widest mb-4">
              {product.name}
            </h1>
            
            <p className="text-2xl font-light mb-8">${product.price.toFixed(2)}</p>
            
            <p className="text-muted-foreground leading-relaxed font-light mb-8 max-w-md">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="uppercase tracking-widest text-xs font-medium text-muted-foreground">Material</span>
                <span className="text-xs uppercase tracking-widest">{selectedVariant}</span>
              </div>
              <div className="flex gap-4">
                {variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full w-8 h-8 flex items-center justify-center border-2 transition-all ${
                       selectedVariant === variant ? 'border-primary ring-2 ring-primary ring-offset-2' : 'border-transparent hover:scale-110'
                    }`}
                    style={{ 
                      backgroundColor: variant.includes('White') ? '#E8E9EB' : '#D4AF37' 
                    }}
                    aria-label={`Select ${variant}`}
                  />
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-border w-max">
                <button 
                  className="px-6 py-4 hover:bg-secondary transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-4 min-w-[3rem] text-center font-medium">{quantity}</span>
                <button 
                  className="px-6 py-4 hover:bg-secondary transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <button 
                onClick={() => addToCart(product, quantity, selectedVariant)}
                className="flex-1 bg-primary text-primary-foreground py-4 px-8 uppercase tracking-widest font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border mt-auto">
              <Accordion title="Description" defaultOpen={true}>
                {product.description} We recommend removing before swimming or showering to maintain the perfect luster.
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="list-disc pl-5 space-y-2">
                  <li>{product.materials || '18k Gold Plated Brass'}</li>
                  <li>Nickel-free and hypoallergenic</li>
                  <li>Avoid direct contact with perfumes and lotions</li>
                  <li>Store in the provided velvet pouch when not worn</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                 <p className="mb-2">Free worldwide shipping on orders over $100.</p>
                 <p>Returns accepted within 30 days of delivery in unworn, original condition.</p>
              </Accordion>
            </div>

          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-border pt-20">
            <h2 className="text-2xl lg:text-3xl font-serif text-center mb-12">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetail;