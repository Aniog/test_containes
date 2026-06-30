import { Link } from "react-router-dom";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useStrkImages } from "@/lib/imageLoader.js";

export default function BrandStory() {
  const ref = useRef(null);
  useStrkImages(ref);

  return (
    <section
      ref={ref}
      className="bg-surface-warm py-20 md:py-32"
    >
      <div className="container-wide grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-6 order-2 md:order-1">
          <div className="relative aspect-[4/5] overflow-hidden bg-overlay">
            <img
              alt="A jeweler hand-finishing a gold piece in the Velmora studio"
              data-strk-img-id="brand-story-image"
              data-strk-img="[brand-story-eyebrow] [brand-story-title] jeweler hands finishing gold jewelry in warm studio"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              loading="lazy"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-6 order-1 md:order-2 flex flex-col items-start gap-5">
          <span id="brand-story-eyebrow" className="eyebrow">Our story</span>
          <h2
            id="brand-story-title"
            className="font-serif font-light text-3xl md:text-5xl text-ink leading-[1.08] tracking-[-0.01em] max-w-xl"
          >
            Quietly made, designed to be lived in.
          </h2>
          <p
            id="brand-story-body"
            className="font-sans text-base md:text-[17px] text-ink-muted leading-relaxed max-w-md"
          >
            Velmora began with a simple idea — that the jewelry you wear most
            should feel as considered as the moments you wear it for. Each
            piece is sketched in our studio, cast in small batches, and
            hand-finished in 18K gold plating designed to wear in, not wear
            out.
          </p>
          <p className="font-sans text-base md:text-[17px] text-ink-muted leading-relaxed max-w-md">
            We use hypoallergenic, nickel-free metals and tarnish-resistant
            coatings so your pieces feel good from the first wear to the
            hundredth.
          </p>
          <Link
            to="/about"
            className="link-underline inline-flex items-center gap-2 mt-2 font-sans text-sm text-ink hover:text-gold transition-colors"
          >
            Read our story
            <ArrowRight strokeWidth={1.5} className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
