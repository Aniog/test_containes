import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { seedProducts } from '@/lib/data';
import { ProductCard } from '@/components/ui/product-card';
import { useCart } from '@/lib/cart-context';
import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, ChevronDown, ChevronUp, Check, Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Product() {
  const { id } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);
  
  const product = seedProducts.find(p => p.id === id) || seedProducts[0];
  const relatedProducts = seedProducts.filter(p => p.id !== product.id).slice(0, 4);

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState('primary');
  const [variant, setVariant] = useState('Gold');
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    // Reset state on navigation
    setQuantity(1);
    setActiveImage('primary');
    setOpenAccordion('description');
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product, relatedProducts]);

  const handleAddToCart = () => {
    addItem(product, quantity, variant);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <Layout>
      <div className="pt-24 pb-16" ref={containerRef}>
        <div className="container mx-auto px-4">
          
          {/* Breadcrumbs */}
          <div className="flex gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-foreground">{product.category}</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
            
            {/* Image Gallery */}
            <div className="lg:w-1/2 flex flex-col md:flex-row-reverse gap-4">
              {/* Main Image */}
              <div className="w-full relative aspect-[4/5] bg-secondary flex-grow">
                <img
                  key={activeImage}
                  data-strk-img-id={product.images[activeImage]?.id}
                  data-strk-img={product.images[activeImage]?.query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnails */}
              <div className="flex xl:flex-col gap-4 md:w-24 flex-none overflow-x-auto no-scrollbar">
                {Object.keys(product.images).map((key) => (
                  <button 
                    key={key}
                    onClick={() => setActiveImage(key)}
                    className={cn(
                      "relative aspect-[4/5] w-20 md:w-full bg-secondary flex-none border-2 transition-colors",
                      activeImage === key ? "border-accent" : "border-transparent"
                    )}
                  >
                    <img
                      data-strk-img-id={product.images[key]?.id || `thumb-${product.id}-${key}`}
                      data-strk-img={product.images[key]?.query}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} thumbnail`}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2 flex flex-col">
              <h1 id={`detail-title-${product.id}`} className="text-3xl md:text-5xl font-serif uppercase tracking-wider mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xl">${product.price}</span>
                <div className="flex items-center gap-1 text-accent text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-muted-foreground ml-2">({product.reviews})</span>
                </div>
              </div>

              <p id={`detail-desc-${product.id}`} className="text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Variants */}
              <div className="mb-8">
                <span className="block text-sm uppercase tracking-widest font-medium mb-3">Metal: {variant}</span>
                <div className="flex gap-3">
                  {['Gold', 'Silver'].map((v) => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={cn(
                        "px-6 py-2 border rounded-sm text-sm uppercase tracking-widest transition-colors",
                        variant === v 
                          ? "border-foreground bg-foreground text-background" 
                          : "border-border hover:border-foreground"
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Adding to cart row */}
              <div className="flex gap-4 mb-12">
                <div className="flex items-center border border-border rounded-sm w-32 justify-between px-2">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-muted-foreground hover:text-foreground">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-muted-foreground hover:text-foreground">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-accent text-accent-foreground py-4 uppercase tracking-widest font-medium hover:bg-[#a67c3b] transition-colors"
                >
                  Add to Cart — ${(product.price * quantity).toFixed(2)}
                </button>
              </div>

              {/* Accordions */}
              <div className="border-t border-border mt-auto">
                {/* Description */}
                <div className="border-b border-border">
                  <button 
                    onClick={() => toggleAccordion('description')}
                    className="w-full py-4 flex justify-between items-center text-sm uppercase tracking-widest font-medium"
                  >
                    Description
                    {openAccordion === 'description' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'description' && (
                    <div className="pb-6 text-muted-foreground leading-relaxed text-sm">
                      <p>{product.description}</p>
                    </div>
                  )}
                </div>

                {/* Materials & Care */}
                <div className="border-b border-border">
                  <button 
                    onClick={() => toggleAccordion('materials')}
                    className="w-full py-4 flex justify-between items-center text-sm uppercase tracking-widest font-medium"
                  >
                    Materials & Care
                    {openAccordion === 'materials' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'materials' && (
                    <div className="pb-6 text-muted-foreground leading-relaxed text-sm space-y-4">
                      <p><strong>Material:</strong> {product.material}</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" /> Store in a cool, dry place inside the provided pouch.</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" /> Remove before swimming, showering, or exercising.</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" /> Avoid contact with perfumes, lotions, and cosmetics.</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" /> Gently polish with a soft, lint-free cloth after wear.</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Shipping & Returns */}
                <div className="border-b border-border">
                  <button 
                    onClick={() => toggleAccordion('shipping')}
                    className="w-full py-4 flex justify-between items-center text-sm uppercase tracking-widest font-medium"
                  >
                    Shipping & Returns
                    {openAccordion === 'shipping' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'shipping' && (
                    <div className="pb-6 text-muted-foreground leading-relaxed text-sm space-y-4">
                      <p><strong>Free Worldwide Shipping</strong> on all orders. Standard delivery takes 3-7 business days depending on your location.</p>
                      <p><strong>30-Day Returns:</strong> We accept returns for unworn items in their original packaging within 30 days of delivery. For hygiene reasons, pierced earrings cannot be returned unless faulty.</p>
                    </div>
                  )}
                </div>
              </div>
              
            </div>
          </div>

          {/* Related Products */}
          <div className="border-t border-border pt-24">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="text-3xl font-serif mb-4">Complete Your Stack</h2>
              <div className="w-12 h-px bg-accent"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}