import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductGrid from '@/components/ProductGrid';
import ContactForm from '@/components/ContactForm';

const Home = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <Features />
      
      {/* Product Highlight */}
      <ProductGrid />
      
      {/* Mid-page CTA */}
      <section className="py-20 bg-brand-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 uppercase">Ready to Upgrade Your Production?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Our technical consultants are experts in sheet metal workflow optimization. Contact us today for a personalized machinery assessment.
          </p>
          <a href="#contact" className="inline-block px-10 py-4 bg-brand-accent text-white font-bold rounded-sm hover:scale-105 transition-transform">
            GET A CUSTOM QUOTE
          </a>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 skew-x-12 transform translate-x-1/2" />
      </section>

      <ContactForm />
    </div>
  );
};

export default Home;
