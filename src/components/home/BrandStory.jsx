import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-velmora-dark/5">
            <img
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=85"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <p className="text-velmora-gold text-xs tracking-widest uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark tracking-wide leading-tight">
              Jewelry That
              <br />
              <span className="italic">Tells a Story</span>
            </h2>
            <div className="w-12 h-0.5 bg-velmora-gold mt-6 mb-6" />
            <p className="text-velmora-muted leading-relaxed mb-4">
              Velmora was born from a belief that fine jewelry shouldn't be
              reserved for special occasions. We craft demi-fine pieces that
              transition seamlessly from desk to dinner, from everyday to
              extraordinary.
            </p>
            <p className="text-velmora-muted leading-relaxed mb-8">
              Every piece is designed in our New York studio and hand-finished
              with 18K gold plating — because you deserve jewelry that looks as
              beautiful as the life you live.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-velmora-dark text-sm uppercase tracking-wider hover:text-velmora-gold transition-colors"
            >
              Read Our Story
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}