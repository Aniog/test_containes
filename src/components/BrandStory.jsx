import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
    return (
        <section className="py-20 md:py-32 bg-velmora-stone border-y border-border/50">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                    {/* Image Column */}
                    <div className="w-full md:w-1/2 relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                            alt="Artisan working on jewelry" 
                            className="absolute inset-0 w-full h-full object-cover grayscale-[30%] contrast-[1.1] transition-transform duration-1000 hover:scale-105"
                        />
                    </div>
                    
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h2 className="font-serif leading-none text-4xl lg:text-5xl text-velmora-charcoal mb-6">
                            Redefining the <br /> Everyday Editorial
                        </h2>
                        <div className="w-12 h-px bg-velmora-gold mb-8"></div>
                        <p className="text-velmora-charcoal/70 leading-relaxed mb-6 font-serif text-lg lg:text-xl italic">
                            "We believe fine jewelry shouldn't be locked away in a safe, reserved only for special occasions."
                        </p>
                        <p className="text-velmora-charcoal/70 leading-relaxed mb-10 text-sm md:text-base">
                            Velmora was born from a simple desire: to create premium, demi-fine jewelry that brings quiet luxury to your daily narrative. Working with conflict-free 18k gold vermeil and ethically sourced accents, our small batch collections are designed to be lived in, layered, and loved for a lifetime.
                        </p>
                        <Link 
                            to="/about" 
                            className="inline-block border border-velmora-charcoal text-velmora-charcoal px-8 py-4 uppercase tracking-widest text-sm hover:bg-velmora-charcoal hover:text-white transition-colors duration-300 w-max"
                        >
                            Our Story
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandStory;