import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velmora-sand/30 overflow-hidden">
            <img
              src={'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#C4B499"/><stop offset="100%" stop-color="#A88C6F"/></linearGradient></defs><rect fill="url(#g)" width="400" height="500"/></svg>')}
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-4">
            <p className="section-subhead mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-espresso font-medium leading-[1.2] tracking-wide">
              Jewelry that lives
              <br />
              with you
            </h2>
            <div className="w-12 h-[1px] bg-velmora-gold my-7" />
            <p className="font-sans text-sm md:text-base text-velmora-taupe leading-relaxed max-w-md">
              Velmora was born from the belief that fine jewelry shouldn't be
              locked away for special occasions. Every piece is crafted in 18K
              gold plate with the same attention to detail as heirloom
              jewelry — but designed to be worn every single day.
            </p>
            <p className="font-sans text-sm md:text-base text-velmora-taupe leading-relaxed max-w-md mt-4">
              From our atelier to your jewelry box, each design passes through
              twelve pairs of artisan hands before it reaches you.
            </p>
            <div className="mt-8">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-velmora-espresso tracking-[0.15em] uppercase hover:text-velmora-gold transition-colors group"
              >
                Explore the Collection
                <ArrowRight
                  size={16}
                  strokeWidth={1}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
