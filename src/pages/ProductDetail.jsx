import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronDown, Check, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';

const strkImgConfig = { images: {}, backgrounds: {} };

const PRODUCT_DATA = {
  '1': { id: '1', name: 'VIVID AURA JEWELS', price: 42.00, category: 'earrings', desc: 'Handcrafted gold ear cuff featuring a delicate crystal accent. Designed to comfortably rest on the ear without piercing. A modern touch of quiet luxury.' },
  '2': { id: '2', name: 'MAJESTIC FLORA NECTAR', price: 68.00, category: 'necklaces', desc: 'A vintage-inspired floral necklace with multicolor crystal details set in 18k gold vermeil. The perfect statement piece for layering or wearing solo.' },
  '3': { id: '3', name: 'GOLDEN SPHERE HUGGIES', price: 38.00, category: 'huggies', desc: 'Chunky but lightweight, these dome huggie earrings offer maximum impact for everyday wear. Secured with a snap closure.' },
  '4': { id: '4', name: 'AMBER LACE EARRINGS', price: 54.00, category: 'earrings', desc: 'Textured gold filigree drop earrings inspired by vintage lace patterns. Elegant, lightweight, and perfect for evening wear.' },
  '5': { id: '5', name: 'ROYAL HEIRLOOM SET', price: 95.00, category: 'necklaces', desc: 'The ultimate gift. A stunning matching necklace and earring set featuring intricate heirloom details. Arrives in our signature velvet box.' },
};

const SUGGESTED_PRODUCTS = [
  ...Object.values(PRODUCT_DATA)
]; // just mock data

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCT_DATA[id] || PRODUCT_DATA['1'];
  
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('Gold'); // 'Gold' or 'Silver'
  const [activeAccordion, setActiveAccordion] = useState('description');
  const [isAdding, setIsAdding] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeImageIdx]);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart({ ...product, image: `https://images.unsplash.com/photo-[replace-me]`, variant }, quantity, variant);
    setTimeout(() => setIsAdding(false), 800);
  };

  return (
    <div className="container py-8 md:py-16" ref={containerRef}>
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-8">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to={`/category/${product.category}`} className="hover:text-foreground">{product.category}</Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left: Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 shrink-0 hide-scrollbar">
            {[0, 1, 2].map((idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                className={`relative aspect-[3/4] w-20 md:w-full shrink-0 border-2 overflow-hidden transition-all ${
                  activeImageIdx === idx ? 'border-accent' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                  <img 
                    alt={`Thumbnail ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover bg-secondary"
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[pdp-title] ${idx === 0 ? 'product' : idx === 1 ? 'lifestyle' : 'detail'} shot gold jewelry warm lighting`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative flex-1 aspect-[3/4] bg-secondary overflow-hidden">
            <img 
              key={activeImageIdx} // Force re-render for clean swap
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-500"
              data-strk-img-id={`pdp-main-${product.id}-${activeImageIdx}`}
              data-strk-img={`[pdp-title] ${activeImageIdx === 0 ? 'hero product' : activeImageIdx === 1 ? 'model wearing lifestyle' : 'close up macro texture detail'} shot gold jewelry aesthetic`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col py-4">
          <div className="mb-8">
            <h1 id="pdp-title" className="text-3xl md:text-5xl font-serif tracking-widest uppercase mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <p className="text-xl md:text-2xl">${product.price.toFixed(2)}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground border-l border-border pl-4">
                <div className="flex text-accent gap-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <span>(128 reviews)</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.desc}
            </p>
          </div>

          {/* Variants */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium uppercase tracking-widest">Metal Tone</span>
              <span className="text-xs text-muted-foreground">{variant}</span>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => setVariant('Gold')}
                className={`relative w-10 h-10 rounded-full border-2 transition-all ${
                  variant === 'Gold' ? 'border-foreground shadow-sm' : 'border-transparent hover:scale-105'
                }`}
                style={{ backgroundColor: 'var(--color-jewelry-gold)' }}
                aria-label="Gold"
              >
                {variant === 'Gold' && <Check className="absolute inset-0 m-auto w-4 h-4 text-white" />}
              </button>
              <button 
                onClick={() => setVariant('Silver')}
                className={`relative w-10 h-10 rounded-full border-2 transition-all ${
                  variant === 'Silver' ? 'border-foreground shadow-sm' : 'border-transparent hover:scale-105'
                }`}
                style={{ backgroundColor: '#E5E4E2' }}
                aria-label="Silver"
              >
                {variant === 'Silver' && <Check className="absolute inset-0 m-auto w-4 h-4 text-foreground" />}
              </button>
            </div>
          </div>

          {/* Add to Cart Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className="flex items-center border border-border bg-background sm:w-1/3 h-14">
              <button 
                className="px-4 py-2 hover:bg-secondary h-full transition-colors flex-1 flex justify-center items-center"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-2 font-medium w-12 text-center">{quantity}</span>
              <button 
                className="px-4 py-2 hover:bg-secondary h-full transition-colors flex-1 flex justify-center items-center"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`flex-1 h-14 uppercase tracking-widest text-sm font-medium transition-all ${
                isAdding 
                  ? 'bg-accent text-accent-foreground flex items-center justify-center' 
                  : 'bg-foreground text-background hover:bg-foreground/90'
              }`}
            >
              {isAdding ? <Check className="w-5 h-5" /> : `Add to Cart - $${(product.price * quantity).toFixed(2)}`}
            </button>
          </div>

          {/* Accordions */}
          <div className="border-t border-border">
            {[
              { id: 'description', title: 'Description', content: product.desc },
              { id: 'materials', title: 'Materials & Care', content: 'Crafted with a thick layer of 18k gold vermeil over a solid 925 sterling silver base. Hypoallergenic and nickel-free. To maintain the luster, avoid contact with water, perfumes, and lotions. Store in the provided pouch.' },
              { id: 'shipping', title: 'Shipping & Returns', content: 'Free standard worldwide shipping on all orders over $50. We accept returns in original condition within 30 days of delivery. Custom or engraved variants are final sale.' }
            ].map((section) => (
              <div key={section.id} className="border-b border-border">
                <button 
                  onClick={() => setActiveAccordion(activeAccordion === section.id ? null : section.id)}
                  className="w-full py-6 flex items-center justify-between group"
                >
                  <span className="font-serif uppercase tracking-widest text-sm">{section.title}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeAccordion === section.id ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${activeAccordion === section.id ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Complete the Look / Related */}
      <section className="mt-32">
        <div className="flex justify-between items-end mb-12 border-b border-border pb-6">
          <h2 className="text-3xl font-serif">Complete the Look</h2>
          <Link to="/shop" className="group flex items-center text-sm uppercase tracking-widest hover:text-accent transition-colors">
            Shop All <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {SUGGESTED_PRODUCTS.slice(0,4).map((item) => (
              <div key={item.id} className="group relative flex flex-col cursor-pointer">
                <Link to={`/product/${item.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary">
                  <img 
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={`related-${item.id}`}
                    data-strk-img={`[related-prod-title-${item.id}] elegant simple gold jewelry product shot`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </Link>
                <div className="flex flex-col gap-1 items-center text-center px-2">
                    <h3 id={`related-prod-title-${item.id}`} className="font-serif uppercase tracking-wider text-xs leading-tight">{item.name}</h3>
                    <p className="text-muted-foreground text-sm">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

    </div>
  );
}
