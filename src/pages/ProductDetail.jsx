import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, useCartStore } from '@/store';
import { Button } from "@/components/ui/button";
import { Star, Truck, RefreshCw, ShieldCheck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from 'sonner';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === id);
    const { addItem } = useCartStore();
    const [quantity, setQuantity] = useState(1);
    const [selectedTone, setSelectedTone] = useState('Gold');
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, [id]);

    if (!product) {
        return (
            <div className="pt-32 pb-64 text-center">
                <h2 className="text-3xl font-serif mb-4">Product Not Found</h2>
                <Button asChild variant="outline">
                    <Link to="/shop">Return to Shop</Link>
                </Button>
            </div>
        );
    }

    const images = [
        { id: `pdp-${product.id}-img-1`, query: `[pdp-title-${product.id}] primary image close up jewelry product shot on neutral background` },
        { id: `pdp-${product.id}-img-2`, query: `[pdp-title-${product.id}] lifestyle image model wearing jewelry` },
        { id: `pdp-${product.id}-img-3`, query: `[pdp-title-${product.id}] detailed macro shot showing jewelry texture` }
    ];

    const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
    if (relatedProducts.length < 4) {
        const more = products.filter(p => p.id !== product.id && !relatedProducts.find(rp => rp.id === p.id)).slice(0, 4 - relatedProducts.length);
        relatedProducts.push(...more);
    }

    const handleAddToCart = () => {
        addItem(product, quantity, selectedTone);
        toast.success(`${quantity}x ${product.name} added to cart`, {
            description: `Tone: ${selectedTone}`,
        });
    }

    return (
        <div className="pt-24 pb-24" ref={containerRef}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex text-sm text-muted-foreground mb-8 font-medium tracking-wider uppercase text-[10px]">
                    <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link to={`/shop?category=${product.category}`} className="hover:text-foreground transition-colors">{product.category}</Link>
                    <span className="mx-2">/</span>
                    <span className="text-foreground">{product.name}</span>
                </nav>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-24">
                    {/* Image Gallery */}
                    <div className="lg:w-1/2 flex flex-col md:flex-row gap-4">
                        {/* Thumbnails (Desktop: Left, Mobile: Bottom) */}
                        <div className="order-2 md:order-1 flex md:flex-col gap-4 overflow-x-auto md:overflow-visible w-full md:w-24 flex-shrink-0">
                            {images.map((img, idx) => (
                                <button
                                    key={img.id}
                                    className={`relative aspect-[3/4] w-20 md:w-full flex-shrink-0 overflow-hidden bg-muted transition-all duration-300 ${activeImageIndex === idx ? 'ring-1 ring-foreground opacity-100' : 'opacity-60 hover:opacity-100'}`}
                                    onClick={() => setActiveImageIndex(idx)}
                                >
                                    <img
                                        data-strk-img-id={`thumb-${img.id}`}
                                        data-strk-img={img.query}
                                        data-strk-img-ratio="3x4"
                                        data-strk-img-width="150"
                                        alt={`${product.name} thumbnail ${idx + 1}`}
                                        className="h-full w-full object-cover"
                                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                    />
                                </button>
                            ))}
                        </div>
                        {/* Main Image */}
                        <div className="order-1 md:order-2 flex-1 relative aspect-[3/4] bg-muted overflow-hidden">
                             {images.map((img, idx) => (
                                <img
                                    key={`main-${img.id}`}
                                    data-strk-img-id={`main-${img.id}`}
                                    data-strk-img={img.query}
                                    data-strk-img-ratio="3x4"
                                    data-strk-img-width="1000"
                                    alt={`${product.name} image ${idx + 1}`}
                                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${activeImageIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                />
                             ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="lg:w-1/2 flex flex-col pt-4 lg:pt-0">
                        <div className="mb-8">
                            <h1 id={`pdp-title-${product.id}`} className="text-3xl lg:text-4xl font-serif mb-4">{product.name}</h1>
                            <div className="flex items-center gap-4 mb-4">
                                <p className="text-xl font-serif italic">${product.price.toFixed(2)}</p>
                                <div className="flex items-center text-accent">
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current text-muted-foreground/30" />
                                    <span className="text-muted-foreground text-sm ml-2 font-sans tracking-wide">({product.reviews})</span>
                                </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Variants */}
                        <div className="mb-8">
                            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold mb-3">Tone — {selectedTone}</h3>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setSelectedTone('Gold')}
                                    className={`w-8 h-8 rounded-full border-2 transition-all ${selectedTone === 'Gold' ? 'border-foreground p-0.5' : 'border-transparent'}`}
                                >
                                    <div className="w-full h-full rounded-full bg-[#D4AF37]"></div>
                                </button>
                                <button
                                    onClick={() => setSelectedTone('Silver')}
                                    className={`w-8 h-8 rounded-full border-2 transition-all ${selectedTone === 'Silver' ? 'border-foreground p-0.5' : 'border-transparent'}`}
                                >
                                    <div className="w-full h-full rounded-full bg-[#C0C0C0]"></div>
                                </button>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4 mb-10">
                            <div className="flex items-center border border-border">
                                <button
                                    className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >
                                    -
                                </button>
                                <span className="w-8 text-center">{quantity}</span>
                                <button
                                    className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                            <Button 
                                onClick={handleAddToCart}
                                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-12 uppercase tracking-widest text-xs font-semibold"
                            >
                                Add to Cart
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-sm">
                            <div className="flex items-start gap-3">
                                <Truck className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                <div>
                                    <p className="font-semibold uppercase tracking-widest text-[10px]">Free Shipping</p>
                                    <p className="text-muted-foreground text-xs mt-1">On all global orders.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <RefreshCw className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                <div>
                                    <p className="font-semibold uppercase tracking-widest text-[10px]">30-Day Returns</p>
                                    <p className="text-muted-foreground text-xs mt-1">Hassle-free guarantee.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 mt-4 md:mt-0">
                                <ShieldCheck className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                <div>
                                    <p className="font-semibold uppercase tracking-widest text-[10px]">1 Year Warranty</p>
                                    <p className="text-muted-foreground text-xs mt-1">Against defects.</p>
                                </div>
                            </div>
                        </div>

                        {/* Accordions */}
                        <div className="border-t border-border pt-2">
                             <Accordion type="single" collapsible defaultValue="details" className="w-full">
                                <AccordionItem value="details" className="border-b border-border">
                                    <AccordionTrigger className="text-xs uppercase tracking-widest font-semibold hover:no-underline">Product Details</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                                        All Velmora pieces are crafted with premium materials designed for longevity. This piece features our signature thick 18K gold plating over a solid brass base, ensuring a rich color and durable wear. Hand-finished with intricate detailing.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="materials" className="border-b border-border">
                                    <AccordionTrigger className="text-xs uppercase tracking-widest font-semibold hover:no-underline">Materials & Care</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                                        <p className="mb-2"><strong>Material:</strong> {product.material} on brass base.</p>
                                        <p className="mb-2"><strong>Hypoallergenic:</strong> Lead and nickel free.</p>
                                        <p><strong>Care:</strong> To maintain the luster, avoid contact with perfumes, lotions, and harsh chemicals. Remove before swimming or showering. Store in the provided pouch.</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="shipping" className="border-b-0 border-border">
                                    <AccordionTrigger className="text-xs uppercase tracking-widest font-semibold hover:no-underline">Shipping & Returns</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                                        Enjoy free worldwide standard shipping on all orders. Express options available at checkout. We accept returns within 30 days of delivery. Items must be unworn and in original packaging. View our full return policy for details.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="pt-24 border-t border-border">
                    <div className="flex flex-col items-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-serif text-center mb-4">You May Also Like</h2>
                        <div className="w-12 h-px bg-accent"></div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-8">
                        {relatedProducts.map(p => (
                             <div key={p.id} className="group relative flex flex-col cursor-pointer">
                                <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted mb-4 rounded-sm">
                                  <Link to={`/product/${p.id}`} className="block h-full w-full">
                                     <img
                                      data-strk-img-id={`rel-prod-${p.id}-img-1`}
                                      data-strk-img={`[rel-prod-${p.id}-title] primary image close up jewelry product shot on neutral background`}
                                      data-strk-img-ratio="3x4"
                                      data-strk-img-width="400"
                                      alt={p.name}
                                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                    />
                                  </Link>
                                </div>
                                <div className="flex flex-col text-center">
                                  <h3 id={`rel-prod-${p.id}-title`} className="text-xs tracking-[0.15em] font-medium uppercase mb-1.5">
                                    <Link to={`/product/${p.id}`}>
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {p.name}
                                    </Link>
                                  </h3>
                                  <p className="text-sm font-serif italic text-muted-foreground">${p.price}</p>
                                </div>
                              </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;