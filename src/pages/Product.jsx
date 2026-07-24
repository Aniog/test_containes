import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from './Home';
import { ChevronDown, ChevronUp, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '../lib/utils';

export default function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [openAccordion, setOpenAccordion] = useState('description');

  // In a real app, these would come from the product object
  const images = product ? [
    { 
      id: `${product.imgId}-main`, 
      query: `[prod-name] [prod-desc] primary view`,
      ratio: "3x4"
    },
    { 
      id: `${product.imgHoverId}-lifestyle`, 
      query: `[prod-name] [prod-desc] lifestyle worn on model`,
      ratio: "3x4" 
    },
    { 
      id: `${product.imgId}-detail`, 
      query: `[prod-name] [prod-desc] detail macro shot`,
      ratio: "1x1" 
    }
  ] : [];

  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);

  useEffect(() => {
    // Reset state when navigating to a new product
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
    setQuantity(1);
  }, [id]);

  useEffect(() => {
     try {
      if (typeof ImageHelper !== 'undefined') {
        const frameId = window.requestAnimationFrame(() => {
          ImageHelper.loadImages(strkImgConfig || {}, containerRef.current);
        });
        return () => window.cancelAnimationFrame(frameId);
      }
    } catch(e) {
      console.log("Image load expected failure", e);
    }
  }, [id, activeImageIndex]); // re-run if image changes due to weird activeImageIndex conditional rendering if we had it, but we render all images anyway usually

  if (!product) {
    return (
      <div className="pt-32 pb-16 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-4 font-serif">Product Not Found</h1>
        <Link to="/shop" className="border-b border-foreground text-sm uppercase tracking-widest pb-1 hover:text-muted-foreground transition-colors">
            Return to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    let realImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";
    if (containerRef.current) {
        const imgElements = containerRef.current.querySelectorAll('img[data-strk-img-id]');
        if (imgElements && imgElements.length > 0) {
            realImage = imgElements[0].src;
        }
    }

    addItem({
      ...product,
      quantity,
      variant,
      image: realImage
    });
  };

  const nextImage = () => setActiveImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-24">
            {/* Gallery Section */}
            <div className="w-full md:w-1/2 flex flex-col md:flex-row-reverse gap-4">
                
                {/* Main Image */}
                <div className="relative flex-1 aspect-[3/4] bg-muted overflow-hidden">
                    {images.map((img, idx) => (
                         <img
                            key={img.id}
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            alt={`${product.name} view ${idx + 1}`}
                            className={cn(
                                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                                idx === activeImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                            )}
                            data-strk-img-id={img.id}
                            data-strk-img={img.query}
                            data-strk-img-ratio={img.ratio}
                            data-strk-img-width="1200"
                        />
                    ))}
                    
                    {/* Mobile Gallery Controls */}
                    <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:hidden z-20 pointer-events-none">
                        <button onClick={prevImage} className="w-10 h-10 bg-background/80 backdrop-blur rounded-full flex items-center justify-center pointer-events-auto filter drop-shadow hover:bg-background">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={nextImage} className="w-10 h-10 bg-background/80 backdrop-blur rounded-full flex items-center justify-center pointer-events-auto filter drop-shadow hover:bg-background">
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Dots indicator for mobile */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 md:hidden z-20">
                         {images.map((_, idx) => (
                            <div 
                                key={idx} 
                                className={cn("w-1.5 h-1.5 rounded-full transition-colors", idx === activeImageIndex ? "bg-primary" : "bg-primary/30")}
                            />
                        ))}
                    </div>
                </div>

                {/* Thumbnails (Desktop) */}
                <div className="hidden md:flex flex-col gap-4 w-24">
                     {images.map((img, idx) => (
                        <button
                            key={`thumb-${img.id}`}
                            onClick={() => setActiveImageIndex(idx)}
                            className={cn(
                                "aspect-[3/4] relative overflow-hidden transition-all",
                                idx === activeImageIndex ? "ring-1 ring-foreground ring-offset-2" : "opacity-70 hover:opacity-100"
                            )}
                        >
                             <img
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                alt={`Thumbnail ${idx + 1}`}
                                className="absolute inset-0 w-full h-full object-cover"
                                data-strk-img-id={`thumb-${img.id}`}
                                data-strk-img={img.query}
                                data-strk-img-ratio={img.ratio}
                                data-strk-img-width="200"
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Details Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center max-w-md">
                <h1 id="prod-name" className="text-3xl lg:text-4xl font-serif tracking-wider uppercase mb-2">
                    {product.name}
                </h1>
                
                <div className="flex items-center gap-4 mb-6">
                    <p className="text-xl font-medium">${product.price}</p>
                    <div className="flex items-center text-primary">
                        <div className="flex gap-0.5 mr-2">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-current" />)}
                        </div>
                        <span className="text-xs text-muted-foreground underline uppercase tracking-widest mt-0.5">24 Reviews</span>
                    </div>
                </div>

                <p id="prod-desc" className="text-muted-foreground font-light leading-relaxed mb-8">
                    {product.description}. Plated in heavy 18k gold over hypoallergenic brass.
                    Designed for everyday elegance, bringing an elevated editorial touch to any look.
                </p>

                {/* Variant Selector */}
                <div className="mb-8">
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
                        Material: <span className="text-foreground ml-2 capitalize font-medium">{variant}</span>
                    </p>
                    <div className="flex gap-4">
                        <button 
                            onClick={() => setVariant('gold')}
                            className={cn(
                                "px-6 py-2 border text-sm uppercase tracking-widest transition-colors",
                                variant === 'gold' ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/50 text-muted-foreground"
                            )}
                        >
                            18k Gold
                        </button>
                        <button 
                            onClick={() => setVariant('silver')}
                            className={cn(
                                "px-6 py-2 border text-sm uppercase tracking-widest transition-colors",
                                variant === 'silver' ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/50 text-muted-foreground"
                            )}
                        >
                            Sterling
                        </button>
                    </div>
                </div>

                {/* Add to Cart Actions */}
                <div className="flex gap-4 mb-12">
                     <div className="flex items-center border border-border w-1/3">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-3 hover:bg-muted transition-colors flex-1"
                      >
                        -
                      </button>
                      <span className="px-2 text-sm text-center flex-1">{quantity}</span>
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-3 hover:bg-muted transition-colors flex-1"
                      >
                        +
                      </button>
                    </div>
                    <button 
                        onClick={handleAddToCart}
                        className="flex-1 bg-primary text-primary-foreground uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
                    >
                        Add to Cart - ${(product.price * quantity).toFixed(2)}
                    </button>
                </div>

                {/* Accordions */}
                <div className="border-t border-border">
                    {[
                        { id: 'description', title: 'Description', content: 'Each piece is conceptualized in our studio and crafted by master jewelers using recycled metals. The subtle texture and thoughtful proportions ensure it catches the light beautifully from every angle.' },
                        { id: 'materials', title: 'Materials & Care', content: 'Heavily plated in 18k gold over a hypoallergenic brass core. Free of nickel and lead. To maintain its shine, avoid contact with water, perfumes, and lotions. Store in the provided pouch when not worn.' },
                        { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $100. Standard shipping takes 3-5 business days. We accept returns within 30 days of delivery in unworn condition with original packaging.' }
                    ].map((acc) => (
                        <div key={acc.id} className="border-b border-border">
                            <button 
                                className="w-full flex items-center justify-between py-5 text-left uppercase tracking-widest text-sm transition-colors hover:text-muted-foreground"
                                onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                            >
                                {acc.title}
                                {openAccordion === acc.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
                            <div className={cn(
                                "overflow-hidden transition-all duration-300",
                                openAccordion === acc.id ? "max-h-48 pb-5" : "max-h-0"
                            )}>
                                <p className="text-muted-foreground font-light text-sm leading-relaxed">{acc.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>

        {/* You May Also Like */}
        <section className="py-12 border-t border-border">
             <div className="text-center mb-12">
                 <h2 className="text-3xl font-serif">You May Also Like</h2>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map(p => (
                    <Link key={p.id} to={`/product/${p.id}`} className="group block text-center">
                        <div className="relative aspect-[3/4] bg-muted mb-4 overflow-hidden">
                             <img
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                alt={p.name}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                data-strk-img-id={`related-${p.imgId}`}
                                data-strk-img={`[related-name-${p.id}] jewelry`}
                                data-strk-img-ratio="3x4"
                                data-strk-img-width="400"
                            />
                        </div>
                        <h3 id={`related-name-${p.id}`} className="font-serif tracking-wider mb-1 group-hover:opacity-70 transition-opacity">{p.name}</h3>
                        <p className="font-medium text-sm">${p.price}</p>
                    </Link>
                ))}
            </div>
        </section>

      </div>
    </div>
  );
}