import React from 'react';
import Nav from '../components/ui/Nav';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.12em] uppercase text-vel-muted mb-3">Est. 2018</div>
            <h1 className="text-5xl md:text-6xl mb-6">Our Story</h1>
            <p className="text-xl text-vel-muted max-w-lg mx-auto">
              Quiet luxury, crafted with intention.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-[15px] leading-relaxed text-vel-muted space-y-8">
            <p>
              Velmora began in a small studio in Lisbon, where our founder, after years of working 
              with fine jewelry houses, grew frustrated by the gap between accessible fashion jewelry 
              and the unattainable prices of true fine jewelry.
            </p>
            <p>
              We set out to create something different: demi-fine pieces that feel special enough for 
              the most meaningful moments, yet wearable enough for everyday. Pieces you don't save 
              for "someday" — because every day deserves a little beauty.
            </p>
            <p>
              Every piece is designed in-house and produced in small batches with trusted artisans. 
              We use 18K gold plating over hypoallergenic brass, never nickel. Each item is inspected 
              three times before it reaches you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-vel-border">
            <div>
              <div className="text-4xl font-serif mb-3 text-vel-gold">18K</div>
              <div className="text-sm uppercase tracking-widest mb-2">Gold Plating</div>
              <p className="text-sm text-vel-muted">Thick, durable layers that won't fade with daily wear.</p>
            </div>
            <div>
              <div className="text-4xl font-serif mb-3 text-vel-gold">500+</div>
              <div className="text-sm uppercase tracking-widest mb-2">Pieces Crafted</div>
              <p className="text-sm text-vel-muted">Each one inspected by hand before it ships to you.</p>
            </div>
            <div>
              <div className="text-4xl font-serif mb-3 text-vel-gold">30</div>
              <div className="text-sm uppercase tracking-widest mb-2">Day Returns</div>
              <p className="text-sm text-vel-muted">No questions asked. We want you to love what you wear.</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-vel-bg-alt py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-center text-3xl mb-12">What We Believe</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 text-sm">
              <div>
                <div className="font-medium mb-2">Less, but better.</div>
                <p className="text-vel-muted">We design fewer pieces, with more intention. Each one should earn its place in your jewelry box.</p>
              </div>
              <div>
                <div className="font-medium mb-2">Wear it every day.</div>
                <p className="text-vel-muted">Jewelry shouldn't live in a box. Our pieces are made to be worn — in the shower, to the gym, to bed.</p>
              </div>
              <div>
                <div className="font-medium mb-2">Transparency matters.</div>
                <p className="text-vel-muted">We tell you exactly what you're buying. No mystery metals. No vague "gold tone" claims.</p>
              </div>
              <div>
                <div className="font-medium mb-2">Gifting is sacred.</div>
                <p className="text-vel-muted">Every order ships in a keepsake box. Because the moment of giving should feel as special as the piece itself.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default About;
