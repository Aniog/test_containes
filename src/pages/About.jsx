import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div>
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=1600&q=80"
          alt="Velmora craftsmanship"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
          <div>
            <p className="text-white/80 text-xs tracking-widest uppercase mb-4">Our Story</p>
            <h1 className="font-serif text-4xl md:text-6xl text-white">Designed for Real Life</h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="font-serif text-xl md:text-2xl text-brand-ink leading-relaxed">
            Velmora was born from a simple belief: fine jewelry should feel as good as it looks. We design each piece to be worn daily—light enough for the office, polished enough for date night.
          </p>
          <div className="mt-10 space-y-6 text-brand-muted leading-relaxed">
            <p>
              Founded in 2023, Velmora set out to bridge the gap between fine jewelry and everyday wear. Our designs are inspired by modern women who want pieces that transition seamlessly from morning meetings to evening gatherings.
            </p>
            <p>
              Every Velmora piece is crafted in recycled 18K gold-plated brass, finished by hand, and rigorously tested for comfort and durability. We work with responsible suppliers and prioritize sustainable materials without compromising on beauty.
            </p>
            <p>
              From our studio to your jewelry box, we believe luxury should be accessible, thoughtful, and made to last.
            </p>
          </div>
          <div className="mt-10">
            <Link to="/shop" className="inline-flex items-center gap-2 btn-primary">
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
