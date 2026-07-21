import React from 'react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      title: "Thoughtful Design",
      desc: "Every curve, every clasp, every crystal is considered. We design for the woman who notices the details.",
    },
    {
      title: "Responsible Materials",
      desc: "We use 18K gold-plated brass and sterling silver sourced from suppliers who share our commitment to ethical practices.",
    },
    {
      title: "Made to Last",
      desc: "Our pieces are built for real life. Wear them daily, pass them down, love them for years.",
    },
    {
      title: "Small Batch",
      desc: "We produce in limited quantities to ensure quality and minimize waste. Each piece receives individual attention.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="bg-surface-warm py-20">
        <div className="container max-w-2xl text-center">
          <span className="caption">Est. 2019</span>
          <h1 className="mt-3 mb-6">Jewelry for the woman who values quiet beauty.</h1>
          <p className="text-lg text-text-muted">
            Velmora creates demi-fine pieces that feel precious but live in the real world.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="section container max-w-3xl">
        <div className="prose prose-lg mx-auto">
          <p className="text-xl leading-relaxed text-text mb-8">
            Velmora began in a small studio in upstate New York, where our founder, 
            a former fine jewelry designer, grew frustrated with the industry's extremes: 
            pieces that were either disposable fast fashion or priced beyond reach.
          </p>
          
          <p className="body-text text-text-muted mb-8">
            She set out to create something different—jewelry that felt special enough to 
            mark a moment, but accessible enough to wear every day. Pieces made with care, 
            from materials that wouldn't turn skin green or lose their luster after a season.
          </p>

          <p className="body-text text-text-muted">
            Today, Velmora is still a small team. We design in small batches, work with 
            artisans who take pride in their craft, and stand behind every piece we make. 
            We believe beautiful things should be worn, not saved for special occasions.
          </p>
        </div>
      </div>

      {/* Image Split */}
      <div className="grid md:grid-cols-2 gap-0 my-12">
        <div className="aspect-[4/3] md:aspect-auto bg-surface-warm">
          <img 
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=80" 
            alt="Velmora studio" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] md:aspect-auto bg-bg-deep flex items-center justify-center p-12">
          <div className="max-w-sm text-white">
            <blockquote className="text-2xl font-serif leading-tight mb-6">
              "I wanted jewelry that felt like an heirloom, not a trend."
            </blockquote>
            <p className="text-sm tracking-widest text-white/60">— FOUNDER, VELMORA</p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="section container">
        <div className="text-center mb-12">
          <span className="caption">What guides us</span>
          <h2 className="mt-1">Our Values</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <div key={i} className="p-8 border border-border">
              <h4 className="mb-3">{v.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="section bg-surface text-center">
        <h3 className="mb-4">Ready to find your piece?</h3>
        <Link to="/shop">
          <Button variant="gold-outline">Shop the Collection</Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
