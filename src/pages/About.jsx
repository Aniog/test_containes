import React from 'react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-20 text-center">
        <span className="uppercase tracking-[0.2em] text-xs text-[var(--velmora-gold)]">Est. 2019</span>
        <h1 className="font-serif text-5xl mt-3 mb-6">A quiet devotion to beauty.</h1>
        <p className="text-lg text-[var(--velmora-taupe)] max-w-xl mx-auto">
          Velmora was born from a simple belief: the most beautiful things are the ones you wear every day.
        </p>
      </div>

      {/* Story */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80" 
              alt="Velmora founder in atelier"
              className="w-full"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl mb-6">Our Story</h2>
            <div className="space-y-4 text-[var(--velmora-taupe)] body-text">
              <p>
                Founded in a small studio overlooking the sea, Velmora began as a collection of pieces 
                made for friends and family. What started as a handful of designs quickly grew into a 
                community of women who value intention over trend.
              </p>
              <p>
                Today, every piece is still designed in-house and finished by hand. We work with 
                skilled artisans who share our commitment to quality, using only the finest materials.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.2em] text-xs text-[var(--velmora-gold)]">What we believe</span>
            <h2 className="font-serif text-3xl mt-2">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Timeless Design", desc: "We create pieces that transcend seasons. Jewelry you will reach for for years to come." },
              { title: "Honest Materials", desc: "18K gold plating over solid brass. Hypoallergenic. Never plated over cheap alloys." },
              { title: "Thoughtful Craft", desc: "Each piece is inspected by hand. Small imperfections are part of the story, not flaws." },
            ].map((v, i) => (
              <div key={i} className="text-center">
                <h3 className="font-serif text-xl mb-3">{v.title}</h3>
                <p className="text-sm text-[var(--velmora-taupe)]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-xl mx-auto px-6 py-20 text-center">
        <h2 className="font-serif text-3xl mb-4">Ready to find your piece?</h2>
        <p className="text-[var(--velmora-taupe)] mb-8">Explore our full collection of demi-fine jewelry.</p>
        <Link to="/shop">
          <Button variant="primary">SHOP THE COLLECTION</Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
