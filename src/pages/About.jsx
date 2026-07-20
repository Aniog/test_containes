import React from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">Est. 2018</p>
          <h1 className="section-title">Our Story</h1>
        </div>

        <div className="prose prose-neutral max-w-none text-[var(--color-text-muted)] leading-relaxed space-y-6">
          <p className="text-lg text-[var(--color-text)]">
            Velmora was founded with a simple conviction: that fine jewelry should be worn, not stored away.
          </p>
          
          <p>
            We create demi-fine pieces that honor the traditions of craftsmanship while embracing the realities 
            of modern life. Each design is considered, each material chosen with care. We work with 18K gold 
            plating over hypoallergenic brass because we believe beauty should be accessible, not exclusive.
          </p>

          <div className="my-12 py-8 border-y border-[var(--color-border-light)] grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-light text-[var(--color-gold)] mb-1">18K</p>
              <p className="text-sm tracking-widest uppercase">Gold Plating</p>
            </div>
            <div>
              <p className="text-3xl font-light text-[var(--color-gold)] mb-1">5</p>
              <p className="text-sm tracking-widest uppercase">Signature Collections</p>
            </div>
            <div>
              <p className="text-3xl font-light text-[var(--color-gold)] mb-1">30</p>
              <p className="text-sm tracking-widest uppercase">Day Returns</p>
            </div>
          </div>

          <p>
            Our pieces are designed to be lived in. To mark moments, to become part of your daily ritual, 
            to be passed down or gifted with intention. We source responsibly, craft thoughtfully, and stand 
            behind every piece we make.
          </p>

          <p>
            Thank you for wearing Velmora.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-border-light)] text-center">
          <p className="text-sm text-[var(--color-text-muted)]">Questions? <a href="#contact" className="underline hover:text-[var(--color-gold)]">Reach out to us</a>.</p>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default About;
