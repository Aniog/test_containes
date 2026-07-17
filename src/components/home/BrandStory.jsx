import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-cream-200">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=85"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-clay-900 font-light tracking-wide leading-tight">
              Designed with
              <br />
              <span className="italic">Intention</span>
            </h2>
            <div className="w-12 h-px bg-clay-300 my-6" />
            <p className="text-sm md:text-base text-clay-600 font-sans leading-relaxed">
              At Velmora, we believe jewelry should feel as good as it looks.
              Each piece is meticulously crafted from premium materials —
              18K gold plated over sterling silver — and designed to be worn
              every day, for years to come.
            </p>
            <p className="mt-4 text-sm md:text-base text-clay-600 font-sans leading-relaxed">
              No compromises. No trends. Just timeless pieces that honor the
              art of fine craftsmanship.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 text-clay-800 font-sans text-xs uppercase tracking-widest border-b border-clay-400 pb-1 hover:border-clay-800 transition-colors group"
            >
              Our Story
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}