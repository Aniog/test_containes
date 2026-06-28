import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-bone">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
              <img
                alt="Velmora atelier"
                data-strk-img-id="brand-story-img-7b3c1e"
                data-strk-img="[brand-story-desc] [brand-story-title] jewelry atelier hands gold polishing warm light editorial"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-6">
            <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold">
              Our Story
            </span>
            <h2
              id="brand-story-title"
              className="mt-4 font-serif font-light text-4xl md:text-5xl tracking-tight text-onyx leading-tight"
            >
              Quietly luxurious,<br />
              <em className="not-italic text-gold">slowly made.</em>
            </h2>
            <p
              id="brand-story-desc"
              className="mt-6 font-sans text-base md:text-lg text-espresso/85 leading-relaxed"
            >
              Velmora was founded on a single idea — that fine jewelry should be
              lived in. Each piece is finished by hand in small batches, using
              18K gold plating over recycled brass and stones we'd be proud to
              hand down. No trends, no shortcuts. Just heirlooms in the making.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 md:gap-8 border-t border-hairline-dark pt-8">
              <div>
                <p className="font-serif text-3xl text-onyx">12</p>
                <p className="font-sans text-xs uppercase tracking-[0.22em] text-taupe mt-1">
                  Years
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-onyx">48</p>
                <p className="font-sans text-xs uppercase tracking-[0.22em] text-taupe mt-1">
                  Countries
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-onyx">100<span className="text-gold">k</span></p>
                <p className="font-sans text-xs uppercase tracking-[0.22em] text-taupe mt-1">
                  Treasured
                </p>
              </div>
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.28em] text-onyx hover:text-gold transition-colors group"
            >
              Read Our Story
              <ArrowRight
                size={16}
                strokeWidth={1.25}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
