import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Sparkles, Leaf, Heart, Shield } from 'lucide-react';

const AboutPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const values = [
    { icon: Sparkles, title: 'Crafted with Care', desc: 'Every piece is designed in-house and produced in small batches to ensure exceptional quality.' },
    { icon: Leaf, title: 'Sustainable Practices', desc: 'We minimize waste through thoughtful production and eco-conscious packaging.' },
    { icon: Heart, title: 'Made for You', desc: 'Hypoallergenic materials and comfortable designs for everyday wear.' },
    { icon: Shield, title: 'Ethical Sourcing', desc: 'All materials are responsibly sourced from trusted suppliers worldwide.' },
  ];

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-a1b2c3"
          data-strk-bg="[about-hero-subtitle] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 id="about-hero-title" className="serif-heading text-5xl md:text-7xl text-primary-foreground mb-4">
              Our Story
            </h1>
            <p id="about-hero-subtitle" className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Where timeless elegance meets everyday luxury
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <img
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
                data-strk-img-id="about-story-img-d4e5f6"
                data-strk-img="[about-story-desc] [about-story-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div>
              <h2 id="about-story-title" className="serif-heading text-3xl md:text-4xl mb-6">
                Born from a Love of Beauty
              </h2>
              <p id="about-story-desc" className="text-muted-foreground leading-relaxed mb-6">
                Velmora was founded with a simple mission: to make beautiful, quality jewelry accessible to everyone. We believe that luxury shouldn't come with a luxury price tag.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our demi-fine collection features 18K gold plated pieces that are hypoallergenic, thoughtfully designed, and crafted to become part of your everyday ritual. From morning meetings to evening dinners, Velmora jewelry moves with you.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every piece is designed in-house and produced in small batches to ensure quality and minimize waste. We're committed to sustainable practices and ethical sourcing.
              </p>
              <a href="/shop" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-primary hover:text-primary/80 transition-colors">
                Explore the Collection <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="serif-heading text-3xl md:text-4xl mb-4">Our Values</h2>
            <div className="w-12 h-px bg-primary mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-primary">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="product-name text-sm mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1">
              <h2 className="serif-heading text-3xl md:text-4xl mb-6">
                The Art of Demi-Fine
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Demi-fine jewelry sits at the perfect intersection of quality and accessibility. Our pieces feature genuine 18K gold plating over sterling silver bases, giving you the look and feel of fine jewelry at a fraction of the cost.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Each design undergoes rigorous quality testing to ensure durability, comfort, and lasting beauty. We use advanced plating techniques that resist tarnishing and maintain their luster through everyday wear.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  18K gold plating over sterling silver
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Hypoallergenic and nickel-free
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Tarnish-resistant finish
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Designed for everyday wear
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative aspect-[3/4] overflow-hidden rounded-sm">
              <img
                alt="Gold jewelry craftsmanship detail"
                className="w-full h-full object-cover"
                data-strk-img-id="about-craft-img-g7h8i9"
                data-strk-img="[about-craft-desc] [about-craft-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-foreground text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="serif-heading text-3xl md:text-4xl mb-4">
            Ready to Find Your Piece?
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed mb-8">
            Explore our curated collection of demi-fine jewelry, designed to elevate your everyday.
          </p>
          <a href="/shop" className="btn-primary inline-block">
            Shop the Collection
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
