import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-velmora-cream pt-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <span className="text-xs tracking-[0.15em] text-velmora-muted uppercase">Est. 2018</span>
        <h1 className="font-serif-custom text-5xl md:text-6xl mt-4 mb-6">The Velmora Story</h1>
        <p className="text-lg text-velmora-muted max-w-2xl mx-auto">
          Quiet luxury, thoughtfully made. Jewelry designed to be worn every day and treasured for a lifetime.
        </p>
      </section>

      {/* Philosophy */}
      <section className="border-t border-velmora-taupe py-16">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif-custom text-3xl mb-6">Our Philosophy</h2>
            <div className="space-y-4 text-velmora-muted leading-relaxed">
              <p>
                We believe that fine jewelry shouldn't be reserved for special occasions. 
                Every woman deserves pieces she can wear daily — pieces that feel like an extension of herself.
              </p>
              <p>
                That's why we craft demi-fine jewelry using the highest quality materials at accessible prices. 
                18K gold plating over hypoallergenic brass. Carefully selected crystals. Thoughtful design.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] bg-velmora-surface">
            <img 
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80" 
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-velmora-surface py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif-custom text-3xl text-center mb-12">What We Stand For</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Quality Over Quantity", desc: "We make fewer pieces, but each one is made with intention. Every detail is considered." },
              { title: "Accessible Luxury", desc: "Premium materials and craftsmanship shouldn't cost a fortune. We prove that every day." },
              { title: "Timeless Design", desc: "Trends fade. Our pieces are designed to look as beautiful in ten years as they do today." },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <h3 className="font-serif-custom text-xl mb-3">{value.title}</h3>
                <p className="text-sm text-velmora-muted leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif-custom text-3xl mb-4">Crafted With Care</h2>
          <p className="text-velmora-muted max-w-lg mx-auto">
            From concept to creation, every Velmora piece passes through many hands before it reaches yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-sm">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2 tracking-[0.05em]">SOURCING</h4>
              <p className="text-velmora-muted">We work with trusted suppliers who share our commitment to ethical practices and quality materials.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2 tracking-[0.05em]">PLATING</h4>
              <p className="text-velmora-muted">Our 18K gold plating is applied in multiple layers for lasting beauty and durability.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2 tracking-[0.05em]">SETTING</h4>
              <p className="text-velmora-muted">Each crystal is hand-set by skilled artisans who take pride in their precision and attention to detail.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2 tracking-[0.05em]">FINISHING</h4>
              <p className="text-velmora-muted">Every piece is polished, inspected, and packaged with care before it leaves our studio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-velmora-charcoal text-velmora-cream py-16 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif-custom text-3xl mb-4">Ready to find your piece?</h2>
          <p className="text-white/70 mb-8">Explore our collection of earrings, necklaces, and huggies.</p>
          <Link to="/shop" className="btn btn-primary inline-block">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
