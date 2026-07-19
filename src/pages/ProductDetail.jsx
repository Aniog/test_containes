import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';
import { products } from '@/lib/data';
import { ChevronRight, Minus, Plus, Star, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = products.find((p) => p.id === id);
    const containerRef = useRef(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedImg, setSelectedImg] = useState(1);
    const [activeAccordion, setActiveAccordion] = useState('desc');

    useEffect(() => {
        window.scrollTo(0, 0);
        const frameId = window.requestAnimationFrame(() => {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
        return () => window.cancelAnimationFrame(frameId);
    }, [id, selectedImg]);

    if (!product) return <div className="py-40 text-center">Product not found</div>;

    const relatedProducts = products.filter((p) => p.id !== id).slice(0, 4);

    return (
        <div ref={containerRef} className="pt-24 pb-24 px-4 md:px-10 max-w-7xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-velmora-stone mb-12">
                <Link to="/" className="hover:text-velmora-black">Home</Link>
                <ChevronRight size={10} />
                <Link to="/shop" className="hover:text-velmora-black">Shop</Link>
                <ChevronRight size={10} />
                <span className="text-velmora-black font-medium">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-32">
                {/* Image Gallery */}
                <div className="flex flex-col-reverse md:flex-row gap-4">
                    {/* Thumbnails */}
                    <div className="flex flex-row md:flex-col gap-4">
                        {[1, 2, 3].map((num) => (
                            <button
                                key={num}
                                onClick={() => setSelectedImg(num)}
                                className={cn(
                                    "w-20 aspect-[4/5] bg-velmora-sand overflow-hidden border transition-all",
                                    selectedImg === num ? "border-velmora-black" : "border-transparent"
                                )}
                            >
                                <img
                                    data-strk-img-id={`pdp-thumb-${product.id}-${num}`}
                                    data-strk-img={`[pdp-title] jewelry view ${num}`}
                                    data-strk-img-ratio="4x5"
                                    data-strk-img-width="200"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                    {/* Main Image */}
                    <div className="flex-1 aspect-[4/5] bg-velmora-sand overflow-hidden">
                         <img
                            data-strk-img-id={`pdp-main-${product.id}-${selectedImg}`}
                            data-strk-img={`[pdp-title] gold jewelry model editorial detail view ${selectedImg}`}
                            data-strk-img-ratio="4x5"
                            data-strk-img-width="1200"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                            className="w-full h-full object-cover animate-in fade-in duration-500"
                        />
                    </div>
                </div>

                {/* Info Area */}
                <div className="flex flex-col">
                    <h1 id="pdp-title" className="text-2xl md:text-3xl lg:text-4xl tracking-widest-extra uppercase mb-4 font-serif">
                        {product.name}
                    </h1>
                    <div className="flex items-center justify-between mb-8">
                        <p className="text-xl text-velmora-black">${product.price}</p>
                        <div className="flex items-center gap-1 text-velmora-gold">
                             <Star size={14} fill="currentColor" />
                             <Star size={14} fill="currentColor" />
                             <Star size={14} fill="currentColor" />
                             <Star size={14} fill="currentColor" />
                             <Star size={14} fill="currentColor" />
                             <span className="text-velmora-stone text-[10px] uppercase tracking-widest ml-2">(12 Reviews)</span>
                        </div>
                    </div>

                    <p className="text-velmora-stone text-sm leading-relaxed mb-10">
                        {product.description}
                    </p>

                    <div className="space-y-8 mb-10">
                        {/* Variant Selector */}
                        <div>
                             <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">Color</h4>
                             <div className="flex gap-2">
                                <button className="bg-velmora-black text-white px-6 py-2 text-[10px] uppercase tracking-widest border border-velmora-black">Gold Tone</button>
                                <button className="bg-white text-velmora-black px-6 py-2 text-[10px] uppercase tracking-widest border border-stone-200 hover:border-velmora-black transition-colors">Silver Tone</button>
                             </div>
                        </div>

                        {/* Quantity */}
                        <div>
                            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">Quantity</h4>
                            <div className="flex items-center border border-stone-200 w-fit px-4 py-2">
                                <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}><Minus size={14} /></button>
                                <span className="mx-8 text-sm">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)}><Plus size={14} /></button>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => addToCart(product, quantity)}
                        className="w-full bg-velmora-black text-white py-5 text-xs uppercase tracking-[0.3em] font-semibold hover:bg-velmora-black/90 transition-all mb-12 shadow-md hover:shadow-lg"
                    >
                        Add to Cart
                    </button>

                    {/* Accordions */}
                    <div className="border-t border-stone-200">
                        {[
                            { id: 'desc', title: 'Description' },
                            { id: 'mat', title: 'Materials & Care' },
                            { id: 'ship', title: 'Shipping & Returns' }
                        ].map((item) => (
                            <div key={item.id} className="border-b border-stone-200">
                                <button
                                    onClick={() => setActiveAccordion(activeAccordion === item.id ? '' : item.id)}
                                    className="w-full flex items-center justify-between py-5 text-[10px] uppercase tracking-widest font-semibold"
                                >
                                    {item.title}
                                    {activeAccordion === item.id ? <Minus size={14} /> : <Plus size={14} />}
                                </button>
                                <div className={cn(
                                    "overflow-hidden transition-all duration-300",
                                    activeAccordion === item.id ? "max-h-40 pb-5" : "max-h-0"
                                )}>
                                    <p className="text-xs text-velmora-stone leading-relaxed">
                                        {item.id === 'desc' && "Handcrafted excellence. Each piece is meticulously examined to ensure it meets our highest standards of quality and beauty."}
                                        {item.id === 'mat' && "Our pieces are crafted in 18K Gold Vermeil – a thick layer of 18k solid gold over sterling silver. We use responsibly sourced crystals and recycled metals whenever possible."}
                                        {item.id === 'ship' && "Complimentary worldwide shipping on all orders over $150. Returns accepted within 30 days of purchase. Items must be in original condition."}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center text-center gap-2">
                            <Truck size={20} strokeWidth={1.5} className="text-velmora-gold" />
                            <span className="text-[8px] uppercase tracking-widest text-velmora-stone">Fast Shipping</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2">
                            <RotateCcw size={20} strokeWidth={1.5} className="text-velmora-gold" />
                            <span className="text-[8px] uppercase tracking-widest text-velmora-stone">30-Day Returns</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2">
                            <ShieldCheck size={20} strokeWidth={1.5} className="text-velmora-gold" />
                            <span className="text-[8px] uppercase tracking-widest text-velmora-stone">Secure Checkout</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <section className="pt-24 border-t border-stone-200">
                <h2 className="text-2xl md:text-3xl font-serif text-center mb-16 uppercase tracking-widest">You may also like</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {relatedProducts.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;
