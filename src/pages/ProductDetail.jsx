import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, Heart, Share2, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCartStore } from '@/store/useCartStore';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';
import * as Accordion from '@radix-ui/react-accordion';

const ProductDetail = () => {
  const { id } = useParams();
  const addItem = useCartStore((state) => state.addItem);
  const containerRef = useRef(null);

  const product = products.find(p => p.id === id) || products[0]; // Fallback for demo
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedTone, setSelectedTone] = useState('Gold');

  // Load images
  useEffect(() => {
    // Reset state on unmount/remount for new product
    setActiveImageIndex(0);
    setQuantity(1);
    
    // Scroll to top
    window.scrollTo(0, 0);

    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, product]);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedTone);
  };

  // Mock related products
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-background pt-24 pb-24" ref={containerRef}>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-foreground transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Main product area */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Images Left - Desktop: Stacked scroll or grid, Mobile: Carousel. We'll use a main + thumbs layout here */}
          <div className="md:w-1/2 flex flex-col md:flex-row-reverse gap-4">
            {/* Main Image */}
            <div className="w-full aspect-[4/5] bg-muted relative overflow-hidden">
              <img 
                key={`main-${activeImageIndex}-${product.id}`}
                alt={`${product.name} view ${activeImageIndex + 1}`}
                data-strk-img-id={activeImageIndex === 0 ? product.mainImgId : `${product.mainImgId}-${activeImageIndex}`}
                data-strk-img={`[pdp-title] jewelry ${activeImageIndex === 0 ? 'product' : 'editorial model worn'}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 md:w-24 flex-shrink-0">
              {[0, 1, 2, 3].map((idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={cn(
                    "w-20 md:w-full aspect-[4/5] bg-muted relative flex-shrink-0 border transition-all duration-300",
                    activeImageIndex === idx ? "border-foreground" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <img 
                    alt={`${product.name} thumb ${idx + 1}`}
                    data-strk-img-id={idx === 0 ? product.mainImgId : `${product.mainImgId}-${idx}`}
                    data-strk-img={`[pdp-title] jewelry ${idx === 0 ? 'product' : 'editorial model worn'}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details Right */}
          <div className="md:w-1/2 flex flex-col md:py-10">
            <h1 id="pdp-title" className="text-3xl md:text-4xl font-serif uppercase tracking-widest leading-tight mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl font-light">${product.price}</span>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={cn(
                        "w-4 h-4", 
                        i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted border-primary"
                      )} 
                    />
                  ))}
                </div>
                <span className="text-sm border-b border-foreground/30 ml-2 cursor-pointer">{product.reviews} reviews</span>
              </div>
            </div>

            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Tone Selector */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest font-medium mb-4">Metal Tone: {selectedTone}</h3>
              <div className="flex gap-4">
                {['Gold', 'Silver'].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      "px-6 py-3 border text-sm uppercase tracking-widest transition-all duration-300",
                      selectedTone === tone 
                        ? "border-foreground bg-foreground text-background" 
                        : "border-border hover:border-foreground"
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center justify-between border border-border px-4 py-3 sm:w-32">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="hover:opacity-60 transition-opacity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="hover:opacity-60 transition-opacity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground py-4 px-8 uppercase tracking-widest text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Add to Cart - ${(product.price * quantity).toLocaleString()}
              </button>
            </div>

            {/* Wishlist & Share */}
            <div className="flex items-center gap-6 mb-12 border-b border-border/60 pb-8">
              <button className="flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group">
                <Heart className="w-4 h-4 group-hover:fill-current" /> Add to Wishlist
              </button>
              <button className="flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>

            {/* Accordions for Details */}
            <Accordion.Root type="single" collapsible className="w-full space-y-2">
              <Accordion.Item value="details" className="border-b border-border/60 pb-2">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between py-4 uppercase tracking-widest text-sm font-medium group">
                    Product Details
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="text-muted-foreground font-light leading-relaxed pb-6 animate-in slide-in-from-top-2 data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top-2">
                  <ul className="list-disc pl-5 space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </Accordion.Content>
              </Accordion.Item>
              
              <Accordion.Item value="materials" className="border-b border-border/60 pb-2">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between py-4 uppercase tracking-widest text-sm font-medium group">
                    Materials & Care
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="text-muted-foreground font-light leading-relaxed pb-6">
                  <p>Our jewelry is crafted in 18k gold vermeil, a thick layer of gold over solid 925 sterling silver. To keep your pieces looking their best:</p>
                  <ul className="list-disc pl-5 space-y-2 mt-4">
                    <li>Remove before swimming, exercising, or bathing.</li>
                    <li>Apply perfumes and lotions before putting on jewelry.</li>
                    <li>Store in the provided pouch when not in use.</li>
                  </ul>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="shipping" className="border-b border-border/60 pb-2">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between py-4 uppercase tracking-widest text-sm font-medium group">
                    Shipping & Returns
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="text-muted-foreground font-light leading-relaxed pb-6">
                  <p className="mb-4"><strong className="text-foreground">Free Standard Shipping:</strong> 3-5 business days</p>
                  <p className="mb-4"><strong className="text-foreground">Express Shipping ($15):</strong> 1-2 business days</p>
                  <p>We accept returns in their pristine, unworn condition within 30 days of the ship date. Custom pieces and earrings (for hygiene reasons) are final sale.</p>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>

          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="py-24 border-t border-border/60 mt-12 bg-card px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">You May Also Like</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center md:text-left">
            {relatedProducts.map((relProduct) => (
              <div key={relProduct.id} className="group relative flex flex-col">
                <Link to={`/product/${relProduct.id}`} className="block relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                  <img 
                    alt={relProduct.name}
                    data-strk-img-id={relProduct.mainImgId}
                    data-strk-img={`[${relProduct.titleId}] jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img 
                    alt={`${relProduct.name} worn`}
                    data-strk-img-id={relProduct.hoverImgId}
                    data-strk-img={`[${relProduct.titleId}] jewelry model worn`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(relProduct);
                    }}
                    className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur py-3 text-xs uppercase tracking-widest font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-primary-foreground border border-border"
                  >
                    Quick Add
                  </button>
                </Link>
                <h3 id={relProduct.titleId} className="font-serif text-lg tracking-wide uppercase leading-tight line-clamp-1 md:line-clamp-2">
                  {relProduct.name}
                </h3>
                <p className="text-foreground/80 mt-1">${relProduct.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductDetail;