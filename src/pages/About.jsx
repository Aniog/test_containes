import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-12 pb-16 text-center">
        <div className="text-xs tracking-[0.15em] text-gold-600 mb-2">NEW YORK • EST. 2018</div>
        <h1 className="font-serif text-5xl tracking-[0.02em] mb-6">The Velmora Story</h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          We design demi-fine jewelry for women who appreciate subtlety, quality, and pieces that become part of their daily ritual.
        </p>
      </div>

      {/* Philosophy */}
      <div className="bg-base-100 border-y border-gold-400 py-14">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 text-[15px] leading-relaxed text-muted">
            <div>
              <h3 className="font-serif text-2xl text-base-900 tracking-[0.02em] mb-4">Our Philosophy</h3>
              <p>
                In a world of fast fashion and fleeting trends, we believe in creating jewelry that lasts — 
                both in construction and in meaning. Each piece is designed to be worn, loved, and passed down.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-base-900 tracking-[0.02em] mb-4">Our Promise</h3>
              <p>
                We use only the finest 18K gold plating over hypoallergenic brass. Every piece is hand-finished 
                in small batches. We stand behind our work with a 30-day return policy and lifetime repair program.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Process */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[0.15em] text-gold-600 mb-1">FROM STUDIO TO YOU</div>
          <h2 className="font-serif text-4xl tracking-[0.02em]">How We Make It</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Design", desc: "Every piece begins as a hand sketch in our Brooklyn studio, refined over weeks until the proportions feel just right." },
            { step: "02", title: "Craft", desc: "We work with a family-owned atelier in Jaipur to cast and plate each piece in small batches using traditional techniques." },
            { step: "03", title: "Finish", desc: "Back in New York, each piece is hand-polished, inspected, and packaged with care before it reaches your door." },
          ].map((item) => (
            <div key={item.step} className="border-l-2 border-gold-400 pl-5">
              <div className="text-gold-600 text-sm tracking-[0.15em] mb-1">{item.step}</div>
              <div className="font-serif text-xl mb-2 tracking-[0.02em]">{item.title}</div>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="bg-base-950 text-base-50 py-14">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[0.15em] text-gold-400 mb-1">WHAT MATTERS TO US</div>
            <h2 className="font-serif text-3xl tracking-[0.02em]">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8 text-sm">
            {[
              ["Thoughtful Design", "We design for longevity, not trends. Every curve and proportion is considered."],
              ["Honest Materials", "No greenwashing. We use real gold plating and disclose every component."],
              ["Fair Labor", "We partner only with workshops that pay living wages and treat workers with dignity."],
              ["Less Waste", "Small-batch production means less overstock. We never discount to move inventory."],
            ].map(([title, desc], i) => (
              <div key={i}>
                <div className="font-medium tracking-[0.05em] mb-1">{title}</div>
                <p className="text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-md mx-auto px-6 py-16 text-center">
        <p className="text-muted mb-6">Ready to find your next everyday piece?</p>
        <Link to="/shop" className="btn-premium btn-premium-solid inline-block px-10 py-3 text-sm tracking-[0.1em]">
          SHOP THE COLLECTION
        </Link>
      </div>
    </div>
  );
}

export default About;