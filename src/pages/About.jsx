import React, { useEffect, useRef } from 'react';
import Navigation from '../components/ui/Navigation';
import Footer from '../components/ui/Footer';
import CartDrawer from '../components/ui/CartDrawer';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F8F5F1]">
      <Navigation />

      <div className="pt-20">
        {/* Hero */}
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="text-xs tracking-[0.15em] text-[#B89778] mb-3">EST. 2019</p>
          <h1 className="font-serif text-5xl tracking-wide mb-6">A Modern Heirloom</h1>
          <p className="text-lg text-[#5C4E42] max-w-2xl mx-auto">
            Velmora exists for the woman who values quiet beauty—pieces that feel personal, 
            not performative. Jewelry made to be worn, loved, and passed on.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-[#F0EBE3] overflow-hidden">
              <img
                data-strk-img-id="about-founder"
                data-strk-img="woman founder elegant jewelry designer studio natural light"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-lg">
              <h2 className="font-serif text-3xl tracking-wide mb-6">Why We Make What We Make</h2>
              <div className="space-y-4 text-[#5C4E42] leading-relaxed">
                <p>
                  After years working in fine jewelry, our founder grew tired of seeing beautiful pieces 
                  locked away in safes. She wanted to create jewelry that lived on the body, not in a box.
                </p>
                <p>
                  Velmora was born from that desire: accessible luxury without compromise. Every piece is 
                  plated in 18K gold over sterling silver, designed to last, and priced to be collected.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-[#F0EBE3] py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="font-serif text-2xl tracking-wide text-center mb-12">What We Believe</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { title: "Everyday Elegance", text: "Jewelry should be worn, not saved. Our pieces are designed for real life." },
                { title: "Thoughtful Craft", text: "We work with skilled artisans who care about every detail, from casting to finishing." },
                { title: "Honest Pricing", text: "No inflated markups. We price fairly so more women can own beautiful gold jewelry." },
              ].map((v, i) => (
                <div key={i}>
                  <h4 className="font-serif text-xl mb-3">{v.title}</h4>
                  <p className="text-sm text-[#5C4E42]">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sustainability Note */}
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="text-xs tracking-[0.15em] text-[#B89778] mb-3">OUR COMMITMENT</p>
          <h2 className="font-serif text-3xl tracking-wide mb-6">Made with Intention</h2>
          <p className="text-[#5C4E42] leading-relaxed">
            We source our metals responsibly and work with partners who share our values. 
            Our packaging is minimal, reusable, and recyclable. We believe luxury and responsibility 
            can coexist—and should.
          </p>
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default About;
