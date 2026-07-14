import React from 'react';

const About = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-16">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <div className="text-xs tracking-[0.15em] text-gold mb-3">EST. 2018</div>
        <h1 className="serif text-6xl mb-6">Our Story</h1>
        <p className="text-lg text-taupe">Quiet luxury, thoughtfully made.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="aspect-[4/3] bg-soft-gray">
          <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80" alt="Atelier" className="w-full h-full object-cover" />
        </div>
        <div className="flex items-center">
          <div className="space-y-6 text-taupe leading-relaxed">
            <p>Velmora was founded with a simple belief: that fine jewelry should be accessible without compromising on quality or craftsmanship.</p>
            <p>Our pieces are designed to be worn every day—stacked, layered, and loved. Each item is hand-finished in small batches, ensuring that every detail meets our exacting standards.</p>
            <p>We source only the finest materials: 18K gold plating over sterling silver, natural gemstones, and hypoallergenic findings that are kind to sensitive skin.</p>
          </div>
        </div>
      </div>

      <div className="text-center max-w-xl mx-auto">
        <h2 className="serif text-3xl mb-6">Crafted with Intention</h2>
        <p className="text-taupe">From our atelier to your jewelry box, every Velmora piece carries the quiet confidence of thoughtful design and enduring quality.</p>
      </div>
    </div>
  );
};

export default About;