import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BRAND_STORY_IMAGE } from "@/data/realImages";

export default function BrandStory() {
  return (
    <section className="bg-bone">
      <div className="container-page py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden bg-cream order-1">
            <img
              alt="Atelier hands shaping fine gold jewelry"
              src={BRAND_STORY_IMAGE}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-5 order-2 lg:pl-4">
            <p className="eyebrow">Our Story</p>
            <h2
              id="brand-headline"
              className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] text-ink"
            >
              A small atelier, with a quiet promise.
            </h2>
            <p
              id="brand-text"
              className="mt-7 text-ink/75 text-base sm:text-[17px] leading-relaxed"
            >
              Velmora began at a workbench in Lisbon with a simple idea — fine
              jewelry should feel as easy to wear as it is beautiful. Every
              piece is sketched, cast and finished in small batches, by hand,
              in a studio that fits just six.
            </p>
            <p className="mt-4 text-ink/75 text-base sm:text-[17px] leading-relaxed">
              We work with hypoallergenic, nickel-free metals and a thick layer
              of 18K gold plating. The result: demi-fine pieces that hold their
              finish, and an everyday ritual you'll reach for.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center text-[11px] uppercase tracking-[0.18em] text-ink link-underline"
            >
              Read the full story
              <ArrowRight className="w-3.5 h-3.5 ml-2 -mt-0.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
