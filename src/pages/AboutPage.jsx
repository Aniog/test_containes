import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 lg:pt-24 min-h-screen bg-brand-ivory">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] bg-brand-dark-bg overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="luxury jewelry brand studio artisan workshop warm lighting gold"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-brand-dark-bg/60" />
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div>
            <p className="text-brand-gold text-[11px] tracking-[0.3em] uppercase font-sans mb-3">
              Our Story
            </p>
            <h1 className="font-serif text-4xl lg:text-6xl text-brand-ivory font-light">
              About Velmora
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[900px] mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className="space-y-8 text-brand-warm-gray text-[16px] leading-[1.8]">
          <h2 className="font-serif text-3xl lg:text-4xl text-brand-charcoal font-light mb-6">
            Jewelry That Feels Like You
          </h2>
          <p>
            Velmora was born from a simple belief: luxury should be part of your everyday, not reserved for special occasions. We create demi-fine jewelry that bridges the gap between costume and fine — premium enough to treasure, accessible enough to wear daily.
          </p>
          <p>
            Every piece is crafted in 18K gold plating over surgical-grade materials, designed to be hypoallergenic and built to last. We work directly with skilled artisans, cutting out middlemen to bring you exceptional quality at honest prices.
          </p>
          <p>
            Our design philosophy is rooted in quiet luxury — pieces that whisper rather than shout. Jewelry that becomes part of your identity, that you reach for without thinking, that makes ordinary moments feel a little more special.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 lg:mt-20">
          {[
            { title: 'Quality First', text: '18K gold plating on surgical-grade base metals. Every piece passes rigorous quality checks before it reaches you.' },
            { title: 'Honest Pricing', text: 'Direct-to-consumer means no retail markup. Premium materials and craftsmanship at a fraction of traditional jewelry prices.' },
            { title: 'Conscious Craft', text: 'Ethically sourced materials, minimal packaging waste, and carbon-neutral shipping on every order.' },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <h3 className="font-serif text-xl text-brand-charcoal mb-3">{v.title}</h3>
              <p className="text-sm text-brand-warm-gray leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-10 py-3.5 bg-brand-gold text-brand-dark-bg text-sm tracking-[0.15em] uppercase font-sans font-medium hover:bg-brand-gold-light transition-colors"
          >
            Shop the Collection
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </main>
  );
}
