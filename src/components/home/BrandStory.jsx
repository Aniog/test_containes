import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-cream">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center md:grid-cols-2">
          <div className="aspect-square overflow-hidden bg-velmora-sand md:aspect-auto md:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=800&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-16 lg:px-20">
            <p className="mb-3 font-sans text-xs uppercase tracking-ultra text-velmora-gold">
              Our Story
            </p>
            <h2 className="font-serif text-3xl leading-tight text-velmora-charcoal md:text-4xl">
              Jewelry That Feels
              <br />
              <em className="italic">Like Home</em>
            </h2>
            <div className="mt-6 space-y-4 font-sans text-sm leading-relaxed text-velmora-taupe">
              <p>
                Velmora was born from a simple belief: luxury should feel
                effortless. Our pieces are designed for the woman who moves
                through her day with quiet confidence — from boardroom meetings
                to dinner dates, from school runs to gallery openings.
              </p>
              <p>
                Every design starts in our New York studio, where we obsess over
                proportion, weight, and the way light plays across a surface.
                We use only 18K gold plating on hypoallergenic bases, because
                beautiful jewelry should never come at the cost of comfort.
              </p>
            </div>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-velmora-charcoal transition-colors hover:text-velmora-goldDark"
            >
              Discover Our Story
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}