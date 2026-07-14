import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.2em] text-[#B8976F] mb-4">EST. 2018</p>
        <h1 className="serif text-5xl tracking-[0.05em] mb-6">Our Story</h1>
      </div>

      <div className="prose prose-lg max-w-none text-[#6B665F] space-y-6 leading-relaxed">
        <p>Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromise. Founded in 2018 by designer Elena Voss, our brand emerged from a desire to create pieces that feel both timeless and contemporary.</p>
        
        <p>Each piece in our collection is crafted with intention, using only the finest materials and traditional techniques passed down through generations of artisans. We work exclusively with 18K gold plating over hypoallergenic brass, ensuring our jewelry is as kind to your skin as it is beautiful to behold.</p>

        <div className="my-12 aspect-video bg-[#F5F2ED]">
          <img 
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80" 
            alt="Velmora atelier" 
            className="w-full h-full object-cover"
          />
        </div>

        <p>Our name, Velmora, comes from the Latin "vel" (veil) and "mora" (delay) — a reminder to slow down and appreciate the quiet moments. We believe jewelry should be worn, not just admired. Pieces that become part of your daily ritual, that catch the light just so, that make you feel like yourself, only more so.</p>

        <p>Today, Velmora is worn by women across the globe who value quality, craftsmanship, and understated elegance. From our studio to your jewelry box, every piece carries our commitment to beauty that lasts.</p>
      </div>

      <div className="mt-16 pt-12 border-t border-[#E5E0D8] grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-3xl serif tracking-[0.1em] mb-2">18K</div>
          <p className="text-sm text-[#6B665F]">Gold Plating</p>
        </div>
        <div>
          <div className="text-3xl serif tracking-[0.1em] mb-2">5</div>
          <p className="text-sm text-[#6B665F]">Countries Shipped To</p>
        </div>
        <div>
          <div className="text-3xl serif tracking-[0.1em] mb-2">12k+</div>
          <p className="text-sm text-[#6B665F]">Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default About;