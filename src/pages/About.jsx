import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.15em] text-muted uppercase mb-3">Est. 2018</p>
        <h1 className="font-serif text-5xl md:text-6xl mb-6">Our Story</h1>
        <p className="text-xl text-muted max-w-lg mx-auto">
          Quiet luxury, thoughtfully made.
        </p>
      </div>

      <div className="space-y-16">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-3">
            <img 
              src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1200&q=80" 
              alt="Velmora founder at work"
              className="w-full"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl mb-4">A Note from Our Founder</h2>
            <div className="body-text text-[var(--velmora-text-muted)] space-y-4 text-sm">
              <p>
                I started Velmora because I couldn't find jewelry that felt right for everyday. 
                The pieces I loved were either too precious to wear or too cheap to last.
              </p>
              <p>
                So we made what we wanted to wear: beautiful, durable, and accessible. 
                Demi-fine jewelry that doesn't ask you to choose between quality and wearability.
              </p>
            </div>
          </div>
        </div>

        <div className="velmora-divider" />

        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-6">What We Believe</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-medium mb-2">Quality Over Quantity</h3>
              <p className="text-sm text-muted">Fewer, better pieces. Each one designed to last for years, not seasons.</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Wear It Daily</h3>
              <p className="text-sm text-muted">Jewelry shouldn't live in a box. Our pieces are made for real life.</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Honest Pricing</h3>
              <p className="text-sm text-muted">No inflated markups. Premium materials at a price that makes sense.</p>
            </div>
          </div>
        </div>

        <div className="velmora-divider" />

        <div className="text-center">
          <p className="text-muted mb-2">Have questions? We'd love to hear from you.</p>
          <a href="mailto:hello@velmora.com" className="text-[var(--velmora-gold-dark)] hover:underline">
            hello@velmora.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
