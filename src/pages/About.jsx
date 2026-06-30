import React from 'react';
import Button from '../components/Button';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center bg-[#2C2823]">
        <img 
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=2000&q=80" 
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-6">
          <p className="text-[#B8976E] tracking-[0.2em] text-sm mb-4">ESTABLISHED 2018</p>
          <h1 className="text-white text-5xl md:text-6xl tracking-[0.02em]">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="prose prose-lg text-[#6B665F]">
          <p className="text-xl leading-relaxed mb-8">
            Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise.
          </p>
          
          <p className="mb-6">
            Founded by designer Elena Voss in a small studio in Lisbon, Velmora began as a collection of handcrafted pieces for friends and family. What started as quiet experiments with gold plating and crystal settings soon grew into something more—a commitment to creating demi-fine jewelry that feels as luxurious as it looks.
          </p>

          <p className="mb-6">
            Today, every Velmora piece is still designed with intention. We source the finest 18K gold plating, work with skilled artisans, and obsess over the smallest details—from the weight of a huggie to the way light catches a crystal.
          </p>

          <p className="mb-12">
            Our pieces are made to be worn every day, passed down, and treasured. Because we believe that true luxury isn't about price—it's about the feeling of wearing something beautiful that was made with care.
          </p>
        </div>

        <div className="mt-12 pt-12 border-t border-[#E5DFD3] grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl text-[#B8976E] mb-2">18K</p>
            <p className="text-sm tracking-wider">GOLD PLATING</p>
          </div>
          <div>
            <p className="text-4xl text-[#B8976E] mb-2">5</p>
            <p className="text-sm tracking-wider">SIGNATURE COLLECTIONS</p>
          </div>
          <div>
            <p className="text-4xl text-[#B8976E] mb-2">40+</p>
            <p className="text-sm tracking-wider">COUNTRIES SHIPPED</p>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h3 className="text-3xl tracking-[0.02em] mb-4">Crafted with intention.<br />Worn with love.</h3>
          <p className="text-[#6B665F] mb-8">Discover the collection that started it all.</p>
          <Button variant="outline" onClick={() => window.location.href = '/shop'}>SHOP NOW</Button>
        </div>
      </div>
    </div>
  );
};

export default About;