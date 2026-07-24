import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Star, Truck, RefreshCw, ShieldCheck, Minus, Plus } from 'lucide-react';
import { products } from '@/lib/data';
import { useCart } from '@/lib/CartContext';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);
    const { addToCart } = useCart();
    const [tone, setTone] = useState('gold');
    const [quantity, setQuantity] = useState(1);
    const [activeAccordion, setActiveAccordion] = useState('description');
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, [id]);

    if (!product) return <div className="pt-40 text-center font-serif text-2xl">Product not found</div>;

    const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

    const handleAddToCart = () => {
        addToCart({ ...product, tone, quantity });
        toast.success(`${product.name} added to cart`);
    };

    const Accordion = ({ id, title, content }) => (
        <div className="border-b border-border">
            <button
                onClick={() => setActiveAccordion(activeAccordion === id ? '' : id)}
                className="w-full py-6 flex items-center justify-between font-serif text-lg tracking-wide hover:opacity-70 transition-opacity"
            >
                {title}
                {activeAccordion === id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            {activeAccordion === id && (
                <div className="pb-6 text-muted-foreground font-sans text-sm leading-relaxed whitespace-pre-line animate-accordion-down overflow-hidden">
                    {content}
                </div>
            )}
        </div>
    );

    return (
        <div className="pt-32 pb-24 px-6 md:px-12 bg-background min-h-screen" ref={containerRef}>
            <div className="max-w-7xl mx-auto">
                <nav className="mb-8 text-[10px] uppercase tracking-widest font-sans text-muted-foreground">
                    <Link to="/" className="hover:text-primary">Home</Link> / <Link to="/shop" className="hover:text-primary">Shop</Link> / <span>{product.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
                    {/* Left: Image Gallery */}
                    <div className="flex flex-col gap-4">
                        <div className="aspect-[3/4] bg-muted overflow-hidden">
                            <img
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                data-strk-img-id={`product-main-${product.id}`}
                                data-strk-img={`[product-detail-name] jewelry gold luxury high-quality editorial`}
                                data-strk-img-ratio="3x4"
                                data-strk-img-width="1200"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="aspect-[3/4] bg-muted overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                                    <img
                                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                        data-strk-img-id={`product-sub-${product.id}-${i}`}
                                        data-strk-img={`[product-detail-name] detail ${i}`}
                                        data-strk-img-ratio="3x4"
                                        data-strk-img-width="400"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Details */}
                    <div className="flex flex-col">
                        <h1 id="product-detail-name" className="text-4xl md:text-5xl font-serif uppercase tracking-[0.15em] mb-4 leading-tight">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                            </div>
                            <span className="font-sans text-xs text-muted-foreground uppercase tracking-widest">12 Reviews</span>
                        </div>

                        <p className="text-2xl font-sans font-medium mb-8">${product.price}</p>

                        <p className="text-muted-foreground font-sans leading-relaxed mb-12">
                            {product.description}
                        </p>

                        <div className="mb-8">
                            <span className="block text-[10px] uppercase tracking-widest font-sans mb-4 text-muted-foreground">Tone</span>
                            <div className="flex gap-3">
                                {['gold', 'silver'].map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => setTone(t)}
                                        className={cn(
                                            "px-8 py-3 text-[10px] font-sans uppercase tracking-[0.2em] border transition-all",
                                            tone === t ? "border-foreground bg-foreground text-background" : "border-border hover:border-muted-foreground"
                                        )}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-12">
                            <span className="block text-[10px] uppercase tracking-widest font-sans mb-4 text-muted-foreground">Quantity</span>
                            <div className="flex items-center border border-border w-max px-6 py-3 gap-8">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:opacity-50"><Minus className="w-4 h-4" /></button>
                                <span className="font-sans text-sm w-4 text-center">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="hover:opacity-50"><Plus className="w-4 h-4" /></button>
                            </div>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-primary text-white py-5 uppercase font-sans text-xs tracking-[0.2em] hover:opacity-90 transition-opacity mb-12 shadow-lg"
                        >
                            Add to Cart
                        </button>

                        <div className="grid grid-cols-1 gap-4 mb-16">
                            <div className="flex items-center gap-4 text-xs font-sans uppercase tracking-widest text-muted-foreground">
                                <Truck className="w-5 h-5 text-primary" /> Free Worldwide Shipping
                            </div>
                            <div className="flex items-center gap-4 text-xs font-sans uppercase tracking-widest text-muted-foreground">
                                <RefreshCw className="w-5 h-5 text-primary" /> 30-Day Easy Returns
                            </div>
                            <div className="flex items-center gap-4 text-xs font-sans uppercase tracking-widest text-muted-foreground">
                                <ShieldCheck className="w-5 h-5 text-primary" /> 2-Year Warranty
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <Accordion
                                id="description"
                                title="Description"
                                content={product.description}
                            />
                            <Accordion
                                id="materials"
                                title="Materials & Care"
                                content="Each Velmora piece is crafted from 18K gold plated brass and finished with a special anti-tarnish coating. All our pieces are hypoallergenic and free from nickel and lead. \n\n Keep your jewelry in a cool, dry place and avoid contact with perfumes, lotions, and water to maintain its luster."
                            />
                            <Accordion
                                id="shipping"
                                title="Shipping & Returns"
                                content="We offer free worldwide standard shipping on all orders. \n\n Returns are accepted within 30 days of delivery. Items must be in their original condition and packaging."
                            />
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <section>
                    <h2 className="text-3xl font-serif italic mb-12">You may also like</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProductDetail;
