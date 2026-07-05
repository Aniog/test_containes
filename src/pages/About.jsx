import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen bg-base text-ink">
      <Navbar />
      <CartDrawer />
      <main className="pt-24 md:pt-32">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-ink">Our Story</h1>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6 text-muted leading-relaxed">
              <p>Velmora Fine Jewelry was founded with a singular vision: to create jewelry that feels both luxurious and wearable. We believe in quiet luxury—pieces that speak softly but leave a lasting impression.</p>
              <p>Every design begins with a sketch, refined through careful craftsmanship, and finished with attention to detail. Our materials are chosen for their beauty and durability, ensuring each piece can be treasured for years.</p>
              <p>From our studio to your doorstep, we are committed to sustainable practices, ethical sourcing, and packaging that feels as considered as the jewelry inside.</p>
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface border border-border">
              <img src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=80" alt="Velmora studio" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
