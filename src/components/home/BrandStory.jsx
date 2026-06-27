import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=80"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:py-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent mb-4">Our Story</p>
            <h2 className="serif text-3xl md:text-4xl font-light leading-snug mb-6">
              Designed with Intention,<br />Made to Last
            </h2>
            <p className="text-warm-gray leading-relaxed mb-4">
              Velmora was born from a simple belief: fine jewelry should not be reserved for special occasions alone.
              Every piece in our collection is crafted with 18K gold plating, designed to transition effortlessly from
              your morning coffee to an evening gala.
            </p>
            <p className="text-warm-gray leading-relaxed mb-8">
              We work with small-batch artisans who share our passion for quality and detail. Each design is
              thoughtfully considered — minimal, modern, and made to be treasured for years to come.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors"
            >
              Our Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
