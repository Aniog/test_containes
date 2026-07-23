import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { seedProducts } from './Home';
import { ChevronDown, ChevronUp, Star, MoveRight, Minus, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { toast } from 'sonner';

const Accordion = ({ title, defaultOpen = false, children }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border-t border-border">
            <button 
                className="w-full py-6 flex justify-between items-center text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-serif uppercase tracking-widest text-sm">{title}</span>
                {isOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <div className="text-muted-foreground text-sm leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
};

const Product = () => {
    const { id } = useParams();
    const productId = parseInt(id, 10);
    const product = seedProducts.find(p => p.id === productId) || seedProducts[0];
    
    const [activeImage, setActiveImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [variant, setVariant] = useState('Gold');
    const addItem = useCartStore(state => state.addItem);
    const containerRef = useRef(null);

    useEffect(() => {
       const frameId = window.requestAnimationFrame(() => {
          if (containerRef.current) {
              ImageHelper.loadImages(strkImgConfig, containerRef.current);
          }
       });
       return () => window.cancelAnimationFrame(frameId);
    }, [product.id, activeImage]);

    if (!product) return <div>Product not found</div>;

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity,
            image: "",
            imgId1: product.imgId1,
            variant
        });
        // Feedback is visual via the cart drawer opening
    };

    const images = [
        product.imgId1,
        product.imgId2,
        `prod-${product.id}-detail-3`
    ];

    return (
        <div className="pt-20 bg-background min-h-screen pb-24" ref={containerRef}>
            {/* Breadcrumb */}
            <div className="container mx-auto px-4 md:px-8 py-6 text-xs uppercase tracking-widest text-muted-foreground flex space-x-2">
                <Link to="/" className="hover:text-foreground">Home</Link>
                <span>/</span>
                <Link to={`/shop?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
                <span>/</span>
                <span className="text-foreground font-medium">{product.name}</span>
            </div>

            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24 mb-24">
                    {/* Image Gallery */}
                    <div className="w-full lg:w-3/5 flex flex-col md:flex-row-reverse gap-4">
                        {/* Main Image */}
                        <div className="w-full md:w-5/6 aspect-[3/4] bg-muted relative overflow-hidden">
                            <img 
                                data-strk-img-id={images[activeImage]}
                                data-strk-img={`[pdp-title] ${activeImage === 1 ? 'worn by model' : 'jewelry close up'} aesthetic warm lighting on ${variant} tone`}
                                data-strk-img-ratio="3x4"
                                data-strk-img-width="1200"
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                alt={product.name}
                                className="w-full h-full object-cover transition-opacity duration-300"
                            />
                        </div>
                        
                        {/* Thumbnails */}
                        <div className="flex md:flex-col gap-4 w-full md:w-1/6 overflow-x-auto no-scrollbar md:overflow-visible">
                            {images.map((imgId, idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`shrink-0 w-20 md:w-full aspect-[3/4] bg-muted overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-primary' : 'border-transparent'}`}
                                >
                                    <img 
                                        data-strk-img-id={`${imgId}-thumb`}
                                        data-strk-img={`[pdp-title] ${idx === 1 ? 'worn by model' : 'jewelry close up'} warm lighting`}
                                        data-strk-img-ratio="3x4"
                                        data-strk-img-width="300"
                                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                        alt={`Thumbnail ${idx+1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="w-full lg:w-2/5 flex flex-col pt-4 lg:pt-10">
                        {/* Rating */}
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="flex">
                                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-primary text-primary" />)}
                            </div>
                            <span className="text-xs uppercase tracking-widest text-muted-foreground pt-1">(124 Reviews)</span>
                        </div>

                        <h1 id="pdp-title" className="font-serif text-3xl md:text-5xl uppercase tracking-widest mb-4">{product.name}</h1>
                        <p className="text-xl md:text-2xl mb-8">${product.price.toFixed(2)}</p>
                        
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            {product.shortDesc}. Designed to be worn every day and layered endlessly. 
                            Our demi-fine jewelry bridges the gap between fast fashion and fine jewelry, 
                            giving you luxury that lives with you.
                        </p>

                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm uppercase tracking-widest font-medium">Metal: {variant}</span>
                            </div>
                            <div className="flex gap-4">
                                <button 
                                    onClick={() => setVariant('Gold')}
                                    className={`px-8 py-3 text-sm uppercase tracking-widest border transition-all ${
                                        variant === 'Gold' 
                                            ? 'border-primary bg-primary/5 font-medium' 
                                            : 'border-border text-muted-foreground hover:border-primary/50'
                                    }`}
                                >
                                    18k Gold
                                </button>
                                <button 
                                    onClick={() => setVariant('Silver')}
                                    className={`px-8 py-3 text-sm uppercase tracking-widest border transition-all ${
                                        variant === 'Silver' 
                                            ? 'border-primary bg-primary/5 font-medium' 
                                            : 'border-border text-muted-foreground hover:border-primary/50'
                                    }`}
                                >
                                    Silver
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <div className="flex items-center border border-primary h-14 w-full sm:w-32 shrink-0">
                                <button 
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-1/3 h-full flex items-center justify-center hover:bg-muted"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-1/3 text-center text-sm font-medium">{quantity}</span>
                                <button 
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-1/3 h-full flex items-center justify-center hover:bg-muted"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                            <button 
                                onClick={handleAddToCart}
                                className="flex-1 bg-primary text-primary-foreground h-14 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors"
                            >
                                Add to Cart - ${(product.price * quantity).toFixed(2)}
                            </button>
                        </div>

                        {/* Accordions */}
                        <div className="border-b border-border">
                            <Accordion title="Description" defaultOpen={true}>
                                <p className="mb-4">
                                    Each piece is carefully crafted to ensure lasting quality. 
                                    The {product.name.toLowerCase()} features a secure closure and a 
                                    weightless feel, making it perfect for daily wear.
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Hand-finished detailing</li>
                                    <li>Water and tarnish resistant</li>
                                    <li>Designed in our flagship studio</li>
                                </ul>
                            </Accordion>
                            <Accordion title="Materials & Care">
                                <p className="mb-2 uppercase text-xs tracking-widest font-medium text-foreground">Materials</p>
                                <p className="mb-4">Crafted from a thick layer of 18k gold on sterling silver (vermeil). This gives the piece its beautiful hue and durability.</p>
                                <p className="mb-2 uppercase text-xs tracking-widest font-medium text-foreground">Care</p>
                                <p>To maintain the shine, avoid harsh chemicals and store in the provided pouch when not worn.</p>
                            </Accordion>
                            <Accordion title="Shipping & Returns">
                                <p className="mb-2"><strong>Free Worldwide Shipping</strong> on all orders over $50.</p>
                                <p>Not quite right? We offer a 30-day return policy for a full refund or exchange, unworn and in original packaging.</p>
                            </Accordion>
                        </div>
                    </div>
                </div>

                {/* You may also like */}
                <div className="pt-24 border-t border-border">
                    <h2 className="font-serif text-3xl mb-12 text-center">You May Also Like</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {seedProducts.filter(p => p.id !== product.id).slice(0, 4).map(p => (
                            <Link key={p.id} to={`/product/${p.id}`} className="group relative aspect-[3/4] overflow-hidden bg-muted">
                                <img
                                    data-strk-img-id={`related-${p.id}`}
                                    data-strk-img={`[related-name-${p.id}] warm gold jewelry`}
                                    data-strk-img-ratio="3x4"
                                    data-strk-img-width="400"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                    alt={p.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                                <div className="absolute inset-0 flex items-center justify-center p-4">
                                     <h3 id={`related-name-${p.id}`} className="font-serif text-white text-xl text-center uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                                         {p.name}
                                     </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;