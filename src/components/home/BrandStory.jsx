import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function BrandStory() {
  return (
    <section className="bg-cream">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-square md:aspect-auto md:min-h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80"
            alt="Velmora jewelry craftsmanship"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 md:px-16 lg:px-24">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Our Story
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight sm:text-4xl lg:text-5xl">
            Jewelry That Feels Like You
          </h2>
          <p className="mt-6 text-base leading-relaxed text-mocha">
            Velmora was born from a belief that fine jewelry should be both
            beautiful and wearable. Every piece is designed in-house and
            finished in 18K gold plate — striking the balance between luxury and
            everyday ease.
          </p>
          <p className="mt-4 text-base leading-relaxed text-mocha">
            We create for the woman who buys herself flowers, who celebrates
            small wins, and who gifts with intention. No occasion required.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-espresso transition-colors hover:text-gold"
          >
            Read Our Story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
