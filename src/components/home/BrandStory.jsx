import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-velmora-cream via-velmora-sand to-velmora-cream rounded-sm overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-24 h-24 border border-velmora-gold/20 rounded-full" />
              <div className="absolute bottom-12 left-12 w-16 h-16 border border-velmora-gold/15 rounded-full" />

              {/* Central composition */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full bg-gradient-to-br from-velmora-gold/25 to-velmora-gold/10 flex items-center justify-center mb-4">
                    <span className="font-serif text-5xl md:text-6xl text-velmora-gold/70">V</span>
                  </div>
                </div>
              </div>

              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-gold/5 to-transparent" />
            </div>

            {/* Accent line */}
            <div className="hidden lg:block absolute -bottom-4 -right-4 w-32 h-px bg-velmora-gold" />
          </div>

          {/* Text */}
          <div>
            <p className="section-subheading mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-charcoal leading-tight mb-8">
              Jewelry that speaks
              <br />
              <span className="italic text-velmora-gold">without shouting</span>
            </h2>
            <div className="space-y-5 font-sans text-base text-velmora-warm-gray leading-relaxed">
              <p>
                Velmora was born from a simple belief: luxury should be lived in, not locked away. We create demi-fine jewelry that bridges the gap between costume and couture — pieces you reach for every morning without thinking twice.
              </p>
              <p>
                Every design starts with the wearer. How does it feel after 12 hours? Does it catch the light at dinner? Can you sleep in it? These questions guide our craft, resulting in jewelry that's as enduring as it is beautiful.
              </p>
              <p>
                18K gold plating over surgical-grade steel. Hypoallergenic by design. Accessible by intention. This is quiet luxury for the way you actually live.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-sm tracking-ultra-wide uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
