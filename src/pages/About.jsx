import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24" ref={containerRef}>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <div
          className="absolute inset-0 bg-espresso"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="gold jewelry artisan workshop warm lighting editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/50" />
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div>
            <h1 className="font-serif text-4xl md:text-6xl text-sand-50 tracking-wide mb-4">
              Our Story
            </h1>
            <p className="font-sans text-sm text-sand-50/60 max-w-md mx-auto">
              Born from a belief that luxury should be felt, not flaunted.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="space-y-8 text-espresso/70">
          <p className="font-sans text-base leading-relaxed">
            Velmora was born in 2022 from a frustration shared by many women: beautiful, well-made
            jewelry shouldn't cost a month's rent, and affordable jewelry shouldn't turn your skin green
            after two wears.
          </p>
          <p className="font-sans text-base leading-relaxed">
            We set out to bridge that gap — creating demi-fine pieces in 18K gold plating over
            quality base metals, designed to last through seasons of wear without the luxury markup.
            Every piece in our collection is hypoallergenic, water-resistant, and crafted with the kind
            of attention to detail you'd expect from a much higher price point.
          </p>
          <p className="font-sans text-base leading-relaxed">
            Our design philosophy is simple: quiet confidence. We draw inspiration from architectural
            forms, botanical textures, and the way light moves through a room at golden hour. The
            result is jewelry that feels both timeless and distinctly modern — pieces you reach for
            every morning without thinking, and never want to take off at night.
          </p>
          <blockquote className="border-l-2 border-gold pl-6 py-2">
            <p className="font-serif text-xl md:text-2xl text-espresso italic leading-relaxed">
              "We don't design jewelry to be noticed. We design it to be treasured."
            </p>
            <cite className="font-sans text-xs tracking-widest uppercase text-gold mt-3 block not-italic">
              — Elena Voss, Founder
            </cite>
          </blockquote>
          <p className="font-sans text-base leading-relaxed">
            Every Velmora piece arrives in our signature gift box with a satin ribbon and a polishing
            cloth — because we believe the experience of receiving should be as beautiful as the
            jewelry itself.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand-100 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: 'Craftsmanship', desc: 'Every piece is hand-finished and inspected before it reaches you.' },
              { title: 'Sustainability', desc: 'Recycled metals, minimal packaging, carbon-neutral shipping.' },
              { title: 'Community', desc: '100,000+ women who choose quiet luxury over loud trends.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-serif text-xl text-espresso tracking-wide mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-espresso/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
