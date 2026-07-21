import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="elegant jewelry designer studio high end warm lighting"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight uppercase">Our Story</h1>
          <p className="mt-4 text-white/80 text-sm tracking-[0.3em] uppercase">Built on passion and craftsmanship</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 max-w-4xl mx-auto px-6 space-y-24">
        {/* Intro */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-primary uppercase">The Velmora Philosophy</h2>
          <div className="w-12 h-[1px] bg-accent mx-auto" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic font-serif">
            "We believe jewelry should be a reflection of your innermost self—quietly confident, timelessly elegant, and crafted with intention."
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-primary uppercase">Where It Began</h3>
            <p className="text-muted-foreground leading-relaxed">
              Velmora was founded in 2022 with a simple vision: to create demi-fine jewelry that doesn't compromise on quality or ethics. We were tired of the "throwaway" nature of fashion jewelry and the inaccessible prices of traditional fine jewelry.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We spent two years traveling the globe, meeting with artisans and source partners who shared our commitment to craftsmanship and transparency.
            </p>
          </div>
          <div className="aspect-[3/4] bg-muted overflow-hidden">
            <img 
              data-strk-img-id="about-story-1"
              data-strk-img="vintage jewelry sketches and gold tools on wooden table"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt="Where it began"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Commitment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[3/4] bg-muted overflow-hidden md:order-2">
            <img 
              data-strk-img-id="about-story-2"
              data-strk-img="close up of hands working on gold jewelry jewelry workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt="Our commitment"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 md:order-1">
            <h3 className="text-2xl font-serif text-primary uppercase">Our Commitment</h3>
            <p className="text-muted-foreground leading-relaxed">
              Today, Velmora is proud to use 18K Gold Vermeil and 925 Sterling Silver in all our pieces. Our stones are ethically sourced, and we work exclusively with certified partners who ensure fair wages and safe working conditions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every order is hand-inspected in our studio and packaged with care in our signature eco-friendly luxury boxing.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-12 text-center border-t border-border">
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-8">Experience the collection</p>
          <Link to="/shop">
            <Button className="bg-accent text-accent-foreground px-10 py-7 text-xs font-bold tracking-[0.2em] rounded-none shadow-xl border-none">
              SHOP ALL JEWELRY
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
