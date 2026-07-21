import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-0 items-center">
        {/* Image */}
        <div className="aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden bg-velvet-800">
          <img
            src="https://placehold.co/900x1200/1a1512/d4a853?text=Our+Craftsmanship"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:pl-16 lg:pl-20 mt-10 md:mt-0">
          <p className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-warm-50 tracking-wide leading-snug">
            Designed to be lived in,{' '}
            <span className="italic">crafted to last.</span>
          </h2>
          <p className="mt-6 text-warm-400 leading-relaxed text-sm md:text-base max-w-md">
            Velmora was born from the belief that luxury should feel effortless.
            Each piece is designed in our Barcelona atelier and crafted from
            18K gold-plated brass — combining old-world craftsmanship with a
            modern, minimal aesthetic.
          </p>
          <p className="mt-4 text-warm-400 leading-relaxed text-sm md:text-base max-w-md">
            Every piece is hypoallergenic, nickel-free, and made to be worn
            every day. Because fine jewelry shouldn't wait for a special
            occasion.
          </p>
          <Link to="/about" className="btn-outline mt-8">
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}
