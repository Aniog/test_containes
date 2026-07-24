import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-brand-warm-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1600&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-brand-soft-black/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-white">Our Story</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Crafting quiet luxury for the modern woman since 2020.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="font-serif text-xl leading-relaxed text-brand-charcoal">
              Velmora was born from a simple belief: that fine jewelry should be accessible, meaningful, and made to last.
            </p>
            <p className="mt-6 text-brand-warm-gray leading-relaxed">
              Founded in California, we set out to create demi-fine jewelry that bridges the gap between everyday wear and special occasion elegance. Each piece in our collection is thoughtfully designed and crafted with premium materials that stand the test of time.
            </p>
            <p className="mt-6 text-brand-warm-gray leading-relaxed">
              We believe in quiet luxury — jewelry that speaks softly but leaves a lasting impression. From our signature gold-plated finishes to our hypoallergenic designs, every detail is considered.
            </p>
            <p className="mt-6 text-brand-warm-gray leading-relaxed">
              Our name, Velmora, combines "velvet" and "mora" (Spanish for "blackberry") — a nod to the soft, rich tones of our pieces and the natural beauty they're inspired by.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-cream py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal text-center">Our Values</h2>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              {
                title: 'Quality First',
                description: 'We use only premium materials — 18K gold-plated brass, genuine crystals, and hypoallergenic findings. Every piece is designed to last.'
              },
              {
                title: 'Accessible Luxury',
                description: "Fine jewelry shouldn't break the bank. We offer premium quality at accessible prices so you can build a collection you love."
              },
              {
                title: 'Conscious Design',
                description: "We're committed to sustainable practices, from responsible sourcing to recyclable packaging. Beautiful jewelry, beautifully made."
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="font-serif text-xl text-brand-charcoal">{value.title}</h3>
                <p className="mt-4 text-brand-warm-gray leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal">Experience Velmora</h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-warm-gray">
            Discover our collection of demi-fine jewelry designed to be worn, loved, and treasured.
          </p>
          <Link to="/shop" className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-brand-gold-dark hover:shadow-lg inline-flex">
            Shop the Collection
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
