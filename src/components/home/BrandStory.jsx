import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="py-16 lg:py-24 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velmora-cream overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md lg:pl-4">
            <p className="text-velmora-gold text-xs tracking-[0.25em] uppercase font-sans font-medium mb-3">
              Since 2020
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-velmora-charcoal font-light leading-tight">
              The Art of Quiet
              <br />
              <span className="font-semibold italic">Luxury</span>
            </h2>
            <div className="w-12 h-[1px] bg-velmora-gold mt-6 mb-6" />
            <p className="text-sm sm:text-base text-velmora-charcoal-light font-sans leading-relaxed">
              At Velmora, we believe fine jewelry should be worn every day — not saved
              for special occasions. Every piece is crafted in 18K gold plated finishes,
              designed to move with you from morning meetings to evening dinners.
            </p>
            <p className="text-sm sm:text-base text-velmora-charcoal-light font-sans leading-relaxed mt-4">
              We work directly with master artisans to bring demi-fine designs that
              honor tradition while embracing modernity. No markups. Just enduring beauty.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 mt-8 text-sm tracking-widest uppercase font-sans text-velmora-charcoal hover:text-velmora-gold transition-colors duration-300 border-b border-velmora-charcoal/20 hover:border-velmora-gold pb-0.5"
            >
              Our Story
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}