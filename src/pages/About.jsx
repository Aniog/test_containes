import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif mb-8 text-center uppercase tracking-widest">Our Story</h1>
        
        <div className="aspect-[16/9] bg-muted mb-12 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1200&auto=format&fit=crop" 
            alt="Velmora Studio" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-8 text-lg text-muted-foreground font-light leading-relaxed mb-16">
          <p>
            Velmora Fine Jewelry was founded in 2021 with a singular vision: to create demi-fine jewelry that brings the elegance of luxury pieces into everyday life, without the inaccessible price tag.
          </p>
          <p>
            Our founder recognized a gap in the market between cheap, fast-fashion jewelry that tarnishes after a few wears, and exorbitant solid gold pieces reserved only for special occasions. We believe that beautiful, high-quality jewelry should be lived in—worn continuously from morning coffee to evening events.
          </p>
          <blockquote className="border-l-2 border-primary pl-6 font-serif italic text-2xl text-foreground my-12 py-2">
            "We design pieces that become a part of your daily armor—jewelry that you never have to take off."
          </blockquote>
          <p>
            Every Velmora piece is thoughtfully designed in our studio and crafted using a thick layer of 18k gold vermeil over a sterling silver base. This ensures that our jewelry is not only hypoallergenic and nickel-free, but also durable enough to withstand daily wear. We prioritize responsible sourcing and partner with skilled artisans who share our commitment to quality.
          </p>
          <p>
            Whether you are treating yourself or searching for the perfect gift, we invite you to discover our collection of earrings, necklaces, and huggies—designed to be layered, loved, and treasured.
          </p>
        </div>

        <div className="text-center">
          <Link 
            to="/shop" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-widest text-sm font-medium"
          >
            Explore the Collection
          </Link>
        </div>
      </div>
    </div>
  );
}