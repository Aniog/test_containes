import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-20 text-center">
        <p className="text-xs tracking-[0.2em] text-velmora-accent mb-3">EST. 2019</p>
        <h1 className="serif text-5xl md:text-6xl tracking-[0.03em] mb-8">Jewelry for the everyday heirloom.</h1>
        <p className="text-lg text-velmora-text-muted max-w-lg mx-auto">
          We believe the most meaningful pieces are the ones you never take off.
        </p>
      </div>

      {/* Story Section */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80"
              alt="Velmora atelier"
              className="w-full rounded-sm"
            />
          </div>
          <div className="md:col-span-2 flex flex-col justify-center">
            <h2 className="serif text-3xl mb-6">The Velmora Philosophy</h2>
            <div className="space-y-4 text-[15px] text-velmora-text-muted leading-relaxed">
              <p>
                Velmora was founded with a singular vision: to create jewelry that feels as precious as fine jewelry, 
                but designed for real life.
              </p>
              <p>
                Our pieces are crafted in small batches using 18K gold plating over sterling silver. 
                Each piece is inspected by hand before it leaves our studio.
              </p>
              <p>
                We source responsibly and design with longevity in mind — pieces that will become part of your daily ritual, 
                not sit in a drawer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-velmora-surface border-y border-velmora-border py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Quiet Luxury", desc: "Understated elegance over trends. Our designs are timeless, not seasonal." },
              { title: "Everyday Wear", desc: "Substantial enough to feel special. Light enough to never take off." },
              { title: "Thoughtful Craft", desc: "Small batch production. Hand-finished details. Made to last." },
            ].map((v, i) => (
              <div key={i}>
                <h3 className="serif text-2xl mb-3">{v.title}</h3>
                <p className="text-velmora-text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team / Founder */}
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
          alt="Founder"
          className="w-28 h-28 rounded-full object-cover mx-auto mb-6"
        />
        <p className="serif text-2xl mb-2">Marina Vale</p>
        <p className="text-sm text-velmora-text-muted mb-6">Founder & Creative Director</p>
        <p className="text-velmora-text-muted leading-relaxed max-w-lg mx-auto">
          "I started Velmora because I couldn't find jewelry that felt special enough to wear every day, 
          yet accessible enough to collect. So I made it."
        </p>
      </div>

      <div className="text-center pb-20">
        <Link to="/shop" className="btn btn-outline">SHOP THE COLLECTION</Link>
      </div>
    </div>
  );
};

export default About;
