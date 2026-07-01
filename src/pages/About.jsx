import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-velmora-bg-alt">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80"
            alt="Velmora Atelier"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="text-xs tracking-[0.2em] uppercase text-white/80">Est. 2019</span>
          <h1 className="text-4xl md:text-5xl text-white mt-2">Our Story</h1>
        </div>
      </section>

      <div className="container-custom py-16 md:py-20 max-w-3xl">
        <div className="prose prose-lg">
          <p className="text-xl text-velmora-text-muted leading-relaxed mb-8">
            Velmora was founded with a simple conviction: that beautiful, well-made jewelry should be part of everyday life—not reserved for special occasions.
          </p>

          <div className="my-12 divider" />

          <h2 className="text-2xl mb-4">The Beginning</h2>
          <p className="body-text text-velmora-text-muted mb-6">
            Our founder, a former fine jewelry buyer, grew frustrated by the gap between mass-market costume jewelry and the unattainable prices of solid gold. She believed there was a middle ground—pieces that felt precious, looked refined, and could be worn without worry.
          </p>
          <p className="body-text text-velmora-text-muted mb-6">
            After two years of working with artisans across India and Italy, Velmora launched with five signature pieces. Each was designed to be worn daily, gifted meaningfully, and treasured for years.
          </p>

          <h2 className="text-2xl mt-12 mb-4">Our Approach</h2>
          <p className="body-text text-velmora-text-muted mb-6">
            We use 18K gold plating over solid brass, a combination that offers the warmth and luster of solid gold at a more accessible price point. Every piece is nickel-free and hypoallergenic, designed for sensitive skin.
          </p>
          <p className="body-text text-velmora-text-muted mb-6">
            We work in small batches. We don't chase trends. We design pieces that feel timeless the moment they leave the atelier.
          </p>

          <div className="my-12 p-8 bg-velmora-bg-alt text-center">
            <p className="font-serif-custom text-xl italic">
              "Jewelry should feel like an extension of you—not something you save for later."
            </p>
            <p className="text-sm tracking-[0.1em] uppercase mt-4 text-velmora-text-muted">— Founder</p>
          </div>

          <h2 className="text-2xl mt-12 mb-4">Sustainability</h2>
          <p className="body-text text-velmora-text-muted mb-6">
            We believe quiet luxury includes responsibility. Our packaging is made from recycled materials. Our plating process uses significantly less precious metal than solid gold. We partner with suppliers who share our commitment to ethical practices.
          </p>

          <div className="mt-12 pt-8 border-t border-velmora-border">
            <Link to="/shop" className="btn btn-gold">
              Explore the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Values */}
      <section className="bg-velmora-bg-alt py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Thoughtful Design", desc: "Every curve, every clasp, considered." },
              { title: "Honest Materials", desc: "Premium plating, no shortcuts." },
              { title: "Made to Last", desc: "Pieces you'll wear for years." },
            ].map((v, i) => (
              <div key={i}>
                <h3 className="text-xl mb-2">{v.title}</h3>
                <p className="text-sm text-velmora-text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
