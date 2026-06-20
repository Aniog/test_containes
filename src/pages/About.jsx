import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] flex items-center justify-center bg-velmora-bg-dark">
        <img
          src="https://picsum.photos/id/106/2000/1200"
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6">
          <span className="text-white/70 text-sm tracking-[3px] uppercase">Est. 2019</span>
          <h1 className="text-white mt-2">Our Story</h1>
        </div>
      </div>

      <div className="container section max-w-3xl">
        <div className="prose prose-lg mx-auto">
          <p className="text-xl leading-relaxed text-velmora-text">
            Velmora was founded with a singular vision: to create demi-fine jewelry that feels like an heirloom from the very first wear.
          </p>
          
          <div className="my-10 h-px bg-velmora-border-subtle" />

          <div className="space-y-6 body-text">
            <p>
              We believe that beautiful jewelry should not be reserved for special occasions. Our pieces are designed to be worn daily — to catch the light at your desk, to sparkle at dinner, to become part of your story.
            </p>
            <p>
              Every piece begins with the finest 18K gold-plated brass, sourced from ethical suppliers. Our master artisans in Italy and Portugal hand-finish each item, ensuring that the quality you feel matches the beauty you see.
            </p>
            <p>
              We design in small batches. This allows us to maintain the highest standards while keeping our prices accessible. No mass production. No shortcuts.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-velmora-surface-warm py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Timeless Design', desc: 'We create pieces that transcend trends. Jewelry you will wear for decades.' },
              { title: 'Ethical Sourcing', desc: 'All materials are responsibly sourced. We know every supplier by name.' },
              { title: 'Crafted with Care', desc: 'Each piece is inspected three times before it reaches your hands.' },
            ].map((v, i) => (
              <div key={i}>
                <h3 className="font-serif text-xl mb-3">{v.title}</h3>
                <p className="body-text text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team / Philosophy */}
      <div className="container section">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-6">The Velmora Woman</h2>
          <p className="body-text">
            She values quality over quantity. She chooses pieces that feel personal, not performative. She knows that true luxury is quiet.
          </p>
          <p className="body-text mt-4">
            Whether you're buying for yourself or gifting someone you love, we hope our jewelry becomes part of your most meaningful moments.
          </p>
          
          <div className="mt-10">
            <Link to="/shop">
              <Button variant="outline-gold">Explore the Collection</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;