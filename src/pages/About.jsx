import React from 'react';
import Button from '../components/ui/Button';

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center bg-base">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=80')] bg-cover bg-center opacity-50" />
        <div className="relative z-10 text-center px-6">
          <p className="text-white/70 tracking-[0.2em] text-sm mb-4">EST. 2018</p>
          <h1 className="text-white text-6xl font-serif">Our Story</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="prose prose-lg">
          <p className="text-xl text-taupe leading-relaxed mb-8">
            Velmora was born from a simple belief: that beautiful, well-crafted jewelry 
            should be accessible to every woman who appreciates quiet luxury.
          </p>
          
          <h2 className="text-3xl font-serif mt-12 mb-6">The Beginning</h2>
          <p className="text-taupe leading-relaxed mb-6">
            Founded in 2018 by designer Elena Voss, Velmora began as a small collection 
            of handcrafted pieces created in a modest studio in New York. Elena's vision 
            was to bridge the gap between fine jewelry and fast fashion—offering pieces 
            that felt special without the unattainable price tag.
          </p>
          <p className="text-taupe leading-relaxed mb-6">
            Each design starts with a sketch, inspired by the natural world, vintage 
            heirlooms, and the modern woman who wears them. We work with skilled artisans 
            who share our commitment to quality and attention to detail.
          </p>

          <h2 className="text-3xl font-serif mt-12 mb-6">Our Craft</h2>
          <p className="text-taupe leading-relaxed mb-6">
            Every Velmora piece is 18K gold plated over sterling silver or brass, 
            selected for its durability and hypoallergenic properties. Our crystals 
            are hand-set, and each piece undergoes rigorous quality checks before 
            reaching you.
          </p>
          <p className="text-taupe leading-relaxed mb-6">
            We believe in thoughtful consumption. Our pieces are designed to last, 
            to be worn daily, and to become part of your personal story.
          </p>

          <div className="my-12 p-8 bg-light-gray text-center">
            <p className="font-serif text-2xl mb-2">"Jewelry should feel like an extension of yourself—</p>
            <p className="font-serif text-2xl">quiet, personal, and deeply meaningful."</p>
            <p className="mt-4 text-sm tracking-[0.1em] text-taupe">— Elena Voss, Founder</p>
          </div>
        </div>
      </div>

      <section className="bg-base py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white text-3xl font-serif mb-4">Crafted with Intention</h2>
          <p className="text-white/70 max-w-md mx-auto mb-8">
            Every piece tells a story. We invite you to be part of ours.
          </p>
          <Button variant="gold">Explore the Collection</Button>
        </div>
      </section>
    </div>
  );
};

export default About;