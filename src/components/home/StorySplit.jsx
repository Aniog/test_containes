import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { resolveImageUrl } from "@/lib/stockImages";

export default function StorySplit() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-[5/6] bg-ivory border border-line/70 overflow-hidden order-1">
            <img
              alt="Founder of Velmora holding a gold earring"
              data-strk-img-id="story-image-a2b9"
              data-strk-img="[story-text] [story-title] woman founder designer gold jewelry studio warm light editorial portrait"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src={resolveImageUrl("story-image-a2b9")}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Editorial badge */}
            <div className="absolute bottom-5 left-5 bg-cream/95 px-4 py-2 text-[10px] uppercase tracking-wider-3 font-sans font-medium text-ink">
              Est. 2021 — Designed in small batches
            </div>
          </div>

          {/* Text */}
          <div className="order-2">
            <p className="eyebrow text-gold-deep mb-4">Our story</p>
            <h2
              id="story-title"
              className="display-lg text-ink"
            >
              Jewelry, slowly made.
            </h2>
            <p
              id="story-text"
              className="mt-6 md:mt-8 body-prose text-ink-soft max-w-lg"
            >
              Velmora began at a kitchen table, with a single pair of earrings
              and a frustration with the way fine jewelry made most of us feel
              — priced out, sized out, or talked down to. We set out to make
              demi-fine pieces that feel as considered as heritage, but as
              wearable as the everyday.
            </p>
            <p className="mt-5 body-prose text-ink-soft max-w-lg">
              Every piece is hand-finished in 18K gold plating, set in small
              batches, and shipped in a keepsake box. We hope one of them finds
              its way onto your dresser — and stays there.
            </p>
            <Link
              to="/about"
              className="mt-8 md:mt-10 inline-flex items-center gap-2 text-ink link-underline"
            >
              Read our story
              <ArrowRight
                strokeWidth={1.5}
                className="w-4 h-4"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
