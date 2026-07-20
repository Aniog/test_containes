import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEED_PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/home/ProductCard';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json'; // Make sure this path exists or omit for now
import { cn } from '../lib/utils';
import { toast } from 'sonner';

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold'); // gold or silver
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [mainImageIndex, setMainImageIndex] = useState(0);
  
  const containerRef = React.useRef(null);

  useEffect(() => {
    // Only fetch product initially, ScrollToTop handles the scrolling globally
    const found = SEED_PRODUCTS.find(p => p.id === id);
    setProduct(found || null);
    setQuantity(1);
  }, [id]);

  useEffect(() => {
    // If the ImageHelper/config doesn't exist yet, wrap in try/catch to not break app
    try {
      if(strkImgConfig && product && containerRef.current) {
        requestAnimationFrame(() => {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
      }
    } catch(e) {
      console.warn("ImageHelper setup skipped for now", e);
    }
  }, [product, variant, mainImageIndex]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Link to="/shop" className="border-b border-foreground pb-1 tracking-widest uppercase text-sm">
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({ ...product, quantity, variant });
    toast.success(`${product.name} added to cart!`);
  };

  const relatedProducts = SEED_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  // Generate generic placeholder IDs
  const imgStrkId = `pdp-img-${product.id}`;
  const titleId = `pdp-title-${product.id}`;
  const catId = `pdp-cat-${product.id}`;
  const descId = `pdp-desc-${product.id}`;

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div ref={containerRef} className="pt-24 bg-background min-h-screen">
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6 py-4 border-b border-border mb-8">
        <nav className="flex text-xs tracking-widest uppercase text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors hidden sm:block">Home</Link>
          <span className="mx-2 hidden sm:block">/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors hidden sm:block">Shop</Link>
          <span className="mx-2 hidden sm:block">/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-foreground transition-colors">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground truncate">{product.name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 md:px-6 mb-24">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Left: Gallery */}
          <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            
            {/* Thumbnails (vertical on desktop, horizontal on mobile) */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible hide-scrollbar shrink-0 md:w-20 lg:w-24">
              {[0, 1, 2, 3].map((idx) => (
                <button 
                  key={idx}
                  onClick={() => setMainImageIndex(idx)}
                  className={cn(
                    "relative aspect-[4/5] w-20 md:w-full bg-muted flex-shrink-0 transition-all",
                    mainImageIndex === idx ? "ring-1 ring-foreground opacity-100" : "opacity-60 hover:opacity-100"
                  )}
                >
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    data-strk-img-id={`${imgStrkId}-thumb-${idx}`}
                    data-strk-img={`[${catId}] [${titleId}] gold jewelry detail view ${idx}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="150"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative aspect-[4/5] bg-muted w-full overflow-hidden">
               <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id={`${imgStrkId}-main-${mainImageIndex}`}
                  data-strk-img={`[${catId}] [${titleId}] gold jewelry editorial close up ${mainImageIndex}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1000"
                />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="w-full md:w-1/2 flex flex-col">
            <p id={catId} className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
              {product.category}
            </p>
            <h1 id={titleId} className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
              <span className="font-serif text-2xl">${product.price.toFixed(2)}</span>
              <div className="flex items-center text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">({product.reviews.count})</span>
              </div>
            </div>

            <p id={descId} className="text-foreground/80 leading-relaxed mb-8 font-light">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mb-8">
              <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Material / Tone: <span className="text-foreground capitalize">{variant}</span>
              </span>
              <div className="flex gap-4">
                <button 
                  onClick={() => setVariant('gold')}
                  className={cn(
                    "px-6 py-2 text-sm tracking-widest uppercase transition-all duration-300",
                    variant === 'gold' 
                      ? "bg-[#D4AF37] text-white border border-[#D4AF37]" 
                      : "bg-transparent text-foreground border border-border hover:border-[#D4AF37]"
                  )}
                >
                  Gold
                </button>
                <button 
                  onClick={() => setVariant('silver')}
                  className={cn(
                    "px-6 py-2 text-sm tracking-widest uppercase transition-all duration-300",
                    variant === 'silver' 
                      ? "bg-[#C0C0C0] text-black border border-[#C0C0C0]" 
                      : "bg-transparent text-foreground border border-border hover:border-[#C0C0C0]"
                  )}
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center border border-border h-12 w-32 shrink-0">
                  <button 
                    className="px-4 h-full hover:bg-muted transition-colors text-lg"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="flex-1 text-center text-sm">{quantity}</span>
                  <button 
                    className="px-4 h-full hover:bg-muted transition-colors text-lg"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-3 h-3" />
                  </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground h-12 text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors shadow-sm"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border mt-auto">
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="w-full py-4 flex justify-between items-center text-sm tracking-widest uppercase text-left"
                >
                  Description
                  {activeAccordion === 'description' ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                </button>
                <div className={cn("overflow-hidden transition-all duration-300", activeAccordion === 'description' ? "max-h-[500px] pb-4" : "max-h-0")}>
                  <p className="text-sm leading-relaxed text-foreground/80 font-light">
                    {product.description} All our pieces are crafted to be water-resistant and suitable for daily wear. Avoid rigorous scratching.
                  </p>
                </div>
              </div>
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="w-full py-4 flex justify-between items-center text-sm tracking-widest uppercase text-left"
                >
                  Materials & Care
                  {activeAccordion === 'materials' ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                </button>
                <div className={cn("overflow-hidden transition-all duration-300", activeAccordion === 'materials' ? "max-h-[500px] pb-4" : "max-h-0")}>
                  <p className="text-sm leading-relaxed text-foreground/80 font-light">
                    Material: 18K Gold Vermeil (Thick layer of solid gold over 925 sterling silver base). Nickel-free and hypoallergenic. To maintain its shine, avoid harsh chemicals and store in the provided pouch.
                  </p>
                </div>
              </div>
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full py-4 flex justify-between items-center text-sm tracking-widest uppercase text-left"
                >
                  Shipping & Returns
                  {activeAccordion === 'shipping' ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                </button>
                <div className={cn("overflow-hidden transition-all duration-300", activeAccordion === 'shipping' ? "max-h-[500px] pb-4" : "max-h-0")}>
                  <p className="text-sm leading-relaxed text-foreground/80 font-light">
                    Free worldwide standard shipping on orders over $50. You can return any unworn item in its original condition within 30 days of receipt for a full refund or exchange.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-card py-24 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl mb-4">You May Also Like</h2>
            <p className="text-muted-foreground uppercase tracking-widest text-sm">Curated to match</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}