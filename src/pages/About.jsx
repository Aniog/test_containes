import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-velmora-cream">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-20 text-center">
        <p className="text-xs tracking-[0.2em] text-velmora-text-muted mb-4">ESTABLISHED 2019</p>
        <h1 className="serif text-5xl md:text-6xl mb-6">Jewelry for the life you live.</h1>
        <p className="text-lg text-velmora-text-muted max-w-xl mx-auto">
          Velmora creates demi-fine gold pieces that feel precious but belong in the everyday. 
          Thoughtfully designed. Responsibly made.
        </p>
      </div>

      {/* Philosophy */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="serif text-3xl mb-6">Our Philosophy</h2>
            <div className="space-y-4 text-velmora-text-muted leading-relaxed">
              <p>
                We believe beautiful jewelry should be worn, not saved for special occasions. 
                Our pieces are designed to become part of your daily rituals — the earrings you reach for 
                every morning, the necklace that feels like a second skin.
              </p>
              <p>
                Demi-fine means we use premium materials and thoughtful craftsmanship without the 
                traditional markup. You get the look and feel of fine jewelry at a price that makes 
                sense for real life.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] bg-velmora-warm-gray overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80" 
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] text-velmora-text-muted mb-2">WHAT WE STAND FOR</p>
          <h2 className="serif text-3xl">Our Values</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Thoughtful Design", desc: "Every curve, every clasp, every detail is considered. We design for longevity, not trends." },
            { title: "Responsible Sourcing", desc: "We work with suppliers who share our commitment to ethical practices and traceable materials." },
            { title: "Accessible Luxury", desc: "Premium shouldn't mean unattainable. We price our pieces to be worn, collected, and loved." },
          ].map((v, i) => (
            <div key={i} className="text-center">
              <h3 className="serif text-xl mb-3">{v.title}</h3>
              <p className="text-sm text-velmora-text-muted leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Craft */}
      <div className="bg-velmora-bg text-velmora-cream py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="serif text-3xl mb-6">Crafted with Intention</h2>
          <p className="text-velmora-stone leading-relaxed max-w-2xl mx-auto">
            Each piece begins as a sketch in our New York studio. We work with skilled artisans 
            who bring decades of experience to every casting, plating, and finishing. The result 
            is jewelry that feels considered in your hand and looks timeless on your body.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-xl mx-auto px-6 py-20 text-center">
        <h3 className="serif text-2xl mb-4">Ready to find your new favorite?</h3>
        <p className="text-velmora-text-muted mb-8">Explore our collection of everyday treasures.</p>
        <Link to="/shop" className="btn btn-gold">Shop the Collection</Link>
      </div>
    </div>
  );
};

export default About;