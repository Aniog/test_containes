import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl text-brand-text sm:text-4xl">Our Story</h1>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
        <div className="h-72 overflow-hidden rounded-sm sm:h-96">
          <img
            src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=80"
            alt="Velmora studio"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm leading-relaxed text-brand-textSoft">
            Velmora Fine Jewelry was founded in London with a clear purpose: to create jewelry that feels both precious and wearable. We believe in quiet luxury — pieces that speak softly but leave a lasting impression.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-brand-textSoft">
            Every design is crafted in recycled 18K gold-plated brass, set with ethically sourced crystals. From our studio to your jewelry box, we obsess over the details so you can enjoy the moment.
          </p>
          <Link to="/shop" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-accent hover:text-brand-accentHover">
            Explore the collection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
