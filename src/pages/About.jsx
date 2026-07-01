import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-velmora-bg pt-20">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] text-velmora-muted mb-2">EST. 2018</div>
          <h1 className="font-serif text-5xl tracking-[0.02em]">Our Story</h1>
        </div>

        <div className="prose prose-lg max-w-none text-[15px] leading-relaxed text-velmora-charcoal/90">
          <p className="text-xl text-velmora-charcoal mb-8">
            Velmora was founded with a quiet conviction: that fine jewelry should feel personal, not precious.
          </p>

          <div className="my-12 aspect-[16/9] bg-velmora-cream overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80"
              alt="Velmora founder at work"
              className="w-full h-full object-cover"
            />
          </div>

          <p>
            We began in a small studio in Lisbon, where our founder, after years working in high jewelry, grew frustrated by the gap between mass-produced fashion jewelry and inaccessible fine pieces.
          </p>

          <p>
            What if we could create jewelry that felt like an heirloom from day one — using responsible materials, thoughtful design, and the kind of craftsmanship usually reserved for pieces costing ten times more?
          </p>

          <p>
            Today, every Velmora piece is still designed in that same spirit. We work with a small team of artisans who hand-finish each item. Our 18K gold plating is applied in multiple layers for lasting warmth. And we only use hypoallergenic, nickel-free components.
          </p>

          <div className="my-12 grid md:grid-cols-3 gap-8 text-sm border-y border-velmora-border py-10">
            <div>
              <div className="font-serif text-2xl mb-2">18K</div>
              <div className="text-velmora-muted">Gold plating thickness</div>
            </div>
            <div>
              <div className="font-serif text-2xl mb-2">30</div>
              <div className="text-velmora-muted">Day return window</div>
            </div>
            <div>
              <div className="font-serif text-2xl mb-2">5</div>
              <div className="text-velmora-muted">Artisans on our team</div>
            </div>
          </div>

          <p>
            We believe jewelry should be worn, not saved. It should mark moments, not gather dust. Whether you're buying for yourself or someone you love, we hope our pieces become part of your story.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-velmora-border text-center">
          <p className="text-sm text-velmora-muted mb-2">Have questions?</p>
          <a href="#contact" className="underline">Reach out to us</a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;