import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-500 mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-300">About</span>
        </nav>

        <div className="text-center max-w-2xl mx-auto pt-10">
          <p className="text-xs uppercase tracking-mega-wide text-gold mb-4">About Velmora</p>
          <h1 className="heading-serif text-4xl md:text-6xl text-brand-50 mb-8">
            Where Craft Meets Intention
          </h1>
          <div className="space-y-5 text-brand-300 text-sm leading-relaxed text-left">
            <p>
              Velmora was founded with a singular vision: to create demi-fine gold jewelry that
              feels both luxurious and accessible. We believe that beautiful, well-crafted jewelry
              should not require a fine-jewelry price tag.
            </p>
            <p>
              Every piece in our collection begins as a sketch in our London studio, where our
              design team draws inspiration from architecture, nature, and the quiet elegance of
              everyday moments. We work closely with skilled artisans who bring these designs to
              life using premium 18K gold-plated materials.
            </p>
            <p>
              Our commitment to quality extends beyond the jewelry itself. From our hypoallergenic
              materials to our signature packaging, every touchpoint is designed to make you feel
              special. Because at Velmora, we believe you deserve to be treasured too.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-8">
            {[
              { num: '18K', label: 'Gold Plated' },
              { num: '100%', label: 'Hypoallergenic' },
              { num: '30-Day', label: 'Free Returns' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="heading-serif text-3xl md:text-4xl text-gold mb-1">{stat.num}</p>
                <p className="text-xs uppercase tracking-wider text-brand-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Link to="/shop" className="btn-gold">
              Explore the Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
