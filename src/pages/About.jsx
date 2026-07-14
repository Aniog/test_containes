import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-xs tracking-[0.2em] text-[#8B7355] mb-3">EST. 2018</p>
        <h1 className="font-serif text-6xl tracking-[0.05em] mb-8">Our Story</h1>
        <p className="text-xl text-[#6B665F] max-w-2xl mx-auto leading-relaxed">
          Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
          not just to a privileged few, but to every woman who appreciates quiet luxury.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80')] bg-cover bg-center" />
          <div>
            <h3 className="font-serif text-3xl tracking-[0.05em] mb-6">The Beginning</h3>
            <p className="text-[#6B665F] leading-relaxed mb-4">
              Founded in 2018 by designer Elena Voss, Velmora began as a small collection of 
              handcrafted pieces inspired by vintage jewelry and modern minimalism.
            </p>
            <p className="text-[#6B665F] leading-relaxed">
              Today, we continue to design each piece with intention, using only the finest 
              materials and working with skilled artisans who share our commitment to quality.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F4F1EB] py-16 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl tracking-[0.05em] mb-8">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <p className="font-medium mb-2 tracking-[0.1em]">Quality First</p>
              <p className="text-sm text-[#6B665F]">Every piece is crafted with premium materials and undergoes rigorous quality checks.</p>
            </div>
            <div>
              <p className="font-medium mb-2 tracking-[0.1em]">Thoughtful Design</p>
              <p className="text-sm text-[#6B665F]">We design for longevity, creating pieces that transcend trends and become heirlooms.</p>
            </div>
            <div>
              <p className="font-medium mb-2 tracking-[0.1em]">Ethical Sourcing</p>
              <p className="text-sm text-[#6B665F]">We partner with suppliers who share our commitment to ethical and sustainable practices.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-[#6B665F] mb-8">Ready to find your perfect piece?</p>
        <Link to="/shop" className="btn btn-primary">Shop the Collection</Link>
      </div>
    </div>
  );
};

export default About;