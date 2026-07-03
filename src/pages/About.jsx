import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';

const About = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink">
      <Navbar />
      <CartDrawer />
      <main className="pt-24">
        <section className="container-narrow py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=900&q=80"
                alt="Velmora craftsmanship"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-accent">Our Story</p>
              <h1 className="section-title">Jewelry with intention</h1>
              <p className="text-sm text-brand-muted leading-relaxed">
                Velmora was born from a simple belief: fine jewelry should feel effortless. We design each piece to be worn daily—light enough for the office, refined enough for evening, and always made with care.
              </p>
              <p className="text-sm text-brand-muted leading-relaxed">
                Our materials are responsibly sourced, our finishes are built to last, and our designs are made for real life. From our studio to your jewelry box, every step is considered.
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
