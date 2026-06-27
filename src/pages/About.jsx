import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <CartDrawer />

      <main className="pt-24 sm:pt-28">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-cream">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(26,24,20,0.2), rgba(26,24,20,0.4)), url('https://placehold.co/1920x800/ede8df/1a1814?text=Velmora+Atelier')`,
            }}
          />
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream">Our Story</h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg mx-auto">
              <p className="font-serif text-xl sm:text-2xl text-ink leading-relaxed mb-8">
                Velmora was founded in California with a singular vision: to create demi-fine jewelry 
                that feels as good to wear as it looks.
              </p>
              <p className="text-warm-gray leading-relaxed mb-6">
                Our name comes from the Latin "velum" (veil) and "mora" (pause) — a reminder to slow down 
                and appreciate the beauty in everyday moments. Each piece is designed to be worn, loved, 
                and passed down.
              </p>
              <p className="text-warm-gray leading-relaxed mb-6">
                We use 18K gold plating over hypoallergenic brass, sourced from ethical suppliers. 
                Every design is sketched in our Los Angeles studio and crafted by skilled artisans 
                who share our commitment to quality.
              </p>
              <p className="text-warm-gray leading-relaxed">
                Quiet luxury isn't about logos or price tags. It's about how a piece makes you feel — 
                confident, elegant, and authentically you.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
