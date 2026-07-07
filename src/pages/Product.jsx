import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ArrowLeft, ArrowRight, Truck, RefreshCw, ShieldCheck } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../components/home/Bestsellers'; // Reusing seed data

const Product = () => {
    const { id } = useParams();
    const containerRef = useRef(null);
    const [quantity, setQuantity] = useState(1);
    const [tone, setTone] = useState('gold');
    const [activeImage, setActiveImage] = useState(0);

    const product = products.find(p => p.id === id) || products[0]; // fallback to first
    
    // Simulate related products
    const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, [product]);

    return (
        <div className="pt-24 pb-16 bg-background" ref={containerRef}>
            <div className="container mx-auto px-4 md:px-8">
                {/* Breadcrumbs */}
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link to={`/collections/${product.type.split(' ')[0]}`} className="hover:text-primary transition-colors">{product.type}</Link>
                    <span className="mx-2">/</span>
                    <span className="text-primary">{product.name}</span>
                </div>

                <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-24">
                    {/* Image Gallery */}
                    <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
                        {/* Thumbnails */}
                        <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 flex-shrink-0">
                            {[1, 2].map((num, idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`relative aspect-[3/4] w-20 md:w-full flex-shrink-0 overflow-hidden bg-velmora-light border transition-all ${activeImage === idx ? 'border-primary' : 'border-transparent opacity-70 hover:opacity-100'}`}
                                >
                                    <img
                                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                        alt={`Thumbnail ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                        data-strk-img-id={`thumb-${num}-${product.id}`}
                                        data-strk-img={`[prod-detail-name] image ${num}`}
                                        data-strk-img-ratio="3x4"
                                        data-strk-img-width="200"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="relative flex-grow aspect-[3/4] bg-velmora-light overflow-hidden">
                            <img
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                alt={product.name}
                                className="w-full h-full object-cover"
                                data-strk-img-id={`main-${activeImage + 1}-${product.id}`}
                                data-strk-img={`[prod-detail-name] image ${activeImage + 1} best quality`}
                                data-strk-img-ratio="3x4"
                                data-strk-img-width="1200"
                            />
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <div className="flex items-center space-x-1 mb-4">
                            {[...Array(5)].map((_, j) => (
                                <Star key={j} size={14} className="fill-velmora-gold text-velmora-gold" />
                            ))}
                            <span className="text-xs text-muted-foreground ml-2">(124 Reviews)</span>
                        </div>
                        
                        <h1 id="prod-detail-name" className="text-3xl md:text-4xl font-serif uppercase tracking-widest mb-4">
                            {product.name}
                        </h1>
                        
                        <p className="text-xl mb-6">${product.price}</p>
                        
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            A timeless piece designed to elevate your everyday. The {product.name} features delicate details and a comfortable weight, making it the perfect addition to your signature stack.
                        </p>

                        <div className="space-y-6 mb-10">
                            {/* Materials / Tone */}
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-widest mb-3">Tone: {tone.charAt(0).toUpperCase() + tone.slice(1)}</p>
                                <div className="flex space-x-3">
                                    <button 
                                        className={`w-8 h-8 rounded-full border-2 transition-all ${tone === 'gold' ? 'border-primary p-[2px]' : 'border-transparent'}`}
                                        onClick={() => setTone('gold')}
                                    >
                                        <div className="w-full h-full rounded-full bg-velmora-gold"></div>
                                    </button>
                                    <button 
                                        className={`w-8 h-8 rounded-full border-2 transition-all ${tone === 'silver' ? 'border-primary p-[2px]' : 'border-transparent'}`}
                                        onClick={() => setTone('silver')}
                                    >
                                        <div className="w-full h-full rounded-full bg-slate-300"></div>
                                    </button>
                                </div>
                            </div>

                            {/* Quantity */}
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-widest mb-3">Quantity</p>
                                <div className="flex items-center border border-border w-32 h-12">
                                    <button 
                                        className="w-10 h-full flex items-center justify-center hover:bg-velmora-light transition-colors text-xl"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    >−</button>
                                    <input 
                                        type="number" 
                                        className="w-12 h-full text-center bg-transparent border-none outline-none"
                                        value={quantity}
                                        readOnly
                                    />
                                    <button 
                                        className="w-10 h-full flex items-center justify-center hover:bg-velmora-light transition-colors text-xl"
                                        onClick={() => setQuantity(quantity + 1)}
                                    >+</button>
                                </div>
                            </div>
                        </div>

                        <Button className="w-full uppercase tracking-widest font-serif py-6 rounded-none bg-primary hover:bg-velmora-gold transition-colors mb-12">
                            Add to Cart — ${(product.price * quantity).toFixed(2)}
                        </Button>

                        {/* Accordions */}
                        <Accordion type="single" collapsible className="w-full uppercase tracking-widest text-sm font-serif">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Description</AccordionTrigger>
                                <AccordionContent className="normal-case tracking-normal font-sans text-muted-foreground leading-relaxed">
                                    <p className="mb-4">{product.desc}. Designed meticulously to be a staple in your jewelry box.</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Premium finish</li>
                                        <li>Hypoallergenic and nickel-free</li>
                                        <li>Packaged in a signature Velmora box</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Materials & Care</AccordionTrigger>
                                <AccordionContent className="normal-case tracking-normal font-sans text-muted-foreground leading-relaxed">
                                    <p className="mb-4"><strong>Gold Vermeil:</strong> A thick layer of 18k solid gold on sterling silver meaning it will last longer. You get the look & feel of gold jewelry at a fraction of the price.</p>
                                    <p>We recommend removing your jewelry before swimming, bathing, or exercising. Avoid contact with perfumes, lotions, or hair products to maintain the plating.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                                <AccordionContent className="normal-case tracking-normal font-sans text-muted-foreground leading-relaxed space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <Truck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-primary">Free Standard Shipping</p>
                                            <p>On all orders. Un-tracked 5-10 business days.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <RefreshCw className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-primary">30-Day Returns</p>
                                            <p>Return any unworn piece within 30 days for a full refund.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-primary">1-Year Warranty</p>
                                            <p>We stand by our craftsmanship.</p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

                {/* Related Products */}
                <div className="border-t border-border pt-16 mt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif">You May Also Like</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {relatedProducts.map((rp) => (
                            <Link key={rp.id} to={`/products/${rp.id}`} className="group flex flex-col text-center">
                                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-velmora-light">
                                    <img
                                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                        alt={rp.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        data-strk-img-id={`related-${rp.id}`}
                                        data-strk-img={`[related-name-${rp.id}]`}
                                        data-strk-img-ratio="3x4"
                                        data-strk-img-width="400"
                                    />
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <h3 id={`related-name-${rp.id}`} className="font-serif uppercase tracking-widest text-sm mb-2 group-hover:text-velmora-gold transition-colors">
                                    {rp.name}
                                </h3>
                                <p className="text-muted-foreground">${rp.price}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;