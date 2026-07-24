import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=900&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-accent mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide leading-[1.15]">
              Designed for the Woman Who Knows
            </h2>
            <div className="mt-6 space-y-4 text-warm-gray font-sans text-sm sm:text-base leading-relaxed">
              <p>
                Velmora was born from a simple belief: fine jewelry should not be reserved for special occasions. Every piece is crafted in small batches using 18K gold plating and hypoallergenic materials — so you can wear them every day, everywhere.
              </p>
              <p>
                Our designs balance vintage romance with modern minimalism. Each collection is inspired by art, architecture, and the quiet confidence of women who wear what they love.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs font-sans font-medium tracking-[0.2em] uppercase text-ink hover:text-accent transition-colors w-fit"
            >
              Read Our Story <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
