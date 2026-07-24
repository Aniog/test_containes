import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

const Home = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

    return (
        <div ref={containerRef} className="overflow-hidden">
            {/* Full-bleed Hero */}
            <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center z-0"
                    data-strk-bg-id="hero-bg-992a1c"
                    data-strk-bg="[hero-subtitle] [hero-title] jewelry gold model close-up luxury"
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="1920"
                />
                <div className="absolute inset-0 bg-black/30 z-[1]" />
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight font-serif italic text-balance">
                        Crafted to be Treasured
                    </h1>
                    <p id="hero-subtitle" className="text-lg md:text-xl font-sans font-light tracking-wide mb-10 max-w-xl mx-auto opacity-90">
                        Elegant demi-fine jewelry designed for the modern woman. Timeless pieces for life's most beautiful moments.
                    </p>
                    <Link 
                        to="/shop" 
                        className="inline-block bg-white text-black px-10 py-4 uppercase text-sm tracking-[0.2em] font-sans hover:bg-white/90 transition-all hover:scale-105"
                    >
                        Shop the Collection
                    </Link>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="bg-background border-b border-border py-4 overflow-hidden">
                <div className="container mx-auto px-6 whitespace-nowrap">
                    <div className="flex items-center justify-between gap-8 md:gap-12 animate-marquee-text md:animate-none md:justify-around">
                        <span className="text-[10px] md:text-xs uppercase tracking-widest font-sans text-muted-foreground whitespace-nowrap">Free Worldwide Shipping</span>
                        <div className="w-1 h-1 bg-border rounded-full hidden md:block" />
                        <span className="text-[10px] md:text-xs uppercase tracking-widest font-sans text-muted-foreground whitespace-nowrap">30-Day Returns</span>
                        <div className="w-1 h-1 bg-border rounded-full hidden md:block" />
                        <span className="text-[10px] md:text-xs uppercase tracking-widest font-sans text-muted-foreground whitespace-nowrap">18K Gold Plated</span>
                        <div className="w-1 h-1 bg-border rounded-full hidden md:block" />
                        <span className="text-[10px] md:text-xs uppercase tracking-widest font-sans text-muted-foreground whitespace-nowrap">Hypoallergenic</span>
                    </div>
                </div>
            </section>

            {/* Bestsellers Product Grid */}
            <section className="py-24 px-6 md:px-12 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
                        <h2 id="bestsellers-title" className="text-4xl md:text-5xl font-serif italic">Bestsellers</h2>
                        <Link to="/shop" className="text-sm font-sans uppercase tracking-widest border-b border-foreground/30 hover:border-foreground pb-1 transition-all flex items-center gap-2">
                           View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* UGC Row (Instagram Reel Style) */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-6 mb-12 flex flex-col items-center">
                    <h2 id="ugc-title" className="text-3xl md:text-4xl font-serif italic mb-2">Worn by You</h2>
                    <p className="text-muted-foreground font-sans tracking-widest text-xs uppercase mb-12">#VELMORAWOMAN</p>
                </div>
                
                <div className="flex overflow-x-auto pb-8 gap-4 px-6 md:px-12 no-scrollbar scrolling-touch">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] bg-muted relative group overflow-hidden flex-shrink-0">
                            <img
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                data-strk-img-id={`ugc-img-${i}`}
                                data-strk-img={`[ugc-title] jewelry woman wearing earring necklace gold model lifestyle vertical`}
                                data-strk-img-ratio="9x16"
                                data-strk-img-width="600"
                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <p className="absolute bottom-6 left-6 right-6 text-white font-serif italic text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                "The piece I never take off."
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Shop by Category Tiles */}
            <section className="py-24 px-6 md:px-12 bg-background">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Earrings', id: 'earrings' },
                        { title: 'Necklaces', id: 'necklaces' },
                        { title: 'Huggies', id: 'huggies' }
                    ].map((cat) => (
                        <Link key={cat.id} to={`/shop?category=${cat.id}`} className="group relative aspect-[4/5] overflow-hidden bg-muted">
                            <img
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                data-strk-img-id={`cat-img-${cat.id}`}
                                data-strk-img={`jewelry gold ${cat.title} aesthetic editorial`}
                                data-strk-img-ratio="4x5"
                                data-strk-img-width="800"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 id={`cat-title-${cat.id}`} className="text-white text-3xl font-serif italic tracking-wide group-hover:scale-110 transition-transform duration-500">
                                    {cat.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Brand Story Split Section */}
            <section className="py-24 bg-accent/30 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 md:gap-24">
                    <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-muted order-2 lg:order-1">
                        <img
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            data-strk-img-id="brand-story-img"
                            data-strk-img="[story-title] jewelry designer workspace hands gold jewelry craftsmanship"
                            data-strk-img-ratio="4x5"
                            data-strk-img-width="1000"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-8 order-1 lg:order-2">
                        <span className="uppercase tracking-[0.3em] font-sans text-xs text-primary font-semibold">Our Philosophy</span>
                        <h2 id="story-title" className="text-4xl md:text-5xl font-serif leading-tight italic">Born from a passion for timeless, effortless luxury.</h2>
                        <p className="text-muted-foreground font-sans leading-relaxed text-lg">
                            Velmora was founded on the belief that jewelry should be both premium and accessible. For the woman who appreciates the finer things, our demi-fine pieces are designed to be lived in, layered, and loved for a lifetime.
                        </p>
                        <Link to="/about" className="text-sm font-sans uppercase tracking-[0.2em] underline underline-offset-8 hover:text-primary transition-colors">
                            Our Story
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 id="testimonials-title" className="text-3xl md:text-4xl font-serif italic mb-16">What You're Saying</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { name: 'Sarah L.', text: 'The quality of these earrings is stunning. I haven\'t taken them off since they arrived.', stars: 5 },
                            { name: 'Emma K.', text: 'The perfect gift for myself. The packaging was so beautiful and the necklace is simply divine.', stars: 5 },
                            { name: 'Jessica M.', text: 'Obsessed with the Golden Sphere Huggies. They look way more expensive than they are.', stars: 5 }
                        ].map((rev, i) => (
                            <div key={i} className="flex flex-col items-center gap-4">
                                <div className="flex gap-1 mb-2">
                                    {[...Array(rev.stars)].map((_, s) => (
                                        <svg key={s} className="w-4 h-4 fill-primary" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                    ))}
                                </div>
                                <p className="font-serif italic text-xl leading-relaxed">"{rev.text}"</p>
                                <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">— {rev.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Newsletter Capture */}
             <section className="py-24 bg-primary/10 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 id="newsletter-title" className="text-4xl md:text-5xl font-serif italic mb-6">Join the Inner Circle</h2>
                    <p className="text-muted-foreground font-sans tracking-wide mb-12 max-w-lg mx-auto">
                        Be the first to know about new collection launches and enjoy 10% off your first order.
                    </p>
                    <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="Your email address" 
                            className="flex-1 bg-transparent border-b border-muted-foreground/30 py-4 px-2 font-sans text-sm focus:border-primary focus:outline-none transition-colors"
                        />
                        <button className="bg-primary text-white py-4 px-10 uppercase text-xs tracking-[0.2em] font-sans hover:opacity-90 transition-opacity">
                            Join Now
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
