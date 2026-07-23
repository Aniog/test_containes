import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { seedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ProductDetail() {
  const { id } = useParams();
  const product = seedProducts.find(p => p.id === id) || seedProducts[0];
  
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [activeAccordion, setActiveAccordion] = useState('description');
  
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // Reset state when product changes
    setQuantity(1);
    setActiveAccordion('description');
    
    // Load images
    if (containerRef.current) {
      // Need a small timeout to let react commit the new DOM nodes before scanning
      setTimeout(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }, 50);
    }
  }, [id, product]);

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
  };

  const relatedProducts = seedProducts.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="pt-24 pb-24">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 lg:px-8 mb-8">
        <div className="flex items-center text-xs tracking-widest uppercase text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-primary transition-colors">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-4 h-[600px] lg:h-[800px]">
            {/* Thumbnails (hidden on mobile) */}
            <div className="hidden md:flex flex-col gap-4 w-24 flex-shrink-0">
               <div className="aspect-[3/4] bg-muted relative overflow-hidden border border-border cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                  <img 
                    data-strk-img-id={`pdp-thumb-1-${product.id}`}
                    data-strk-img={`[pdp-title] earrings necklace`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view 2`}
                    className="w-full h-full object-cover"
                  />
               </div>
               <div className="aspect-[3/4] bg-muted relative overflow-hidden border border-border cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                  <img 
                    data-strk-img-id={`pdp-thumb-2-${product.id}`}
                    data-strk-img={`[pdp-title] jewelry box model`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view 3`}
                    className="w-full h-full object-cover"
                  />
               </div>
            </div>
            {/* Main Image */}
            <div className="flex-1 bg-muted relative overflow-hidden h-full">
              <img 
                data-strk-img-id={`pdp-main-${product.id}`}
                data-strk-img={`[pdp-desc] [pdp-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full lg:w-2/5 flex flex-col pt-4 lg:pt-10">
            <h1 id="pdp-title" className="text-3xl md:text-4xl font-serif uppercase tracking-widest mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl">${product.price}</span>
              <div className="flex items-center gap-1 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                <span className="text-sm font-medium ml-1 text-foreground">4.9 (128 reviews)</span>
              </div>
            </div>

            <p id="pdp-desc" className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <span className="text-sm tracking-wide text-muted-foreground uppercase mb-3 block">Color: <span className="text-foreground font-medium">{variant}</span></span>
              <div className="flex gap-3">
                <button 
                  onClick={() => setVariant('Gold')}
                  className={cn(
                    "w-8 h-8 rounded-full border-2 transition-all",
                    variant === 'Gold' ? "border-primary p-[2px]" : "border-transparent"
                  )}
                >
                  <span className="w-full h-full block rounded-full bg-[#D4AF37]" />
                </button>
                <button 
                  onClick={() => setVariant('Silver')}
                  className={cn(
                    "w-8 h-8 rounded-full border-2 transition-all",
                    variant === 'Silver' ? "border-primary p-[2px]" : "border-transparent"
                  )}
                >
                   <span className="w-full h-full block rounded-full bg-[#C0C0C0]" />
                </button>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center justify-between border border-border p-2 sm:w-32">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-muted transition-colors text-muted-foreground"
                >
                  <Minus size={16} />
                </button>
                <span className="text-sm font-medium w-8 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-muted transition-colors text-muted-foreground"
                >
                  <Plus size={16} />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground py-4 tracking-widest text-sm uppercase hover:bg-primary/90 transition-colors shadow-sm"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border">
              {/* Description Accordion */}
              <div className="border-b border-border">
                <button 
                  onClick={() => setActiveAccordion(activeAccordion === 'description' ? null : 'description')}
                  className="w-full flex justify-between items-center py-4 focus:outline-none"
                >
                  <span className="font-serif text-lg tracking-wide">Description</span>
                  <ChevronDown size={16} className={cn("transition-transform duration-300", activeAccordion === 'description' ? "rotate-180" : "")} />
                </button>
                <div className={cn("overflow-hidden transition-all duration-300", activeAccordion === 'description' ? "max-h-96 pb-4" : "max-h-0")}>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description} Perfect for stacking or wearing solo, this piece embodies our philosophy of quiet luxury. Designed to seamlessly integrate into your daily wardrobe.
                  </p>
                </div>
              </div>

              {/* Materials & Care Accordion */}
              <div className="border-b border-border">
                <button 
                  onClick={() => setActiveAccordion(activeAccordion === 'materials' ? null : 'materials')}
                  className="w-full flex justify-between items-center py-4 focus:outline-none"
                >
                  <span className="font-serif text-lg tracking-wide">Materials & Care</span>
                  <ChevronDown size={16} className={cn("transition-transform duration-300", activeAccordion === 'materials' ? "rotate-180" : "")} />
                </button>
                <div className={cn("overflow-hidden transition-all duration-300", activeAccordion === 'materials' ? "max-h-96 pb-4" : "max-h-0")}>
                  <p className="text-sm text-foreground mb-2"><strong>Materials:</strong> {product.materials}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To maintain the brilliance of your piece, avoid contact with perfumes, lotions, and harsh chemicals. We recommend removing your jewelry before swimming, showering, or exercising. Store in the provided pouch when not in use.
                  </p>
                </div>
              </div>

              {/* Shipping Accordion */}
              <div className="border-b border-border">
                <button 
                  onClick={() => setActiveAccordion(activeAccordion === 'shipping' ? null : 'shipping')}
                  className="w-full flex justify-between items-center py-4 focus:outline-none"
                >
                  <span className="font-serif text-lg tracking-wide">Shipping & Returns</span>
                  <ChevronDown size={16} className={cn("transition-transform duration-300", activeAccordion === 'shipping' ? "rotate-180" : "")} />
                </button>
                <div className={cn("overflow-hidden transition-all duration-300", activeAccordion === 'shipping' ? "max-h-96 pb-4" : "max-h-0")}>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    Enjoy free worldwide shipping on all orders. Expedited shipping is available at checkout.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We want you to be completely in love with your purchase. We gladly accept returns of unworn items within 30 days of delivery.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-border mt-24">
        <h2 id="related-title" className="text-3xl font-serif text-center mb-12">You May Also Like</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
           {relatedProducts.map((p) => (
            <div key={`related-${p.id}`} className="group relative">
              <Link to={`/product/${p.id}`} className="block relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                <img 
                  data-strk-img-id={`related-img-${p.id}`}
                  data-strk-img={`[related-item-title-${p.id}] [related-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-col">
                <Link to={`/product/${p.id}`}>
                  <h3 id={`related-item-title-${p.id}`} className="font-serif text-sm md:text-base uppercase tracking-wide mb-1 hover:text-primary transition-colors truncate">
                    {p.name}
                  </h3>
                </Link>
                <span className="text-sm text-muted-foreground">${p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
