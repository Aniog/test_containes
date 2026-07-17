import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="bg-cream-100">
      <div className="max-w-editorial mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream-200 order-1 lg:order-1">
            <img
              alt="Founder in studio with demi-fine jewelry"
              data-strk-img-id="brand-story-img-22a1"
              data-strk-img="[brand-story-heading] [brand-story-eyebrow]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="order-2 lg:order-2">
            <span id="brand-story-eyebrow" className="eyebrow-gold">
              Our story
            </span>
            <h2
              id="brand-story-heading"
              className="font-serif text-ink mt-4 text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.05]"
            >
              Designed to be lived in,
              <br />
              <span className="italic">made to be loved.</span>
            </h2>
            <div className="mt-8 space-y-5 text-muted text-[15px] leading-relaxed max-w-md">
              <p>
                Velmora was born from a simple belief: fine jewelry should be
                worn, not stored. Every piece is crafted in 18K gold plating
                with the same care as a precious heirloom — but designed to
                live in your daily rotation.
              </p>
              <p>
                From our California studio, we work directly with small
                workshops to create demi-fine jewelry that feels considered,
                personal, and quietly luxurious. No markups, no shortcuts.
              </p>
            </div>
            <Link to="/about" className="btn-ghost mt-9">
              Our Story
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.6} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
