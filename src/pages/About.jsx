import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="bg-velmora-bg-alt py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="uppercase tracking-[0.2em] text-xs text-velmora-gold mb-3">Est. 2019</div>
          <h1 className="text-4xl md:text-5xl mb-6">Our Story</h1>
          <p className="text-lg text-velmora-text-muted max-w-xl mx-auto">
            Velmora was founded on the belief that beautiful jewelry should be worn, not stored.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
        <div className="prose prose-lg max-w-none text-velmora-text-muted">
          <p className="text-xl leading-relaxed mb-8 text-velmora-text">
            We design demi-fine pieces that feel as good as they look — crafted from 18K gold plating 
            over hypoallergenic bases, with stones chosen for their quiet brilliance.
          </p>

          <h2 className="text-velmora-text text-2xl mt-12 mb-4">The Philosophy</h2>
          <p>
            Quiet luxury isn't about being noticed. It's about feeling something when you put it on — 
            a small, private joy that stays with you throughout the day.
          </p>
          <p>
            Every piece is designed to be worn often, layered freely, and passed down eventually. 
            We reject trends in favor of silhouettes that feel timeless the moment you see them.
          </p>

          <h2 className="text-velmora-text text-2xl mt-12 mb-4">The Craft</h2>
          <p>
            Our jewelry is made in small batches by artisans who have spent years perfecting their technique. 
            Each piece is hand-finished, inspected, and packaged with care in our studio.
          </p>
          <ul className="my-6 space-y-2">
            <li>18K gold plating over hypoallergenic brass</li>
            <li>Cubic zirconia and natural crystal accents</li>
            <li>Nickel-free and lead-free</li>
            <li>Designed to last with proper care</li>
          </ul>

          <h2 className="text-velmora-text text-2xl mt-12 mb-4">Our Promise</h2>
          <p>
            We stand behind every piece. If something isn't right, we'll make it right — 
            no questions, no hassle. That's what it means to build something meant to last.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-velmora-border">
          {[
            { title: 'Free Shipping', desc: 'Complimentary worldwide shipping on all orders over $75.' },
            { title: '30-Day Returns', desc: 'Easy returns on unworn items in original packaging.' },
            { title: 'Lifetime Care', desc: 'Complimentary cleaning and minor repairs for life.' },
          ].map((v, i) => (
            <div key={i}>
              <div className="font-medium mb-1">{v.title}</div>
              <p className="text-sm text-velmora-text-muted">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-velmora-text text-velmora-bg py-12">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="mb-4">Have a question or need help choosing a piece?</p>
          <a href="mailto:hello@velmora.com" className="btn btn-gold">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
