import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const About = () => {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center bg-[var(--velmora-bg-dark)]">
        <img 
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=90" 
          alt="Velmora atelier" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-[var(--velmora-text-light)] text-4xl md:text-5xl">Our Story</h1>
        </div>
      </div>

      <div className="container py-16 max-w-3xl">
        <div className="prose prose-lg mx-auto">
          <p className="text-xl leading-relaxed mb-8">
            Velmora was founded in 2018 with a simple conviction: that fine jewelry should not require compromise.
          </p>

          <div className="body-text space-y-6 mb-12">
            <p>
              We believe in the quiet power of well-made things. In an age of fast fashion and disposable trends, 
              we chose a different path—one of intention, restraint, and enduring beauty.
            </p>
            <p>
              Our pieces are demi-fine: crafted from solid brass with a generous layer of 18K gold plating. 
              They are designed to be worn daily, to develop a soft patina over time, and to be passed down 
              as heirlooms rather than discarded as trends.
            </p>
            <p>
              Every piece is hand-finished by artisans who understand that true luxury lives in the details—the 
              weight of a clasp, the curve of a hoop, the way light catches a faceted crystal.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 my-16">
          {[
            { title: "Thoughtful Design", desc: "Each piece begins with a sketch and a question: Will this still feel beautiful in ten years?" },
            { title: "Honest Materials", desc: "We use only hypoallergenic, nickel-free components. No shortcuts, no compromises." },
            { title: "Timeless Over Trend", desc: "We design for the long term. Quiet luxury that transcends seasons and fleeting fads." },
          ].map((v, i) => (
            <div key={i} className="text-center">
              <h3 className="mb-3">{v.title}</h3>
              <p className="body-text text-sm">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-8 border-t border-[var(--velmora-border)]">
          <p className="body-text mb-6">Ready to find your next treasure?</p>
          <Link to="/shop">
            <Button>Shop the Collection</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;