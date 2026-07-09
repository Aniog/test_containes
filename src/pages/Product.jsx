import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useState, useMemo, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProductById, getProducts } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = getProductById(id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold');
  const [openAccordion, setOpenAccordion] = useState('description');

  // Reset state when product id changes
  useEffect(() => {
    setActiveImageIndex(0);
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    const related = getProducts().filter(p => p.id !== product.id && p.category === product.category);
    if (related.length < 4) {
      // pad with other products if not enough in same category
      const others = getProducts().filter(p => p.id !== product.id && p.category !== product.category);
      return [...related, ...others].slice(0, 4);
    }
    return related.slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <button onClick={() => navigate('/shop')} className="text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:text-accent transition-colors">
          Return to Shop
        </button>
      </div>
    );
  }

  const containerRef = useRef(null);
  
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      try {
        if(containerRef.current) {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
      } catch (e) {
        console.error("Image load fail", e);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImageIndex]);

  // Combine primary and gallery for thumbnails
  const allImages = [product.images.primary, ...product.images.gallery];

  const handleAddToCart = () => {
    addItem(product, quantity, variant);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-24 bg-background" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-foreground transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails (bottom on mobile, left on desktop) */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible md:w-20 flex-shrink-0">
              {allImages.map((imgObj, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-[3/4] w-20 flex-shrink-0 bg-secondary rounded-sm overflow-hidden transition-all ${
                    activeImageIndex === idx ? 'ring-1 ring-accent ring-offset-2 ring-offset-background' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img={imgObj.query}
                    data-strk-img-id={imgObj.id}
                    data-strk-img-ratio="1x1"
                    alt={`Thumbnail ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 relative aspect-[3/4] bg-secondary rounded-sm overflow-hidden">
               <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img={allImages[activeImageIndex].query}
                  data-strk-img-id={allImages[activeImageIndex].id}
                  data-strk-img-ratio="3x4"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col">
            <h1 id={`title-${product.id}`} className="font-serif text-3xl lg:text-4xl mb-2">{product.name}</h1>
            <p className="text-xl text-accent mb-4">${product.price}</p>
            
            <div className="flex items-center gap-2 mb-8">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill={i < Math.floor(product.reviews.average) ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">{product.reviews.count} Reviews</span>
            </div>

            <p id={`desc-${product.id}`} className="text-foreground/80 font-serif text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-sm uppercase tracking-widest mb-3 font-medium">Metal: {variant}</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setVariant('Gold')}
                  className={`w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center ${variant === 'Gold' ? 'border-accent' : 'border-transparent'}`}
                  aria-label="Gold"
                >
                  <span className="w-10 h-10 rounded-full bg-[#E5C158] block shadow-sm border border-black/10"></span>
                </button>
                <button 
                  onClick={() => setVariant('Silver')}
                  className={`w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center ${variant === 'Silver' ? 'border-foreground/30' : 'border-transparent'}`}
                  aria-label="Silver"
                >
                  <span className="w-10 h-10 rounded-full bg-[#E0E0E0] block shadow-sm border border-black/10"></span>
                </button>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center justify-between border border-border px-4 py-4 w-full sm:w-32">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-muted-foreground hover:text-foreground"><Minus size={16} /></button>
                <span className="text-sm font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-muted-foreground hover:text-foreground"><Plus size={16} /></button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground py-4 uppercase tracking-widest text-sm font-medium hover:bg-accent transition-colors"
              >
                Add To Cart
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border mt-auto">
              <AccordionItem 
                title="Description" 
                isOpen={openAccordion === 'description'} 
                onClick={() => toggleAccordion('description')}
              >
                <p className="text-foreground/80 text-sm leading-relaxed">{product.description} Crafted with precision to ensure comfortable all-day wear. Hypoallergenic and nickel-free.</p>
              </AccordionItem>
              
              <AccordionItem 
                title="Materials & Care" 
                isOpen={openAccordion === 'materials'} 
                onClick={() => toggleAccordion('materials')}
              >
                <p className="text-foreground/80 text-sm leading-relaxed mb-2"><strong>Material:</strong> {product.material} over a solid 925 sterling silver base.</p>
                <p className="text-foreground/80 text-sm leading-relaxed"><strong>Care:</strong> To maintain the luster, remove before swimming, exercising, or applying lotions and perfumes. Store in the provided Velmora pouch when not in use.</p>
              </AccordionItem>

              <AccordionItem 
                title="Shipping & Returns" 
                isOpen={openAccordion === 'shipping'} 
                onClick={() => toggleAccordion('shipping')}
              >
                <p className="text-foreground/80 text-sm leading-relaxed mb-2">Free standard worldwide shipping on all orders. Express options available at checkout.</p>
                <p className="text-foreground/80 text-sm leading-relaxed">We accept returns within 30 days of delivery in unworn, original condition.</p>
              </AccordionItem>
            </div>

          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 pt-16 border-t border-border">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl" id="related-title">You May Also Like</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <div key={p.id} className="group relative">
                  <Link to={`/product/${p.id}`} className="block relative aspect-[3/4] bg-secondary rounded-sm overflow-hidden mb-4">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      data-strk-img={p.images.primary.query}
                      data-strk-img-id={p.images.primary.id}
                      data-strk-img-ratio="3x4"
                      alt={p.name}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                       src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                       data-strk-img={p.images.hover.query}
                       data-strk-img-id={p.images.hover.id}
                       data-strk-img-ratio="3x4"
                       alt={`${p.name} worn`}
                       className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </Link>
                  <div className="text-center">
                    <h3 className="font-serif text-lg mb-1" id={`rel-title-${p.id}`}>
                      <Link to={`/product/${p.id}`} className="hover:text-accent transition-colors">
                        {p.name}
                      </Link>
                    </h3>
                    <p className="text-accent">${p.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

function AccordionItem({ title, isOpen, onClick, children }) {
  return (
    <div className="border-b border-border">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none"
      >
        <span className="text-sm font-medium uppercase tracking-widest">{title}</span>
        <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {children}
      </div>
    </div>
  );
}