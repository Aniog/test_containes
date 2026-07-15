import React from 'react';
import Navbar from '../components/Navbar';
import CartDrawer from '../components/CartDrawer';

const About = () => (
  <div className="min-h-screen bg-[#F8F6F3]">
    <Navbar />
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
      <p className="text-xs tracking-[0.15em] uppercase text-[#6B665E] mb-2">Our Heritage</p>
      <h1 className="serif text-6xl mb-10">The Velmora Story</h1>
      <div className="prose prose-neutral text-[#6B665E] space-y-6 text-[15px] leading-relaxed">
        <p>Founded in 2018, Velmora began with a simple belief: that fine jewelry should be accessible without compromise. We create demi-fine pieces that honor traditional craftsmanship while embracing modern sensibilities.</p>
        <p>Every piece in our collection is designed in our quiet studio and produced in small batches. We source only the finest materials—18K gold plating over solid brass, ethically sourced crystals—and finish each item by hand.</p>
        <p>Our aesthetic is one of quiet luxury: refined, intentional, and designed to be treasured for years to come. We believe the best jewelry doesn't shout; it whispers its quality through every detail.</p>
      </div>
      <div className="mt-12 pt-12 border-t border-[#E5E0D8] grid md:grid-cols-3 gap-8 text-sm">
        <div><div className="font-medium mb-2">Thoughtful Design</div><p className="text-[#6B665E]">Each piece begins with a sketch and a story.</p></div>
        <div><div className="font-medium mb-2">Artisan Craft</div><p className="text-[#6B665E]">Hand-finished in small ateliers we know by name.</p></div>
        <div><div className="font-medium mb-2">Lasting Quality</div><p className="text-[#6B665E]">Built to be worn daily, loved for years.</p></div>
      </div>
    </div>
    <CartDrawer />
  </div>
);

export default About;
