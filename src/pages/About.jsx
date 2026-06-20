import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl text-cream mb-4">Our Story</h1>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32 bg-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
                Quiet Luxury, Warm & Timeless
              </h2>
              <div className="w-16 h-px bg-gold mx-auto" />
            </div>

            <div className="space-y-8 text-ink-muted leading-relaxed text-lg">
              <p>
                Velmora was founded in 2020 with a singular vision: to create demi-fine jewelry 
                that feels as luxurious as it looks, without the intimidating price tag of traditional 
                fine jewelry.
              </p>
              <p>
                Our name comes from the Latin "velum" (veil) and "mora" (pause) — a reminder to 
                slow down and appreciate the beauty in everyday moments. Each piece is designed 
                to be worn, loved, and passed down.
              </p>
              <p>
                We work with ethical suppliers and use 18K gold plating over hypoallergenic brass, 
                ensuring our pieces are as kind to the planet as they are to your skin.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <span className="font-serif text-2xl text-gold">01</span>
                </div>
                <h3 className="font-serif text-xl text-cream mb-3">Ethical Sourcing</h3>
                <p className="text-ink-muted text-sm">
                  We partner with suppliers who share our commitment to responsible practices.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <span className="font-serif text-2xl text-gold">02</span>
                </div>
                <h3 className="font-serif text-xl text-cream mb-3">Timeless Design</h3>
                <p className="text-ink-muted text-sm">
                  Pieces meant to transcend trends and become part of your personal story.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <span className="font-serif text-2xl text-gold">03</span>
                </div>
                <h3 className="font-serif text-xl text-cream mb-3">Accessible Luxury</h3>
                <p className="text-ink-muted text-sm">
                  Premium quality at prices that make fine jewelry attainable for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-base-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
            Experience Velmora
          </h2>
          <p className="text-ink-muted mb-8 max-w-2xl mx-auto">
            Discover our collection and find pieces that resonate with your personal style.
          </p>
          <Link
            to="/shop"
            className="inline-block px-10 py-4 bg-gold text-base font-medium tracking-widest uppercase text-sm hover:bg-gold-light transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
