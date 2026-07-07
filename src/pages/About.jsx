import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-bg pt-20">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-deep/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=80"
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6">
          <div className="uppercase tracking-[0.2em] text-xs text-white/70 mb-2">Est. 2018</div>
          <h1 className="text-4xl md:text-5xl text-white tracking-[-0.02em]">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-neutral max-w-none">
          <p className="text-xl text-text-muted leading-relaxed mb-8">
            Velmora was founded with a simple conviction: that beautiful jewelry should be worn every day, 
            not locked away for special occasions.
          </p>

          <div className="space-y-6 text-text-muted body-text">
            <p>
              We began in a small studio in Lisbon, where our founder, a former fine jewelry designer, 
              grew frustrated with the gap between heirloom-quality pieces and the reality of modern life. 
              Why should women have to choose between beauty and wearability?
            </p>
            <p>
              Our answer was demi-fine jewelry: pieces crafted with the same attention to detail as 
              fine jewelry, but designed for daily wear. We use 18K gold plating over hypoallergenic 
              bases, source only the finest crystals, and finish every piece by hand.
            </p>
            <p>
              Today, Velmora is worn by women across the world who value quiet luxury—those who 
              appreciate the weight of gold on their skin, the way light catches a well-cut crystal, 
              and the confidence that comes from wearing something truly well-made.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 pt-12 border-t border-border grid md:grid-cols-3 gap-8">
          {[
            { title: "Thoughtful Design", desc: "Every curve, every clasp, every detail is considered. Nothing is added without purpose." },
            { title: "Honest Materials", desc: "We use only 18K gold plating and hypoallergenic bases. No nickel. No shortcuts." },
            { title: "Made to Last", desc: "Our pieces are built for daily wear. With care, they will stay beautiful for years." },
          ].map((v, i) => (
            <div key={i}>
              <div className="font-medium tracking-[0.05em] mb-2">{v.title}</div>
              <p className="text-sm text-text-muted">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/shop" className="btn btn-primary">Explore the Collection</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
